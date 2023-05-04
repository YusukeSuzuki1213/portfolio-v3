import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

type ServiceAccount = {
  url: string;
  icon: Icon;
};

type Icon = "github" | "twitter";

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
];

export const toAwesomeIcon = (icon: Icon) => {
  switch (icon) {
    case "github":
      return faGithub;
    case "twitter":
      return faTwitter;
  }
};
