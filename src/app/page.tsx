import { ContactSection } from "@/components/contact";
import { HeroSection } from "@/components/hero";
import { ProjectsSection } from "@/components/projects";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
