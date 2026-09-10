"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Zap, BarChart2, Calendar, Home, ExternalLink, Cpu, Maximize2, X, ChevronRight } from "lucide-react";

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
      id: "duracell-splash",
      title: "1. Brand launch & splash screen",
      shortLabel: "1. App Splash",
      src: "/projects/duracell-energy/duracell-splash.png",
      alt: "Duracell Energy mobile app splash screen featuring official Duracell Bunny mascot.",
      icon: Cpu,
      badge: "Branding & Entry",
      engineeringContext:
        "Official Duracell-licensed application launch screen featuring native splash asset initialization, auth token rehydration, and background config fetch.",
      technicalDetails: [
        "Native launch screen configuration via Xcode launch storyboards & Android splash theme",
        "Fast token rehydration and async storage state restoration on app launch",
        "Multi-brand white-label asset injection based on build scheme target",
      ],
    },
    {
      id: "home-flow",
      title: "2. Home flow spatial view",
      shortLabel: "2. Home Flow",
      src: "/projects/duracell-energy/home-flow.png",
      alt: "Duracell Energy Home Flow screen showing spatial energy distribution through household circuits.",
      icon: Home,
      badge: "Spatial View",
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
      title: "3. Live energy flow monitor",
      shortLabel: "3. Energy Flow",
      src: "/projects/duracell-energy/energy-flow.png",
      alt: "Duracell Energy Live Usage Monitor showing real-time energy flow across solar, battery, grid, home and EV.",
      icon: Zap,
      badge: "Telemetry Monitor",
      engineeringContext:
        "Primary real-time telemetry dashboard displaying dynamic energy movement between Solar PV, Home Load, Battery Storage, Power Grid, and EV Charger.",
      technicalDetails: [
        "Ingests 10-second API telemetry updates without JS thread congestion",
        "Offloads particle flow animations to native UI thread via Reanimated v3",
        "Supports dynamic multi-state node rendering based on active power tariffs",
      ],
    },
    {
      id: "ev-live-usage",
      title: "4. EV smart charging control",
      shortLabel: "4. EV Charging",
      src: "/projects/duracell-energy/ev-live-usage.png",
      alt: "Duracell Energy EV-1 Live Usage screen showing charge modes, rates, and slider controls.",
      icon: Zap,
      badge: "EV Charging",
      engineeringContext:
        "EV charging management interface providing charge preset modes (Puregreen, GreenBoost, Smart, Timed Boost), target capacity sliders, and live kW telemetry.",
      technicalDetails: [
        "Interactive target kWh capacity slider with debounced API payload dispatch",
        "Preset charging mode selectors modifying tariff-aware charge policies",
        "Real-time grid import vs solar generation surplus allocation math",
      ],
    },
    {
      id: "scheduled-control",
      title: "5. Scheduled energy control",
      shortLabel: "5. Scheduled Control",
      src: "/projects/duracell-energy/scheduled-control.png",
      alt: "Duracell Energy Scheduled Control screen showing user-configurable charging slots, target battery percentages, and charge rates.",
      icon: Calendar,
      badge: "Tariff Control",
      engineeringContext:
        "User-configurable charging and discharging schedules, target battery State of Charge (SoC) percentages, and off-peak grid tariff controls.",
      technicalDetails: [
        "Complex client-side schedule state validation before server sync",
        "Optimistic UI updates for immediate touch feedback during configuration",
        "Time window overlap detection algorithms",
      ],
    },
    {
      id: "energy-insights",
      title: "6. Time-series energy insights",
      shortLabel: "6. Energy Insights",
      src: "/projects/duracell-energy/energy-insights.png",
      alt: "Duracell Energy Insights screen showing interactive daily time-series energy charts.",
      icon: BarChart2,
      badge: "D3 + SVG Charts",
      engineeringContext:
        "Interactive time-series charts rendering multi-source generation, storage, and consumption curves across dynamic daily, monthly, and annual ranges.",
      technicalDetails: [
        "Custom D3 path math (d3-shape, d3-scale) mapped to React Native SVG primitives",
        "Touch inspection tooltips powered by React Native Gesture Handler",
        "Zero WebView overhead for smooth rendering on budget Android devices",
      ],
    },
  ];

  const [activeScreenId, setActiveScreenId] = useState<string>("home-flow");
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const activeScreen = screens.find((s) => s.id === activeScreenId) || screens[0];

  return (
    <div className="w-full bg-[#F3F4F1] border border-[#E4E5E1] rounded-2xl p-4 sm:p-6 overflow-hidden space-y-6">
      {/* Component Header & Store Quick Links */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#E4E5E1]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#3FAE64]" aria-hidden="true" />
            <span className="text-xs text-[#5B5F66] font-medium">
              Shipped product screens
            </span>
          </div>
          <h4 className="text-base sm:text-lg font-semibold text-[#14161A] tracking-tight">
            Duracell Energy mobile app interface
          </h4>
        </div>

        {/* Store Links */}
        <div className="flex flex-wrap items-center gap-2">
          <a
            href="https://apps.apple.com/in/app/duracell-energy/id6460931680"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-white hover:bg-[#F3F4F1] border border-[#E4E5E1] text-[#14161A] text-xs font-medium transition-colors flex items-center gap-1.5 shadow-2xs"
          >
            <span>App Store</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#2F6FED]" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.duracell"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-lg bg-white hover:bg-[#F3F4F1] border border-[#E4E5E1] text-[#14161A] text-xs font-medium transition-colors flex items-center gap-1.5 shadow-2xs"
          >
            <span>Google Play</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#3FAE64]" />
          </a>
        </div>
      </div>

      {/* Screen Selector Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {screens.map((screen) => {
          const Icon = screen.icon;
          const isActive = screen.id === activeScreenId;
          return (
            <button
              key={screen.id}
              onClick={() => setActiveScreenId(screen.id)}
              className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 border shrink-0 cursor-pointer ${
                isActive
                  ? "bg-[#2F6FED] text-white border-[#2F6FED] shadow-xs"
                  : "bg-white text-[#5B5F66] border-[#E4E5E1] hover:text-[#14161A] hover:bg-[#F3F4F1]"
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? "text-white" : "text-[#5B5F66]"}`} />
              <span>{screen.shortLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Feature Display Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center pt-2">
        {/* Left Column: Realistic iPhone Hardware Mockup */}
        <div className="md:col-span-5 flex justify-center">
          <div className="relative group cursor-pointer select-none" onClick={() => setIsLightboxOpen(true)}>
            {/* Phone Chassis Frame */}
            <div className="relative w-[230px] sm:w-[250px] rounded-[40px] bg-[#1C1E22] p-3 border border-[#3A3F47] shadow-xl">
              {/* Top Dynamic Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-black rounded-full z-30 flex items-center justify-between px-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3FAE64]" />
                <span className="w-1 h-1 rounded-full bg-zinc-800" />
              </div>

              {/* Hover Zoom Overlay Badge */}
              <div className="absolute inset-0 rounded-[38px] bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity z-30 flex items-center justify-center">
                <span className="px-3 py-1.5 rounded-full bg-white text-[#14161A] text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                  <Maximize2 className="w-3.5 h-3.5 text-[#2F6FED]" />
                  <span>Click to zoom</span>
                </span>
              </div>

              {/* Screen Display Box */}
              <div className="relative w-full aspect-[9/19.5] rounded-[30px] overflow-hidden bg-black">
                <Image
                  src={activeScreen.src}
                  alt={activeScreen.alt}
                  fill
                  priority={activeScreen.id === "home-flow"}
                  sizes="(max-width: 640px) 230px, 250px"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Engineering Context */}
        <div className="md:col-span-7 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#2F6FED] font-medium bg-[#2F6FED]/10 px-2.5 py-0.5 rounded-full border border-[#2F6FED]/20">
              {activeScreen.badge}
            </span>
            <span className="text-xs text-[#7E8490]">
              Screen {screens.findIndex((s) => s.id === activeScreenId) + 1} of {screens.length}
            </span>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-[#14161A] tracking-tight">
              {activeScreen.title}
            </h3>
            <p className="text-sm text-[#5B5F66] leading-relaxed mt-1">
              {activeScreen.engineeringContext}
            </p>
          </div>

          {/* Technical Implementation Callout */}
          <div className="bg-white border border-[#E4E5E1] rounded-xl p-4 space-y-2 shadow-xs">
            <div className="text-xs text-[#14161A] font-semibold flex items-center gap-1.5">
              <Cpu className="w-4 h-4 text-[#2F6FED]" />
              <span>Engineering implementation</span>
            </div>
            <ul className="space-y-1.5 text-xs text-[#5B5F66]">
              {activeScreen.technicalDetails.map((detail, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <ChevronRight className="w-3.5 h-3.5 text-[#2F6FED] shrink-0 mt-0.5" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Lightbox Modal for High-Resolution Inspection */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-3xl w-full bg-white border border-[#E4E5E1] rounded-2xl overflow-hidden p-6 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E4E5E1]">
              <div>
                <h3 className="font-semibold text-base text-[#14161A]">{activeScreen.title}</h3>
                <span className="text-xs text-[#2F6FED]">{activeScreen.badge}</span>
              </div>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-1.5 rounded-lg bg-[#F3F4F1] hover:bg-[#E4E5E1] text-[#14161A] transition-colors cursor-pointer"
                aria-label="Close modal"
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
