import React from "react";
import { experienceData } from "@/data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full py-16 sm:py-24 border-b border-[rgba(255,255,255,0.08)] bg-[#0F1115]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="max-w-[760px] space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D97706] tracking-wider uppercase">
            <Briefcase className="w-4 h-4" />
            <span>PROVEN TRACK RECORD</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F3F4F6]">
            Professional Work History & Achievements
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
            Over 5 years of verified experience building, shipping, and maintaining production mobile applications across full-time and embedded contract roles.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-[2px] before:bg-[rgba(255,255,255,0.08)]">
          {experienceData.map((exp) => (
            <div key={exp.id} className="relative pl-8 sm:pl-12 space-y-4 group">
              {/* Timeline Dot */}
              <span className="absolute left-[7px] sm:left-[11px] top-1.5 w-3 h-3 rounded-full bg-[#0F1115] border-2 border-[#D97706] group-hover:bg-[#D97706] transition-colors" />

              <div className="bg-[#08090A] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 sm:p-8 space-y-6 hover:border-[rgba(255,255,255,0.16)] transition-all">
                {/* Header Info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-[rgba(255,255,255,0.06)]">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#F3F4F6]">{exp.role}</h3>
                    <div className="font-mono text-sm text-[#D97706] font-semibold mt-0.5">{exp.company}</div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#9CA3AF]">
                    <span className="flex items-center gap-1.5 bg-[#1C1F26] px-2.5 py-1 rounded border border-[rgba(255,255,255,0.08)]">
                      <Calendar className="w-3.5 h-3.5 text-[#D97706]" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#9CA3AF]" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Scope */}
                <p className="text-sm sm:text-base text-[#F3F4F6] font-medium leading-relaxed bg-[#16181D] p-4 rounded-lg border border-[rgba(255,255,255,0.06)] max-w-[900px]">
                  <span className="font-mono text-xs text-[#D97706] uppercase tracking-wider block mb-1">
                    ROLE SCOPE & RESPONSIBILITY:
                  </span>
                  {exp.scope}
                </p>

                {/* Technical Responsibilities Checklist */}
                <div className="space-y-3">
                  <div className="font-mono text-xs text-[#6B7280] uppercase tracking-wider">
                    KEY TECHNICAL ACHIEVEMENTS & DELIVERABLES
                  </div>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
