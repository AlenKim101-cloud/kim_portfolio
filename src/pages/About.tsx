import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import IntegrationDiagram from "../components/IntegrationDiagram";
import Reveal from "../components/Reveal";
import { Tag } from "../components/Badges";
import { ArrowRight } from "../components/Icons";
import { focusAreas, skills, timeline } from "../data/projects";

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="The engineer behind the systems."
        sub="Mechatronics Engineering student combining mechanical systems, electronics, embedded programming and software development to build practical engineering systems."
      />

      <div className="container-x pb-20">
        <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-semibold tracking-tight">
                Not a developer. Not a technician.{" "}
                <span className="text-accent">A systems builder.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted">
                I study Mechatronics Engineering because the interesting problems live at the
                intersection — where a mechanical system needs an electronic brain, and that brain
                needs software. I work in C at the register level and in TypeScript at the API
                level, and I treat them as the same craft.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted">
                This portfolio documents real builds: a coin sorter that detects and routes coins,
                an AVR display driven by timer interrupts, a full-stack restaurant kiosk, an
                AI-assisted meal tracker. Each one has a problem, an architecture, and a list of
                things that went wrong before they worked.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-8">
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                  // Current focus
                </div>
                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((f) => (
                    <Tag key={f}>{f}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <IntegrationDiagram />
          </Reveal>
        </div>

        {/* Timeline */}
        <Reveal className="mt-20">
          <h2 className="flex items-baseline gap-3 border-b border-edge pb-3">
            <span className="font-mono text-xs text-accent">/02</span>
            <span className="font-display text-2xl font-semibold tracking-tight">
              Engineering Timeline
            </span>
          </h2>
          <div className="mt-8 space-y-0">
            {timeline.map((t, i) => (
              <div key={t.year} className="relative flex gap-6 pb-8 last:pb-0">
                {i < timeline.length - 1 && (
                  <span className="absolute left-[7px] top-5 h-full w-px bg-edge" aria-hidden />
                )}
                <div className="relative z-10 mt-1 flex h-4 w-4 shrink-0 items-center justify-center">
                  <span className="h-2 w-2 rounded-full border border-accent bg-base" />
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-sm font-medium text-accent">{t.year}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {t.items.map((item) => (
                      <span
                        key={item}
                        className="rounded border border-edge bg-panel px-3 py-1 text-sm text-ink"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Skills */}
        <Reveal className="mt-20">
          <h2 className="flex items-baseline gap-3 border-b border-edge pb-3">
            <span className="font-mono text-xs text-accent">/03</span>
            <span className="font-display text-2xl font-semibold tracking-tight">
              Technical Skills
            </span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted">
            Organized by engineering discipline — because a wall of logos proves nothing.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((group, i) => (
              <Reveal key={group.title} delay={i * 60}>
                <div className="h-full rounded-md border border-edge bg-panel p-5 transition-colors duration-300 hover:border-accent/50">
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.25em] text-accent">
                    {group.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-ink">
                        <span className="h-1 w-1 rounded-full bg-accent/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16 text-center">
          <p className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
            Have a problem worth solving?
          </p>
          <Link to="/#contact" className="btn-primary mt-6">
            Let's talk <ArrowRight />
          </Link>
        </Reveal>
      </div>
    </>
  );
}
