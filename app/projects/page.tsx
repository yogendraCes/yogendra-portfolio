import React from "react";
import { Navigation } from "@/components/navigation";
import { ProjectShowcase } from "@/components/project-showcase";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Production Case Studies",
  description: "Comprehensive list of React Native architectural case studies: Duracell/Puredrive Energy Monitoring, Fastlane DevOps Pipeline, and SDGme Sustainability App.",
  alternates: {
    canonical: "https://yogendrayadav.dev/projects",
  },
  openGraph: {
    title: "Production Case Studies | Yogendra Yadav",
    description: "Explore in-depth technical case studies documenting mobile app architecture, live data telemetry, threading optimizations, and release engineering across shipped iOS and Android applications.",
    url: "https://yogendrayadav.dev/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Production Case Studies | Yogendra Yadav",
    description: "Explore in-depth technical case studies documenting mobile app architecture, live data telemetry, threading optimizations, and release engineering across shipped iOS and Android applications.",
  },
};

export default function ProjectsIndexPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main id="main-content" className="flex-1">
        <div className="bg-grid-pattern py-12 sm:py-16 border-b border-[rgba(255,255,255,0.08)]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-4">
            <div className="font-mono text-xs text-[#D97706] tracking-wider uppercase font-semibold">
              CASE STUDIES INDEX // FULL PRODUCTION PORTFOLIO
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#F3F4F6] tracking-tight">
              Production Case Studies
            </h1>
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-[760px] leading-relaxed">
              Explore in-depth technical case studies documenting mobile app architecture, live data streaming, threading optimizations, and release engineering across shipped iOS and Android applications.
            </p>
          </div>
        </div>
        <ProjectShowcase />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
