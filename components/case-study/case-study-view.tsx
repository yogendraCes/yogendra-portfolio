import React from "react";
import Link from "next/link";
import { Project } from "@/types";
import { ArrowLeft, Cpu, CheckCircle2, Code2, Terminal, ExternalLink } from "lucide-react";
import { DuracellMediaGallery } from "../duracell-media-gallery";
import { ProjectScreenshotsGallery } from "./project-screenshots-gallery";

interface CaseStudyViewProps {
  project: Project;
}

export function CaseStudyView({ project }: CaseStudyViewProps) {
  const isWebProject =
    project.category.toLowerCase().includes("web") ||
    project.slug === "acuity-coaching";

  return (
    <div className="w-full bg-[#0A1118] min-h-screen text-[#E8F1F5]">
      {/* Top Header Breadcrumb */}
      <div className="w-full border-b border-[#219EBC]/15 bg-[#070D13]/75 backdrop-blur-md py-4">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 flex items-center justify-between text-xs text-[#7E9AA8]">
          <Link
            href="/projects"
            className="flex items-center gap-1.5 hover:text-[#38BDF8] font-semibold text-[#E8F1F5] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#38BDF8]" />
            <span>Back to projects</span>
          </Link>
          <span className="hidden sm:inline text-xs text-[#7E9AA8] font-medium">
            Case study: {project.slug}
          </span>
        </div>
      </div>

      {/* Hero Header Block */}
      <header className="w-full border-b border-[#219EBC]/15 py-12 sm:py-16">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#38BDF8] font-semibold bg-[#162634] px-2.5 py-0.5 rounded-full border border-[#38BDF8]/30">
              {project.category}
            </span>
            <span className="text-xs text-[#10B981] bg-[#10B981]/15 px-2.5 py-0.5 rounded-full border border-[#10B981]/30 flex items-center gap-1.5 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>
                {project.projectType === "personal"
                  ? "Public open-source repository release"
                  : isWebProject
                  ? "Production web architecture release"
                  : "Shipped App Store & Play Store release"}
              </span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#E8F1F5] leading-tight">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-[#7E9AA8] leading-relaxed">
            {project.subtitle}
          </p>

          {/* Verified Production Proof & Public Store Links */}
          {(project.links || project.githubRepoUrl) && (
            <div className="pt-2 space-y-3">
              <div className="text-xs font-semibold text-[#7E9AA8] uppercase tracking-wider">
                {project.projectType === "personal" ? "Repository & source links:" : "Production application links:"}
              </div>
              <div className="flex flex-wrap gap-3">
                {project.links?.duracellAppStore && (
                  <a
                    href={project.links.duracellAppStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#162634] hover:bg-[#1B2F40] border border-[#219EBC]/25 text-[#E8F1F5] text-xs font-semibold transition-all flex items-center gap-2 min-h-[44px] shadow-2xs hover:-translate-y-0.5"
                  >
                    <span>Duracell Energy on App Store</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#38BDF8]" aria-hidden="true" />
                  </a>
                )}
                {project.links?.duracellPlayStore && (
                  <a
                    href={project.links.duracellPlayStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#162634] hover:bg-[#1B2F40] border border-[#219EBC]/25 text-[#E8F1F5] text-xs font-semibold transition-all flex items-center gap-2 min-h-[44px] shadow-2xs hover:-translate-y-0.5"
                  >
                    <span>Duracell Energy on Google Play</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#10B981]" aria-hidden="true" />
                  </a>
                )}
                {project.links?.appStore && (project.slug !== "duracell-energy" && project.slug !== "energy-flow") && (
                  <a
                    href={project.links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#162634] hover:bg-[#1B2F40] border border-[#219EBC]/25 text-[#E8F1F5] text-xs font-semibold transition-all flex items-center gap-2 min-h-[44px] shadow-2xs hover:-translate-y-0.5"
                  >
                    <span>View on App Store</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#38BDF8]" aria-hidden="true" />
                  </a>
                )}
                {project.links?.playStore && (project.slug !== "duracell-energy" && project.slug !== "energy-flow") && (
                  <a
                    href={project.links.playStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#162634] hover:bg-[#1B2F40] border border-[#219EBC]/25 text-[#E8F1F5] text-xs font-semibold transition-all flex items-center gap-2 min-h-[44px] shadow-2xs hover:-translate-y-0.5"
                  >
                    <span>Get it on Google Play</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#10B981]" aria-hidden="true" />
                  </a>
                )}
                {(project.links?.demo || project.liveDemoUrl) && (
                  <a
                    href={project.links?.demo || project.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#0A1118] text-xs font-bold transition-all flex items-center gap-2 min-h-[44px] shadow-[0_0_16px_rgba(56,189,248,0.25)] hover:-translate-y-0.5"
                  >
                    <span>Visit live platform</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#0A1118]" aria-hidden="true" />
                  </a>
                )}
                {(project.githubRepoUrl || project.links?.github) && (
                  <a
                    href={project.githubRepoUrl || project.links?.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-[#162634] hover:bg-[#1B2F40] border border-[#219EBC]/25 text-[#E8F1F5] text-xs font-semibold transition-all flex items-center gap-2 min-h-[44px] shadow-2xs hover:-translate-y-0.5"
                  >
                    <span>View GitHub repository</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#38BDF8]" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Metadata Grid Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-[#219EBC]/15 text-xs">
            <div>
              <div className="text-[#7E9AA8] font-medium text-xs">My role</div>
              <div className="text-[#E8F1F5] font-bold mt-0.5">{project.role}</div>
            </div>
            <div>
              <div className="text-[#7E9AA8] font-medium text-xs">Organization</div>
              <div className="text-[#E8F1F5] font-bold mt-0.5">{project.company}</div>
            </div>
            <div>
              <div className="text-[#7E9AA8] font-medium text-xs">Timeline</div>
              <div className="text-[#E8F1F5] font-bold mt-0.5">{project.period}</div>
            </div>
            <div>
              <div className="text-[#7E9AA8] font-medium text-xs">Target platforms</div>
              <div className="text-[#E8F1F5] font-bold mt-0.5">
                {isWebProject ? "Web (Modern Browsers)" : "iOS & Android"}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Editorial Case Study Column */}
      <main className="max-w-[960px] mx-auto px-4 sm:px-6 py-12 sm:py-16 space-y-16">
        {/* Interactive Production Screenshots Node for Duracell */}
        {(project.slug === "duracell-energy" || project.slug === "energy-flow") && (
          <section className="space-y-3">
            <DuracellMediaGallery />
          </section>
        )}

        {/* Verified Production Screenshots Gallery for Puredrive, Stain Care Pro, SDGme, etc. */}
        {project.slug !== "duracell-energy" &&
          project.slug !== "energy-flow" &&
          project.screenshots &&
          project.screenshots.length > 0 && (
            <section className="space-y-3">
              <ProjectScreenshotsGallery project={project} />
            </section>
          )}

        {/* Modular Case Study Sections */}
        {project.sections.map((section) => (
          <section key={section.id} id={section.id} className="space-y-4 pt-4 border-t border-[#219EBC]/15">
            <h2 className="text-xl sm:text-2xl font-bold text-[#E8F1F5] tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#38BDF8]" />
              <span>{section.title}</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#7E9AA8] leading-relaxed">
              {section.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {section.codeSnippet && (
              <div className="p-4 mt-4 rounded-xl bg-[#070D13] border border-[#219EBC]/20 space-y-2 shadow-xs">
                <div className="flex items-center justify-between text-xs text-[#E8F1F5] font-semibold border-b border-[#219EBC]/15 pb-2">
                  <span className="flex items-center gap-1.5">
                    <Code2 className="w-4 h-4 text-[#38BDF8]" />
                    <span>{"// "}{section.codeSnippet.filename}</span>
                  </span>
                  <span className="text-xs text-[#7E9AA8]">
                    {section.codeSnippet.language}
                  </span>
                </div>
                <pre className="text-[#38BDF8] font-mono text-xs leading-relaxed overflow-x-auto pt-2 whitespace-pre-wrap break-words">
                  {section.codeSnippet.code}
                </pre>
              </div>
            )}
          </section>
        ))}

        {/* Technical Challenges Box */}
        <section className="space-y-4 bg-[#101D28] border border-[#219EBC]/20 rounded-2xl p-6 shadow-xs">
          <h3 className="text-base sm:text-lg font-bold text-[#E8F1F5] flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#38BDF8]" />
            <span>Key technical challenges & solutions</span>
          </h3>
          <ul className="space-y-3 text-xs sm:text-sm text-[#7E9AA8]">
            {project.challenges.map((challenge, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="text-xs text-[#38BDF8] font-bold shrink-0 mt-0.5">
                  Challenge {i + 1}:
                </span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Outcome Box */}
        <section className="space-y-4 bg-[#101D28] border border-[#219EBC]/20 rounded-2xl p-6 shadow-xs">
          <h3 className="text-base sm:text-lg font-bold text-[#E8F1F5] flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
            <span>Verified results & production status</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-[#7E9AA8]">
            {project.outcome.map((res, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                <span>{res}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Full Stack Matrix Box */}
        <section className="space-y-4 pt-4 border-t border-[#219EBC]/15">
          <h3 className="text-base sm:text-lg font-bold text-[#E8F1F5] flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#38BDF8]" />
            <span>Full technology stack</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.fullStack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-md bg-[#162634] text-[#7E9AA8] border border-[#219EBC]/20 font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Bottom Case Study CTA */}
        <div className="pt-8 border-t border-[#219EBC]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/projects"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#162634] border border-[#219EBC]/25 text-[#E8F1F5] text-xs font-semibold hover:bg-[#1B2F40] transition-colors text-center"
          >
            View all projects
          </Link>
          <a
            href="mailto:yogendra9644@gmail.com"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-[#38BDF8] text-[#0A1118] text-xs font-bold hover:bg-[#7DD3FC] transition-colors text-center shadow-[0_0_16px_rgba(56,189,248,0.25)]"
          >
            Contact Yogendra directly
          </a>
        </div>
      </main>
    </div>
  );
}
