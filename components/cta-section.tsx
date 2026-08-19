import React from "react";
import { profileData, isValidSocialUrl } from "@/data/profile";
import { Mail, Download, MessageSquare, ArrowRight, CheckCircle2, Layers, Cpu, Wrench, ShieldCheck, Rocket } from "lucide-react";

export function CTASection() {
  const hasLinkedIn = isValidSocialUrl(profileData.linkedin);
  const hasGitHub = isValidSocialUrl(profileData.github);
  const hasUpwork = isValidSocialUrl(profileData.upwork);

  const capabilities = [
    {
      action: "BUILD",
      label: "New Greenfield Apps",
      description: "Initialize scalable React Native apps from initial commit to App Store launch.",
      icon: Layers,
    },
    {
      action: "EXTEND",
      label: "Feature Development",
      description: "Integrate real-time telemetry, custom D3.js + SVG charts, and state modules.",
      icon: Cpu,
    },
    {
      action: "FIX",
      label: "Performance & Stability",
      description: "Eliminate UI thread lag, memory leaks, API desync, and crash bottlenecks.",
      icon: Wrench,
    },
    {
      action: "TAKE OVER",
      label: "Codebase Ownership",
      description: "Provide senior technical leadership and refactoring for active codebases.",
      icon: ShieldCheck,
    },
    {
      action: "SHIP",
      label: "Store Release & CI/CD",
      description: "Automate iOS TestFlight and Google Play deployment via Fastlane Match pipelines.",
      icon: Rocket,
    },
  ];

  return (
    <section id="contact" className="w-full py-16 sm:py-24 border-b border-[rgba(255,255,255,0.08)] bg-[#08090A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="max-w-[760px] space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D97706] tracking-wider uppercase">
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
            <span>DIRECT OUTREACH & CONTRACT ENGAGEMENT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F3F4F6]">
            Have a mobile app to build, fix, or ship?
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
            Whether initializing a greenfield React Native app, scaling real-time telemetry features, profiling performance bottlenecks, or taking over an active codebase, I deliver senior engineering ownership.
          </p>
        </div>

        {/* Dual Outreach Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Channel 1: Client & Contract Solutions (Build, Extend, Fix, Take Over, Ship) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl bg-[#0F1115] border border-[rgba(255,255,255,0.08)] space-y-6 flex flex-col justify-between hover:border-[rgba(255,255,255,0.16)] transition-all">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D97706] uppercase tracking-wider font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#D97706]" aria-hidden="true" />
                <span>ENGINEERING SERVICES & CONTRACTING</span>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#F3F4F6]">How We Can Work Together</h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed mt-1">
                  Senior React Native engineering solutions tailored for founders, product managers, and engineering teams.
                </p>
              </div>

              {/* 5 Core Capabilities List */}
              <div className="space-y-3 pt-2">
                {capabilities.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.action}
                      className="p-3.5 rounded-lg bg-[#16181D] border border-[rgba(255,255,255,0.06)] flex items-start gap-3 hover:border-[rgba(255,255,255,0.12)] transition-colors"
                    >
                      <div className="w-7 h-7 rounded bg-[#D97706]/10 text-[#D97706] flex items-center justify-center shrink-0 mt-0.5 border border-[#D97706]/30">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="space-y-0.5 min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#0D0E11] text-[#D97706] border border-[#D97706]/30">
                            {item.action}
                          </span>
                          <span className="font-bold text-xs text-[#F3F4F6]">{item.label}</span>
                        </div>
                        <p className="text-xs text-[#9CA3AF] leading-relaxed font-sans">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-[rgba(255,255,255,0.06)] space-y-3">
              <a
                href={`mailto:${profileData.email}?subject=React%20Native%20Project%20Inquiry`}
                className="w-full h-12 rounded-md bg-[#D97706] text-[#08090A] font-mono text-sm font-bold hover:bg-[#F59E0B] transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-950/20"
              >
                <Mail className="w-4.5 h-4.5" aria-hidden="true" />
                <span>Start a Project Discussion</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <div className="font-mono text-[11px] text-[#9CA3AF] text-center">
                Direct email response • Flexible contract & project pricing
              </div>
            </div>
          </div>

          {/* Channel 2: Technical Recruiters & Senior Role Hiring */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-[#0F1115] border border-[rgba(255,255,255,0.08)] space-y-6 flex flex-col justify-between hover:border-[rgba(255,255,255,0.16)] transition-all">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#3B82F6] uppercase tracking-wider font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6]" aria-hidden="true" />
                <span>FULL-TIME SENIOR ROLES</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#F3F4F6]">Senior Hiring & Verification</h3>

              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Available for full-time Senior React Native Developer and Lead Mobile Architect positions.
              </p>

              <div className="p-4 rounded-lg bg-[#16181D] border border-[rgba(255,255,255,0.06)] space-y-3">
                <div className="font-mono text-xs text-[#D97706] font-semibold uppercase">Candidate Summary:</div>
                <ul className="space-y-2 text-xs text-[#9CA3AF] font-sans">
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

            <div className="pt-4 border-t border-[rgba(255,255,255,0.06)] space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`mailto:${profileData.email}?subject=Senior%20React%20Native%20Role%20Inquiry`}
                  className="h-12 rounded-md bg-[#16181D] text-[#F3F4F6] font-mono text-xs font-semibold border border-[rgba(255,255,255,0.16)] hover:border-[#D97706]/50 hover:bg-[#1C1F26] transition-all flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4 text-[#D97706]" aria-hidden="true" />
                  <span>Email Directly</span>
                </a>
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-12 rounded-md bg-[#16181D] text-[#F3F4F6] font-mono text-xs font-semibold border border-[rgba(255,255,255,0.16)] hover:border-[#D97706]/50 hover:bg-[#1C1F26] transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4 text-[#D97706]" aria-hidden="true" />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* Conditionally rendered professional links */}
              {(hasLinkedIn || hasGitHub || hasUpwork) && (
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2 font-mono text-xs text-[#9CA3AF]">
                  {hasLinkedIn && (
                    <a
                      href={profileData.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D97706] transition-colors"
                      aria-label="LinkedIn Profile"
                    >
                      LinkedIn Profile
                    </a>
                  )}
                  {hasGitHub && (
                    <a
                      href={profileData.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D97706] transition-colors"
                      aria-label="GitHub Repository"
                    >
                      GitHub Repository
                    </a>
                  )}
                  {hasUpwork && (
                    <a
                      href={profileData.upwork}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#D97706] transition-colors"
                      aria-label="Hire me on Upwork"
                    >
                      Hire me on Upwork
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
