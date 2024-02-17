import { posts } from "@/app/constants/externalPosts";
import Card from "@/app/components/Card";
import Heading from "@/app/components/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Post() {
  return (
    <div>
      <div className="mb-16">
        <Heading id="post" text="Post" />
      </div>
      <div className="flex flex-wrap">
        {posts.map((post) => {
          return (
            <div
              key={post.title}
              className="w-full p-4 sm:w-1/2 lg:w-1/2 2xl:w-1/3  flex items-center justify-center"
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
      <div className="flex flex-col items-center justify-center mx-6">
        <div className="text-center mt-12 w-full sm:w-1/2 md:w-1/3">
          <Link href="/post">
            <button className="text-green-500 hover:text-white border border-green-500 hover:bg-green-500 hover:border-green-500 font-medium rounded-lg py-2.5 text-center text-sm w-full">
              <span>View all&nbsp;&nbsp;</span>
              <FontAwesomeIcon
                className="w-3.5 h-3.5 text-right"
                icon={faArrowRight}
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
