import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "../data/nav";
import { profile } from "../data/profile";
import { useActiveSection } from "../hooks/useActiveSection";
import { cn } from "../utils/cn";
import Button from "../components/Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeId = useActiveSection(navItems.map((item) => item.href.replace("#", "")));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-bg/85 backdrop-blur-md border-b border-border-soft" : "bg-transparent"
      )}
    >
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <nav className="container-x flex h-16 items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          className="focus-ring font-display text-lg font-bold tracking-tight text-ink"
        >
          F<span style={{ color: "var(--color-accent-strong)" }}>.</span>EB
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "focus-ring relative rounded-md px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive ? "text-ink" : "text-ink-muted hover:text-ink"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute inset-x-3 -bottom-[1px] h-[2px] rounded-full"
                      style={{ background: "var(--color-accent-strong)" }}
                      aria-hidden="true"
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Button href="#contact" variant="secondary" className="!px-4 !py-2 text-sm">
            Contact Me
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex items-center justify-center rounded-md p-2 text-ink md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "overflow-hidden border-b border-border-soft bg-bg transition-[max-height,opacity] duration-300 md:hidden",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="container-x flex flex-col gap-1 py-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="focus-ring block rounded-md px-3 py-2.5 text-base font-medium text-ink-muted hover:bg-surface hover:text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <Button
              href={profile.cvUrl}
              variant="primary"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Download CV
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
