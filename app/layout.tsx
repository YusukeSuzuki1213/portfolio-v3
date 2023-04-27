import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { HeadlineContextProvider } from "./context/headline.context";

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
          <div className="lg:ml-64 bg-gray-950">{children}</div>
          <footer></footer>
        </body>
      </HeadlineContextProvider>
    </html>
  );
}
