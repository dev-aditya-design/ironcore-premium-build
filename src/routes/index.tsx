import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Programs } from "@/components/site/programs";
import { Trainers } from "@/components/site/trainers";
import { Membership } from "@/components/site/membership";
import { Stats } from "@/components/site/stats";
import { Testimonials } from "@/components/site/testimonials";
import { Faq } from "@/components/site/faq";
import { CtaBand } from "@/components/site/cta-band";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { WhatsAppButton } from "@/components/site/whatsapp-button";

const title = "IronCore Fitness | Premium Strength & Personal Training, Chicago";
const description =
  "IronCore Fitness is a premium Chicago gym offering strength training, personal training, conditioning and 12-week transformation coaching. Book your free trial.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Trainers />
        <Stats />
        <Membership />
        <Testimonials />
        <Faq />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
