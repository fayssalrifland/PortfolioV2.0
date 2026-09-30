import { Layers, Server, Database, Wrench } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Badge from "../components/Badge";
import { skillCategories } from "../data/skills";

const icons = [Layers, Server, Database, Wrench];

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-16 border-t border-border-soft py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Skills"
          title="Technical skills"
          description="Technologies I use to design, build and ship modern web applications, grouped by where they fit in the stack."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {skillCategories.map((category, index) => {
            const Icon = icons[index % icons.length];
            return (
              <Reveal key={category.title} delay={index * 0.08}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6 transition-colors duration-200 hover:border-ink-faint">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg"
                      style={{ background: "var(--color-accent-soft)", color: "var(--color-accent-strong)" }}
                    >
                      <Icon size={20} aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-ink">
                        {category.title}
                      </h3>
                      <p className="text-xs text-ink-faint">{category.description}</p>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill}>{skill}</Badge>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
