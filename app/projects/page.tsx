import React from "react";
import { NavRail } from "@/components/nav-rail";
import { ProjectShowcase } from "@/components/project-showcase";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Production Projects & Case Studies",
  description: "Mobile and web engineering projects: Duracell Energy, Puredrive, Stain Care Pro, SDGme, Acuity Coaching, and SaloonApp.",
  alternates: {
    canonical: "https://yogendra-portfolio-puce.vercel.app/projects",
  },
  openGraph: {
    title: "Production Projects & Case Studies | Yogendra Yadav",
    description: "Explore technical case studies documenting mobile app architecture, data visualizations, rendering optimizations, and production releases across shipped iOS and Android applications.",
    url: "https://yogendra-portfolio-puce.vercel.app/projects",
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
