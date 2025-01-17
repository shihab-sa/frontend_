import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import AgroforestrySection from "./components/AgroforestrySection";
import NurserySection from "./components/NurserySection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <AgroforestrySection />
      <NurserySection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
