import { skills } from "../constants/skill";
import Heading from "./Heading";

export default function Skills() {
  return (
    <div>
      <Heading text="Skills" />
      <table className="w-full mt-4 table-auto tracking-wide text-left text-sm">
        <thead>
          <tr>
            <th className="border-gray-400 border-b-2 pr-2 py-2">
              言語 / フレームワーク
            </th>
            <th className="border-gray-400 border-b-2 px-2 py-2">使用歴</th>
            <th className="border-gray-400 border-b-2 px-2 py-2">用途</th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => {
            return (
              <tr key={skill.language}>
                <td className="border-gray-500 border-b pr-2 py-2">
                  {skill.language}
                </td>
                <td className="border-gray-500 border-b px-2 py-2 whitespace-nowrap">
                  {skill.history}
                </td>
                <td className="border-gray-500 border-b px-2 py-2 ">
                  {skill.purpose}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
