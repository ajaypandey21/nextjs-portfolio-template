import { siteConfig } from "@/config/site";
import { ProjectItem } from "./ProjectItem";

export function Projects() {
  return (
    <section
      className="work section-shell section-pad"
      id="work"
      aria-labelledby="work-title"
    >
      <header className="section-heading section-heading--work" data-reveal>
        <p className="eyebrow">
          <span>03</span> Selected work
        </p>
        <h2 id="work-title">
          A few things made
          <br />
          <em>with intention.</em>
        </h2>
        <p>A selection of recent product and interface work.</p>
      </header>

      <div className="projects-list">
        {siteConfig.projects.map((project) => (
          <ProjectItem key={project.number} project={project} />
        ))}
      </div>
    </section>
  );
}
