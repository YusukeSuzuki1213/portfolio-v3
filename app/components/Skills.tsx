import { classFromRate, skills } from "@/app/constants/skill";

export default function Skills() {
  return (
    <div>
      {skills.map((skill) => {
        return (
          <div key={skill.text} className="mb-8">
            <div className="mb-2 text-base font-medium text-white">
              {skill.text}
            </div>
            <div className="w-full rounded-full h-2.5 mb-4 bg-gray-700">
              <div
                className={`bg-green-500 h-2.5 rounded-full ${classFromRate(
                  skill.rate
                )}`}
              ></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
