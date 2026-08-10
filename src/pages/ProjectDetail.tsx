import { Link, Navigate, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import SignalFlow from "../components/SignalFlow";
import { StatusBadge, Tag } from "../components/Badges";
import Reveal from "../components/Reveal";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "../components/Icons";

function Section({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="flex items-baseline gap-3 border-b border-edge pb-3">
        <span className="font-mono text-xs text-accent">/{index}</span>
        <span className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
          {title}
        </span>
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return <Navigate to="/projects" replace />;

  const idx = projects.findIndex((p) => p.slug === slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <div className="container-x pb-20">
      <div className="pt-10 sm:pt-14">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-muted transition-colors hover:text-accent"
        >
          <ArrowLeft className="h-3.5 w-3.5" /> All Projects
        </Link>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            {project.category.join(" / ")}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">
            rev.{project.year}
          </span>
        </div>
        <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-3 max-w-2xl text-base text-muted sm:text-lg">{project.tagline}</p>
      </div>

      {/* 04 — System Architecture */}
      <Reveal className="mt-10">
        <div className="panel relative overflow-hidden p-5 sm:p-8">
          <div className="bg-grid absolute inset-0" aria-hidden />
          <span className="pointer-events-none absolute left-1.5 top-1.5 h-3 w-3 border-l border-t border-accent/70" aria-hidden />
          <span className="pointer-events-none absolute right-1.5 top-1.5 h-3 w-3 border-r border-t border-accent/70" aria-hidden />
          <span className="pointer-events-none absolute bottom-1.5 left-1.5 h-3 w-3 border-b border-l border-accent/70" aria-hidden />
          <span className="pointer-events-none absolute bottom-1.5 right-1.5 h-3 w-3 border-b border-r border-accent/70" aria-hidden />
          <div className="relative">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                /04 System Diagram
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-ok animate-pulse-dot" />
            </div>
            <SignalFlow nodes={project.architecture} />
          </div>
        </div>
      </Reveal>

      <Section index="01" title="Overview">
        <p className="max-w-3xl text-base leading-relaxed text-muted">{project.overview}</p>
      </Section>

      <div className="grid gap-8 md:grid-cols-2">
        <Section index="02" title="Problem">
          <p className="text-base leading-relaxed text-muted">{project.problem}</p>
        </Section>
        <Section index="03" title="Objective">
          <p className="text-base leading-relaxed text-muted">{project.objective}</p>
        </Section>
      </div>

      <Section index="05" title="Implementation">
        <ul className="space-y-3">
          {project.implementation.map((item) => (
            <li key={item} className="flex gap-3 text-base leading-relaxed text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section index="06" title="Challenges & Fixes">
        <p className="mb-5 max-w-3xl text-sm text-muted">
          What went wrong — and how it was fixed. This is where the engineering actually happened.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {project.challenges.map((c) => (
            <div key={c.issue} className="rounded-md border border-edge bg-panel p-5">
              <div className="font-mono text-[10px] uppercase tracking-widest text-red-400/90">
                ✕ Issue
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink">{c.issue}</p>
              <div className="mt-4 border-t border-edge pt-4">
                <div className="font-mono text-[10px] uppercase tracking-widest text-ok">
                  ✓ Fix
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{c.fix}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section index="07" title="Results">
        <ul className="grid gap-3 sm:grid-cols-2">
          {project.results.map((r) => (
            <li
              key={r}
              className="flex gap-3 rounded-md border border-edge bg-panel px-4 py-3.5 text-sm leading-relaxed text-ink"
            >
              <span className="mt-0.5 font-mono text-ok">✓</span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section index="08" title="Technologies">
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              View Source Code <ArrowUpRight />
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-ghost">
              Open Live Project <ArrowUpRight />
            </a>
          )}
        </div>
      </Section>

      <Reveal className="mt-14">
        <Link
          to={`/projects/${next.slug}`}
          className="group flex flex-col gap-2 rounded-md border border-edge bg-panel p-6 transition-all duration-300 hover:border-accent/60 hover:shadow-glow-sm sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
              Next project
            </div>
            <div className="mt-1 font-display text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-accent">
              {next.title}
            </div>
          </div>
          <ArrowRight className="h-5 w-5 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
        </Link>
      </Reveal>
    </div>
  );
}
