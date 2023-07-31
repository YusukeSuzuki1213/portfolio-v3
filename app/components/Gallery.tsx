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
      "hover:text-white border border-green-500 hover:bg-green-500 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3";

    return targetCategory == category
      ? baseStyle + "text-white bg-green-500 border-green-500"
      : baseStyle + "text-green-500 bg-black";
  };

  return (
    <div className="mx-6 lg:mx-8">
      <div>
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
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
