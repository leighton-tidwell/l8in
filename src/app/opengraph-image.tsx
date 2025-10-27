import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Leighton Tidwell - AI-First Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
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
          backgroundColor: "#f6f4ee",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <h1
            style={{
              fontSize: "120px",
              fontWeight: 500,
              color: "#121212",
              margin: 0,
              letterSpacing: "-0.03em",
            }}
          >
            Leighton
          </h1>
          <p
            style={{
              fontSize: "48px",
              fontWeight: 400,
              color: "rgba(18, 18, 18, 0.64)",
              margin: 0,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
            }}
          >
            AI-First Engineer
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
