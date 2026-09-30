import { Mail } from "lucide-react";
import { profile } from "../data/profile";
import { navItems } from "../data/nav";
import { GithubIcon, LinkedinIcon } from "../components/icons/BrandIcons";

export default function Footer() {
  return (
    <footer className="border-t border-border-soft bg-bg-soft">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-2">
          <a href="#home" className="font-display text-lg font-bold text-ink">
            {profile.name}
          </a>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
            {profile.role} — building clean, responsive and practical web
            applications with modern technologies.
          </p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
            >
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
            >
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Send email"
              className="focus-ring flex h-10 w-10 items-center justify-center rounded-lg border border-border text-ink-muted transition-colors hover:border-ink-faint hover:text-ink"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-ink">Navigation</h3>
          <ul className="mt-4 space-y-2.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="focus-ring text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold text-ink">Contact</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-muted">
            <li>
              <a href={`mailto:${profile.email}`} className="focus-ring hover:text-ink">
                {profile.email}
              </a>
            </li>
            <li>{profile.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border-soft py-6">
        <p className="container-x text-center text-xs text-ink-faint">
          © 2026 {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
