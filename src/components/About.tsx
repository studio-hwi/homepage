import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="wrap scroll-mt-20 pt-32 md:pt-48">
      <Reveal>
        <header className="label flex items-end justify-between border-b border-line pb-5">
          <span>About</span>
          <span>What I do</span>
        </header>
      </Reveal>

      <Reveal>
        <p className="mt-10 max-w-4xl text-2xl font-medium leading-snug tracking-[-0.02em] [word-break:keep-all] md:mt-14 md:text-[2.6rem] md:leading-[1.2]">
          {site.name}는 서울에서 혼자 운영하는 개발 스튜디오입니다.
          기획·디자인·개발·출시·운영까지 한 사람이 맡아, 작게 만들고 빠르게
          검증하며 실제 사용자와 함께 다듬습니다.
        </p>
      </Reveal>

      <div className="mt-16 grid border-t border-line md:mt-24 md:grid-cols-3">
        {site.services.map((s, i) => (
          <Reveal key={s.index} delay={i * 90}>
            <div className="h-full border-b border-line py-8 md:border-b-0 md:border-l md:py-10 md:pl-7 md:pr-8 md:last:border-r">
              <span className="label">{s.index}</span>
              <h3 className="mt-5 text-2xl font-bold tracking-[-0.02em] md:text-[1.75rem]">
                {s.title}
              </h3>
              <p className="mt-3 max-w-sm leading-relaxed text-muted [word-break:keep-all]">
                {s.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
