"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Zap, BarChart2, Calendar, Home, Battery, ShieldCheck, ChevronRight, ExternalLink, Cpu, Sparkles } from "lucide-react";

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
      id: "home-flow",
      title: "1. Home Flow Spatial View",
      shortLabel: "1. Home Flow",
      src: "/assets/projects/duracell-energy/home-flow.png",
      alt: "Duracell Energy Home Flow screen showing spatial energy distribution through the household electrical system.",
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
    {
      id: "energy-flow",
      title: "2. Live Energy Flow Monitor (Energy Glow)",
      shortLabel: "2. Energy Flow",
      src: "/assets/projects/duracell-energy/energy-flow.png",
      alt: "Duracell Energy Live Usage Monitor showing energy flow between solar, home, battery, grid and EV.",
      icon: Zap,
      badge: "FEATURED HERO VISUAL",
      engineeringContext:
        "Primary real-time telemetry dashboard displaying dynamic energy movement between Solar PV (+4.85 kW), Home Load (5.4 kW), Battery Storage (+2.1 kW, 87% SoC), Power Grid, and EV Charger.",
      technicalDetails: [
        "Ingests 10-second polling API telemetry without JS thread congestion",
        "Offloads particle animation loops to native UI thread via Reanimated v3",
        "Supports dynamic multi-state node rendering based on active power tariffs",
      ],
    },
    {
      id: "energy-insights",
      title: "3. Time-Series Energy Insights",
      shortLabel: "3. Energy Insights",
      src: "/assets/projects/duracell-energy/energy-insights.png",
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
      id: "system-overview",
      title: "4. System Overview & Hardware Nodes",
      shortLabel: "4. System Overview",
      src: "/assets/projects/duracell-energy/system-overview.png",
      alt: "Duracell Energy System Overview screen showing connected hardware nodes and system health status.",
      icon: ShieldCheck,
      badge: "SYSTEM HEALTH & NODES",
      engineeringContext:
        "Hardware topology and battery storage health interface monitoring connected inverter status, battery pack temperature, grid sync status, and active firmware versions.",
      technicalDetails: [
        "Hardware node state aggregation via RTK Query normalized cache",
        "Real-time offline fallback detection and reconnection retry timers",
        "Structured diagnostic layout for system status reporting",
      ],
    },
    {
      id: "energy-summary",
      title: "5. Aggregated Energy Summary",
      shortLabel: "5. Energy Summary",
      src: "/assets/projects/duracell-energy/energy-summary.png",
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
      id: "scheduled-control",
      title: "6. Scheduled Energy Control",
      shortLabel: "6. Schedules",
      src: "/assets/projects/duracell-energy/scheduled-control.png",
      alt: "Duracell Energy Scheduled Control screen showing user-configurable charging slots, target battery percentages, and charge rates.",
      icon: Calendar,
      badge: "STATE MANAGEMENT",
      engineeringContext:
        "User-configurable charging and discharging schedules, target battery State of Charge (SoC) percentages, and off-peak grid tariff controls.",
      technicalDetails: [
        "Complex client-side schedule state validation before server sync",
        "Optimistic UI updates for immediate touch feedback during configuration",
        "Time window overlap detection algorithms",
      ],
    },
    {
      id: "scheduled-charge-edit",
      title: "7. Schedule Slot Time Picker",
      shortLabel: "7. Schedule Editor",
      src: "/assets/projects/duracell-energy/scheduled-charge-edit.png",
      alt: "Duracell Energy Schedule Editor screen showing time picker for setting off-peak charging schedules.",
      icon: Calendar,
      badge: "TIME PICKER INTERACTION",
      engineeringContext:
        "Modal time selection interface for setting start/end times and target charge rates for off-peak grid tariff windows.",
      technicalDetails: [
        "Custom time-picker component integration",
        "State validation preventing start time after end time conflicts",
      ],
    },
    {
      id: "ev-live-usage",
      title: "8. EV Charger Session Monitor",
      shortLabel: "8. EV Charger",
      src: "/assets/projects/duracell-energy/ev-live-usage.png",
      alt: "Duracell Energy EV Live Usage screen showing active vehicle charging session status and power rate.",
      icon: Zap,
      badge: "EV TELEMETRY",
      engineeringContext:
        "Dedicated EV charger telemetry interface monitoring active vehicle charging session rate (kW), session duration, and total energy delivered.",
      technicalDetails: [
        "Real-time charging state triggers and current limit configurations",
        "Session telemetry accumulation and charging summary updates",
      ],
    },
    {
      id: "duracell-splash",
      title: "9. Native App Cold-Start & White-Label Branding",
      shortLabel: "9. App Boot Splash",
      src: "/assets/projects/duracell-energy/duracell-splash.png",
      alt: "Duracell Energy official native mobile app splash screen during application cold-start initialization.",
      icon: Sparkles,
      badge: "NATIVE BOOT & BRANDING",
      engineeringContext:
        "Native app splash and boot screen handling cold-start initialization, dynamic white-label brand token injection, and user authentication state resolution.",
      technicalDetails: [
        "Configured iOS LaunchScreen.storyboard & Android launch_screen.xml",
        "Smooth transition from native boot splash to React Native JS bundle initialization",
        "White-label asset bundling for Duracell Energy & Puredrive branding targets",
      ],
    },
  ];

  const [activeScreenId, setActiveScreenId] = useState<string>("home-flow");
  const activeScreen = screens.find((s) => s.id === activeScreenId) || screens[0];

  return (
    <div className="w-full bg-[#0B0D10] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 sm:p-6 overflow-hidden space-y-6">
      {/* Component Header & Store Quick Badges */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[rgba(255,255,255,0.08)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="font-mono text-[10px] sm:text-xs text-[#9CA3AF] tracking-wider uppercase">
              AUTHENTIC PRODUCTION MEDIA // SHIPPED IOS & ANDROID APP
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-bold text-[#F3F4F6] tracking-tight">
            Duracell Energy Mobile Application Screenshots
          </h4>
        </div>

        {/* Public Store Badges */}
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="https://apps.apple.com/in/app/duracell-energy/id6460931680"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded bg-[#16181D] hover:bg-[#1C1F26] border border-[rgba(255,255,255,0.12)] text-[#F3F4F6] font-mono text-[11px] font-medium transition-colors flex items-center gap-1.5"
          >
            <span>View on App Store</span>
            <ExternalLink className="w-3 h-3 text-[#D97706]" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.duracell"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1.5 rounded bg-[#16181D] hover:bg-[#1C1F26] border border-[rgba(255,255,255,0.12)] text-[#F3F4F6] font-mono text-[11px] font-medium transition-colors flex items-center gap-1.5"
          >
            <span>Get it on Google Play</span>
            <ExternalLink className="w-3 h-3 text-[#10B981]" />
          </a>
        </div>
      </div>

      {/* Creative Splash & Boot Callout Banner */}
      <div className="p-3 bg-[#16181D] border border-[rgba(255,255,255,0.08)] rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs">
        <div className="flex items-center gap-2 text-[#F3F4F6]">
          <Sparkles className="w-4 h-4 text-[#D97706] shrink-0" />
          <span><strong className="text-[#D97706]">Duracell Licensed Branding:</strong> Native app boot, white-label asset loading & real-time telemetry screens.</span>
        </div>
        <button
          onClick={() => setActiveScreenId("duracell-splash")}
          className="text-[11px] text-[#D97706] hover:text-[#F59E0B] font-bold underline underline-offset-4 shrink-0 text-left sm:text-right"
        >
          View Native Boot Splash →
        </button>
      </div>

      {/* Screen Selector Tabs (Horizontal Scrollable Strip in Exact Requested Sequence) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-zinc-800">
        {screens.map((screen) => {
          const Icon = screen.icon;
          const isActive = screen.id === activeScreenId;
          return (
            <button
              key={screen.id}
              onClick={() => setActiveScreenId(screen.id)}
              className={`px-3 py-2 rounded-lg font-mono text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 border shrink-0 ${
                isActive
                  ? "bg-[#16181D] text-[#F3F4F6] border-[#D97706] shadow-sm shadow-amber-950/30"
                  : "bg-[#0F1115] text-[#9CA3AF] border-[rgba(255,255,255,0.06)] hover:text-[#F3F4F6] hover:border-zinc-700"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-[#D97706]" : "text-[#9CA3AF]"}`} />
              <span>{screen.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Main Feature Display Grid (Device Frame + Technical Details) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
        {/* Left Column: Device Frame with Real App Screenshot */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[260px] sm:max-w-[280px] rounded-[36px] bg-[#16181D] p-3 border-2 border-[rgba(255,255,255,0.14)] shadow-2xl shadow-black/80 group">
            {/* Phone Notch/Island Decorative Frame Bar */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#08090A] rounded-full z-20 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-[#16181D]" />
            </div>

            {/* Inner Screen Aspect Container */}
            <div className="relative w-full aspect-[9/19.5] rounded-[28px] overflow-hidden bg-[#08090A]">
              <Image
                src={activeScreen.src}
                alt={activeScreen.alt}
                fill
                priority={activeScreen.id === "home-flow" || activeScreen.id === "energy-flow"}
                sizes="(max-width: 640px) 260px, 280px"
                className="object-contain object-center transition-opacity duration-300"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Engineering Context & Technical Breakdown */}
        <div className="md:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[10px] sm:text-xs text-[#D97706] font-semibold uppercase bg-[#D97706]/10 px-2.5 py-1 rounded border border-[#D97706]/30">
              {activeScreen.badge}
            </span>
            <span className="font-mono text-xs text-[#9CA3AF]">
              PROD SCREENSHOT 0{screens.findIndex((s) => s.id === activeScreenId) + 1} / 09
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

          {/* Technical Implementation Highlights */}
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
    </div>
  );
}
