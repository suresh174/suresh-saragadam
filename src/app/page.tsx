import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Hero } from "@/components/Hero";
import { NotesTeaser } from "@/components/NotesTeaser";
import { SkillsSection } from "@/components/SkillsSection";
import { WorkSection } from "@/components/WorkSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WorkSection />
      <SkillsSection />
      <AboutSection />
      <NotesTeaser />
      <ContactSection />
    </>
  );
}
