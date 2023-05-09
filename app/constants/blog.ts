type BlogType = {
  title: string;
  subtitle: string;
  date: string;
  url: string;
  imageUrl: string;
};

export const blogs: BlogType[] = [
  {
    title:
      "AndroidアプリをMaterial Designのガイドラインに準拠させるための取り組み",
    subtitle:
      "本投稿ではZOZOTOWN Androidアプリを、Material Designに準拠したUI/UX1とするために取り組んでいる内容を紹介します。",
    date: "29 July 2022",
    url: "https://techblog.zozo.com/entry/android-following-material-design",
    imageUrl:
      "https://cdn-ak.f.st-hatena.com/images/fotolife/v/vasilyjp/20220729/20220729121317.jpg",
  },
  {
    title: "Perfettoを用いたAndroidアプリのボトルネックの特定とその改善",
    subtitle:
      "本投稿は、ZOZOTOWN AndroidアプリのHome画面に存在する「商品モジュール」実装中に発生したパフォーマンスの低下をPerfettoというツールを用いて特定・改善した事例を紹介します。",
    date: "17 Sep 2021",
    url: "https://techblog.zozo.com/entry/android-performance-improvement-with-perfetto",
    imageUrl:
      "https://cdn-ak.f.st-hatena.com/images/fotolife/v/vasilyjp/20210906/20210906154524.jpg",
  },
];
