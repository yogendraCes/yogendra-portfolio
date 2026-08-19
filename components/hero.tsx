import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { ArrowDown, MessageSquare, Terminal, Layers, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="relative w-full pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-[rgba(255,255,255,0.08)] bg-grid-pattern hero-glow">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="max-w-[960px] space-y-6">
          {/* Eyebrow / Operational Status Badge */}
          <div className="inline-flex max-w-full items-center gap-2 px-2.5 py-1 rounded-md bg-[#1C1F26] border border-[rgba(255,255,255,0.08)]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" aria-hidden="true" />
            <span className="font-mono text-[10px] sm:text-xs text-[#F3F4F6] font-medium tracking-wider uppercase leading-snug break-words">
              {profileData.eyebrow}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F3F4F6] leading-[1.15]">
            {profileData.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-sm sm:text-xl text-[#9CA3AF] leading-relaxed max-w-[840px] font-normal">
            {profileData.subheadline}
          </p>

          {/* Primary Technology Stack Bar */}
          <div className="pt-2 pb-4">
            <div className="flex items-center gap-2 mb-3">
              <Terminal className="w-4 h-4 text-[#D97706]" aria-hidden="true" />
              <span className="font-mono text-xs text-[#9CA3AF] uppercase tracking-wider">
                CORE PRODUCTION STACK
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {profileData.coreStack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[11px] sm:text-xs px-2.5 py-1 rounded bg-[#1C1F26] text-[#9CA3AF] border border-[rgba(255,255,255,0.08)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Triggers (CTAs) */}
          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <Link
              href="#work"
              className="px-4 sm:px-6 py-3 sm:py-3.5 rounded-md bg-[#D97706] text-[#08090A] font-mono text-xs sm:text-sm font-bold hover:bg-[#F59E0B] transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-950/20 min-h-[44px]"
            >
              <Layers className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>View My Work</span>
              <ArrowDown className="w-4 h-4 shrink-0" aria-hidden="true" />
            </Link>

            <Link
              href="/contact"
              className="px-4 sm:px-6 py-3 sm:py-3.5 rounded-md bg-[#16181D] text-[#F3F4F6] font-mono text-xs sm:text-sm font-semibold border border-[rgba(255,255,255,0.16)] hover:border-[#D97706]/50 hover:bg-[#1C1F26] transition-all flex items-center justify-center gap-2 min-h-[44px]"
            >
              <MessageSquare className="w-4 h-4 text-[#D97706] shrink-0" aria-hidden="true" />
              <span>Let&apos;s Talk</span>
            </Link>

            <a
              href={profileData.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-5 py-3 sm:py-3.5 rounded-md bg-[#16181D] text-[#9CA3AF] hover:text-[#F3F4F6] font-mono text-xs sm:text-sm font-medium border border-[rgba(255,255,255,0.08)] hover:border-[#D97706]/50 hover:bg-[#1C1F26] transition-all flex items-center justify-center gap-2 min-h-[44px]"
            >
              <Download className="w-4 h-4 text-[#D97706] shrink-0" aria-hidden="true" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
