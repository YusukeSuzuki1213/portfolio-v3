import { about } from "../constants/about";
import Heading from "./Heading";

export default function About() {
  return (
    <div>
      <Heading text="About" />
      {about.map((value) => {
        return (
          <p key={value} className="mt-4 leading-relaxed tracking-wider">
            {value}
          </p>
        );
      })}
    </div>
  );
}
