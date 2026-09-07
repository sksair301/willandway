import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const steps = [
  { no: "01", title: "Discover", body: "Understand your idea, users and business goals." },
  { no: "02", title: "Plan", body: "Define features, technology and the project roadmap." },
  { no: "03", title: "Design", body: "Turn the idea into a clean and intuitive experience." },
  { no: "04", title: "Build", body: "Develop, test and refine the product." },
  { no: "05", title: "Launch", body: "Deploy your product and help you move forward." },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading eyebrow="Process" title="From idea to launch." />

        <div className="relative mt-16">
          <div
            className="absolute top-3 left-0 hidden h-px w-full bg-border lg:block"
            aria-hidden
          />
          <div
            className="absolute top-0 left-3 h-full w-px bg-border lg:hidden"
            aria-hidden
          />

          <ol className="grid gap-10 lg:grid-cols-5 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.no} delay={i * 120} className="relative pl-12 lg:pl-0">
                <span className="absolute top-1 left-0 size-6 border border-border-strong bg-background lg:relative lg:top-0 lg:mb-8 lg:block">
                  <span className="absolute inset-1.5 bg-accent" />
                </span>
                <p className="font-display text-xs tracking-[0.2em] text-accent">
                  {step.no}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold uppercase tracking-tight sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
