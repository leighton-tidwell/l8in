import { contactLinks } from "@/content/copy";

export function ContactSection() {
  return (
    <section id="contact" className="flex flex-col gap-8" aria-labelledby="contact-heading">
      <span className="caps-label">Connect</span>
      <h2
        id="contact-heading"
        className="text-[clamp(2.2rem,2rem+1.2vw,3rem)] font-medium tracking-tight"
      >
        Let’s collaborate or swap notes.
      </h2>
      <p className="max-w-xl text-base leading-relaxed text-ink-muted">
        Drop a line if you want to shape agentic development workflows, collaborate on
        AI-enabled software, or simply talk about purpose-driven engineering.
      </p>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-6 text-sm uppercase tracking-[0.28em]">
          {contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="border-b border-ink/30 pb-1 text-ink transition-colors hover:border-ink hover:text-ink-muted"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="/llms.txt"
          className="inline-flex items-center gap-2 text-xs text-ink-muted transition-colors hover:text-ink"
          title="AI-friendly site information"
        >
          <svg
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 10V3L4 14h7v7l9-11h-7z"
            />
          </svg>
          AI-optimized content available
        </a>
      </div>
    </section>
  );
}
