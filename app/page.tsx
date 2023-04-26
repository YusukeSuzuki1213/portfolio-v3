import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { ScrollId } from "./constants/scrollId";

export default function Home() {
  return (
    <main>
      <div
        id={ScrollId.HOME}
        className="h-screen flex justify-center items-center space-x-16"
      >
        <div className="w-64 h-64 rounded-full overflow-hidden bg-white">
          <Image src="" alt="アバターアイコン" width={500} height={500} />
        </div>
        <div className="flex flex-col">
          <p className="text-5xl">Yusuke Suzuki</p>
          <p className="mt-6 italic">Software engineer based in Japan.</p>
          <div className="flex items-center space-x-4 mt-12">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="w-5" icon={faGithub} />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon className="w-5" icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
      <div id={ScrollId.RESUME} className="h-screen">
        <h1>Resume</h1>
      </div>
      <div id={ScrollId.POSTS_AND_TALKS} className="h-screen">
        <h1>Posts-and-talks</h1>
      </div>
      <div id={ScrollId.CONTACT} className="h-screen">
        <h1>Posts-and-talks</h1>
      </div>
    </main>
  );
}
