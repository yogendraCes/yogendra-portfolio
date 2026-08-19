import React from "react";
import { skillsData } from "@/data/skills";
import { Wrench, CheckCircle2 } from "lucide-react";

export function SkillsMatrix() {
  return (
    <section id="capabilities" className="w-full py-16 sm:py-24 border-b border-[rgba(255,255,255,0.08)] bg-[#08090A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="max-w-[760px] space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D97706] tracking-wider uppercase">
            <Wrench className="w-4 h-4" />
            <span>TECHNICAL CAPABILITY MATRIX</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F3F4F6]">
            Production Tooling & Engineering Depth
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
            Categorized technical capabilities and hands-on production depth across full-lifecycle React Native mobile application development.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category) => (
            <div
              key={category.category}
              className="p-6 rounded-xl bg-[#0F1115] border border-[rgba(255,255,255,0.08)] space-y-4 flex flex-col justify-between hover:border-[rgba(255,255,255,0.16)] transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-[rgba(255,255,255,0.06)]">
                  <h3 className="font-mono text-sm font-bold text-[#F3F4F6] uppercase tracking-wider">
                    {category.category}
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                </div>

                {/* Technologies List */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {category.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-[#1C1F26] text-[#F3F4F6] border border-[rgba(255,255,255,0.08)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Production Depth Box */}
              <div className="pt-4 border-t border-[rgba(255,255,255,0.06)] text-xs text-[#9CA3AF] space-y-1">
                <div className="font-mono text-[10px] text-[#D97706] uppercase tracking-wider font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                  <span>PRODUCTION OWNERSHIP DEPTH</span>
                </div>
                <p className="leading-relaxed font-sans">{category.productionDepth}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
