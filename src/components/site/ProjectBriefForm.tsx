import { useState, type FormEvent, type ChangeEvent } from "react";
import { ArrowRight, Check, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { MagneticButton } from "./MagneticButton";

// ─── Change this to your real WhatsApp number (country code, no +, no spaces) ───
const WHATSAPP_NUMBER = "918867374425";

const projectTypes = [
  "Website / Landing Page",
  "Web Application",
  "SaaS Product",
  "E-commerce",
  "API / Backend",
  "Other",
];

const engagementTypes = [
  "Starter — Landing Pages & Websites",
  "Business — Custom Web Applications",
  "Custom — SaaS & Complex Platforms",
  "Not sure yet — help me figure it out",
];

const fieldClass =
  "w-full border border-border bg-surface/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:outline-none";

const labelClass =
  "mb-2.5 block font-display text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground";

const selectClass =
  "w-full appearance-none border border-border bg-surface/60 px-4 py-3.5 pr-10 text-sm text-foreground transition-colors focus:border-accent focus:outline-none";

interface FormState {
  name: string;
  email: string;
  company: string;
  goal: string;
  type: string;
  engagement: string;
  timeline: string;
  idea: string;
}

const empty: FormState = {
  name: "",
  email: "",
  company: "",
  goal: "",
  type: "",
  engagement: "",
  timeline: "",
  idea: "",
};

function buildWhatsAppMessage(f: FormState): string {
  const lines = [
    `👋 *New Project Enquiry — Will & Way*`,
    ``,
    `*Name:* ${f.name}`,
    `*Email:* ${f.email}`,
    f.company ? `*Company:* ${f.company}` : null,
    ``,
    `*What to build:* ${f.goal}`,
    `*Project type:* ${f.type}`,
    `*Engagement:* ${f.engagement}`,
    f.timeline ? `*Timeline:* ${f.timeline}` : null,
    ``,
    `*Details:*`,
    f.idea,
  ]
    .filter((l) => l !== null)
    .join("\n");

  return encodeURIComponent(lines);
}

export function ProjectBriefForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = buildWhatsAppMessage(form);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    // Open WhatsApp in new tab
    window.open(url, "_blank", "noopener,noreferrer");

    setSent(true);
    toast.success("Opening WhatsApp…", {
      description: "Your message is pre-filled and ready to send.",
    });
  };

  if (sent) {
    return (
      <div className="border border-border bg-surface p-10 text-center sm:p-14">
        <span className="mx-auto inline-flex size-12 items-center justify-center border border-accent text-accent">
          <Check className="size-5" />
        </span>
        <h3 className="mt-7 font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
          WhatsApp opened
        </h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Your message is pre-filled in WhatsApp. Just hit send — we'll get
          back to you within 48 hours.
        </p>
        <button
          type="button"
          onClick={() => { setSent(false); setForm(empty); }}
          className="mt-8 font-display text-xs uppercase tracking-[0.18em] text-accent underline underline-offset-4"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-border bg-background p-6 sm:p-10"
    >
      <div className="grid gap-6 sm:grid-cols-2">

        {/* Name */}
        <div>
          <label className={labelClass} htmlFor="name">Name</label>
          <input
            id="name" name="name" required
            value={form.name} onChange={handleChange}
            className={fieldClass} placeholder="Your name"
          />
        </div>

        {/* Email */}
        <div>
          <label className={labelClass} htmlFor="email">Email</label>
          <input
            id="email" name="email" type="email" required
            value={form.email} onChange={handleChange}
            className={fieldClass} placeholder="you@company.com"
          />
        </div>

        {/* Company */}
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="company">Company / Business</label>
          <input
            id="company" name="company"
            value={form.company} onChange={handleChange}
            className={fieldClass} placeholder="Optional"
          />
        </div>

        {/* Goal */}
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="goal">What do you want to build?</label>
          <input
            id="goal" name="goal" required
            value={form.goal} onChange={handleChange}
            className={fieldClass} placeholder="e.g. A booking platform for my clinic"
          />
        </div>

        {/* Project Type */}
        <div>
          <label className={labelClass} htmlFor="type">Project type</label>
          <div className="relative">
            <select
              id="type" name="type" required
              value={form.type} onChange={handleChange}
              className={selectClass}
            >
              <option value="" disabled>Select a type</option>
              {projectTypes.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
          </div>
        </div>

        {/* Engagement Type */}
        <div>
          <label className={labelClass} htmlFor="engagement">Engagement type</label>
          <div className="relative">
            <select
              id="engagement" name="engagement" required
              value={form.engagement} onChange={handleChange}
              className={selectClass}
            >
              <option value="" disabled>How can we help?</option>
              {engagementTypes.map((e) => (
                <option key={e} value={e}>{e}</option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="timeline">Ideal timeline</label>
          <input
            id="timeline" name="timeline"
            value={form.timeline} onChange={handleChange}
            className={fieldClass} placeholder="e.g. Ready to launch in 6 weeks"
          />
        </div>

        {/* Details */}
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="idea">Tell us more about your idea</label>
          <textarea
            id="idea" name="idea" rows={5} required
            value={form.idea} onChange={handleChange}
            className={`${fieldClass} resize-none`}
            placeholder="The problem you're solving, who it's for, anything you already have..."
          />
        </div>
      </div>

      <MagneticButton className="mt-9 w-full sm:w-auto">
        Send via WhatsApp <ArrowRight className="size-4" />
      </MagneticButton>
    </form>
  );
}
