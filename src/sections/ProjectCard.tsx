import { ExternalLink, CheckCircle2 } from "lucide-react";
import type { Project } from "../data/projects";
import Badge from "../components/Badge";
import Reveal from "../components/Reveal";
import TiltCard from "../components/TiltCard";
import { GithubIcon } from "../components/icons/BrandIcons";

interface ProjectCardProps {
  project: Project;
  delay?: number;
}

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <Reveal delay={delay} className="h-full">
      <TiltCard className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-ink-faint hover:shadow-[0_16px_40px_-24px_rgba(0,0,0,0.6)]">
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border-soft bg-bg-soft">
          <img
            src={project.image}
            alt={`Screenshot of the ${project.name} interface`}
            loading="lazy"
            width={640}
            height={400}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {project.categories.map((cat) => (
              <span
                key={cat}
                className="rounded-full bg-bg/85 px-2.5 py-1 text-[11px] font-semibold text-ink backdrop-blur-sm"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-lg font-semibold text-ink">{project.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">{project.description}</p>

          <div className="mt-4 rounded-lg border border-border-soft bg-bg-soft p-3.5">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
              Problem Solved
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{project.problem}</p>
          </div>

          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
              Key Features
            </p>
            <ul className="mt-2 space-y-1.5">
              {project.features.slice(0, 4).map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-ink-muted">
                  <CheckCircle2
                    size={15}
                    className="mt-0.5 shrink-0"
                    style={{ color: "var(--color-accent-strong)" }}
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3 pt-2">
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink-faint hover:bg-surface-hover"
            >
              <GithubIcon className="h-4 w-4" />
              Code
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring inline-flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-[#06110d] transition-colors"
              style={{ background: "var(--color-accent)" }}
            >
              <ExternalLink size={15} />
              {project.demoLabel ?? "Live Demo"}
            </a>
          </div>
        </div>
      </article>
      </TiltCard>
    </Reveal>
  );
}
