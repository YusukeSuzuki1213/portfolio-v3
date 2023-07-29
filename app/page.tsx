import Home from "@/app/components//Home";
import Resume from "@/app/components/Resume";
import Blog from "@/app/components/Blog";
import TechTalk from "@/app/components/TechTalk";
import Contact from "@/app/components/Contact/Contact";
import Photos from "@/app/components/Photos";
import { IntersectionObserver } from "@/app/components/IntersectionObserver";

export default function Page() {
  return (
    <main className="pb-20">
      <IntersectionObserver id="home" />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Home />
      </div>

      <div className="min-h-screen pt-24 flex flex-col items-center space-y-24 ml-12 mr-8 md:ml-40 md:mr-36 lg:ml-44 lg:mr-40">
        <Resume />
      </div>

      <div className="min-h-screen pt-24 md:mx-24 lg:mx-28">
        <Blog />
      </div>

      <div className="min-h-screen pt-24 md:mx-24 lg:mx-28">
        <TechTalk />
      </div>

      <div className="min-h-screen pt-24 md:mx-24 lg:mx-28">
        <Photos />
      </div>

      <div className="min-h-screen pt-24 mx-8 sm:mx-12 md:mx-24 lg:mx-44">
        <Contact />
      </div>
    </main>
  );
}
