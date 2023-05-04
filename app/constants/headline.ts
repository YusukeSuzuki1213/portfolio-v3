export type Id = "home" | "resume" | "blog" | "techTalk" | "contact";

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
    id: "blog",
    displayText: "Blog",
  },
  {
    id: "techTalk",
    displayText: "Tech Talk",
  },
  {
    id: "contact",
    displayText: "Contact",
  },
];
