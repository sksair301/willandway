import { useRef, type MouseEvent, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

type Variant = "accent" | "outline";

const base =
  "group relative inline-flex items-center justify-center gap-2 font-display text-sm font-medium uppercase tracking-[0.12em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<Variant, string> = {
  accent:
    "bg-accent text-accent-foreground px-7 py-4 hover:bg-foreground hover:text-background",
  outline:
    "border border-border-strong text-foreground px-7 py-4 hover:border-accent hover:text-accent",
};

function useMagnet(disabled?: boolean) {
  const ref = useRef<HTMLElement | null>(null);

  const onMove = (event: MouseEvent) => {
    const el = ref.current;
    if (!el || disabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.16;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.24;
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "translate3d(0,0,0)";
  };

  return { ref, onMove, onLeave };
}

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function MagneticLink({
  to,
  hash,
  children,
  variant = "accent",
  className,
}: CommonProps & { to: string; hash?: string }) {
  const { ref, onMove, onLeave } = useMagnet();
  return (
    <Link
      to={to}
      {...(hash ? { hash } : {})}
      ref={ref as never}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(base, variants[variant], "will-change-transform", className)}
      style={{ transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), color .3s, background-color .3s, border-color .3s" }}
    >
      {children}
    </Link>
  );
}

export function MagneticAnchor({
  href,
  children,
  variant = "outline",
  className,
}: CommonProps & { href: string }) {
  const { ref, onMove, onLeave } = useMagnet();
  return (
    <a
      href={href}
      ref={ref as never}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(base, variants[variant], "will-change-transform", className)}
      style={{ transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), color .3s, background-color .3s, border-color .3s" }}
    >
      {children}
    </a>
  );
}

export function MagneticButton({
  children,
  variant = "accent",
  className,
  type = "submit",
}: CommonProps & { type?: "submit" | "button" }) {
  const { ref, onMove, onLeave } = useMagnet();
  return (
    <button
      type={type}
      ref={ref as never}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn(base, variants[variant], "will-change-transform", className)}
      style={{ transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), color .3s, background-color .3s, border-color .3s" }}
    >
      {children}
    </button>
  );
}
