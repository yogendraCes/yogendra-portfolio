import React from "react";
import { experienceData } from "@/data/experience";
import { Calendar, MapPin, CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full py-14 sm:py-20 border-b border-[#E4E5E1] bg-[#F3F4F1]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-[680px] space-y-2">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#14161A]">
            Work history & career progression
          </h2>
          <p className="text-sm sm:text-base text-[#5B5F66] leading-relaxed">
            Over 6 years of verified engineering experience, scaling cross-platform React Native systems from initial native modules at Forebear Productions to production telemetry architectures at Cloud Energy Software.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-10 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-[2px] before:bg-[#E4E5E1]">
          {experienceData.map((exp) => {
            const isCurrent = exp.isCurrent;

            return (
              <div key={exp.id} className="relative pl-8 sm:pl-12 space-y-4 group">
                {/* Timeline Dot */}
                <span
                  className={`absolute left-[7px] sm:left-[11px] top-3 w-3 h-3 rounded-full transition-colors ${
                    isCurrent
                      ? "bg-[#2F6FED] ring-4 ring-[#2F6FED]/20"
                      : "bg-white border-2 border-[#7E8490] group-hover:border-[#2F6FED]"
                  }`}
                />

                {/* Primary Card */}
                <div
                  className={`rounded-2xl p-6 sm:p-8 space-y-6 bg-white border transition-all shadow-xs ${
                    isCurrent
                      ? "border-[#2F6FED]/40 hover:border-[#2F6FED]/70 shadow-sm"
                      : "border-[#E4E5E1] hover:border-[#D1D3CD]"
                  }`}
                >
                  {/* Header Info */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-[#E4E5E1]">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl sm:text-2xl font-semibold text-[#14161A]">{exp.role}</h3>
                        {isCurrent && (
                          <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-[#3FAE64]/10 text-[#3FAE64] border border-[#3FAE64]/25 font-medium">
                            <Sparkles className="w-3 h-3" />
                            Current role
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-0.5">
                        <span className="text-sm text-[#2F6FED] font-medium">{exp.company}</span>
                        {exp.subLabel && (
                          <span className="text-xs px-2 py-0.5 rounded-md bg-[#F3F4F1] text-[#5B5F66] border border-[#E4E5E1]">
                            {exp.subLabel}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#5B5F66]">
                      <span className="flex items-center gap-1.5 bg-[#F3F4F1] px-2.5 py-1 rounded-md border border-[#E4E5E1] text-[#14161A] font-medium">
                        <Calendar className="w-3.5 h-3.5 text-[#2F6FED]" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#7E8490]" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Scope */}
                  <div className="border-l-2 border-[#2F6FED] pl-4 py-1 space-y-1">
                    <span className="text-xs text-[#2F6FED] font-medium block">
                      Engagement scope
                    </span>
                    <p className="text-sm text-[#14161A] leading-relaxed">
                      {exp.scope}
                    </p>
                  </div>

                  {/* Standard Responsibilities (for Single Role like CES) */}
                  {exp.responsibilities && (
                    <div className="space-y-3">
                      <div className="text-xs font-medium text-[#7E8490]">
                        Key responsibilities & deliverables
                      </div>
                      <ul className="grid grid-cols-1 gap-2.5">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#5B5F66] leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#3FAE64] shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Sub-Phases Progression (for Forebear Grouped Role) */}
                  {exp.phases && (
                    <div className="space-y-4 pt-2">
                      <div className="text-xs text-[#14161A] font-medium border-b border-[#E4E5E1] pb-2 flex items-center gap-1.5">
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#2F6FED]" />
                        <span>Tenure stages & progression</span>
                      </div>

                      <div className="space-y-3 pl-2 sm:pl-4 border-l-2 border-[#E4E5E1]">
                        {exp.phases.map((phase, idx) => (
                          <div
                            key={phase.id}
                            className={`p-4 sm:p-5 rounded-xl border space-y-3 transition-all ${
                              idx === 0
                                ? "bg-[#F3F4F1] border-[#2F6FED]/30 shadow-2xs"
                                : "bg-white border-[#E4E5E1]"
                            }`}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <div className="space-y-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <h4 className="text-sm sm:text-base font-semibold text-[#14161A]">{phase.title}</h4>
                                  <span className="text-xs px-2 py-0.5 rounded-md bg-white text-[#3FAE64] border border-[#3FAE64]/20 font-medium">
                                    {phase.badge}
                                  </span>
                                </div>
                              </div>
                              <span className="text-xs text-[#2F6FED] font-medium shrink-0">
                                {phase.period}
                              </span>
                            </div>

                            {phase.scope && (
                              <p className="text-xs text-[#5B5F66] italic">{phase.scope}</p>
                            )}

                            <ul className="space-y-2">
                              {phase.responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-xs text-[#5B5F66] leading-relaxed">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3FAE64] shrink-0 mt-0.5" />
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
