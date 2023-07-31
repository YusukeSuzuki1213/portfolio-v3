import Heading from "@/app/components/Heading";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { photos } from "@/app/constants/photos";
import Link from "next/link";

export default async function Photos() {
  return (
    <div>
      <div className="mb-16">
        <Heading id="photos" text="Photos" />
      </div>
      <div className="flex flex-wrap flex-col items-center justify-center mx-6">
        <div className="columns-1 md:columns-3">
          {photos.map((photo) => {
            return (
              <Image
                key={photo.path}
                className="h-auto max-w-full rounded-md mb-4"
                width={512}
                height={0}
                src={photo.path}
                alt=""
              />
            );
          })}
        </div>
        <div className="text-center mt-12 w-full sm:w-1/2 md:w-1/3">
          <Link href="/gallery">
            <button className="text-green-500 hover:text-white border border-green-500 hover:bg-green-500 hover:border-green-500 font-medium rounded-lg py-2.5 text-center text-sm w-full">
              <span>View all&nbsp;&nbsp;</span>
              <FontAwesomeIcon
                className="w-3.5 h-3.5 text-right"
                icon={faArrowRight}
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
