import { education } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Education() {
  return (
    <section
      id="education"
      className="border-t border-line-light dark:border-line-dark"
    >
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-signal-light dark:text-signal-dark">
            {"// education"}
          </p>
        </Reveal>
        <Reveal
          delay={80}
          className="mt-8 flex flex-wrap items-baseline justify-between gap-3 border border-line-light dark:border-line-dark px-5 py-5"
        >
          <div>
            <h3 className="font-display text-xl font-semibold md:text-2xl">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm text-ink/70 dark:text-paper/70">
              {education.org} — {education.location}
            </p>
            <p className="mt-2 font-mono text-xs text-signal-light dark:text-signal-dark">
              {education.award}
            </p>
          </div>
          <span className="tag">{education.dateLabel}</span>
        </Reveal>
      </div>
    </section>
  );
}
