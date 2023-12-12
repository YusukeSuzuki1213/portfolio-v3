import { certifications } from "../constants/certifications";

export default function Certifications() {
  return (
    <div>
      <ul className="list-disc leading-loose text-sm">
        {certifications.map((certification) => (
          <li key={certification.title}>{certification.title}</li>
        ))}
      </ul>
    </div>
  );
}
