import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  siteName,
  siteDescription,
  siteUrl,
  siteTwitterAccount,
} from "./constants/metadata";
import "./globals.css";

export const metadata = {
  title: {
    default: siteName,
    /** `next-seo`の`titleTemplate`に相当する機能 */
    template: `%s - ${siteName}`,
  },
  siteDescription,
  openGraph: {
    title: siteName,
    siteDescription,
    url: siteUrl,
    siteName: siteName,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    site: siteTwitterAccount,
    creator: siteTwitterAccount,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <footer className="bg-black">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
