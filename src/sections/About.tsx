import {
  Code2,
  Layers,
  Smartphone,
  Plug,
  Gauge,
  Sparkles,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const highlights = [
  "Clean and maintainable code",
  "Responsive design",
  "Component-based development",
  "API integration",
  "Performance",
  "User experience",
  "Modern frontend architecture",
];

const whatIDo = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building fast, accessible interfaces with React and modern JavaScript.",
  },
  {
    icon: Layers,
    title: "UI Implementation",
    description: "Turning designs into pixel-accurate, reusable components.",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    description: "Interfaces that work reliably across mobile, tablet and desktop.",
  },
  {
    icon: Sparkles,
    title: "Web Applications",
    description: "Full features and workflows, not just static pages.",
  },
  {
    icon: Plug,
    title: "API Integration",
    description: "Connecting frontends to REST APIs and real data sources.",
  },
  {
    icon: Gauge,
    title: "Performance Optimization",
    description: "Faster load times and smoother interactions for real users.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 border-t border-border-soft py-24 sm:py-28">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="About Me"
              title="A web developer focused on practical, well-built products"
            />
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-ink-muted">
                I'm a frontend / web developer with over two years of hands-on
                experience building responsive interfaces, interactive web
                applications and practical digital products. I care about
                writing clean, maintainable code and building interfaces that
                feel fast and intuitive to use.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-muted">
                My work centers on component-based development with React,
                paired with solid fundamentals in HTML, CSS and JavaScript. I
                also work with backend and data technologies when a project
                calls for it, so I can understand a feature end-to-end rather
                than just the surface.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-ink">
                    <span
                      className="h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: "var(--color-accent-strong)" }}
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div>
            <Reveal delay={0.1}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink-faint">
                What I Do
              </h3>
            </Reveal>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {whatIDo.map((item, index) => (
                <Reveal key={item.title} delay={0.08 * index}>
                  <div className="group h-full rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:-translate-y-1 hover:border-ink-faint hover:bg-surface-hover">
                    <div
                      className="inline-flex h-10 w-10 items-center justify-center rounded-lg"
                      style={{ background: "var(--color-accent-soft)", color: "var(--color-accent-strong)" }}
                    >
                      <item.icon size={20} aria-hidden="true" />
                    </div>
                    <h4 className="font-display mt-4 text-sm font-semibold text-ink">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
