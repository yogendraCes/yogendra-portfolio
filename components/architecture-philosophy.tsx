import React from "react";
import Link from "next/link";
import { Cpu, RefreshCw, Smartphone, ShieldCheck } from "lucide-react";
import { SpotlightCard } from "./spotlight-card";

export function ArchitecturePhilosophy() {
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
    <section id="architecture" className="w-full py-14 sm:py-20 border-b border-[#E4E5E1] bg-[#F3F4F1]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-[680px] space-y-2">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#14161A]">
            Architectural standards
          </h2>
          <p className="text-sm sm:text-base text-[#5B5F66] leading-relaxed">
            Core mobile engineering practices focused on native UI thread offloading, predictable normalized state synchronization, background battery conservation, and push-button release delivery.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((item) => {
            const Icon = item.icon;
            return (
              <SpotlightCard key={item.title}>
                <div className="p-6 space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#2F6FED]/10 text-[#2F6FED] flex items-center justify-center border border-[#2F6FED]/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold text-[#14161A]">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-[#5B5F66] leading-relaxed">{item.description}</p>
                  </div>

                  {/* Concrete Attribution Callout */}
                  <div className="pt-4 border-t border-[#E4E5E1] flex flex-col gap-1 text-xs">
                    <span className="text-xs text-[#7E8490] font-medium">
                      Demonstrated in
                    </span>
                    <Link
                      href={item.link}
                      className="text-xs text-[#14161A] hover:text-[#2F6FED] transition-colors flex items-center font-medium"
                    >
                      <span className="leading-snug">{item.evidenceNote}</span>
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
