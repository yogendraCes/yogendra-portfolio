"use client";

import React, { useState } from "react";
import { skillsData } from "@/data/skills";
import { CheckCircle2, Filter } from "lucide-react";
import { SpotlightCard } from "./spotlight-card";
import { SlidingPillTabs } from "./ui/sliding-pill-tabs";

export function SkillsMatrix() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filterOptions = ["All", ...skillsData.map((s) => s.category)];
  const tabOptions = filterOptions.map((opt) => ({ id: opt, label: opt }));

  const filteredSkills =
    selectedFilter === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === selectedFilter);

  return (
    <section id="skills" className="w-full py-14 sm:py-20 border-b border-[#219EBC]/15 bg-[#0A1118]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-[680px] space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#E8F1F5]">
              Skills & technical depth
            </h2>
            <p className="text-sm sm:text-base text-[#7E9AA8] leading-relaxed">
              Core cross-platform frameworks, native bridge modules, telemetry charting engines, and automated deployment tooling.
            </p>
          </div>

          {/* Interactive Category Filter Pills with Sliding Spring Indicator */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 py-1">
            <Filter className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mr-1" />
            <SlidingPillTabs
              options={tabOptions}
              activeId={selectedFilter}
              onChange={setSelectedFilter}
              size="md"
            />
          </div>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((category) => (
            <SpotlightCard key={category.category} className="h-full">
              <div className="p-6 space-y-4 flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-[#219EBC]/15">
                    <h3 className="text-sm font-bold text-[#E8F1F5]">
                      {category.category}
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                  </div>

                  {/* Technologies List */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-[#162634] text-[#7E9AA8] border border-[#219EBC]/20 font-medium hover:text-[#E8F1F5]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ownership Experience Box */}
                <div className="pt-4 border-t border-[#219EBC]/15 text-xs text-[#7E9AA8] space-y-1">
                  <div className="text-xs text-[#E8F1F5] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>Production ownership</span>
                  </div>
                  <p className="leading-relaxed">{category.productionDepth}</p>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
}
