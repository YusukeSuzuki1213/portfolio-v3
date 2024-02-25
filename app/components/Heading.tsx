type Props = {
  text: string;
};

export default function Heading(props: Props) {
  return (
    <div className="inline-block">
      <h1 className="text-2xl font-bold text-gray-200 text-center border-b-4 border-green-500">
        {props.text}
      </h1>
    </div>
  );
}
