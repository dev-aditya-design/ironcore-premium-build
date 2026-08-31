import { Quote, Star } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./primitives";

const reviews = [
  {
    quote:
      "I'd been going to gyms for eight years without a plan. Six months at IronCore and I've added 90 lbs to my deadlift and I actually understand why. Marcus writes every block around what my body can handle that week.",
    name: "Jordan Whitfield",
    detail: "Member since 2023 · Strength Training",
  },
  {
    quote:
      "The transformation program changed how I eat, not just how I train. Priya never once made it feel like a diet. Down 34 lbs and I've kept it off for over a year now.",
    name: "Amara Osei",
    detail: "Member since 2022 · Transformation",
  },
  {
    quote:
      "I came back from a knee reconstruction terrified of squatting again. Elena rebuilt my confidence rep by rep. Best money I spend every month, no contest.",
    name: "Tom Delacroix",
    detail: "Member since 2024 · Personal Training",
  },
];

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-surface/40">
      <SectionHeading
        eyebrow="Testimonials"
        title={
          <>
            What our <span className="text-gradient-ember">members say</span>
          </>
        }
        align="center"
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 100}>
            <figure className="hover-lift flex h-full flex-col rounded-sm border border-border bg-surface p-8 transition-colors duration-300 hover:border-primary/60">
              <Quote className="h-8 w-8 text-primary" />
              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-foreground/85">
                "{r.quote}"
              </blockquote>
              <div className="mt-6 flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <figcaption className="mt-4 border-t border-border pt-4">
                <p className="font-display text-lg">{r.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted-foreground">
                  {r.detail}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
