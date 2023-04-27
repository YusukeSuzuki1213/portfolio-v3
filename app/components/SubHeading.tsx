type Props = {
  text: string;
};

export default function SubHeading(props: Props) {
  return (
    <div>
      <h3 className="text-white text-2xl font-semibold">{props.text}</h3>
    </div>
  );
}
