import { ArrowRight } from "lucide-react";
import { CtaLink, Reveal } from "./primitives";

export function CtaBand() {
  return (
    <section className="border-y border-border bg-surface/60 py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="eyebrow">Your first session is on us</p>
          <h2 className="mt-4 text-4xl font-bold leading-[0.95] sm:text-6xl">
            Stop planning. <span className="text-gradient-ember">Start lifting.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Book a free trial this week and get a movement screen, a coached session and a starter
            program written for you — no card, no contract.
          </p>
          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <CtaLink href="#contact">
              Start Your Free Trial <ArrowRight className="h-4 w-4" />
            </CtaLink>
            <CtaLink href="#membership" variant="outline">
              View Membership Plans
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
