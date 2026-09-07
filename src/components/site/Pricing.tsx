import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { MagneticLink } from "./MagneticButton";

const tiers = [
  {
    name: "Starter",
    body: "For simple websites and landing pages.",
    price: "Starting from ₹15K",
    includes: ["Up to 5 sections", "Responsive build", "Basic SEO setup"],
  },
  {
    name: "Business",
    body: "For custom websites and business applications.",
    price: "Starting from ₹40K",
    includes: ["Custom design system", "Admin / CMS", "Integrations"],
    featured: true,
  },
  {
    name: "Custom",
    body: "For SaaS products, CRMs and custom platforms.",
    price: "Let's Talk",
    includes: ["Product scoping", "Architecture & APIs", "Ongoing roadmap"],
  },
];

export function Pricing() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Engagement"
          title="How we work"
          subtitle="Every project is different. We'll recommend the right approach after understanding your requirements."
        />

        <div className="mt-14 grid gap-px border border-border bg-border lg:grid-cols-3">
          {tiers.map((tier, i) => (
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
                <p className="mt-6 font-display text-2xl font-bold tracking-tight sm:text-3xl">
                  {tier.price}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {tier.body}
                </p>
                <ul className="mt-7 space-y-2.5 border-t border-border pt-7 text-sm text-muted-foreground">
                  {tier.includes.map((item) => (
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
                  Start a Project <ArrowRight className="size-4" />
                </MagneticLink>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
