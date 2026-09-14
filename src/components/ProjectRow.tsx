"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import type { Project } from "@/data/projects";

function StoreBadge({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="badge label !text-current"
    >
      {label}
      <span aria-hidden>↗</span>
    </a>
  );
}

export function ProjectRow({ project }: { project: Project }) {
  // Cursor-following preview: write the pointer position into CSS variables
  // on the row itself so no React re-render happens per mouse move.
  const onMove = (e: MouseEvent<HTMLLIElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    // Keep the preview inside the row horizontally so it never gets clipped.
    const x = Math.min(e.clientX - r.left, r.width - 380);
    el.style.setProperty("--mx", `${Math.max(x, 0)}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  const wide = project.preview && project.preview.width > project.preview.height;

  return (
    <li
      className="row border-t border-line last:border-b"
      onMouseMove={onMove}
    >
      <div className="relative z-[1] grid grid-cols-[2.5rem_1fr] gap-x-4 gap-y-4 py-7 lg:grid-cols-[4rem_minmax(0,1.3fr)_minmax(0,1fr)_auto_3rem] lg:items-center lg:gap-x-6 lg:py-9">
        <span className="label pt-2 !text-current opacity-70 lg:pt-0">
          {project.index}
        </span>

        <h3 className="text-[2rem] font-bold leading-none tracking-[-0.03em] [word-break:keep-all] md:text-4xl lg:whitespace-nowrap lg:text-5xl">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="stretched"
          >
            {project.name}
          </a>
        </h3>

        <p className="row-muted col-start-2 text-base [word-break:keep-all] lg:col-start-auto lg:text-lg">
          {project.tagline}
          <span className="mt-2 block text-sm leading-relaxed opacity-80 lg:hidden">
            {project.description}
          </span>
        </p>

        <div className="col-start-2 flex flex-wrap gap-2 lg:col-start-auto">
          {project.appStore && (
            <StoreBadge href={project.appStore} label="App Store" />
          )}
          {project.googlePlay && (
            <StoreBadge href={project.googlePlay} label="Google Play" />
          )}
        </div>

        <span
          aria-hidden
          className="row-arrow hidden justify-self-end text-3xl lg:block"
        >
          →
        </span>
      </div>

      {project.preview && (
        <div className={["preview", wide ? "is-wide" : ""].join(" ")} aria-hidden>
          <Image
            src={project.preview.src}
            alt=""
            width={project.preview.width}
            height={project.preview.height}
            sizes="320px"
            className="block h-auto w-full"
          />
        </div>
      )}
    </li>
  );
}
