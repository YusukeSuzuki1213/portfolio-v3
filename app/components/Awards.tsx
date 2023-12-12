import { awards } from "../constants/awards";

export default function Awards() {
  return (
    <div>
      <ul className="list-disc leading-loose text-base">
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
