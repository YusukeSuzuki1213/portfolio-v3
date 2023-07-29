import Footer from "@/app/components/Footer";
import Gallery from "@/app/components/Gallery";
import { galleries } from "@/app/constants/gallery";

export default function GalleryPage() {
  return (
    <div>
      <Gallery galleries={galleries} />
      <footer className="bg-black">
        <Footer />
      </footer>
    </div>
  );
}
