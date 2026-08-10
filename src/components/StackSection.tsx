import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { Tag } from "./Badges";

const DISCIPLINES = [
  {
    index: "A",
    title: "Hardware",
    blurb:
      "Mechanical design, circuit analysis, sensors and actuators. Turning physical problems into buildable systems.",
    tags: ["Circuit design", "Sensors", "Actuators", "CAD"],
  },
  {
    index: "B",
    title: "Embedded",
    blurb:
      "AVR microcontrollers, timers, interrupts and low-level C. Getting firmware right where software meets silicon.",
    tags: ["C", "AVR", "Timers", "UART · SPI · I²C", "PWM"],
  },
  {
    index: "C",
    title: "Software",
    blurb:
      "Full-stack applications with React and TypeScript — real user interfaces backed by real databases.",
    tags: ["React", "TypeScript", "Supabase", "PostgreSQL"],
  },
  {
    index: "D",
    title: "Intelligent Systems",
    blurb:
      "AI-assisted applications and automation logic that turn raw input into decisions and useful output.",
    tags: ["LLM APIs", "Data pipelines", "Automation"],
  },
];

export default function StackSection() {
  return (
    <section className="border-y border-edge bg-panel/40 py-16 sm:py-20">
      <div className="container-x">
        <Reveal>
          <SectionHeading index="02" title="Engineering Stack" right="Hardware → Software → AI" />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {DISCIPLINES.map((d, i) => (
            <Reveal key={d.title} delay={i * 70}>
              <div className="group h-full rounded-md border border-edge bg-base/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">
                    {d.index} / {d.title}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted">{d.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {d.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
