import { blogs } from "@/app/constants/blog";
import Card from "@/app/components/Card";
import Heading from "@/app/components/Heading";

export default function Blog() {
  return (
    <div>
      <div className="mb-16">
        <Heading id="blog" text="Blog" />
      </div>
      <div className="flex flex-wrap">
        {blogs.map((blog) => {
          return (
            <div
              key={blog.title}
              className="w-full p-4 sm:w-1/2 lg:w-1/2 2xl:w-1/3  flex items-center justify-center"
            >
              <Card
                title={blog.title}
                subtitle={blog.subtitle}
                date={blog.date}
                url={blog.url}
                imageUrl={blog.imageUrl}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
