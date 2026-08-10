export default function SectionHeading({
  index,
  title,
  right,
}: {
  index: string;
  title: string;
  right?: string;
}) {
  return (
    <div className="mb-10 flex items-end justify-between gap-4 border-b border-edge pb-4">
      <div className="flex items-baseline gap-3">
        <span className="font-mono text-xs text-accent">/{index}</span>
        <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
          {title}
        </h2>
      </div>
      {right && (
        <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-muted sm:block">
          {right}
        </span>
      )}
    </div>
  );
}
