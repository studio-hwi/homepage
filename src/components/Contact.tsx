import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Contact() {
  return (
    <section id="contact" className="wrap scroll-mt-20 pb-28 pt-32 md:pb-40 md:pt-52">
      <Reveal>
        <span className="label">Contact</span>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="display mt-6 text-[clamp(44px,9.5vw,150px)]">
          같이 만들
          <br />
          이야기가 있다면.
        </h2>
      </Reveal>

      <Reveal delay={160}>
        <a
          href={`mailto:${site.email}`}
          className="ulink mt-10 inline-block text-2xl font-medium tracking-[-0.02em] md:mt-14 md:text-5xl"
        >
          {site.email}
        </a>
      </Reveal>

      <Reveal delay={240}>
        <ul className="label mt-10 flex flex-wrap gap-x-8 gap-y-3 md:mt-14">
          {site.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ulink transition-colors hover:text-fg"
              >
                {l.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
