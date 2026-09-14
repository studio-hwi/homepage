import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { site } from "@/data/site";
import { projects } from "@/data/projects";

export const alt = site.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Fonts are read at build time only: this route is statically generated.
const fontDir = join(
  process.cwd(),
  "node_modules",
  "pretendard",
  "dist",
  "public",
  "static",
);

export default async function OpenGraphImage() {
  const [extraBold, medium] = await Promise.all([
    readFile(join(fontDir, "Pretendard-ExtraBold.otf")),
    readFile(join(fontDir, "Pretendard-Medium.otf")),
  ]);

  const label = {
    fontSize: 22,
    fontWeight: 500,
    letterSpacing: 2,
    color: "#8a8a8a",
  } as const;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#0a0a0a",
          color: "#f2f2f2",
          fontFamily: "Pretendard",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 26, fontWeight: 800, letterSpacing: -1 }}>
            {site.name}
          </span>
          <span style={label}>INDEPENDENT DEVELOPER — SEOUL, KR</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 150,
            fontWeight: 800,
            letterSpacing: -7,
            lineHeight: 1,
          }}
        >
          <span>아이디어를</span>
          <span style={{ color: "#8a8a8a" }}>제품으로.</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,0.22)",
            ...label,
          }}
        >
          <span>{projects.map((p) => p.name).join("  ·  ")}</span>
          <span>studiohwi.kr</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Pretendard", data: extraBold, weight: 800, style: "normal" },
        { name: "Pretendard", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
