// const assertionを使って、リテラル型として扱う
export const ScrollId = {
  HOME: "home",
  RESUME: "resume",
  POSTS_AND_TALKS: "posts-and-talks",
  CONTACT: "contact",
} as const;

export type ScrollIdType = (typeof ScrollId)[keyof typeof ScrollId];
