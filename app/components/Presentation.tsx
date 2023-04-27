import { presentations } from "../constants/presentation";
import Card from "./Card";
import Heading from "./Heading";

export default function Presentation() {
  return (
    <div>
      <div className="mb-16">
        <Heading text="Presentation" />
      </div>
      <div className="flex flex-wrap">
        {presentations.map((presentation) => {
          return (
            <div
              key={presentation.title}
              className="w-full p-4 sm:w-1/2 lg:w-1/2 2xl:w-1/3  flex items-center justify-center"
            >
              <Card
                title={presentation.title}
                subtitle={presentation.subtitle}
                url={presentation.url}
                imageUrl={presentation.imageUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
