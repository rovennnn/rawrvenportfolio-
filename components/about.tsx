import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-line-light dark:border-line-dark"
    >
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-signal-light dark:text-signal-dark">
            {"// about"}
          </p>
          <p className="mt-4 max-w-prose text-base leading-relaxed text-ink/85 dark:text-paper/85 md:text-lg">
            {profile.about}
          </p>
          <p className="mt-4 font-mono text-xs text-ink/50 dark:text-paper/50">
            based in {profile.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
