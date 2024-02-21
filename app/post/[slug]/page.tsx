import "zenn-content-css-dark";
import markdownToHtml from "zenn-markdown-html";
import { getInternalPostsBySlug, getInternalPostSlugs } from "../lib/api";
import Footer from "@/app/components/Footer";
import { Toc } from "@/app/components/Toc/Toc";

export default function Post({ params }: { params: { slug: string } }) {
  const post = getInternalPostsBySlug(params.slug);
  const html = markdownToHtml(post.content, {
    embedOrigin: "https://embed.zenn.studio",
  });

  return (
    <div className="bg-black pt-16">
      <div className="max-w-6xl mx-auto">
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

        <div className="flex flex-row items-start gap-8 sm:mx-10">
          <div
            className="lg:basis-3/4 znc-dark p-4 md:p-8 mb-16 bg-neutral-900"
            dangerouslySetInnerHTML={{ __html: html }}
          />
          <div className="basis-1/4 bg-black p-8 bg-neutral-900 sticky top-24 hidden lg:block">
            <Toc selector=".znc-dark" />
          </div>
        </div>
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
