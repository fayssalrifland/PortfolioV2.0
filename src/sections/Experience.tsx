import { Briefcase, Code } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 border-t border-border-soft py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Experience"
          title="Professional & development experience"
          description="My professional background alongside the practical development experience I've built over the past two years."
        />

        <ol className="relative mt-14 space-y-10 border-s border-border-soft ps-8 sm:ps-10">
          {experience.map((item, index) => {
            const Icon = item.type === "professional" ? Briefcase : Code;
            return (
              <Reveal as="li" key={item.role} delay={index * 0.1} className="relative">
                <span
                  className="absolute -start-[calc(2rem+1px)] top-0 flex h-8 w-8 items-center justify-center rounded-full border border-border bg-bg sm:-start-[calc(2.5rem+1px)]"
                  style={{ color: "var(--color-accent-strong)" }}
                  aria-hidden="true"
                >
                  <Icon size={15} />
                </span>

                <div className="rounded-2xl border border-border bg-surface p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold text-ink">{item.role}</h3>
                    <span className="rounded-full border border-border-soft px-3 py-1 text-xs font-medium text-ink-faint">
                      {item.period}
                    </span>
                  </div>
                  <p
                    className="mt-1 text-sm font-medium"
                    style={{ color: "var(--color-accent-strong)" }}
                  >
                    {item.organization}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5 text-sm text-ink-muted">
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ background: "var(--color-accent-strong)" }}
                          aria-hidden="true"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
