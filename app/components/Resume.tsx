import Career from "@/app/components/Career";
import SubHeading from "@/app/components/SubHeading";
import Skills from "@/app/components/Skills";
import Heading from "@/app/components/Heading";

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
