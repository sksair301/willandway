import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import { MagneticButton } from "./MagneticButton";

const projectTypes = [
  "Website",
  "Web Application",
  "SaaS",
  "E-commerce",
  "API / Backend",
  "Other",
];

const budgets = [
  "₹10K – ₹25K",
  "₹25K – ₹50K",
  "₹50K – ₹1L",
  "₹1L+",
  "Not sure yet",
];

const fieldClass =
  "w-full border border-border bg-surface/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground transition-colors focus:border-accent focus:outline-none";

const labelClass =
  "mb-2.5 block font-display text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground";

export function ProjectBriefForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    toast.success("Project brief received", {
      description: "We'll get back to you within 48 hours.",
    });
  };

  if (sent) {
    return (
      <div className="border border-border bg-surface p-10 text-center sm:p-14">
        <span className="mx-auto inline-flex size-12 items-center justify-center border border-accent text-accent">
          <Check className="size-5" />
        </span>
        <h3 className="mt-7 font-display text-2xl font-bold uppercase tracking-tight sm:text-3xl">
          Brief received
        </h3>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
          Thanks for reaching out. We read every brief ourselves and reply within 48
          hours — usually with a few sharp questions.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-8 font-display text-xs uppercase tracking-[0.18em] text-accent underline underline-offset-4"
        >
          Send another brief
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="border border-border bg-background p-6 sm:p-10"
      noValidate={false}
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="name">
            Name
          </label>
          <input id="name" name="name" required className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
            placeholder="you@company.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="company">
            Company / Business
          </label>
          <input
            id="company"
            name="company"
            className={fieldClass}
            placeholder="Optional"
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="goal">
            What do you want to build?
          </label>
          <input
            id="goal"
            name="goal"
            required
            className={fieldClass}
            placeholder="e.g. A booking platform for my clinic"
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="type">
            Project type
          </label>
          <select id="type" name="type" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="budget">
            Approximate budget
          </label>
          <select id="budget" name="budget" required defaultValue="" className={fieldClass}>
            <option value="" disabled>
              Select a range
            </option>
            {budgets.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="timeline">
            Timeline
          </label>
          <input
            id="timeline"
            name="timeline"
            className={fieldClass}
            placeholder="e.g. Launch in 6 weeks"
          />
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="idea">
            Tell us about your idea
          </label>
          <textarea
            id="idea"
            name="idea"
            rows={5}
            required
            className={`${fieldClass} resize-none`}
            placeholder="The problem, the users, anything you already have..."
          />
        </div>
      </div>

      <MagneticButton className="mt-9 w-full sm:w-auto">
        Send Project Brief <ArrowRight className="size-4" />
      </MagneticButton>
    </form>
  );
}
