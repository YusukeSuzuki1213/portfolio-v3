import { ImageResponse } from "next/og";
import { headers } from "next/headers";
import { loadGoogleFont } from "@/app/lib/font";
import { InternalPostType } from "@/app/type/post";

export const runtime = "edge";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const alt = "ogp image";

type Props = {
  params: { slug: string };
};

const fetchInternalPostsBySlug = async (host: string | null, slug: string) => {
  const res = await fetch(`http://${host}/api/post?slug=${slug}`);
  return res.json();
};

export default async function og({ params: { slug } }: Props) {
  const host = headers().get("host");
  const post: InternalPostType = await fetchInternalPostsBySlug(host, slug);
  const notoSansArrayBuffer = await loadGoogleFont({
    family: "Noto Sans JP",
    weight: 700,
  });

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "linear-gradient(to right, #22c55e, #06b6d4)",
          padding: "2.5rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            justifyContent: "space-between",
            padding: "2rem 3rem",
            backgroundColor: "white",
            borderRadius: "0.5rem",
          }}
        >
          <h1 style={{ fontSize: "3.5rem" }}>{post.title}</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              paddingBottom: "1rem",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}
            >
              <img
                style={{
                  height: "8rem",
                  width: "8rem",
                  borderRadius: "9999px",
                }}
                src={`http://${host}/avatar.jpg`}
                alt="アバターアイコン"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <div style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
                  Yusuke Suzuki
                </div>
                <div style={{ fontSize: "1.75rem", color: "rgb(55 65 81)" }}>
                  {post.publishDate}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "NotoSansJP",
          data: notoSansArrayBuffer,
          weight: 700,
        },
      ],
    }
  );
}
