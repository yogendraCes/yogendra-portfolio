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
    canonical: "https://yogendra-portfolio-puce.vercel.app/resume",
  },
  openGraph: {
    title: "Professional Resume | Yogendra Yadav",
    description: "Senior React Native Engineer professional web resume, work history at Cloud Energy Software and Forebear Productions, technical skills matrix, and PDF download.",
    url: "https://yogendra-portfolio-puce.vercel.app/resume",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Resume | Yogendra Yadav",
    description: "Senior React Native Engineer professional web resume, work history at Cloud Energy Software and Forebear Productions, technical skills matrix, and PDF download.",
  },
};

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#0A1118] text-[#E8F1F5]">
      <NavRail />
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <main id="main-content" className="flex-1 py-12 sm:py-16 pb-16 lg:pb-16">
          <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {/* Header Action Bar */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#101D28] border border-[#219EBC]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#162634] border border-[#219EBC]/20 text-xs text-[#E8F1F5] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_6px_rgba(16,185,129,0.5)]" />
                  <span>{profileData.statusText}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl font-bold text-[#E8F1F5] tracking-tight">{profileData.name}</h1>
                <p className="text-sm text-[#38BDF8] font-bold">{profileData.title}</p>
                <p className="text-xs text-[#7E9AA8] font-medium">{profileData.location}</p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={profileData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#38BDF8] text-[#0A1118] text-xs font-bold hover:bg-[#7DD3FC] transition-all flex items-center justify-center gap-2 shadow-[0_0_16px_rgba(56,189,248,0.25)] min-h-[44px]"
                >
                  <Download className="w-4 h-4 text-[#0A1118] shrink-0" aria-hidden="true" />
                  <span>Download PDF resume</span>
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="px-4 py-2.5 rounded-xl bg-[#162634] text-[#E8F1F5] text-xs font-semibold border border-[#219EBC]/25 hover:bg-[#1B2F40] transition-all flex items-center justify-center gap-2 min-h-[44px] shadow-2xs"
                >
                  <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" aria-hidden="true" />
                  <span>Email direct</span>
                </a>
              </div>
            </div>

            {/* Core Summary */}
            <section className="space-y-4">
              <h2 className="text-lg font-bold text-[#E8F1F5] border-b border-[#219EBC]/15 pb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8]" aria-hidden="true" />
                <span>Professional summary</span>
              </h2>
              <div className="space-y-3 text-sm text-[#7E9AA8] leading-relaxed">
                {profileData.overviewParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>

            {/* Work Experience */}
            <section className="space-y-6">
              <h2 className="text-lg font-bold text-[#E8F1F5] border-b border-[#219EBC]/15 pb-2 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#38BDF8]" aria-hidden="true" />
                <span>Work history & accomplishments</span>
              </h2>
              <div className="space-y-6">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="p-6 rounded-2xl bg-[#101D28] border border-[#219EBC]/20 space-y-4 shadow-xs">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-[#219EBC]/15">
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-[#E8F1F5]">{exp.role}</h3>
                        <div className="flex flex-wrap items-center gap-2 mt-0.5">
                          <span className="text-xs text-[#38BDF8] font-bold">{exp.company}</span>
                          {exp.subLabel && (
                            <span className="text-xs px-2 py-0.5 rounded-md bg-[#162634] text-[#10B981] border border-[#10B981]/25 font-semibold">
                              {exp.subLabel}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="text-xs text-[#7E9AA8] font-medium">{exp.period}, {exp.location}</div>
                    </div>
                    <p className="text-xs text-[#E8F1F5] font-semibold bg-[#070D13] p-3 rounded-xl border border-[#219EBC]/20">
                      {exp.scope}
                    </p>
                    {exp.responsibilities && (
                      <ul className="space-y-2 text-xs text-[#7E9AA8]">
                        {exp.responsibilities.map((r, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" aria-hidden="true" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {exp.phases && (
                      <div className="space-y-3 pt-2">
                        {exp.phases.map((phase) => (
                          <div key={phase.id} className="p-3.5 rounded-xl bg-[#070D13] border border-[#219EBC]/20 space-y-2">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                              <div className="font-bold text-xs text-[#E8F1F5]">{phase.title} ({phase.badge})</div>
                              <div className="text-xs text-[#38BDF8] font-bold">{phase.period}</div>
                            </div>
                            <ul className="space-y-1 text-xs text-[#7E9AA8]">
                              {phase.responsibilities.map((r, i) => (
                                <li key={i} className="flex items-start gap-2">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" aria-hidden="true" />
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
              <h2 className="text-lg font-bold text-[#E8F1F5] border-b border-[#219EBC]/15 pb-2 flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#38BDF8]" aria-hidden="true" />
                <span>Skills & tools</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {skillsData.map((cat) => (
                  <div key={cat.category} className="p-4 rounded-xl bg-[#101D28] border border-[#219EBC]/20 space-y-1.5 shadow-xs">
                    <div className="text-[#E8F1F5] font-bold">{cat.category}</div>
                    <div className="text-[#7E9AA8]">{cat.technologies.join(", ")}</div>
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
