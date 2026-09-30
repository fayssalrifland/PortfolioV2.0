import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "../utils/cn";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * Wraps a card with a subtle, smooth 3D tilt and a soft cursor-tracking
 * glare, giving hover feedback that feels tactile without being flashy.
 * Falls back to a static wrapper when reduced motion is preferred.
 */
export default function TiltCard({ children, className }: TiltCardProps) {
  const shouldReduceMotion = useReducedMotion();

  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const springConfig = { stiffness: 180, damping: 20, mass: 0.4 };
  const springX = useSpring(pointerX, springConfig);
  const springY = useSpring(pointerY, springConfig);

  const rotateX = useTransform(springY, [0, 1], [7, -7]);
  const rotateY = useTransform(springX, [0, 1], [-7, 7]);
  const glareX = useTransform(springX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(springY, [0, 1], ["0%", "100%"]);
  const glareBackground = useMotionTemplate`radial-gradient(280px circle at ${glareX} ${glareY}, rgba(255,255,255,0.08), transparent 65%)`;

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width);
    pointerY.set((event.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  return (
    <motion.div
      className={cn("relative [transform-style:preserve-3d]", className)}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{ background: glareBackground }}
      />
    </motion.div>
  );
}
