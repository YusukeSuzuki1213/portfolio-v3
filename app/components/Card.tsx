import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  subtitle: string;
  date: string;
  url: string;
  imageUrl: string;
};

export default function Card(props: Props) {
  return (
    <div className="max-w-xs border rounded-lg shadow bg-neutral-800 border-neutral-700 transform transition duration-500 hover:scale-105">
      <Link href={props.url} target="_blank">
        <Image
          width={800}
          height={500}
          className="rounded-t-lg object-cover h-52 w-full"
          src={props.imageUrl}
          alt=""
        />
        <div className="p-5">
          <h4 className="mb-2 text-xl font-bold tracking-tight text-white line-clamp-2">
            {props.title}
          </h4>
          <p className="mb-3 font-normal text-gray-400 italic">{props.date}</p>
          <p className="mb-3 font-normal text-gray-400 line-clamp-3">
            {props.subtitle}
          </p>
        </div>
      </Link>
    </div>
  );
}
