import { Reveal } from "./Reveal";

export function Statement() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          <h2 className="display-xl text-[clamp(1.75rem,4.6vw,3.5rem)]">
            <Reveal className="block">We don't just build websites.</Reveal>
            <Reveal delay={120} className="block text-muted-foreground">
              We build digital experiences that move{" "}
              <span className="text-accent">businesses forward.</span>
            </Reveal>
          </h2>
          <Reveal delay={220} className="lg:pb-2">
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Will &amp; Way is a two-person studio that combines design, development and
              problem-solving. We start with the business question — who uses this, what
              should it change, what does success look like — and then build the product
              around the answer.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Fewer people, fewer handoffs, sharper decisions. You talk to the people
              writing the code.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
