import { glob } from "glob";
import { PhotoType } from "@/app/type/photo";
import { GalleryType } from "../type/gallery";

const getPhotosInFolder = (folder: string): PhotoType[] => {
  return glob
    .sync(`public/${folder}/*.{jpg,jpeg,png}`)
    .map((path) => {
      return { path: path.replace("public", "") };
    })
    .slice();
};

export const galleries: GalleryType[] = [
  {
    category: "latest",
    categoryDisplayName: "⚡ Latest photos",
    photos: getPhotosInFolder("travel/latest"),
  },
  {
    category: "cambodia",
    categoryDisplayName: "🇰🇭 Cambodia",
    photos: getPhotosInFolder("travel/cambodia"),
  },
  {
    category: "japan",
    categoryDisplayName: "🇯🇵 Japan",
    photos: getPhotosInFolder("travel/japan"),
  },
  {
    category: "malaysia",
    categoryDisplayName: "🇲🇾 Malaysia",
    photos: getPhotosInFolder("travel/malaysia"),
  },
  {
    category: "philippines",
    categoryDisplayName: "🇵🇭 Philippines",
    photos: getPhotosInFolder("travel/philippines"),
  },
  {
    category: "singapore",
    categoryDisplayName: "🇸🇬 Singapore",
    photos: getPhotosInFolder("travel/singapore"),
  },
  {
    category: "taiwan",
    categoryDisplayName: "🇹🇼 Taiwan",
    photos: getPhotosInFolder("travel/taiwan"),
  },
  {
    category: "thailand",
    categoryDisplayName: "🇹🇭 Thailand",
    photos: getPhotosInFolder("travel/thailand"),
  },
  {
    category: "usa",
    categoryDisplayName: "🇺🇸 USA",
    photos: getPhotosInFolder("travel/usa"),
  },
  {
    category: "vietnam",
    categoryDisplayName: "🇻🇳 Vietnam",
    photos: getPhotosInFolder("travel/vietnam"),
  },
];
