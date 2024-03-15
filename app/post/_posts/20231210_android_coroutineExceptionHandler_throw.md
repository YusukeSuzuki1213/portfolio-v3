---
title: 【Android】CoroutineExceptionHandlerのErrorもThrowしよう
description: CoroutineExceptionHandlerは回復不可能な例外であるErrorをhandleするためThrowしたほうが良いかもという話を解説しています。
titleIconUrl: /logo/android.svg
publishDate: 2023/12/10
---


# はじめに
[Shibuya.apk #45](
https://shibuya-apk.connpass.com/event/299317/)　にて以下の発表がありました。

https://speakerdeck.com/lycorptech_jp/dont-use-runcatching


# 要約
本記事に必要な部分のみを要約すると下記の通りです。

- runCachingはThrowableをcatchするため、Errorも含まれている。(ErrorはThrowableのサブタイプのため)
- Errorは回復不可能な例外であり、アプリはただちに終了すべき

# この内容を受けて
優秀なAndroidエンジニアから[CoroutineExceptionHandler](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines/-coroutine-exception-handler/)についても同じことが言えるのではないかという提案がありました。

CoroutineExceptionHandlerはコルーチン内でキャッチされなかった例外を処理することができ、実装は以下のようになっています。

```kotlin
public inline fun CoroutineExceptionHandler(crossinline handler: (CoroutineContext, Throwable) -> Unit): CoroutineExceptionHandler =
    object　:　AbstractCoroutineContextElement(CoroutineExceptionHandler), CoroutineExceptionHandler {
        override fun handleException(context: CoroutineContext, exception: Throwable) =
            handler.invoke(context, exception)
    }
```

`handle`のラムダに実装者はエラー時の処理を記述することでエラーハンドリングを行うことができます。

```kotlin
// 例
private val exceptionHandler: CoroutineExceptionHandler = CoroutineExceptionHandler { _, throwable ->
    // エラー時の処理
}

..

viewModelScope.launch(exceptionHandler) {
    // 非同期処理
}
```

ただこの`handle`は`Throwable`を引数にとるので前述の通り、Errorも含まれてしまいます。

Errorの場合はアプリをただちに終了させることが望ましいので、このまま使用するのはよろしくありません。


# ErrorはThrowするCoroutineExceptionHandlerを作る
前述の下記の通り実装をする必要があります。

```kotlin
private val exceptionHandler: CoroutineExceptionHandler = CoroutineExceptionHandler { _, throwable ->
    if (throwable !is Exception) throw throwable
    // エラー時の処理
}
```

ただ毎回これを書くのは冗長ですし、Exception判定の実装漏れが発生する可能性があります。

そこでCoroutineExceptionHandlerの実装を踏襲して、下記のようなメソッドを作成すると良さそうです。

```kotlin
inline fun throwableCoroutineExceptionHandler(crossinline handler: (CoroutineContext, Exception) -> Unit): CoroutineExceptionHandler =
    object　:　AbstractCoroutineContextElement(CoroutineExceptionHandler), CoroutineExceptionHandler {
        override fun handleException(context: CoroutineContext, exception: Throwable) {
            if (exception !is Exception) throw exception            
            handler.invoke(context, exception)
        }
    }

```

使用方法は下記のようになります。

```kotlin

private val throwablExceptionHandler = throwableCoroutineExceptionHandler { _, exception ->
   // エラー時の処理
}

..

viewModelScope.launch(exceptionHandler) {
    // 非同期処理
}
```

# おわりに
以上です！

参考になれば幸いです！
