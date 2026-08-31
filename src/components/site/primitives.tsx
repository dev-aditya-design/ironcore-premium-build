import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useReveal } from "@/hooks/use-reveal";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-20 md:py-28", className)}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-bold leading-[0.95] sm:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-sm font-display uppercase tracking-[0.16em] transition-all duration-300";

export function CtaLink({
  href,
  children,
  variant = "solid",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        base,
        variant === "solid"
          ? "bg-ember text-primary-foreground shadow-ember hover:-translate-y-0.5 hover:brightness-110"
          : "border border-border bg-transparent text-foreground hover:-translate-y-0.5 hover:border-primary hover:text-primary",
        className,
      )}
    >
      {children}
    </a>
  );
}
