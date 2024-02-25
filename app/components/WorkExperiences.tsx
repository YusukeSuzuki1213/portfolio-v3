import { workExperiences } from "../constants/workExperience";
import Heading from "./Heading";

export default function WorkExperiences() {
  return (
    <div>
      <Heading text="Work Experiences" />
      {workExperiences.map((experience) => {
        return (
          <div key={experience.name} className="flex flex-col gap-2 mt-6 mb-12">
            <h2 className="font-bold">■ {experience.name}</h2>
            <table className="w-full table-auto tracking-wide text-left text-sm">
              <tbody>
                <tr>
                  <td className="border-gray-500 border-b pr-2 py-2 whitespace-nowrap">
                    期間
                  </td>
                  <td className="border-gray-500 border-b px-2 py-2">
                    {experience.period}
                  </td>
                </tr>
                <tr>
                  <td className="border-gray-500 border-b pr-2 py-2 whitespace-nowrap">
                    雇用形態
                  </td>
                  <td className="border-gray-500 border-b px-2 py-2">
                    {experience.employmentType}
                  </td>
                </tr>
                <tr>
                  <td className="border-gray-500 border-b pr-2 py-2  whitespace-nowrap">
                    開発チーム規模
                  </td>
                  <td className="border-gray-500 border-b px-2 py-2">
                    {experience.teamSize}
                  </td>
                </tr>
                <tr>
                  <td className="border-gray-500 border-b pr-2 py-2  whitespace-nowrap">
                    担当業務
                  </td>
                  <td className="border-gray-500 border-b px-2 py-2">
                    {experience.task}
                  </td>
                </tr>
                <tr>
                  <td className="border-gray-500 border-b pr-2 py-2  whitespace-nowrap">
                    使用技術
                  </td>
                  <td className="border-gray-500 border-b px-2 py-2">
                    {experience.technology}
                  </td>
                </tr>
                {experience.technicalOutputs.length > 0 && (
                  <tr>
                    <td className="border-gray-500 border-b pr-2 py-2  whitespace-nowrap">
                      登壇 / 技術記事
                    </td>
                    <td className="border-gray-500 border-b pr-2 pl-6 py-2">
                      <ul className="list-disc leading-loose">
                        {experience.technicalOutputs.map((outPut) => {
                          return (
                            <li key={outPut.title}>
                              <a
                                className="underline text-green-500"
                                href={outPut.url}
                              >
                                {outPut.title}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </td>
                  </tr>
                )}
                <tr>
                  <td className="border-gray-500 border-b pr-2 py-2 whitespace-nowrap">
                    コメント
                  </td>
                  <td className="border-gray-500 border-b px-2 py-2">
                    {experience.comment}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
