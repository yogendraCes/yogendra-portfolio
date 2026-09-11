"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Project } from "@/types";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Smartphone,
  Tablet,
  Monitor,
  Cpu,
} from "lucide-react";

interface ProjectScreenshotsGalleryProps {
  project: Project;
}

export function ProjectScreenshotsGallery({ project }: ProjectScreenshotsGalleryProps) {
  const screenshots = project.screenshots || [];
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const active = screenshots[activeIndex] || screenshots[0];
  const isTablet =
    active?.url.includes("4.webp") ||
    active?.category?.toLowerCase().includes("tablet") ||
    active?.category?.toLowerCase().includes("ipad");
  const isBrowser =
    active?.category?.toLowerCase().includes("web") ||
    active?.category?.toLowerCase().includes("browser") ||
    active?.category?.toLowerCase().includes("desktop") ||
    active?.category?.toLowerCase().includes("admin") ||
    active?.category?.toLowerCase().includes("storefront") ||
    active?.category?.toLowerCase().includes("industrial") ||
    active?.category?.toLowerCase().includes("matrix") ||
    active?.category?.toLowerCase().includes("actuator") ||
    active?.category?.toLowerCase().includes("distributor") ||
    active?.category?.toLowerCase().includes("transmission") ||
    active?.url.includes("zenyme") ||
    active?.url.includes("vhp") ||
    project.slug === "vhp-linear-motions";

  const browserDisplayHost = (() => {
    const targetUrl = project.liveDemoUrl || project.links?.demo;
    if (targetUrl) {
      try {
        return new URL(targetUrl).hostname;
      } catch {
        return targetUrl.replace(/^https?:\/\//, "").split("/")[0];
      }
    }
    if (project.slug === "vhp-linear-motions") {
      return "saloon-app-wxmd.vercel.app";
    }
    return "saloon-app-teal.vercel.app";
  })();

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  }, [screenshots.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  }, [screenshots.length]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen, handleNext, handlePrev]);

  if (screenshots.length === 0) {
    return null;
  }

  return (
    <div className="w-full bg-[#F3F4F1] border border-[#E4E5E1] rounded-2xl p-4 sm:p-6 overflow-hidden space-y-6">
      {/* Component Header & Store / Demo Quick Links */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#E4E5E1]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#3FAE64]" aria-hidden="true" />
            <span className="text-xs text-[#5B5F66] font-medium">
              Verified production interface
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-semibold text-[#14161A] tracking-tight">
            {project.title} real interface screens
          </h3>
        </div>

        {/* Store & Platform Quick Links */}
        <div className="flex flex-wrap items-center gap-2">
          {project.links?.appStore && (
            <a
              href={project.links.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-white hover:bg-[#F3F4F1] border border-[#E4E5E1] text-[#14161A] text-xs font-medium transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <span>App Store</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#2F6FED]" aria-hidden="true" />
            </a>
          )}
          {project.links?.playStore && (
            <a
              href={project.links.playStore}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-white hover:bg-[#F3F4F1] border border-[#E4E5E1] text-[#14161A] text-xs font-medium transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <span>Google Play</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#3FAE64]" aria-hidden="true" />
            </a>
          )}
          {project.links?.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-lg bg-white hover:bg-[#F3F4F1] border border-[#E4E5E1] text-[#14161A] text-xs font-medium transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <span>Live platform</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#2F6FED]" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {/* Screen Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {screenshots.map((screen, idx) => {
          const isActive = idx === activeIndex;
          const label = screen.shortLabel || screen.category || `Screen ${idx + 1}`;
          return (
            <button
              key={screen.url}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 border shrink-0 cursor-pointer ${
                isActive
                  ? "bg-[#2F6FED] text-white border-[#2F6FED] shadow-xs"
                  : "bg-white text-[#5B5F66] border-[#E4E5E1] hover:text-[#14161A] hover:bg-[#F3F4F1]"
              }`}
            >
              <span className="w-4 h-4 rounded-full bg-black/10 flex items-center justify-center text-[10px] font-semibold">
                {idx + 1}
              </span>
              <span>{label}</span>
            </button>
          );
        })}
      </div>

      {/* Feature Display Area */}
      <div className={`grid grid-cols-1 ${isBrowser ? "md:grid-cols-12" : "md:grid-cols-12"} gap-6 items-center pt-2`}>
        {/* Hardware / Browser Mockup Display */}
        <div className={`${isBrowser ? "md:col-span-6" : "md:col-span-5"} flex justify-center`}>
          <div
            className="relative group cursor-pointer select-none w-full flex justify-center"
            onClick={() => setIsLightboxOpen(true)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsLightboxOpen(true);
              }
            }}
            aria-label={`View full size image for ${active.caption}`}
          >
            {/* Chassis Frame Container */}
            {isBrowser ? (
              // Desktop Browser Chassis Frame
              <div className="relative w-full max-w-[460px] rounded-2xl bg-[#1C1E22] p-2.5 sm:p-3 border border-[#3A3F47] shadow-xl">
                {/* Browser Top Window Bar */}
                <div className="flex items-center gap-2 pb-2.5 px-1 border-b border-[#2D3139]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                  </div>
                  <div className="flex-1 max-w-[220px] mx-auto h-5 bg-[#121417] rounded-md text-[10px] text-zinc-400 flex items-center justify-center font-mono px-2 truncate border border-[#2D3139]">
                    {browserDisplayHost}
                  </div>
                </div>

                {/* Hover Zoom Overlay Badge */}
                <div className="absolute inset-0 rounded-2xl bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity z-30 flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-full bg-white text-[#14161A] text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 text-[#2F6FED]" aria-hidden="true" />
                    <span>Click to zoom</span>
                  </span>
                </div>

                {/* Screen Display Area */}
                <div className="relative w-full aspect-[16/10] rounded-lg overflow-hidden bg-black mt-2">
                  <Image
                    src={active.url}
                    alt={active.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 460px"
                    className="object-cover object-top"
                    priority={activeIndex === 0}
                  />
                </div>
              </div>
            ) : isTablet ? (
              // Tablet / iPad Chassis Frame
              <div className="relative w-[280px] sm:w-[320px] rounded-[28px] bg-[#1C1E22] p-3 border border-[#3A3F47] shadow-xl">
                {/* Tablet Camera Dot */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-zinc-800" />

                {/* Hover Zoom Overlay Badge */}
                <div className="absolute inset-0 rounded-[26px] bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity z-30 flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-full bg-white text-[#14161A] text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 text-[#2F6FED]" aria-hidden="true" />
                    <span>Click to zoom</span>
                  </span>
                </div>

                {/* Screen Display Area */}
                <div className="relative w-full aspect-[1121/1440] rounded-[18px] overflow-hidden bg-black">
                  <Image
                    src={active.url}
                    alt={active.alt}
                    fill
                    sizes="(max-width: 640px) 280px, 320px"
                    className="object-cover object-top"
                    priority={activeIndex === 0}
                  />
                </div>
              </div>
            ) : (
              // Smartphone Chassis Frame
              <div className="relative w-[220px] sm:w-[240px] rounded-[40px] bg-[#1C1E22] p-3 border border-[#3A3F47] shadow-xl">
                {/* Top Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-between px-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#3FAE64]" />
                  <span className="w-1 h-1 rounded-full bg-zinc-800" />
                </div>

                {/* Hover Zoom Overlay Badge */}
                <div className="absolute inset-0 rounded-[38px] bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity z-30 flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-full bg-white text-[#14161A] text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                    <Maximize2 className="w-3.5 h-3.5 text-[#2F6FED]" aria-hidden="true" />
                    <span>Click to zoom</span>
                  </span>
                </div>

                {/* Screen Display Area */}
                <div className="relative w-full aspect-[9/19.5] rounded-[30px] overflow-hidden bg-black">
                  <Image
                    src={active.url}
                    alt={active.alt}
                    fill
                    sizes="(max-width: 640px) 220px, 240px"
                    className="object-cover object-top"
                    priority={activeIndex === 0}
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Context & Metadata */}
        <div className={`${isBrowser ? "md:col-span-6" : "md:col-span-7"} space-y-4`}>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              {active.category && (
                <span className="text-xs text-[#2F6FED] font-medium bg-[#2F6FED]/10 px-2.5 py-0.5 rounded-full border border-[#2F6FED]/20">
                  {active.category}
                </span>
              )}
              <span className="text-xs text-[#7E8490]">
                Screen {activeIndex + 1} of {screenshots.length}
              </span>
            </div>

            {/* Device form factor indicator */}
            <div className="inline-flex items-center gap-1.5 text-xs text-[#7E8490]">
              {isBrowser ? (
                <>
                  <Monitor className="w-3.5 h-3.5 text-[#2F6FED]" aria-hidden="true" />
                  <span>Web application</span>
                </>
              ) : isTablet ? (
                <>
                  <Tablet className="w-3.5 h-3.5 text-[#2F6FED]" aria-hidden="true" />
                  <span>Tablet layout</span>
                </>
              ) : (
                <>
                  <Smartphone className="w-3.5 h-3.5 text-[#2F6FED]" aria-hidden="true" />
                  <span>Mobile layout</span>
                </>
              )}
            </div>
          </div>

          <div>
            <h4 className="text-lg sm:text-xl font-semibold text-[#14161A] tracking-tight">
              {active.caption}
            </h4>
            <p className="text-sm text-[#5B5F66] leading-relaxed mt-2">
              {active.engineeringContext || active.alt}
            </p>
          </div>

          {/* Technical Implementation Callout */}
          <div className="bg-white border border-[#E4E5E1] rounded-xl p-4 space-y-2.5 shadow-xs">
            <div className="text-xs text-[#14161A] font-semibold flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-[#2F6FED]" aria-hidden="true" />
              <span>Engineering implementation</span>
            </div>
            {active.technicalDetails && active.technicalDetails.length > 0 ? (
              <ul className="space-y-1.5 text-xs text-[#5B5F66]">
                {active.technicalDetails.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <ChevronRight className="w-3.5 h-3.5 text-[#2F6FED] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-xs text-[#5B5F66] leading-relaxed">
                Real screen capture from the production application as deployed on user devices.
                Demonstrates component architecture, responsive design adaptation, and client data flows.
              </p>
            )}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="p-2 rounded-lg bg-white hover:bg-[#F3F4F1] border border-[#E4E5E1] text-[#14161A] transition-colors cursor-pointer"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-2 rounded-lg bg-white hover:bg-[#F3F4F1] border border-[#E4E5E1] text-[#14161A] transition-colors cursor-pointer"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="text-xs text-[#2F6FED] hover:underline font-medium flex items-center gap-1 cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Full resolution inspect</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Screenshot lightbox view"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between text-white pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/20">
                  {active.category || `Screen ${activeIndex + 1}`}
                </span>
                <span className="text-xs text-white/70">
                  {activeIndex + 1} of {screenshots.length}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Main Modal Image */}
            <div className="relative w-full max-h-[72vh] h-[650px] flex items-center justify-center">
              <Image
                src={active.url}
                alt={active.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 800px"
                className="object-contain"
                priority
              />

              {/* Prev / Next Floating Controls */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white border border-white/20 transition-colors cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Modal Caption */}
            <div className="w-full text-center text-white/90 pt-3 text-xs sm:text-sm">
              <div className="font-semibold text-white">{active.caption}</div>
              <div className="text-white/70 text-xs mt-0.5">{active.alt}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
