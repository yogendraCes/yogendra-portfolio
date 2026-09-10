import React from "react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { Briefcase, Code } from "lucide-react";

interface ProjectShowcaseProps {
  showHeader?: boolean;
}

export function ProjectShowcase({ showHeader = true }: ProjectShowcaseProps = {}) {
  const employerProjects = projectsData.filter((p) => p.projectType === "employer");
  const personalProjects = projectsData.filter((p) => p.projectType === "personal");

  return (
    <section id="work" className="w-full py-14 sm:py-20 border-b border-[#E4E5E1] bg-[#F3F4F1] relative">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Top Section Header */}
        {showHeader && (
          <div className="max-w-[680px] space-y-2">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#14161A]">
              Selected work
            </h2>
            <p className="text-sm sm:text-base text-[#5B5F66] leading-relaxed">
              Applications engineered and shipped to the Apple App Store and Google Play Store, alongside open-source reference implementations showcasing React Native architecture.
            </p>
          </div>
        )}

        {/* Category 1: Production Applications & Scaled Deployments */}
        <div className="space-y-6">
          <div className="border-b border-[#E4E5E1] pb-3 space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-[#2F6FED] font-medium">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Production Systems</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#14161A] tracking-tight">
              Shipped applications & scaled deployments
            </h3>
            <p className="text-xs sm:text-sm text-[#5B5F66] leading-relaxed">
              Engineered and maintained across live releases with active telemetry, IoT hardware synchronization, and CI/CD pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {employerProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>

        {/* Category 2: Open Source & Reference Architecture */}
        <div className="space-y-6 pt-4">
          <div className="border-b border-[#E4E5E1] pb-3 space-y-1">
            <div className="flex items-center gap-1.5 text-xs text-[#3FAE64] font-medium">
              <Code className="w-3.5 h-3.5" />
              <span>Reference Architecture</span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#14161A] tracking-tight">
              Open-source implementations & prototypes
            </h3>
            <p className="text-xs sm:text-sm text-[#5B5F66] leading-relaxed">
              Public implementations showcasing React Native thread isolation, custom D3 graphics math, and real-time state synchronization.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {personalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
