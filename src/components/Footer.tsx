import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap label flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <span>{site.location}</span>
        <ul className="flex gap-6">
          {site.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ulink transition-colors hover:text-fg"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#top" className="ulink transition-colors hover:text-fg">
              Top ↑
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
