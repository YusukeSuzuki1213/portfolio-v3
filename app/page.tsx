import { ScrollId } from "./constants/scrollId";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Blog from "./components/Blog";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";

export default function Page() {
  return (
    <main>
      <div
        id={ScrollId.HOME}
        className="min-h-screen flex flex-col items-center justify-center"
      >
        <Home />
      </div>
      <div
        id={ScrollId.RESUME}
        className="min-h-screen pt-24 flex flex-col items-center space-y-24 ml-12 mr-8 lg:ml-44 lg:mr-40"
      >
        <Resume />
      </div>
      <div id={ScrollId.BLOG} className="min-h-screen pt-24 lg:mx-28">
        <Blog />
      </div>
      <div id={ScrollId.PRESENTATION} className="min-h-screen pt-24 lg:mx-28">
        <Presentation />
      </div>
      <div id={ScrollId.CONTACT} className="min-h-screen pt-24 lg:mx-28">
        <Contact />
      </div>
    </main>
  );
}
