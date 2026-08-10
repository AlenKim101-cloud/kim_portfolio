import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../data/projects";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="no-print border-t border-edge bg-panel">
      <div className="container-x flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="font-display text-2xl font-bold tracking-tight">
            KIM<span className="text-accent">_</span>
          </div>
          <p className="mt-1.5 font-mono text-[11px] uppercase tracking-[0.25em] text-muted">
            Mechatronics Engineering
          </p>
        </div>

        <div className="font-mono text-[11px] uppercase tracking-widest text-muted">
          <p>Built with Vite · React · Tailwind</p>
          <p className="mt-2">© 2026 Kim — All systems nominal</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded border border-edge p-2.5 text-muted transition-all duration-300 hover:border-accent/60 hover:text-accent"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded border border-edge p-2.5 text-muted transition-all duration-300 hover:border-accent/60 hover:text-accent"
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            aria-label="Email"
            className="rounded border border-edge p-2.5 text-muted transition-all duration-300 hover:border-accent/60 hover:text-accent"
          >
            <MailIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
