import React from "react";
import { NavRail } from "@/components/nav-rail";
import { ProjectShowcase } from "@/components/project-showcase";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Production Projects & Case Studies",
  description: "React Native mobile engineering projects: Duracell Energy, Puredrive, and Stain Care Pro.",
  alternates: {
    canonical: "https://yogendrayadav.dev/projects",
  },
  openGraph: {
    title: "Production Projects & Case Studies | Yogendra Yadav",
    description: "Explore technical case studies documenting mobile app architecture, data visualizations, rendering optimizations, and production releases across shipped iOS and Android applications.",
    url: "https://yogendrayadav.dev/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Production Projects & Case Studies | Yogendra Yadav",
    description: "Explore technical case studies documenting mobile app architecture, data visualizations, rendering optimizations, and production releases across shipped iOS and Android applications.",
  },
};

export default function ProjectsIndexPage() {
  return (
    <div className="min-h-screen bg-[#F3F4F1] text-[#14161A]">
      <NavRail />
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <main id="main-content" className="flex-1 pb-16 lg:pb-0">
          <div className="py-12 sm:py-16 border-b border-[#E4E5E1] bg-[#F3F4F1]">
            <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4E5E1] text-xs text-[#5B5F66]">
                <span className="w-2 h-2 rounded-full bg-[#3FAE64]" />
                <span>Architectural Case Studies</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-semibold text-[#14161A] tracking-tight">
                Production projects & case studies
              </h1>
              <p className="text-sm sm:text-base text-[#5B5F66] max-w-[680px] leading-relaxed">
                Technical case studies documenting mobile app architecture, data visualizations, rendering optimizations, and release engineering across shipped iOS and Android applications.
              </p>
            </div>
          </div>
          <ProjectShowcase showHeader={false} />
          <CTASection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
