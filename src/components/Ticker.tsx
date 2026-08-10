const ITEMS = [
  "C / C++",
  "AVR",
  "React",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "Tailwind CSS",
  "Git & GitHub",
  "Electronics",
  "Automation",
  "Control Systems",
  "Unity",
  "Proteus",
  "Atmel Studio",
  "Linux",
];

export default function Ticker() {
  const row = (ariaHidden: boolean) => (
    <div
      className="flex shrink-0 items-center gap-8 pr-8"
      aria-hidden={ariaHidden || undefined}
    >
      {ITEMS.map((item) => (
        <span
          key={item}
          className="flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.25em] text-muted"
        >
          {item}
          <span className="text-accent">◆</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="border-y border-edge bg-panel/60 py-4">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee motion-reduce:animate-none">
          {row(false)}
          {row(true)}
        </div>
      </div>
    </div>
  );
}
