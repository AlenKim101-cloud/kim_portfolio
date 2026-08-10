import { Link } from "react-router-dom";
import SignalFlow from "./SignalFlow";
import { ArrowRight, ArrowUpRight, GitHubIcon } from "./Icons";
import { GITHUB_URL } from "../data/projects";

const READOUTS = [
  { label: "Clock", value: "16.000 MHz" },
  { label: "Timer", value: "T1 · 16-BIT" },
  { label: "Period", value: "30.000 ms" },
  { label: "Mode", value: "RUN" },
];

function HeroHud() {
  return (
    <div className="panel relative overflow-hidden">
      {/* header */}
      <div className="relative flex items-center justify-between border-b border-edge px-3.5 py-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
          Engineering HUD
        </span>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-red-500/90 animate-pulse-dot" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted">REC</span>
        </div>
      </div>

      {/* body */}
      <div className="relative p-4 sm:p-6">
        <div className="bg-grid absolute inset-0" aria-hidden />

        {/* corner brackets */}
        <span className="pointer-events-none absolute left-1.5 top-1.5 h-3 w-3 border-l border-t border-accent/70" aria-hidden />
        <span className="pointer-events-none absolute right-1.5 top-1.5 h-3 w-3 border-r border-t border-accent/70" aria-hidden />
        <span className="pointer-events-none absolute bottom-1.5 left-1.5 h-3 w-3 border-b border-l border-accent/70" aria-hidden />
        <span className="pointer-events-none absolute bottom-1.5 right-1.5 h-3 w-3 border-b border-r border-accent/70" aria-hidden />

        {/* scanline */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-transparent via-accent/10 to-transparent motion-safe:animate-scan"
        />

        <div className="relative">
          <SignalFlow
            nodes={[
              { label: "Input", sub: "Signal" },
              { label: "Sensor", sub: "IR" },
              { label: "MCU", chip: true, sub: "ATmega" },
              { label: "Actuator", sub: "Servo" },
              { label: "Output", sub: "System" },
            ]}
          />

          <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded border border-edge bg-edge">
            {READOUTS.map((r) => (
              <div key={r.label} className="bg-panel px-3.5 py-2.5">
                <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                  {r.label}
                </div>
                <div className="mt-0.5 font-mono text-xs text-ink">{r.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
            <span>Build</span>
            <span className="text-accent">→</span>
            <span>Test</span>
            <span className="text-accent">→</span>
            <span>Iterate</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
              <span className="text-accent">//</span> Mechatronics Engineering Student
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.06] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              Building systems across{" "}
              <span className="text-accent text-glow">hardware</span>,{" "}
              <span className="text-accent text-glow">software</span> &amp; automation.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              Mechatronics Engineering student focused on embedded systems, automation, software
              development, electronics and intelligent systems. I build physical and digital
              systems — and the software that runs them.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/projects" className="btn-primary">
                View Projects <ArrowRight />
              </Link>
              <Link to="/resume" className="btn-ghost">
                Résumé
              </Link>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-2 py-2.5 font-mono text-xs uppercase tracking-widest text-muted transition-colors hover:text-accent"
              >
                <GitHubIcon className="h-4 w-4" /> GitHub <ArrowUpRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          <HeroHud />
        </div>
      </div>
    </section>
  );
}
