import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import ProjectVisual from "./ProjectVisual";
import { StatusBadge, Tag } from "./Badges";
import { ArrowRight, ArrowUpRight } from "./Icons";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group panel flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-glow-sm">
      <ProjectVisual project={project} className="h-44" />
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-3 flex items-center gap-2.5">
          <StatusBadge status={project.status} />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            {project.category[0]}
          </span>
        </div>
        <h3 className="font-display text-lg font-semibold tracking-tight text-ink transition-colors duration-300 group-hover:text-accent">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 5).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className="mt-5 flex items-center gap-4 border-t border-edge pt-4 font-mono text-[11px] uppercase tracking-widest">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-accent transition-opacity hover:opacity-80"
          >
            Details <ArrowRight className="h-3 w-3" />
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
            >
              GitHub <ArrowUpRight className="h-3 w-3" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
