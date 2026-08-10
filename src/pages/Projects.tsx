import { useState } from "react";
import { categories, projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import PageHeader from "../components/PageHeader";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category.includes(filter));

  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Projects."
        sub="Every system starts as a problem. These are the ones I've actually built, tested and broken — hardware, firmware, software and the glue in between."
      />

      <div className="container-x pb-20">
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={`rounded border px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-widest transition-all duration-300 ${
                filter === c
                  ? "border-accent bg-accent/10 text-accent shadow-glow-sm"
                  : "border-edge text-muted hover:border-accent/50 hover:text-ink"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 80}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-16 text-center font-mono text-sm uppercase tracking-widest text-muted">
            // No projects in this category yet
          </p>
        )}
      </div>
    </>
  );
}
