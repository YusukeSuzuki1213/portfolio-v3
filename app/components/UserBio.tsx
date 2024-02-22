import Link from "next/link";
import Image from "next/image";
import { serviceAccounts, toAwesomeIcon } from "../constants/serviceAccount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  imageUrl: string;
};

export default function UserBio(props: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Link href="/">
          <Image
            width={60}
            height={60}
            className="rounded-full bg-white border-2 border-zinc-400"
            src={props.imageUrl}
            alt=""
          />
        </Link>
        <div className="flex flex-col gap-2">
          <Link href="/">
            <div className="font-bold">Yusuke Suzuki</div>
          </Link>
          <div className="flex items-center space-x-2">
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
                    className="w-4 h-4"
                    icon={toAwesomeIcon(account.icon)}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <div className="text-sm leading-relaxed tracking-wide text-gray-300">
        Freelance Software engineer based in Japan.
      </div>
      <Link href="/" className="underline text-sm text-gray-300">
        About me
      </Link>
    </div>
  );
}
