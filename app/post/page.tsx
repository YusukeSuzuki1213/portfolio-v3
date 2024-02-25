import Heading from "@/app/components/Heading";
import Card from "../components/Card";
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
      <div className="min-h-screen bg-neutral-900 px-4 lg:px-8 pb-8 pt-16 flex flex-col items-center">
        <div className="py-16">
          <Heading text="Post" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 justify-items-center max-w-4xl">
          {posts.map((post) => {
            return (
              <Card
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
    </>
  );
}
