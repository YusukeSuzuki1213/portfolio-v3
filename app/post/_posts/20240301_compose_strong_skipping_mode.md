---
title: Jetpack Composeの「Strong Skipping Mode」についてわかりやすく解説する
description: Jetpack Composeの「Strong Skipping Mode」についてわかりやすく解説しています。
titleIconUrl: /logo/android.svg
publishDate: 2024/03/01
---

# **はじめに**
Jetpack Composeの`Strong Skipping Mode`は開発者にとって嬉しい機能である一方、Composeの深い知識が必要なため理解が難しいと思います。

以下の記事で詳細に説明されていますが、英語で書かれていたり前提知識が必要な箇所もあるため、本記事でわかりやすく解説します。

https://medium.com/androiddevelopers/jetpack-compose-strong-skipping-mode-explained-cbdb2aa4b900


# **Strong Skipping Modeとは？**
下記を可能にする機能のことです。

1. **unstableなパラメータをスキップ可能にする**
2. **unstableなキャプチャ[^1]を持つラムダもメモ化する**


順番に解説していきます。

## **1. unstableなパラメータをスキップ可能にする**
これを理解するためにはStability(stable/unstable)について理解する必要があります。以下の記事で解説しているのでぜひ参考にしてください。

https://yusuke-suzuki.site/post/20240229_compose_stability

今まで(=Strong Skipping Modeが無効な場合)はRecompositionをスキップするためには、パラメータをstableにする必要がありました。

Composeにおいてパフォーマンスの問題が発生したときに、下記のような取り組みでパラメータをstableにした経験がある人は少なくないと思います。

- [kotlinx.collections.immutable](https://github.com/Kotlin/kotlinx.collections.immutable)を使用してListをimmutableにする
- [StableMaker](https://developer.android.com/reference/kotlin/androidx/compose/runtime/StableMarker)を使用してクラスをstableまたはimmutableにする
- [Stability configuration file](https://developer.android.com/jetpack/compose/performance/stability/fix#configuration-file)を使用してコンパイル時にStableなクラスを提供する


**Strong Skipping Modeを使用するとunstableなパラメータでもRecompositionをスキップできるようになります。**(つまりrestatableなComposable関数はスキップ可能になる)

[記事中](https://medium.com/androiddevelopers/jetpack-compose-strong-skipping-mode-explained-cbdb2aa4b900)のコードを引用して具体例で説明します。


```kt
@Composable
fun CollectionScreen(viewModel: CollectionViewModel = viewModel()) {
  var favorite by remember { mutableStateOf(false) }
  Column {
    FavoriteButton(isFavorite = favorite, onToggle = { favorite = !favorite })
    ArticleList(viewModel.articles)
  }
}

@Composable
fun ArticleList(
  articles: List<Article>, // List = Unstable, Article = Stable
  modifier: Modifier = Modifier // Stable
) {
  // …
}
```

Strong Skipping Modeが無効であれば`FavoriteButton`の`onToggle`が実行されたとき、`ArticleList`はRecompositionされてしまいます。(`ArticleList`はunstableなパラメータ`articles`をもつため)

Strong Skipping Modeを有効にすると、`articles`が変更されていないので`ArticleList`のRecompositionをスキップすることができます。

### **unstableパラメータの変更有無の判断方法**
stableなパラメータは`Object.equals()`(`==`)でパラメータに変更の有無を判断していますが、unstableなパラメータはどのようにパラメータの変更有無の判断をしているのでしょうか？

**unstableなパラメータは`===`によって変更の有無を判断する**ようです。つまりインスタンスのメモリの参照先のアドレスを比較して、同じインスタンスであるか比較します。


## 2. **unstableなキャプチャを持つラムダもメモ化する**
今まで(=Strong Skipping Modeが無効の場合)、Composable関数のラムダ内でunstableな変数を参照していると(=キャプチャ)、Recompositionをスキップすることができませんでした。

例えば以下のComposable関数があったとき、`viewModel`がunstableであればRecompositionのたびにラムダが再生成され、`NumberComposable`もRecompositionをスキップできませんでした。


```kt
@Composable
fun NumberComposable(
  current = number,
  onValueChange = { viewModel.numberChanged(it) }
) { ... }
```

このラムダの再生成を防ぐために以下のような取り組みをしていた人は少なくないと思います。

- 関数参照(Function Reference)を使用する
- lambdaを`remember`する

**Strong Skipping Modeを有効にするとラムダがunstableな変数を参照していても、ラムダが再生成されなくなります。**

内部的にはComposeコンパイラがラムダを`remeber`でラップすることにより再生成を防いでくれるようです。

```kt
@Composable 
fun  MyComposable (unstableObject: Unstable ,steadyObject: Stable ) { 
   val lambda = remember(unstableObject,steadyObject) { 
     { 
       use(unstableObject) 
       use(stableObject) 
     } 
  } 
}
```

(unstableなkeyは`===`を使用して比較され、stableなkeyは`Object.equals()`を使用して比較されるので、厳密には通常の`remember`ではない)

# **所感**
Composeのパフォーマンスを考慮しだすと、Composeの深い理解やStabilityを意識したコードにしなければいけないのは、よくないよねーということなのでしょう。

記事中で以下のような文章があり、Composeの開発者も課題に思っていたようです。

> We don’t want you to have to be experts in Compose internals in order to write good Compose code!

(翻訳: 良いComposeコードを書くために、Compose内部の専門家である必要はありません！)


今までもパフォーマンスの問題がなければStabilityなど意識しなくて良い内容ではありましたが、Strong Skipping Modeのおかげで実装するときに、考えることが減るのはとても大きなメリットだと思いました。

Recompositionして欲しいのにされないという問題が発生する可能性もはらんでいるので、慎重に進めるというのも納得しました。


以上です。参考になればぜひシェアをお願いします！

[^1]: ラムダ外の変数を参照することです。
