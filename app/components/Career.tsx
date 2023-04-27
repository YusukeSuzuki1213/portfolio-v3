import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function Career() {
  return (
    <ol className="relative border-l border-gray-700">
      <li className="mb-14 ml-10">
        <span className="absolute flex items-center justify-center w-10 h-10 bg-green-500 rounded-full -left-5 ring-8 ring-gray-800">
          <FontAwesomeIcon icon={faGraduationCap} />
        </span>
        <div className="flex flex-col space-y-2.5">
          <h3 className="text-xl font-semibold text-white">
            Bachelor of information
          </h3>
          <time className="block text-sm font-normal leading-none text-gray-500">
            Shizuoka University
          </time>
          <p className="text-base font-normal text-gray-400">
            僕の名前は僕の名前は僕の名前は僕の
            名前は僕の名前は僕の名前は僕の名前、
            は僕の名前は僕の名前はの名前は僕
            の名前は僕の名前はの名前は僕の名前は僕の名前は
          </p>
          <span className="bg-green-500 text-white text-sm font-medium px-2.5 py-0.5 rounded mr-auto">
            2016 - 2020
          </span>
        </div>
      </li>
      <li className="mb-14 ml-10">
        <span className="absolute flex items-center justify-center w-10 h-10 bg-green-500 rounded-full -left-5 ring-8 ring-gray-800">
          <FontAwesomeIcon icon={faGraduationCap} />
        </span>
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold text-white">
            Bachelor of information
          </h3>
          <time className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            Shizuoka University
          </time>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            僕の名前は僕の名前は僕の名前は僕の
            名前は僕の名前は僕の名前は僕の名前、
            は僕の名前は僕の名前はの名前は僕
            の名前は僕の名前はの名前は僕の名前は僕の名前は
          </p>
          <span className="bg-green-500 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded mr-auto">
            2016 - 2020
          </span>
        </div>
      </li>
    </ol>
  );
}
