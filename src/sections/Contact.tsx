import { useState, type FormEvent } from "react";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import Button from "../components/Button";
import { profile } from "../data/profile";
import { GithubIcon, LinkedinIcon } from "../components/icons/BrandIcons";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const initialState: FormState = { name: "", email: "", message: "" };

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please write a short message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Your message should be at least 10 characters.";
  }

  return errors;
}

export default function Contact() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (field: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setStatus("submitting");
    window.setTimeout(() => {
      setStatus("success");
      setValues(initialState);
    }, 900);
  };

  return (
    <section id="contact" className="scroll-mt-16 border-t border-border-soft py-24 sm:py-28">
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Contact" title="Let's Build Something" />
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
                I'm open to frontend development opportunities, freelance
                projects and collaborations.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <ul className="mt-8 space-y-3">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="focus-ring group flex items-center gap-3 rounded-xl border border-border bg-surface p-4 text-sm font-medium text-ink transition-colors hover:border-ink-faint hover:bg-surface-hover"
                  >
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ background: "var(--color-accent-soft)", color: "var(--color-accent-strong)" }}
                    >
                      <Mail size={16} />
                    </span>
                    {profile.email}
                  </a>
                </li>
                <li>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="focus-ring group flex items-center gap-3 rounded-xl border border-border bg-surface p-4 text-sm font-medium text-ink transition-colors hover:border-ink-faint hover:bg-surface-hover"
                  >
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ background: "var(--color-accent-soft)", color: "var(--color-accent-strong)" }}
                    >
                      <GithubIcon className="h-4 w-4" />
                    </span>
                    github.com/fayssal-elbouhamedy
                  </a>
                </li>
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="focus-ring group flex items-center gap-3 rounded-xl border border-border bg-surface p-4 text-sm font-medium text-ink transition-colors hover:border-ink-faint hover:bg-surface-hover"
                  >
                    <span
                      className="flex h-9 w-9 items-center justify-center rounded-lg"
                      style={{ background: "var(--color-accent-soft)", color: "var(--color-accent-strong)" }}
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </span>
                    linkedin.com/in/fayssal-elbouhamedy
                  </a>
                </li>
              </ul>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              noValidate
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center gap-3 py-10 text-center">
                  <CheckCircle2 size={36} style={{ color: "var(--color-accent-strong)" }} />
                  <h3 className="font-display text-lg font-semibold text-ink">
                    Message sent
                  </h3>
                  <p className="max-w-xs text-sm text-ink-muted">
                    Thanks for reaching out — I'll get back to you as soon as possible.
                  </p>
                  <Button variant="secondary" onClick={() => setStatus("idle")} type="button">
                    Send another message
                  </Button>
                </div>
              ) : (
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-ink">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={values.name}
                      onChange={handleChange("name")}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className="focus-ring mt-1.5 w-full rounded-lg border border-border bg-bg-soft px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint"
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-400">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-ink">
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange("email")}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className="focus-ring mt-1.5 w-full rounded-lg border border-border bg-bg-soft px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint"
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-400">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-medium text-ink">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={values.message}
                      onChange={handleChange("message")}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? "message-error" : undefined}
                      className="focus-ring mt-1.5 w-full resize-none rounded-lg border border-border bg-bg-soft px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint"
                      placeholder="Tell me a bit about the role or project..."
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-400">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    className="w-full"
                    disabled={status === "submitting"}
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 size={16} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
