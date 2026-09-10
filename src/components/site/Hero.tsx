import { ArrowDown, ArrowRight } from "lucide-react";
import { MagneticLink, MagneticAnchor } from "./MagneticButton";
import { Reveal } from "./Reveal";

const words = ["WILL & WAY", "Ideas,", "Made", "Possible."];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">

      <div
        className="pointer-events-none absolute -top-40 -right-24 size-[34rem] rounded-full bg-accent/12 blur-[130px] animate-orb sm:size-[46rem]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="eyebrow flex flex-wrap items-center gap-3">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Independent Digital Studio • Available for Projects
          </p>
        </Reveal>

        <h1 className="display-xl mt-8 text-[clamp(2.5rem,8vw,7rem)] leading-tight">
          {words.map((word, i) => (
            <span key={word} className="block overflow-hidden">
              <Reveal delay={120 + i * 110} className="block">
                <span 
                  className={
                    i % 2 === 1 
                      ? "text-muted-foreground/60 italic" 
                      : "bg-gradient-to-br from-white via-white/90 to-white/60 bg-clip-text text-transparent"
                  }
                >
                  {word}
                </span>
              </Reveal>
            </span>
          ))}
        </h1>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <Reveal delay={520}>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              The global creative technology studio turning rough briefs into live, market-ready digital products, no matter where you are in the world.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <MagneticLink to="/contact" variant="accent">
                Start a Project <ArrowRight className="size-4" />
              </MagneticLink>
              <MagneticAnchor href="#work" variant="outline">
                Explore Our Work <ArrowDown className="size-4" />
              </MagneticAnchor>
            </div>
          </Reveal>

          <Reveal delay={620} className="hidden lg:block">
            <div className="ml-auto flex max-w-sm flex-col gap-3">
              {[
                { k: "Service", v: "Worldwide Service" },
                { k: "Collaboration", v: "24/7 Asynchronous & Live" },
                { k: "Delivery", v: "Full-Stack Delivery" },
              ].map((item, i) => (
                <div
                  key={item.k}
                  className="flex items-center justify-between border border-border bg-surface/60 px-5 py-4 backdrop-blur-sm animate-float"
                  style={{ animationDelay: `${i * 1.1}s` }}
                >
                  <span className="eyebrow">{item.k}</span>
                  <span className="font-display text-sm text-foreground">{item.v}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-20 flex items-center gap-3 border-t border-border pt-6">
          <span className="eyebrow">Scroll to explore</span>
          <ArrowDown className="size-3.5 animate-bounce text-accent" />
        </div>
      </div>
    </section>
  );
}
