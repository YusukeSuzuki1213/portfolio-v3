---
title: 【Android】Github Actionsを用いてFirebase Test Lab上で実機テストをする方法
description: 本記事ではGithub Actionsを使用して、Firebase Test Labで実機テストを行う方法を紹介します。
titleIconUrl: /logo/android.svg
publishDate: 2020/05/23
---
# 概要
本記事ではGithub Actionsを使用して、Firebase Test Labで実機テストを行う方法を紹介します。
具体的には、プルリクエストをトリガーにGithub Actionsのworkflowが起動し、Firebase Test Lab上でRoboテストを、自動で走らせる方法を紹介します。

# きっかけ
これを試したきっかけは、職場でライブラリのアップデートをした際に、クラッシュ等がないかの確認のため、実機をポチポチするという作業がとても面倒に感じられ、Firebase Test Labで自動化できたら良いなと思ったためです。

さらにその調査がプルリクをトリガーに走ってくれたら素敵だと思いGithub Actionsを用いました。

# はじめに
Androidの実機を用いたテストはとても骨が折れるといわれています。
その理由の一つとして、端末の多さがあげられます。(参考: [Android端末一覧（Wikipedia）](https://ja.wikipedia.org/wiki/Android%E7%AB%AF%E6%9C%AB%E4%B8%80%E8%A6%A7))
端末数が多いと、ハードウェアのスペック、画面サイズ、OSのバージョンなどが多様化し、それぞれに対して実機テストをしなければなりません。すべてのAndroid端末を用意してテストをすることは、とてもコストがかかります。


この問題を解決する方法の一つに、下記のようなクラウド型モバイルアプリテストサービスが存在します。

- [Firebase Test Lab](https://firebase.google.com/docs/test-lab?hl=ja)
- [AWS Device Farm](https://aws.amazon.com/jp/device-farm/)
- [Visual Studio App Center](https://azure.microsoft.com/ja-jp/services/app-center/)

このようなサービスを用いると、端末を手元に持たずにクラウド上で実機テストが可能になります。
つまり「このAPKを、Nexus6とGoogle Pixel 3の端末で、実機テストおねがいー」というようなことができるようになります。

しかしながら、いちいちAPKを作成して、それを手動でクラウドサービスに登録するのは面倒くさいですよね？
例えば「検証ブランチであるdevelopブランチに変更が加えられたら、それをいちいちビルドしてAPKを作成して、クラウドサービスに登録してテストをする」というような手間がかかります。


この問題を解決してくれるのが、**CI/CD**と呼ばれるものです。
**CI**とはContinuous Integration(継続的インテグレーション)の略であり、テストやビルドを自動で行い、開発効率を上げる手法のことを言います。
**CD**とはContinuous DeliveryあるいはContinuous deployment(継続的デリバリーあるいは継続的デプロイ)の略であり、コードを自動デプロイする手法のことを言います。
より正確な説明は[Continuous integration(Wikipedia)](https://en.wikipedia.org/wiki/Continuous_integration), [Continuous delivery(Wikipedia)](https://en.wikipedia.org/wiki/Continuous_delivery)を参考にしてください。


このCI/CDを使用すると、手作業で行なっていた実機テストまでのフローを自動化することができます。
つまり、先の例でいうと「developブランチの変更のコードを検証→ビルドしてAPKを作成→クラウドサービスに登録して実機テスト」を自動化することができます。

したがって、CI/CDツールを利用して、クラウド型モバイルアプリテストサービスを使用すれば、Androidの実機テストを効率的に行えることがわかります。

前置きが長くなりましたが、上述の内容を背景として **「Github Actionsと呼ばれるCI/CDツールを用いて、自動でFirebase Test Lab上でRoboテストを実施する方法」** を紹介します。

# Github Actionsとは？
GitHub Actionsとは、[公式サイト](https://help.github.com/en/actions/getting-started-with-github-actions/about-github-actions)によると下記のように説明されています。
> GitHub Actions help you automate your software development workflows in the same place you store code and collaborate on pull requests and issues. You can write individual tasks, called actions, and combine them to create a custom workflow. Workflows are custom automated processes that you can set up in your repository to build, test, package, release, or deploy any code project on GitHub.

つまり、Github Actionsは、Github上で「Action」と呼ばれるタスクを組み合わせて「Workflow」とし、それを実行できるCI/CDサービスです。

例えば、Github上でプルリクエストがあったら[checkout](https://github.com/actions/checkout)と呼ばれるActionを用いて、指定したリポジトリからソースコードをチェックアウトし、[setup-java](https://github.com/actions/setup-java)というActionを用いて、Javaの環境を構築して、Ktlintと呼ばれるリントタスク実行するWorkflowを実行するといったことが可能になります。

Actionは、[マーケットプレイス](https://github.com/marketplace)で公開されており、用途にあわせて入手することが可能です。

# Firebase Test Labとは？
Firebase Test Labとは[公式サイト](https://firebase.google.com/docs/test-lab)によると、下記のように説明されています。
> Firebase Test Lab is a cloud-based app-testing infrastructure. With one operation, you can test your Android or iOS app across a wide variety of devices and device configurations, and see the results—including logs, videos, and screenshots—in the Firebase console.

冒頭でも説明した通り、Firebase Test Labとはクラウド型のアプリテスト基盤のことであり、色々なデバイスをまとめてテストすることができます。それに加えて、Firebase console上で、ログ、テストの様子を写した動画、スクリーンショットなどのテスト結果を確認することができます。

また、[公式サイト](https://firebase.google.com/docs/test-lab/android/firebase-console#run_a_test)によると、Androidをテストする際、Firebase Test Labにはテスト手法が、以下のように3つあります。

- [Instrumentテスト](https://firebase.google.com/docs/test-lab/android/instrumentation-test)
- [Roboテスト](https://firebase.google.com/docs/test-lab/android/robo-ux-test)
- [Game loopテスト](https://firebase.google.com/docs/test-lab/game-loop)

本記事では、Roboテストを使用してテストをしていますが、その他のテストについても簡単に説明していきます。

## Instrumentテスト
Instrumentテストは[公式サイト](https://firebase.google.com/docs/test-lab/android/instrumentation-test)によると下記のように説明されています。
> An instrumentation test is a test written by you or your team to specifically to test your app, using the Espresso and UI Automator 2.0 Android test frameworks. Test Lab provides results for all test cases that complete execution during that time.

つまり、Instrumentテストとは、Espresso とUI Automator 2.0 と呼ばれる、Androidテストフレームワークを使ってテストをすることができます。

上記のテストフレームワークは、コードを書くことで、指定したアクションでアプリをテストすることができます。

例えば、ユーザー登録画面で、パスワードの文字数が足りなかった場合、正しくバリデーションされ、エラーメッセージが出ているかといったテストが、コードを書くことによって可能になります。



## Roboテスト
Roboテストとは、[公式サイト](https://firebase.google.com/docs/test-lab/android/robo-ux-test)によると、下記のように説明されています。

> Robo test analyzes the structure of your app's UI and then explores it methodically, automatically simulating user activities. 

Roboテストとは、アプリのUIの構造を分析をしてから、ユーザーのアクティビティを自動的にシミュレーションすることができます。

例えば、アプリがボトムナビゲーションバーを実装しているとき、いわゆるクローラのようなものが、すべてのナビゲーションを探索して、自動でテストをしてくれます。


## Game loopテスト
Game loopテストとは[公式サイト](https://firebase.google.com/docs/test-lab/game-loop)によると、下記のように説明されています。

> With Game Loop tests, you can write tests native to your game engine and then run them in Test Lab on devices you choose. This way, you don't need to worry about writing for different UI or testing frameworks. A Game Loop test simulates the actions of a real player, and when you run it on Test Lab, it provides a fast and scalable way to verify that your game performs well for your users.

つまり、ゲームエンジンを使用したアプリにおいて、ゲームプレーヤーの操作をシミュレーションしたテストを実行できます。

例えば、Unityを使用したアプリにおいて、プレーヤーの操作をまとめたシナリオを作成し、テストをすることができます。

# 手順
次に、本記事のメインである「プルリクエストをトリガーにGithub Actionsのworkflowが起動し、Firebase Test Lab上でRoboテストを、自動で走らせる方法」について説明していきます。

## 1. Firebaseプロジェクトを作成
Googleアカウントを作成し[Firebase Console](https://console.firebase.google.com)にアクセスします。
プロジェクトを作成するため、指示に従い情報を入力していきます。
プロジェクトが作成できると、画像のようなページが表示されます。

![プロジェクト画面](/post/20200523_firebase_test_lab_github_actions/1.png)

次にAndroidアイコンボタンをクリックし、AndroidアプリにFirebaseを追加します。そうすると画像のようなページが表示されます。設定ファイルのダウンロードやSDKの追加など、手順にしたがって、セットアップをしてください。
![セットアップ画面](/post/20200523_firebase_test_lab_github_actions/2.png =450x)


## 2. Github Actionsのworkflowを作成する
次にGithub Actionsのworkflowを作成します。
workflowはGithubのレポジトリ内.github/workflowsディレクトリ内にyaml形式のファイルを作成することで実行することができます。

作成したworkflowは以下のようになります。

```yaml
name: pull request workflow

on: pull_request

jobs:
  firebase_test_lab:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: set up JDK 1.8
        uses: actions/setup-java@v1
        with:
          java-version: 1.8

      - name: Build with Gradle
        run: ./gradlew assembleDebug

      - name: Login to Google Cloud
        uses: GoogleCloudPlatform/github-actions/setup-gcloud@master
        with:
          version: '290.0.1'
          service_account_key: ${{ secrets.GCP_SA_KEY }}
          export_default_credentials: true

      - name: Set current project
        run: gcloud config set project ${{ secrets.FIREBASE_PROJECT_ID }}

      - name: Run Tests in Firebase Test Lab
        run: |
          gcloud firebase test android run \
            --type robo \
            --app app/build/outputs/apk/debug/app-debug.apk \
            --device model=sailfish,version=25,locale=ja,orientation=portrait \
            --device model=zeroflte,version=22,locale=ja,orientation=portrait
```

順番にみていきます。

### ワークフローのトリガー設定
`on`シンタックスはワークフローをトリガーするGitHubイベントの名前を指定します。今回はプルリクエストをトリガーにワークフローを実行したいため、下記のように記述します。(参考: [ワークフローをトリガーするイベント](https://help.github.com/ja/actions/reference/events-that-trigger-workflows))

```yaml
on: pull_request
```

### ジョブの定義
`jobs`シンタックスはワークフローのジョブを定義します。
下記のコードでは`firebase_test_lab`というジョブをubuntuの最新バージョンの環境で実行します。
さらに`steps`以下でJobが実行するアクションを定義します。

```yaml
jobs:
  firebase_test_lab:
    runs-on: ubuntu-latest
    steps:
```


#### レポジトリのチェックアウト
`uses`シンタックスでジョブで実行されるアクションを指定します。
`actions/checkout@v2`を使用することで、環境にレポジトリをフェッチします。

```yaml
    steps:
      - uses: actions/checkout@v2
```

#### Java環境のセットアップ
gradleのタスクを実行するためにJDKをインストールします。
下記のように記述することでJDK8が環境にインストールされます。(参考: [https://github.com/actions/setup-java](https://github.com/actions/setup-java)）

```yaml
      - name: set up JDK 1.8
        uses: actions/setup-java@v1
        with:
          java-version: 1.8
```

#### Androidアプリのビルド
Androidアプリをビルドします。`run`シンタックスを用いることで、シェルを実行することができます。
今回はテスト用のアプリであるため、デバックビルドをします。

```yaml
      - name: Build with Gradle
        run: ./gradlew assembleDebug
```

#### Google Cloud SDKのセットアップ
Firebase Test Labを使用するには環境にGoogle Cloud SDKを環境にインストールする必要があります。(参考: [Start testing with the gcloud CLI](https://firebase.google.com/docs/test-lab/android/command-line))
GoogleCloudPlatformが公式で公開しているアクション([github-actions/setup-gcloud](https://github.com/GoogleCloudPlatform/github-actions/tree/master/setup-gcloud))を用いてセットアップを行います。

余談ですが、ここらへん、Firebase Test LabとうたってるのにGoogle Cloud SDKをインストールしなきゃならないのはどうかなぁと思います。Firebase CLIに統一してくれればすっきりするのですが。(テストにGCPのリソースを使用しているのでしょうがないのかなぁ)

```yaml
  - name: Login to Google Cloud
        uses: GoogleCloudPlatform/github-actions/setup-gcloud@master
        with:
          version: '290.0.1'
          service_account_key: ${{ secrets.GCP_SA_KEY }}
          export_default_credentials: true
```

ここで**サービスアカウントキーをGithubのレポジトリに登録する必要があります。**
`${{ secrets.GCP_SA_KEY }}`としているコードにおいて、秘匿すべきサービスアカウントキーを読み込んでいます。
サービスアカウントキーの取得方法と、サービスアカウントキーをGithubのレポジトリに登録する方法は後述します。

#### Firebaseプロジェクトの選択
先ほどセットアップしたGoogle Cloud SDKのgcloud CLIを使用してFirebaseプロジェクトを設定します。
Google Clud SDKのセットアップと同様の方法でプロジェクトIDを取得しています。これも説明は後述します。


```yaml
      - name: Set current project
        run: gcloud config set project ${{ secrets.FIREBASE_PROJECT_ID }}
```


#### Firebase Test Labの実行
gcloud CLIを使用してテストを実行します。
指定しているオプションは下記の通りです。そのほかのオプションについては[Start testing with the gcloud CLI](https://firebase.google.com/docs/test-lab/android/command-line)を参考にしてください。

- `--type`: テストの種類
- `--app` : ビルドしたAPKファイルのパス
- `--device`: テストの端末

```yaml
      - name: Run Tests in Firebase Test Lab
        run: |
          gcloud firebase test android run \
            --type robo \
            --app app/build/outputs/apk/debug/app-debug.apk \
            --device model=sailfish,version=25,locale=ja,orientation=portrait \
            --device model=zeroflte,version=22,locale=ja,orientation=portrait
```

### 3. サービスアカウントキーを取得する
サービスアカウントキーを取得する方法について説明します。
サービスアカウントキーとは、Firebaseのリソースの使用許可をユーザアカウントに与えるものです。今回の例でいうとFirebase Test LabをCLIから使用できるようにするために、サービスアカウントキーを使用します。

サービスアカウントキーはFirebaseコンソールから`「歯車アイコン」->「プロジェクトを設定」->「サービスアカウント」`と進むと画像のような「新しい秘密鍵の生成」というボタンがあります。これをクリックすることで、サービスアカウントキーを取得することができます。

![サービスアカウントの取得画面](/post/20200523_firebase_test_lab_github_actions/3.png)


### 4. Cloud Testing APIの有効化
Firebase Test Labを使用するにはGCP上でClud Testing APIを有効にする必要があります。
Cloud Testing APIを有効にすることで、Googleインフラストラクチャでモバイルアプリケーションの自動テストが可能になります。

GCPコンソールから`「APIとサービス」->「APIとサービスを有効化」`に進み、検索ボックスからCloud Testing APIを検索すると、下記の画像のようなページが表示されます。「有効にする」ボタンをクリックし有効化してください。
![API有効化画面](/post/20200523_firebase_test_lab_github_actions/4.png)


### 5. サービスアカウントのロールの設定
Firebase Test LabはGCPのリソースの上で実行されます。GCPのリソースを使用するには、サービスアカウントに権限がなければいけません。そのため、Firebaseに紐づいたサービスアカウントに権限を付与しなければなりません。

GCPコンソールから`「IAMと管理」`に進むと、画像のように名前が`firebase-adminsdk`のサービスアカウントが存在します。
右側にあるeditアイコンをクリックして、`「別のロールを追加」->「ロールを選択」->「Project」->「編集者」`を選択してください。

![ロール](/post/20200523_firebase_test_lab_github_actions/5.png)

![ロール](/post/20200523_firebase_test_lab_github_actions/6.png)


### 6. サービスアカウントキーをGithubレポジトリに登録する
前述したワークフローの作成において`${{ secrets.GCP_SA_KEY }}`を使用していました。これを設定する方法を説明します。

まず手順3で取得したサービスアカウントキーファイルをbase64にエンコードする必要があります。
下記のコマンドで出力された文字列をコピーします。

```shell
$ cat　<サービスアカウントキー>.json | base64
```

次にこれをGithubレポジトリに登録します。
Githubレポジトリのレポジトリから`「Settings」->「Secrets」->「New secret」`に進むと画像のようなページが表示されます。Nameには、「*GCP_SA_KEY*」、Valueには先ほどbase64にエンコードした文字列を入力します。
![Secret](/post/20200523_firebase_test_lab_github_actions/7.png)

このように設定することで、ワークフローのyamlファイルから`${{ secrets.GCP_SA_KEY }}`として使用することが可能になります。

### 7. FirebaseプロジェクトIDをGithubレポジトリに登録する
前述したワークフローの作成において${{ secrets.FIREBASE_PROJECT_ID }}を使用しました。これを設定する方法を説明します。
まず、FirebaseプロジェクトIDを取得するために、Firebaseコンソールから`「歯車アイコン」->「プロジェクトを設定」->「全般」`に進むと下記のようなページが表示されると思います。画像の赤線部分に表示されているプロジェクトIDをコピーします。
手順6と同様に,`FIREBASE_PROJECT_ID `という名前でGithubレポジトリ上のsecretsに保存します。

![Project ID](/post/20200523_firebase_test_lab_github_actions/8.png)

### 8. ワークフローを起動する
上記までで設定は全て整いました。次は実際にワークフローを起動します。ワークフローでは`on: pull_request`と設定しているため、レポジトリにプルリクエストを出します。そうすると画像のように、ワークフローが実行されます。
![ワークフロー実行画面](/post/20200523_firebase_test_lab_github_actions/9.png)

# 結果
最後にFirebase Test Labのテスト結果を簡単に紹介します。
端末のテスト結果の「Robo」タブを開くと画像のようなRoboが実際に行なったクロールの詳細がわかります。
(クロールグラフに表示されている日本語が文字化けしてるの気になる。。。)
![Robo実行画面](/post/20200523_firebase_test_lab_github_actions/10.png)

「ログ」タブでは画像のようにクロールのログがわかります。
もしクラッシュ等が発生したら、その詳細をこのログで確認することができます。
![log](/post/20200523_firebase_test_lab_github_actions/11.png)

「動画」タブでは、クロールの様子を動画で確認することが可能です。
![robo.gif](/post/20200523_firebase_test_lab_github_actions/12.gif)

「パフォーマンス」タブでは、パフォーマンスを確認することができます。
例えば、Roboのある操作タイミングに、どれくらいCPU、メモリ、ネットワークを使用したか等がわかります。
![パフォーマンス](/post/20200523_firebase_test_lab_github_actions/13.png)


# まとめ
本記事ではGithub Actionsを使用して、Firebase Test Labで実機テスト(Roboテスト)を行う方法を紹介しました。

参考になれば幸いです！
