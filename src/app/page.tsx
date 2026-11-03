import { Providers } from "@/components/ui/Providers";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Overview } from "@/components/sections/Overview";
import { WhyUs } from "@/components/sections/WhyUs";
import { Values } from "@/components/sections/Values";
import { Services } from "@/components/sections/Services";
import { Adlc } from "@/components/sections/Adlc";
import { Fde } from "@/components/sections/Fde";
import { Accelerators } from "@/components/sections/Accelerators";
import { Rescue } from "@/components/sections/Rescue";
import { Scenarios } from "@/components/sections/Scenarios";
import { Lifecycle } from "@/components/sections/Lifecycle";
import { Leadership } from "@/components/sections/Leadership";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <Providers>
      <ScrollProgress />
      <Header />
      <main id="main" className="flex-1">
        <Hero />
        <Overview />
        <WhyUs />
        <Values />
        <Services />
        <Adlc />
        <Fde />
        <Accelerators />
        <Rescue />
        <Scenarios />
        <Lifecycle />
        <Leadership />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </Providers>
  );
}
