"use client";

import React, { useState } from "react";
import { Zap, Sun, Battery, Car, Home, ArrowRight, ShieldCheck } from "lucide-react";

export function EnergyFlowVisualizer() {
  const [activeNode, setActiveNode] = useState<string>("battery");

  // Simulated telemetry metrics
  const metrics = {
    solarKw: 4.85,
    batteryKw: 2.10,
    batterySoc: 87,
    gridKw: -0.45, // Exporting to grid
    evKw: 1.80,
    homeKw: 5.40,
  };

  return (
    <div className="w-full bg-[#0B0D10] border border-[rgba(255,255,255,0.08)] rounded-xl p-4 sm:p-6 overflow-hidden">
      {/* Visualizer Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 sm:mb-6 border-b border-[rgba(255,255,255,0.08)]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="font-mono text-[10px] sm:text-xs text-[#9CA3AF] tracking-wider uppercase">
            LIVE TELEMETRY STREAM // 10S CADENCE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#D97706] shrink-0" />
          <span className="font-mono text-[10px] sm:text-xs text-[#F3F4F6] truncate">
            DURACELL ENERGY / PUREDRIVE ARCHITECTURE
          </span>
        </div>
      </div>

      {/* Main Diagram Canvas */}
      <div className="relative w-full aspect-[16/9] min-h-[280px] sm:min-h-[300px] max-h-[380px] flex items-center justify-center">
        {/* SVG Network Grid & Flow Lines */}
        <svg viewBox="0 0 800 450" className="w-full h-full text-zinc-700" fill="none">
          {/* Background Grid */}
          <defs>
            <pattern id="grid-dots" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="rgba(255,255,255,0.05)" />
            </pattern>
            <linearGradient id="solar-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D97706" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="battery-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.3" />
            </linearGradient>
          </defs>

          <rect width="100%" height="100%" fill="url(#grid-dots)" />

          {/* Connection Lines to Central Bus */}
          {/* Solar -> Center */}
          <line x1="200" y1="100" x2="400" y2="225" stroke="#D97706" strokeWidth="2" strokeDasharray="6 4" opacity="0.7" />
          {/* Battery -> Center */}
          <line x1="200" y1="350" x2="400" y2="225" stroke="#10B981" strokeWidth="2" strokeDasharray="6 4" opacity="0.7" />
          {/* Grid -> Center */}
          <line x1="600" y1="100" x2="400" y2="225" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6 4" opacity="0.7" />
          {/* EV -> Center */}
          <line x1="600" y1="350" x2="400" y2="225" stroke="#8B5CF6" strokeWidth="2" strokeDasharray="6 4" opacity="0.7" />
          {/* Center -> Home */}
          <line x1="400" y1="225" x2="400" y2="380" stroke="#F3F4F6" strokeWidth="3" opacity="0.9" />

          {/* Animated Energy Flow Particles */}
          <circle cx="280" cy="142" r="4" fill="#F59E0B">
            <animate attributeName="cx" values="200;400" dur="2s" repeatCount="indefinite" />
            <animate attributeName="cy" values="100;225" dur="2s" repeatCount="indefinite" />
          </circle>
          <circle cx="280" cy="308" r="4" fill="#10B981">
            <animate attributeName="cx" values="200;400" dur="2.5s" repeatCount="indefinite" />
            <animate attributeName="cy" values="350;225" dur="2.5s" repeatCount="indefinite" />
          </circle>

          {/* Central Power Bus Node */}
          <circle cx="400" cy="225" r="32" fill="#0F1115" stroke="#D97706" strokeWidth="2" />
          <circle cx="400" cy="225" r="12" fill="#D97706" opacity="0.2" />
          <text x="400" y="229" textAnchor="middle" fill="#F3F4F6" fontSize="11" fontFamily="monospace" fontWeight="bold">
            BUS
          </text>
        </svg>

        {/* HTML Node Overlay Positioned Absolutely */}
        {/* Solar Node (Top Left) */}
        <button
          onClick={() => setActiveNode("solar")}
          aria-pressed={activeNode === "solar"}
          aria-label="Inspect Solar PV Telemetry"
          className={`absolute top-[2%] left-[2%] sm:top-[8%] sm:left-[10%] p-1.5 sm:p-3 rounded-lg border transition-all flex items-center gap-1.5 sm:gap-3 text-left ${
            activeNode === "solar"
              ? "bg-[#16181D] border-[#D97706] shadow-lg shadow-amber-950/20 scale-105"
              : "bg-[#0F1115] border-[rgba(255,255,255,0.08)] hover:border-zinc-700"
          }`}
        >
          <div className="p-1 sm:p-2 rounded bg-amber-500/10 text-[#F59E0B] shrink-0">
            <Sun className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="font-mono text-[10px] sm:text-xs text-[#9CA3AF]">SOLAR PV</div>
            <div className="font-mono font-bold text-xs sm:text-sm text-[#F3F4F6]">+{metrics.solarKw} kW</div>
          </div>
        </button>

        {/* Battery Node (Bottom Left) */}
        <button
          onClick={() => setActiveNode("battery")}
          aria-pressed={activeNode === "battery"}
          aria-label="Inspect Battery Telemetry"
          className={`absolute bottom-[18%] left-[2%] sm:bottom-[8%] sm:left-[10%] p-1.5 sm:p-3 rounded-lg border transition-all flex items-center gap-1.5 sm:gap-3 text-left ${
            activeNode === "battery"
              ? "bg-[#16181D] border-[#10B981] shadow-lg shadow-emerald-950/20 scale-105"
              : "bg-[#0F1115] border-[rgba(255,255,255,0.08)] hover:border-zinc-700"
          }`}
        >
          <div className="p-1 sm:p-2 rounded bg-emerald-500/10 text-[#10B981] shrink-0">
            <Battery className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="font-mono text-[10px] sm:text-xs text-[#9CA3AF]">BATTERY ({metrics.batterySoc}%)</div>
            <div className="font-mono font-bold text-xs sm:text-sm text-[#F3F4F6]">+{metrics.batteryKw} kW</div>
          </div>
        </button>

        {/* Grid Node (Top Right) */}
        <button
          onClick={() => setActiveNode("grid")}
          aria-pressed={activeNode === "grid"}
          aria-label="Inspect Power Grid Telemetry"
          className={`absolute top-[2%] right-[2%] sm:top-[8%] sm:right-[10%] p-1.5 sm:p-3 rounded-lg border transition-all flex items-center gap-1.5 sm:gap-3 text-left ${
            activeNode === "grid"
              ? "bg-[#16181D] border-[#3B82F6] shadow-lg shadow-blue-950/20 scale-105"
              : "bg-[#0F1115] border-[rgba(255,255,255,0.08)] hover:border-zinc-700"
          }`}
        >
          <div className="p-1 sm:p-2 rounded bg-blue-500/10 text-[#3B82F6] shrink-0">
            <Zap className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="font-mono text-[10px] sm:text-xs text-[#9CA3AF]">GRID (EXPORT)</div>
            <div className="font-mono font-bold text-xs sm:text-sm text-[#F3F4F6]">{metrics.gridKw} kW</div>
          </div>
        </button>

        {/* EV Node (Bottom Right) */}
        <button
          onClick={() => setActiveNode("ev")}
          aria-pressed={activeNode === "ev"}
          aria-label="Inspect EV Charger Telemetry"
          className={`absolute bottom-[18%] right-[2%] sm:bottom-[8%] sm:right-[10%] p-1.5 sm:p-3 rounded-lg border transition-all flex items-center gap-1.5 sm:gap-3 text-left ${
            activeNode === "ev"
              ? "bg-[#16181D] border-[#8B5CF6] shadow-lg shadow-purple-950/20 scale-105"
              : "bg-[#0F1115] border-[rgba(255,255,255,0.08)] hover:border-zinc-700"
          }`}
        >
          <div className="p-1 sm:p-2 rounded bg-purple-500/10 text-[#8B5CF6] shrink-0">
            <Car className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="font-mono text-[10px] sm:text-xs text-[#9CA3AF]">EV CHARGER</div>
            <div className="font-mono font-bold text-xs sm:text-sm text-[#F3F4F6]">{metrics.evKw} kW</div>
          </div>
        </button>

        {/* Home Load Node (Bottom Center) */}
        <button
          onClick={() => setActiveNode("home")}
          aria-pressed={activeNode === "home"}
          aria-label="Inspect Home Load Telemetry"
          className={`absolute bottom-[1%] left-1/2 -translate-x-1/2 p-1.5 sm:p-2.5 rounded-lg border transition-all flex items-center gap-1.5 sm:gap-2 text-left ${
            activeNode === "home"
              ? "bg-[#16181D] border-[#F3F4F6] shadow-lg scale-105"
              : "bg-[#0F1115] border-[rgba(255,255,255,0.08)] hover:border-zinc-700"
          }`}
        >
          <div className="p-1 sm:p-1.5 rounded bg-zinc-800 text-[#F3F4F6] shrink-0">
            <Home className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
          <div>
            <div className="font-mono text-[10px] text-[#9CA3AF]">HOME LOAD</div>
            <div className="font-mono font-bold text-xs text-[#F3F4F6]">{metrics.homeKw} kW</div>
          </div>
        </button>
      </div>

      {/* Selected Node Details Box */}
      <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.08)] bg-[#0F1115] rounded-lg p-3 sm:p-4 font-mono text-xs text-[#9CA3AF] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div>
          <span className="text-[#D97706] font-bold">[NODE ARCHITECTURE]:</span>{" "}
          {activeNode === "solar" && "Solar PV generation mapped to D3 scale linear curve. SVG path interpolated at 60fps."}
          {activeNode === "battery" && "Battery Storage State-of-Charge (SoC 87%). RTK Query cached payload invalidation."}
          {activeNode === "grid" && "Power Grid export tariff telemetry. Negative value indicates net export to grid."}
          {activeNode === "ev" && "Smart EV charging load. Managed via Reanimated native UI thread particle loops."}
          {activeNode === "home" && "Aggregated household consumption load. Dynamic sum of solar + battery + grid draw."}
        </div>
        <div className="flex items-center gap-1 text-[#F3F4F6] whitespace-nowrap text-[11px] sm:text-xs">
          <span>Click nodes to inspect</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#D97706]" />
        </div>
      </div>
    </div>
  );
}
