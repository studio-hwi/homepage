import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function Stack() {
  return (
    <section className="wrap pt-28 md:pt-40">
      <Reveal>
        <header className="label flex items-end justify-between pb-5">
          <span>Stack</span>
          <span>{String(site.stack.length).padStart(2, "0")}</span>
        </header>
      </Reveal>

      <ul className="border-t border-line">
        {site.stack.map((s, i) => (
          <Reveal key={s.name} delay={i * 70}>
            <li className="group flex flex-col gap-2 border-b border-line py-5 md:flex-row md:items-baseline md:justify-between md:gap-6 md:py-7">
              <span className="text-[2.5rem] font-bold leading-none tracking-[-0.03em] transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-4 md:text-6xl">
                {s.name}
              </span>
              <span className="label whitespace-nowrap">{s.role}</span>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
