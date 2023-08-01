import { glob } from "glob";
import { Photo } from "@/app/constants/photos";

export type Category =
  | "all"
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
    category: "all",
    categoryDisplayName: "All categories",
    photos: getPhotos("travel/**"),
  },
  {
    category: "cambodia",
    categoryDisplayName: "🇰🇭 Cambodia",
    photos: [
      {
        path: "/travel/cambodia/1.jpeg",
      },
    ],
  },
  {
    category: "japan",
    categoryDisplayName: "🇯🇵 Japan",
    photos: [
      {
        path: "/travel/japan/1.jpeg",
      },
    ],
  },
  {
    category: "malaysia",
    categoryDisplayName: "🇲🇾 Malaysia",
    photos: [
      {
        path: "/travel/malaysia/1.jpeg",
      },
    ],
  },
  {
    category: "philippines",
    categoryDisplayName: "🇵🇭 Philippines",
    photos: [
      {
        path: "/travel/philippines/1.jpeg",
      },
    ],
  },
  {
    category: "singapore",
    categoryDisplayName: "🇸🇬 Singapore",
    photos: [
      {
        path: "/travel/singapore/1.jpeg",
      },
    ],
  },
  {
    category: "taiwan",
    categoryDisplayName: "🇹🇼 Taiwan",
    photos: [
      {
        path: "/travel/taiwan/1.jpeg",
      },
    ],
  },
  {
    category: "thailand",
    categoryDisplayName: "🇹🇭 Thailand",
    photos: [
      {
        path: "/travel/thailand/1.jpeg",
      },
    ],
  },
  {
    category: "usa",
    categoryDisplayName: "🇺🇸 USA",
    photos: [
      {
        path: "/travel/usa/1.jpeg",
      },
    ],
  },
  {
    category: "vietnam",
    categoryDisplayName: "🇻🇳 Vietnam",
    photos: [
      {
        path: "/travel/vietnam/1.jpeg",
      },
    ],
  },
];
