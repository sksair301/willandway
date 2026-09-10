import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const reasons = [
  {
    no: "01",
    title: "Listen & Unpack",
    body: "We sit down with you, ask what you expect, identify what you want to improve, and clarify your vision.",
  },
  {
    no: "02",
    title: "Define the Way",
    body: "We build an agile, lean roadmap, removing unnecessary features to focus strictly on what moves the needle.",
  },
  {
    no: "03",
    title: "Build & Ship",
    body: "Rapid execution bridging interactive UI/UX prototypes and scalable full-stack code.",
  },
];

export function WhyUs() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Partnership"
          title={
            <>
              We build WITH you,
              <br />
              <span className="text-muted-foreground">not just FOR you.</span>
            </>
          }
        />

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-3">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 90}>
              <div className="group h-full bg-background p-7 transition-colors duration-500 hover:bg-surface">
                <span className="border border-border px-3 py-1 font-display text-sm font-semibold text-accent">
                  {reason.no}
                </span>
                <h3 className="mt-8 font-display text-xl font-semibold tracking-tight text-accent">
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
