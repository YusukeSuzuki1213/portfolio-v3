import { awards } from "@/app/constants/award";
import Heading from "./Heading";

export default function Awards() {
  return (
    <div>
      <Heading text="Awards" />
      <ul className="mt-4 ml-4 list-disc leading-loose text-base">
        {awards.map((award) => (
          <li key={award.title}>
            {award.url ? (
              <a
                className="underline text-green-500"
                href={award.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {award.title}
              </a>
            ) : (
              award.title
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
