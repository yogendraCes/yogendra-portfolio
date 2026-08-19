"use client";

import React, { useState } from "react";
import { Cpu, RefreshCw, Layers, ShieldCheck, Activity, CheckCircle2, Zap } from "lucide-react";

export function HeroArchitectureVisual() {
  const [selectedNode, setSelectedNode] = useState<string>("reanimated");

  const nodes = {
    gateway: {
      title: "10s Gateway Telemetry",
      subtitle: "Hardware Ingestion Stream",
      type: "POLLING",
      color: "#D97706",
      metrics: { latency: "14ms", status: "Active Stream", rate: "10 sec" },
      detail: "Ingests raw Bluetooth LE & MQTT battery payload without blocking main UI loop.",
    },
    state: {
      title: "Normalized State Slices",
      subtitle: "Redux / RTK Query Primitive Selectors",
      type: "ISOLATED",
      color: "#3B82F6",
      metrics: { latency: "0.8ms", status: "Memoized Cache", rate: "0 Re-renders" },
      detail: "Memoized selector tree invalidates only affected UI slices during battery updates.",
    },
    reanimated: {
      title: "Native UI Thread",
      subtitle: "Reanimated v3 Worklets",
      type: "60 FPS NATIVE",
      color: "#10B981",
      metrics: { latency: "16.6ms frame", status: "60 FPS Smooth", rate: "Zero Jank" },
      detail: "Runs energy flow particle animation direct on C++ native UI thread via JSI bindings.",
    },
    d3: {
      title: "D3 + SVG Math Engine",
      subtitle: "Direct Path String Curves",
      type: "ZERO WEBVIEW",
      color: "#F59E0B",
      metrics: { latency: "2.1ms", status: "Direct Math", rate: "D3 Interpolate" },
      detail: "Generates custom smooth bezier paths mapped straight to React Native SVG primitives.",
    },
    fastlane: {
      title: "Fastlane CI/CD Match",
      subtitle: "Encrypted Git Certificates",
      type: "AUTOMATED",
      color: "#10B981",
      metrics: { latency: "Automated", status: "Signed & Ready", rate: "App Store / Play" },
      detail: "Automates TestFlight & Play Console distribution with deterministic code signing.",
    },
  };

  const currentNode = nodes[selectedNode as keyof typeof nodes];

  return (
    <div className="relative w-full max-w-[460px] mx-auto lg:max-w-none p-5 sm:p-6 rounded-2xl bg-[#0B0D10]/95 border border-[rgba(255,255,255,0.12)] shadow-2xl backdrop-blur-xl space-y-5">
      {/* Topology Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[rgba(255,255,255,0.08)] font-mono text-xs">
        <div className="flex items-center gap-2 text-[#9CA3AF]">
          <Activity className="w-4 h-4 text-[#10B981] animate-pulse" aria-hidden="true" />
          <span className="font-bold text-[#F3F4F6] uppercase tracking-wider text-[11px]">
            MOBILE SYSTEM TOPOLOGY
          </span>
        </div>
        <span className="text-[10px] text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/30 font-mono font-semibold flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
          LIVE TELEMETRY (CLICK NODES)
        </span>
      </div>

      {/* Interactive Topology Diagram Nodes */}
      <div className="relative space-y-3">
        {/* Node 1: Gateway */}
        <button
          onClick={() => setSelectedNode("gateway")}
          className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between border cursor-pointer ${
            selectedNode === "gateway"
              ? "bg-[#16181D] border-[#D97706] shadow-md shadow-amber-950/30 ring-1 ring-[#D97706]/40"
              : "bg-[#0F1115] border-[rgba(255,255,255,0.06)] hover:border-zinc-700"
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#D97706]/15 text-[#D97706] flex items-center justify-center border border-[#D97706]/30 shrink-0">
              <RefreshCw className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '10s' }} />
            </div>
            <div>
              <div className="font-mono text-[11px] font-bold text-[#F3F4F6]">{nodes.gateway.title}</div>
              <div className="font-mono text-[9px] text-[#9CA3AF]">{nodes.gateway.subtitle}</div>
            </div>
          </div>
          <span className="font-mono text-[9px] font-semibold text-[#D97706] bg-[#D97706]/10 px-2 py-0.5 rounded border border-[#D97706]/20">
            {nodes.gateway.type}
          </span>
        </button>

        {/* Dash Flow Connector 1 */}
        <div className="flex justify-center -my-1.5 relative z-10">
          <svg className="w-5 h-5 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M12 2v20M12 22l-4-4M12 22l4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-dash-flow" />
          </svg>
        </div>

        {/* Node 2: State Isolation */}
        <button
          onClick={() => setSelectedNode("state")}
          className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between border cursor-pointer ${
            selectedNode === "state"
              ? "bg-[#16181D] border-[#3B82F6] shadow-md shadow-blue-950/30 ring-1 ring-[#3B82F6]/40"
              : "bg-[#0F1115] border-[rgba(255,255,255,0.06)] hover:border-zinc-700"
          }`}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-[#3B82F6]/15 text-[#3B82F6] flex items-center justify-center border border-[#3B82F6]/30 shrink-0">
              <Layers className="w-3.5 h-3.5" />
            </div>
            <div>
              <div className="font-mono text-[11px] font-bold text-[#F3F4F6]">{nodes.state.title}</div>
              <div className="font-mono text-[9px] text-[#9CA3AF]">{nodes.state.subtitle}</div>
            </div>
          </div>
          <span className="font-mono text-[9px] font-semibold text-[#3B82F6] bg-[#3B82F6]/10 px-2 py-0.5 rounded border border-[#3B82F6]/20">
            {nodes.state.type}
          </span>
        </button>

        {/* Parallel Execution Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
          {/* Node 3: UI Thread */}
          <button
            onClick={() => setSelectedNode("reanimated")}
            className={`text-left p-2.5 rounded-xl transition-all border cursor-pointer ${
              selectedNode === "reanimated"
                ? "bg-[#16181D] border-[#10B981] ring-1 ring-[#10B981]/40"
                : "bg-[#0F1115] border-[rgba(255,255,255,0.06)] hover:border-zinc-700"
            }`}
          >
            <div className="flex items-center gap-1.5 text-[#10B981] mb-1">
              <Cpu className="w-3.5 h-3.5" />
              <span className="font-mono text-[10px] font-bold">Native UI Thread</span>
            </div>
            <p className="font-mono text-[9px] text-[#9CA3AF]">
              Reanimated v3 Worklets
            </p>
          </button>

          {/* Node 4: D3 Math */}
          <button
            onClick={() => setSelectedNode("d3")}
            className={`text-left p-2.5 rounded-xl transition-all border cursor-pointer ${
              selectedNode === "d3"
                ? "bg-[#16181D] border-[#F59E0B] ring-1 ring-[#F59E0B]/40"
                : "bg-[#0F1115] border-[rgba(255,255,255,0.06)] hover:border-zinc-700"
            }`}
          >
            <div className="flex items-center gap-1.5 text-[#F59E0B] mb-1">
              <Zap className="w-3.5 h-3.5" />
              <span className="font-mono text-[10px] font-bold">D3 + SVG Engine</span>
            </div>
            <p className="font-mono text-[9px] text-[#9CA3AF]">
              Direct Path String Curves
            </p>
          </button>
        </div>

        {/* Node 5: Fastlane Match */}
        <button
          onClick={() => setSelectedNode("fastlane")}
          className={`w-full text-left p-2.5 rounded-xl transition-all flex items-center justify-between border cursor-pointer ${
            selectedNode === "fastlane"
              ? "bg-[#16181D] border-[#10B981] ring-1 ring-[#10B981]/40"
              : "bg-[#0F1115] border-[rgba(255,255,255,0.06)] hover:border-zinc-700"
          }`}
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span className="font-mono text-[10px] font-bold text-[#F3F4F6]">Fastlane CI/CD Match</span>
          </div>
          <span className="font-mono text-[9px] text-[#10B981]">iOS & Android</span>
        </button>
      </div>

      {/* Selected Node Telemetry Detail Inspector Card */}
      <div className="p-3.5 rounded-xl bg-[#16181D] border border-[#D97706]/30 space-y-2">
        <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#F3F4F6]">
          <span className="flex items-center gap-1.5 text-[#D97706]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{currentNode.title}</span>
          </span>
          <span className="text-[9px] text-[#9CA3AF]">INSPECTION MODE</span>
        </div>
        <p className="text-xs text-[#9CA3AF] leading-relaxed font-sans">{currentNode.detail}</p>
        
        {/* Micro Benchmarks Readout */}
        <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-[10px] text-[#9CA3AF] border-t border-[rgba(255,255,255,0.06)]">
          <div>
            <div className="text-[8px] uppercase text-[#6B7280]">Execution</div>
            <div className="text-[#F3F4F6] font-bold">{currentNode.metrics.latency}</div>
          </div>
          <div>
            <div className="text-[8px] uppercase text-[#6B7280]">State</div>
            <div className="text-[#10B981] font-bold">{currentNode.metrics.status}</div>
          </div>
          <div>
            <div className="text-[8px] uppercase text-[#6B7280]">Throughput</div>
            <div className="text-[#3B82F6] font-bold">{currentNode.metrics.rate}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
