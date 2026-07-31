import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-line-light dark:border-line-dark"
    >
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-signal-light dark:text-signal-dark">
            {"// contact"}
          </p>
          <h2 className="mt-4 max-w-prose font-display text-2xl font-semibold leading-tight md:text-4xl">
            Open to backend, blockchain, and full-stack roles.
          </h2>
          <p className="mt-4 max-w-prose text-sm leading-relaxed text-ink/75 dark:text-paper/75 md:text-base">
            The fastest way to reach me is email — I usually reply within a
            day.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="border border-line-light dark:border-line-dark px-4 py-2 font-mono text-sm text-ink dark:text-paper transition-colors hover:border-signal-light dark:hover:border-signal-dark"
            >
              {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="tag">
              github ↗
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="tag">
              linkedin ↗
            </a>
            <a href={profile.resumeHref} download className="tag">
              resume.pdf ↓
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line-light dark:border-line-dark">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-2 px-6 py-6 font-mono text-xs text-ink/45 dark:text-paper/45">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>built with next.js · deployed on vercel</span>
      </div>
    </footer>
  );
}
