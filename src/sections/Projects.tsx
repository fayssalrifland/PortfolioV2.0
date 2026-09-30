import { useMemo, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects, projectFilters, type ProjectCategory } from "../data/projects";
import { cn } from "../utils/cn";

export default function Projects() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");

  const filtered = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((project) => project.categories.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="scroll-mt-16 border-t border-border-soft py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A closer look at what I've built — the problem each project solves, how it was built, and what it does."
        />

        <div
          className="mt-8 flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects by category"
        >
          {projectFilters.map((item) => {
            const isActive = filter === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={isActive}
                className={cn(
                  "focus-ring rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "border-transparent text-[#06110d]"
                    : "border-border text-ink-muted hover:border-ink-faint hover:text-ink"
                )}
                style={isActive ? { background: "var(--color-accent)" } : undefined}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project, index) => (
            <ProjectCard key={project.slug} project={project} delay={index * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
