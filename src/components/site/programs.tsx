import { ArrowUpRight, Dumbbell, Flame, Timer, UserRound } from "lucide-react";
import { Reveal, Section, SectionHeading } from "./primitives";

const programs = [
  {
    icon: Dumbbell,
    title: "Strength Training",
    duration: "60 min · 3–5x per week",
    text: "Periodised barbell programming built on squat, press, hinge and pull. Coached in small groups with weekly load targets.",
    points: ["Individual load prescriptions", "Technique video reviews", "12-week strength blocks"],
  },
  {
    icon: UserRound,
    title: "Personal Training",
    duration: "45–60 min · 1-on-1",
    text: "Fully bespoke sessions with a dedicated coach, ideal if you're returning from injury or chasing a specific goal.",
    points: ["Movement screen & baseline", "Custom weekly plan", "Nutrition check-ins"],
  },
  {
    icon: Timer,
    title: "Cardio & Conditioning",
    duration: "45 min · high intensity",
    text: "Assault bikes, sleds, rowers and intervals structured around heart-rate zones — conditioning that actually transfers.",
    points: ["Zone-based HR training", "Rower & sled circuits", "Engine-building blocks"],
  },
  {
    icon: Flame,
    title: "Transformation Program",
    duration: "12 weeks · hybrid",
    text: "Our flagship body-composition program: training, nutrition coaching and weekly accountability calls in one package.",
    points: ["Bi-weekly InBody scans", "Macro-based meal plan", "Private coach messaging"],
  },
];

export function Programs() {
  return (
    <Section id="programs" className="bg-surface/40">
      <SectionHeading
        eyebrow="Training Programs"
        title={
          <>
            Programs designed around <span className="text-gradient-ember">your goal</span>
          </>
        }
        description="Four coaching tracks, one standard of delivery. Not sure where to start? Your free trial includes a consultation to match you with the right program."
        align="center"
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {programs.map((p, i) => (
          <Reveal key={p.title} delay={i * 90}>
            <article className="hover-lift group relative h-full overflow-hidden rounded-sm border border-border bg-surface p-8 transition-colors duration-300 hover:border-primary/60">
              <div className="absolute inset-x-0 top-0 h-0.5 w-0 bg-ember transition-all duration-500 group-hover:w-full" />
              <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-sm bg-ember text-primary-foreground">
                  <p.icon className="h-6 w-6" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <h3 className="mt-6 text-2xl font-bold">{p.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary">{p.duration}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              <ul className="mt-6 space-y-2 border-t border-border pt-5">
                {p.points.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
