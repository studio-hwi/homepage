import { projects } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { ProjectRow } from "@/components/ProjectRow";

export function Work() {
  return (
    <section id="work" className="wrap scroll-mt-20 pt-28 md:pt-40">
      <Reveal>
        <header className="label flex items-end justify-between pb-5">
          <span>
            Selected Work ({String(projects.length).padStart(2, "0")})
          </span>
          <span className="hidden lg:inline">Hover to preview</span>
        </header>
      </Reveal>

      <ol>
        {projects.map((project, i) => (
          <Reveal key={project.index} delay={i * 90}>
            <ProjectRow project={project} />
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
