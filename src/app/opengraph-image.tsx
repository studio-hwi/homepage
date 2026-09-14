import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = site.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Latin-only copy on purpose: the default OG font has no Korean glyphs.
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
          padding: 72,
          background: "#0a0a0a",
          color: "#f2f2f2",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 4,
            color: "#8a8a8a",
          }}
        >
          <span>INDEPENDENT DEVELOPER</span>
          <span>SEOUL, KR</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 168,
            fontWeight: 800,
            letterSpacing: -8,
            lineHeight: 0.92,
          }}
        >
          <span>STUDIO</span>
          <span style={{ color: "#8a8a8a" }}>HWI.</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,0.22)",
            fontSize: 22,
            letterSpacing: 3,
            color: "#8a8a8a",
          }}
        >
          <span>03 APPS · iOS · ANDROID · WEB</span>
          <span>studiohwi.kr</span>
        </div>
      </div>
    ),
    size,
  );
}
