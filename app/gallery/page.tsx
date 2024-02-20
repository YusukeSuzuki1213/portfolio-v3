import Footer from "@/app/components/Footer";
import Gallery from "@/app/components/Gallery";
import { galleries } from "@/app/constants/gallery";
import Heading from "@/app/components/Heading";

export default function GalleryPage() {
  return (
    <>
      <div className="bg-neutral-900 px-4 lg:px-8 pb-8 pt-16">
        <div className="py-8">
          <Heading text="Photo Gallery" />
        </div>
        <Gallery galleries={galleries} />
      </div>
      <footer className="bg-black">
        <Footer />
      </footer>
    </>
  );
}
