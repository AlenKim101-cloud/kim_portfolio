const LAYERS = ["Mechanical", "Electronics", "Programming", "Control", "Software"];

export default function IntegrationDiagram() {
  return (
    <div className="panel relative overflow-hidden p-6 sm:p-8">
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto flex max-w-xs flex-col items-stretch">
        {LAYERS.map((layer, i) => (
          <div key={layer} className="flex flex-col items-center">
            <div className="w-full rounded border border-edge bg-base/70 px-4 py-2.5 text-center">
              <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-ink sm:text-xs">
                {layer}
              </span>
            </div>
            {i < LAYERS.length - 1 && (
              <span className="my-1 font-mono text-sm text-accent" aria-hidden>
                +
              </span>
            )}
          </div>
        ))}
        <div className="flex flex-col items-center">
          <span className="my-1 font-mono text-sm text-accent animate-pulse-dot" aria-hidden>
            ▼
          </span>
          <div className="w-full rounded border border-accent/60 bg-accent/10 px-4 py-3 text-center shadow-glow-sm">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              Mechatronic Systems
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
