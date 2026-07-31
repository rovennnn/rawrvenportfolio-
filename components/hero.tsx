import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-16 pb-14 md:pt-24 md:pb-20">
      <Reveal>
        <p className="font-mono text-xs text-ink/50 dark:text-paper/50">
          ~/portfolio/README.md
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-4 max-w-prose font-mono text-sm text-signal-light dark:text-signal-dark md:text-base">
          {profile.positioning}
        </p>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-ink/80 dark:text-paper/80 md:text-lg">
          {profile.about}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={`mailto:${profile.email}`} className="tag">
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
    </section>
  );
}
