import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const steps = [
  { 
    no: "01", 
    title: "ROUGH BRIEF TO MVP", 
    body: "Turn early ideas into validated products, fast. We help you go from rough brief to a working MVP with real user feedback.",
    tag: "IDEAS TO PROOF"
  },
  { 
    no: "02", 
    title: "WEB + MOBILE", 
    body: "Beautiful, performant, scalable web and mobile apps for a global audience. Built for speed, flexibility and what's next.",
    tag: "PLATFORMS THAT SCALE"
  },
  { 
    no: "03", 
    title: "DATA + BUSINESS STRATEGY", 
    body: "Turn data into decisions. We build strategies, models and systems that uncover opportunity, reduce risk and drive sustainable growth.",
    tag: "BETTER DECISIONS"
  },
  { 
    no: "04", 
    title: "UI/UX + PROTOTYPING", 
    body: "User-centred design, interactive prototypes and polished interfaces that turn complex ideas into intuitive experiences.",
    tag: "CLEARER EXPERIENCES"
  },
  { 
    no: "05", 
    title: "PITCH + INVESTOR ASSETS", 
    body: "Clear storytelling, sharp visuals and data-backed decks that build confidence and get you funded.",
    tag: "INVESTOR READY"
  },
];

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading 
          eyebrow="WILL & WAY | GLOBAL CREATIVE TECHNOLOGY STUDIO" 
          title="How We Work?" 
        />
        <p className="mt-4 text-sm tracking-widest text-muted-foreground uppercase font-display">
          STRATEGY / DESIGN / ENGINEERING / IMPACT
        </p>

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
                <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-tight text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
                <p className="mt-6 flex items-center gap-2 text-[0.65rem] font-semibold tracking-widest uppercase text-muted-foreground">
                  <span className="text-accent">&rarr;</span> {step.tag}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
