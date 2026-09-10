import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-border py-24 sm:py-32">

      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-accent/12 blur-[130px] animate-orb"
        aria-hidden
      />
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <h2 className="display-xl text-[clamp(2.5rem,8vw,6rem)] leading-tight">
          <Reveal className="block">Ready to turn your idea into a</Reveal>
          <Reveal delay={120} className="block text-foreground">
            working reality?
          </Reveal>
        </h2>

        <Reveal delay={240} className="mt-16 block">
          <a
            href="mailto:hey.willandway@gmail.com"
            className="block w-full bg-accent py-6 text-center font-display text-lg font-bold text-background transition-colors hover:bg-accent/90 sm:text-xl"
          >
            Book a 15-Minute Global Discovery Call
          </a>
        </Reveal>

        <Reveal
          delay={320}
          className="mt-16 flex flex-col gap-6 border-t border-border pt-8"
        >
          <span className="eyebrow text-muted-foreground uppercase text-xs">Email Us</span>
          <a
            href="mailto:hey.willandway@gmail.com"
            className="font-display text-lg tracking-tight text-accent transition-colors hover:text-accent/80 sm:text-2xl"
          >
            hey.willandway@gmail.com
          </a>
        </Reveal>
      </div>
    </section>
  );
}
