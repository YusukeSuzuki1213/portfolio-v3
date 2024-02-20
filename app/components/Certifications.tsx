import { certifications } from "@/app/constants/certification";

export default function Certifications() {
  return (
    <div>
      <ul className="list-disc leading-loose text-base">
        {certifications.map((certification) => (
          <li key={certification.title}>{certification.title}</li>
        ))}
      </ul>
    </div>
  );
}
