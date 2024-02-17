import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import { InternalPostType, ExternalPostType } from "../../type/post";
import { posts as externalPosts } from "@/app/constants/externalPosts";

const postsDirectory = join(process.cwd(), "app/post/_posts");

export function getInternalPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getInternalPostsBySlug(slug: string): InternalPostType {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    slug: realSlug,
    url: "/post/" + slug,
    imageUrl: "",
    content: content,
  } as InternalPostType;
}

export function getAllPosts(): InternalPostType[] | ExternalPostType[] {
  const slugs = getInternalPostSlugs();
  const internalPosts = slugs.map((slug) => getInternalPostsBySlug(slug));
  const allPosts: (InternalPostType | ExternalPostType)[] = [
    ...internalPosts,
    ...externalPosts,
  ].sort((post1, post2) => (post1.publishDate > post2.publishDate ? -1 : 1));
  return allPosts;
}
