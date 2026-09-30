import { cn } from "../utils/cn";

interface BadgeProps {
  children: string;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border-soft bg-bg-soft px-2.5 py-1 text-xs font-medium text-ink-muted",
        className
      )}
    >
      {children}
    </span>
  );
}
