import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import logoMark from "@/assets/logo-lockup.jpg";

const links = [
  { label: "Work", hash: "work" },
  { label: "Services", hash: "services" },
  { label: "Process", hash: "process" },
  { label: "About", hash: "about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-white/5 bg-background/40 backdrop-blur-2xl"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-18 max-w-[1400px] items-center justify-between px-5 sm:px-8"
      >
        <Link
          to="/"
          aria-label="Will & Way — home"
          className="flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <img
            src={logoMark}
            alt="Will & Way monogram"
            className="h-10 w-auto"
          />
          <span className="hidden font-display text-sm font-bold uppercase tracking-[0.22em] text-foreground sm:inline">
            Will <span className="text-accent">&amp;</span> Way
          </span>
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to="/"
                hash={link.hash}
                className="group relative font-display text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="group relative font-display text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden items-center gap-2 border border-accent px-5 py-2.5 font-display text-xs uppercase tracking-[0.16em] text-accent transition-colors duration-300 hover:bg-accent hover:text-accent-foreground sm:inline-flex"
          >
            Start a Project
            <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-11 items-center justify-center border border-border text-foreground transition-colors hover:border-accent hover:text-accent md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 md:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <ul className="flex flex-col px-5 py-4">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                to="/"
                hash={link.hash}
                onClick={() => setOpen(false)}
                className="block border-b border-border py-4 font-display text-2xl uppercase tracking-tight text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="block border-b border-border py-4 font-display text-2xl uppercase tracking-tight text-foreground"
            >
              Contact
            </Link>
          </li>
          <li className="pt-5">
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 bg-accent px-6 py-4 font-display text-sm uppercase tracking-[0.16em] text-accent-foreground"
            >
              Start a Project <ArrowRight className="size-4" />
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
