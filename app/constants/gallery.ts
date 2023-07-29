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
  readonly categoryName: Category;
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
    categoryName: "all",
    categoryDisplayName: "All categories",
    pathList: pathList("travel/**"),
  },
  {
    categoryName: "cambodia",
    categoryDisplayName: "Cambodia",
    pathList: pathList("travel/cambodia"),
  },
  {
    categoryName: "japan",
    categoryDisplayName: "Japan",
    pathList: pathList("travel/japan"),
  },
  {
    categoryName: "malaysia",
    categoryDisplayName: "Malaysia",
    pathList: pathList("travel/malaysia"),
  },
  {
    categoryName: "philippines",
    categoryDisplayName: "Philippines",
    pathList: pathList("travel/philippines"),
  },
  {
    categoryName: "singapore",
    categoryDisplayName: "Singapore",
    pathList: pathList("travel/singapore"),
  },
  {
    categoryName: "taiwan",
    categoryDisplayName: "Taiwan",
    pathList: pathList("travel/taiwan"),
  },
  {
    categoryName: "thailand",
    categoryDisplayName: "Thailand",
    pathList: pathList("travel/thailand"),
  },
  {
    categoryName: "usa",
    categoryDisplayName: "USA",
    pathList: pathList("travel/usa"),
  },
  {
    categoryName: "vietnam",
    categoryDisplayName: "Vietnam",
    pathList: pathList("travel/vietnam"),
  },
];
