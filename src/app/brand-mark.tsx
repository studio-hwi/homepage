import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/**
 * Square brand mark shared by icon.tsx and apple-icon.tsx: a white "H" on the
 * site's black, square corners like the rest of the design (iOS applies its
 * own mask to the touch icon). Not a route: only special file names are.
 *
 * favicon.ico is a static copy of this mark (16/32/48px, made from /icon).
 * Regenerate it whenever the mark changes.
 */
export async function renderBrandMark(px: number) {
  // Read at build time only: the icon routes are statically generated.
  const extraBold = await readFile(
    join(
      process.cwd(),
      "node_modules",
      "pretendard",
      "dist",
      "public",
      "static",
      "Pretendard-ExtraBold.otf",
    ),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#f2f2f2",
          fontFamily: "Pretendard",
          fontSize: px * 0.72,
          fontWeight: 800,
          letterSpacing: -px * 0.02,
          lineHeight: 1,
        }}
      >
        H
      </div>
    ),
    {
      width: px,
      height: px,
      fonts: [
        { name: "Pretendard", data: extraBold, weight: 800, style: "normal" },
      ],
    },
  );
}
