"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { serviceAccounts, toAwesomeIcon } from "../constants/serviceAccount";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-20">
      <div className="w-56 h-56 lg:w-64 lg:h-64 animate-distorted-circle overflow-hidden rounded-distorted-circle bg-neutral-800">
        <Image
          src="/avatar.jpg"
          alt="アバターアイコン"
          width={500}
          height={500}
        />
      </div>
      <div className="flex flex-col items-center space-y-6 mt-6 lg:items-start lg:space-y-10 lg:space-x-0 lg:mt-0">
        <div className="text-4xl lg:text-6xl text-white">
          <Typewriter
            words={["Yusike", "Yusuke Suzuki"]}
            loop={1}
            cursor
            cursorStyle="_"
            typeSpeed={100}
            delaySpeed={500}
          />
        </div>
        <p className="italic text-gray-300">
          Software engineer based in Japan.
        </p>
        <div className="flex items-center space-x-4">
          {serviceAccounts.map((account) => {
            return (
              <a
                key={account.icon}
                href={account.url}
                target="_blank"
                className="text-gray-300 hover:text-white"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  className="w-5 h-5"
                  icon={toAwesomeIcon(account.icon)}
                />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
