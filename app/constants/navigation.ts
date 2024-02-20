export type Navigation = {
  readonly path: string;
  readonly displayText: string;
};

export const navs: Navigation[] = [
  {
    path: "/",
    displayText: "About me",
  },
  {
    path: "/post",
    displayText: "Post",
  },
  {
    path: "/gallery",
    displayText: "Gallery",
  },
];
