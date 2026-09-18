import React from "react";
import { experienceData } from "@/data/experience";
import { Calendar, MapPin, CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full py-14 sm:py-20 border-b border-[#219EBC]/15 bg-[#0A1118]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-[680px] space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#E8F1F5]">
            Work history & career progression
          </h2>
          <p className="text-sm sm:text-base text-[#7E9AA8] leading-relaxed">
            Over 6 years of verified engineering experience, scaling cross-platform React Native systems from initial native modules at Forebear Productions to production telemetry architectures at Cloud Energy Software.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-10 relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-[2px] before:bg-[#219EBC]/20">
          {experienceData.map((exp) => {
            const isCurrent = exp.isCurrent;

            return (
              <div key={exp.id} className="relative pl-8 sm:pl-12 space-y-4 group">
                {/* Timeline Dot */}
                <span
                  className={`absolute left-[7px] sm:left-[11px] top-3 w-3 h-3 rounded-full transition-colors ${
                    isCurrent
                      ? "bg-[#38BDF8] ring-4 ring-[#38BDF8]/30 shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                      : "bg-[#0A1118] border-2 border-[#219EBC]/40 group-hover:border-[#38BDF8]"
                  }`}
                />

                {/* Primary Card */}
                <div
                  className={`rounded-2xl p-6 sm:p-8 space-y-6 bg-[#101D28] border transition-all shadow-xs ${
                    isCurrent
                      ? "border-[#38BDF8]/40 shadow-sm"
                      : "border-[#219EBC]/20 hover:border-[#38BDF8]/35"
                  }`}
                >
                  {/* Header Info */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-4 border-b border-[#219EBC]/15">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#E8F1F5]">{exp.role}</h3>
                        {isCurrent && (
                          <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 font-semibold">
                            <Sparkles className="w-3 h-3" />
                            Current role
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-0.5">
                        <span className="text-sm text-[#38BDF8] font-bold">{exp.company}</span>
                        {exp.subLabel && (
                          <span className="text-xs px-2 py-0.5 rounded-md bg-[#162634] text-[#7E9AA8] border border-[#219EBC]/20 font-medium">
                            {exp.subLabel}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#7E9AA8]">
                      <span className="flex items-center gap-1.5 bg-[#162634] px-2.5 py-1 rounded-md border border-[#219EBC]/20 text-[#E8F1F5] font-semibold">
                        <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-[#7E9AA8]" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Scope */}
                  <div className="border-l-2 border-[#38BDF8] pl-4 py-1 space-y-1">
                    <span className="text-xs text-[#38BDF8] font-bold block uppercase tracking-wider">
                      Engagement scope
                    </span>
                    <p className="text-sm text-[#7E9AA8] leading-relaxed">
                      {exp.scope}
                    </p>
                  </div>

                  {/* Standard Responsibilities (for Single Role like CES) */}
                  {exp.responsibilities && (
                    <div className="space-y-3">
                      <div className="text-xs font-semibold text-[#7E9AA8] uppercase tracking-wider">
                        Key responsibilities & deliverables
                      </div>
                      <ul className="grid grid-cols-1 gap-2.5">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-[#7E9AA8] leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Sub-Phases Progression (for Forebear Grouped Role) */}
                  {exp.phases && (
                    <div className="space-y-4 pt-2">
                      <div className="text-xs text-[#E8F1F5] font-semibold border-b border-[#219EBC]/15 pb-2 flex items-center gap-1.5">
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#38BDF8]" />
                        <span>Tenure stages & progression</span>
                      </div>

                      <div className="space-y-3 pl-2 sm:pl-4 border-l-2 border-[#219EBC]/20">
                        {exp.phases.map((phase, idx) => (
                          <div
                            key={phase.id}
                            className={`p-4 sm:p-5 rounded-xl border space-y-3 transition-all ${
                              idx === 0
                                ? "bg-[#162634] border-[#38BDF8]/30 shadow-xs"
                                : "bg-[#0A1118] border-[#219EBC]/20"
                            }`}
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <div className="space-y-1">
                                <div className="flex flex-wrap items-center gap-2">
                                  <h4 className="text-sm sm:text-base font-bold text-[#E8F1F5]">{phase.title}</h4>
                                  <span className="text-xs px-2 py-0.5 rounded-md bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/25 font-semibold">
                                    {phase.badge}
                                  </span>
                                </div>
                              </div>
                              <span className="text-xs text-[#38BDF8] font-bold shrink-0">
                                {phase.period}
                              </span>
                            </div>

                            {phase.scope && (
                              <p className="text-xs text-[#7E9AA8] italic">{phase.scope}</p>
                            )}

                            <ul className="space-y-2">
                              {phase.responsibilities.map((resp, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-xs text-[#7E9AA8] leading-relaxed">
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
