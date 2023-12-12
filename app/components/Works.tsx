import Card from "@/app/components/Card";
import Heading from "@/app/components/Heading";
import { works } from "../constants/works";

export default function Works() {
  return (
    <div>
      <div className="mb-16">
        <Heading id="works" text="Works" />
      </div>
      <div className="flex flex-wrap">
        {works.map((work) => {
          return (
            <div
              key={work.title}
              className="w-full p-4 sm:w-1/2 lg:w-1/2 2xl:w-1/3  flex items-center justify-center"
            >
              <Card
                title={work.title}
                subtitle={work.subtitle}
                date={work.date}
                url={work.url}
                imageUrl={work.imageUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
