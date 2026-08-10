export default function PageHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="container-x pb-10 pt-12 sm:pb-14 sm:pt-16">
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted">
        <span className="text-accent">//</span> {eyebrow}
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
        {title}
      </h1>
      {sub && <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{sub}</p>}
    </div>
  );
}
