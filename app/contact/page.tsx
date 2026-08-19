import React from "react";
import type { Metadata } from "next";
import { profileData, isValidSocialUrl } from "@/data/profile";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Mail, Download, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Yogendra Yadav — React Native Developer",
  description: "Get in touch with Senior React Native Engineer Yogendra Yadav directly via email or view downloadable technical resume for mobile engineering projects.",
  alternates: {
    canonical: "https://yogendrayadav.dev/contact",
  },
  openGraph: {
    title: "Contact Yogendra Yadav — React Native Developer",
    description: "Get in touch with Senior React Native Engineer Yogendra Yadav directly via email or view downloadable technical resume for mobile engineering projects.",
    url: "https://yogendrayadav.dev/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Yogendra Yadav — React Native Developer",
    description: "Get in touch with Senior React Native Engineer Yogendra Yadav directly via email or view downloadable technical resume for mobile engineering projects.",
  },
};

export default function ContactPage() {
  const hasLinkedIn = isValidSocialUrl(profileData.linkedin);
  const hasGitHub = isValidSocialUrl(profileData.github);
  const hasUpwork = isValidSocialUrl(profileData.upwork);

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main id="main-content" className="flex-1 bg-[#08090A]">
        {/* Contact Banner Header */}
        <section className="bg-grid-pattern py-12 sm:py-20 border-b border-[rgba(255,255,255,0.08)]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D97706] tracking-wider uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" aria-hidden="true" />
              <span>DIRECT OUTREACH & CONTACT</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-bold text-[#F3F4F6] tracking-tight">
              Have a mobile project to build?
            </h1>

            <p className="text-lg sm:text-xl text-[#9CA3AF] max-w-[760px] leading-relaxed">
              Let&apos;s talk about what you&apos;re working on.
            </p>
          </div>
        </section>

        {/* Contact Body */}
        <section className="py-12 sm:py-20">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Primary Contact Method: Direct Email */}
              <div className="p-8 rounded-xl bg-[#0F1115] border border-[rgba(255,255,255,0.08)] space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="font-mono text-xs text-[#D97706] uppercase tracking-wider font-semibold">
                    PRIMARY CONTACT METHOD
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#F3F4F6]">Direct Email</h2>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">
                    Click to open your email client directly. I respond to all direct inquiries within 24 business hours.
                  </p>

                  <div className="p-4 rounded-lg bg-[#16181D] border border-[rgba(255,255,255,0.08)] space-y-2">
                    <span className="font-mono text-xs text-[#9CA3AF] block">Email Address</span>
                    <a
                      href={`mailto:${profileData.email}`}
                      className="font-mono text-base sm:text-lg text-[#F3F4F6] hover:text-[#D97706] transition-colors break-all font-semibold block"
                    >
                      {profileData.email}
                    </a>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-[rgba(255,255,255,0.06)]">
                  <a
                    href={`mailto:${profileData.email}`}
                    className="w-full h-12 rounded-md bg-[#D97706] text-[#08090A] font-mono text-sm font-bold hover:bg-[#F59E0B] transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-950/20 min-h-[48px]"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    <span>Send Email ({profileData.email})</span>
                  </a>
                </div>
              </div>

              {/* Professional Resources & Social Links */}
              <div className="p-8 rounded-xl bg-[#0F1115] border border-[rgba(255,255,255,0.08)] space-y-6 flex flex-col justify-between">
                <div className="space-y-6">
                  <div>
                    <div className="font-mono text-xs text-[#3B82F6] uppercase tracking-wider font-semibold">
                      RESUME & PROFILES
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-[#F3F4F6] mt-1">Professional Resources</h2>
                  </div>

                  {/* Resume Download Action */}
                  <div className="p-4 rounded-lg bg-[#16181D] border border-[rgba(255,255,255,0.08)] space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs text-[#F3F4F6] font-semibold">PDF Resume</span>
                      <span className="font-mono text-[10px] text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/20">Verified Asset</span>
                    </div>
                    <p className="text-xs text-[#9CA3AF]">Download PDF resume detailing technical background and React Native engineering experience.</p>
                    <a
                      href={profileData.resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-mono text-xs text-[#D97706] hover:text-[#F59E0B] transition-colors font-semibold min-h-[44px]"
                    >
                      <Download className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Download Resume (PDF)</span>
                    </a>
                  </div>

                  {/* Configured Social / Professional Links */}
                  <div>
                    <span className="font-mono text-xs text-[#9CA3AF] block mb-3">Professional Profiles</span>
                    {hasLinkedIn || hasGitHub || hasUpwork ? (
                      <div className="space-y-2">
                        {hasLinkedIn && (
                          <a
                            href={profileData.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg bg-[#16181D] hover:bg-[#1C1F26] border border-[rgba(255,255,255,0.06)] flex items-center justify-between font-mono text-xs text-[#F3F4F6] hover:text-[#D97706] transition-all min-h-[44px]"
                            aria-label="LinkedIn Profile"
                          >
                            <span>LinkedIn Profile</span>
                            <ArrowUpRight className="w-4 h-4 text-[#D97706]" aria-hidden="true" />
                          </a>
                        )}
                        {hasGitHub && (
                          <a
                            href={profileData.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg bg-[#16181D] hover:bg-[#1C1F26] border border-[rgba(255,255,255,0.06)] flex items-center justify-between font-mono text-xs text-[#F3F4F6] hover:text-[#D97706] transition-all min-h-[44px]"
                            aria-label="GitHub Repository"
                          >
                            <span>GitHub Repository</span>
                            <ArrowUpRight className="w-4 h-4 text-[#D97706]" aria-hidden="true" />
                          </a>
                        )}
                        {hasUpwork && (
                          <a
                            href={profileData.upwork}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-lg bg-[#16181D] hover:bg-[#1C1F26] border border-[rgba(255,255,255,0.06)] flex items-center justify-between font-mono text-xs text-[#F3F4F6] hover:text-[#D97706] transition-all min-h-[44px]"
                            aria-label="Hire me on Upwork"
                          >
                            <span>Hire me on Upwork (Upwork Profile)</span>
                            <ArrowUpRight className="w-4 h-4 text-[#D97706]" aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    ) : (
                      <div className="p-3 rounded-lg bg-[#16181D]/50 border border-[rgba(255,255,255,0.06)] font-mono text-xs text-[#6B7280]">
                        Central profile placeholders configured. Links will be displayed once valid URLs are provided.
                      </div>
                    )}
                  </div>
                </div>

                <div className="font-mono text-[11px] text-[#6B7280]">
                  Location: {profileData.location}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
