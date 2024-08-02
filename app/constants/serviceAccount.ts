import { faXTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faQ, faZ } from "@fortawesome/free-solid-svg-icons";
import { IconType, ServiceAccountType } from "../type/ServiceAccount";

export const MY_TWITTER_URL = "https://twitter.com/s1u2z1u3ki";

export const serviceAccounts: ServiceAccountType[] = [
  {
    url: MY_TWITTER_URL,
    icon: "twitter",
  },
  {
    url: "https://github.com/YusukeSuzuki1213",
    icon: "github",
  },
  /* {
    url: "https://qiita.com/YusukeSuzuki1213",
    icon: "qiita",
  },
  {
    url: "https://zenn.dev/yusuke_zukki?tab=scraps",
    icon: "zenn",
  }, */
];

export const toAwesomeIcon = (icon: IconType) => {
  switch (icon) {
    case "github":
      return faGithub;
    case "twitter":
      return faXTwitter;
    case "qiita":
      return faQ;
    case "zenn":
      return faZ;
  }
};
