export type Id =
  | "home"
  | "resume"
  | "blog"
  | "techTalk"
  | "works"
  | "photos"
  | "contact"
  | "gallery"
  | "post";

export type Headline = {
  readonly id: Id;
  readonly displayText: string;
};

export const headlines: Headline[] = [
  {
    id: "home",
    displayText: "Home",
  },
  {
    id: "resume",
    displayText: "Resume",
  },
  {
    id: "post",
    displayText: "Post",
  },
  {
    id: "techTalk",
    displayText: "Tech Talk",
  },
  {
    id: "works",
    displayText: "Works",
  },
  {
    id: "photos",
    displayText: "Photos",
  },
  {
    id: "contact",
    displayText: "Contact",
  },
];
