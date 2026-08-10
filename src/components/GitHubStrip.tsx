import { GITHUB_URL, GITHUB_USER, repos } from "../data/projects";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ArrowUpRight } from "./Icons";

export default function GitHubStrip() {
  return (
    <section className="container-x py-16 sm:py-20">
      <Reveal>
        <SectionHeading index="04" title="GitHub" right="Active repositories" />
      </Reveal>
      <Reveal>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
          className="mb-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent transition-opacity hover:opacity-80"
        >
          github.com/{GITHUB_USER} <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </Reveal>
      <div className="panel divide-y divide-edge overflow-hidden">
        {repos.map((r, i) => (
          <Reveal key={r.name} delay={i * 60}>
            <a
              href={`${GITHUB_URL}/${r.name}`}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col gap-1 px-5 py-4 transition-colors duration-300 hover:bg-panel-2 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="truncate font-mono text-sm text-ink transition-colors duration-300 group-hover:text-accent">
                    {r.name}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
                <p className="mt-0.5 truncate text-xs text-muted">{r.description}</p>
              </div>
              <span className="shrink-0 font-mono text-[10px] uppercase tracking-widest text-muted">
                {r.language}
              </span>
            </a>
          </Reveal>
        ))}
      </div>
      <p className="mt-4 font-mono text-[10px] uppercase tracking-widest text-muted/70">
        // Contribution metrics pulled live from the GitHub API in v2.
      </p>
    </section>
  );
}
