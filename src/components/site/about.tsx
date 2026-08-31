import { Activity, HeartPulse, ShieldCheck, Users } from "lucide-react";
import aboutImage from "@/assets/about.jpg";
import { Reveal, Section, SectionHeading } from "./primitives";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Coach-led, always",
    text: "Every member gets a movement screen and a written plan — no guesswork on the floor.",
  },
  {
    icon: Activity,
    title: "Progress you can measure",
    text: "Quarterly InBody scans, strength benchmarks and a member app that tracks every session.",
  },
  {
    icon: Users,
    title: "Capped class sizes",
    text: "Maximum eight athletes per coach so technique and intensity never get compromised.",
  },
  {
    icon: HeartPulse,
    title: "Recovery included",
    text: "Sauna, contrast plunge and mobility studio access on every membership tier.",
  },
];

export function About() {
  return (
    <Section id="about">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <img
              src={aboutImage}
              alt="The IronCore Fitness training floor with dumbbell racks under moody lighting"
              width={1280}
              height={960}
              loading="lazy"
              className="w-full rounded-sm object-cover shadow-panel"
            />
            <div className="absolute -bottom-8 -right-2 hidden rounded-sm border border-border bg-surface px-7 py-6 shadow-panel sm:block lg:-right-8">
              <p className="font-display text-4xl font-bold text-primary">14,000</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                sq ft of training floor
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            eyebrow="About IronCore"
            title={
              <>
                A gym built for people who are <span className="text-gradient-ember">serious</span>{" "}
                about results
              </>
            }
            description="Founded in 2013 by two former collegiate strength coaches, IronCore Fitness was built around one idea: real coaching beats fancy machines. We combine a premium facility with structured programming and accountability that keeps members showing up long after motivation fades."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {pillars.map((p) => (
              <div key={p.title} className="group">
                <span className="grid h-11 w-11 place-items-center rounded-sm border border-border bg-surface text-primary transition-colors duration-300 group-hover:border-primary">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
