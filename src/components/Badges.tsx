import type { ProjectStatus } from "../data/projects";

const STATUS_META: Record<ProjectStatus, { label: string; dot: string; text: string; border: string }> = {
  completed: { label: "Completed", dot: "bg-ok", text: "text-ok", border: "border-ok/40" },
  "in-progress": { label: "In Progress", dot: "bg-warn", text: "text-warn", border: "border-warn/40" },
  experimental: { label: "Experimental", dot: "bg-exp", text: "text-exp", border: "border-exp/40" },
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  const meta = STATUS_META[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest ${meta.text} ${meta.border}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${meta.dot} animate-pulse-dot`} />
      {meta.label}
    </span>
  );
}

export function Tag({ children }: { children: string }) {
  return (
    <span className="rounded border border-edge bg-base/60 px-2 py-0.5 font-mono text-[10px] text-muted">
      {children}
    </span>
  );
}
