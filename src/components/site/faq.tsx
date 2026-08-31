import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal, Section, SectionHeading } from "./primitives";

const faqs = [
  {
    q: "Do I need gym experience to join?",
    a: "Not at all. Around a third of our members start as complete beginners. Every membership begins with a movement screen and a coached onboarding session so you know exactly what to do on day one.",
  },
  {
    q: "What's included in the free trial?",
    a: "A 45-minute consultation, a full guided workout with a coach, and access to the facility for the rest of that day — including the recovery suite. There's no card required and no obligation to join.",
  },
  {
    q: "Are memberships contract-based?",
    a: "No. Every plan is month-to-month. You can pause, upgrade, downgrade or cancel with 14 days' notice through the member app.",
  },
  {
    q: "How busy does the gym get?",
    a: "We cap membership numbers by design and limit classes to eight athletes per coach. Peak hours are 6–8am and 5–7pm, and live floor capacity is visible in the app.",
  },
  {
    q: "Do you offer nutrition coaching?",
    a: "Yes. It's included in the Elite tier and the 12-week Transformation Program, and available as a standalone add-on for any member.",
  },
  {
    q: "Is there parking at the studio?",
    a: "Members get validated parking in the adjacent garage on West Adams, and we have secure indoor bike storage plus showers and towel service.",
  },
];

export function Faq() {
  return (
    <Section id="faq">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <Reveal>
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Questions, <span className="text-gradient-ember">answered</span>
              </>
            }
            description="Still unsure about something? Message us on WhatsApp and a coach will get back to you the same day."
          />
        </Reveal>

        <Reveal delay={120}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="py-5 text-left font-display text-base uppercase tracking-[0.06em] hover:text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </Section>
  );
}
