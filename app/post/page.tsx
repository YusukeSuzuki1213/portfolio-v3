import Footer from "@/app/components/Footer";
import Heading from "@/app/components/Heading";
import PostCard from "../components/PostCard";
import { headers } from "next/headers";
import { ExternalPostType, InternalPostType, PostType } from "../type/post";

const fetchAllPosts = async () => {
  const host = headers().get("host");
  const res = await fetch(`http://${host}/api/allPosts`);
  return res.json();
};

export default async function PostPage() {
  const posts: (InternalPostType | ExternalPostType)[] = await fetchAllPosts();
  return (
    <>
      <div className="bg-neutral-900 px-4 lg:px-8 pb-8 pt-16 flex flex-col items-center">
        <div className="py-8">
          <Heading text="Post" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 justify-items-center max-w-4xl">
          {posts.map((post) => {
            return (
              <PostCard
                key={post.title}
                title={post.title}
                date={post.publishDate}
                url={post.url}
                iconUrl={post.titleIconUrl}
                shouldOpenNewWindow={!("slug" in post)}
              />
            );
          })}
        </div>
      </div>
      <footer className="bg-black">
        <Footer />
      </footer>
    </>
  );
}
