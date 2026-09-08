import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { MagneticLink } from "./MagneticButton";

const engagements = [
  {
    name: "Starter",
    label: "Landing Pages & Websites",
    body: "Ideal for founders and small businesses who need a polished online presence — fast. We scope the work together and deliver a fixed deliverable.",
    highlights: [
      "Up to 5 sections",
      "Fully responsive design",
      "Basic SEO setup",
    ],
    featured: false,
    cta: "Start a Conversation",
  },
  {
    name: "Business",
    label: "Custom Web Applications",
    body: "For teams that need a tailored product — a dashboard, CMS, admin panel or business tool. We design, architect and build end-to-end.",
    highlights: [
      "Custom design system",
      "Admin panel or CMS",
      "Third-party integrations",
    ],
    featured: true,
    cta: "Tell Us About Your Project",
  },
  {
    name: "Custom",
    label: "SaaS & Complex Platforms",
    body: "For ambitious products that need product thinking, scalable architecture and an ongoing build partner — not just a vendor.",
    highlights: [
      "Product scoping & discovery",
      "Scalable architecture & APIs",
      "Ongoing roadmap support",
    ],
    featured: false,
    cta: "Let's Talk",
  },
];

export function Pricing() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="How We Work"
          title="Pick the right engagement"
          subtitle="Every project is unique. We'll recommend the best approach after understanding your goals — no fixed packages, no surprises."
        />

        <div className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-3">
          {engagements.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 100}>
              <div
                className={
                  tier.featured
                    ? "relative flex h-full flex-col bg-surface p-8 sm:p-10"
                    : "relative flex h-full flex-col bg-background p-8 transition-colors duration-500 hover:bg-surface sm:p-10"
                }
              >
                {tier.featured ? (
                  <span className="absolute inset-x-0 top-0 h-0.5 bg-accent" aria-hidden />
                ) : null}

                <p className="eyebrow">{tier.name}</p>

                <p className="mt-6 font-display text-2xl font-bold tracking-tight sm:text-3xl leading-snug">
                  {tier.label}
                </p>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {tier.body}
                </p>

                <ul className="mt-7 space-y-2.5 border-t border-border pt-7 text-sm text-muted-foreground">
                  {tier.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 size-1.5 shrink-0 bg-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>

                <MagneticLink
                  to="/contact"
                  variant={tier.featured ? "accent" : "outline"}
                  className="mt-9 w-full"
                >
                  {tier.cta} <ArrowRight className="size-4" />
                </MagneticLink>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Not sure which fits you?{" "}
            <a
              href="/contact"
              className="text-accent underline underline-offset-4 transition-opacity hover:opacity-70"
            >
              Drop us a message
            </a>{" "}
            and we'll guide you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
