type Props = {
  text: string;
};
export default function Heading(props: Props) {
  return (
    <div className="flex-col items-center">
      <h2 className="text-4xl font-bold text-white text-center">
        {props.text}
      </h2>
      <hr className="w-24 h-0.5 mx-auto mt-4 bg-green-500 border-0" />
    </div>
  );
}
