import Scene from "@/components/Hero/Scene";
import HeroContent from "@/components/Hero/HeroContent";
import ProjectsSection from "@/components/Projects/ProjectsSection";

export default function Home() {
  return (
    <main>
      <section className="relative w-screen h-screen overflow-hidden">
        <Scene />
        <HeroContent />
      </section>

      <ProjectsSection />
    </main>
  );
}
