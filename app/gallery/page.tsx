import Footer from "@/app/components/Footer";
import Gallery from "@/app/components/Gallery";
import { galleries } from "@/app/constants/gallery";
import Heading from "@/app/components/Heading";

export default function GalleryPage() {
  return (
    <div>
      <div className="my-8">
        <Heading id="gallery" text="Gallery" />
      </div>
      <Gallery galleries={galleries} />
      <footer className="bg-black">
        <Footer />
      </footer>
    </div>
  );
}
