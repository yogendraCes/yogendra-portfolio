"use client";

import React, { useState } from "react";
import { skillsData } from "@/data/skills";
import { CheckCircle2, Cpu, Code2, Layers, Smartphone, GitBranch, ShieldCheck, Globe, ChevronRight } from "lucide-react";
import { SpotlightCard } from "./spotlight-card";

export function SkillsMatrix() {
  const [activeCategoryName, setActiveCategoryName] = useState<string>("Core Engineering");
  const [viewAll, setViewAll] = useState<boolean>(false);

  const activeCategory =
    skillsData.find((s) => s.category === activeCategoryName) || skillsData[0];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Core Engineering":
        return Code2;
      case "State & Data":
        return Layers;
      case "UI & Visualization":
        return Cpu;
      case "Mobile Platforms":
        return Smartphone;
      case "Engineering & Delivery":
        return GitBranch;
      case "Quality & Performance":
        return ShieldCheck;
      case "Web & Frontend":
        return Globe;
      default:
        return Code2;
    }
  };

  const ActiveIcon = getCategoryIcon(activeCategory.category);

  return (
    <section id="skills" className="w-full py-14 sm:py-20 border-b border-[#219EBC]/15 bg-[#0A1118] scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header & View Toggle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-[680px] space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#E8F1F5]">
              Technical competencies & systems depth
            </h2>
            <p className="text-sm sm:text-base text-[#7E9AA8] leading-relaxed">
              Core cross-platform frameworks, native bridge modules, telemetry charting engines, and automated deployment tooling.
            </p>
          </div>

          {/* Toggle between Apple Bento Inspector and Compact Grid */}
          <div className="inline-flex items-center bg-[#070D13] p-1 rounded-full border border-[#219EBC]/20 shrink-0">
            <button
              type="button"
              onClick={() => setViewAll(false)}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                !viewAll
                  ? "bg-[#38BDF8] text-[#0A1118] shadow-sm"
                  : "text-[#7E9AA8] hover:text-[#E8F1F5]"
              }`}
            >
              Interactive Inspector
            </button>
            <button
              type="button"
              onClick={() => setViewAll(true)}
              className={`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer ${
                viewAll
                  ? "bg-[#38BDF8] text-[#0A1118] shadow-sm"
                  : "text-[#7E9AA8] hover:text-[#E8F1F5]"
              }`}
            >
              All Matrices ({skillsData.length})
            </button>
          </div>
        </div>

        {/* INTERACTIVE APPLE BENTO INSPECTOR */}
        {!viewAll ? (
          <div className="space-y-6">
            {/* Horizontal Capsule Tab Bar */}
            <div className="overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
              <div
                role="tablist"
                aria-label="Select skill competency category"
                className="inline-flex items-center gap-1.5 p-1 rounded-full bg-[#070D13]/80 border border-[#219EBC]/20 backdrop-blur-md"
              >
                {skillsData.map((cat) => {
                  const isActive = cat.category === activeCategoryName;
                  const Icon = getCategoryIcon(cat.category);
                  return (
                    <button
                      key={cat.category}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveCategoryName(cat.category)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                        isActive
                          ? "bg-[#38BDF8] text-[#0A1118] font-bold shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                          : "text-[#7E9AA8] hover:text-[#E8F1F5] hover:bg-[#162634]/60"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{cat.category}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Apple Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Primary Active Bento Stage (7 cols) */}
              <SpotlightCard className="lg:col-span-7 border border-[#219EBC]/25 bg-[#101D28]/95 shadow-xl">
                <div className="p-6 sm:p-8 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-[#219EBC]/15">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#162634] text-[#38BDF8] flex items-center justify-center border border-[#38BDF8]/30">
                        <ActiveIcon className="w-5 h-5 text-[#38BDF8]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#E8F1F5] tracking-tight">
                          {activeCategory.category}
                        </h3>
                        <span className="text-xs text-[#38BDF8] font-medium">
                          Production verified proficiency
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                      <span>Active in releases</span>
                    </span>
                  </div>

                  {/* Technology Chips */}
                  <div className="space-y-3">
                    <span className="text-xs font-semibold text-[#7E9AA8] uppercase tracking-wider block">
                      Core Frameworks & Tools
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeCategory.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 rounded-lg bg-[#162634] text-[#E8F1F5] border border-[#219EBC]/30 text-xs font-semibold shadow-xs flex items-center gap-2 hover:border-[#38BDF8]/60 transition-colors"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
                          <span>{tech}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Production Depth & Impact Box */}
                  <div className="p-4 rounded-xl bg-[#070D13]/70 border border-[#219EBC]/20 space-y-2">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#E8F1F5]">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                        <span>Production delivery & architecture depth</span>
                      </span>
                      <span className="text-[11px] text-[#7E9AA8] font-mono">Verified standard</span>
                    </div>
                    <p className="text-xs sm:text-sm text-[#7E9AA8] leading-relaxed">
                      {activeCategory.productionDepth}
                    </p>
                  </div>
                </div>
              </SpotlightCard>

              {/* Secondary Category Quick Deck (5 cols) */}
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                {skillsData
                  .filter((cat) => cat.category !== activeCategoryName)
                  .map((cat) => {
                    const Icon = getCategoryIcon(cat.category);
                    return (
                      <button
                        key={cat.category}
                        type="button"
                        onClick={() => setActiveCategoryName(cat.category)}
                        className="text-left p-4 rounded-xl border border-[#219EBC]/20 bg-[#070D13]/60 hover:bg-[#101D28] hover:border-[#38BDF8]/40 transition-all duration-200 cursor-pointer flex items-center justify-between group"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#162634] flex items-center justify-center border border-[#219EBC]/20 text-[#7E9AA8] group-hover:text-[#38BDF8] group-hover:border-[#38BDF8]/30 transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[#E8F1F5] group-hover:text-[#38BDF8] transition-colors">
                              {cat.category}
                            </div>
                            <div className="text-[11px] text-[#7E9AA8]">
                              {cat.technologies.slice(0, 3).join(", ")}
                              {cat.technologies.length > 3 ? "..." : ""}
                            </div>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#7E9AA8] group-hover:text-[#38BDF8] group-hover:translate-x-0.5 transition-all" />
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        ) : (
          /* COMPACT ALL-SKILLS GRID */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {skillsData.map((category) => {
              const Icon = getCategoryIcon(category.category);
              return (
                <SpotlightCard key={category.category} className="h-full">
                  <div className="p-5 space-y-3 flex flex-col justify-between h-full">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between pb-2 border-b border-[#219EBC]/15">
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-[#38BDF8]" />
                          <h3 className="text-xs font-bold text-[#E8F1F5]">
                            {category.category}
                          </h3>
                        </div>
                        <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {category.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-[11px] px-2 py-0.5 rounded bg-[#162634] text-[#E8F1F5] border border-[#219EBC]/20 font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-[11px] text-[#7E9AA8] leading-relaxed pt-2 border-t border-[#219EBC]/15">
                      {category.productionDepth}
                    </p>
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
