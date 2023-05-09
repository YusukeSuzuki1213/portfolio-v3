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
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Yusuke's portfolio" />
        <meta property="og:site_name" content="Yusuke's portfolio" />
        <meta property="og:image" content="/ogp.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>Yusuke Suzuki Portfolio</title>
      </head>
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
