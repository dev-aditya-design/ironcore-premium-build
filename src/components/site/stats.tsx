import { Reveal, Section } from "./primitives";

const stats = [
  { value: "2,400+", label: "Members coached since 2013" },
  { value: "38,000", label: "Pounds lost by our community" },
  { value: "92%", label: "Members still training after 12 months" },
  { value: "4.9/5", label: "Average member rating" },
];

export function Stats() {
  return (
    <Section id="results" className="border-y border-border">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-center">
        <Reveal>
          <p className="eyebrow">Member Results</p>
          <h2 className="mt-4 text-4xl font-bold leading-[0.95] sm:text-5xl">
            Real numbers from <span className="text-gradient-ember">real members</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            We track outcomes the same way we track lifts. These are the aggregate results of the
            IronCore community over the last twelve months.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {stats.map((s) => (
              <div key={s.label} className="bg-surface px-7 py-8 transition-colors hover:bg-surface-2">
                <dt className="font-display text-4xl font-bold text-gradient-ember sm:text-5xl">
                  {s.value}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </Section>
  );
}
