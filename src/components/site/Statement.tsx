import { Reveal } from "./Reveal";

export function Statement() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <h2 className="display-xl mb-16 text-[clamp(1.75rem,4.6vw,3.5rem)]">
            Good ideas shouldn't get stuck just because you don't know how to build them.
          </h2>
        </Reveal>

        <div className="grid gap-px border border-border bg-border sm:grid-cols-3">
          <Reveal delay={100} className="h-full">
            <div className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-surface">
              <span className="eyebrow text-muted-foreground">THE PROBLEM 01</span>
              <h3 className="mt-8 font-display text-2xl font-semibold text-accent">
                The Traditional Agency Trap
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Rigid scopes, bloated timelines, and high overhead costs for tech you don't actually need.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200} className="h-full">
            <div className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-surface">
              <span className="eyebrow text-muted-foreground">THE PROBLEM 02</span>
              <h3 className="mt-8 font-display text-2xl font-semibold text-accent">
                The "Rough Brief" Barrier
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Most developers force you to have fully fleshed-out technical specs before even starting.
              </p>
            </div>
          </Reveal>

          <Reveal delay={300} className="h-full">
            <div className="group h-full bg-background p-8 border-2 border-accent transition-colors duration-500">
              <span className="eyebrow text-muted-foreground">THE SOLUTION</span>
              <h3 className="mt-8 font-display text-2xl font-semibold text-accent">
                Our Philosophy
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                Bring us your half-formed concept, messy notes, or a simple "What if we tried this?" We listen, adapt, and figure out the right way forward together.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
