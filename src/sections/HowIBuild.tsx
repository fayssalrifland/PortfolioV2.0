import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";

const steps = [
  {
    number: "01",
    title: "Understand",
    description: "Understand the business problem and user requirements.",
  },
  {
    number: "02",
    title: "Design",
    description: "Create a clear and intuitive interface.",
  },
  {
    number: "03",
    title: "Develop",
    description: "Build the application using modern and maintainable technologies.",
  },
  {
    number: "04",
    title: "Improve",
    description: "Test, optimize, fix issues and improve the user experience.",
  },
];

export default function HowIBuild() {
  return (
    <section className="scroll-mt-16 border-t border-border-soft py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Process"
          title="How I Build"
          description="A simple, repeatable process I follow for every project, from idea to a polished, working product."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.1}>
              <div className="relative h-full rounded-2xl border border-border bg-surface p-6">
                <span
                  className="font-display text-3xl font-extrabold opacity-40"
                  style={{ color: "var(--color-accent-strong)" }}
                >
                  {step.number}
                </span>
                <h3 className="font-display mt-4 text-base font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{step.description}</p>
                {index < steps.length - 1 && (
                  <span
                    className="absolute right-[-11px] top-1/2 hidden h-px w-5 -translate-y-1/2 bg-border-soft lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
