"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

/**
 * Fixed top bar that inverts over light content (mix-blend-mode: difference)
 * and slides away while scrolling down so it never sits on top of body copy.
 */
export function Nav() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        setHidden(y > last && y > 120);
        last = y;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 text-white mix-blend-difference",
        "transition-transform duration-500 ease-[var(--ease-out-expo)]",
        hidden ? "-translate-y-full" : "translate-y-0",
      ].join(" ")}
    >
      <nav className="wrap flex h-20 items-center justify-between">
        <a
          href="#top"
          className="text-base font-extrabold tracking-[-0.03em] md:text-lg"
        >
          {site.name}
        </a>
        {/* Solid color on purpose: translucent text + mix-blend-mode renders
            inconsistently across engines. */}
        <ul className="label flex gap-6 !text-[#d4d4d4] md:gap-10">
          {site.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="ulink transition-colors hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
