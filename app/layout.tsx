import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import { HeadlineContextProvider } from "@/app/context/headline.context";
import Footer from "./components/Footer";

const siteName = "Yusuke's portfolio";
const description = "This is Yusuke's portfolio site.";
const url = "https://yusuke-suzuki.site/";
const twitterAccount = "@s1u2z1u3ki";

export const metadata = {
  title: {
    default: siteName,
    /** `next-seo`の`titleTemplate`に相当する機能 */
    template: `%s - ${siteName}`,
  },
  description,
  openGraph: {
    title: siteName,
    description,
    url,
    siteName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description,
    site: twitterAccount,
    creator: twitterAccount,
  },
  alternates: {
    canonical: url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
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
