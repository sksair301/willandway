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
    a: "Websites, web applications, SaaS products, internal tools, and backend/API work. If it runs in a browser and solves a business problem, it's in scope.",
  },
  {
    q: "How much does a project cost?",
    a: "Simple websites start around ₹15K, custom business applications around ₹40K, and product work is quoted after scoping. We give a fixed range before we start.",
  },
  {
    q: "How long does a project take?",
    a: "A landing page takes 1–2 weeks. A business website 2–4 weeks. Applications and MVPs typically run 4–10 weeks depending on scope.",
  },
  {
    q: "Can you work with an existing website or application?",
    a: "Yes. We take over existing codebases, fix and refactor what's slowing you down, and add new features without rewriting everything.",
  },
  {
    q: "Do you provide maintenance after launch?",
    a: "Yes. We offer ongoing support, updates and improvements — monthly or on demand, whichever fits your product.",
  },
  {
    q: "How do we start a project?",
    a: "Send us a project brief through the contact form. We'll reply within 48 hours with questions, a suggested approach and an estimate.",
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
