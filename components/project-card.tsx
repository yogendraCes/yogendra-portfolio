import React from "react";
import Link from "next/link";
import { Project } from "@/types";
import { ArrowRight, Code2, Cpu, ExternalLink } from "lucide-react";
import { DuracellMediaGallery } from "./duracell-media-gallery";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="w-full bg-[#0F1115] border border-[rgba(255,255,255,0.08)] rounded-xl overflow-hidden hover:border-[rgba(255,255,255,0.16)] transition-all duration-300 flex flex-col">
      {/* Card Header Top Metadata */}
      <div className="p-6 pb-4 border-b border-[rgba(255,255,255,0.06)] flex flex-wrap items-center justify-between gap-2">
        <span className="font-mono text-xs text-[#D97706] font-semibold tracking-wider uppercase bg-[#D97706]/10 px-2.5 py-1 rounded border border-[#D97706]/30">
          {project.category}
        </span>
        <span className="font-mono text-xs text-[#9CA3AF] flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5 text-[#10B981]" />
          <span>iOS & Android Production</span>
        </span>
      </div>

      {/* Main Content Info */}
      <div className="p-6 space-y-4 flex-1">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F3F4F6] tracking-tight hover:text-[#D97706] transition-colors">
              <Link href={`/projects/${project.slug}`}>{project.title}</Link>
            </h3>
            <p className="font-mono text-xs text-[#9CA3AF] mt-1">{project.subtitle}</p>
          </div>

          {/* Store Buttons if available */}
          {project.links && (project.links.appStore || project.links.duracellAppStore) && (
            <div className="flex items-center gap-2 shrink-0 pt-1 md:pt-0">
              {(project.links.appStore || project.links.duracellAppStore) && (
                <a
                  href={project.links.appStore || project.links.duracellAppStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-[#16181D] hover:bg-[#1C1F26] border border-[rgba(255,255,255,0.12)] text-[#F3F4F6] font-mono text-[11px] transition-colors flex items-center gap-1"
                >
                  <span>View on App Store</span>
                  <ExternalLink className="w-3 h-3 text-[#D97706]" />
                </a>
              )}
              {(project.links.playStore || project.links.duracellPlayStore) && (
                <a
                  href={project.links.playStore || project.links.duracellPlayStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded bg-[#16181D] hover:bg-[#1C1F26] border border-[rgba(255,255,255,0.12)] text-[#F3F4F6] font-mono text-[11px] transition-colors flex items-center gap-1"
                >
                  <span>Get it on Google Play</span>
                  <ExternalLink className="w-3 h-3 text-[#10B981]" />
                </a>
              )}
            </div>
          )}
        </div>

        <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">{project.summary}</p>

        {/* Dynamic Visual Media Container */}
        <div className="py-2">
          {(project.slug === "duracell-energy" || project.slug === "energy-flow") && <DuracellMediaGallery />}
        </div>

        {/* Technical Highlight Callout Box (.arch-block) */}
        <div className="arch-block p-3 sm:p-4 space-y-2">
          <div className="flex items-center justify-between text-xs text-[#D97706] font-semibold">
            <span className="flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5" />
              <span>{project.technicalHighlight.label}</span>
            </span>
            <span className="text-[10px] text-[#9CA3AF]">ARCHITECTURAL FOCUS</span>
          </div>
          <p className="text-xs text-[#9CA3AF] leading-normal font-sans">
            {project.technicalHighlight.description}
          </p>

          {project.technicalHighlight.codeSnippet && (
            <div className="mt-2 pt-2 border-t border-[rgba(255,255,255,0.06)] font-mono text-[11px] text-[#F3F4F6]">
              <div className="text-[10px] text-[#9CA3AF] mb-1">
                {"// "}{project.technicalHighlight.codeSnippet.filename}
              </div>
              <pre className="text-emerald-400 opacity-90 leading-tight whitespace-pre-wrap break-words overflow-x-auto">
                {project.technicalHighlight.codeSnippet.code}
              </pre>
            </div>
          )}
        </div>

        {/* Stack Badges */}
        <div className="pt-2">
          <div className="font-mono text-[11px] text-[#9CA3AF] mb-2 uppercase">TECHNOLOGY MATRIX</div>
          <div className="flex flex-wrap gap-1.5">
            {project.primaryStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#1C1F26] text-[#9CA3AF] border border-[rgba(255,255,255,0.08)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer CTA */}
      <div className="p-4 sm:p-6 sm:pt-4 border-t border-[rgba(255,255,255,0.06)] bg-[#0B0D10]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <span className="font-mono text-xs text-[#9CA3AF]">{project.company}</span>
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`Read Architectural Case Study for ${project.title}`}
          className="font-mono text-xs font-semibold text-[#D97706] hover:text-[#F59E0B] transition-colors flex items-center gap-1 group py-1 min-h-[44px]"
        >
          <span>Read Architectural Case Study</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
