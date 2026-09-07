import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const services = [
  {
    no: "01",
    title: "Websites",
    body: "Fast, modern websites designed to make your business look credible and convert visitors into customers.",
    tags: ["Landing Pages", "Business Websites", "Portfolio", "E-commerce"],
    more: "Performance budgets, SEO fundamentals and a CMS you can actually edit.",
  },
  {
    no: "02",
    title: "Web Applications",
    body: "Powerful web applications designed around the way your business actually works.",
    tags: ["Dashboards", "CRM", "Management Systems", "Internal Tools"],
    more: "Roles, permissions, reporting and workflows mapped to your real process.",
  },
  {
    no: "03",
    title: "SaaS & Digital Products",
    body: "From an early idea to a scalable product, we turn concepts into usable digital experiences.",
    tags: ["SaaS", "MVP", "Platforms", "Subscriptions"],
    more: "Scoped MVPs shipped in weeks, with a roadmap for what comes after.",
  },
  {
    no: "04",
    title: "APIs & Backend",
    body: "Reliable backend systems and APIs that keep your product secure, scalable and connected.",
    tags: ["Laravel", "PHP", "MySQL", "REST APIs"],
    more: "Clean architecture, documented endpoints and integrations that hold up.",
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading eyebrow="Services" title="What we build" />

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2">
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
