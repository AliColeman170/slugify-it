import { ImageResponse } from "next/og";

export function generateImageMetadata() {
  return [
    {
      contentType: "image/png",
      size: { width: 180, height: 180 },
      id: "icon",
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
