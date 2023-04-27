import Image from "next/image";

type Props = {
  title: string;
  subtitle: string;
  url: string;
  imageUrl: string;
};

export default function Card(props: Props) {
  return (
    <div className="max-w-xs border rounded-lg shadow bg-gray-800 border-gray-700 transform transition duration-500 hover:scale-105">
      <a href={props.url}>
        <Image
          width={800}
          height={800}
          className="rounded-t-lg"
          src={props.imageUrl}
          alt=""
        />
        <div className="p-5">
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {props.title}
          </h4>
          <p className="mb-3 font-normal text-gray-400">{props.subtitle}</p>
        </div>
      </a>
    </div>
  );
}
