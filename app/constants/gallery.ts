import { glob } from "glob";
import { Photo } from "@/app/constants/photos";

export type Category =
  | "latest"
  | "cambodia"
  | "japan"
  | "malaysia"
  | "philippines"
  | "singapore"
  | "taiwan"
  | "thailand"
  | "usa"
  | "vietnam";

export type Gallery = {
  readonly category: Category;
  readonly categoryDisplayName: string;
  readonly photos: Photo[];
};

const getPhotos = (folder: string): Photo[] => {
  return glob
    .sync(`public/${folder}/*.{jpg,jpeg,png}`)
    .map((path) => {
      return { path: path.replace("public", "") };
    })
    .slice()
    .sort((_, __) => 0.5 - Math.random()); // ランダムシャッフル
};

export const galleries: Gallery[] = [
  {
    category: "latest",
    categoryDisplayName: "⚡ Latest photos",
    photos: getPhotos("travel/latest"),
  },
  {
    category: "cambodia",
    categoryDisplayName: "🇰🇭 Cambodia",
    photos: getPhotos("travel/cambodia"),
  },
  {
    category: "japan",
    categoryDisplayName: "🇯🇵 Japan",
    photos: getPhotos("travel/japan"),
  },
  {
    category: "malaysia",
    categoryDisplayName: "🇲🇾 Malaysia",
    photos: getPhotos("travel/malaysia"),
  },
  {
    category: "philippines",
    categoryDisplayName: "🇵🇭 Philippines",
    photos: getPhotos("travel/philippines"),
  },
  {
    category: "singapore",
    categoryDisplayName: "🇸🇬 Singapore",
    photos: getPhotos("travel/singapore"),
  },
  {
    category: "taiwan",
    categoryDisplayName: "🇹🇼 Taiwan",
    photos: getPhotos("travel/taiwan"),
  },
  {
    category: "thailand",
    categoryDisplayName: "🇹🇭 Thailand",
    photos: getPhotos("travel/thailand"),
  },
  {
    category: "usa",
    categoryDisplayName: "🇺🇸 USA",
    photos: getPhotos("travel/usa"),
  },
  {
    category: "vietnam",
    categoryDisplayName: "🇻🇳 Vietnam",
    photos: getPhotos("travel/vietnam"),
  },
];
