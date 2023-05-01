import Career from "./Career";
import SubHeading from "./SubHeading";
import Skills from "./Skills";
import Heading from "./Heading";

export default function Resume() {
  return (
    <div>
      <div className="mb-16">
        <Heading id="resume" text="Resume" />
      </div>
      <div className="relative -left-5 mb-10">
        <SubHeading text="Education and Experience" />
      </div>
      <div className="mb-20">
        <Career />
      </div>
      <div className="relative -left-5 mb-10">
        <SubHeading text="Skills" />
      </div>
      <div className="relative -left-5">
        <Skills />
      </div>
    </div>
  );
}
