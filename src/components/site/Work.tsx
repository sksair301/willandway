import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { MagneticLink } from "./MagneticButton";
import alistyle from "@/assets/alistyle.png";
import travelo from "@/assets/travelo.png";
import hajjAndUmrah from "@/assets/dostana-hajj-and-umrah.png";

const projects = [
  {
    id: "alistyle",
    no: "01",
    name: "AliStyle",
    category: "E-Commerce • Web App",
    description:
      "A modern e-commerce platform designed to provide a seamless shopping experience for clothing and lifestyle products.",
    tags: ["React", "Node.js", "Tailwind CSS"],
    cta: "View Case Study",
    image: alistyle,
    alt: "AliStyle e-commerce store with product listings and shopping cart",
  },
  {
    id: "travelo",
    no: "02",
    name: "Travelo",
    category: "Travel • Platform",
    description:
      "A comprehensive travel platform for discovering destinations, searching travelling plans, places, and booking hotels.",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    cta: "View Case Study",
    image: travelo,
    alt: "Travelo platform showing travel plans, places, and hotel bookings",
  },
  {
    id: "hajj-and-umrah",
    no: "03",
    name: "Hajj & Umrah",
    category: "Travel • Religious",
    description:
      "A specialized travel platform dedicated to facilitating smooth and spiritual journeys for Hajj and Umrah pilgrims.",
    tags: ["React", "Node.js", "PostgreSQL"],
    cta: "View Project",
    image: hajjAndUmrah,
    alt: "Hajj and Umrah travel website showcasing pilgrimage packages and guides",
  },
];

export function Work() {
  return (
    <section id="work" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected work"
          subtitle="A few things we've built, designed and experimented with."
        />

        <div className="mt-16 space-y-20 sm:space-y-28">
          {projects.map((project, i) => (
            <Reveal key={project.name}>
              <article
                className={cn(
                  "group grid items-center gap-8 lg:grid-cols-2 lg:gap-14",
                  i % 2 === 1 && "lg:[&>figure]:order-2",
                )}
              >
                <figure className="relative overflow-hidden border border-border bg-surface">
                  <span className="absolute inset-0 z-10 bg-accent/0 transition-colors duration-700 group-hover:bg-accent/5" />
                  <img
                    src={project.image}
                    alt={project.alt}
                    width={1600}
                    height={1008}
                    loading="lazy"
                    className="w-full transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />
                </figure>

                <div className="lg:px-2">
                  <div className="flex items-center gap-4">
                    <span className="font-display text-sm font-bold text-accent">
                      {project.no}
                    </span>
                    <span className="h-px flex-1 bg-border transition-colors duration-500 group-hover:bg-accent/50" />
                    <span className="eyebrow">{project.category}</span>
                  </div>

                  <h3 className="display-xl mt-6 text-[clamp(2rem,5vw,3.5rem)] transition-transform duration-500 group-hover:-translate-y-1">
                    {project.name}
                  </h3>
                  <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {project.description}
                  </p>

                  <ul className="mt-7 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="border border-border px-3 py-1.5 font-display text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <MagneticLink to={`/work/${project.id}`} variant="outline" className="mt-8">
                    {project.cta} <ArrowRight className="size-4" />
                  </MagneticLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 border-t border-border pt-10">
          <MagneticLink to="/work" variant="accent">
            View All Projects <ArrowRight className="size-4" />
          </MagneticLink>
        </Reveal>
      </div>
    </section>
  );
}

export { projects };
