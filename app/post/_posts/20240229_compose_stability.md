---
title: Jetpack ComposeのStabilityについてわかりやすく解説する
description: Jetpack ComposeのStability(stableとunstable)についてわかりやすく解説しています。
titleIconUrl: /logo/android.svg
publishDate: 2024/02/29
---

# **はじめに**
ComposeのStabilityはComposableのRecomposeによるパフォーマンス低下を改善するための重要な概念の一つです。

しかしながら少し複雑で理解しにくい部分があるため本記事でStabilityについてわかりやすく解説します。

:::message
[Strong Skipping Mode](https://medium.com/androiddevelopers/jetpack-compose-strong-skipping-mode-explained-cbdb2aa4b900)の登場で意識する機会は減りそうです。

Strong Skipping Modeは以下の記事で詳しく解説しているので、ぜひ参考にしてください。

[Jetpack Composeの「Strong Skipping Mode」についてわかりやすく解説する](https://yusuke-suzuki.site/post/20240301_compose_strong_skipping_mode)
:::


# **Stabilityとは**
結論から説明するとStabilityとは「**不要なRecompositionをスキップして効率的にUIを更新するための概念**」のことです。

この意味が少しわかりづらいと思うので順を追って説明していきます。

# **Recompositionについて**
RecompositionとはComposable関数のパラメータが変更されたときに、Composable関数を再実行することです。

例えば、以下のようなComposable関数があるとします。
(Android Developersの説明わかりやすいので引用して説明します)

```kt
@Composable
fun LoginScreen(showError: Boolean) {
    if (showError) {
        LoginError()
    }
    LoginInput()
}

@Composable
fun LoginInput() { /* ... */ }

@Composable
fun LoginError() { /* ... */ }
```

Composable関数`LoginScreen`の`showError`パラメータが変更されるとRecompositionが発生し、下図のようにCompositionツリーが更新されます。

![](/post/20240229_compose_stability/1.png)
_Recompositionが発生してCompositionツリーが更新されている様子_


また効率的にUIを更新するために、以下2つの条件を満たしたComposable関数はRecompositionをスキップすることができます。

1. **Composable関数のパラメータに変更がない**
2. **Composable関数のパラメータが`stable`である**

条件の詳細を順番に解説します。

## **1. Composable関数のパラメータに変更がない**
これは全てのパラメータを`Object.equals()`で比較することで判断をします。

例えば、`initialUiState`と`updatedUiState`はメモリの参照先は違いますが同じ`text`の文字列`hoge`を持っているので、`Object.equals()`は`true`となります。

```kt
data class UiState(
  val text: String
)

val initialUiState = UiState(
  text = "hoge"
)
val updatedUiState = UiState(
  text = "hoge"
)

initialUiState.equals(updatedUiState) // => true
initialUiState === updatedUiState     // => false
```

## **2. Composable関数のパラメータが`stable`である**
ここで登場するのがStabilityの概念です。

Composable関数のパラメータは`stable`か`unstable`に分類されます。

下記の2つのどちらかを満たすパラメータを`stable`と言います。(満たさないパラメータを`unstable`と言います)

- **(1) 型がimmutable**
- **(2) Composeランタイムに変更が通知される**


### **(1) 型がimmutable**
型がimmutableであるとは、インスタンス生成したあと公開されているプロパティの値を変更できないことを表します。つまりインスタンスのプロパティを変更したい場合は新しくインスタンスを作り直す必要があります。

#### **immutableの例**
`Boolean`,`Float`,`Int`などのプリミティブ型や`String`についてもimmutableな型となります。

以下のクラスもimmutableとなります。

```kt:Post.kt
data class Post(
  val id: Int,
  val title: String,    
  val description: String,
)
```

すべてのプロパティはvalで定義されたプリミティブ型であり、`Post`のプロパティの値を変更するには新しくインスタンスを作り直す必要があるからです。

#### **immutableでない例**
以下のクラスはimmutableではありません。

```kt:Title.kt
data class Title(
  var text: String
)
```

`Title`クラスのプロパティ`text`が`var`で定義されており、プロパティの値を変更が可能であるためです。


### **(2) Composeランタイムに変更が通知される**
以下のようにMutableState、SnapshotStateMap、SnapshotStateListなどを使用したプロパティであればComposeランタイが値の変更を知ることができます。

例えば`text`の型は`MutableState<String>`となり、`text.value = "hoge"`のように記述することで値を変更できます。しかしながらこの値の変更をComposeランタイムに通知されるようになります。

```kt:Hoge.kt
data class Hoge(
  val text by mutableStateOf("")  
)
```

# **まとめ**
前述の通り、StabilityとはRecompositionと深いつながりがあり、不要なRecompositionをスキップして効率的にUIを更新するために用いられることがわかったかと思います。

参考になれば幸いです。



# **参考**
https://developer.android.com/jetpack/compose/performance/stability

https://developer.android.com/jetpack/compose/lifecycle