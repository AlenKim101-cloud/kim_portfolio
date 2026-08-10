import { EMAIL, GITHUB_URL, LINKEDIN_URL, projects, skills } from "../data/projects";
import PageHeader from "../components/PageHeader";

export default function Resume() {
  const featured = projects.filter((p) => p.featured);

  return (
    <>
      <div className="no-print">
        <PageHeader
          eyebrow="Résumé"
          title="Summary, not decoration."
          sub="A clean, ATS-friendly document. Use the button to save it as a PDF — the print layout is plain black on white, ready for applicant tracking systems."
        />
      </div>

      <div className="container-x pb-20">
        <div className="no-print mb-8 flex justify-end">
          <button
            type="button"
            onClick={() => window.print()}
            className="btn-primary no-print"
          >
            Save as PDF
          </button>
        </div>

        <div className="panel print-resume p-6 sm:p-10">
          {/* Header */}
          <header>
            <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Kim Alen Peter Nevil
            </h1>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.25em] text-muted">
              Mechatronics Engineering Student
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Building physical and digital systems — embedded, software, automation and AI.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 font-mono text-xs text-ink">
              <a href={`mailto:${EMAIL}`} className="hover:underline">
                {EMAIL}
              </a>
              <a href={GITHUB_URL} className="hover:underline">
                github.com/AlenKim101-cloud
              </a>
              <a href={LINKEDIN_URL} className="hover:underline">
                linkedin.com/in/kimalen-peter-nevil
              </a>
            </div>
          </header>

          {/* Education */}
          <Section title="Education">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <p className="text-base font-medium text-ink">Mechatronics Engineering — B.Eng</p>
              <p className="font-mono text-xs text-muted">2024 — present</p>
            </div>
            <p className="mt-1 text-sm text-muted">
              Focus: embedded systems, electronics, control systems, automation and software
              engineering.
            </p>
          </Section>

          {/* Skills */}
          <Section title="Technical Skills">
            <div className="space-y-3">
              {skills.map((g) => (
                <div key={g.title} className="flex flex-col gap-1 sm:flex-row sm:gap-4">
                  <span className="w-40 shrink-0 font-mono text-xs uppercase tracking-widest text-accent">
                    {g.title}
                  </span>
                  <p className="text-sm text-ink">{g.items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </Section>

          {/* Projects */}
          <Section title="Selected Projects">
            <div className="space-y-5">
              {featured.map((p) => (
                <div key={p.id}>
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <p className="text-base font-medium text-ink">{p.title}</p>
                    <p className="font-mono text-xs text-muted">
                      {p.category[0]} · {p.year}
                    </p>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{p.description}</p>
                  <p className="mt-1.5 text-xs text-muted">
                    <span className="font-medium text-ink">Stack:</span>{" "}
                    {p.technologies.join(", ")}
                  </p>
                  {p.githubUrl && (
                    <p className="mt-0.5 text-xs text-muted">
                      <span className="font-medium text-ink">Code:</span>{" "}
                      <a href={p.githubUrl} className="underline">
                        {p.githubUrl}
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Section>

          {/* Coursework + availability */}
          <Section title="Coursework">
            <p className="text-sm leading-relaxed text-ink">
              Embedded Systems · Control Systems · Circuit Analysis · Digital Electronics ·
              Mechanics · Automation · Programming
            </p>
          </Section>

          <Section title="Availability">
            <p className="text-sm leading-relaxed text-ink">
              Open to internships, freelance engineering work and collaborations in 2026 — embedded,
              software or full-stack.
            </p>
          </Section>
        </div>
      </div>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8 border-t border-edge pt-6 print:border-t print:border-[#ddd]">
      <h2 className="font-display text-base font-semibold uppercase tracking-widest text-ink">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}
