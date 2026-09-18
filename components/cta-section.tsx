"use client";

import React, { useState } from "react";
import { profileData, isValidSocialUrl } from "@/data/profile";
import { Mail, Download, CheckCircle2, Layers, Cpu, Wrench, ShieldCheck, Rocket, Copy, Check } from "lucide-react";
import { SpotlightCard } from "./spotlight-card";

export function CTASection() {
  const [copied, setCopied] = useState(false);
  const hasLinkedIn = isValidSocialUrl(profileData.linkedin);
  const hasGitHub = isValidSocialUrl(profileData.github);
  const hasUpwork = isValidSocialUrl(profileData.upwork);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profileData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const capabilities = [
    {
      action: "Build",
      label: "Greenfield applications",
      description: "Build React Native apps from initial architecture to App Store launch.",
      icon: Layers,
    },
    {
      action: "Extend",
      label: "Feature development",
      description: "Integrate real-time telemetry, custom D3.js + SVG charts, and state modules.",
      icon: Cpu,
    },
    {
      action: "Fix",
      label: "Performance & stability",
      description: "Eliminate UI thread lag, memory leaks, API desync, and crash bottlenecks.",
      icon: Wrench,
    },
    {
      action: "Lead",
      label: "Codebase ownership",
      description: "Provide senior technical leadership and refactoring for active codebases.",
      icon: ShieldCheck,
    },
    {
      action: "Ship",
      label: "Store release & CI/CD",
      description: "Automate iOS TestFlight and Google Play deployment via Fastlane Match pipelines.",
      icon: Rocket,
    },
  ];

  return (
    <section id="contact" className="w-full py-14 sm:py-20 border-b border-[#219EBC]/15 bg-[#0A1118] relative">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-[680px] space-y-2">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#E8F1F5]">
            Have a mobile app to build, fix, or ship?
          </h2>
          <p className="text-sm sm:text-base text-[#7E9AA8] leading-relaxed">
            Whether initializing a greenfield React Native app, scaling real-time telemetry features, profiling performance bottlenecks, or taking over an active codebase, I deliver senior engineering ownership.
          </p>
        </div>

        {/* Dual Outreach Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Channel 1: Client & Contract Solutions */}
          <SpotlightCard className="lg:col-span-7 h-full">
            <div className="p-6 sm:p-8 space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] shadow-[0_0_6px_rgba(56,189,248,0.6)]" />
                    <h3 className="text-xl font-semibold text-[#E8F1F5] tracking-tight">Contracting & consulting</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#7E9AA8] leading-relaxed">
                    Senior React Native engineering solutions tailored for founders, product managers, and active development teams.
                  </p>
                </div>

                {/* 5 Core Capabilities List */}
                <div className="space-y-2.5 pt-1">
                  {capabilities.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.action}
                        className="p-3.5 rounded-xl bg-[#070D13] border border-[#219EBC]/20 flex items-start gap-3 hover:border-[#38BDF8]/40 transition-colors"
                      >
                        <div className="w-7 h-7 rounded-lg bg-[#162634] text-[#38BDF8] flex items-center justify-center shrink-0 mt-0.5 border border-[#219EBC]/20 shadow-2xs">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="space-y-0.5 min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[11px] font-semibold px-1.5 py-0.5 rounded bg-[#162634] text-[#38BDF8] border border-[#38BDF8]/30">
                              {item.action}
                            </span>
                            <span className="font-semibold text-xs text-[#E8F1F5]">{item.label}</span>
                          </div>
                          <p className="text-xs text-[#7E9AA8] leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 border-t border-[#219EBC]/15 space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`mailto:${profileData.email}?subject=React%20Native%20Project%20Inquiry`}
                    className="flex-1 h-12 rounded-xl bg-[#38BDF8] text-[#0A1118] text-sm font-semibold hover:bg-[#7DD3FC] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.25)] cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-[#0A1118]" aria-hidden="true" />
                    <span>Start a project discussion</span>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="h-12 px-4 rounded-xl bg-[#162634] text-[#E8F1F5] text-xs font-medium border border-[#219EBC]/25 hover:bg-[#1B2F40] transition-all flex items-center justify-center gap-2 shrink-0 cursor-pointer shadow-2xs"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 text-[#10B981]" />
                        <span className="text-[#10B981] font-semibold">Email copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 text-[#7E9AA8]" />
                        <span>Copy email</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="text-xs text-[#7E9AA8] text-center">
                  Direct email response. Flexible contract and project pricing.
                </div>
              </div>
            </div>
          </SpotlightCard>

          {/* Channel 2: Technical Recruiters & Senior Role Hiring */}
          <SpotlightCard className="lg:col-span-5 h-full">
            <div className="p-6 sm:p-8 space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] shadow-[0_0_6px_rgba(56,189,248,0.6)]" />
                    <h3 className="text-xl font-semibold text-[#E8F1F5] tracking-tight">Senior engineering roles</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#7E9AA8] leading-relaxed">
                    Available for full-time Senior React Native Developer and Lead Mobile Architect positions worldwide.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#070D13] border border-[#219EBC]/20 space-y-3">
                  <div className="text-xs text-[#E8F1F5] font-semibold">Candidate summary:</div>
                  <ul className="space-y-2 text-xs text-[#7E9AA8]">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>6+ years of verified React Native experience</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>Production iOS & Android store deployments</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>Custom D3.js + SVG graphics & state isolation</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>Automated Fastlane CI/CD release engineering</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#219EBC]/15 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href={`mailto:${profileData.email}?subject=Senior%20React%20Native%20Role%20Inquiry`}
                    className="h-12 rounded-xl bg-[#162634] text-[#E8F1F5] text-xs font-semibold border border-[#219EBC]/25 hover:bg-[#1B2F40] transition-all flex items-center justify-center gap-2 shadow-2xs"
                  >
                    <Mail className="w-4 h-4 text-[#38BDF8]" aria-hidden="true" />
                    <span>Email directly</span>
                  </a>
                  <a
                    href={profileData.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-12 rounded-xl bg-[#162634] text-[#E8F1F5] text-xs font-semibold border border-[#219EBC]/25 hover:bg-[#1B2F40] transition-all flex items-center justify-center gap-2 shadow-2xs"
                  >
                    <Download className="w-4 h-4 text-[#38BDF8]" aria-hidden="true" />
                    <span>Download resume</span>
                  </a>
                </div>

                {/* Professional links */}
                {(hasLinkedIn || hasGitHub || hasUpwork) && (
                  <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs text-[#7E9AA8]">
                    {hasLinkedIn && (
                      <a
                        href={profileData.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#38BDF8] hover:underline transition-colors"
                        aria-label="LinkedIn Profile"
                      >
                        LinkedIn
                      </a>
                    )}
                    {hasGitHub && (
                      <a
                        href={profileData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#38BDF8] hover:underline transition-colors"
                        aria-label="GitHub Repository"
                      >
                        GitHub
                      </a>
                    )}
                    {hasUpwork && (
                      <a
                        href={profileData.upwork}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#38BDF8] hover:underline transition-colors"
                        aria-label="Hire me on Upwork"
                      >
                        Upwork
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
