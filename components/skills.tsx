import { skills } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-line-light dark:border-line-dark"
    >
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-signal-light dark:text-signal-dark">
            {"// skills"}
          </p>
        </Reveal>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.label} delay={i * 80}>
              <h3 className="font-mono text-xs uppercase tracking-wide text-ink/50 dark:text-paper/50">
                {group.label}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="tag">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
