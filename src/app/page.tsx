import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Stats from "@/components/Stats/Stats";
import Projects from "@/components/Projects/Projects";
import AIExperiments from "@/components/AIExperiments/AIExperiments";
import TechStack from "@/components/TechStack/TechStack";
import Journey from "@/components/Journey/Journey";
import Testimonials from "@/components/Testimonials/Testimonials";
import Contact from "@/components/Contact/Contact";
import SectionDivider from "@/components/SectionDivider/SectionDivider";

export default function Home() {
  return (
    <main className="bg-[var(--cream)]">
      <Hero />
      <SectionDivider variant="wave" topColor="var(--hero-bg)" bottomColor="var(--cream)" />

      <About />
      <Stats />

      <SectionDivider variant="organic" topColor="var(--cream)" bottomColor="var(--cream)" />

      <Projects />

      {/* <SectionDivider variant="curve" topColor="var(--cream)" bottomColor="var(--hero-bg)" />

      <AIExperiments /> */}
{/* 
      <SectionDivider variant="leaf-wave" topColor="var(--hero-bg)" bottomColor="var(--cream)" /> */}

      <TechStack />

      <SectionDivider variant="leaf-wave" topColor="var(--cream)" bottomColor="var(--hero-bg)" />

      <Journey />

      <SectionDivider variant="wave" topColor="var(--hero-bg)" bottomColor="var(--cream)" />

      <Testimonials />

      <SectionDivider variant="curve" topColor="var(--cream)" bottomColor="var(--cream)" />

      <Contact />
    </main>
  );
}
