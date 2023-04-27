// const assertionを使って、リテラル型として扱う
export const ScrollId = {
  HOME: "home",
  RESUME: "resume",
  BLOG: "blog",
  PRESENTATION: "presentation",
  CONTACT: "contact",
} as const;

export type ScrollIdType = (typeof ScrollId)[keyof typeof ScrollId];
