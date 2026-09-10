import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { MagneticLink } from "@/components/site/MagneticButton";
import { projects } from "@/components/site/Work";

const title = "Selected Work — Will & Way";
const description =
  "Projects built by Will & Way: AliStyle e-commerce, Travelo travel planning and Hajj & Umrah pilgrimage platform.";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-accent" aria-hidden />
              Projects
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="display-xl mt-6 text-[clamp(2.5rem,9vw,7rem)]">
              All work
            </h1>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Products, platforms and experiments we've designed and built end to end.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px border border-border bg-border lg:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.name} delay={i * 100}>
                <Link to="/work/$projectId" params={{ projectId: project.id }} className="block h-full group">
                  <article className="h-full bg-background p-6 transition-colors duration-500 hover:bg-surface sm:p-8">
                    <div className="overflow-hidden border border-border">
                      <img
                        src={project.image}
                        alt={project.alt}
                        width={1600}
                        height={1008}
                        loading="lazy"
                        className="w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="mt-7 flex items-baseline justify-between gap-4">
                      <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                        {project.name}
                      </h2>
                      <span className="eyebrow text-right">{project.category}</span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="border border-border px-3 py-1.5 font-display text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 border-t border-border pt-10">
            <MagneticLink to="/contact" variant="accent">
              Start a Project <ArrowRight className="size-4" />
            </MagneticLink>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
