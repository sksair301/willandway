const tech = [
  "Laravel",
  "PHP",
  "JavaScript",
  "React",
  "MySQL",
  "REST API",
  "Git",
  "HTML",
  "CSS",
];

export function TechMarquee() {
  const row = [...tech, ...tech];

  return (
    <section className="border-y border-border py-14 sm:py-16">
      <p className="eyebrow mx-auto max-w-[1400px] px-5 sm:px-8">Our toolkit</p>
      <div className="relative mt-8 overflow-hidden">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent"
          aria-hidden
        />
        <ul className="flex w-max animate-marquee items-center gap-12 pr-12 sm:gap-16 sm:pr-16">
          {row.map((item, i) => (
            <li
              key={`${item}-${i}`}
              className="flex items-center gap-12 font-display text-2xl font-semibold uppercase tracking-tight text-muted-foreground transition-colors hover:text-accent sm:gap-16 sm:text-4xl"
            >
              {item}
              <span className="size-1.5 bg-accent/60" aria-hidden />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
