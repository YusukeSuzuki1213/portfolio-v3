import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import { HeadlineContextProvider } from "@/app/context/headline.context";
import Footer from "./components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <HeadlineContextProvider>
        <body>
          <header>
            <Navbar />
          </header>
          <Sidebar />
          <div className="lg:ml-64 bg-neutral-900">{children}</div>
          <footer className="lg:ml-64 bg-black">
            <Footer />
          </footer>
        </body>
      </HeadlineContextProvider>
    </html>
  );
}
