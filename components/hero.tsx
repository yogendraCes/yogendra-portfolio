"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { profileData } from "@/data/profile";
import { Layers, FileText } from "lucide-react";
import { HeroDevice3D } from "./hero-device-3d";

export function Hero() {
  return (
    <section className="relative w-full pt-8 sm:pt-14 pb-16 sm:pb-20 border-b border-[#E4E5E1] bg-[#F3F4F1]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Main Copy Column (7 cols desktop) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Operational Status & Identity Trust Signal */}
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#D1D3CD] shadow-2xs shrink-0 bg-white">
                <Image
                  src={profileData.avatarUrl || "/assets/my/my.png"}
                  alt={profileData.name}
                  fill
                  sizes="40px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E4E5E1] shadow-xs">
                <span className="w-2 h-2 rounded-full bg-[#3FAE64]" aria-hidden="true" />
                <span className="text-xs text-[#5B5F66] font-medium">
                  {profileData.statusText}
                </span>
              </div>
            </div>

            {/* Main Headline (Sentence Case, Confident Display Font) */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#14161A] leading-[1.15]">
              {profileData.headline}
            </h1>

            {/* Subheadline & Secondary Positioning */}
            <div className="space-y-2.5">
              <p className="text-base sm:text-lg text-[#5B5F66] leading-relaxed max-w-[560px]">
                {profileData.subheadline}
              </p>
              {profileData.secondaryPositioning && (
                <p className="text-xs sm:text-sm font-medium text-[#2F6FED] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2F6FED]" aria-hidden="true" />
                  <span>{profileData.secondaryPositioning}</span>
                </p>
              )}
            </div>

            {/* Core Technical Capabilities (Sentence Case Pills) */}
            <div className="pt-1">
              <p className="text-xs font-medium text-[#5B5F66] mb-2.5">
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
                          ? "bg-white text-[#2F6FED] border-[#2F6FED]/30 font-medium"
                          : "bg-white text-[#14161A] border-[#E4E5E1]"
                      }`}
                    >
                      <span>{tech}</span>
                      {isWeb && (
                        <span className="text-[10px] font-medium px-1 rounded bg-[#2F6FED]/10 text-[#2F6FED]">
                          Web
                        </span>
                      )}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Shipped Impact Numbers (Tabular Figures) */}
            <div className="grid grid-cols-3 gap-4 pt-4 pb-2 border-y border-[#E4E5E1]">
              <div>
                <div className="text-2xl sm:text-3xl font-semibold text-[#14161A] tabular-nums">
                  4
                </div>
                <div className="text-xs text-[#5B5F66] mt-0.5">
                  Production apps
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-semibold text-[#14161A] tabular-nums">
                  6.5+
                </div>
                <div className="text-xs text-[#5B5F66] mt-0.5">
                  Years experience
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3xl font-semibold text-[#14161A] tabular-nums">
                  99.8%
                </div>
                <div className="text-xs text-[#5B5F66] mt-0.5">
                  Crash-free rate
                </div>
              </div>
            </div>

            {/* Action Triggers (CTAs) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="#work"
                className="px-5 py-2.5 rounded-lg bg-[#2F6FED] text-white text-sm font-medium hover:bg-[#2256BD] transition-all flex items-center justify-center gap-2 shadow-xs min-h-[44px]"
              >
                <Layers className="w-4 h-4" aria-hidden="true" />
                <span>View selected work</span>
              </Link>

              <Link
                href="/resume"
                className="px-5 py-2.5 rounded-lg bg-white text-[#14161A] text-sm font-medium border border-[#E4E5E1] hover:bg-[#F3F4F1] hover:border-[#D1D3CD] transition-all flex items-center justify-center gap-2 min-h-[44px]"
              >
                <FileText className="w-4 h-4 text-[#5B5F66]" aria-hidden="true" />
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
