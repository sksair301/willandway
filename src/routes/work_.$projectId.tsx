import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import { MagneticLink } from "@/components/site/MagneticButton";
import { projects } from "@/components/site/Work";

export const Route = createFileRoute("/work_/$projectId")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.id === params.projectId);
    if (!project) {
      throw notFound();
    }
    return project;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.name} — Will & Way` },
      { name: "description", content: loaderData.description },
    ],
  }),
  component: ProjectDetail,
});

function ProjectDetail() {
  const project = Route.useLoaderData();

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          
          <Reveal>
            <div className="flex items-center gap-3">
              <Link to="/work" className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
                Back to projects
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <div className="flex items-center gap-4">
                  <span className="font-display text-sm font-bold text-accent">
                    {project.no}
                  </span>
                  <span className="h-px w-12 bg-border" />
                  <span className="eyebrow">{project.category}</span>
                </div>
              </Reveal>

              <Reveal delay={180}>
                <h1 className="display-xl mt-6 text-[clamp(2.5rem,7vw,5rem)]">
                  {project.name}
                </h1>
              </Reveal>

              <Reveal delay={260}>
                <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:text-xl">
                  {project.description}
                </p>
              </Reveal>
              
              <Reveal delay={340}>
                <ul className="mt-10 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-border px-4 py-2 font-display text-[0.75rem] uppercase tracking-[0.14em] text-foreground bg-surface/50"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>

          <Reveal delay={420} className="mt-20 sm:mt-28">
            <figure className="relative overflow-hidden border border-border bg-surface p-2 sm:p-4">
              <img
                src={project.image}
                alt={project.alt}
                width={1600}
                height={1008}
                loading="eager"
                className="w-full"
              />
            </figure>
          </Reveal>

          <Reveal className="mt-20 border-t border-border pt-16 flex flex-col items-center text-center">
            <h2 className="display-lg mb-8 text-[clamp(2rem,5vw,3rem)]">
              Ready to start your own project?
            </h2>
            <MagneticLink to="/contact" variant="accent">
              Let's Talk <ArrowRight className="size-4" />
            </MagneticLink>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
