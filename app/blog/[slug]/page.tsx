import "zenn-content-css";
import markdownToHtml from "zenn-markdown-html";
import { getAllPosts, getPostBySlug, getPostSlugs } from "../lib/api";

export default function Blog({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const html = markdownToHtml(post.content, {
    embedOrigin: "https://embed.zenn.studio",
  });

  return (
    <div className="max-w-2xl mx-auto">
      <div className="znc" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export const generateStaticParams = async () => {
  const posts = getPostSlugs();
  return posts.map((slug) => ({
    slug: slug,
  }));
};
