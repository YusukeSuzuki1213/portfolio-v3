import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

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
