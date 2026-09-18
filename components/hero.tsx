"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { Layers, FileText } from "lucide-react";
import { HeroDevice3D } from "./hero-device-3d";
import { MetricCounter } from "./metric-counter";

export function Hero() {
  return (
    <section className="relative w-full pt-8 sm:pt-14 pb-16 sm:pb-20 border-b border-[#219EBC]/15 bg-[#0A1118]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Copy Column (7 cols desktop) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Operational Status & Identity Trust Signal */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#38BDF8]/30 shadow-xs shrink-0 bg-[#101D28]">
                <Image
                  src={profileData.avatarUrl || "/assets/my/my.png"}
                  alt={profileData.name}
                  fill
                  sizes="40px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101D28] border border-[#219EBC]/20 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_6px_rgba(16,185,129,0.5)] shrink-0" aria-hidden="true" />
                <span className="text-xs text-[#E8F1F5] font-medium">
                  {profileData.statusText}
                </span>
              </div>
            </div>

            {/* Main Headline (Sentence Case, Confident Display Font) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#E8F1F5] leading-[1.15]">
              {profileData.headline}
            </h1>

            {/* Subheadline & Secondary Positioning */}
            <div className="space-y-2.5">
              <p className="text-base sm:text-lg text-[#7E9AA8] leading-relaxed max-w-[560px]">
                {profileData.subheadline}
              </p>
              {profileData.secondaryPositioning && (
                <p className="text-xs sm:text-sm font-semibold text-[#38BDF8] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_6px_rgba(56,189,248,0.6)]" aria-hidden="true" />
                  <span>{profileData.secondaryPositioning}</span>
                </p>
              )}
            </div>

            {/* Core Technical Capabilities (Sentence Case Pills) */}
            <div className="pt-1">
              <p className="text-xs font-semibold text-[#7E9AA8] mb-2.5 uppercase tracking-wider">
                Core technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {profileData.coreStack.map((tech) => {
                  const isWeb = ["React", "Next.js", "Tailwind CSS"].includes(tech);
                  return (
                    <span
                      key={tech}
                      className={`text-xs px-2.5 py-1 rounded-md border shadow-xs flex items-center gap-1.5 ${
                        isWeb
                          ? "bg-[#162634] text-[#E8F1F5] border-[#38BDF8]/40 font-semibold"
                          : "bg-[#101D28] text-[#7E9AA8] border-[#219EBC]/20 font-medium"
                      }`}
                    >
                      <span>{tech}</span>
                      {isWeb && (
                        <span className="text-[10px] font-semibold px-1 rounded bg-[#38BDF8]/20 text-[#38BDF8]">
                          Web
                        </span>
                      )}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Shipped Impact Numbers (Tabular Figures with Spring Rollup) */}
            <div className="grid grid-cols-3 gap-4 pt-4 pb-2 border-y border-[#219EBC]/15">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#E8F1F5] tabular-nums">
                  <MetricCounter value={4} duration={1200} />
                </div>
                <div className="text-xs text-[#7E9AA8] mt-0.5 font-medium">
                  Production apps
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#E8F1F5] tabular-nums">
                  <MetricCounter value={6.5} decimals={1} suffix="+" duration={1400} />
                </div>
                <div className="text-xs text-[#7E9AA8] mt-0.5 font-medium">
                  Years experience
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-bold text-[#E8F1F5] tabular-nums">
                  <MetricCounter value={99.8} decimals={1} suffix="%" duration={1600} />
                </div>
                <div className="text-xs text-[#7E9AA8] mt-0.5 font-medium">
                  Crash-free rate
                </div>
              </div>
            </div>

            {/* Action Triggers (CTAs) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="#work"
                className="px-5 py-2.5 rounded-lg bg-[#38BDF8] text-[#0A1118] text-sm font-semibold hover:bg-[#7DD3FC] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(56,189,248,0.25)] min-h-[44px] cursor-pointer"
              >
                <Layers className="w-4 h-4 text-[#0A1118]" aria-hidden="true" />
                <span>View selected work</span>
              </Link>

              <Link
                href="/resume"
                className="px-5 py-2.5 rounded-lg bg-[#101D28] text-[#E8F1F5] text-sm font-medium border border-[#219EBC]/25 hover:bg-[#162634] hover:border-[#38BDF8]/50 transition-all flex items-center justify-center gap-2 min-h-[44px] cursor-pointer shadow-xs"
              >
                <FileText className="w-4 h-4 text-[#7E9AA8]" aria-hidden="true" />
                <span>Read resume</span>
              </Link>
            </div>
          </div>

          {/* Interactive 3D Device Showcase (5 cols desktop) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <HeroDevice3D />
          </div>
        </div>
      </div>
    </section>
  );
}
