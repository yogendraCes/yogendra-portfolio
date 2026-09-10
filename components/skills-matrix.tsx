"use client";

import React, { useState } from "react";
import { skillsData } from "@/data/skills";
import { CheckCircle2, Filter } from "lucide-react";
import { SpotlightCard } from "./spotlight-card";

export function SkillsMatrix() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");

  const filterOptions = ["All", ...skillsData.map((s) => s.category)];

  const filteredSkills =
    selectedFilter === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === selectedFilter);

  return (
    <section id="skills" className="w-full py-14 sm:py-20 border-b border-[#E4E5E1] bg-[#F3F4F1]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-[680px] space-y-2">
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#14161A]">
              Skills & technical depth
            </h2>
            <p className="text-sm sm:text-base text-[#5B5F66] leading-relaxed">
              Core cross-platform frameworks, native bridge modules, telemetry charting engines, and automated deployment tooling.
            </p>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 py-1">
            <Filter className="w-3.5 h-3.5 text-[#7E8490] shrink-0 mr-0.5" />
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setSelectedFilter(option)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all border cursor-pointer min-h-[38px] flex items-center shadow-2xs ${
                  selectedFilter === option
                    ? "bg-[#2F6FED] text-white border-[#2F6FED] font-semibold"
                    : "bg-white text-[#5B5F66] border-[#E4E5E1] hover:text-[#14161A] hover:bg-[#F3F4F1]"
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
                  <div className="flex items-center justify-between pb-2 border-b border-[#E4E5E1]">
                    <h3 className="text-sm font-semibold text-[#14161A]">
                      {category.category}
                    </h3>
                    <span className="w-2 h-2 rounded-full bg-[#3FAE64]" />
                  </div>

                  {/* Technologies List */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {category.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-md bg-[#F3F4F1] text-[#14161A] border border-[#E4E5E1]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ownership Experience Box */}
                <div className="pt-4 border-t border-[#E4E5E1] text-xs text-[#5B5F66] space-y-1">
                  <div className="text-xs text-[#14161A] font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3FAE64]" />
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
