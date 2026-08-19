import React from "react";
import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { ProjectShowcase } from "@/components/project-showcase";
import { ArchitecturePhilosophy } from "@/components/architecture-philosophy";
import { SkillsMatrix } from "@/components/skills-matrix";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main id="main-content" className="flex-1">
        <Hero />
        <ProjectShowcase />
        <ArchitecturePhilosophy />
        <SkillsMatrix />
        <ExperienceTimeline />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
