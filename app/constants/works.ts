type WorksType = {
  title: string;
  subtitle: string;
  date: string;
  url: string;
  imageUrl: string;
};

export const works: WorksType[] = [
  {
    title: "Japan MMA ニュース",
    subtitle:
      "日本の総合格闘技の最新ニュースを各団体ごとに読めるAndroidアプリです。",
    date: "25 Nov 2023",
    url: "https://play.google.com/store/apps/details?id=site.mma_news",
    imageUrl: "/japan_mma_news.png",
  },
  {
    title: "Monogatari Effect",
    subtitle:
      "『物語シリーズ』で登場するアニメーションをWeb Animations APIを用いてTypeScriptで実装しました。",
    date: "18 Jul 2020",
    url: "https://www.youtube.com/watch?v=ZcojaVmAoNA",
    imageUrl: "/monogatari_effect.png",
  },
  {
    title: "Smart Bath",
    subtitle:
      "マイクに向かってしゃべりかけるとシャワーが出たりBGMが流れたりするだけでなく、入浴後に使用量も通知してくれる入浴が楽しくなるような作品。クラウド型音声認識技術とラズベリーパイ、マイクやスピーカー、電磁弁、ポンプなどを組み合わせて試作しました。",
    date: "10 Oct 2017",
    url: "https://www.youtube.com/watch?v=9wnW4UtuwUI",
    imageUrl: "/smart_path.jpeg",
  },
];
