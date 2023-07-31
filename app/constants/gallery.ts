import { glob } from "glob";

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
  readonly pathList: string[];
};

const pathList = (folder: string) => {
  return glob
    .sync(`public/${folder}/*.{jpg,jpeg,png}`)
    .map((path) => path.replace("public", ""));
};

export const galleries: Gallery[] = [
  {
    category: "all",
    categoryDisplayName: "All categories",
    pathList: pathList("travel/**"),
  },
  {
    category: "cambodia",
    categoryDisplayName: "🇰🇭 Cambodia",
    pathList: pathList("travel/cambodia"),
  },
  {
    category: "japan",
    categoryDisplayName: "🇯🇵 Japan",
    pathList: pathList("travel/japan"),
  },
  {
    category: "malaysia",
    categoryDisplayName: "🇲🇾 Malaysia",
    pathList: pathList("travel/malaysia"),
  },
  {
    category: "philippines",
    categoryDisplayName: "🇵🇭 Philippines",
    pathList: pathList("travel/philippines"),
  },
  {
    category: "singapore",
    categoryDisplayName: "🇸🇬 Singapore",
    pathList: pathList("travel/singapore"),
  },
  {
    category: "taiwan",
    categoryDisplayName: "🇹🇼 Taiwan",
    pathList: pathList("travel/taiwan"),
  },
  {
    category: "thailand",
    categoryDisplayName: "🇹🇭 Thailand",
    pathList: pathList("travel/thailand"),
  },
  {
    category: "usa",
    categoryDisplayName: "🇺🇸 USA",
    pathList: pathList("travel/usa"),
  },
  {
    category: "vietnam",
    categoryDisplayName: "🇻🇳 Vietnam",
    pathList: pathList("travel/vietnam"),
  },
];
