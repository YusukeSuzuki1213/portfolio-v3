import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full flex flex-col lg:flex-row justify-center items-center lg:space-x-16">
      <div className="w-60 h-60 lg:w-64 lg:h-64 rounded-full overflow-hidden bg-white">
        <Image src="" alt="アバターアイコン" width={500} height={500} />
      </div>
      <div className="flex flex-col items-center space-y-6 mt-6 lg:items-start lg:space-y-10 lg:space-x-0 lg:mt-0">
        <p className="text-4xl lg:text-5xl">Yusuke Suzuki</p>
        <p className="italic">Software engineer based in Japan.</p>
        <div className="flex items-center space-x-4">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="w-5 h-5" icon={faGithub} />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="w-5 h-5" icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
}
