import SignalFlow from "./SignalFlow";
import type { Project } from "../data/projects";

const FLOWS: Record<string, Parameters<typeof SignalFlow>[0]["nodes"]> = {
  Software: [
    { label: "Client", sub: "React" },
    { label: "API", sub: "Supabase" },
    { label: "DB", sub: "Postgres" },
  ],
  Engineering: [
    { label: "Input", sub: "Coin" },
    { label: "Sensor", sub: "IR" },
    { label: "Actuator", sub: "Servo" },
  ],
  Embedded: [
    { label: "Sensor", sub: "IR" },
    { label: "MCU", chip: true, sub: "ATmega" },
    { label: "Output", sub: "LED" },
  ],
  AI: [
    { label: "Input", sub: "Meal" },
    { label: "Model", sub: "AI" },
    { label: "DB", sub: "Store" },
  ],
  Automation: [
    { label: "Items", sub: "Belt" },
    { label: "Logic", sub: "C#" },
    { label: "Diverter", sub: "Output" },
  ],
};

export default function ProjectVisual({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const nodes = FLOWS[project.category[0]] ?? FLOWS.Software;
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border-b border-edge bg-panel-2 px-4 ${className}`}
    >
      <div className="bg-grid-faint absolute inset-0" aria-hidden />
      <div className="relative py-6">
        <SignalFlow nodes={nodes} compact />
      </div>
      <span className="absolute left-2.5 top-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted/70">
        {project.category[0]} / SYS
      </span>
      <span className="absolute right-2.5 top-2 font-mono text-[9px] uppercase tracking-[0.2em] text-muted/70">
        rev.{project.year}
      </span>
    </div>
  );
}
