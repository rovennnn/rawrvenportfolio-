import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/lib/data";

const links = [
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#education", label: "education" },
  { href: "#about", label: "about" },
  { href: "#contact", label: "contact" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line-light dark:border-line-dark bg-paper/90 dark:bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <a
          href="#top"
          className="font-mono text-sm tracking-tight text-signal-light dark:text-signal-dark"
        >
          {profile.initials}
          <span className="text-ink/50 dark:text-paper/50"></span>
          <span className="animate-pulse">_</span>
        </a>
        <nav className="hidden gap-6 font-mono text-xs uppercase tracking-wide text-ink/70 dark:text-paper/70 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-signal-light dark:hover:text-signal-dark"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
