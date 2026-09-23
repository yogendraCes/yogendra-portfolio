"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Cpu, RefreshCw, Smartphone, ShieldCheck, Activity, Layers, ChevronRight } from "lucide-react";
import { SpotlightCard } from "./spotlight-card";
import { TelemetrySimulator } from "./telemetry-simulator";

export function ArchitecturePhilosophy() {
  const [activeTab, setActiveTab] = useState<"pillars" | "simulator">("pillars");

  const principles = [
    {
      icon: Cpu,
      title: "UI Threading & Frame-Rate Optimization",
      description:
        "Offloading gesture handlers and frame-critical animations directly to the native UI thread using React Native Reanimated (v3) and Gesture Handler, bypassing JS thread bottlenecks to prevent visual jank.",
      evidenceNote: "Applied in Duracell Energy (60fps telemetry loops) and Puredrive.",
      link: "#work",
    },
    {
      icon: RefreshCw,
      title: "Normalized State & RTK Query Caching",
      description:
        "Replacing unmanaged Redux state with RTK Query normalized API polling and cache invalidation, preventing unnecessary component re-renders during high-frequency telemetry ingestion.",
      evidenceNote: "Applied in Duracell Energy and Puredrive to eliminate full-tree re-renders on 10s cycles.",
      link: "#work",
    },
    {
      icon: Smartphone,
      title: "AppState Lifecycle & Battery Efficiency",
      description:
        "Integrating lifecycle listeners via React Native AppState to automatically freeze active animation loops and cancel network polling when apps enter background or inactive states.",
      evidenceNote: "Applied in Duracell Energy to auto-suspend polling timers during background transitions.",
      link: "#work",
    },
    {
      icon: ShieldCheck,
      title: "Fastlane CI/CD & Code-Signing Match",
      description:
        "Standardizing cross-platform deployment pipelines using Fastlane Match with encrypted Git certificate storage, enabling automated TestFlight and Play Console Internal distribution.",
      evidenceNote: "Applied in Cloud Energy Software for single-command beta deployment to stores.",
      link: "#work",
    },
  ];

  return (
    <section id="architecture" className="w-full py-14 sm:py-20 border-b border-[#219EBC]/15 bg-[#0A1118] scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header & Segmented Controller */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-[680px] space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#E8F1F5]">
              Architectural standards & runtime engineering
            </h2>
            <p className="text-sm sm:text-base text-[#7E9AA8] leading-relaxed">
              Core mobile engineering practices focused on native UI thread offloading, predictable normalized state synchronization, background battery conservation, and push-button release delivery.
            </p>
          </div>

          {/* Apple-Style Segmented Pill Toggle */}
          <div className="inline-flex items-center bg-[#070D13] p-1 rounded-full border border-[#219EBC]/20 shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab("pillars")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "pillars"
                  ? "bg-[#38BDF8] text-[#0A1118] font-bold shadow-sm"
                  : "text-[#7E9AA8] hover:text-[#E8F1F5]"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>4 Architectural Standards</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("simulator")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer flex items-center gap-1.5 ${
                activeTab === "simulator"
                  ? "bg-[#38BDF8] text-[#0A1118] font-bold shadow-sm"
                  : "text-[#7E9AA8] hover:text-[#E8F1F5]"
              }`}
            >
              <Activity className="w-3.5 h-3.5" />
              <span>Live Telemetry Simulator</span>
            </button>
          </div>
        </div>

        {/* View 1: 4 Architecture Standards Bento Grid */}
        {activeTab === "pillars" && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {principles.map((item) => {
                const Icon = item.icon;
                return (
                  <SpotlightCard key={item.title}>
                    <div className="p-6 space-y-4 flex flex-col justify-between h-full">
                      <div className="space-y-3">
                        <div className="w-10 h-10 rounded-xl bg-[#162634] text-[#38BDF8] flex items-center justify-center border border-[#219EBC]/20">
                          <Icon className="w-5 h-5 text-[#38BDF8]" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-[#E8F1F5]">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-[#7E9AA8] leading-relaxed">{item.description}</p>
                      </div>

                      {/* Concrete Attribution Callout */}
                      <div className="pt-3 border-t border-[#219EBC]/15 flex flex-col gap-1 text-xs">
                        <span className="text-xs text-[#7E9AA8] font-medium">
                          Demonstrated in
                        </span>
                        <Link
                          href={item.link}
                          className="text-xs text-[#38BDF8] hover:underline transition-all flex items-center font-semibold"
                        >
                          <span className="leading-snug">{item.evidenceNote}</span>
                        </Link>
                      </div>
                    </div>
                  </SpotlightCard>
                );
              })}
            </div>

            {/* Quick Interactive Prompt to Try Simulator */}
            <div className="p-4 rounded-xl bg-[#070D13]/70 border border-[#219EBC]/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                <span className="text-xs text-[#E8F1F5] font-medium">
                  Experience how these standards isolate high-frequency telemetry at 60 FPS without jank.
                </span>
              </div>
              <button
                type="button"
                onClick={() => setActiveTab("simulator")}
                className="px-3.5 py-1.5 rounded-lg bg-[#162634] hover:bg-[#1B2F40] border border-[#219EBC]/25 text-[#38BDF8] text-xs font-semibold transition-colors flex items-center gap-1.5 self-start sm:self-auto cursor-pointer"
              >
                <span>Launch live telemetry simulator</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}

        {/* View 2: Live Interactive Telemetry Circuit Simulator */}
        {activeTab === "simulator" && (
          <div className="space-y-4">
            <TelemetrySimulator />
            <div className="text-center pt-2">
              <button
                type="button"
                onClick={() => setActiveTab("pillars")}
                className="text-xs text-[#7E9AA8] hover:text-[#38BDF8] underline cursor-pointer"
              >
                ← Back to 4 Architectural Standards
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
