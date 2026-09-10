import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import sabir from "@/assets/team-sabir.png";
import partner from "@/assets/team-partner.jpg";

const people = [
  {
    name: "Sabir Shaikh",
    role: "Full Stack Developer",
    body: "I build reliable web applications, APIs and backend systems with a focus on clean architecture, performance and practical solutions.",
    skills: ["Laravel", "PHP", "MySQL", "JavaScript", "REST APIs"],
    image: sabir,
    alt: "Portrait of Sabir, full stack developer at Will & Way",
  },
  {
    name: "Iqra Koradia",
    role: "Full Stack / Frontend Developer",
    body: "Focused on creating clean interfaces and building digital experiences that are intuitive, responsive and easy to use.",
    skills: ["JavaScript", "React", "UI/UX", "Frontend"],
    image: partner,
    alt: "Portrait of Iqra, frontend developer at Will & Way",
  },
];

export function Team() {
  return (
    <section id="about" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <SectionHeading eyebrow="The Studio" title="The people behind the work" />

        <div className="mt-14 grid gap-px border border-border bg-border md:grid-cols-2">
          {people.map((person, i) => (
            <Reveal key={person.name} delay={i * 120}>
              <article className="group h-full bg-background p-7 transition-colors duration-500 hover:bg-surface sm:p-9">
                <div className="overflow-hidden border border-border">
                  <img
                    src={person.image}
                    alt={person.alt}
                    width={912}
                    height={1104}
                    loading="lazy"
                    className="aspect-4/5 w-full object-cover grayscale transition-all duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-7 flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-3xl font-bold tracking-tight">
                    {person.name}
                  </h3>
                  <p className="eyebrow text-right">{person.role}</p>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {person.body}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {person.skills.map((skill) => (
                    <li
                      key={skill}
                      className="border border-border px-3 py-1.5 font-display text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors duration-500 group-hover:text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <p className="display-xl text-[clamp(1.35rem,3.4vw,2.5rem)]">
            Different strengths.
            <br />
            <span className="text-muted-foreground">
              One goal — <span className="text-accent">building something great.</span>
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
