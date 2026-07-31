import Image from "next/image";
import { projects } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-line-light dark:border-line-dark"
    >
      <div className="mx-auto max-w-5xl px-6 py-16 md:py-20">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-widest text-signal-light dark:text-signal-dark">
            {"// projects"}
          </p>
          <p className="mt-2 max-w-prose text-sm text-ink/60 dark:text-paper/60">
            Logged in reverse-chronological order, most recent first.
          </p>
        </Reveal>

        <div className="timeline mt-10 space-y-12">
          {projects.map((project, i) => (
            <Reveal
              key={project.id}
              delay={i * 60}
              className="timeline-node relative pl-8"
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="tag">{project.version}</span>
                <span className="font-mono text-xs text-ink/50 dark:text-paper/50">
                  {project.dateLabel}
                </span>
              </div>
              <h3 className="mt-2 font-display text-xl font-semibold md:text-2xl">
                {project.name}
              </h3>
              <p className="mt-1 font-mono text-xs text-ink/60 dark:text-paper/60">
                {project.role}
              </p>
              <p className="mt-3 max-w-prose text-sm leading-relaxed text-ink/85 dark:text-paper/85 md:text-base">
                {project.summary}
              </p>
              {project.diagram && (
                <div className="relative mt-4 max-w-md">
                  <span className="pointer-events-none absolute -left-1.5 -top-1.5 h-3 w-3 border-l border-t border-signal-light dark:border-signal-dark" />
                  <span className="pointer-events-none absolute -right-1.5 -top-1.5 h-3 w-3 border-r border-t border-signal-light dark:border-signal-dark" />
                  <span className="pointer-events-none absolute -left-1.5 -bottom-1.5 h-3 w-3 border-l border-b border-signal-light dark:border-signal-dark" />
                  <span className="pointer-events-none absolute -right-1.5 -bottom-1.5 h-3 w-3 border-r border-b border-signal-light dark:border-signal-dark" />
                  <div className="border border-line-light bg-paper p-3 dark:border-line-dark">
                    <Image
                      src={project.diagram.src}
                      alt={project.diagram.alt}
                      width={project.diagram.width}
                      height={project.diagram.height}
                      className="h-auto w-full"
                    />
                  </div>
                  <p className="mt-2 font-mono text-[10px] text-ink/45 dark:text-paper/45">
                    {project.diagram.caption}
                  </p>
                </div>
              )}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.features.map((feature) => (
                  <span key={feature} className="tag">
                    {feature}
                  </span>
                ))}
              </div>
              <p className="mt-3 font-mono text-xs text-ink/45 dark:text-paper/45">
                {project.stack.join(" · ")}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
