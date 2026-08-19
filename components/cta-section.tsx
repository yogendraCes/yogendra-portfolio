import React from "react";
import { profileData, isValidSocialUrl } from "@/data/profile";
import { Mail, Download, MessageSquare, ArrowRight } from "lucide-react";

export function CTASection() {
  const hasLinkedIn = isValidSocialUrl(profileData.linkedin);
  const hasGitHub = isValidSocialUrl(profileData.github);
  const hasUpwork = isValidSocialUrl(profileData.upwork);

  return (
    <section id="contact" className="w-full py-16 sm:py-24 border-b border-[rgba(255,255,255,0.08)] bg-[#08090A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="max-w-[760px] space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D97706] tracking-wider uppercase">
            <MessageSquare className="w-4 h-4" aria-hidden="true" />
            <span>DIRECT CONTACT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F3F4F6]">
            Have a mobile project to build?
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
            Let&apos;s talk about what you&apos;re working on. Whether you need technical leadership for a new mobile product, want to optimize an existing React Native app, or have a open role to discuss.
          </p>
        </div>

        {/* Dual Outreach Channels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Channel 1: Direct Outreach & Projects */}
          <div className="p-8 rounded-xl bg-[#0F1115] border border-[rgba(255,255,255,0.08)] space-y-6 flex flex-col justify-between hover:border-[rgba(255,255,255,0.16)] transition-all">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D97706] uppercase tracking-wider font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#D97706]" aria-hidden="true" />
                <span>FOR CLIENTS & PRODUCT TEAMS</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F3F4F6]">Discuss a Mobile Project</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                I assist engineering teams with React Native architecture, real-time data telemetry, performance optimization, and store releases.
              </p>
            </div>

            <div className="pt-4 border-t border-[rgba(255,255,255,0.06)] space-y-3">
              <a
                href={`mailto:${profileData.email}`}
                className="w-full h-12 rounded-md bg-[#D97706] text-[#08090A] font-mono text-sm font-bold hover:bg-[#F59E0B] transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-950/20"
              >
                <Mail className="w-4.5 h-4.5" aria-hidden="true" />
                <span>Email {profileData.email}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <div className="font-mono text-[11px] text-[#9CA3AF] text-center">
                1-click direct email response within 24h
              </div>
            </div>
          </div>

          {/* Channel 2: Technical Recruiters & Verification */}
          <div className="p-8 rounded-xl bg-[#0F1115] border border-[rgba(255,255,255,0.08)] space-y-6 flex flex-col justify-between hover:border-[rgba(255,255,255,0.16)] transition-all">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#3B82F6] uppercase tracking-wider font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#3B82F6]" aria-hidden="true" />
                <span>FOR RECRUITERS & TECH LEADS</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#F3F4F6]">Direct Recruitment & Verification</h3>
              <p className="text-sm text-[#9CA3AF] leading-relaxed">
                Verify stack compatibility, download my technical resume PDF, or connect via direct email.
              </p>
            </div>

            <div className="pt-4 border-t border-[rgba(255,255,255,0.06)] space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`mailto:${profileData.email}`}
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
