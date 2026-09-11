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
    canonical: "https://yogendrayadav.dev/contact",
  },
  openGraph: {
    title: "Contact Yogendra Yadav, React Native Developer",
    description: "Get in touch with Senior React Native Engineer Yogendra Yadav directly via email or view downloadable technical resume for mobile engineering projects.",
    url: "https://yogendrayadav.dev/contact",
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
    <div className="min-h-screen bg-[#F3F4F1] text-[#14161A]">
      <NavRail />
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <main id="main-content" className="flex-1 pb-16 lg:pb-0">
          {/* Contact Banner Header */}
          <section className="py-12 sm:py-20 border-b border-[#E4E5E1]">
            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4E5E1] text-xs text-[#5B5F66]">
                <span className="w-2 h-2 rounded-full bg-[#3FAE64]" />
                <span>{profileData.statusText}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight text-[#14161A]">
                Get in touch & start a conversation
              </h1>

              <p className="text-base sm:text-lg text-[#5B5F66] max-w-[680px] leading-relaxed">
                Open to senior mobile engineering roles, high-impact contract development, and architecture consulting.
              </p>
            </div>
          </section>

          {/* Contact Body */}
          <section className="py-12 sm:py-16">
            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Primary Contact Method: Direct Email */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E4E5E1] space-y-6 flex flex-col justify-between shadow-xs">
                  <div className="space-y-4">
                    <h2 className="text-xl sm:text-2xl font-semibold text-[#14161A]">Email me directly</h2>
                    <p className="text-sm text-[#5B5F66] leading-relaxed">
                      Discuss mobile engineering, feature requests, contract roles, or technical architecture questions.
                    </p>

                    <div className="p-4 rounded-xl bg-[#F3F4F1] border border-[#E4E5E1] space-y-1">
                      <span className="text-xs text-[#7E8490] block">Email address</span>
                      <a
                        href={`mailto:${profileData.email}`}
                        className="text-base sm:text-lg text-[#14161A] hover:text-[#2F6FED] transition-colors break-all font-semibold block"
                      >
                        {profileData.email}
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#E4E5E1]">
                    <a
                      href={`mailto:${profileData.email}`}
                      className="w-full h-12 rounded-xl bg-[#2F6FED] text-white text-sm font-medium hover:bg-[#2256BD] transition-all flex items-center justify-center gap-2 shadow-xs min-h-[48px]"
                    >
                      <Mail className="w-4 h-4" aria-hidden="true" />
                      <span>Send email ({profileData.email})</span>
                    </a>
                  </div>
                </div>

                {/* Professional Resources & Social Links */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E4E5E1] space-y-6 flex flex-col justify-between shadow-xs">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl sm:text-2xl font-semibold text-[#14161A]">Professional resources</h2>
                    </div>

                    {/* Resume Download Action */}
                    <div className="p-4 rounded-xl bg-[#F3F4F1] border border-[#E4E5E1] space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-[#14161A]">PDF resume</span>
                        <span className="text-[11px] text-[#3FAE64] bg-white px-2 py-0.5 rounded-full border border-[#3FAE64]/20 font-medium">Verified asset</span>
                      </div>
                      <p className="text-xs text-[#5B5F66]">Technical resume detailing verified React Native and mobile systems engineering experience.</p>
                      <a
                        href={profileData.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs text-[#2F6FED] hover:text-[#2256BD] transition-colors font-semibold min-h-[36px]"
                      >
                        <Download className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Download resume (PDF)</span>
                      </a>
                    </div>

                    {/* Configured Social / Professional Links */}
                    <div>
                      <span className="text-xs text-[#7E8490] block mb-2 font-medium">Professional profiles</span>
                      {hasLinkedIn || hasGitHub || hasUpwork ? (
                        <div className="space-y-2">
                          {hasLinkedIn && (
                            <a
                              href={profileData.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-3 rounded-xl bg-[#F3F4F1] hover:bg-white border border-[#E4E5E1] flex items-center justify-between text-xs text-[#14161A] hover:text-[#2F6FED] transition-all min-h-[44px]"
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
                              className="p-3 rounded-xl bg-[#F3F4F1] hover:bg-white border border-[#E4E5E1] flex items-center justify-between text-xs text-[#14161A] hover:text-[#2F6FED] transition-all min-h-[44px]"
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
                              className="p-3 rounded-xl bg-[#F3F4F1] hover:bg-white border border-[#E4E5E1] flex items-center justify-between text-xs text-[#14161A] hover:text-[#2F6FED] transition-all min-h-[44px]"
                              aria-label="Hire me on Upwork"
                            >
                              <span>Upwork profile</span>
                            </a>
                          )}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="text-xs text-[#7E8490] pt-2">
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
