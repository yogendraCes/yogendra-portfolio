"use client";

import React, { useState, useEffect } from "react";
import { Sun, BatteryCharging, Home, Zap, ArrowRightLeft, Sparkles, Activity } from "lucide-react";

type FlowMode = "day_solar" | "evening_battery" | "grid_export";

export function EnergyFlowVisualizer() {
  const [mode, setMode] = useState<FlowMode>("day_solar");
  const [solarKw, setSolarKw] = useState(4.8);
  const [batterySoc, setBatterySoc] = useState(86);
  const [homeLoadKw, setHomeLoadKw] = useState(1.4);
  const [gridKw, setGridKw] = useState(-3.4); // Negative = Exporting

  // Mode simulator physics
  useEffect(() => {
    if (mode === "day_solar") {
      setSolarKw(5.2);
      setBatterySoc(88);
      setHomeLoadKw(1.6);
      setGridKw(-3.6); // Exporting solar surplus
    } else if (mode === "evening_battery") {
      setSolarKw(0.0);
      setBatterySoc(72);
      setHomeLoadKw(2.4);
      setGridKw(0.0); // Self-sufficient on battery
    } else {
      setSolarKw(1.2);
      setBatterySoc(98);
      setHomeLoadKw(1.8);
      setGridKw(-5.4); // Max grid feed-in export
    }

    const interval = setInterval(() => {
      // Add subtle micro fluctuations to simulate live telemetry
      setSolarKw((prev) => +(prev + (Math.random() * 0.2 - 0.1)).toFixed(2));
      setHomeLoadKw((prev) => +(prev + (Math.random() * 0.1 - 0.05)).toFixed(2));
    }, 3000);

    return () => clearInterval(interval);
  }, [mode]);

  return (
    <div className="w-full bg-[#0B0D10] border border-[rgba(255,255,255,0.12)] rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-xl space-y-6">
      {/* Visualizer Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[rgba(255,255,255,0.08)]">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Activity className="w-4 h-4 text-[#D97706]" />
            <span className="font-mono text-xs font-semibold text-[#F3F4F6] uppercase tracking-wider">
              INTERACTIVE ENERGY FLOW ENGINE
            </span>
          </div>
          <p className="text-xs text-[#9CA3AF]">
            Simulating live multi-node power distribution & telemetry algorithms from Duracell Energy.
          </p>
        </div>

        {/* Operating Mode Switcher Tabs */}
        <div className="flex items-center gap-1.5 bg-[#16181D] p-1 rounded-lg border border-[rgba(255,255,255,0.08)]">
          <button
            onClick={() => setMode("day_solar")}
            className={`px-3 py-1.5 rounded-md font-mono text-[11px] font-semibold transition-all flex items-center gap-1.5 ${
              mode === "day_solar"
                ? "bg-[#D97706] text-[#08090A] shadow-md shadow-amber-950/40"
                : "text-[#9CA3AF] hover:text-[#F3F4F6]"
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>Solar Peak</span>
          </button>

          <button
            onClick={() => setMode("evening_battery")}
            className={`px-3 py-1.5 rounded-md font-mono text-[11px] font-semibold transition-all flex items-center gap-1.5 ${
              mode === "evening_battery"
                ? "bg-[#10B981] text-[#08090A] shadow-md shadow-emerald-950/40"
                : "text-[#9CA3AF] hover:text-[#F3F4F6]"
            }`}
          >
            <BatteryCharging className="w-3.5 h-3.5" />
            <span>Self-Powered</span>
          </button>

          <button
            onClick={() => setMode("grid_export")}
            className={`px-3 py-1.5 rounded-md font-mono text-[11px] font-semibold transition-all flex items-center gap-1.5 ${
              mode === "grid_export"
                ? "bg-[#3B82F6] text-[#08090A] shadow-md shadow-blue-950/40"
                : "text-[#9CA3AF] hover:text-[#F3F4F6]"
            }`}
          >
            <ArrowRightLeft className="w-3.5 h-3.5" />
            <span>Grid Export</span>
          </button>
        </div>
      </div>

      {/* Central Interactive Grid Flow Viewport */}
      <div className="relative p-6 sm:p-8 rounded-xl bg-[#08090A] border border-[rgba(255,255,255,0.06)] min-h-[280px] flex items-center justify-center">
        {/* SVG Cable Lines & Animated Flow Particles Overlay */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 600 300" preserveAspectRatio="none">
          <defs>
            <linearGradient id="solar-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D97706" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="battery-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="grid-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Lines connecting center hub (300, 150) to nodes */}
          {/* Top-Left: Solar (100, 70) -> Hub (300, 150) */}
          <path d="M 120 70 Q 210 110 300 150" fill="none" stroke="url(#solar-gradient)" strokeWidth="3" strokeDasharray="6 6" className="animate-dash-flow" />
          
          {/* Top-Right: Home Load (500, 70) <- Hub (300, 150) */}
          <path d="M 300 150 Q 390 110 480 70" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="3" strokeDasharray="6 6" className="animate-dash-flow" style={{ animationDirection: "reverse" }} />

          {/* Bottom-Left: Battery (120, 230) <-> Hub (300, 150) */}
          <path d="M 120 230 Q 210 190 300 150" fill="none" stroke="url(#battery-gradient)" strokeWidth="3" strokeDasharray="6 6" className="animate-dash-flow" />

          {/* Bottom-Right: Grid (480, 230) <-> Hub (300, 150) */}
          <path d="M 300 150 Q 390 190 480 230" fill="none" stroke="url(#grid-gradient)" strokeWidth="3" strokeDasharray="6 6" className="animate-dash-flow" />
        </svg>

        {/* Node Layout: 4 Corners + Center Engine Hub */}
        <div className="relative z-10 w-full grid grid-cols-2 gap-y-12 sm:gap-y-16 items-center">
          {/* Node 1: Solar Array */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/40 flex items-center justify-center text-[#F59E0B] shadow-lg shadow-amber-950/40">
              <Sun className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="font-mono text-xs font-bold text-[#F3F4F6]">Solar PV Array</div>
              <div className="font-mono text-[11px] text-[#F59E0B] font-semibold">{solarKw.toFixed(1)} kW Generation</div>
            </div>
          </div>

          {/* Node 2: Home Load */}
          <div className="flex items-center justify-end gap-3 text-right">
            <div>
              <div className="font-mono text-xs font-bold text-[#F3F4F6]">Household Draw</div>
              <div className="font-mono text-[11px] text-[#9CA3AF] font-semibold">{homeLoadKw.toFixed(1)} kW Load</div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#16181D] border border-[rgba(255,255,255,0.12)] flex items-center justify-center text-[#F3F4F6]">
              <Home className="w-6 h-6" />
            </div>
          </div>

          {/* Center Hub Telemetry Core */}
          <div className="col-span-2 flex justify-center -my-4">
            <div className="px-4 py-2 rounded-full bg-[#0F1115]/90 border border-[#D97706]/50 backdrop-blur-md flex items-center gap-2 shadow-xl">
              <Sparkles className="w-4 h-4 text-[#D97706] animate-spin" style={{ animationDuration: '8s' }} />
              <span className="font-mono text-[11px] text-[#F3F4F6] font-bold tracking-wide uppercase">
                Dynamic Dispatch Engine (10s Cycle)
              </span>
            </div>
          </div>

          {/* Node 3: Home Battery Storage */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#10B981]/10 border border-[#10B981]/40 flex items-center justify-center text-[#10B981] shadow-lg shadow-emerald-950/40">
              <BatteryCharging className="w-6 h-6" />
            </div>
            <div>
              <div className="font-mono text-xs font-bold text-[#F3F4F6]">Battery Storage</div>
              <div className="font-mono text-[11px] text-[#10B981] font-semibold">{batterySoc}% SoC | Standby</div>
            </div>
          </div>

          {/* Node 4: Power Grid */}
          <div className="flex items-center justify-end gap-3 text-right">
            <div>
              <div className="font-mono text-xs font-bold text-[#F3F4F6]">National Grid</div>
              <div className="font-mono text-[11px] text-[#3B82F6] font-semibold">
                {gridKw < 0 ? `Exporting ${Math.abs(gridKw).toFixed(1)} kW` : `Importing ${gridKw.toFixed(1)} kW`}
              </div>
            </div>
            <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 border border-[#3B82F6]/40 flex items-center justify-center text-[#3B82F6] shadow-lg shadow-blue-950/40">
              <Zap className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* Telemetry Metric Highlights */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <div className="p-3 rounded-xl bg-[#16181D] border border-[rgba(255,255,255,0.06)] font-mono">
          <div className="text-[10px] text-[#9CA3AF]">SOLAR YIELD</div>
          <div className="text-sm font-bold text-[#F59E0B]">{solarKw.toFixed(1)} kW</div>
        </div>
        <div className="p-3 rounded-xl bg-[#16181D] border border-[rgba(255,255,255,0.06)] font-mono">
          <div className="text-[10px] text-[#9CA3AF]">BATTERY STATE</div>
          <div className="text-sm font-bold text-[#10B981]">{batterySoc}% Ready</div>
        </div>
        <div className="p-3 rounded-xl bg-[#16181D] border border-[rgba(255,255,255,0.06)] font-mono">
          <div className="text-[10px] text-[#9CA3AF]">HOUSEHOLD LOAD</div>
          <div className="text-sm font-bold text-[#F3F4F6]">{homeLoadKw.toFixed(1)} kW</div>
        </div>
        <div className="p-3 rounded-xl bg-[#16181D] border border-[rgba(255,255,255,0.06)] font-mono">
          <div className="text-[10px] text-[#9CA3AF]">NET GRID FEED</div>
          <div className="text-sm font-bold text-[#3B82F6]">{gridKw.toFixed(1)} kW</div>
        </div>
      </div>
    </div>
  );
}
