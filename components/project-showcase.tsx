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
    <section id="work" className="w-full py-14 sm:py-20 border-b border-[#219EBC]/15 bg-[#0A1118] relative">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* Top Section Header */}
        {showHeader && (
          <div className="max-w-[680px] space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#E8F1F5]">
              Selected work
            </h2>
            <p className="text-sm sm:text-base text-[#7E9AA8] leading-relaxed">
              Applications engineered and shipped to the Apple App Store and Google Play Store, alongside open-source reference implementations showcasing React Native architecture.
            </p>
          </div>
        )}

        {/* Category 1: Production Applications & Scaled Deployments */}
        <div className="space-y-6">
          <div className="border-b border-[#219EBC]/15 pb-3 space-y-1">
            <h3 className="text-lg sm:text-xl font-bold text-[#E8F1F5] tracking-tight flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#38BDF8]" aria-hidden="true" />
              <span>Shipped applications & scaled deployments</span>
            </h3>
            <p className="text-xs sm:text-sm text-[#7E9AA8] leading-relaxed">
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
        {personalProjects.length > 0 && (
          <div className="space-y-6 pt-4">
            <div className="border-b border-[#219EBC]/15 pb-3 space-y-1">
              <h3 className="text-lg sm:text-xl font-bold text-[#E8F1F5] tracking-tight flex items-center gap-2">
                <Code className="w-4 h-4 text-[#10B981]" aria-hidden="true" />
                <span>Open-source implementations & prototypes</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#7E9AA8] leading-relaxed">
                Public web applications and open-source implementations showcasing Next.js 15 App Router conventions, Zustand state stores, and full-stack scheduling workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {personalProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
