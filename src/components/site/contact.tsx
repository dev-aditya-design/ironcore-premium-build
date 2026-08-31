import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal, Section, SectionHeading } from "./primitives";

const hours = [
  { day: "Monday – Friday", time: "5:00 AM – 10:00 PM" },
  { day: "Saturday", time: "7:00 AM – 8:00 PM" },
  { day: "Sunday", time: "8:00 AM – 6:00 PM" },
  { day: "Public holidays", time: "9:00 AM – 2:00 PM" },
];

const details = [
  { icon: MapPin, label: "Studio", value: "418 W Adams Street, Chicago, IL 60606" },
  { icon: Phone, label: "Phone", value: "(312) 555-0142" },
  { icon: Mail, label: "Email", value: "hello@ironcorefitness.com" },
];

const inputClass =
  "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted-foreground/70 focus:border-primary";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Thanks — we'll be in touch within one business day.");
    }, 700);
  };

  return (
    <Section id="contact">
      <SectionHeading
        eyebrow="Contact"
        title={
          <>
            Book your <span className="text-gradient-ember">free trial</span>
          </>
        }
        description="Tell us a little about your goals and we'll match you with the right coach and program. No pressure, no sales pitch."
        align="center"
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <Reveal>
          <form
            onSubmit={onSubmit}
            className="rounded-sm border border-border bg-surface p-7 sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Full name
                </label>
                <input id="name" name="name" required placeholder="Alex Morgan" className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Email
                </label>
                <input id="email" name="email" type="email" required placeholder="alex@email.com" className={inputClass} />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Phone
                </label>
                <input id="phone" name="phone" placeholder="(312) 555-0199" className={inputClass} />
              </div>
              <div>
                <label htmlFor="goal" className="mb-2 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Primary goal
                </label>
                <select id="goal" name="goal" defaultValue="strength" className={inputClass}>
                  <option value="strength">Build strength</option>
                  <option value="fatloss">Fat loss / transformation</option>
                  <option value="conditioning">Cardio & conditioning</option>
                  <option value="rehab">Return from injury</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your training history and what you'd like to achieve."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-ember px-8 py-4 font-display text-sm uppercase tracking-[0.18em] text-primary-foreground shadow-ember transition-all duration-300 hover:brightness-110 disabled:opacity-70 sm:w-auto"
            >
              {submitting ? "Sending…" : "Book Free Trial"}
              <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex h-full flex-col gap-6">
            <div className="rounded-sm border border-border bg-surface p-7">
              <h3 className="text-xl font-bold">Visit the studio</h3>
              <ul className="mt-6 space-y-5">
                {details.map((d) => (
                  <li key={d.label} className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-border text-primary">
                      <d.icon className="h-4 w-4" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        {d.label}
                      </p>
                      <p className="mt-1 text-sm text-foreground/90">{d.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-sm border border-border bg-surface p-7">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">Opening hours</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {hours.map((h) => (
                  <li
                    key={h.day}
                    className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 border-b border-border/60 pb-3 text-sm last:border-0 last:pb-0"
                  >
                    <span className="min-w-0 truncate text-muted-foreground">{h.day}</span>
                    <span className="text-foreground/90">{h.time}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-sm border border-border">
              <iframe
                title="IronCore Fitness location map"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-87.6423%2C41.8760%2C-87.6280%2C41.8830&layer=mapnik"
                loading="lazy"
                className="h-56 w-full grayscale-[35%]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
