import React from "react";
import type { Metadata } from "next";
import { profileData } from "@/data/profile";
import { experienceData } from "@/data/experience";
import { skillsData } from "@/data/skills";
import { NavRail } from "@/components/nav-rail";
import { Footer } from "@/components/footer";
import { Download, Mail, Briefcase, Wrench, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Web Resume",
  description: "Senior React Native Engineer professional web resume, work history at Cloud Energy Software and Forebear Productions, technical skills matrix, and PDF download.",
  alternates: {
    canonical: "https://yogendrayadav.dev/resume",
  },
  openGraph: {
    title: "Professional Resume | Yogendra Yadav",
    description: "Senior React Native Engineer professional web resume, work history at Cloud Energy Software and Forebear Productions, technical skills matrix, and PDF download.",
    url: "https://yogendrayadav.dev/resume",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Resume | Yogendra Yadav",
    description: "Senior React Native Engineer professional web resume, work history at Cloud Energy Software and Forebear Productions, technical skills matrix, and PDF download.",
  },
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#F3F4F1] text-[#14161A]">
      <NavRail />
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <main id="main-content" className="flex-1 py-12 sm:py-16 pb-16 lg:pb-16">
          <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {/* Header Action Bar */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#E4E5E1] flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F3F4F1] border border-[#E4E5E1] text-xs text-[#5B5F66]">
                  <span className="w-2 h-2 rounded-full bg-[#3FAE64]" />
                  <span>{profileData.statusText}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-semibold text-[#14161A] tracking-tight">{profileData.name}</h1>
                <p className="text-sm text-[#2F6FED] font-medium">{profileData.title}</p>
                <p className="text-xs text-[#7E8490]">{profileData.location}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#2F6FED] text-white text-xs font-medium hover:bg-[#2256BD] transition-all flex items-center justify-center gap-2 shadow-xs min-h-[44px]"
                >
                  <Download className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Download PDF resume</span>
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="px-4 py-2.5 rounded-xl bg-white text-[#14161A] text-xs font-medium border border-[#E4E5E1] hover:bg-[#F3F4F1] transition-all flex items-center justify-center gap-2 min-h-[44px]"
                >
                  <Mail className="w-4 h-4 text-[#2F6FED] shrink-0" aria-hidden="true" />
                  <span>Email direct</span>
                </a>
              </div>
            </div>

            {/* Core Summary */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-[#14161A] border-b border-[#E4E5E1] pb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2F6FED]" aria-hidden="true" />
                <span>Professional summary</span>
              </h2>
              <div className="space-y-3 text-sm text-[#5B5F66] leading-relaxed">
                {profileData.overviewParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>

            {/* Work Experience */}
            <section className="space-y-6">
              <h2 className="text-lg font-semibold text-[#14161A] border-b border-[#E4E5E1] pb-2 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#2F6FED]" aria-hidden="true" />
                <span>Work history & accomplishments</span>
              </h2>
              <div className="space-y-6">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="p-6 rounded-2xl bg-white border border-[#E4E5E1] space-y-4 shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-[#E4E5E1]">
                      <div>
                        <h3 className="text-base sm:text-lg font-semibold text-[#14161A]">{exp.role}</h3>
                        <div className="flex flex-wrap items-center gap-2 mt-0.5">
                          <span className="text-xs text-[#2F6FED] font-medium">{exp.company}</span>
                          {exp.subLabel && (
                            <span className="text-xs px-2 py-0.5 rounded-md bg-[#F3F4F1] text-[#3FAE64] border border-[#3FAE64]/20 font-medium">
                              {exp.subLabel}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-xs text-[#7E8490]">{exp.period} • {exp.location}</div>
                    </div>
                    <p className="text-xs text-[#14161A] font-medium bg-[#F3F4F1] p-3 rounded-xl border border-[#E4E5E1]">
                      {exp.scope}
                    </p>
                    {exp.responsibilities && (
                      <ul className="space-y-2 text-xs text-[#5B5F66]">
                        {exp.responsibilities.map((r, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#3FAE64] shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {exp.phases && (
                      <div className="space-y-3 pt-2">
                        {exp.phases.map((phase) => (
                          <div key={phase.id} className="p-3.5 rounded-xl bg-[#F3F4F1] border border-[#E4E5E1] space-y-2">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                              <div className="font-semibold text-xs text-[#14161A]">{phase.title} ({phase.badge})</div>
                              <div className="text-xs text-[#2F6FED] font-medium">{phase.period}</div>
                            </div>
                            <ul className="space-y-1 text-xs text-[#5B5F66]">
                              {phase.responsibilities.map((r, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#3FAE64] shrink-0 mt-0.5" aria-hidden="true" />
                                  <span>{r}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Skills Matrix Summary */}
            <section className="space-y-4">
              <h2 className="text-lg font-semibold text-[#14161A] border-b border-[#E4E5E1] pb-2 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#2F6FED]" aria-hidden="true" />
                <span>Skills & tools</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {skillsData.map((cat) => (
                  <div key={cat.category} className="p-4 rounded-xl bg-white border border-[#E4E5E1] space-y-1.5 shadow-xs">
                    <div className="text-[#2F6FED] font-medium">{cat.category}</div>
                    <div className="text-[#14161A]">{cat.technologies.join(" • ")}</div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
