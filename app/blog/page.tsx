import Footer from "@/app/components/Footer";
import Heading from "@/app/components/Heading";
import { getAllPosts } from "./lib/api";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <div className="bg-neutral-900 px-4 lg:px-8 pb-8">
        <div className="py-8">
          <Heading id="gallery" text="Blog" />
        </div>
        {posts.map((post) => {
          return <article key={post.slug} className="mb-10"></article>;
        })}
      </div>
      <footer className="bg-black">
        <Footer />
      </footer>
    </>
  );
}
