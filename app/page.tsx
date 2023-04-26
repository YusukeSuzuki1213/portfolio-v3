import Image from "next/image";
import { ScrollId } from "./constants/scrollId";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Heading from "./components/Heading";

export default function Page() {
  return (
    <main>
      <div id={ScrollId.HOME} className="h-screen">
        <Home />
      </div>
      <div
        id={ScrollId.RESUME}
        className="h-screen pt-16 flex flex-col items-center justify-center"
      >
        <Heading text="Resume" />
        <Resume />
      </div>
      <div id={ScrollId.POSTS_AND_TALKS} className="h-screen">
        <h1>Posts-and-talks</h1>
      </div>
      <div id={ScrollId.CONTACT} className="h-screen">
        <h1>Posts-and-talks</h1>
      </div>
    </main>
  );
}
