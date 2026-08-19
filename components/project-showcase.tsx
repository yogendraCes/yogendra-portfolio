import React from "react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { EnergyFlowVisualizer } from "./energy-flow-visualizer";
import { Layers, Sparkles } from "lucide-react";

export function ProjectShowcase() {
  return (
    <section id="work" className="w-full py-16 sm:py-24 border-b border-[rgba(255,255,255,0.08)] bg-[#08090A] relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D97706]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-[760px] space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D97706] tracking-wider uppercase bg-[#D97706]/10 px-3 py-1 rounded-full border border-[#D97706]/30">
            <Layers className="w-4 h-4" />
            <span>SELECTED WORK & CASE STUDIES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F3F4F6]">
            Production Mobile Engineering Showcase
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
            Real-world mobile engineering work—featuring custom SVG data visualizations, Reanimated native UI thread performance, RTK Query state management, and automated CI/CD release pipelines.
          </p>
        </div>

        {/* Live Interactive Energy Flow Engine Widget */}
        <div className="py-2">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#D97706]" />
            <span className="font-mono text-xs text-[#F3F4F6] font-bold uppercase tracking-wider">
              INTERACTIVE DEMO: LIVE POWER DISPATCH ALGORITHM
            </span>
          </div>
          <EnergyFlowVisualizer />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 pt-4">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
