import { renderBrandMark } from "./brand-mark";

// 512px: large enough for Google's search-result favicon and the JSON-LD logo.
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return renderBrandMark(size.width);
}
