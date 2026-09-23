import React from "react";
import { NavRail } from "@/components/nav-rail";
import { Hero } from "@/components/hero";
import { ProjectShowcase } from "@/components/project-showcase";
import { ArchitecturePhilosophy } from "@/components/architecture-philosophy";
import { SkillsMatrix } from "@/components/skills-matrix";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { TechnicalNotes } from "@/components/technical-notes";
import { Testimonials } from "@/components/testimonials";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A1118] text-[#E8F1F5]">
      <NavRail />
      <div className="flex flex-col min-h-screen pt-14 sm:pt-18">
        <main id="main-content" className="flex-1">
          <Hero />
          <ProjectShowcase />
          <ArchitecturePhilosophy />
          <SkillsMatrix />
          <ExperienceTimeline />
          <TechnicalNotes />
          <Testimonials />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
