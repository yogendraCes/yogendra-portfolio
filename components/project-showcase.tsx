import React from "react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { Layers } from "lucide-react";

export function ProjectShowcase() {
  return (
    <section id="work" className="w-full py-16 sm:py-24 border-b border-[rgba(255,255,255,0.08)] bg-[#08090A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="max-w-[760px] space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D97706] tracking-wider uppercase">
            <Layers className="w-4 h-4" />
            <span>SELECTED WORK</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F3F4F6]">
            Selected Work
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
            Real-world mobile engineering work—featuring custom SVG data visualizations, state management architectures, UI thread performance, and automated release pipelines.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
