import Scene from "@/components/Hero/Scene";
import HeroContent from "@/components/Hero/HeroContent";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import SkillsSection from "@/components/Skills/SkillsSection";
import AboutSection from "@/components/About/AboutSection";
import ContactSection from "@/components/Contact/ContactSection";

export default function Home() {
  return (
    <main>
      <section className="relative w-screen h-screen overflow-hidden">
        <Scene />
        <HeroContent />
      </section>

      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <ContactSection />
    </main>
  );
}
