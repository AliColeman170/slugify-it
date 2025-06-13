import { ImageResponse } from "next/og";

export function generateImageMetadata() {
  return [
    {
      contentType: "image/png",
      size: { width: 32, height: 32 },
      id: "xsmall",
    },
    {
      contentType: "image/png",
      size: { width: 48, height: 48 },
      id: "small",
    },
    {
      contentType: "image/png",
      size: { width: 72, height: 72 },
      id: "medium",
    },
    {
      contentType: "image/png",
      size: { width: 192, height: 192 },
      id: "large",
    },
    {
      contentType: "image/png",
      size: { width: 512, height: 512 },
      id: "xlarge",
    },
  ];
}

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(45deg, #3B82F6, #9333EA)",
          width: "100%",
          height: "100%",
          borderRadius: "99999px",
        }}
      />
    )
  );
}
