import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Reveal, Section, SectionHeading } from "./primitives";
import { DEMO_PHONE_DISPLAY } from "@/lib/contact-details";

const hours = [
  { day: "Monday – Friday", time: "5:00 AM – 10:00 PM" },
  { day: "Saturday", time: "7:00 AM – 8:00 PM" },
  { day: "Sunday", time: "8:00 AM – 6:00 PM" },
  { day: "Public holidays", time: "9:00 AM – 2:00 PM" },
];

const details = [
  { icon: MapPin, label: "Studio", value: "418 W Adams Street, Chicago, IL 60606" },
  { icon: Phone, label: "Phone", value: `${DEMO_PHONE_DISPLAY} (demo number)` },
  { icon: Mail, label: "Email", value: "hello@ironcorefitness.example" },
];

const inputClass =
  "w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted-foreground focus:border-primary focus-visible:border-primary";

const labelClass = "mb-2 block text-xs uppercase tracking-[0.16em] text-muted-foreground";

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: {
  name: string;
  email: string;
  phone: string;
  message: string;
}): Errors {
  const errors: Errors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const phone = values.phone.trim();
  const message = values.message.trim();

  if (name.length < 2) errors.name = "Please enter your full name.";
  else if (name.length > 80) errors.name = "Name must be under 80 characters.";

  if (!email) errors.email = "Please enter your email address.";
  else if (!emailPattern.test(email) || email.length > 160)
    errors.email = "Please enter a valid email address.";

  if (phone && (phone.length < 7 || phone.length > 25))
    errors.phone = "Please enter a valid phone number, or leave it blank.";

  if (message && message.length > 1000) errors.message = "Message must be under 1000 characters.";

  return errors;
}

export function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const values = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
    };

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      toast.error("Please fix the highlighted fields and try again.");
      const firstField = Object.keys(nextErrors)[0];
      form.querySelector<HTMLElement>(`[name="${firstField}"]`)?.focus();
      return;
    }

    setSubmitting(true);
    // Demo-only submission: no backend is connected for this portfolio project.
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
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
            noValidate
            aria-describedby="contact-form-note"
            className="rounded-sm border border-border bg-surface p-6 sm:p-9"
          >
            {submitted ? (
              <div
                role="status"
                className="mb-7 flex items-start gap-3 rounded-sm border border-primary/50 bg-primary/10 p-4"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-foreground">
                  Request received. A coach will confirm your free trial slot within one business
                  day. (Demo form — nothing is actually sent.)
                </p>
              </div>
            ) : null}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Full name <span className="text-primary">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  maxLength={80}
                  autoComplete="name"
                  placeholder="Alex Morgan"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={inputClass}
                />
                {errors.name ? (
                  <p id="name-error" className="mt-2 text-xs text-destructive">
                    {errors.name}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={160}
                  autoComplete="email"
                  placeholder="alex@email.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={inputClass}
                />
                {errors.email ? (
                  <p id="email-error" className="mt-2 text-xs text-destructive">
                    {errors.email}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone <span className="text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  maxLength={25}
                  autoComplete="tel"
                  placeholder="(312) 555-0199"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className={inputClass}
                />
                {errors.phone ? (
                  <p id="phone-error" className="mt-2 text-xs text-destructive">
                    {errors.phone}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="goal" className={labelClass}>
                  Primary goal
                </label>
                <select id="goal" name="goal" defaultValue="strength" className={inputClass}>
                  <option value="strength">Build strength</option>
                  <option value="fatloss">Fat loss / transformation</option>
                  <option value="conditioning">Cardio &amp; conditioning</option>
                  <option value="rehab">Return from injury</option>
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="message" className={labelClass}>
                Message <span className="text-muted-foreground">(optional)</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                maxLength={1000}
                placeholder="Tell us about your training history and what you'd like to achieve."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`${inputClass} resize-none`}
              />
              {errors.message ? (
                <p id="message-error" className="mt-2 text-xs text-destructive">
                  {errors.message}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-ember px-8 py-4 font-display text-sm uppercase tracking-[0.18em] text-primary-foreground shadow-ember transition-all duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {submitting ? "Sending…" : "Book Free Trial"}
              <Send className="h-4 w-4" aria-hidden="true" />
            </button>

            <p id="contact-form-note" className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Demo form for a fictional business — submissions are simulated and no data leaves your
              browser.
            </p>
          </form>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex h-full flex-col gap-6">
            <div className="rounded-sm border border-border bg-surface p-6 sm:p-7">
              <h3 className="text-xl font-bold">Visit the studio</h3>
              <ul className="mt-6 space-y-5">
                {details.map((d) => (
                  <li key={d.label} className="flex gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-border text-primary">
                      <d.icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        {d.label}
                      </p>
                      <p className="mt-1 break-words text-sm text-foreground/90">{d.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-sm border border-border bg-surface p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
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
                title="Map showing the IronCore Fitness demo studio location in downtown Chicago"
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
