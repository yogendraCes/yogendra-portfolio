import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { ArrowDown, MessageSquare, Terminal, Layers, Download, Award, ShieldCheck, Zap } from "lucide-react";
import { HeroArchitectureVisual } from "./hero-architecture-visual";
import { AnimatedCounter } from "./animated-counter";

export function Hero() {
  return (
    <section className="relative w-full pt-12 sm:pt-20 pb-16 sm:pb-24 border-b border-[rgba(255,255,255,0.08)] bg-grid-pattern hero-glow">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Content Column (7 cols desktop) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Eyebrow / Operational Status Badge */}
            <div className="inline-flex max-w-full items-center gap-2 px-3 py-1 rounded-full bg-[#16181D] border border-[rgba(255,255,255,0.12)] shadow-inner">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse shrink-0" aria-hidden="true" />
              <span className="font-mono text-[10px] sm:text-xs text-[#F3F4F6] font-medium tracking-wider uppercase leading-snug break-words">
                {profileData.eyebrow}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F3F4F6] leading-[1.18]">
              {profileData.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-sm sm:text-lg text-[#9CA3AF] leading-relaxed font-normal">
              {profileData.subheadline}
            </p>

            {/* Primary Technology Stack Bar */}
            <div className="pt-1 pb-1">
              <div className="flex items-center gap-2 mb-2.5">
                <Terminal className="w-4 h-4 text-[#D97706]" aria-hidden="true" />
                <span className="font-mono text-xs text-[#9CA3AF] uppercase tracking-wider">
                  CORE TECHNICAL STACK
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {profileData.coreStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] sm:text-xs px-2.5 py-1 rounded-md bg-[#16181D] text-[#9CA3AF] border border-[rgba(255,255,255,0.08)] hover:border-[#D97706]/40 hover:text-[#F3F4F6] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact Metric Counters Grid */}
            <div className="grid grid-cols-3 gap-3 py-2 border-y border-[rgba(255,255,255,0.08)]">
              <div className="font-mono">
                <div className="text-lg sm:text-2xl font-bold text-[#F3F4F6] flex items-center gap-1">
                  <AnimatedCounter end={50000} suffix="+" />
                </div>
                <div className="text-[10px] sm:text-xs text-[#9CA3AF] uppercase flex items-center gap-1 mt-0.5">
                  <Award className="w-3 h-3 text-[#D97706]" />
                  <span>Store Downloads</span>
                </div>
              </div>

              <div className="font-mono">
                <div className="text-lg sm:text-2xl font-bold text-[#10B981] flex items-center gap-1">
                  <AnimatedCounter end={60} suffix=" FPS" />
                </div>
                <div className="text-[10px] sm:text-xs text-[#9CA3AF] uppercase flex items-center gap-1 mt-0.5">
                  <Zap className="w-3 h-3 text-[#10B981]" />
                  <span>Native Worklets</span>
                </div>
              </div>

              <div className="font-mono">
                <div className="text-lg sm:text-2xl font-bold text-[#3B82F6] flex items-center gap-1">
                  <AnimatedCounter end={99.9} decimals={1} suffix="%" />
                </div>
                <div className="text-[10px] sm:text-xs text-[#9CA3AF] uppercase flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-3 h-3 text-[#3B82F6]" />
                  <span>Crash-Free Rate</span>
                </div>
              </div>
            </div>

            {/* Action Triggers (CTAs) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <Link
                href="#work"
                className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-[#D97706] text-[#08090A] font-mono text-xs sm:text-sm font-bold hover:bg-[#F59E0B] transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-950/40 min-h-[44px]"
              >
                <Layers className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4 shrink-0" aria-hidden="true" />
              </Link>

              <Link
                href="/contact"
                className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-[#16181D] text-[#F3F4F6] font-mono text-xs sm:text-sm font-semibold border border-[rgba(255,255,255,0.16)] hover:border-[#D97706]/50 hover:bg-[#1C1F26] transition-all flex items-center justify-center gap-2 min-h-[44px]"
              >
                <MessageSquare className="w-4 h-4 text-[#D97706] shrink-0" aria-hidden="true" />
                <span>Get in Touch</span>
              </Link>

              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 sm:px-5 py-3 sm:py-3.5 rounded-lg bg-[#16181D] text-[#9CA3AF] hover:text-[#F3F4F6] font-mono text-xs sm:text-sm font-medium border border-[rgba(255,255,255,0.08)] hover:border-[#D97706]/50 hover:bg-[#1C1F26] transition-all flex items-center justify-center gap-2 min-h-[44px]"
              >
                <Download className="w-4 h-4 text-[#D97706] shrink-0" aria-hidden="true" />
                <span>Download Resume</span>
              </a>
            </div>
          </div>

          {/* Right Engineering System Architecture Visual (5 cols desktop) */}
          <div className="lg:col-span-5 pt-4 lg:pt-0">
            <HeroArchitectureVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
