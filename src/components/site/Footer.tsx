import { Link } from "@tanstack/react-router";
import { ArrowUp } from "lucide-react";
import logoLockup from "@/assets/logo-mark.jpg";

const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com/company/willandwaystudio/" },
  { label: "Instagram", href: "https://instagram.com/willandway.co/" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <img
              src={logoLockup}
              alt="Will & Way — since 2026"
              className="w-[min(320px,70vw)] border border-border"
            />
            <p className="mt-4 text-sm text-muted-foreground">
              You have the idea. We know the way.
            </p>
          </div>

          <div className="flex flex-wrap gap-12">
            <nav aria-label="Footer">
              <p className="eyebrow">Navigate</p>
              <ul className="mt-4 space-y-2">
                {[
                  { label: "Work", hash: "work" },
                  { label: "Services", hash: "services" },
                  { label: "About", hash: "about" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      to="/"
                      hash={item.hash}
                      className="text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    to="/contact"
                    className="text-sm text-muted-foreground transition-colors hover:text-accent"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <div>
              <p className="eyebrow">Elsewhere</p>
              <ul className="mt-4 space-y-2">
                {socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted-foreground transition-colors hover:text-accent"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow">Say hello</p>
              <a
                href="mailto:hey.willandway@gmail.com"
                className="mt-4 block text-sm text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent"
              >
                hey.willandway@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-border pt-8 sm:flex-row sm:items-center">
          <p className="text-xs tracking-wide text-muted-foreground">
            © 2026 Will &amp; Way. All rights reserved.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 border border-border px-4 py-2.5 font-display text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Back to top <ArrowUp className="size-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
