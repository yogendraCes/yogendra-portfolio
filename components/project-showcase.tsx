"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projectsData } from "@/data/projects";
import { Project } from "@/types";
import {
  ExternalLink,
  Lock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Smartphone,
  Globe,
  Radio,
  Zap,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { SpotlightCard } from "./spotlight-card";

interface ProjectShowcaseProps {
  showHeader?: boolean;
}

export function ProjectShowcase({ showHeader = true }: ProjectShowcaseProps = {}) {
  const [activeProjectId, setActiveProjectId] = useState<string>("duracell-energy");
  const [activeScreenIndex, setActiveScreenIndex] = useState<number>(0);
  const [catalogFilter, setCatalogFilter] = useState<"all" | "employer" | "personal">("all");

  const activeProject =
    projectsData.find((p) => p.id === activeProjectId) || projectsData[0];

  const filteredProjects =
    catalogFilter === "all"
      ? projectsData
      : projectsData.filter((p) => p.projectType === catalogFilter);

  // Handle switching active project: reset active screenshot index to 0
  const handleSelectProject = (projectId: string) => {
    setActiveProjectId(projectId);
    setActiveScreenIndex(0);
  };

  const projectNavItems = [
    { id: "duracell-energy", label: "Duracell Energy", tag: "iOS & Android", icon: Zap },
    { id: "puredrive", label: "Puredrive Home", tag: "Production IoT", icon: Smartphone },
    { id: "saloon-app", label: "Zenyme Saloon", tag: "Full-Stack Web", icon: Globe },
    { id: "stain-care-pro", label: "Stain Care Pro", tag: "Diagnostics", icon: Smartphone },
    { id: "sdgme", label: "SDGme Mobile", tag: "UN SDG App", icon: Smartphone },
    { id: "vhp-linear-motions", label: "VHP Motions", tag: "Industrial App", icon: Globe },
    { id: "acuity-coaching", label: "Acuity Coaching", tag: "Enterprise", icon: Globe },
  ];

  const activeScreenshots = activeProject.screenshots || [];
  const currentScreenshot = activeScreenshots[activeScreenIndex] || activeScreenshots[0];
  const isWebProject = activeProject.id === "saloon-app" || activeProject.id === "acuity-coaching" || activeProject.id === "vhp-linear-motions";

  return (
    <section
      id="work"
      className="w-full pt-16 sm:pt-24 pb-16 sm:pb-24 border-b border-[#219EBC]/15 bg-[#0A1118] relative scroll-mt-24 sm:scroll-mt-28"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Section Header */}
        <div className="text-center max-w-[760px] mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101D28] border border-[#219EBC]/25 text-xs text-[#38BDF8] font-medium shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_6px_rgba(16,185,129,0.6)]" />
            <span>Featured Architecture & Shipped Applications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#E8F1F5]">
            {showHeader ? "Selected work & case studies" : "All engineering projects"}
          </h2>
          <p className="text-sm sm:text-base text-[#7E9AA8] leading-relaxed max-w-[640px] mx-auto">
            {showHeader
              ? "Flagship mobile apps and full-stack systems engineered with React Native, TypeScript, and high-frequency telemetry architectures."
              : "Explore technical case studies documenting telemetry data flows, custom rendering pipelines, and production deployments."}
          </p>
        </div>

        {/* /PROJECTS CATALOG FILTER (ONLY SHOWN ON /projects ROUTE) */}
        {!showHeader && (
          <div className="flex justify-center">
            <div className="inline-flex items-center bg-[#070D13] p-1 rounded-full border border-[#219EBC]/20">
              <button
                type="button"
                onClick={() => setCatalogFilter("all")}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  catalogFilter === "all"
                    ? "bg-[#38BDF8] text-[#0A1118] shadow-sm font-bold"
                    : "text-[#7E9AA8] hover:text-[#E8F1F5]"
                }`}
              >
                All Projects ({projectsData.length})
              </button>
              <button
                type="button"
                onClick={() => setCatalogFilter("employer")}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  catalogFilter === "employer"
                    ? "bg-[#38BDF8] text-[#0A1118] shadow-sm font-bold"
                    : "text-[#7E9AA8] hover:text-[#E8F1F5]"
                }`}
              >
                Production Apps (4)
              </button>
              <button
                type="button"
                onClick={() => setCatalogFilter("personal")}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                  catalogFilter === "personal"
                    ? "bg-[#38BDF8] text-[#0A1118] shadow-sm font-bold"
                    : "text-[#7E9AA8] hover:text-[#E8F1F5]"
                }`}
              >
                Web & Open Source (3)
              </button>
            </div>
          </div>
        )}

        {/* HOMEPAGE APPLE-STYLE SPOTLIGHT */}
        {showHeader && (
          <div className="space-y-8">
            {/* Apple Segmented Pill Switcher (Centered, Spacious, Tactile) */}
            <div className="flex justify-center overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
              <div
                role="tablist"
                aria-label="Select project to inspect"
                className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-[#070D13]/90 border border-[#219EBC]/25 shadow-lg backdrop-blur-xl"
              >
                {projectNavItems.map((item) => {
                  const isActive = item.id === activeProjectId;
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => handleSelectProject(item.id)}
                      className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                        isActive
                          ? "bg-[#38BDF8] text-[#0A1118] font-bold shadow-[0_0_16px_rgba(56,189,248,0.4)] scale-102"
                          : "text-[#7E9AA8] hover:text-[#E8F1F5] hover:bg-[#162634]/60"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5 shrink-0" />
                      <span>{item.label}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.2 rounded-full font-medium ${
                          isActive
                            ? "bg-[#0A1118]/25 text-[#0A1118]"
                            : "bg-[#162634] text-[#7E9AA8]"
                        }`}
                      >
                        {item.tag}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Apple Center Stage: Active Project Spotlight Card */}
            <SpotlightCard className="overflow-hidden border border-[#219EBC]/30 bg-[#101D28]/95 shadow-2xl rounded-3xl">
              <div className="p-6 sm:p-10 lg:p-12 space-y-8">
                {/* Meta Top Bar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-[#219EBC]/15">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="text-xs text-[#38BDF8] font-semibold bg-[#162634] px-3 py-1 rounded-full border border-[#38BDF8]/30 flex items-center gap-1.5 shadow-2xs">
                      <Smartphone className="w-3.5 h-3.5 text-[#38BDF8]" />
                      <span>{activeProject.category}</span>
                    </span>
                    {activeProject.projectType === "employer" ? (
                      <span className="text-xs text-[#7E9AA8] bg-[#162634] px-2.5 py-1 rounded-md border border-[#219EBC]/20 flex items-center gap-1 font-medium">
                        <Lock className="w-3 h-3 text-[#7E9AA8]" />
                        <span>Proprietary Production Codebase</span>
                      </span>
                    ) : (
                      <span className="text-xs text-[#10B981] bg-[#10B981]/15 px-2.5 py-1 rounded-md border border-[#10B981]/30 flex items-center gap-1 font-semibold">
                        <Sparkles className="w-3 h-3 text-[#10B981]" />
                        <span>Live Production Web Platform</span>
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs text-[#7E9AA8]">
                    <span className="font-semibold text-[#E8F1F5]">{activeProject.company}</span>
                    <span className="text-[#219EBC]/40">•</span>
                    <span>{activeProject.period}</span>
                  </div>
                </div>

                {/* 2-Column Responsive Spotlight Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column (5 cols desktop): Authentic Device Preview Frame */}
                  <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4">
                    {/* Device Presentation Stage */}
                    {isWebProject ? (
                      /* MacBook / Browser Device Frame for Zenyme */
                      <div className="w-full max-w-[440px] rounded-2xl bg-[#1C1E22] p-2 border border-[#3A3F47] shadow-2xl">
                        {/* macOS Window Controls & Browser Bar */}
                        <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800 bg-[#121417] rounded-t-xl">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                          </div>
                          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#1C1E22] text-[10px] text-[#7E9AA8] font-mono border border-zinc-700">
                            <Lock className="w-2.5 h-2.5 text-[#10B981]" />
                            <span>saloon-app-teal.vercel.app</span>
                          </div>
                          <span className="w-6" />
                        </div>
                        {/* Screen Image Container */}
                        <div className="relative w-full aspect-[16/10] rounded-b-xl overflow-hidden bg-black">
                          {currentScreenshot && (
                            <Image
                              src={currentScreenshot.url}
                              alt={currentScreenshot.caption || activeProject.title}
                              fill
                              sizes="(max-width: 640px) 100vw, 440px"
                              className="object-cover object-top transition-opacity duration-300"
                              priority
                            />
                          )}
                        </div>
                      </div>
                    ) : activeScreenshots.length > 0 ? (
                      /* iPhone Device Frame for Mobile Projects (Duracell, Puredrive, Stain Care, SDGme) */
                      <div className="relative group select-none">
                        {/* Phone Chassis */}
                        <div className="relative w-[240px] sm:w-[260px] rounded-[44px] bg-[#1C1E22] p-3 border border-[#3A3F47] shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_24px_rgba(56,189,248,0.15)]">
                          {/* Dynamic Island */}
                          <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-between px-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                            <span className="w-1 h-1 rounded-full bg-zinc-800" />
                          </div>

                          {/* Screen Container */}
                          <div className="relative w-full aspect-[9/19.5] rounded-[34px] overflow-hidden bg-black">
                            <Image
                              src={currentScreenshot.url}
                              alt={currentScreenshot.caption || activeProject.title}
                              fill
                              sizes="(max-width: 640px) 240px, 260px"
                              className="object-cover object-top transition-opacity duration-300"
                              priority
                            />
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Code / Architecture Frame for Projects without Mobile Screenshots */
                      <div className="w-full max-w-[440px] rounded-2xl bg-[#070D13] p-4 border border-[#219EBC]/25 shadow-xl font-mono text-xs space-y-3">
                        <div className="flex items-center justify-between pb-2 border-b border-[#219EBC]/15 text-[#7E9AA8]">
                          <span className="text-xs text-[#38BDF8] font-bold">Audio Engine Architecture</span>
                          <span className="text-[10px] text-[#10B981]">Native Pipeline</span>
                        </div>
                        <p className="text-xs text-[#7E9AA8] font-sans leading-relaxed">
                          {activeProject.technicalHighlight?.description || activeProject.summary}
                        </p>
                        {activeProject.technicalHighlight?.codeSnippet && (
                          <pre className="text-[#38BDF8] bg-[#0A1118] p-3 rounded-lg border border-[#219EBC]/20 overflow-x-auto text-[11px] leading-relaxed">
                            {activeProject.technicalHighlight.codeSnippet.code}
                          </pre>
                        )}
                      </div>
                    )}

                    {/* Screenshot Screen Switcher Tabs (Clean, Apple-Style) */}
                    {activeScreenshots.length > 1 && (
                      <div className="flex items-center gap-1.5 flex-wrap justify-center pt-2 max-w-[340px]">
                        {activeScreenshots.map((screen, idx) => {
                          const isScreenActive = idx === activeScreenIndex;
                          return (
                            <button
                              key={screen.url}
                              type="button"
                              onClick={() => setActiveScreenIndex(idx)}
                              className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
                                isScreenActive
                                  ? "bg-[#38BDF8] text-[#0A1118] font-bold shadow-xs"
                                  : "bg-[#162634] text-[#7E9AA8] hover:text-[#E8F1F5] hover:bg-[#1B2F40]"
                              }`}
                            >
                              {screen.caption.split(" ")[0] || `Screen ${idx + 1}`}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Right Column (7 cols desktop): Project Narrative & Architecture Wins */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="space-y-1.5">
                      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#E8F1F5] tracking-tight">
                        {activeProject.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#38BDF8] font-medium leading-normal">
                        {activeProject.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-[#7E9AA8] leading-relaxed">
                      {activeProject.summary}
                    </p>

                    {/* Apple Bento Engineering Highlights */}
                    {activeProject.keyEngineeringDecisions && activeProject.keyEngineeringDecisions.length > 0 && (
                      <div className="space-y-2.5 pt-1">
                        <span className="text-xs font-semibold text-[#E8F1F5] uppercase tracking-wider block">
                          Architectural Decisions & Production Wins
                        </span>
                        <div className="space-y-2">
                          {activeProject.keyEngineeringDecisions.slice(0, 3).map((decision, idx) => (
                            <div
                              key={idx}
                              className="p-3 rounded-xl bg-[#070D13]/70 border border-[#219EBC]/20 flex items-start gap-3"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                              <span className="text-xs text-[#7E9AA8] leading-relaxed">{decision}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Technology Stack Badges */}
                    <div className="space-y-2 pt-1">
                      <span className="text-xs font-semibold text-[#7E9AA8] uppercase tracking-wider block">
                        Core technologies
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.primaryStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-md bg-[#162634] text-[#E8F1F5] border border-[#219EBC]/20 font-medium hover:border-[#38BDF8]/40 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons Row */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/projects/${activeProject.slug}`}
                        className="px-5 py-2.5 rounded-xl bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#0A1118] text-xs font-bold transition-all flex items-center gap-2 shadow-[0_0_16px_rgba(56,189,248,0.35)] cursor-pointer"
                      >
                        <span>Explore full case study</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      {/* App Store Button */}
                      {(activeProject.links?.appStore || activeProject.links?.duracellAppStore) && (
                        <a
                          href={activeProject.links.appStore || activeProject.links.duracellAppStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2.5 rounded-xl bg-[#162634] hover:bg-[#1B2F40] border border-[#219EBC]/25 text-[#E8F1F5] text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-2xs"
                        >
                          <span>App Store</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#38BDF8]" />
                        </a>
                      )}

                      {/* Google Play Button */}
                      {(activeProject.links?.playStore || activeProject.links?.duracellPlayStore) && (
                        <a
                          href={activeProject.links.playStore || activeProject.links.duracellPlayStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2.5 rounded-xl bg-[#162634] hover:bg-[#1B2F40] border border-[#219EBC]/25 text-[#E8F1F5] text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-2xs"
                        >
                          <span>Google Play</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#10B981]" />
                        </a>
                      )}

                      {/* Live Platform Button */}
                      {(activeProject.liveDemoUrl || activeProject.links?.demo) && (
                        <a
                          href={activeProject.liveDemoUrl || activeProject.links?.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2.5 rounded-xl bg-[#162634] hover:bg-[#1B2F40] border border-[#219EBC]/25 text-[#E8F1F5] text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-2xs"
                        >
                          <span>Live Platform</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#38BDF8]" />
                        </a>
                      )}

                      {/* GitHub Repo Button */}
                      {activeProject.githubRepoUrl && (
                        <a
                          href={activeProject.githubRepoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3.5 py-2.5 rounded-xl bg-[#162634] hover:bg-[#1B2F40] border border-[#219EBC]/25 text-[#E8F1F5] text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-2xs"
                        >
                          <span>View repository</span>
                          <ExternalLink className="w-3.5 h-3.5 text-[#7E9AA8]" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </SpotlightCard>

            {/* Clean Apple Footer Link to All Case Studies */}
            <div className="text-center pt-2">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#38BDF8] hover:text-[#7DD3FC] transition-colors"
              >
                <span>Explore all 7 production case studies & reference implementations</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* /PROJECTS CATALOG GRID (WHEN showHeader IS FALSE ON /projects ROUTE) */}
        {!showHeader && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => {
              const isEmployer = project.projectType === "employer";
              return (
                <SpotlightCard key={project.id} className="flex flex-col justify-between h-full">
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between gap-2 pb-3 border-b border-[#219EBC]/15">
                      <span className="text-xs text-[#38BDF8] font-semibold bg-[#162634] px-2.5 py-0.5 rounded-full border border-[#38BDF8]/30">
                        {project.category}
                      </span>
                      {isEmployer ? (
                        <span className="text-[11px] text-[#7E9AA8] flex items-center gap-1">
                          <Lock className="w-3 h-3 text-[#7E9AA8]" />
                          <span>Proprietary</span>
                        </span>
                      ) : (
                        <span className="text-[11px] text-[#10B981] font-semibold flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-[#10B981]" />
                          <span>Open Source</span>
                        </span>
                      )}
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#E8F1F5] hover:text-[#38BDF8] transition-colors">
                        <Link href={`/projects/${project.slug}`}>{project.title}</Link>
                      </h3>
                      <p className="text-xs text-[#7E9AA8] mt-0.5">{project.company} • {project.period}</p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#7E9AA8] leading-relaxed line-clamp-3">
                      {project.summary}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.primaryStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] px-2 py-0.5 rounded bg-[#162634] text-[#7E9AA8] border border-[#219EBC]/20 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 sm:pt-0 border-t border-[#219EBC]/15 bg-[#070D13]/40 flex items-center justify-between">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-xs font-semibold text-[#38BDF8] hover:underline flex items-center gap-1.5"
                    >
                      <span>Explore case study</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#7E9AA8] hover:text-[#E8F1F5] flex items-center gap-1"
                      >
                        <span>Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                    {project.links?.duracellAppStore && (
                      <a
                        href={project.links.duracellAppStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[#7E9AA8] hover:text-[#E8F1F5] flex items-center gap-1"
                      >
                        <span>App Store</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
