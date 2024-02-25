import { certifications } from "@/app/constants/certification";
import Heading from "./Heading";

export default function Certifications() {
  return (
    <div>
      <Heading text="Certifications" />
      <ul className="mt-4 ml-4 list-disc leading-loose text-base">
        {certifications.map((certification) => (
          <li key={certification.title}>{certification.title}</li>
        ))}
      </ul>
    </div>
  );
}
