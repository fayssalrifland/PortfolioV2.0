import { Star, GitFork, ArrowUpRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import Badge from "../components/Badge";
import { GithubIcon } from "../components/icons/BrandIcons";
import { profile } from "../data/profile";
import { projects } from "../data/projects";

export default function GithubSection() {
  return (
    <section className="scroll-mt-16 border-t border-border-soft py-24 sm:py-28">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Code"
            title="Explore my code on GitHub"
            description="Recruiters and hiring managers are welcome to review the source code, commit history and structure of my projects."
          />
          <Reveal delay={0.1}>
            <Button href={profile.github} variant="secondary" icon={<ArrowUpRight size={16} />}>
              <span className="inline-flex items-center gap-2">
                <GithubIcon className="h-4 w-4" />
                View GitHub Profile
              </span>
            </Button>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.08}>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring group block h-full rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-ink-faint hover:bg-surface-hover"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-ink">
                    <GithubIcon className="h-4 w-4 text-ink-faint" />
                    <span className="font-display text-sm font-semibold group-hover:text-ink">
                      {project.slug}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-ink-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                  />
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-4 text-xs text-ink-faint">
                  <span className="inline-flex items-center gap-1">
                    <Star size={13} /> Public
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <GitFork size={13} /> MIT
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
