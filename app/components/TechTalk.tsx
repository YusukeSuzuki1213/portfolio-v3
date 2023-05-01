import { techTalks } from "@/app/constants/techTalk";
import Card from "@/app/components/Card";
import Heading from "@/app/components/Heading";

export default function TechTalk() {
  return (
    <div>
      <div className="mb-16">
        <Heading id="techTalk" text="Tech Talk" />
      </div>
      <div className="flex flex-wrap">
        {techTalks.map((talk) => {
          return (
            <div
              key={talk.title}
              className="w-full p-4 sm:w-1/2 lg:w-1/2 2xl:w-1/3  flex items-center justify-center"
            >
              <Card
                title={talk.title}
                subtitle={talk.subtitle}
                date={talk.date}
                url={talk.url}
                imageUrl={talk.imageUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
