import Image from "next/image";
import { profile } from "@/lib/data";
import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section
      id="about"
      className="border-t border-line-light dark:border-line-dark"
    >
      <div className="mx-auto grid max-w-5xl gap-10 px-6 py-16 md:grid-cols-[1fr_260px] md:py-20">
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
        <Reveal delay={100} className="order-first md:order-last">
          <div className="relative aspect-[4/5] w-40 overflow-hidden border border-line-light dark:border-line-dark md:w-full">
            <Image
              src="/avatar.jpg"
              alt={`Portrait of ${profile.name}`}
              fill
              sizes="(min-width: 768px) 260px, 160px"
              className="object-cover grayscale contrast-125"
              priority
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
