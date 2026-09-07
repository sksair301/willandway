import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { MagneticLink } from "./MagneticButton";

const socials = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Instagram", href: "https://instagram.com" },
];

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 sm:py-32">

      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-accent/12 blur-[130px] animate-orb"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <h2 className="display-xl text-[clamp(2.5rem,10vw,8rem)]">
          <Reveal className="block">Have an idea?</Reveal>
          <Reveal delay={120} className="block text-muted-foreground">
            Let's build the <span className="text-accent">way forward.</span>
          </Reveal>
        </h2>

        <Reveal delay={240} className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Tell us what you're trying to build. We'll figure out the rest together.
          </p>
          <MagneticLink to="/contact" variant="accent" className="px-9 py-5 text-base">
            Start a Project <ArrowRight className="size-5" />
          </MagneticLink>
        </Reveal>

        <Reveal
          delay={320}
          className="mt-16 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <a
            href="mailto:hello@willandway.com"
            className="font-display text-lg tracking-tight text-foreground transition-colors hover:text-accent sm:text-2xl"
          >
            hello@willandway.com
          </a>
          <ul className="flex flex-wrap gap-6">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-display text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-accent"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
