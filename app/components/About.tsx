import Heading from "./Heading";

export default function About() {
  return (
    <div>
      <Heading text="About" />
      <p className="mt-4 leading-relaxed tracking-wide">
        京都在住のソフトウェアエンジニア。現在はフリーランスのエンジニアとしてAndroidアプリの開発を行っています。
      </p>
      <p className="mt-4 leading-relaxed tracking-wide">
        【趣味】✈️旅行｜🥊格闘技｜🧖サウナ｜🏂スノボ｜💪筋トレ | 📝
        <a
          className="text-green-500 underline"
          href="https://www.instagram.com/single.line.diary"
          target="_blank"
        >
          英語日記
        </a>
      </p>
    </div>
  );
}
