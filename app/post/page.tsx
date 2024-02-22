import Footer from "@/app/components/Footer";
import Heading from "@/app/components/Heading";
import { getAllPosts } from "./lib/api";
import PostCard from "../components/PostCard";

export default function PostPage() {
  const posts = getAllPosts();

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
                title={post.title}
                date={post.publishDate}
                url={post.url}
                iconUrl={post.titleIconUrl}
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
