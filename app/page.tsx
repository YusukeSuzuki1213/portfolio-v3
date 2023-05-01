import Home from "@/app/components//Home";
import Resume from "@/app/components/Resume";
import Blog from "@/app/components/Blog";
import TechTalk from "@/app/components/TechTalk";
import Contact from "@/app/components/Contact";
import { IntersectionObserver } from "@/app/components/IntersectionObserver";

export default function Page() {
  return (
    <main>
      <IntersectionObserver id="home" />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Home />
      </div>

      <div className="min-h-screen pt-24 flex flex-col items-center space-y-24 ml-12 mr-8 lg:ml-44 lg:mr-40">
        <Resume />
      </div>

      <div className="min-h-screen pt-24 lg:mx-28">
        <Blog />
      </div>

      <div className="min-h-screen pt-24 lg:mx-28">
        <TechTalk />
      </div>

      <div className="min-h-screen pt-24 lg:mx-28">
        <Contact />
      </div>
    </main>
  );
}
