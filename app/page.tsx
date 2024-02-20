import Home from "@/app/components//Home";
import Resume from "@/app/components/Resume";
import Post from "@/app/components/Post";
import TechTalk from "@/app/components/TechTalk";
import Contact from "@/app/components/Contact";
import Photos from "@/app/components/Photos";
import Footer from "@/app/components/Footer";
import Works from "@/app/components/Works";

export default function Page() {
  return (
    <>
      <div className="bg-neutral-900">
        <main className="pb-20">
          <div className="min-h-screen flex flex-col items-center justify-center">
            <Home />
          </div>
          <div className="min-h-screen pt-24 flex flex-col items-center mx-12 md:mx-40 lg:mx-60 xl:mx-96">
            <Resume />
          </div>
          <div className="min-h-screen pt-24 md:mx-24 lg:mx-28">
            <Post />
          </div>
          <div className="min-h-screen pt-24 md:mx-24 lg:mx-28">
            <TechTalk />
          </div>
          <div className="min-h-screen pt-24 md:mx-24 lg:mx-28">
            <Works />
          </div>
          <div className="min-h-screen pt-24 md:mx-24 lg:mx-28">
            <Photos />
          </div>
          <div className="pt-24 mx-12 md:mx-40 lg:mx-60 xl:mx-96">
            <Contact />
          </div>
        </main>
      </div>
      <footer className="lg:ml-64 bg-black">
        <Footer />
      </footer>
    </>
  );
}
