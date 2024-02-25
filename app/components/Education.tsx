import { educations } from "../constants/education";
import Heading from "./Heading";

export default function Education() {
  return (
    <div>
      <Heading text="Education" />
      <table className="w-full mt-4 table-auto tracking-wide text-left text-sm">
        <thead>
          <tr>
            <th className="border-gray-400 border-b-2 pr-2 py-2">期間</th>
            <th className="border-gray-400 border-b-2 px-2 py-2">学校名</th>
          </tr>
        </thead>
        <tbody>
          {educations.map((education) => {
            return (
              <tr key={education.name}>
                <td className="border-gray-500 border-b pr-2 py-2 whitespace-nowrap">
                  {education.period}
                </td>
                <td className="border-gray-500 border-b px-2 py-2 ">
                  {education.name}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
