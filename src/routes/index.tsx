import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Statement } from "@/components/site/Statement";
import { Services } from "@/components/site/Services";
import { Work } from "@/components/site/Work";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { Team } from "@/components/site/Team";
import { TechMarquee } from "@/components/site/TechMarquee";
import { Pricing } from "@/components/site/Pricing";
import { FirstStories } from "@/components/site/FirstStories";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";

const title = "Will & Way — Websites, Web Apps & SaaS Studio";
const description =
  "Will & Way is a two-person digital studio building modern websites, web applications and SaaS products. You have the idea. We know the way.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Statement />
        <Services />
        <Work />
        <Process />
        <WhyUs />
        <Team />
        <TechMarquee />
        <Pricing />
        <FirstStories />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
