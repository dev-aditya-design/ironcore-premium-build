import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { CtaLink, Reveal } from "./primitives";

const marks = [
  { value: "12+", label: "Years coaching" },
  { value: "2,400+", label: "Members trained" },
  { value: "18", label: "Certified coaches" },
];

export function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Athlete performing a heavy barbell deadlift in the IronCore Fitness strength hall"
        width={1920}
        height={1280}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[60%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/30" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 md:pt-40">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="flex gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Rated 4.9 by 600+ members
            </span>
          </div>

          <h1 className="mt-6 text-5xl font-bold leading-[0.92] sm:text-7xl lg:text-8xl">
            Build Strength.
            <br />
            <span className="text-gradient-ember">Build Confidence.</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            IronCore Fitness is a premium coaching studio in downtown Chicago. Data-driven
            programming, world-class equipment and coaches who stay in your corner — from your
            first rep to your strongest year yet.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <CtaLink href="#contact">
              Start Your Free Trial <ArrowRight className="h-4 w-4" />
            </CtaLink>
            <CtaLink href="#programs" variant="outline">
              Explore Programs
            </CtaLink>
          </div>
        </Reveal>

        <Reveal delay={200} className="mt-16">
          <dl className="grid max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
            {marks.map((m) => (
              <div key={m.label} className="bg-background/70 px-6 py-5 backdrop-blur">
                <dt className="font-display text-3xl font-bold text-primary">{m.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
