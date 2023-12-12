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
];
