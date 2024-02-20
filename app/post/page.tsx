import Footer from "@/app/components/Footer";
import Heading from "@/app/components/Heading";
import { getAllPosts } from "./lib/api";
import Card from "../components/Card";

export default function PostPage() {
  const posts = getAllPosts();

  return (
    <>
      <div className="bg-neutral-900 px-4 lg:px-8 pb-8 pt-16">
        <div className="py-8">
          <Heading text="Post" />
        </div>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            return (
              <div
                key={post.title}
                className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4 flex items-center justify-center"
              >
                <Card
                  title={post.title}
                  subtitle={post.description}
                  date={post.publishDate}
                  url={post.url}
                  imageUrl={post.imageUrl}
                />
              </div>
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
