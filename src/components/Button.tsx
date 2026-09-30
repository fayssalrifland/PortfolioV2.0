import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "focus-ring inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-[#06110d] hover:bg-[var(--color-accent-strong)] shadow-[0_0_0_1px_rgba(20,184,129,0.4)] hover:shadow-[0_0_0_1px_rgba(47,215,154,0.6)] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "bg-surface text-ink border border-border hover:border-ink-faint hover:bg-surface-hover hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "text-ink-muted hover:text-ink underline-offset-4 hover:underline",
};

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
  icon?: ReactNode;
}

type ButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type LinkProps = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export default function Button(props: ButtonProps | LinkProps) {
  const { variant = "primary", className, children, icon, ...rest } = props;
  const classes = cn(base, variants[variant], className);

  if ("href" in props && props.href) {
    const { href, ...anchorRest } = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={classes} {...anchorRest}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
      {icon}
    </button>
  );
}
