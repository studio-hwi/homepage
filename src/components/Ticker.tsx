import { projects } from "@/data/projects";
import { site } from "@/data/site";

const items = [...projects.map((p) => p.name), site.name, "iOS · Android · Web"];

export function Ticker() {
  const copy = (
    <span className="flex shrink-0">
      {items.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="px-6 md:px-10">{item}</span>
          <span aria-hidden className="text-fg/40">
            ✦
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div
      className="ticker label overflow-hidden border-y border-line py-4 !text-fg/70"
      aria-hidden
    >
      <div className="ticker-track">
        {copy}
        {copy}
      </div>
    </div>
  );
}
