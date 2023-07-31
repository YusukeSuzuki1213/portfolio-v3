"use client";

import { useState } from "react";
import { Category, Gallery } from "@/app/constants/gallery";
import Image from "next/image";

type Props = {
  galleries: Gallery[];
};

export default function Gallery(props: Props) {
  const [category, setCategory] = useState<Category>("all");
  const buttonStyle = (targetCategory: Category) => {
    const baseStyle =
      "text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2 border border-green-500 hover:text-white hover:bg-green-500 rounded-full text-center";
    return targetCategory == category
      ? `${baseStyle} text-white bg-green-500 border-green-500`
      : `${baseStyle} text-white`;
  };

  return (
    <div className="mx-4 lg:mx-8">
      <div>
        <div className="flex flex-wrap justify-items-start mb-4 md:mb-6 gap-2">
          {props.galleries.map((gallery) => {
            return (
              <button
                key={gallery.category}
                type="button"
                className={buttonStyle(gallery.category)}
                onClick={() => setCategory(gallery.category)}
              >
                {gallery.categoryDisplayName}
              </button>
            );
          })}
        </div>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4">
          {props.galleries
            .find((gallery) => gallery.category == category)
            ?.pathList.map((path) => {
              return (
                <Image
                  key={path}
                  className="h-auto max-w-full mb-4 rounded-md"
                  width={512}
                  height={0}
                  src={path}
                  alt=""
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
