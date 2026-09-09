import React from "react";
import { Navigation } from "@/components/navigation";
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
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main id="main-content" className="flex-1">
        <div className="py-12 sm:py-16 border-b border-[rgba(255,255,255,0.08)] bg-[#0A0D12]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#10B981]/10 border border-[#10B981]/25 text-xs font-mono text-[#10B981]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span>Architectural Case Studies // Shipped Applications</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#F3F4F6] tracking-tight">
              Production Projects & Case Studies
            </h1>
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-[760px] leading-relaxed">
              Technical case studies documenting mobile app architecture, data visualizations, rendering optimizations, and release engineering across shipped iOS and Android applications.
            </p>
          </div>
        </div>
        <ProjectShowcase showHeader={false} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
