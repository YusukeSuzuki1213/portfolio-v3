---
title: 'Fragments in Composeを実現する方法'
description: 'AndroidFragmentを使用してFragments in ComposeでUIを組む方法を解説します。'
titleIconUrl: /logo/android.svg
publishDate: 2024/06/14
---

# **はじめに**
`androidx.fragment:fragment-*:1.8.0`がリリースされ、`AndroidFragment`composableがstableバージョンで使用できるようになりました。

以前までは、Fragments in Composeを実現するために、`AndroidViewBinding`を使うことが推奨されていました。

しかし、`androidx.fragment`の`1.8.0`のリリースのノート[^1]に以下のような記述がある通り、今後は`AndroidFragment`が`AndroidViewBinding`の代替となるようです。

> This should be used as a direct replacement for the previously recommended approach of using AndroidViewBinding to inflate a Fragment.

以下のポストにある通り、`AndroidFragment`は`AndroidViewBinding`を使用する方法で解決できなかった多くの問題点を解決してくれているとのことです。

![](/post/20240615_fragments_in_compose/1.png =512x)
_https://x.com/ianhlake/status/1775710793897525619_


本記事では、Fragments in Composeの新しい実装方法となった`AndroidFragment`の使用方法と`AndroidFragment`の内部実装について解説します。


# **`AndroidFragment`の使用方法**
例えば、以下のようなFragmentとレイアウトファイルがあるとします。

```kt:SampleFragment.kt
...
class SampleFragment : Fragment(R.layout.fragment_sample) {
    lateinit var binding: FragmentSampleBinding
    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = FragmentSampleBinding.inflate(layoutInflater)
        return binding.root
    }
}
```
```xml:fragment_sample.xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent">
    <TextView
        android:id="@+id/textView"
        android:layout_width="match_parent"
        android:layout_height="match_parent" />
</androidx.constraintlayout.widget.ConstraintLayout>
```

`AndroidFragment`を使用して以下のように記述するだけで、ComposeからFragmentを使用することができます。

```kt:HogeScreen.kt
@Composable
fun HogeScreen() {    
    AndroidFragment<SampleFragment>(
        onUpdate = { fragment ->
            fragment.binding.textView.text = "Fragment in Compose!!"
        }
    )
    ...
}
```

実行すると以下のように、TextViewに「Fragment in Compose!!」という文字列が表示されていることがわかると思います。

![](/post/20240615_fragments_in_compose/2.png =256x)
_実行結果_

# **`AndroidFragment`の内部実装**

`AndroidFragment`の内部実装を解説していきます。

## **1. `AndroidFragment`のパラメータについて**

`AndroidFragment`は以下のように定義されています。

```kt
@Composable
<T : Fragment> AndroidFragment(
    clazz: Class<T>,
    modifier: Modifier,
    fragmentState: FragmentState,
    arguments: Bundle,
    onUpdate: (T) -> Unit
)
```

それぞれのパラメータは以下のような役割になります。
- `clazz`: 作成したいFragmentのクラス
- `modifier`: レイアウトに適用するModifier
- `fragmentState`: Fragmentの状態保持用のState(後述)
- `arguments`: Fragmentに渡すarguments（これあるのだいぶ嬉しい）
- `onUpdate`: 作成されたFragmentのインスタンスを提供するコールバック

## **2. どのようにFragmentのインスタンスを作成しているか**
`AndroidFragment`の内部実装を見ると以下のコードがあります。

```kt:AndroidFragment.kt
DisposableEffect(...) {
    val fragment = fragmentManager.findFragmentById(container.id)
        ?: fragmentManager.fragmentFactory.instantiate(
            context.classLoader, clazz.name
        )
        ...
}
```

すでにFragmentがfragmentManagerに追加されていればそのインスタンスを取得し、追加されていなければ、Fragmentのクラス名(=`clazz.name`)を指定して新たにFragmentのインスタンスを作成しています。

## **3. どのようにFragmentをComposeに表示しているか？**
以下のように`FragmentContainerView`を`AndroidView`に渡すことで表示しています。
(ここは`AndridViewBinding`を使用した方法を踏襲していそうですね！)

`FragmentContainerView`は、指定された場所にフラグメントを表示するためのコンテナであり、ここに作成するFragmentのインスタンスをaddしています。

```kt:AndroidFragment.kt
lateinit var container: FragmentContainerView
AndroidView({
    container = FragmentContainerView(context)
    container.id = hashKey
    container
}, modifier)

...

DisposableEffect(...) {
    val fragment = fragmentManager.findFragmentById(container.id)
        ?: fragmentManager.fragmentFactory.instantiate(
            context.classLoader, clazz.name
        ).apply {
            ...
            fragmentManager.beginTransaction()
                    .setReorderingAllowed(true)
                    .add(container, this, "$hashKey")
                    .commitNow()
        }
        ...
}

```


## **3. どのようにFragmentの状態保持をしているか**
Configuration Changedやプロセスのキルが発生したときのために、`AndroidFragment`は`fragmentState`をパラメータとして受け取ります。これはFragmentの状態を保存するために使用されます。

デフォルトではパラメータとして`rememberFragmentState()`を使用しており、以下のように定義されています。

```kt:FragmentState.kt
@Composable
fun rememberFragmentState(): FragmentState {
    return rememberSaveable(saver = fragmentStateSaver()) {
        FragmentState()
    }
}

@Stable
class FragmentState(
    internal var state: MutableState<Fragment.SavedState?> = mutableStateOf(null)
)

private fun fragmentStateSaver(): Saver<FragmentState, *> = Saver(
    save = { it.state },
    restore = { FragmentState(it) }
)
```
`rememberSaveable`を使用することで、Acitivityの破棄に耐えられるようにFragmentStateを保持しています。FragmentStateは、Fragmentの状態情報を管理するクラスである`Fragment.SavedState?`のMutableStateを保持しています。

さらに、`fragmentState`は`AndroidFragment`内で以下のように使用されています。
```kt:AndroidFragment
DisposableEffect(...) {
    val fragment = fragmentManager.findFragmentById(container.id)
        ?: fragmentManager.fragmentFactory.instantiate(
            context.classLoader, clazz.name
        ).apply {
            setInitialSavedState(fragmentState.state.value)
            ...
        }
        onDispose {
            val state = fragmentManager.saveFragmentInstanceState(fragment)
            fragmentState.state.value = state
            ...
        }
}
```

fragmentのインスタンス取得後、`setInitialSavedState()`を使用して、`Fragment.SavedState?`の初期値をセットしています。これがFragmentの状態の復元処理になります。

そして、`AndroidFragment`がCompositionから退場したときに、fragmentManager経由で`Fragment.SavedState?`をfragmentStateに保存しています。


# **おわりに**
`AndroidFragment`について解説しました。

まだまだFragmentが残っているプロダクトが多いのが現状だと思うので、うまく`AndroidFragment`を使用してCompoe化を進めていきましょう！！

# **参考**
https://developer.android.com/jetpack/androidx/releases/fragment

https://developer.android.com/reference/kotlin/androidx/fragment/compose/package-summary

https://cs.android.com/androidx/platform/frameworks/support/+/androidx-main:fragment/fragment-compose/src/main/java/androidx/fragment/compose/AndroidFragment.kt

[^1]: [androidx.fragment version 1.8のリリースノート](https://developer.android.com/jetpack/androidx/releases/fragment#version_18_2)

