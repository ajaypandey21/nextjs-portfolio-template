import Image from "next/image";
import type { Project } from "@/config/site";
import { ArrowUpRight } from "@/components/ui/Icons";

export function ProjectItem({ project }: { project: Project }) {
  return (
    <article className="project" data-reveal>
      <a
        className="project__image"
        href={project.liveUrl}
        target="_blank"
        rel="noreferrer"
        data-cursor="View"
        aria-label={`View ${project.title} live demo`}
      >
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 767px) 100vw, 64vw"
        />
        <span className="project__image-index">{project.number}</span>
      </a>

      <div className="project__details">
        <div className="project__heading">
          <span>{project.number}</span>
          <h3>{project.title}</h3>
        </div>
        <p className="project__description">{project.description}</p>
        <dl className="project__meta">
          <div>
            <dt>Year</dt>
            <dd>{project.year}</dd>
          </div>
          <div>
            <dt>Category</dt>
            <dd>{project.category}</dd>
          </div>
          <div>
            <dt>Built with</dt>
            <dd>{project.technology}</dd>
          </div>
        </dl>
        <div className="project__links">
          <a href={project.liveUrl} target="_blank" rel="noreferrer">
            Live demo <ArrowUpRight />
          </a>
          <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
            GitHub <ArrowUpRight />
          </a>
        </div>
      </div>
    </article>
  );
}
