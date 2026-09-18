import React from "react";
import type { Metadata } from "next";
import { profileData, isValidSocialUrl } from "@/data/profile";
import { NavRail } from "@/components/nav-rail";
import { Footer } from "@/components/footer";
import { Mail, Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Yogendra Yadav, React Native Developer",
  description: "Get in touch with Senior React Native Engineer Yogendra Yadav directly via email or view downloadable technical resume for mobile engineering projects.",
  alternates: {
    canonical: "https://yogendra-portfolio-puce.vercel.app/contact",
  },
  openGraph: {
    title: "Contact Yogendra Yadav, React Native Developer",
    description: "Get in touch with Senior React Native Engineer Yogendra Yadav directly via email or view downloadable technical resume for mobile engineering projects.",
    url: "https://yogendra-portfolio-puce.vercel.app/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Yogendra Yadav, React Native Developer",
    description: "Get in touch with Senior React Native Engineer Yogendra Yadav directly via email or view downloadable technical resume for mobile engineering projects.",
  },
};

export default function ContactPage() {
  const hasLinkedIn = isValidSocialUrl(profileData.linkedin);
  const hasGitHub = isValidSocialUrl(profileData.github);
  const hasUpwork = isValidSocialUrl(profileData.upwork);

  return (
    <div className="min-h-screen bg-[#0A1118] text-[#E8F1F5]">
      <NavRail />
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <main id="main-content" className="flex-1 pb-16 lg:pb-0">
          {/* Contact Banner Header */}
          <section className="py-12 sm:py-20 border-b border-[#219EBC]/15">
            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#162634] border border-[#219EBC]/20 text-xs text-[#E8F1F5] font-semibold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                <span>{profileData.statusText}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#E8F1F5]">
                Get in touch & start a conversation
              </h1>

              <p className="text-base sm:text-lg text-[#7E9AA8] max-w-[680px] leading-relaxed">
                Open to senior mobile engineering roles, high-impact contract development, and architecture consulting.
              </p>
            </div>
          </section>

          {/* Contact Body */}
          <section className="py-12 sm:py-16">
            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Primary Contact Method: Direct Email */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#101D28] border border-[#219EBC]/20 space-y-6 flex flex-col justify-between shadow-xs">
                  <div className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#E8F1F5]">Email me directly</h2>
                    <p className="text-sm text-[#7E9AA8] leading-relaxed">
                      Discuss mobile engineering, feature requests, contract roles, or technical architecture questions.
                    </p>

                    <div className="p-4 rounded-xl bg-[#070D13] border border-[#219EBC]/20 space-y-1">
                      <span className="text-xs text-[#7E9AA8] block font-semibold uppercase tracking-wider">Email address</span>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="text-base sm:text-lg text-[#38BDF8] hover:underline transition-all break-all font-bold block"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#219EBC]/15">
                    <a
                      href={`mailto:${profileData.email}`}
                      className="w-full h-12 rounded-xl bg-[#38BDF8] text-[#0A1118] text-sm font-bold hover:bg-[#7DD3FC] transition-all flex items-center justify-center gap-2 shadow-[0_0_16px_rgba(56,189,248,0.25)] min-h-[48px] cursor-pointer"
                    >
                      <Mail className="w-4 h-4 text-[#0A1118]" aria-hidden="true" />
                      <span>Send email ({profileData.email})</span>
                    </a>
                  </div>
                </div>

                {/* Professional Resources & Social Links */}
                <div className="p-6 sm:p-8 rounded-2xl bg-[#101D28] border border-[#219EBC]/20 space-y-6 flex flex-col justify-between shadow-xs">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-[#E8F1F5]">Professional resources</h2>
                    </div>

                    {/* Resume Download Action */}
                    <div className="p-4 rounded-xl bg-[#070D13] border border-[#219EBC]/20 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#E8F1F5]">PDF resume</span>
                        <span className="text-[11px] text-[#10B981] bg-[#10B981]/15 px-2 py-0.5 rounded-full border border-[#10B981]/25 font-semibold">Verified asset</span>
                      </div>
                      <p className="text-xs text-[#7E9AA8]">Technical resume detailing verified React Native and mobile systems engineering experience.</p>
                      <a
                        href={profileData.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs text-[#38BDF8] hover:underline transition-colors font-bold min-h-[36px]"
                      >
                        <Download className="w-3.5 h-3.5 text-[#38BDF8]" aria-hidden="true" />
                        <span>Download resume (PDF)</span>
                      </a>
                    </div>

                    {/* Configured Social / Professional Links */}
                    <div>
                      <span className="text-xs text-[#7E9AA8] block mb-2 font-semibold uppercase tracking-wider">Professional profiles</span>
                      {hasLinkedIn || hasGitHub || hasUpwork ? (
                        <div className="space-y-2">
                          {hasLinkedIn && (
                            <a
                              href={profileData.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 rounded-xl bg-[#162634] hover:bg-[#1B2F40] border border-[#219EBC]/20 hover:border-[#38BDF8]/40 flex items-center justify-between text-xs text-[#E8F1F5] font-semibold transition-all min-h-[44px]"
                              aria-label="LinkedIn Profile"
                            >
                              <span>LinkedIn profile</span>
                            </a>
                          )}
                          {hasGitHub && (
                            <a
                              href={profileData.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 rounded-xl bg-[#162634] hover:bg-[#1B2F40] border border-[#219EBC]/20 hover:border-[#38BDF8]/40 flex items-center justify-between text-xs text-[#E8F1F5] font-semibold transition-all min-h-[44px]"
                              aria-label="GitHub Repository"
                            >
                              <span>GitHub repository</span>
                            </a>
                          )}
                          {hasUpwork && (
                            <a
                              href={profileData.upwork}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 rounded-xl bg-[#162634] hover:bg-[#1B2F40] border border-[#219EBC]/20 hover:border-[#38BDF8]/40 flex items-center justify-between text-xs text-[#E8F1F5] font-semibold transition-all min-h-[44px]"
                              aria-label="Hire me on Upwork"
                            >
                              <span>Upwork profile</span>
                            </a>
                          )}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="text-xs text-[#7E9AA8] pt-2 font-medium">
                    Location: {profileData.location}
                  </div>
                </div>

              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
