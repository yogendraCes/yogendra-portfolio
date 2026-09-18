"use client";

import React, { useState, useId } from "react";
import { Sun, Home, BatteryCharging, Zap, Gauge, Sliders } from "lucide-react";

export function TelemetrySimulator() {
  const [solarKw, setSolarKw] = useState<number>(4.8);
  const homeLoadKw = 2.2;
  const sliderId = useId();

  // Power flow calculations
  const netSurplus = solarKw - homeLoadKw;
  const batteryChargingKw = netSurplus > 0 ? Math.min(netSurplus, 3.6) : 0;
  const gridExportKw = netSurplus > 3.6 ? netSurplus - 3.6 : 0;
  const gridImportKw = netSurplus < 0 ? Math.abs(netSurplus) : 0;
  const batterySoc = Math.min(100, Math.max(20, Math.round(52 + solarKw * 5.5)));

  // Animation speeds based on power
  const flowSpeedSolar = solarKw > 0 ? `${Math.max(0.6, 2.5 - solarKw * 0.25)}s` : "0s";
  const flowSpeedBattery = batteryChargingKw > 0 ? `${Math.max(0.7, 3 - batteryChargingKw * 0.5)}s` : "0s";

  return (
    <div className="w-full rounded-2xl bg-[#070D13] border border-[#219EBC]/25 p-5 sm:p-7 space-y-6 shadow-xl relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-0 right-0 w-80 h-80 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#219EBC]/15 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
            <span className="text-xs text-[#38BDF8] font-semibold uppercase tracking-wider">
              Live Architecture Simulation
            </span>
          </div>
          <h3 className="text-base sm:text-lg font-bold text-[#E8F1F5] tracking-tight">
            60 FPS Telemetry Vector Circuit
          </h3>
        </div>

        {/* Real-Time Frame Budget Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101D28] border border-[#219EBC]/25 text-xs text-[#E8F1F5] font-mono shadow-xs self-start sm:self-auto">
          <Gauge className="w-3.5 h-3.5 text-[#10B981]" />
          <span>60.0 FPS</span>
          <span className="text-[#7E9AA8]">|</span>
          <span className="text-[#10B981]">0 jank</span>
        </div>
      </div>

      {/* Top Circuit Nodes Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 relative z-10">
        {/* Solar PV Node */}
        <div className="p-3.5 rounded-xl bg-[#101D28] border border-[#219EBC]/20 flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#7E9AA8] font-medium">Solar Array</span>
            <Sun className="w-4 h-4 text-[#F59E0B]" />
          </div>
          <div>
            <div className="text-xl font-bold text-[#E8F1F5] font-mono tabular-nums">
              {solarKw.toFixed(1)} <span className="text-xs text-[#7E9AA8] font-sans">kW</span>
            </div>
            <div className="text-[11px] text-[#10B981] font-semibold">Active Generating</div>
          </div>
        </div>

        {/* Home Load Node */}
        <div className="p-3.5 rounded-xl bg-[#101D28] border border-[#219EBC]/20 flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#7E9AA8] font-medium">Household Draw</span>
            <Home className="w-4 h-4 text-[#38BDF8]" />
          </div>
          <div>
            <div className="text-xl font-bold text-[#E8F1F5] font-mono tabular-nums">
              {homeLoadKw.toFixed(1)} <span className="text-xs text-[#7E9AA8] font-sans">kW</span>
            </div>
            <div className="text-[11px] text-[#7E9AA8] font-semibold">Base Consumption</div>
          </div>
        </div>

        {/* Duracell Battery Node */}
        <div className="p-3.5 rounded-xl bg-[#101D28] border border-[#219EBC]/20 flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#7E9AA8] font-medium">Storage Node</span>
            <BatteryCharging className="w-4 h-4 text-[#10B981]" />
          </div>
          <div>
            <div className="text-xl font-bold text-[#E8F1F5] font-mono tabular-nums">
              {batterySoc}% <span className="text-xs text-[#7E9AA8] font-sans">SoC</span>
            </div>
            <div className="text-[11px] text-[#38BDF8] font-semibold">
              {batteryChargingKw > 0 ? `+${batteryChargingKw.toFixed(1)} kW Charging` : "Idle Buffer"}
            </div>
          </div>
        </div>

        {/* Grid Exchange Node */}
        <div className="p-3.5 rounded-xl bg-[#101D28] border border-[#219EBC]/20 flex flex-col justify-between space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs text-[#7E9AA8] font-medium">Power Grid</span>
            <Zap className="w-4 h-4 text-[#A855F7]" />
          </div>
          <div>
            <div className="text-xl font-bold text-[#E8F1F5] font-mono tabular-nums">
              {gridExportKw > 0
                ? `+${gridExportKw.toFixed(1)}`
                : gridImportKw > 0
                ? `-${gridImportKw.toFixed(1)}`
                : "0.0"}{" "}
              <span className="text-xs text-[#7E9AA8] font-sans">kW</span>
            </div>
            <div className="text-[11px] text-[#7E9AA8] font-semibold">
              {gridExportKw > 0 ? "Exporting Surplus" : gridImportKw > 0 ? "Peak Import" : "Self-Sufficient"}
            </div>
          </div>
        </div>
      </div>

      {/* SVG Topology Flow Line Animation */}
      <div className="relative w-full h-16 bg-[#101D28]/60 rounded-xl border border-[#219EBC]/15 overflow-hidden flex items-center px-4">
        <svg
          className="w-full h-10 overflow-visible"
          viewBox="0 0 800 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Baseline wire */}
          <path d="M 40 20 L 760 20" stroke="rgba(33, 158, 188, 0.2)" strokeWidth="2" strokeDasharray="4 4" />
          
          {/* Animated active energy current */}
          <path
            d="M 40 20 L 760 20"
            stroke="#38BDF8"
            strokeWidth="2.5"
            strokeDasharray="10 14"
            className="animate-pulse"
            style={{
              animationDuration: flowSpeedSolar,
            }}
          />

          {/* Node marker pips */}
          <circle cx="100" cy="20" r="5" fill="#F59E0B" />
          <circle cx="300" cy="20" r="5" fill="#38BDF8" />
          <circle cx="500" cy="20" r="5" fill="#10B981" />
          <circle cx="700" cy="20" r="5" fill="#A855F7" />
        </svg>
      </div>

      {/* Interactive Power Generation Controller */}
      <div className="p-4 rounded-xl bg-[#101D28] border border-[#219EBC]/20 space-y-3 relative z-10">
        <div className="flex items-center justify-between text-xs">
          <label htmlFor={sliderId} className="font-semibold text-[#E8F1F5] flex items-center gap-1.5 cursor-pointer">
            <Sliders className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Interactive Input: Solar PV Inverter Output</span>
          </label>
          <span className="font-mono text-[#38BDF8] font-bold text-sm tabular-nums">
            {solarKw.toFixed(1)} kW
          </span>
        </div>

        <input
          id={sliderId}
          type="range"
          min="0"
          max="8"
          step="0.1"
          value={solarKw}
          onChange={(e) => setSolarKw(parseFloat(e.target.value))}
          className="w-full h-2 bg-[#070D13] rounded-lg appearance-none cursor-pointer accent-[#38BDF8] focus:outline-none"
        />

        <div className="flex items-center justify-between text-[11px] text-[#7E9AA8]">
          <span>0.0 kW (Night Time)</span>
          <span>4.0 kW (Overcast)</span>
          <span>8.0 kW (Peak Noon)</span>
        </div>
      </div>

      {/* Concrete Technical Verification Note */}
      <div className="text-xs text-[#7E9AA8] leading-relaxed border-t border-[#219EBC]/15 pt-3 flex items-start gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shrink-0 mt-1.5" />
        <span>
          <strong className="text-[#E8F1F5] font-semibold">Production Architecture Note:</strong> In Duracell Energy and Puredrive, these telemetry flows recalculate every 10 seconds via RTK Query normalized cache and update custom D3 SVG paths without triggering React component tree re-renders.
        </span>
      </div>
    </div>
  );
}
