import React from "react";
import Link from "next/link";
import { Project } from "@/types";
import { Code2, Cpu, ExternalLink, Lock, CheckCircle2, Sparkles } from "lucide-react";
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
        <div className="p-6 pb-4 border-b border-[#E4E5E1] flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#2F6FED] font-medium bg-[#2F6FED]/10 px-2.5 py-0.5 rounded-full border border-[#2F6FED]/20">
              {project.category}
            </span>
            {isEmployer && (
              <span className="text-xs text-[#5B5F66] bg-[#F3F4F1] px-2 py-0.5 rounded-md border border-[#E4E5E1] flex items-center gap-1">
                <Lock className="w-3 h-3 text-[#7E8490]" />
                <span>Proprietary</span>
              </span>
            )}
            {!isEmployer && (
              <span className="text-xs text-[#3FAE64] bg-[#3FAE64]/10 px-2 py-0.5 rounded-md border border-[#3FAE64]/25 flex items-center gap-1 font-medium">
                <Sparkles className="w-3 h-3 text-[#3FAE64]" />
                <span>Open Source</span>
              </span>
            )}
          </div>
          <span className="text-xs text-[#5B5F66] flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#3FAE64]" />
            <span>{isEmployer ? "Production Deployment" : "Public Repository"}</span>
          </span>
        </div>

        {/* Main Content Info */}
        <div className="p-6 space-y-4 flex-1">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#14161A] tracking-tight hover:text-[#2F6FED] transition-colors">
                <Link href={`/projects/${project.slug}`}>{project.title}</Link>
              </h3>
              <p className="text-xs text-[#5B5F66] mt-0.5">{project.subtitle}</p>
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
                      className="px-3 py-1.5 rounded-lg bg-[#F3F4F1] hover:bg-white border border-[#E4E5E1] text-[#14161A] text-xs font-medium transition-colors flex items-center gap-1 shadow-2xs"
                    >
                      <span>App Store</span>
                      <ExternalLink className="w-3 h-3 text-[#2F6FED]" />
                    </a>
                  )}
                  {(project.links.playStore || project.links.duracellPlayStore) && (
                    <a
                      href={project.links.playStore || project.links.duracellPlayStore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-[#F3F4F1] hover:bg-white border border-[#E4E5E1] text-[#14161A] text-xs font-medium transition-colors flex items-center gap-1 shadow-2xs"
                    >
                      <span>Google Play</span>
                      <ExternalLink className="w-3 h-3 text-[#3FAE64]" />
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
                      className="px-3 py-1.5 rounded-lg bg-[#F3F4F1] hover:bg-white border border-[#E4E5E1] text-[#14161A] text-xs font-medium transition-colors flex items-center gap-1.5 shadow-2xs"
                    >
                      <svg className="w-3.5 h-3.5 fill-current text-[#14161A]" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                      <span>View repository</span>
                      <ExternalLink className="w-3 h-3 text-[#2F6FED]" />
                    </a>
                  )}
                  {project.ciBadgeUrl && (
                    <div className="flex items-center">
                      <span className="text-xs px-2 py-0.5 rounded bg-[#3FAE64]/10 text-[#3FAE64] border border-[#3FAE64]/25 flex items-center gap-1 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3FAE64]" />
                        <span>CI Passing</span>
                      </span>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Proprietary Code Notice Banner for Employer Work */}
          {isEmployer && (
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F3F4F1] border border-[#E4E5E1] text-xs text-[#5B5F66]">
              <Lock className="w-3.5 h-3.5 text-[#7E8490] shrink-0" />
              <span>
                <strong className="text-[#14161A] font-medium">Proprietary codebase.</strong> Architecture discussed in technical interview.
              </span>
            </div>
          )}

          <p className="text-sm text-[#5B5F66] leading-relaxed">{project.summary}</p>

          {/* Dynamic Visual Media Container (Duracell Energy Screenshots) */}
          {project.slug === "duracell-energy" && (
            <div className="py-2">
              <DuracellMediaGallery />
            </div>
          )}

          {/* Employer Projects: Key Engineering Decisions Prose List */}
          {isEmployer && project.keyEngineeringDecisions && project.keyEngineeringDecisions.length > 0 && (
            <div className="pt-3 pb-1 border-t border-[#E4E5E1] space-y-2.5">
              <div className="flex items-center justify-between text-xs text-[#14161A] font-medium">
                <span className="flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-[#2F6FED]" />
                  <span>Key engineering decisions</span>
                </span>
                <span className="text-xs text-[#7E8490]">Production architecture</span>
              </div>
              <ul className="space-y-2 text-xs text-[#5B5F66]">
                {project.keyEngineeringDecisions.map((decision, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3FAE64] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{decision}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Personal Projects: Real Code Snippet Box */}
          {!isEmployer && project.technicalHighlight && (
            <div className="p-3 sm:p-4 rounded-xl bg-[#F3F4F1] border border-[#E4E5E1] space-y-2">
              <div className="flex items-center justify-between text-xs text-[#14161A] font-medium">
                <span className="flex items-center gap-1.5">
                  <Code2 className="w-3.5 h-3.5 text-[#2F6FED]" />
                  <span>{project.technicalHighlight.label}</span>
                </span>
                <span className="text-xs text-[#7E8490]">Implementation</span>
              </div>
              <p className="text-xs text-[#5B5F66] leading-normal">
                {project.technicalHighlight.description}
              </p>

              {project.technicalHighlight.codeSnippet && (
                <div className="mt-2 pt-2 border-t border-[#E4E5E1] font-mono text-xs text-[#14161A]">
                  <div className="text-[11px] text-[#7E8490] mb-1">
                    {"// "}{project.technicalHighlight.codeSnippet.filename}
                  </div>
                  <pre className="text-[#14161A] bg-white p-3 rounded-lg border border-[#E4E5E1] leading-tight whitespace-pre-wrap break-words overflow-x-auto text-[11px]">
                    {project.technicalHighlight.codeSnippet.code}
                  </pre>
                </div>
              )}
            </div>
          )}

          {/* Stack Badges */}
          <div className="pt-2">
            <div className="text-xs font-medium text-[#5B5F66] mb-2">Technology stack</div>
            <div className="flex flex-wrap gap-1.5">
              {project.primaryStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs px-2.5 py-0.5 rounded-md bg-[#F3F4F1] text-[#14161A] border border-[#E4E5E1]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card Footer CTA */}
        <div className="p-4 sm:p-6 sm:pt-4 border-t border-[#E4E5E1] bg-[#F3F4F1]/50 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <span className="text-xs text-[#5B5F66]">{project.company}</span>
          <Link
            href={`/projects/${project.slug}`}
            aria-label={`Read Case Study for ${project.title}`}
            className="text-xs font-medium text-[#2F6FED] hover:text-[#2256BD] transition-colors flex items-center py-1 min-h-[44px]"
          >
            <span>Read architecture case study</span>
          </Link>
        </div>
      </article>
    </SpotlightCard>
  );
}
