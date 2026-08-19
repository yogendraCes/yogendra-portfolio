import React from "react";
import Link from "next/link";
import { Project } from "@/types";
import { ArrowLeft, Cpu, CheckCircle2, Code2, Terminal } from "lucide-react";
import { EnergyFlowVisualizer } from "../energy-flow-visualizer";
import { PipelineVisualizer } from "../pipeline-visualizer";

interface CaseStudyViewProps {
  project: Project;
}

export function CaseStudyView({ project }: CaseStudyViewProps) {
  return (
    <div className="w-full bg-[#08090A] min-h-screen text-[#F3F4F6]">
      {/* Top Header Breadcrumb */}
      <div className="w-full border-b border-[rgba(255,255,255,0.08)] bg-[#0F1115]/50 py-4">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between font-mono text-xs text-[#9CA3AF]">
          <Link
            href="/projects"
            className="flex items-center gap-1.5 hover:text-[#D97706] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#D97706]" />
            <span>Back to Production Case Studies</span>
          </Link>
          <span className="hidden sm:inline uppercase text-[#9CA3AF]">
            CASE STUDY // {project.slug}
          </span>
        </div>
      </div>

      {/* Hero Header Block */}
      <header className="w-full border-b border-[rgba(255,255,255,0.08)] bg-grid-pattern py-12 sm:py-16">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-xs text-[#D97706] font-semibold uppercase bg-[#D97706]/10 px-2.5 py-1 rounded border border-[#D97706]/30">
              {project.category}
            </span>
            <span className="font-mono text-xs text-[#10B981] bg-[#10B981]/10 px-2.5 py-1 rounded border border-[#10B981]/30">
              ● Production App Store Deployment
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#F3F4F6] leading-tight">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-[#9CA3AF] leading-relaxed font-normal">
            {project.subtitle}
          </p>

          {/* Metadata Grid Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[rgba(255,255,255,0.08)] font-mono text-xs">
            <div>
              <div className="text-[#9CA3AF] uppercase text-[10px]">MY ROLE</div>
              <div className="text-[#F3F4F6] font-semibold mt-0.5">{project.role}</div>
            </div>
            <div>
              <div className="text-[#9CA3AF] uppercase text-[10px]">ORGANIZATION</div>
              <div className="text-[#F3F4F6] font-semibold mt-0.5">{project.company}</div>
            </div>
            <div>
              <div className="text-[#9CA3AF] uppercase text-[10px]">TIMELINE</div>
              <div className="text-[#F3F4F6] font-semibold mt-0.5">{project.period}</div>
            </div>
            <div>
              <div className="text-[#9CA3AF] uppercase text-[10px]">TARGET PLATFORMS</div>
              <div className="text-[#F3F4F6] font-semibold mt-0.5">iOS & Android Mobile</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Editorial Case Study Column */}
      <main className="max-w-[840px] mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
        {/* Interactive Visualizer Node */}
        <section className="space-y-3">
          <div className="font-mono text-xs text-[#D97706] uppercase tracking-wider font-semibold">
            SYSTEM ARCHITECTURE & VISUAL SIMULATION
          </div>
          {project.slug === "energy-flow" && <EnergyFlowVisualizer />}
          {project.slug === "release-ci-cd" && <PipelineVisualizer />}
          {project.slug === "sdgme" && (
            <div className="w-full bg-[#0B0D10] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 font-mono text-xs space-y-4">
              <div className="text-[#D97706] font-bold">SDGME SUSTAINABILITY METRIC DASHBOARD</div>
              <p className="text-[#9CA3AF]">
                Enterprise application consuming REST API endpoints for user goal tracking and aggregated carbon savings analytics aligned with UN SDGs.
              </p>
            </div>
          )}
        </section>

        {/* Modular Case Study Sections */}
        {project.sections.map((section) => (
          <section key={section.id} id={section.id} className="space-y-4 pt-4 border-t border-[rgba(255,255,255,0.06)]">
            <h2 className="text-2xl font-bold text-[#F3F4F6] tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D97706]" />
              <span>{section.title}</span>
            </h2>

            <div className="space-y-4 text-base text-[#9CA3AF] leading-relaxed">
              {section.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {section.codeSnippet && (
              <div className="arch-block p-4 mt-4 space-y-2">
                <div className="flex items-center justify-between text-xs text-[#D97706] font-semibold border-b border-[rgba(255,255,255,0.08)] pb-2">
                  <span className="flex items-center gap-1.5">
                    <Code2 className="w-4 h-4" />
                    <span>{"// "}{section.codeSnippet.filename}</span>
                  </span>
                  <span className="text-[10px] text-[#9CA3AF] uppercase">
                    {section.codeSnippet.language}
                  </span>
                </div>
                <pre className="text-emerald-400 font-mono text-xs leading-relaxed overflow-x-auto pt-2 whitespace-pre-wrap break-words">
                  {section.codeSnippet.code}
                </pre>
              </div>
            )}
          </section>
        ))}

        {/* Technical Hurdles Box */}
        <section className="space-y-4 bg-[#0F1115] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
          <h3 className="text-lg font-bold text-[#F3F4F6] flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#D97706]" />
            <span>Key Technical Challenges Overcome</span>
          </h3>
          <ul className="space-y-3 font-sans text-sm text-[#9CA3AF]">
            {project.challenges.map((challenge, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="font-mono text-xs text-[#D97706] font-bold shrink-0 mt-0.5">
                  [CHALLENGE {i + 1}]
                </span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Outcome Box */}
        <section className="space-y-4 bg-[#0F1115] border border-[rgba(255,255,255,0.08)] rounded-xl p-6">
          <h3 className="text-lg font-bold text-[#F3F4F6] flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
            <span>Verified Results & Production Impact</span>
          </h3>
          <ul className="space-y-2 font-sans text-sm text-[#9CA3AF]">
            {project.outcome.map((res, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-1" />
                <span>{res}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Full Stack Matrix Box */}
        <section className="space-y-4 pt-4 border-t border-[rgba(255,255,255,0.06)]">
          <h3 className="text-lg font-bold text-[#F3F4F6] flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#D97706]" />
            <span>Full Technology & Dependency Matrix</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.fullStack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-3 py-1.5 rounded bg-[#1C1F26] text-[#F3F4F6] border border-[rgba(255,255,255,0.08)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Bottom Case Study CTA */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/projects"
            className="w-full sm:w-auto px-6 py-3 rounded bg-[#16181D] border border-[rgba(255,255,255,0.16)] text-[#F3F4F6] font-mono text-xs font-semibold hover:border-[#D97706]/50 transition-colors text-center"
          >
            ← View All Case Studies
          </Link>
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 py-3 rounded bg-[#D97706] text-[#08090A] font-mono text-xs font-bold hover:bg-[#F59E0B] transition-colors text-center shadow-lg shadow-amber-950/20"
          >
            Schedule Technical Consultation →
          </Link>
        </div>
      </main>
    </div>
  );
}
