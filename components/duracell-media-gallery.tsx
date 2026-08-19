"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Zap, BarChart2, Calendar, Home, Battery, ExternalLink, Cpu, Maximize2, X, ChevronRight } from "lucide-react";

interface ScreenItem {
  id: string;
  title: string;
  shortLabel: string;
  src: string;
  alt: string;
  icon: React.ElementType;
  badge: string;
  engineeringContext: string;
  technicalDetails: string[];
}

export function DuracellMediaGallery() {
  const screens: ScreenItem[] = [
    {
      id: "energy-flow",
      title: "1. Live Energy Flow Monitor",
      shortLabel: "1. Energy Flow",
      src: "/projects/duracell-energy/energy-flow.png",
      alt: "Duracell Energy Live Usage Monitor showing real-time energy flow across solar, battery, grid, home and EV.",
      icon: Zap,
      badge: "PRIMARY MONITORING",
      engineeringContext:
        "Primary real-time telemetry dashboard displaying dynamic energy movement between Solar PV, Home Load, Battery Storage, Power Grid, and EV Charger.",
      technicalDetails: [
        "Ingests 10-second API telemetry updates without JS thread congestion",
        "Offloads particle flow animations to native UI thread via Reanimated v3",
        "Supports dynamic multi-state node rendering based on active power tariffs",
      ],
    },
    {
      id: "energy-summary",
      title: "2. Aggregated Energy Summary",
      shortLabel: "2. Energy Summary",
      src: "/projects/duracell-energy/energy-summary.png",
      alt: "Duracell Energy Summary screen showing daily energy metrics for solar generation, battery charge, household load, and grid export.",
      icon: Battery,
      badge: "DAILY METRICS SUMMARY",
      engineeringContext:
        "High-density metric summary displaying total daily solar generation, battery charge history, grid import/export tariffs, and home consumption totals.",
      technicalDetails: [
        "Normalized state payload extraction for instant metric rendering",
        "Component memoization preventing unnecessary re-renders on data ticks",
        "Clean responsive visual hierarchy optimized for fast scanning",
      ],
    },
    {
      id: "energy-insights",
      title: "3. Time-Series Energy Insights",
      shortLabel: "3. Energy Insights",
      src: "/projects/duracell-energy/energy-insights.png",
      alt: "Duracell Energy Insights screen showing interactive daily time-series energy charts.",
      icon: BarChart2,
      badge: "D3 + SVG CHARTING",
      engineeringContext:
        "Interactive time-series charts rendering multi-source generation, storage, and consumption curves across dynamic daily, monthly, and annual ranges.",
      technicalDetails: [
        "Custom D3 path math (d3-shape, d3-scale) mapped to React Native SVG primitives",
        "Touch inspection tooltips powered by React Native Gesture Handler",
        "Zero WebView overhead for smooth rendering on budget Android devices",
      ],
    },
    {
      id: "scheduled-control",
      title: "4. Scheduled Energy Control",
      shortLabel: "4. Scheduled Control",
      src: "/projects/duracell-energy/scheduled-control.png",
      alt: "Duracell Energy Scheduled Control screen showing user-configurable charging slots, target battery percentages, and charge rates.",
      icon: Calendar,
      badge: "STATE & TARIFF CONTROL",
      engineeringContext:
        "User-configurable charging and discharging schedules, target battery State of Charge (SoC) percentages, and off-peak grid tariff controls.",
      technicalDetails: [
        "Complex client-side schedule state validation before server sync",
        "Optimistic UI updates for immediate touch feedback during configuration",
        "Time window overlap detection algorithms",
      ],
    },
    {
      id: "home-flow",
      title: "5. Home Flow Spatial View",
      shortLabel: "5. Home Flow",
      src: "/projects/duracell-energy/home-flow.png",
      alt: "Duracell Energy Home Flow screen showing spatial energy distribution through household circuits.",
      icon: Home,
      badge: "SPATIAL VISUALIZATION",
      engineeringContext:
        "Spatial energy visualization mode illustrating directional power flow through household circuits, connected appliances, and storage nodes.",
      technicalDetails: [
        "Custom SVG circuit paths and real-time directional particle loops",
        "Color-coded node status reflecting net power draw vs generation",
        "AppState lifecycle suspension to freeze rendering during background states",
      ],
    },
  ];

  const [activeScreenId, setActiveScreenId] = useState<string>("energy-flow");
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const activeScreen = screens.find((s) => s.id === activeScreenId) || screens[0];

  return (
    <div className="w-full bg-[#0B0D10] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 sm:p-6 overflow-hidden space-y-6">
      {/* Component Header & Store Quick Links */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[rgba(255,255,255,0.08)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" aria-hidden="true" />
            <span className="font-mono text-[10px] sm:text-xs text-[#9CA3AF] tracking-wider uppercase">
              PRODUCTION MOBILE APPLICATION // SHIPPED PRODUCT MEDIA
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-[#F3F4F6] tracking-tight">
            Duracell Energy Mobile Application Screenshots
          </h4>
        </div>

        {/* Store Links */}
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="https://apps.apple.com/in/app/duracell-energy/id6460931680"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded bg-[#16181D] hover:bg-[#1C1F26] border border-[rgba(255,255,255,0.12)] hover:border-[#D97706]/40 text-[#F3F4F6] font-mono text-xs font-medium transition-colors flex items-center gap-1.5"
          >
            <span>View on App Store</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#D97706]" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.duracell"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded bg-[#16181D] hover:bg-[#1C1F26] border border-[rgba(255,255,255,0.12)] hover:border-[#10B981]/40 text-[#F3F4F6] font-mono text-xs font-medium transition-colors flex items-center gap-1.5"
          >
            <span>Get it on Google Play</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#10B981]" />
          </a>
        </div>
      </div>

      {/* Screen Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-800">
        {screens.map((screen) => {
          const Icon = screen.icon;
          const isActive = screen.id === activeScreenId;
          return (
            <button
              key={screen.id}
              onClick={() => setActiveScreenId(screen.id)}
              className={`px-3 py-2 rounded-lg font-mono text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 border shrink-0 cursor-pointer ${
                isActive
                  ? "bg-[#16181D] text-[#F3F4F6] border-[#D97706] shadow-md shadow-amber-950/40"
                  : "bg-[#0F1115] text-[#9CA3AF] border-[rgba(255,255,255,0.06)] hover:text-[#F3F4F6] hover:border-zinc-700"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#D97706]" : "text-[#9CA3AF]"}`} />
              <span>{screen.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Feature Display Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
        {/* Left Column: Hyper-Realistic iPhone Hardware Mockup */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative group cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
            {/* Ambient Backlight Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#D97706]/20 via-[#10B981]/20 to-[#3B82F6]/20 rounded-[40px] blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />

            {/* Phone Chassis Frame */}
            <div className="relative w-[240px] sm:w-[260px] rounded-[44px] bg-gradient-to-b from-[#2D323E] via-[#16181D] to-[#0B0D10] p-3 border-2 border-zinc-700/80 shadow-2xl shadow-black">
              {/* Top Notch Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-black rounded-full z-30 flex items-center justify-between px-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981]/80" />
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-800" />
              </div>

              {/* Glass Reflection Sheen */}
              <div className="absolute inset-0 rounded-[44px] bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none z-20" />

              {/* Hover Zoom Overlay Badge */}
              <div className="absolute inset-0 rounded-[40px] bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-30 flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-full bg-[#0F1115]/90 border border-[#D97706]/50 font-mono text-xs text-[#F3F4F6] font-bold flex items-center gap-1.5 shadow-xl">
                  <Maximize2 className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Click to Zoom</span>
                </span>
              </div>

              {/* Screen Display Box */}
              <div className="relative w-full aspect-[9/19.5] rounded-[34px] overflow-hidden bg-[#08090A] border border-black/80">
                <Image
                  src={activeScreen.src}
                  alt={activeScreen.alt}
                  fill
                  priority={activeScreen.id === "energy-flow"}
                  sizes="(max-width: 640px) 240px, 260px"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Engineering Context */}
        <div className="md:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] sm:text-xs text-[#D97706] font-semibold uppercase bg-[#D97706]/10 px-2.5 py-1 rounded border border-[#D97706]/30">
              {activeScreen.badge}
            </span>
            <span className="font-mono text-xs text-[#9CA3AF]">
              SCREENSHOT 0{screens.findIndex((s) => s.id === activeScreenId) + 1} / 05
            </span>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#F3F4F6] tracking-tight">
              {activeScreen.title}
            </h3>
            <p className="text-sm text-[#9CA3AF] leading-relaxed mt-2">
              {activeScreen.engineeringContext}
            </p>
          </div>

          {/* Technical Implementation Callout */}
          <div className="bg-[#0F1115] border border-[rgba(255,255,255,0.08)] rounded-lg p-4 space-y-2">
            <div className="font-mono text-xs text-[#D97706] font-semibold uppercase flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-[#10B981]" />
              <span>ENGINEERING IMPLEMENTATION</span>
            </div>
            <ul className="space-y-1.5 text-xs text-[#9CA3AF] font-sans">
              {activeScreen.technicalDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-[#D97706] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for High-Resolution Inspection */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6" onClick={() => setIsLightboxOpen(false)}>
          <div className="relative max-w-4xl w-full bg-[#0F1115] border border-zinc-700 rounded-2xl overflow-hidden p-6 space-y-4" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div>
                <h3 className="font-bold text-lg text-[#F3F4F6]">{activeScreen.title}</h3>
                <span className="font-mono text-xs text-[#D97706]">{activeScreen.badge}</span>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 rounded-lg bg-[#16181D] hover:bg-zinc-800 text-[#9CA3AF] hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* High Res Image Container */}
            <div className="relative w-full max-h-[70vh] aspect-[9/19] mx-auto overflow-hidden rounded-xl bg-black flex items-center justify-center">
              <Image
                src={activeScreen.src}
                alt={activeScreen.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
