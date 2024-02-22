import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  date: string;
  url: string;
  iconUrl: string;
};

export default function PostCard(props: Props) {
  return (
    <Link
      href={props.url}
      className="max-w-md flex border border-neutral-700 rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
    >
      <div className="w-36 h-36 flex basis-1/3 justify-center items-center p-9">
        <Image width={100} height={100} src={props.iconUrl} alt="" />
      </div>
      <div className="flex basis-2/3 flex-col gap-4 justify-between p-4">
        <p className="font-bold line-clamp-3">{props.title}</p>
        <div className="text-gray-400 text-sm">{props.date}</div>
      </div>
    </Link>
  );
}
