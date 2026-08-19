import React from "react";
import type { Metadata } from "next";
import { profileData } from "@/data/profile";
import { experienceData } from "@/data/experience";
import { skillsData } from "@/data/skills";
import { Navigation } from "@/components/navigation";
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
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main id="main-content" className="flex-1 bg-[#08090A] py-12 sm:py-16">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 space-y-12">
          {/* Header Action Bar */}
          <div className="p-8 rounded-xl bg-[#0F1115] border border-[rgba(255,255,255,0.08)] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D97706] tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" aria-hidden="true" />
                <span>RESUME & EXPERIENCE</span>
              </div>
              <h1 className="text-3xl font-bold text-[#F3F4F6] tracking-tight">{profileData.name}</h1>
              <p className="font-mono text-sm text-[#9CA3AF]">{profileData.title}</p>
              <p className="text-xs text-[#6B7280]">{profileData.location}</p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-md bg-[#D97706] text-[#08090A] font-mono text-xs font-bold hover:bg-[#F59E0B] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-950/20"
              >
                <Download className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Download PDF Resume</span>
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="px-4 py-3 rounded-md bg-[#16181D] text-[#F3F4F6] font-mono text-xs font-semibold border border-[rgba(255,255,255,0.16)] hover:border-[#D97706]/50 transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-[#D97706] shrink-0" aria-hidden="true" />
                <span>Email Direct</span>
              </a>
            </div>
          </div>

          {/* Core Summary */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#F3F4F6] border-b border-[rgba(255,255,255,0.08)] pb-2 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D97706]" aria-hidden="true" />
              <span>Professional Summary</span>
            </h2>
            <div className="space-y-3 text-sm text-[#9CA3AF] leading-relaxed">
              {profileData.overviewParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>

          {/* Work Experience */}
          <section className="space-y-6">
            <h2 className="text-xl font-bold text-[#F3F4F6] border-b border-[rgba(255,255,255,0.08)] pb-2 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-[#D97706]" aria-hidden="true" />
              <span>Work History & Accomplishments</span>
            </h2>
            <div className="space-y-6">
              {experienceData.map((exp) => (
                <div key={exp.id} className="p-6 rounded-xl bg-[#0F1115] border border-[rgba(255,255,255,0.08)] space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-[rgba(255,255,255,0.06)]">
                    <div>
                      <h3 className="text-lg font-bold text-[#F3F4F6]">{exp.role}</h3>
                      <div className="font-mono text-xs text-[#D97706] font-semibold">{exp.company}</div>
                    </div>
                    <div className="font-mono text-xs text-[#9CA3AF]">{exp.period} | {exp.location}</div>
                  </div>
                  <p className="text-xs text-[#F3F4F6] font-medium bg-[#16181D] p-3 rounded border border-[rgba(255,255,255,0.06)]">
                    {exp.scope}
                  </p>
                  <ul className="space-y-2 text-xs text-[#9CA3AF]">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Matrix Summary */}
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-[#F3F4F6] border-b border-[rgba(255,255,255,0.08)] pb-2 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-[#D97706]" aria-hidden="true" />
              <span>Technical Skills & Tools</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
              {skillsData.map((cat) => (
                <div key={cat.category} className="p-4 rounded-lg bg-[#0F1115] border border-[rgba(255,255,255,0.08)] space-y-2">
                  <div className="text-[#D97706] font-bold uppercase">{cat.category}</div>
                  <div className="text-[#F3F4F6]">{cat.technologies.join(" • ")}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
