import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="wrap flex min-h-[100svh] flex-col justify-end pb-6 pt-32 md:pb-8">
      <p className="label fade-up" style={{ animationDelay: "120ms" }}>
        Independent developer — {site.location}
      </p>

      <h1 className="display mt-6 text-[clamp(64px,13vw,184px)]">
        <span className="clip">
          <span className="rise" style={{ animationDelay: "200ms" }}>
            아이디어를
          </span>
        </span>
        <span className="clip">
          <span
            className="rise outline-text"
            style={{ animationDelay: "320ms" }}
          >
            제품으로.
          </span>
        </span>
      </h1>

      <div className="mt-12 flex flex-col gap-10 md:mt-16 md:flex-row md:items-end md:justify-between">
        <p
          className="fade-up max-w-xl text-lg leading-relaxed text-fg/85 md:text-2xl md:leading-snug"
          style={{ animationDelay: "520ms" }}
        >
          iOS·Android 앱과 웹을 기획부터 출시까지,
          <br />한 사람이 끝까지 만듭니다.
        </p>

        <ul
          className="fade-up flex gap-8 md:gap-12"
          style={{ animationDelay: "680ms" }}
        >
          {site.stats.map((s) => (
            <li key={s.label} className="flex flex-col gap-1">
              <span className="text-3xl font-semibold tracking-tight md:text-4xl">
                {s.value}
              </span>
              <span className="label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="fade-up mt-12 border-t border-line md:mt-16"
        style={{ animationDelay: "800ms" }}
      >
        <div className="label flex justify-between py-4">
          <span>Scroll ↓</span>
          <span>
            {site.since} — {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </section>
  );
}
