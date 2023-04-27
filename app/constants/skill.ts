type SkillType = {
  text: string;
  rate: Rate;
};

type Rate = "60%" | "75%" | "80%";

export const skills: SkillType[] = [
  {
    text: "Android App Development (Kotlin,Java)",
    rate: "80%",
  },
  {
    text: "Web Development (Next.js)",
    rate: "60%",
  },
  {
    text: "Python",
    rate: "75%",
  },
];

export const classFromRate = (rate: Rate) => {
  switch (rate) {
    case "60%":
      return "w-3/5";
    case "75%":
      return "w-9/12";
    case "80%":
      return "w-4/5";
  }
};
