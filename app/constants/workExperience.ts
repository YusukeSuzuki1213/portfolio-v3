import { WorkExperienceType } from "../type/workExperience";

export const workExperiences: WorkExperienceType[] = [
  {
    name: "コスメ・美容系サービスのAndroidアプリ開発",
    period: "2023/09〜",
    employmentType: "業務委託",
    teamSize: "2〜5人",
    task: "設計 / 実装 / テスト / レビュー",
    technology: "Android / Kotlin / Firebase",
    technicalOutputs: [],
    comment: "新機能の開発を中心に業務をしています。",
  },
  {
    name: "ZOZOTOWNのAndroidアプリ開発",
    period: "2020/04〜2023/06",
    employmentType: "正社員",
    teamSize: "5〜10人",
    task: "設計 / 実装 / テスト / レビュー / 運用保守",
    technology: "Android / Kotlin / Java / Firebase",
    technicalOutputs: [
      {
        title:
          "【DroidKaigi 2022】Android Vitalsのデータを自動監視してビジネス指標を向上させよう",
        url: "https://droidkaigi.jp/2022/timetable/364446",
      },
      {
        title:
          "【ZOZO Tech Talk #1】Android Lintでコードの宣言順をチェックする",
        url: "https://zozotech-inc.connpass.com/event/230668/",
      },
      {
        title:
          "【ZOZO Tech Blog】AndroidアプリをMaterial Designのガイドラインに準拠させるための取り組み",
        url: "https://techblog.zozo.com/entry/android-following-material-design",
      },
      {
        title:
          "【ZOZO Tech Blog】Perfettoを用いたAndroidアプリのボトルネックの特定とその改善",
        url: "https://techblog.zozo.com/entry/android-performance-improvement-with-perfetto",
      },
    ],
    comment:
      "新機能の開発,リファクタリング,バグ修正などAndroidアプリ開発を一通り担当しました。DroidKaigiの登壇やテックブログの執筆など技術的なアウトプットも積極的に行いました。また新卒エンジニアの採用にも参加し面接官なども担当しました。",
  },
  {
    name: "プレゼンサービスのAndroidアプリ開発",
    period: "2019/02〜2019/09",
    employmentType: "アルバイト",
    teamSize: "2人",
    task: "設計 / 実装 / テスト",
    technology: "Android / Kotlin",
    technicalOutputs: [],
    comment:
      "iOSでリリースされているアプリをAndroidへ移植する業務を担当しました。プロジェクトの作成から設計,実装,テストを行いリリースまで担当しました。",
  },
  {
    name: "求人情報サービスの開発",
    period: "2018/09〜2019/01",
    employmentType: "アルバイト",
    teamSize: "ー",
    task: "設計 / 実装",
    technology: "Ruby on Rails / JavaScript / SQL / HTML / CSS",
    technicalOutputs: [],
    comment: "フロントエンドの設計,実装やメール配信機能の開発を担当しました。",
  },
  {
    name: "楽天市場のバックエンド開発",
    period: "2018/08〜2018/09",
    employmentType: "インターンシップ",
    teamSize: "ー",
    task: "実装",
    technology: "Docker / Kubernetes",
    technicalOutputs: [],
    comment: "楽天市場のバックエンドに関わる実装を担当しました。",
  },
];
