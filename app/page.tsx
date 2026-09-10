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
    <div className="min-h-screen bg-[#F3F4F1] text-[#14161A]">
      <NavRail />
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <main id="main-content" className="flex-1 pb-16 lg:pb-0">
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
