import { glob } from "glob";
import { Photo } from "@/app/constants/photo";

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

const getPhotosInFolder = (folder: string): Photo[] => {
  return glob
    .sync(`public/${folder}/*.{jpg,jpeg,png}`)
    .map((path) => {
      return { path: path.replace("public", "") };
    })
    .slice();
};

export const homeGalleries: Gallery[] = [
  {
    category: "latest",
    categoryDisplayName: "⚡ Latest photos",
    photos: [
      { path: "/travel/latest/IMG_1139.JPG" },
      { path: "/travel/latest/6CzNLn88TYm3x3FODxxzAQ.jpeg" },
      { path: "/travel/latest/BRydPs8cRM61xhum938FyA.jpeg" },
      { path: "/travel/latest/H0myozRtSW2UE5qSs8QCFg.jpeg" },
      { path: "/travel/latest/xyEnCrWKS0GKEt2HhOGo3g.jpeg" },
    ],
  },
  {
    category: "cambodia",
    categoryDisplayName: "🇰🇭 Cambodia",
    photos: [
      { path: "/travel/cambodia/2.jpeg" },
      { path: "/travel/cambodia/3.jpeg" },
      { path: "/travel/cambodia/4.jpeg" },
      { path: "/travel/cambodia/5.jpeg" },
      { path: "/travel/cambodia/12.jpeg" },
      { path: "/travel/cambodia/13.jpeg" },
      { path: "/travel/cambodia/15.jpeg" },
    ],
  },
  {
    category: "japan",
    categoryDisplayName: "🇯🇵 Japan",
    photos: [
      { path: "/travel/japan/11.jpeg" },
      { path: "/travel/japan/23.jpeg" },
      { path: "/travel/japan/42.jpeg" },
      { path: "/travel/japan/64.jpeg" },
      { path: "/travel/japan/68.jpeg" },
      { path: "/travel/japan/72.jpeg" },
      { path: "/travel/japan/103.jpeg" },
      { path: "/travel/japan/106.jpeg" },
    ],
  },
  {
    category: "malaysia",
    categoryDisplayName: "🇲🇾 Malaysia",
    photos: [
      { path: "/travel/malaysia/2.jpeg" },
      { path: "/travel/malaysia/3.jpeg" },
      { path: "/travel/malaysia/5.jpeg" },
      { path: "/travel/malaysia/13.jpeg" },
      { path: "/travel/malaysia/15.jpeg" },
    ],
  },
  {
    category: "philippines",
    categoryDisplayName: "🇵🇭 Philippines",
    photos: [
      { path: "/travel/philippines/4.jpeg" },
      { path: "/travel/philippines/6.jpeg" },
      { path: "/travel/philippines/7.jpeg" },
      { path: "/travel/philippines/9.jpeg" },
      { path: "/travel/philippines/3.jpeg" },
      { path: "/travel/philippines/14.jpeg" },
      { path: "/travel/philippines/15.jpeg" },
    ],
  },
  {
    category: "singapore",
    categoryDisplayName: "🇸🇬 Singapore",
    photos: [
      { path: "/travel/singapore/1.jpeg" },
      { path: "/travel/singapore/4.jpeg" },
      { path: "/travel/singapore/8.jpeg" },
      { path: "/travel/singapore/11.jpeg" },
    ],
  },
  {
    category: "taiwan",
    categoryDisplayName: "🇹🇼 Taiwan",
    photos: [
      { path: "/travel/taiwan/1.jpeg" },
      { path: "/travel/taiwan/2.jpeg" },
      { path: "/travel/taiwan/5.jpeg" },
      { path: "/travel/taiwan/6.jpeg" },
      { path: "/travel/taiwan/12.jpeg" },
      { path: "/travel/taiwan/17.jpeg" },
    ],
  },
  {
    category: "thailand",
    categoryDisplayName: "🇹🇭 Thailand",
    photos: [
      { path: "/travel/thailand/2.jpeg" },
      { path: "/travel/thailand/4.jpeg" },
      { path: "/travel/thailand/6.jpeg" },
      { path: "/travel/thailand/7.jpeg" },
      { path: "/travel/thailand/8.jpeg" },
      { path: "/travel/thailand/13.jpeg" },
    ],
  },
  {
    category: "usa",
    categoryDisplayName: "🇺🇸 USA",
    photos: [
      { path: "/travel/usa/1.jpeg" },
      { path: "/travel/usa/6.jpeg" },
      { path: "/travel/usa/7.jpeg" },
      { path: "/travel/usa/8.jpeg" },
      { path: "/travel/usa/9.jpeg" },
    ],
  },
  {
    category: "vietnam",
    categoryDisplayName: "🇻🇳 Vietnam",
    photos: [
      { path: "/travel/vietnam/11.jpeg" },
      { path: "/travel/vietnam/10.jpeg" },
      { path: "/travel/vietnam/8.jpeg" },
      { path: "/travel/vietnam/7.jpeg" },
      { path: "/travel/vietnam/4.jpeg" },
      { path: "/travel/vietnam/1.jpeg" },
    ],
  },
];

export const galleries: Gallery[] = [
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
