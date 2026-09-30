import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import type { MouseEvent } from "react";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import Button from "../components/Button";
import Magnetic from "../components/Magnetic";
import { profile } from "../data/profile";

const stats = [
  { label: "Years building on the web", value: "2+" },
  { label: "Core stack", value: "React" },
  { label: "Projects shipped", value: "3+" },
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 90, damping: 22, mass: 0.6 });
  const springY = useSpring(mouseY, { stiffness: 90, damping: 22, mass: 0.6 });
  const spotlightBackground = useMotionTemplate`radial-gradient(560px circle at ${springX}px ${springY}px, var(--color-accent-soft), transparent 70%)`;

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(event.clientX - rect.left);
    mouseY.set(event.clientY - rect.top);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-16"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_10%,transparent_75%)]" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-20 blur-[110px]"
        style={{ background: "var(--color-accent)" }}
        aria-hidden="true"
      />
      {!shouldReduceMotion && (
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{ background: spotlightBackground }}
          aria-hidden="true"
        />
      )}

      <div className="container-x relative py-20">
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-ink-muted"
        >
          <span
            className="h-2 w-2 rounded-full"
            style={{ background: "var(--color-accent-strong)" }}
            aria-hidden="true"
          />
          Available for frontend / web developer roles
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="font-display mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-6xl"
        >
          Hi, I&apos;m Fayssal El Bouhamedy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.16 }}
          className="mt-4 text-xl font-semibold sm:text-2xl"
          style={{ color: "var(--color-accent-strong)" }}
        >
          Frontend / Web Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.24 }}
          className="mt-5 max-w-xl text-base leading-relaxed text-ink-muted sm:text-lg"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Magnetic className="inline-block">
            <Button href="#projects" variant="primary" icon={<ArrowRight size={16} />}>
              View My Projects
            </Button>
          </Magnetic>
          <Magnetic className="inline-block">
            <Button
              href={profile.cvUrl}
              variant="secondary"
              icon={<Download size={16} />}
              download
            >
              Download CV
            </Button>
          </Magnetic>
          <a
            href="#contact"
            className="focus-ring text-sm font-semibold text-ink-muted underline decoration-border underline-offset-4 transition-colors hover:text-ink hover:decoration-ink-faint"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.4 }}
          className="mt-16 grid max-w-lg grid-cols-3 gap-6 border-t border-border-soft pt-8"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs uppercase tracking-wide text-ink-faint">{stat.label}</dt>
              <dd className="font-display mt-1 text-2xl font-bold text-ink">{stat.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="focus-ring absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-faint transition-colors hover:text-ink-muted sm:flex"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} className={shouldReduceMotion ? "" : "animate-bounce"} />
      </a>
    </section>
  );
}
