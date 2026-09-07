import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { ProjectBriefForm } from "@/components/site/ProjectBriefForm";

const title = "Start a Project — Will & Way";
const description =
  "Send Will & Way a project brief. Tell us what you want to build and we'll reply within 48 hours with an approach and estimate.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

const facts = [
  { k: "Email", v: "hello@willandway.com" },
  { k: "Response time", v: "Within 48 hours" },
  { k: "Availability", v: "Taking projects now" },
];

function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="contact" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">

        <div
          className="pointer-events-none absolute -top-32 -left-24 size-[30rem] rounded-full bg-accent/10 blur-[130px] animate-orb"
          aria-hidden
        />
        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-accent" aria-hidden />
              Project Brief
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="display-xl mt-6 text-[clamp(2.5rem,9vw,7rem)]">
              Let's build
              <br />
              <span className="text-muted-foreground">something.</span>
            </h1>
          </Reveal>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-16">
            <Reveal delay={180}>
              <ProjectBriefForm />
            </Reveal>

            <Reveal delay={260}>
              <div className="space-y-px border border-border bg-border">
                {facts.map((fact) => (
                  <div key={fact.k} className="bg-background p-6">
                    <p className="eyebrow">{fact.k}</p>
                    <p className="mt-2 font-display text-base tracking-tight text-foreground">
                      {fact.v}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                Not sure what you need yet? Send whatever you have — a sketch, a
                spreadsheet, a paragraph. We'll help you shape the scope before anyone
                writes a line of code.
              </p>
            </Reveal>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
