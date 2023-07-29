import Heading from "@/app/components/Heading";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { randomElementsFromArray } from "@/app/helper/randomElementsFromArray";
import { glob } from "glob";

export default async function Photos() {
  const imagePath = (await glob("public/travel/**/*.{jpeg,jpg,JPG}")).map(
    (image) => {
      return image.replace("public", "");
    }
  );

  const imageList = [
    randomElementsFromArray(imagePath, 3),
    randomElementsFromArray(imagePath, 3),
    randomElementsFromArray(imagePath, 3),
  ];

  return (
    <div>
      <div className="mb-16">
        <Heading id="photos" text="Photos" />
      </div>
      <div className="flex flex-wrap flex-col items-center justify-center mx-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {imageList.map((images) => {
            return (
              <div key={images.toString()}>
                {images.map((image) => {
                  return (
                    <div key={image} className="mb-4">
                      <Image
                        className="h-auto max-w-full rounded-md"
                        width={512}
                        height={0}
                        src={image}
                        alt=""
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="text-center mt-12 w-full sm:w-1/2 md:w-1/3">
          <button className="text-green-500 hover:text-white border border-green-500 hover:bg-green-500 hover:border-green-500 font-medium rounded-lg py-2.5 text-center text-sm w-full">
            <span>View all&nbsp;&nbsp;</span>
            <FontAwesomeIcon
              className="w-3.5 h-3.5 text-right"
              icon={faArrowRight}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
