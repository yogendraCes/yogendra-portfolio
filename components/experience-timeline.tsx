import React from "react";
import { experienceData } from "@/data/experience";
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full py-16 sm:py-24 border-b border-[rgba(255,255,255,0.08)] bg-[#0F1115]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="max-w-[760px] space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D97706] tracking-wider uppercase">
            <Briefcase className="w-4 h-4" />
            <span>CAREER PROGRESSION</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F3F4F6]">
            Work History & Progression
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
            Over 6 years of verified engineering experience, demonstrating progression from initial mobile development at Forebear Productions to client contract staffing and permanent software engineering at Cloud Energy Software.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-10 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-[2px] before:bg-[rgba(255,255,255,0.08)]">
          {experienceData.map((exp) => {
            const isCurrent = exp.isCurrent;

            return (
              <div key={exp.id} className="relative pl-8 sm:pl-12 space-y-4 group">
                {/* Timeline Dot */}
                <span
                  className={`absolute left-[7px] sm:left-[11px] top-2.5 w-3 h-3 rounded-full transition-colors ${
                    isCurrent
                      ? "bg-[#D97706] ring-4 ring-[#D97706]/20"
                      : "bg-[#0F1115] border-2 border-[#D97706] group-hover:bg-[#D97706]"
                  }`}
                />

                {/* Primary Card */}
                <div
                  className={`rounded-xl p-6 sm:p-8 space-y-6 transition-all ${
                    isCurrent
                      ? "bg-[#0D0F12] border-2 border-[#D97706]/40 shadow-xl shadow-amber-950/10 hover:border-[#D97706]/60"
                      : "bg-[#08090A] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(255,255,255,0.16)]"
                  }`}
                >
                  {/* Header Info */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-[rgba(255,255,255,0.06)]">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#F3F4F6]">{exp.role}</h3>
                        {isCurrent && (
                          <span className="inline-flex items-center gap-1 font-mono text-[10px] px-2 py-0.5 rounded bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/30 font-bold uppercase tracking-wider">
                            <Sparkles className="w-3 h-3" />
                            CURRENT ROLE
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-0.5">
                        <span className="font-mono text-sm text-[#D97706] font-semibold">{exp.company}</span>
                        {exp.subLabel && (
                          <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-[#16181D] text-[#9CA3AF] border border-[rgba(255,255,255,0.08)] font-medium">
                            {exp.subLabel}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#9CA3AF]">
                      <span className="flex items-center gap-1.5 bg-[#1C1F26] px-2.5 py-1 rounded border border-[rgba(255,255,255,0.08)] text-[#F3F4F6] font-semibold">
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
                  <p className="text-sm text-[#F3F4F6] font-medium leading-relaxed bg-[#16181D] p-4 rounded-lg border border-[rgba(255,255,255,0.06)] max-w-[900px]">
                    <span className="font-mono text-xs text-[#D97706] uppercase tracking-wider block mb-1">
                      ENGAGEMENT SCOPE:
                    </span>
                    {exp.scope}
                  </p>

                  {/* Standard Responsibilities (for Single Role like CES) */}
                  {exp.responsibilities && (
                    <div className="space-y-3">
                      <div className="font-mono text-xs text-[#6B7280] uppercase tracking-wider">
                        KEY RESPONSIBILITIES & DELIVERABLES
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
                  )}

                  {/* Sub-Phases Progression (for Forebear Grouped Role) */}
                  {exp.phases && (
                    <div className="space-y-6 pt-2">
                      <div className="font-mono text-xs text-[#D97706] uppercase tracking-wider font-semibold border-b border-[rgba(255,255,255,0.06)] pb-2 flex items-center gap-2">
                        <ArrowUpRight className="w-4 h-4 text-[#D97706]" />
                        <span>TENURE STAGES & PROGRESSION</span>
                      </div>

                      <div className="space-y-4 pl-2 sm:pl-4 border-l-2 border-[rgba(255,255,255,0.08)]">
                        {exp.phases.map((phase, idx) => (
                          <div
                            key={phase.id}
                            className={`p-4 sm:p-5 rounded-lg border space-y-3 transition-all ${
                              idx === 0
                                ? "bg-[#121419] border-[#D97706]/30 hover:border-[#D97706]/50"
                                : "bg-[#0D0E11] border-[rgba(255,255,255,0.06)] opacity-90"
                            }`}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <div className="space-y-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <h4 className="text-sm sm:text-base font-bold text-[#F3F4F6]">{phase.title}</h4>
                                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#16181D] text-[#10B981] border border-[rgba(16,185,129,0.2)] font-medium">
                                    {phase.badge}
                                  </span>
                                </div>
                              </div>
                              <span className="font-mono text-xs text-[#D97706] font-semibold shrink-0">
                                {phase.period}
                              </span>
                            </div>

                            {phase.scope && (
                              <p className="text-xs text-[#9CA3AF] italic">{phase.scope}</p>
                            )}

                            <ul className="space-y-2">
                              {phase.responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-xs text-[#9CA3AF] leading-relaxed">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
