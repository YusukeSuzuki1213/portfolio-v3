import { MetadataRoute } from "next";
import { getInternalPostSlugs } from "./lib/post";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseURL = "https://yusuke-suzuki.site";
  const lastModified = new Date();
  const posts = getInternalPostSlugs();

  return [
    {
      url: baseURL,
      lastModified,
    },
    {
      url: baseURL + "/post",
      lastModified,
    },
    {
      url: baseURL + "/gallery",
      lastModified,
    },
    ...posts.map((slug) => {
      return {
        url: `${baseURL}/post/${slug.replace(/\.md$/, "")}`,
        lastModified,
      };
    }),
  ];
}
