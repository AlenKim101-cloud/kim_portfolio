import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CloseIcon, GitHubIcon, MenuIcon } from "./Icons";
import { GITHUB_URL } from "../data/projects";

const links = [
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About" },
  { to: "/resume", label: "Resume" },
];

function navClass(isActive: boolean) {
  return `font-mono text-xs uppercase tracking-widest transition-colors duration-300 ${
    isActive ? "text-accent" : "text-muted hover:text-ink"
  }`;
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <header className="no-print fixed inset-x-0 top-0 z-50 border-b border-edge bg-base/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="font-display text-xl font-bold tracking-tight text-ink">
            KIM<span className="text-accent">_</span>
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-colors duration-300 group-hover:text-accent sm:inline">
            Mechatronics Eng.
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) => navClass(isActive)}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/#contact" className={navClass(false)}>
            Contact
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="text-muted transition-colors duration-300 hover:text-ink"
            aria-label="GitHub profile"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <span className="ml-1 flex items-center gap-1.5 border-l border-edge pl-5 font-mono text-[10px] uppercase tracking-widest text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-ok animate-pulse-dot" />
            <span className="hidden lg:inline">Sys.Online</span>
          </span>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded border border-edge p-2 text-ink transition-colors hover:border-accent/60 hover:text-accent md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <nav
          className="border-t border-edge bg-panel px-6 py-4 md:hidden"
          aria-label="Mobile"
        >
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} className={({ isActive }) => navClass(isActive)}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/#contact" className={navClass(false)}>
              Contact
            </Link>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted"
            >
              <GitHubIcon className="h-4 w-4" /> GitHub
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
