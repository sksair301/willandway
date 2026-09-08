import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "What type of projects do you work on?",
    a: "Websites, web applications, SaaS products, internal tools, and backend/API work. If it runs in a browser and solves a real business problem, we're interested.",
  },
  {
    q: "How do you decide what to build first?",
    a: "We start with a discovery conversation to understand your goals, users and constraints. From there we map out priorities and agree on what delivers the most value earliest.",
  },
  {
    q: "How long does a project typically take?",
    a: "A landing page takes 1–2 weeks. A business website 2–4 weeks. Custom applications and MVPs typically run 4–10 weeks depending on scope — we'll give you a realistic timeline upfront.",
  },
  {
    q: "Can you take over an existing codebase?",
    a: "Absolutely. We review the existing code, understand what's working and what isn't, and continue building from there — without unnecessary rewrites.",
  },
  {
    q: "Do you offer support after the project is live?",
    a: "Yes. We provide ongoing maintenance, bug fixes and new features — either on a monthly retainer or on demand. You won't be left on your own after launch.",
  },
  {
    q: "How do we get started?",
    a: "Fill in the project brief form or just drop us a message. We'll get back to you within 48 hours with initial thoughts and next steps — no pressure, no sales pitch.",
  },
];

export function Faq() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <SectionHeading eyebrow="FAQ" title="Good questions." />

          <Reveal>
            <Accordion type="single" collapsible className="border-t border-border">
              {faqs.map((faq) => (
                <AccordionItem key={faq.q} value={faq.q} className="border-b border-border">
                  <AccordionTrigger className="py-6 text-left font-display text-base font-medium tracking-tight hover:text-accent hover:no-underline sm:text-lg">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-xl pb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
