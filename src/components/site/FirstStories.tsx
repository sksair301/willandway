import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

export function FirstStories() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden border border-border bg-surface p-8 sm:p-14">
            <div
              className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-full bg-accent/10 blur-[100px]"
              aria-hidden
            />
            <Quote className="size-8 text-accent" strokeWidth={1.5} />
            <p className="display-xl mt-8 max-w-3xl text-[clamp(1.6rem,4.4vw,3rem)]">
              Building our first client stories.
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              We're working with ambitious businesses and founders to turn ideas into
              useful digital products. Your project could be our next case study.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
