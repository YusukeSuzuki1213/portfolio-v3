import Script from "next/script";

export default function PostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Script src="https://embed.zenn.studio/js/listen-embed-event.js" />
      {children}
    </div>
  );
}
