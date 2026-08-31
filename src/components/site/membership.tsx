import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, Section, SectionHeading } from "./primitives";

const plans = [
  {
    name: "Essential",
    price: "$59",
    tag: "Best for self-starters",
    features: [
      { label: "Unlimited gym floor access", ok: true },
      { label: "Open-gym coaching support", ok: true },
      { label: "Member app & workout library", ok: true },
      { label: "2 group classes per week", ok: true },
      { label: "Personal training sessions", ok: false },
      { label: "Nutrition coaching", ok: false },
    ],
  },
  {
    name: "Performance",
    price: "$119",
    tag: "Most popular",
    featured: true,
    features: [
      { label: "Everything in Essential", ok: true },
      { label: "Unlimited group classes", ok: true },
      { label: "2 personal training sessions / mo", ok: true },
      { label: "Quarterly InBody scan & review", ok: true },
      { label: "Recovery suite access", ok: true },
      { label: "Nutrition coaching", ok: false },
    ],
  },
  {
    name: "Elite",
    price: "$199",
    tag: "Fastest results",
    features: [
      { label: "Everything in Performance", ok: true },
      { label: "8 personal training sessions / mo", ok: true },
      { label: "1:1 nutrition coaching", ok: true },
      { label: "Custom periodised program", ok: true },
      { label: "Priority class booking", ok: true },
      { label: "Guest passes (2 / month)", ok: true },
    ],
  },
];

export function Membership() {
  return (
    <Section id="membership" className="bg-surface/40">
      <SectionHeading
        eyebrow="Membership"
        title={
          <>
            Simple plans, <span className="text-gradient-ember">no lock-in</span>
          </>
        }
        description="All memberships are month-to-month and include your onboarding session, movement screen and starter program. Cancel or switch tiers any time."
        align="center"
      />

      <div className="mt-14 grid items-start gap-6 lg:grid-cols-3">
        {plans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 100}>
            <article
              className={cn(
                "hover-lift relative flex h-full flex-col rounded-sm border bg-surface p-8 transition-colors duration-300",
                plan.featured
                  ? "border-primary shadow-ember lg:-translate-y-4"
                  : "border-border hover:border-primary/60",
              )}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-8 rounded-sm bg-ember px-3 py-1 font-display text-[0.65rem] uppercase tracking-[0.2em] text-primary-foreground">
                  Most popular
                </span>
              ) : null}

              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {plan.tag}
              </p>

              <p className="mt-6 flex items-end gap-2">
                <span className="font-display text-5xl font-bold text-foreground">
                  {plan.price}
                </span>
                <span className="pb-2 text-sm text-muted-foreground">/ month</span>
              </p>

              <ul className="mt-8 flex-1 space-y-3 border-t border-border pt-6">
                {plan.features.map((f) => (
                  <li key={f.label} className="flex items-start gap-3 text-sm">
                    {f.ok ? (
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    ) : (
                      <Minus className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/60" />
                    )}
                    <span className={f.ok ? "text-foreground/90" : "text-muted-foreground/60"}>
                      {f.label}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={cn(
                  "mt-8 rounded-sm py-3.5 text-center font-display text-sm uppercase tracking-[0.16em] transition-all duration-300",
                  plan.featured
                    ? "bg-ember text-primary-foreground hover:brightness-110"
                    : "border border-border text-foreground hover:border-primary hover:text-primary",
                )}
              >
                Choose {plan.name}
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
