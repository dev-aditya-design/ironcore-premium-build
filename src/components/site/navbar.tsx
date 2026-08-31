import { useEffect, useState } from "react";
import { Dumbbell, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Membership", href: "#membership" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
        <a href="#home" className="flex min-w-0 items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-sm bg-ember text-primary-foreground">
            <Dumbbell className="h-5 w-5" />
          </span>
          <span className="truncate font-display text-xl font-bold tracking-wide">
            Iron<span className="text-primary">Core</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 xl:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative font-display text-[0.8rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-foreground hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-sm bg-ember px-5 py-2.5 font-display text-[0.75rem] uppercase tracking-[0.16em] text-primary-foreground transition-all duration-300 hover:brightness-110"
          >
            Free Trial
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-border text-foreground xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl transition-[max-height] duration-500 xl:hidden",
          open ? "max-h-[32rem]" : "max-h-0 border-t-0",
        )}
      >
        <div className="flex flex-col px-5 py-4 sm:px-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-border/60 py-3.5 font-display text-sm uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-5 rounded-sm bg-ember py-3.5 text-center font-display text-sm uppercase tracking-[0.16em] text-primary-foreground"
          >
            Start Your Free Trial
          </a>
        </div>
      </div>
    </header>
  );
}
