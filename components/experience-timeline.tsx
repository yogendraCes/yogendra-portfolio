"use client";

import React, { useState } from "react";
import Link from "next/link";
import { experienceData } from "@/data/experience";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Briefcase,
  Layers,
  Award,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { SpotlightCard } from "./spotlight-card";

export function ExperienceTimeline() {
  const [selectedCompanyId, setSelectedCompanyId] = useState<string>("ces-software-developer");
  const [forebearPhaseId, setForebearPhaseId] = useState<string>("forebear-ces-contract-phase");

  const currentExp =
    experienceData.find((exp) => exp.id === selectedCompanyId) || experienceData[0];

  return (
    <section id="experience" className="w-full py-14 sm:py-20 border-b border-[#219EBC]/15 bg-[#0A1118] scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-[680px] space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#E8F1F5]">
              Career progression & work history
            </h2>
            <p className="text-sm sm:text-base text-[#7E9AA8] leading-relaxed">
              Over 6 years of verified engineering experience, scaling cross-platform React Native systems from initial native modules at Forebear Productions to production telemetry architectures at Cloud Energy Software.
            </p>
          </div>

          <Link
            href="/resume"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#38BDF8] hover:underline"
          >
            <span>View complete verified resume</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Apple-Style Company Segmented Control */}
        <div className="overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-none">
          <div
            role="tablist"
            aria-label="Select company to view career milestones"
            className="inline-flex items-center gap-1.5 p-1 rounded-full bg-[#070D13]/80 border border-[#219EBC]/20 backdrop-blur-md"
          >
            {experienceData.map((exp) => {
              const isActive = exp.id === selectedCompanyId;
              return (
                <button
                  key={exp.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCompanyId(exp.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? "bg-[#38BDF8] text-[#0A1118] font-bold shadow-[0_0_12px_rgba(56,189,248,0.35)]"
                      : "text-[#7E9AA8] hover:text-[#E8F1F5] hover:bg-[#162634]/60"
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5" />
                  <span>{exp.company}</span>
                  {exp.isCurrent ? (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-[#0A1118]/25 text-[#0A1118] font-bold"
                          : "bg-[#10B981]/20 text-[#10B981] font-medium"
                      }`}
                    >
                      Current Lead
                    </span>
                  ) : (
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full ${
                        isActive
                          ? "bg-[#0A1118]/25 text-[#0A1118] font-bold"
                          : "bg-[#162634] text-[#7E9AA8]"
                      }`}
                    >
                      2020 – 2023
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Center Stage: Active Company Spotlight Card */}
        <SpotlightCard className="overflow-hidden border border-[#219EBC]/25 bg-[#101D28]/95 shadow-xl transition-all duration-300">
          <div className="p-6 sm:p-8 space-y-6">
            {/* Header info */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-[#219EBC]/15">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-[#E8F1F5]">
                    {currentExp.role}
                  </h3>
                  {currentExp.isCurrent && (
                    <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-[#10B981]/15 text-[#10B981] border border-[#10B981]/30 font-semibold">
                      <Sparkles className="w-3 h-3" />
                      Permanent direct employee
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-[#38BDF8] font-bold text-sm">{currentExp.company}</span>
                  {currentExp.subLabel && (
                    <span className="text-[#7E9AA8] bg-[#162634] px-2.5 py-0.5 rounded-md border border-[#219EBC]/20">
                      {currentExp.subLabel}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs text-[#7E9AA8]">
                <span className="flex items-center gap-1.5 bg-[#162634] px-3 py-1.5 rounded-lg border border-[#219EBC]/20 text-[#E8F1F5] font-semibold">
                  <Calendar className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>{currentExp.period}</span>
                </span>
                <span className="flex items-center gap-1.5 bg-[#162634] px-3 py-1.5 rounded-lg border border-[#219EBC]/20">
                  <MapPin className="w-3.5 h-3.5 text-[#7E9AA8]" />
                  <span>{currentExp.location}</span>
                </span>
              </div>
            </div>

            {/* High-Impact 3-Metric KPI Bar */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {currentExp.id === "ces-software-developer" ? (
                <>
                  <div className="p-3.5 rounded-xl bg-[#070D13]/70 border border-[#219EBC]/20 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#38BDF8]">
                      <Award className="w-3.5 h-3.5" />
                      <span>Flagship Architecture</span>
                    </div>
                    <p className="text-xs text-[#7E9AA8] leading-normal">
                      Duracell Energy iOS & Android lead, handling live telemetry & real-time node flow.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#070D13]/70 border border-[#219EBC]/20 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#10B981]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Team Leadership</span>
                    </div>
                    <p className="text-xs text-[#7E9AA8] leading-normal">
                      Mentored 5 junior developers; established PR reviews and production TypeScript boundaries.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#070D13]/70 border border-[#219EBC]/20 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#38BDF8]">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Release Engineering</span>
                    </div>
                    <p className="text-xs text-[#7E9AA8] leading-normal">
                      Single-command Fastlane Match pipelines for automated TestFlight and Play Store releases.
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="p-3.5 rounded-xl bg-[#070D13]/70 border border-[#219EBC]/20 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#38BDF8]">
                      <Award className="w-3.5 h-3.5" />
                      <span>3 Production Apps</span>
                    </div>
                    <p className="text-xs text-[#7E9AA8] leading-normal">
                      Shipped Puredrive Energy, Stain Care Pro, and SDGme across iOS and Android stores.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#070D13]/70 border border-[#219EBC]/20 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#10B981]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Client Staffing to CES</span>
                    </div>
                    <p className="text-xs text-[#7E9AA8] leading-normal">
                      Full-time contract staffing as primary mobile dev, leading to direct permanent conversion.
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#070D13]/70 border border-[#219EBC]/20 space-y-1">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#38BDF8]">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Telemetry Optimization</span>
                    </div>
                    <p className="text-xs text-[#7E9AA8] leading-normal">
                      Isolated 10-second polling state selectors to prevent full component tree re-renders.
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Scope Summary */}
            <div className="p-4 rounded-xl bg-[#070D13]/50 border border-[#219EBC]/15 text-xs sm:text-sm text-[#7E9AA8] leading-relaxed">
              <span className="font-semibold text-[#E8F1F5] block mb-1">Engagement summary:</span>
              {currentExp.scope}
            </div>

            {/* Sub-phase toggle for Forebear Productions */}
            {currentExp.phases && (
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-[#7E9AA8]">Career phase:</span>
                  <div className="inline-flex items-center bg-[#070D13] p-0.5 rounded-lg border border-[#219EBC]/20">
                    {currentExp.phases.map((phase) => {
                      const isPhaseActive = phase.id === forebearPhaseId;
                      return (
                        <button
                          key={phase.id}
                          type="button"
                          onClick={() => setForebearPhaseId(phase.id)}
                          className={`px-3 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                            isPhaseActive
                              ? "bg-[#38BDF8] text-[#0A1118]"
                              : "text-[#7E9AA8] hover:text-[#E8F1F5]"
                          }`}
                        >
                          {phase.title.includes("Contract")
                            ? "Contract Staffing at CES (2021–2023)"
                            : "Direct Foundations (2020–2021)"}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Active Phase Responsibilities */}
                {(() => {
                  const activePhase =
                    currentExp.phases.find((p) => p.id === forebearPhaseId) ||
                    currentExp.phases[0];
                  return (
                    <div className="space-y-3 p-4 rounded-xl bg-[#070D13]/60 border border-[#219EBC]/20">
                      <div className="text-xs font-semibold text-[#E8F1F5] flex items-center justify-between">
                        <span>{activePhase.title}</span>
                        <span className="text-[11px] text-[#38BDF8] font-mono">{activePhase.period}</span>
                      </div>
                      <p className="text-xs text-[#7E9AA8] leading-relaxed">{activePhase.scope}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-1">
                        {activePhase.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#7E9AA8] leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* Standard Responsibilities (for Cloud Energy Software) */}
            {currentExp.responsibilities && (
              <div className="space-y-3 pt-2">
                <div className="text-xs font-semibold text-[#E8F1F5]">
                  Key deliverables & production contributions:
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {currentExp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#7E9AA8] leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Footer Action */}
            <div className="pt-4 border-t border-[#219EBC]/15 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-[#7E9AA8]">
                Full timeline with recommendation letters and official credentials available on resume.
              </span>
              <Link
                href="/resume"
                className="px-3.5 py-1.5 rounded-lg bg-[#162634] hover:bg-[#1B2F40] border border-[#219EBC]/25 text-[#E8F1F5] text-xs font-semibold transition-colors flex items-center gap-1.5"
              >
                <span>View verified resume</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#38BDF8]" />
              </Link>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
}
