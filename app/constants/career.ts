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
    description: `I majored in computer science and received the president's commendation. I also actively participated in hackathons and internships.`,
    period: "2016 - 2020",
    icon: "graduationCap",
  },
  {
    title: "Android App Developer",
    subtitle: "ZOZO, Inc.",
    description:
      "I was defining requirements, designing, and coding an Android application for ZOZOTOWN.",
    period: "2020 - 2023",
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
