import { projects } from "@/content/copy";
import { GitHubIcon } from "@/components/icons/github";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="flex flex-col gap-8"
      aria-labelledby="projects-heading"
    >
      <span className="caps-label">Projects</span>
      <h2
        id="projects-heading"
        className="text-[clamp(2.2rem,2rem+1.2vw,3rem)] font-medium tracking-tight"
      >
        Building tools that solve real problems.
      </h2>
      <div className="flex flex-col gap-8">
        {projects.map((project) => (
          <article
            key={project.url}
            className="group flex flex-col gap-4 rounded-lg border border-ink/10 p-6 transition-colors hover:border-ink/20"
          >
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-medium">{project.name}</h3>
              <p className="text-sm uppercase tracking-[0.28em] text-ink-muted">
                {project.tech}
              </p>
            </div>
            <p className="text-base leading-relaxed text-ink-muted">
              {project.description}
            </p>
            <div className="flex items-center gap-4">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm uppercase tracking-[0.28em] text-ink transition-colors hover:text-ink-muted"
              >
                Visit Site →
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-ink transition-colors hover:text-ink-muted"
                aria-label="View source on GitHub"
              >
                <GitHubIcon />
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
