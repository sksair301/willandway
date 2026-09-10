import { Reveal } from "./Reveal";

const features = [
  {
    title: "24/7 Global Availability",
    body: (
      <>
        Time zones are never a barrier. We adjust to your schedule with{" "}
        <strong className="text-accent">daily async updates</strong> via Loom and Slack.
      </>
    ),
    accent: true,
  },
  {
    title: "100% IP Ownership",
    body: (
      <>
        You retain <strong className="text-accent">full ownership</strong> of all design
        files, repositories, and assets upon project completion.
      </>
    ),
    accent: true,
  },
  {
    title: "30-Day Support",
    body: (
      <>
        We guarantee our work and stay on board to ensure a{" "}
        <strong className="text-accent">smooth, bug-free rollout</strong> post-launch.
      </>
    ),
    accent: true,
  },
  {
    title: "Rapid Prototyping",
    body: (
      <>
        Testing directions <strong className="text-accent">early</strong> with interactive
        prototypes.
      </>
    ),
    accent: false,
  },
  {
    title: "Scalable Foundations",
    body: (
      <>
        Building an today with a{" "}
        <strong className="text-accent">clear path</strong> for future growth.
      </>
    ),
    accent: false,
  },
  {
    title: "Transparent Communication",
    body: (
      <>
        Ensuring clear progress and{" "}
        <strong className="text-accent">honest track-offs</strong> throughout the process.
      </>
    ),
    accent: false,
  },
];

export function FirstStories() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <h2 className="display-xl text-[clamp(1.6rem,4.4vw,2.8rem)] font-bold">
            Seamless execution, zero time-zone friction.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 80}>
              <div className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-surface">
                {feature.accent && (
                  <span className="mb-6 block h-0.5 w-12 bg-accent" aria-hidden />
                )}
                <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {feature.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
