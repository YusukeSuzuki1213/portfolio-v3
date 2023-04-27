import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { careers, toAwesomeIcon } from "../constants/career";

export default function Career() {
  return (
    <ol className="relative border-l border-gray-700">
      {careers.map((career) => {
        return (
          <li key="title" className="mb-14 ml-10">
            <span className="absolute flex items-center justify-center w-10 h-10 bg-green-500 rounded-full -left-5 ring-8 ring-gray-800">
              <FontAwesomeIcon
                className="w-5 h-5"
                icon={toAwesomeIcon(career.icon)}
              />
            </span>
            <div className="flex flex-col space-y-2.5">
              <h3 className="text-xl font-semibold text-white">
                {career.title}
              </h3>
              <time className="block text-sm font-normal leading-none text-gray-500">
                {career.subtitle}
              </time>
              <p className="text-base font-normal text-gray-400">
                {career.description}
              </p>
              <span className="bg-green-500 text-white text-sm font-medium px-2.5 py-0.5 rounded mr-auto">
                {career.period}
              </span>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
