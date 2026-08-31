import { Instagram, Linkedin } from "lucide-react";
import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/trainer-3.jpg";
import t4 from "@/assets/trainer-4.jpg";
import { Reveal, Section, SectionHeading } from "./primitives";

const trainers = [
  {
    name: "Marcus Hale",
    role: "Head Strength Coach",
    image: t1,
    creds: "CSCS · 12 yrs experience",
    bio: "Former collegiate strength coach specialising in powerlifting technique and return-to-lifting work.",
  },
  {
    name: "Elena Ruiz",
    role: "Personal Training Lead",
    image: t2,
    creds: "NASM-CPT · Pre/Postnatal",
    bio: "Builds sustainable 1-on-1 plans for busy professionals, with a focus on habit design and longevity.",
  },
  {
    name: "Dylan Brooks",
    role: "Conditioning Coach",
    image: t3,
    creds: "ACSM · Endurance Specialist",
    bio: "Ex-rugby S&C coach running our zone-based conditioning blocks and hybrid athlete programming.",
  },
  {
    name: "Priya Nair",
    role: "Transformation Coach",
    image: t4,
    creds: "Precision Nutrition L2",
    bio: "Leads the 12-week transformation track, pairing macro coaching with progressive resistance training.",
  },
];

export function Trainers() {
  return (
    <Section id="trainers">
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <SectionHeading
          eyebrow="Our Team"
          title={
            <>
              Coaches who <span className="text-gradient-ember">know your name</span>
            </>
          }
          description="Certified, experienced and genuinely invested. Every IronCore coach holds a nationally recognised certification and completes 40+ hours of continuing education each year."
        />
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {trainers.map((t, i) => (
          <Reveal key={t.name} delay={i * 90}>
            <article className="group relative h-full overflow-hidden rounded-sm border border-border bg-surface">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={t.image}
                  alt={`${t.name}, ${t.role} at IronCore Fitness`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="grid h-9 w-9 place-items-center rounded-sm bg-ember text-primary-foreground">
                    <Instagram className="h-4 w-4" />
                  </span>
                  <span className="grid h-9 w-9 place-items-center rounded-sm border border-border bg-background/70 text-foreground">
                    <Linkedin className="h-4 w-4" />
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{t.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.18em] text-primary">{t.role}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  {t.creds}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.bio}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
