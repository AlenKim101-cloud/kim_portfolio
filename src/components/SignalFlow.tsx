import { Fragment } from "react";
import type { ArchNode } from "../data/projects";

const ACCENT = "#22d3ee";

export default function SignalFlow({
  nodes,
  className = "",
  compact = false,
}: {
  nodes: ArchNode[];
  className?: string;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex flex-wrap items-center justify-center gap-x-2 gap-y-3 sm:flex-nowrap ${className}`}
    >
      {nodes.map((n, i) => (
        <Fragment key={`${n.label}-${i}`}>
          {i > 0 && <Connector />}
          <NodeChip node={n} compact={compact} />
        </Fragment>
      ))}
    </div>
  );
}

function Connector() {
  return (
    <div className="relative hidden min-w-5 flex-1 self-center sm:block" aria-hidden>
      <div
        className="h-[2px] w-full animate-dashbg opacity-70"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, " + ACCENT + " 0 6px, transparent 6px 12px)",
          backgroundSize: "24px 2px",
        }}
      />
      <span className="absolute -right-1 top-1/2 -translate-y-1/2 text-[9px] text-accent">▶</span>
    </div>
  );
}

function NodeChip({ node, compact = false }: { node: ArchNode; compact?: boolean }) {
  return (
    <div className="relative shrink-0 rounded border border-edge bg-base/70 px-2.5 py-2 text-center">
      {node.chip && <ChipPins />}
      <div className="flex items-center justify-center gap-1.5">
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent animate-pulse-dot" />
        <span
          className={`font-mono font-medium uppercase tracking-wider text-accent ${
            compact ? "text-[9px]" : "text-[10px] sm:text-[11px]"
          }`}
        >
          {node.label}
        </span>
      </div>
      {node.sub && (
        <div
          className={`mt-0.5 font-mono uppercase tracking-widest text-muted ${
            compact ? "text-[8px]" : "hidden text-[9px] sm:block"
          }`}
        >
          {node.sub}
        </div>
      )}
    </div>
  );
}

function ChipPins() {
  return (
    <>
      <div className="absolute -top-2 left-2 right-2 flex justify-between" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="h-2 w-px bg-accent/80" />
        ))}
      </div>
      <div className="absolute -bottom-2 left-2 right-2 flex justify-between" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className="h-2 w-px bg-accent/80" />
        ))}
      </div>
    </>
  );
}
