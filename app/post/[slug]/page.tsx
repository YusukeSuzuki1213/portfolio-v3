import "zenn-content-css-dark";
import markdownToHtml from "zenn-markdown-html";
import { getInternalPostsBySlug, getInternalPostSlugs } from "../lib/api";
import Footer from "@/app/components/Footer";

export default function Post({ params }: { params: { slug: string } }) {
  const post = getInternalPostsBySlug(params.slug);
  const html = markdownToHtml(post.content, {
    embedOrigin: "https://embed.zenn.studio",
  });

  return (
    <div className="bg-black">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 py-8 md:py-16">
          {post.titleIcon && (
            <span className="text-5xl md:text-6xl">{post.titleIcon}</span>
          )}
          <h1 className="text-3xl md:text-4xl tracking-wide font-bold mx-8">
            {post.title}
          </h1>
          <p className="text-sm tracking-wider text-gray-400">
            公開日: {post.publishDate}
          </p>
        </div>
        <div
          className="znc-dark p-4 md:p-8"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <footer className="bg-black">
        <Footer />
      </footer>
    </div>
  );
}

export const generateStaticParams = async () => {
  const posts = getInternalPostSlugs();
  return posts.map((slug) => ({
    slug: slug,
  }));
};
