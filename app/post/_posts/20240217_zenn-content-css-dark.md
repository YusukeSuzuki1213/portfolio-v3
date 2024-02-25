---
title: npmパッケージ『zenn-content-css-dark』を公開しました。
titleIconUrl: /logo/scss.svg
publishDate: 2024/02/25
description: zenn-content-css-darkのデモページです。
---

# **`zenn-content-css-dark` とは**

`zenn-content-css`のダークテーマ用のパッケージです。

https://www.npmjs.com/package/zenn-content-css-dark

## **`zenn-content-css`とは**

`zenn-markdown-html`というパッケージで markdown から変換された HTML に使う CSS のパッケージです。

基本的には[zenn.dev](https://zenn.dev/)の記事のレイアウトを整えるのに使用されている CSS のようです。

`zenn-content-css`と`zenn-markdown-html`の詳細 ↓
https://github.com/zenn-dev/zenn-editor

# **パッケージ公開の経緯**

`zenn-content-css`は zenn.dev で使用されていることもあり、ダークテーマには対応していません。

https://github.com/zenn-dev/zenn-community/issues/267#issuecomment-1668958615

したがって、以下のようにテーブルなどのカラーをダークカラーの背景で使用すると違和感がありました。

![表示例](/post/20240217_zenn-content-css-dark/1.png =300x)
_ダークカラーの背景で zenn-content-css を使用した際の表示例_

`zenn-content-css`の違和感のある CSS クラスのみ上書きすることもできそうでしたが、どうせならパッケージとして公開することにしました。

# **実装内容**

基本的に[index.scss](https://github.com/zenn-dev/zenn-editor/blob/canary/packages/zenn-content-css/src/index.scss)に定義されているカラーパレットを変更しています。

```scss:index.scss
/* カラーパレット */
$white: rgb(255 255 255);
$zinc-400: rgb(161 161 170);
$zinc-500: rgb(113 113 122);
$zinc-600: rgb(82 82 91);
$zinc-700: rgb(63 63 70);
$zinc-800: rgb(39 39 42);
$zinc-900: rgb(24 24 27);
$blue-400: rgb(96 165 250);
$red-500: rgb(239 68 68);
$red-800: rgb(153 27 27);
$yellow-500: rgb(234 179 8);
$yellow-700: rgb(161 98 7);

/* 目的別カラー変数 */
$text-color: $white;
$text-color-darker: $zinc-400;
$border-color: $zinc-600;
$link-text-color: $blue-400;
...
```

カラーについては Tailwind で使用されているカラーを使用しています。

# **使用方法**

```tsx
import "zenn-content-css-dark";
```

スタイルを適用したい要素に `class="znc-dark"` を指定します。

```tsx
<div class="znc-dark">
</div>
```

# **デモ**

以下は`zenn-content-css-dark`のデモになります。

(このブログは`zenn-content-css-dark`を使用して記事を書いています。)

## 中見出し

### 小見出し

これは普通のテキストです。

**太字**

_イタリック_

~~取り消し線~~

> 引用文
> このように記述できます。

- リストアイテム 1
- リストアイテム 2
  - サブアイテム 1
  - サブアイテム 2
  * サブアイテム 3

1. 番号付きリスト 1
2. 番号付きリスト 2
   1. サブリスト 1
   2. サブリスト 2

これが`inline code`です。

<!-- TODO: ◯◯について追記する -->

```js:foo.js
// コードブロック
console.log("Hello!");
```

```diff js:sample.js
- console.log("hello");
+ console.log("good morning");
```

---

[リンク](https://zenn.dev)

![画像](https://storage.googleapis.com/zenn-user-upload/gxnwu3br83nsbqs873uibiy6fd43 =250x)
_キャプション_

[![](https://storage.googleapis.com/zenn-user-upload/gxnwu3br83nsbqs873uibiy6fd43)](https://zenn.dev)

| Head | Head | Head |
| ---- | ---- | ---- |
| Text | Text | Text |
| Text | Text | Text |

## 埋め込み

### Zenn

https://zenn.dev/zenn/articles/markdown-guide#%E3%82%B3%E3%83%B3%E3%83%86%E3%83%B3%E3%83%84%E3%81%AE%E5%9F%8B%E3%82%81%E8%BE%BC%E3%81%BF

### X

https://twitter.com/jack/status/20

https://x.com/jack/status/20

### YouTube

https://www.youtube.com/watch?v=WRVsOCh907o

### GitHub

https://github.com/octocat/Hello-World/blob/master/README

https://github.com/octocat/Spoon-Knife/blob/main/README.md#L1-L3

## コールアウト

### Warning

:::message
これはコールアウトの例です。
:::

### Alert

:::message alert
これは警告のコールアウトです。
:::

### アコーディオン

:::details アコーディオン
表示したい内容
:::

## フッターノート[^1]

[^1]: フッターノートの内容
