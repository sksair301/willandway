import { MessagesSquare, Zap, Target, HeartHandshake } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const reasons = [
  {
    icon: MessagesSquare,
    title: "Direct Communication",
    body: "You work directly with the people building your product.",
  },
  {
    icon: Zap,
    title: "Fast Iteration",
    body: "Less bureaucracy. Faster decisions. Faster progress.",
  },
  {
    icon: Target,
    title: "Business First",
    body: "We focus on solving the actual problem instead of adding unnecessary complexity.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    body: "We don't disappear after launch. We're here when your product needs us.",
  },
];

export function WhyUs() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why Will & Way"
          title={
            <>
              Two minds.
              <br />
              <span className="text-muted-foreground">One direction.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 90}>
              <div className="group h-full bg-background p-7 transition-colors duration-500 hover:bg-surface">
                <reason.icon
                  className="size-6 text-muted-foreground transition-colors duration-500 group-hover:text-accent"
                  strokeWidth={1.5}
                />
                <h3 className="mt-8 font-display text-lg font-semibold tracking-tight">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {reason.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
