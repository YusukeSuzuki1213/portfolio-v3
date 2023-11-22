type TechTalkType = {
  title: string;
  subtitle: string;
  date: string;
  url: string;
  imageUrl: string;
};

export const techTalks: TechTalkType[] = [
  {
    title:
      "【DroidKaigi 2022】Android Vitalsのデータを自動監視してビジネス指標を向上させよう",
    subtitle:
      "2022年3月にPlay Developer Reporting APIが公開され、Vitalsの指標をAPI経由で取得することが可能になり、監視の自動化や分析をより簡単に行うことが可能になりました。",
    date: "05 Oct 2022",
    url: "https://droidkaigi.jp/2022/timetable/364446",
    imageUrl: "/tech_talk_droidkaigi.jpeg",
  },
  {
    title: "【ZOZO Tech Talk #1】Android Lintでコードの宣言順をチェックする",
    subtitle:
      "「ZOZO Tech Talk #1 - Android」は株式会社ZOZOが主催するオンラインイベントです。",
    date: "06 Dec 2021",
    url: "https://zozotech-inc.connpass.com/event/230668/",
    imageUrl:
      "https://media.connpass.com/thumbs/e9/23/e9230bd3ea5f1e795b3b9463c880208e.png",
  },
];
