import React from "react";
import { Navigation } from "@/components/navigation";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Scoping & Contact",
  description: "Schedule a technical scoping consultation or contact Senior React Native Engineer Yogendra Yadav directly for contract or senior role opportunities.",
  alternates: {
    canonical: "https://yogendrayadav.dev/contact",
  },
  openGraph: {
    title: "Technical Scoping & Contact | Yogendra Yadav",
    description: "Schedule a technical scoping consultation or contact Senior React Native Engineer Yogendra Yadav directly for contract or senior role opportunities.",
    url: "https://yogendrayadav.dev/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Scoping & Contact | Yogendra Yadav",
    description: "Schedule a technical scoping consultation or contact Senior React Native Engineer Yogendra Yadav directly for contract or senior role opportunities.",
  },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main id="main-content" className="flex-1 bg-[#08090A]">
        <div className="bg-grid-pattern py-12 sm:py-16 border-b border-[rgba(255,255,255,0.08)]">
          <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-4">
            <div className="font-mono text-xs text-[#D97706] tracking-wider uppercase font-semibold">
              DIRECT TECHNICAL OUTREACH
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-[#F3F4F6] tracking-tight">
              Contact & Scoping Intake
            </h1>
            <p className="text-base sm:text-lg text-[#9CA3AF] max-w-[760px] leading-relaxed">
              Available for select mobile architecture consultations, code audits, real-time telemetry projects, and senior engineering positions.
            </p>
          </div>
        </div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
