import { useState, type FormEvent } from "react";
import { EMAIL, GITHUB_URL, LINKEDIN_URL } from "../data/projects";
import Reveal from "./Reveal";
import { ArrowUpRight, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const LINKS = [
  {
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: MailIcon,
    hint: "Fastest response",
  },
  {
    label: "GitHub",
    value: "github.com/AlenKim101-cloud",
    href: GITHUB_URL,
    icon: GitHubIcon,
    hint: "Source code",
  },
  {
    label: "LinkedIn",
    value: "in/kimalen-peter-nevil",
    href: LINKEDIN_URL,
    icon: LinkedInIcon,
    hint: "Professional profile",
  },
];

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const body = [`From: ${name}`, `Reply to: ${email}`, "", message].join("\n");
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject || "Portfolio inquiry"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  }

  return (
    <section id="contact" className="container-x scroll-mt-24 py-16 sm:py-20">
      <Reveal>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          Let&apos;s build <span className="text-accent text-glow">something</span>.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
          Have an engineering project, software idea, internship opportunity or interesting
          problem? The inbox is open.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="flex flex-col gap-3">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                className="group flex items-center justify-between rounded-md border border-edge bg-panel px-5 py-4 transition-all duration-300 hover:border-accent/60 hover:shadow-glow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <span className="flex h-9 w-9 items-center justify-center rounded border border-edge bg-base/70 text-muted transition-colors duration-300 group-hover:text-accent">
                    <l.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                      {l.hint}
                    </div>
                    <div className="mt-0.5 font-mono text-sm text-ink transition-colors duration-300 group-hover:text-accent">
                      {l.value}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit} className="panel p-6">
            <div className="mb-5 flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                // Message form
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-ok animate-pulse-dot" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted">
                  Name
                </span>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full rounded border border-edge bg-base/60 px-3 py-2.5 text-sm text-ink placeholder:text-muted/50 transition-colors focus:border-accent/70 focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted">
                  Email
                </span>
                <input
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded border border-edge bg-base/60 px-3 py-2.5 text-sm text-ink placeholder:text-muted/50 transition-colors focus:border-accent/70 focus:outline-none"
                />
              </label>
            </div>
            <label className="mt-4 block">
              <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted">
                Subject
              </span>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Internship, project, collaboration…"
                className="w-full rounded border border-edge bg-base/60 px-3 py-2.5 text-sm text-ink placeholder:text-muted/50 transition-colors focus:border-accent/70 focus:outline-none"
              />
            </label>
            <label className="mt-4 block">
              <span className="mb-1.5 block font-mono text-[10px] uppercase tracking-widest text-muted">
                Message
              </span>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me what you're building…"
                className="w-full resize-none rounded border border-edge bg-base/60 px-3 py-2.5 text-sm text-ink placeholder:text-muted/50 transition-colors focus:border-accent/70 focus:outline-none"
              />
            </label>
            <button type="submit" className="btn-primary mt-6 w-full">
              Send Message
            </button>
            <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-widest text-muted/70">
              Opens your email client with the message composed
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
