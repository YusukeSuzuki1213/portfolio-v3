---
title: 【Android開発】Notification Channelごとに通知をグループ化する方法
description: 'Androidのプッシュ通知をチャンネルごとにグループ化する方法を紹介します。'
titleIconUrl: /logo/android.svg
publishDate: 2020/09/10
---

# 概要
下記動画のように、プッシュ通知をチャンネルごとにグループ化する方法を紹介します。

https://youtu.be/wYn0aQcu7Ok

チャンネルごとに、プッシュ通知をグループ化して受信トレイに表示させたいという方には参考になると思います。

また、Githubにソースコードをあげているので、参考にしてみてください。

https://github.com/YusukeSuzuki1213/notification-channel-group

注意点はOS8以上でなければ通知チャンネルを使用することができないことと、OS7以上でなければ通知のグループ化を実装できないことです。

# 実装方法
## 1. チャンネルの作成
まず下記のようにチャンネルを作成するメソッドを作成します。
```kotlin
fun createChannel(context: Context) {
    NotificationManagerCompat.from(context).createNotificationChannels(
        ChannelItem.values().map {
            NotificationChannel(
                it.channelId,
                context.getString(it.getTextStringRes()),
                NotificationManager.IMPORTANCE_HIGH
            )
        }
    )
}
```
`createNotificationChannels`において、アプリの通知チャンネルを作成しています。引数には`List<NotificationChannel>`型のインスタンスを指定しています。

[NotificationChannel](https://developer.android.com/reference/android/app/NotificationChannel)クラスはチャンネルの設定についてのクラスで、インスタンス化には、チャンネルのId、チャンネルの名前、Importanceを指定しています。Importanceとは、通知受信時に音を出すか、ヘッドアップ通知とするかなどの通知の重要度を指定することができます。詳しくは[Notification importance](https://developer.android.com/guide/topics/ui/notifiers/notifications#importance)を参考にしてください。

### チャンネル情報をまとめたクラスの作成
`ChannelItem.values().map`としているように、今回は複数チャンネルを作成するため、下記のようにチャンネルの情報をまとめた`ChannelItem`というEnumクラスを作成します。


```kotlin
enum class ChannelItem(val channelId: String) {
    CHANNEL_1("notification_channel_1"),
    CHANNEL_2("notification_channel_2"),
    CHANNEL_3("notification_channel_3");

    companion object {
        @JvmStatic
        fun value(channelId: String) : ChannelItem? {
            return try {
                values().first {it.channelId == channelId}
            } catch (_: NoSuchElementException) {
                null
            }
        }
    }

    fun getTextStringRes(): Int {
        return when(this) {
            CHANNEL_1 -> R.string.channel_name_notification_1
            CHANNEL_2 -> R.string.channel_name_notification_2
            CHANNEL_3 -> R.string.channel_name_notification_3
        }
    }
}
```

EnumクラスのプロパティにチャンネルのIdを持たせています。さらに、`getTextStringRes()`というメソッドでEnumクラスのインスタンスから、チャンネルの名前を取得できるようにしています。

上記の実装でチャンネルの作成ができます。

## 2. プッシュ通知の作成
次に下記のように、実際にプッシュ通知を作成するメソッドを作成します。

```kotlin
fun localPush(context: Context, item: PushMessageItem) {

    val channelItem = ChannelItem.value(item.channelId) ?: return

    val builderParent = NotificationCompat.Builder(context, item.channelId)
        .setPriority(NotificationCompat.PRIORITY_HIGH)
        .setGroup(item.channelId)
        .setSmallIcon(R.drawable.ic_launcher_foreground)
        .setStyle(
            NotificationCompat.InboxStyle()
                .setSummaryText(
                    context.getString(channelItem.getTextStringRes())
                ))
        .setGroupSummary(true)
        .setAutoCancel(true)
    
    val builderChild = NotificationCompat.Builder(context, item.channelId)
        .setContentTitle(item.title)
        .setContentText(item.body)
        .setAutoCancel(true)
        .setDefaults(NotificationCompat.DEFAULT_SOUND)
        .setPriority(NotificationCompat.PRIORITY_HIGH)
        .setGroup(item.channelId)
        .setSmallIcon(R.drawable.ic_launcher_foreground)        
}
```
実装のイメージは、`builderParent`と呼ばれる親通知の中に、`builderChild`と呼ばれる複数の子通知が追加されていく感じです。

### builderParent について
画像のように、通知グループの概要を表示する通知になっています。

![builderParent](/post/20200910_android_notification_channel/1.png)


- `setGroup()`について
グループを識別する文字列を渡し、親通知をグループに追加しています。


- `setGruoupSummary()`について
引数に`true`を渡すことで、`builderParent`がグループ概要を表示する親通知であるということ示しています。


- `setStyle()`について
通知のレイアウトを指定しています。今回は[NotificationCompat.InboxStyle](https://developer.android.com/reference/androidx/core/app/NotificationCompat.InboxStyle)を指定することで、通知の概要を追加しています。
詳しくは[展開可能な通知を作成する](https://developer.android.com/training/notify-user/expanded#inbox-style)を参考にしてください。

### builderChild について
画像のように、実際のプッシュ通知の情報を持ったインスタンスになります。通知音の設定や、タイトルの指定などを行なっています。

![builderChild](/post/20200910_android_notification_channel/2.png)


また`setGroup()`で親通知と同じグループを識別文字列を指定することで、グループに属する子通知であることを示しています。

### プッシュ通知の表示
下記コードにおいて、実際にプッシュ通知を表示しています。
```kotlin
 NotificationManagerCompat.from(context).run {
        notify(channelItem.ordinal, builderParent.build())
        notify(System.currentTimeMillis().toInt(), builderChild.build())
 }
```
`notify`の第一引数には、通知のIDを指定しています。このIDが通知を一意に識別するIDとなっています。このIDが重複してしまうと、通知が上書きされてしまいます。逆にIDが一意だと、異なる通知として表示されます。

親通知は通知が来るたびに、異なる通知として扱う必要がないため、`channelItem.ordinal`を指定して、通知グループごと同じIDをしてしています。

子通知は、通知が上書きされないように、タイムスタンプをIDとして指定しています。

# まとめ
プッシュ通知をチャンネルごとにグループ化する方法を紹介しました。

参考になればうれしいです！
