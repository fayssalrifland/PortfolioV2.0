import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "text-center" : "text-left"}>
      <div
        className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent ${
          align === "center" ? "justify-center" : ""
        }`}
        style={{ color: "var(--color-accent-strong)" }}
      >
        <span className="h-px w-8 bg-current opacity-60" aria-hidden="true" />
        {eyebrow}
      </div>
      <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed text-ink-muted ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
