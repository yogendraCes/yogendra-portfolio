"use client";

import React, { useState } from "react";
import { skillsData } from "@/data/skills";
import { Wrench, CheckCircle2, Filter } from "lucide-react";
import { SpotlightCard } from "./spotlight-card";

export function SkillsMatrix() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filterOptions = ["All", ...skillsData.map((s) => s.category)];

  const filteredSkills =
    selectedFilter === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === selectedFilter);

  return (
    <section id="capabilities" className="w-full py-16 sm:py-24 border-b border-[rgba(255,255,255,0.08)] bg-[#08090A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-10">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-[760px] space-y-2.5">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F3F4F6]">
              Engineering Capabilities & Stack
            </h2>
            <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
              Core cross-platform frameworks, native bridge modules, data visualization engines, and automated deployment tooling.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none py-1">
            <Filter className="w-3.5 h-3.5 text-[#9CA3AF] shrink-0 mr-0.5" />
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setSelectedFilter(option)}
                className={`px-3.5 py-2 rounded-lg font-mono text-xs font-medium whitespace-nowrap transition-all border cursor-pointer min-h-[40px] flex items-center ${
                  selectedFilter === option
                    ? "bg-[#D97706] text-[#08090A] border-[#D97706] font-bold shadow-md shadow-amber-950/40"
                    : "bg-[#16181D] text-[#9CA3AF] border-[rgba(255,255,255,0.08)] hover:text-[#F3F4F6] hover:border-zinc-700 hover:bg-[#1C1F26]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((category) => (
            <SpotlightCard key={category.category} className="h-full">
              <div className="p-6 space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[rgba(255,255,255,0.06)]">
                    <h3 className="font-mono text-sm font-bold text-[#F3F4F6] uppercase tracking-wider">
                      {category.category}
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  </div>

                  {/* Technologies List */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-2.5 py-1 rounded-md bg-[#16181D] text-[#F3F4F6] border border-[rgba(255,255,255,0.08)] hover:border-[#D97706]/40 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ownership Experience Box */}
                <div className="pt-4 border-t border-[rgba(255,255,255,0.06)] text-xs text-[#9CA3AF] space-y-1">
                  <div className="font-mono text-[10px] text-[#D97706] uppercase tracking-wider font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>PRODUCTION OWNERSHIP</span>
                  </div>
                  <p className="leading-relaxed font-sans">{category.productionDepth}</p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
