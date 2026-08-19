import React from "react";
import { Cpu, RefreshCw, Smartphone, ShieldCheck, Zap } from "lucide-react";
import { SpotlightCard } from "./spotlight-card";

export function ArchitecturePhilosophy() {
  const principles = [
    {
      icon: Cpu,
      title: "UI Threading & Frame-Rate Optimization",
      description:
        "Offloading gesture handlers and frame-critical animations directly to the native UI thread using React Native Reanimated (v3) and Gesture Handler, bypassing JS thread bottlenecks to prevent visual jank.",
    },
    {
      icon: RefreshCw,
      title: "Normalized State & RTK Query Caching",
      description:
        "Replacing unmanaged Redux state with RTK Query normalized API polling and cache invalidation, preventing unnecessary component re-renders during high-frequency telemetry ingestion.",
    },
    {
      icon: Smartphone,
      title: "AppState Lifecycle & Battery Efficiency",
      description:
        "Integrating lifecycle listeners via React Native AppState to automatically freeze active animation loops and cancel network polling when apps enter background or inactive states.",
    },
    {
      icon: ShieldCheck,
      title: "Fastlane CI/CD & Code-Signing Match",
      description:
        "Standardizing cross-platform deployment pipelines using Fastlane Match with encrypted Git certificate storage, enabling automated TestFlight and Play Console Internal distribution.",
    },
  ];

  return (
    <section id="architecture" className="w-full py-16 sm:py-24 border-b border-[rgba(255,255,255,0.08)] bg-[#0F1115]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="max-w-[760px] space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D97706] tracking-wider uppercase bg-[#D97706]/10 px-3 py-1 rounded-full border border-[#D97706]/30">
            <Zap className="w-4 h-4" />
            <span>ENGINEERING STANDARDS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F3F4F6]">
            Architectural Philosophy
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
            Core technical practices focused on smooth UI thread performance, clean state management, native battery optimization, and automated release delivery.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <SpotlightCard key={item.title}>
                <div className="p-6 space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-[#D97706]/10 text-[#D97706] flex items-center justify-center border border-[#D97706]/30">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-[#F3F4F6]">{item.title}</h3>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed">{item.description}</p>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
