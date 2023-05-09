import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faQ } from "@fortawesome/free-solid-svg-icons";

type ServiceAccount = {
  url: string;
  icon: Icon;
};

type Icon = "github" | "twitter" | "qiita";

export const MY_TWITTER_URL = "https://twitter.com/s1u2z1u3ki";

export const serviceAccounts: ServiceAccount[] = [
  {
    url: MY_TWITTER_URL,
    icon: "twitter",
  },
  {
    url: "https://github.com/YusukeSuzuki1213",
    icon: "github",
  },
  {
    url: "https://qiita.com/YusukeSuzuki1213",
    icon: "qiita",
  },
];

export const toAwesomeIcon = (icon: Icon) => {
  switch (icon) {
    case "github":
      return faGithub;
    case "twitter":
      return faTwitter;
    case "qiita":
      return faQ;
  }
};
