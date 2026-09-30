import { Target, Users, Rocket, TrendingUp } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const values = [
  {
    icon: Target,
    title: "Practical mindset",
    description:
      "I focus on solving real problems instead of adding unnecessary complexity.",
  },
  {
    icon: Users,
    title: "User-focused development",
    description: "I care about responsive interfaces and intuitive user experiences.",
  },
  {
    icon: Rocket,
    title: "Modern technologies",
    description:
      "I continuously work with modern frontend tools and development practices.",
  },
  {
    icon: TrendingUp,
    title: "Continuous improvement",
    description: "I actively improve my development skills through practical projects.",
  },
];

export default function WhyWorkWithMe() {
  return (
    <section className="scroll-mt-16 border-t border-border-soft py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading eyebrow="Why Work With Me" title="Professional value, not buzzwords" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.08}>
              <div className="flex h-full gap-4 rounded-2xl border border-border bg-surface p-6">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                  style={{ background: "var(--color-accent-soft)", color: "var(--color-accent-strong)" }}
                >
                  <value.icon size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-ink">{value.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {value.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
