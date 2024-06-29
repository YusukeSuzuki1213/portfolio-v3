import { technicalOutputs } from "../constants/technicalOutput";
import Heading from "./Heading";

export default function TechnicalOutputs() {
  return (
    <div>
      <Heading text="Tech Talks and Blogs" />
      <ul className="mt-4 ml-4 list-disc leading-loose text-base">
        {technicalOutputs.map((output) => (
          <li key={output.title} className="mb-0.5">
            {output.url ? (
              <a
                className="underline text-green-500"
                href={output.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {output.title}
              </a>
            ) : (
              output.title
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
