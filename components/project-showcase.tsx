import React from "react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { Layers, Briefcase, Code } from "lucide-react";

interface ProjectShowcaseProps {
  showHeader?: boolean;
}

export function ProjectShowcase({ showHeader = true }: ProjectShowcaseProps = {}) {
  const employerProjects = projectsData.filter((p) => p.projectType === "employer");
  const personalProjects = projectsData.filter((p) => p.projectType === "personal");

  return (
    <section id="work" className="w-full py-16 sm:py-24 border-b border-[rgba(255,255,255,0.08)] bg-[#08090A] relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D97706]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-16 relative z-10">
        {/* Top Section Header */}
        {showHeader && (
          <div className="max-w-[760px] space-y-3">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D97706] tracking-wider uppercase bg-[#D97706]/10 px-3 py-1 rounded-full border border-[#D97706]/30">
              <Layers className="w-4 h-4" />
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F3F4F6]">
              Production Mobile Engineering & Open-Source Implementations
            </h2>
            <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
              A comprehensive look at applications shipped to the Apple App Store and Google Play Store, alongside open-source reference implementations showcasing hands-on React Native architecture.
            </p>
          </div>
        )}

        {/* Category 1: Production Applications & Scaled Deployments */}
        <div className="space-y-6 pt-4">
          <div className="border-b border-[rgba(255,255,255,0.08)] pb-4 space-y-1.5">
            <div className="flex items-center gap-2 font-mono text-xs text-[#D97706] font-semibold uppercase tracking-wider">
              <Briefcase className="w-4 h-4 text-[#D97706]" />
              <span>Production Systems</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F3F4F6] tracking-tight">
              Production Applications & Scaled Deployments
            </h3>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              Applications engineered and deployed to the Apple App Store and Google Play Store with active telemetry, CI/CD automation, and live user scale.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {employerProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Category 2: Open Source & Reference Architecture */}
        <div className="space-y-6 pt-8 border-t border-[rgba(255,255,255,0.08)]">
          <div className="border-b border-[rgba(255,255,255,0.08)] pb-4 space-y-1.5">
            <div className="flex items-center gap-2 font-mono text-xs text-[#10B981] font-semibold uppercase tracking-wider">
              <Code className="w-4 h-4 text-[#10B981]" />
              <span>Reference Architecture</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F3F4F6] tracking-tight">
              Open-Source Implementations & Engineering Prototypes
            </h3>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              Public implementations showcasing React Native thread isolation, custom D3 graphics math, and real-time state synchronization.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {personalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
