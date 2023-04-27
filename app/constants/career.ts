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
    title: "Bachelor of information",
    subtitle: "Shizuoka University",
    description:
      "僕の名前は僕の名前は僕の名前は僕の名前は僕の名前は僕の名前は僕の名前、は僕の名前は僕の名前はの名前は僕の名前は僕の名前はの名前は僕の名前は僕の名前は",
    period: "2016 - 2020",
    icon: "graduationCap",
  },
  {
    title: "Android App Developer",
    subtitle: "Shizuoka University",
    description:
      "僕の名前は僕の名前は僕の名前は僕の名前は僕の名前は僕の名前は僕の名前、は僕の名前は僕の名前はの名前は僕の名前は僕の名前はの名前は僕の名前は僕の名前は",
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
