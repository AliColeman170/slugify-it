import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Slugify.it - Convert Text to SEO-Friendly Slugs";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const geistRegular = fetch(
    new URL("../fonts/Geist/otf/Geist-Regular.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const geistBold = fetch(
    new URL("../fonts/Geist/otf/Geist-Bold.otf", import.meta.url)
  ).then((res) => res.arrayBuffer());
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#1f1f23",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            zIndex: 10,
            padding: "40px",
          }}
        >
          <h1
            style={{
              fontSize: "100px",
              fontWeight: 900,
              fontFamily: "Geist",
              background: "linear-gradient(135deg, #ffffff 0%, #d1d5db 100%)",
              backgroundClip: "text",
              color: "transparent",
              margin: "0 0 20px 0",
              letterSpacing: "-0.02em",
            }}
          >
            <span>Slugify</span>
            <span
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #9333ea 100%)",
                backgroundClip: "text",
                color: "transparent",
                marginLeft: "-0.15em",
              }}
            >
              .it
            </span>
          </h1>
          <p
            style={{
              fontSize: "32px",
              color: "#d1d5db",
              margin: "0",
              fontWeight: 500,
              fontFamily: "Geist",
              maxWidth: "800px",
              lineHeight: 1.2,
            }}
          >
            Convert any text into SEO-friendly slugs instantly.
          </p>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Geist",
          data: await geistRegular,
          style: "normal",
          weight: 400,
        },
        {
          name: "Geist",
          data: await geistBold,
          style: "normal",
          weight: 700,
        },
      ],
    }
  );
}
