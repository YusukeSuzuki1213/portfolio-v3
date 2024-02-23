import "zenn-content-css-dark";
import markdownToHtml from "zenn-markdown-html";
import { getInternalPostSlugs } from "../../lib/post";
import Footer from "@/app/components/Footer";
import { Toc } from "@/app/components/Toc/Toc";
import { headers } from "next/headers";
import UserBio from "@/app/components/UserBio";
import Image from "next/image";

const fetchInternalPostsBySlug = async (slug: string) => {
  const host = headers().get("host");
  const res = await fetch(`http://${host}/api/post?slug=${slug}`);
  return res.json();
};

export default async function Post({ params }: { params: { slug: string } }) {
  const post = await fetchInternalPostsBySlug(params.slug);
  const html = markdownToHtml(post.content, {
    embedOrigin: "https://embed.zenn.studio",
  });

  return (
    <div className="bg-black pt-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 py-8 md:py-16">
          <div className="h-20 w-20 flex justify-center items-center">
            <Image width={96} height={96} src={post.titleIconUrl} alt="" />
          </div>
          <h1 className="text-3xl md:text-4xl tracking-wide font-bold mx-4 sm:mx-14 md:mx-16">
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
          <div className="hidden lg:flex basis-1/4 flex-col items-center gap-8 bg-black sticky top-20">
            <div className="w-full p-6 bg-neutral-900">
              <UserBio imageUrl="/avatar.jpg" />
            </div>
            <div className="w-full p-6 bg-neutral-900">
              <Toc selector=".znc-dark" />
            </div>
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
