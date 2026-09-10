import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const services = [
  {
    no: "01",
    title: "Websites & Mobile Apps",
    body: "High-converting, modern digital products built for scale and performance.",
    tags: ["React", "Next.js", "Node", "Figma"],
    more: "Fast, accessible, and designed for optimal user experience across all devices.",
  },
  {
    no: "02",
    title: "Data & Business Strategy",
    body: "Market research, user analytics, and business intelligence to guide your decisions.",
    tags: ["Analytics", "BI", "Research"],
    more: "Turn raw data into actionable insights that drive growth and uncover opportunities.",
  },
  {
    no: "03",
    title: "Presentation & Pitch Assets",
    body: "High-impact pitch decks, product visualizers, and investor presentations.",
    tags: ["Pitch Decks", "Visualizers", "Storytelling"],
    more: "Clear storytelling and sharp visuals that build confidence and help you secure funding.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading eyebrow="Services" title="Full-stack execution, zero fluff." />

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.no} delay={i * 90}>
              <article className="group relative h-full bg-background p-7 transition-colors duration-500 hover:bg-surface sm:p-10">
                <span className="absolute inset-x-0 top-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
                <div className="flex items-start justify-between">
                  <span className="font-display text-4xl font-bold text-border-strong transition-all duration-500 group-hover:-translate-y-1 group-hover:text-accent sm:text-5xl">
                    {service.no}
                  </span>
                  <ArrowUpRight className="size-6 translate-y-2 text-accent opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
                </div>

                <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {service.body}
                </p>

                <div className="grid grid-rows-[0fr] transition-all duration-500 group-hover:grid-rows-[1fr] group-focus-within:grid-rows-[1fr]">
                  <p className="overflow-hidden text-sm leading-relaxed text-accent opacity-0 transition-opacity duration-500 group-hover:pt-4 group-hover:opacity-100">
                    {service.more}
                  </p>
                </div>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-border px-3 py-1.5 font-display text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors duration-500 group-hover:border-border-strong group-hover:text-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
