import Footer from "@/app/components/Footer";
import Gallery from "@/app/components/Gallery";
import { galleries } from "@/app/constants/gallery";
import Heading from "@/app/components/Heading";

export default function Page() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-neutral-900">
      <div className="px-4 pb-8 pt-16 flex flex-col items-center">
        <div className="py-16">
          <Heading text="Gallery" />
        </div>
        <Gallery galleries={galleries} />
      </div>
    </div>
  );
}
