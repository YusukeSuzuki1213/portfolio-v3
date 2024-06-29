import Profile from "@/app/components/Profile";
import Contact from "@/app/components/Contact";
import Awards from "./components/Awards";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import About from "./components/About";
import Education from "./components/Education";
import WorkExperiences from "./components/WorkExperiences";
import TechnicalOutputs from "./components/TechnicalOutputs";

export default function Page() {
  return (
    <>
      <div className="flex flex-col items-center bg-neutral-900 text-gray-200">
        <main className="max-w-3xl mt-20 mx-4 md:mx-12">
          <div className="my-16">
            <Profile />
          </div>
          <div className="mb-16">
            <About />
          </div>
          <div className="mb-16">
            <Education />
          </div>
          <div className="mb-16">
            <TechnicalOutputs />
          </div>
          <div className="mb-16">
            <WorkExperiences />
          </div>
          <div className="mb-16">
            <Skills />
          </div>
          <div className="mb-16">
            <Awards />
          </div>
          <div className="mb-16">
            <Certifications />
          </div>
          <div className="mb-16">
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
}
