import {
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";

type CareerType = {
  title: string;
  subtitle: string;
  description: string;
  period: string;
  icon: Icon;
};

type Icon = "graduationCap" | "briefcase";

export const careers: CareerType[] = [
  {
    title: "Bachelor's Degree",
    subtitle: "Faculty of Informatics, Shizuoka University",
    description:
      "I studied computer science as my major and was honored with a commendation from the president. Additionally, I was actively involved in hackathons and internships.",
    period: "2016 - 2020",
    icon: "graduationCap",
  },
  {
    title: "Android App Developer",
    subtitle: "ZOZO, Inc.",
    description:
      "I was working on developing the Android application for ZOZOTOWN.",
    period: "2020 - 2023",
    icon: "briefcase",
  },
  {
    title: "Freelance Android App Developer",
    subtitle: "",
    description:
      "I'm developing Android applications as a freelance engineer for various companies",
    period: "2023 - ",
    icon: "briefcase",
  },
];

export const toAwesomeIcon = (icon: Icon) => {
  switch (icon) {
    case "graduationCap":
      return faGraduationCap;
    case "briefcase":
      return faBriefcase;
  }
};
