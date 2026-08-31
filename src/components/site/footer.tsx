import { Dumbbell, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

const nav = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Membership", href: "#membership" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const programs = [
  "Strength Training",
  "Personal Training",
  "Cardio & Conditioning",
  "Transformation Program",
];

const socials = [
  { icon: Instagram, label: "Instagram" },
  { icon: Facebook, label: "Facebook" },
  { icon: Youtube, label: "YouTube" },
  { icon: Linkedin, label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer className="bg-background pt-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 pb-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-sm bg-ember text-primary-foreground">
                <Dumbbell className="h-5 w-5" />
              </span>
              <span className="font-display text-xl font-bold tracking-wide">
                Iron<span className="text-primary">Core</span>
              </span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A premium strength and conditioning studio in downtown Chicago. Coaching first,
              always.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#home"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-sm border border-border text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm tracking-[0.18em]">Explore</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.label}>
                  <a
                    href={n.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm tracking-[0.18em]">Programs</h3>
            <ul className="mt-5 space-y-3">
              {programs.map((p) => (
                <li key={p}>
                  <a
                    href="#programs"
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm tracking-[0.18em]">Studio</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>418 W Adams Street</li>
              <li>Chicago, IL 60606</li>
              <li>(312) 555-0142</li>
              <li>hello@ironcorefitness.com</li>
              <li className="pt-2 text-foreground/80">Mon–Fri 5:00 AM – 10:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 border-t border-border py-7 text-xs text-muted-foreground sm:grid-cols-[minmax(0,1fr)_auto]">
          <p>© {new Date().getFullYear()} IronCore Fitness. All rights reserved.</p>
          <p className="sm:text-right">Privacy Policy · Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}
