import { ImageResponse } from "next/og";
import { siteConfig } from "./site";

export const alt = `${siteConfig.name}, ${siteConfig.title.split(" — ")[1]}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "76px 84px",
          background: "#11110f",
          color: "#efeee9",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#9a9890",
            fontSize: 26,
            letterSpacing: "0.02em",
          }}
        >
          darkovasiljkov.com
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 74,
              fontWeight: 600,
              letterSpacing: "-0.045em",
              lineHeight: 1.05,
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 20,
              color: "#9a9890",
              fontSize: 38,
              letterSpacing: "-0.02em",
            }}
          >
            Software Engineer
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: 88,
            height: 3,
            background: "#efeee9",
          }}
        />
      </div>
    ),
    size,
  );
}
