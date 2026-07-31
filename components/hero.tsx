import Image from "next/image";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-16 pb-14 md:pt-24 md:pb-20">
      <Reveal className="flex items-start justify-between gap-6 md:gap-10">
        <div>
          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-4 max-w-prose font-mono text-sm text-signal-light dark:text-signal-dark md:text-base">
            {profile.positioning}
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
        </div>
        <div className="relative w-20 shrink-0 sm:w-28 md:w-40">
          <span className="pointer-events-none absolute -left-1.5 -top-1.5 h-3 w-3 border-l border-t border-signal-light dark:border-signal-dark" />
          <span className="pointer-events-none absolute -right-1.5 -top-1.5 h-3 w-3 border-r border-t border-signal-light dark:border-signal-dark" />
          <span className="pointer-events-none absolute -left-1.5 -bottom-1.5 h-3 w-3 border-l border-b border-signal-light dark:border-signal-dark" />
          <span className="pointer-events-none absolute -right-1.5 -bottom-1.5 h-3 w-3 border-r border-b border-signal-light dark:border-signal-dark" />
          <div className="relative aspect-square overflow-hidden border border-line-light dark:border-line-dark">
            <Image
              src="/avatar.jpg"
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="(min-width: 768px) 160px, 96px"
              className="object-cover"
              priority
            />
          </div>
          <p className="mt-2 text-right font-mono text-[10px] text-ink/45 dark:text-paper/45">
            Rawrven
          </p>
        </div>
      </Reveal>
    </section>
  );
}
