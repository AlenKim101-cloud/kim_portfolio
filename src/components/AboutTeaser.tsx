import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import IntegrationDiagram from "./IntegrationDiagram";
import { ArrowRight } from "./Icons";

export default function AboutTeaser() {
  return (
    <section className="border-y border-edge bg-panel/40 py-16 sm:py-20">
      <div className="container-x">
        <Reveal>
          <SectionHeading index="03" title="About" right="Who's building this" />
        </Reveal>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <h3 className="font-display text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">
              An engineer who treats software, electronics and mechanics as{" "}
              <span className="text-accent">one discipline</span>.
            </h3>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Mechatronics Engineering student combining mechanical systems, electronics, embedded
              programming and software development to build practical engineering systems — from
              AVR firmware and sensor-driven machines to full-stack applications.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted">
              The web development, embedded programming, electronics, automation, AI and mechanical
              work on this site are all parts of one coherent engineering identity.
            </p>
            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent transition-opacity hover:opacity-80"
            >
              The full story <ArrowRight />
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <IntegrationDiagram />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
