import React from "react";
import Link from "next/link";
import { Project } from "@/types";
import { ArrowRight, Code2, Cpu, ExternalLink, Lock, CheckCircle2, Sparkles } from "lucide-react";
import { DuracellMediaGallery } from "./duracell-media-gallery";
import { SpotlightCard } from "./spotlight-card";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isEmployer = project.projectType === "employer";

  return (
    <SpotlightCard className="w-full flex flex-col overflow-hidden">
      <article className="w-full flex flex-col h-full">
        {/* Card Header Top Metadata */}
        <div className="p-6 pb-4 border-b border-[rgba(255,255,255,0.06)] flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-[#D97706] font-semibold tracking-wider uppercase bg-[#D97706]/10 px-2.5 py-1 rounded border border-[#D97706]/30">
              {project.category}
            </span>
            {isEmployer && (
              <span className="font-mono text-[10px] text-[#9CA3AF] bg-[#16181D] px-2 py-0.5 rounded border border-[rgba(255,255,255,0.08)] flex items-center gap-1">
                <Lock className="w-3 h-3 text-[#D97706]" />
                <span>Proprietary</span>
              </span>
            )}
            {!isEmployer && (
              <span className="font-mono text-[10px] text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#10B981]" />
                <span>Open Source</span>
              </span>
            )}
          </div>
          <span className="font-mono text-xs text-[#9CA3AF] flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#10B981]" />
            <span>{isEmployer ? "Production Deployment" : "Public Repository"}</span>
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

            {/* Action Buttons: Store links for employer apps, GitHub / Demo for personal projects */}
            <div className="flex flex-wrap items-center gap-2 shrink-0 pt-1 md:pt-0">
              {isEmployer && project.links && (
                <>
                  {(project.links.appStore || project.links.duracellAppStore) && (
                    <a
                      href={project.links.appStore || project.links.duracellAppStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded bg-[#16181D] hover:bg-[#1C1F26] border border-[rgba(255,255,255,0.12)] text-[#F3F4F6] font-mono text-[11px] transition-colors flex items-center gap-1"
                    >
                      <span>App Store</span>
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
                      <span>Google Play</span>
                      <ExternalLink className="w-3 h-3 text-[#10B981]" />
                    </a>
                  )}
                </>
              )}

              {!isEmployer && (
                <>
                  {project.githubRepoUrl && (
                    <a
                      href={project.githubRepoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded bg-[#16181D] hover:bg-[#1C1F26] border border-[rgba(255,255,255,0.16)] hover:border-[#D97706]/50 text-[#F3F4F6] font-mono text-xs font-semibold transition-colors flex items-center gap-1.5"
                    >
                      <svg className="w-3.5 h-3.5 fill-current text-[#F3F4F6]" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>View GitHub Repo</span>
                      <ExternalLink className="w-3 h-3 text-[#D97706]" />
                    </a>
                  )}
                  {project.ciBadgeUrl && (
                    <div className="flex items-center">
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                        <span>CI: Passing</span>
                      </span>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Proprietary Code Notice Banner for Employer Work */}
          {isEmployer && (
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#16181D]/80 border border-[rgba(255,255,255,0.08)] font-mono text-xs text-[#9CA3AF]">
              <Lock className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
              <span>
                <strong className="text-[#F3F4F6]">Proprietary codebase</strong> — architecture discussed in interview.
              </span>
            </div>
          )}

          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">{project.summary}</p>

          {/* Dynamic Visual Media Container (Duracell Energy Screenshots) */}
          {project.slug === "duracell-energy" && (
            <div className="py-2">
              <DuracellMediaGallery />
            </div>
          )}

          {/* Employer Projects: Key Engineering Decisions Prose List (No fake code snippets) */}
          {isEmployer && project.keyEngineeringDecisions && project.keyEngineeringDecisions.length > 0 && (
            <div className="pt-3 pb-1 border-t border-[rgba(255,255,255,0.06)] space-y-2.5">
              <div className="flex items-center justify-between text-xs text-[#D97706] font-mono font-semibold">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-[#D97706]" />
                  <span>KEY ENGINEERING DECISIONS</span>
                </span>
                <span className="text-[10px] text-[#9CA3AF] uppercase">PRODUCTION ARCHITECTURE</span>
              </div>
              <ul className="space-y-2 font-sans text-xs text-[#9CA3AF]">
                {project.keyEngineeringDecisions.map((decision, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{decision}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Personal Projects: Real Code Snippet Box */}
          {!isEmployer && project.technicalHighlight && (
            <div className="arch-block p-3 sm:p-4 space-y-2">
              <div className="flex items-center justify-between text-xs text-[#D97706] font-semibold">
                <span className="flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>{project.technicalHighlight.label}</span>
                </span>
                <span className="text-[10px] text-[#9CA3AF]">OPEN SOURCE CODE IMPLEMENTATION</span>
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
          )}

          {/* Stack Badges */}
          <div className="pt-2">
            <div className="font-mono text-[11px] text-[#9CA3AF] mb-2 uppercase">TECHNOLOGY STACK</div>
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
            aria-label={`Read Case Study for ${project.title}`}
            className="font-mono text-xs font-semibold text-[#D97706] hover:text-[#F59E0B] transition-colors flex items-center gap-1 group py-1 min-h-[44px]"
          >
            <span>Read Architecture Case Study</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </article>
    </SpotlightCard>
  );
}
