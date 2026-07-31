import { experience } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-line-light dark:border-line-dark"
    >
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-signal-light dark:text-signal-dark">
            {"// experience"}
          </p>
        </Reveal>

        <Reveal delay={80} className="mt-8 border border-line-light dark:border-line-dark">
          <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-line-light dark:border-line-dark px-5 py-4">
            <div>
              <h3 className="font-display text-xl font-semibold md:text-2xl">
                {experience.role}
              </h3>
              <p className="mt-1 text-sm text-ink/70 dark:text-paper/70">
                {experience.org} — {experience.location}
              </p>
            </div>
            <span className="tag">{experience.dateLabel}</span>
          </div>
          <ul className="space-y-3 px-5 py-5">
            {experience.bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex gap-3 text-sm leading-relaxed text-ink/85 dark:text-paper/85 md:text-base"
              >
                <span className="font-mono text-signal-light dark:text-signal-dark">
                  +
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
