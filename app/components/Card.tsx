import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

type Props = {
  title: string;
  date: string;
  url: string;
  iconUrl: string;
  shouldOpenNewWindow: boolean;
};

export default function Card(props: Props) {
  return (
    <a
      href={props.url}
      className="max-w-md flex bg-neutral-800 rounded-lg shadow-xl"
    >
      <div className="w-36 h-36 flex basis-1/3 justify-center items-center p-8 sm:p-9">
        <Image width={100} height={100} src={props.iconUrl} alt="" />
      </div>
      <div className="flex basis-2/3 flex-col gap-4 justify-between p-4">
        <p className="font-bold line-clamp-3">{props.title}</p>
        <div className="flex justify-between items-center">
          <div className="text-gray-400 text-sm">{props.date}</div>
          {props.shouldOpenNewWindow && (
            <FontAwesomeIcon
              className="w-3 h-3 text-gray-400 mr-1"
              icon={faArrowUpRightFromSquare}
            />
          )}
        </div>
      </div>
    </a>
  );
}
