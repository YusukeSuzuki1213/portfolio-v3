"use client";

import { useState } from "react";
import Image from "next/image";
import { CategoryType, GalleryType } from "../type/gallery";

type Props = {
  galleries: GalleryType[];
};

export default function Gallery(props: Props) {
  const [category, setCategory] = useState<CategoryType>("latest");
  const buttonStyle = (targetCategory: CategoryType) => {
    const baseStyle =
      "text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2 border border-green-500 hover:text-white hover:bg-green-500 rounded-full text-center";
    return targetCategory == category
      ? `${baseStyle} text-white bg-green-500 border-green-500`
      : `${baseStyle} text-white`;
  };

  return (
    <>
      <div className="flex flex-wrap justify-items-start mb-2 md:mb-4 gap-2">
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
      <div className="columns-1 sm:columns-2 md:columns-3">
        {props.galleries.map((gallery) => {
          return gallery.photos.map((photo) => {
            return (
              <Image
                hidden={gallery.category != category}
                key={photo.path}
                className="h-auto max-w-full mb-4 rounded-md fadeIn"
                width={512}
                height={0}
                src={photo.path}
                alt=""
              />
            );
          });
        })}
      </div>
    </>
  );
}
