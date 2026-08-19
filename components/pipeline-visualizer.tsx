"use client";

import React, { useState } from "react";
import { GitBranch, Key, Smartphone, Upload, CheckCircle2, ArrowRight } from "lucide-react";

export function PipelineVisualizer() {
  const [activeStage, setActiveStage] = useState<number>(2);

  const stages = [
    {
      id: 0,
      title: "1. Code Checkin & Flags",
      subtitle: "Git Push & Config",
      icon: GitBranch,
      detail: "Environment variables injected via react-native-config. Remote feature flags initialized.",
    },
    {
      id: 1,
      title: "2. Fastlane Match Signing",
      subtitle: "iOS Match / Android Keystore",
      icon: Key,
      detail: "Encrypted Git repo syncs distribution certificates and provisioning profiles automatically.",
    },
    {
      id: 2,
      title: "3. Native Xcode & Gradle Build",
      subtitle: "Scheme & Flavor Compilation",
      icon: Smartphone,
      detail: "Xcode scheme 'Production' & Android 'release' APK/AAB compiled with JS bundle minification.",
    },
    {
      id: 3,
      title: "4. Store Beta Distribution",
      subtitle: "TestFlight & Play Internal",
      icon: Upload,
      detail: "Automated binary upload to Apple TestFlight and Google Play Console Internal Track.",
    },
  ];

  return (
    <div className="w-full bg-[#0B0D10] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 sm:p-6 overflow-hidden">
      {/* Visualizer Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 sm:mb-6 border-b border-[rgba(255,255,255,0.08)]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="font-mono text-[10px] sm:text-xs text-[#9CA3AF] tracking-wider uppercase">
            FASTLANE CI/CD PIPELINE // MULTI-ENVIRONMENT
          </span>
        </div>
        <div className="font-mono text-[10px] sm:text-xs text-[#D97706] truncate">
          lane :beta_ios | lane :beta_android
        </div>
      </div>

      {/* Stage Flow Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 relative">
        {stages.map((stage) => {
          const Icon = stage.icon;
          const isActive = activeStage === stage.id;
          return (
            <button
              key={stage.id}
              onClick={() => setActiveStage(stage.id)}
              aria-pressed={isActive}
              aria-label={`Pipeline Stage ${stage.id + 1}: ${stage.title}`}
              className={`p-3.5 sm:p-4 rounded-lg border text-left transition-all relative flex flex-col justify-between ${
                isActive
                  ? "bg-[#16181D] border-[#D97706] shadow-lg shadow-amber-950/20"
                  : "bg-[#0F1115] border-[rgba(255,255,255,0.08)] hover:border-zinc-700"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <div
                    className={`p-1.5 sm:p-2 rounded ${
                      isActive ? "bg-[#D97706]/20 text-[#D97706]" : "bg-zinc-800 text-[#9CA3AF]"
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  {stage.id <= activeStage ? (
                    <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                  ) : (
                    <span className="font-mono text-[10px] text-[#9CA3AF]">PENDING</span>
                  )}
                </div>
                <div className="font-mono text-xs font-bold text-[#F3F4F6] mb-1 line-clamp-2">{stage.title}</div>
                <div className="font-mono text-[11px] text-[#9CA3AF] mb-3 line-clamp-1">{stage.subtitle}</div>
              </div>
              <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden mt-auto">
                <div
                  className={`h-full transition-all duration-500 ${
                    stage.id <= activeStage ? "bg-[#D97706]" : "bg-transparent"
                  }`}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Stage Detail Callout Box */}
      <div className="mt-6 pt-4 border-t border-[rgba(255,255,255,0.08)] bg-[#0F1115] rounded-lg p-3 sm:p-4 font-mono text-xs text-[#9CA3AF] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <span className="text-[#D97706] font-bold">[LANE STAGE {activeStage + 1}]:</span>{" "}
          {stages[activeStage].detail}
        </div>
        <div className="flex items-center gap-1 text-[#F3F4F6] whitespace-nowrap text-[11px] sm:text-xs">
          <span>Click stage to inspect pipeline</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#D97706]" />
        </div>
      </div>
    </div>
  );
}
