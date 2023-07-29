"use client";

import { useState } from "react";
import { Category, Gallery } from "@/app/constants/gallery";
import Image from "next/image";

type Props = {
  galleries: Gallery[];
};

export default function Gallery(props: Props) {
  const [category, setCategory] = useState<Category>("all");

  return (
    <div className="mx-16">
      <div>
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          {props.galleries.map((gallery) => {
            return (
              <button
                key={gallery.categoryName}
                type="button"
                className="text-green-500 hover:text-white border border-green-500 bg-black hover:bg-green-500 focus:bg-green-500 focus:text-white rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3"
                onClick={() => setCategory(gallery.categoryName)}
              >
                {gallery.categoryDisplayName}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {props.galleries
            .find((gallery) => gallery.categoryName == category)
            ?.pathList.map((path) => {
              return (
                <Image
                  key={path}
                  className="h-auto max-w-full rounded-md"
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
