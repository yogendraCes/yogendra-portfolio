"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Wifi, Battery, MoveHorizontal } from "lucide-react";

export function HeroDevice3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 3, y: -6 });
  const [isDragging, setIsDragging] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, initialRotX: 3, initialRotY: -6 });
  const animationFrameRef = useRef<number | null>(null);

  // Detect prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Return to resting angle smoothly when drag ends
  const springBack = useCallback(() => {
    if (prefersReducedMotion) return;
    const targetX = 3;
    const targetY = -6;

    const animate = () => {
      setRotation((current) => {
        const dx = targetX - current.x;
        const dy = targetY - current.y;

        // If very close to target, snap and stop
        if (Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1) {
          return { x: targetX, y: targetY };
        }

        const newRot = {
          x: current.x + dx * 0.08,
          y: current.y + dy * 0.08,
        };

        animationFrameRef.current = requestAnimationFrame(animate);
        return newRot;
      });
    };

    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [prefersReducedMotion]);

  // Cleanup RAF
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (prefersReducedMotion) return;
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      initialRotX: rotation.x,
      initialRotY: rotation.y,
    };
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStart.current.x;
    const deltaY = e.clientY - dragStart.current.y;

    // Convert pixels to degrees with sensitivity damping
    // Bounded clamp: Y rotation ±22deg, X rotation ±14deg
    const newY = Math.max(-22, Math.min(22, dragStart.current.initialRotY + deltaX * 0.15));
    const newX = Math.max(-14, Math.min(14, dragStart.current.initialRotX - deltaY * 0.12));

    setRotation({ x: newX, y: newY });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if capture already lost
    }
    springBack();
  };

  return (
    <div className="relative flex flex-col items-center justify-center select-none py-4">
      {/* 3D Perspective Stage */}
      <div
        ref={containerRef}
        className={`relative perspective-[1000px] ${prefersReducedMotion ? "" : "cursor-grab active:cursor-grabbing touch-pan-y"}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        aria-label="Interactive 3D device preview. Drag horizontally to inspect."
      >
        {/* Hardware-Accelerated 3D Transform Chassis */}
        <div
          className="relative transition-transform duration-75 ease-out"
          style={{
            transform: prefersReducedMotion ? "none" : `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          {/* Ambient Ground Shadow */}
          <div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-8 bg-black/15 rounded-full blur-xl pointer-events-none transition-opacity"
            style={{
              transform: "translateZ(-40px)",
              opacity: isDragging ? 0.35 : 0.2,
            }}
          />

          {/* Physical Phone Outer Bezel (Matte Graphite / Titanium) */}
          <div className="relative w-[280px] sm:w-[300px] h-[580px] sm:h-[620px] bg-[#1C1E22] rounded-[48px] p-3 shadow-2xl border border-[#3A3F47] ring-1 ring-black/40">
            {/* Edge Bevel Highlight */}
            <div className="absolute inset-0 rounded-[48px] border border-white/10 pointer-events-none" />

            {/* Side Hardware Buttons */}
            <div className="absolute -left-[3px] top-24 w-[3px] h-10 bg-[#2E3238] rounded-l" />
            <div className="absolute -left-[3px] top-38 w-[3px] h-12 bg-[#2E3238] rounded-l" />
            <div className="absolute -left-[3px] top-52 w-[3px] h-12 bg-[#2E3238] rounded-l" />
            <div className="absolute -right-[3px] top-32 w-[3px] h-16 bg-[#2E3238] rounded-r" />

            {/* Inner Screen Surface */}
            <div className="relative w-full h-full bg-black rounded-[38px] overflow-hidden flex flex-col justify-between">
              {/* Native Status Bar */}
              <div className="relative z-20 flex items-center justify-between px-6 pt-3 pb-1 text-white text-[11px] font-medium tracking-tight">
                <span>9:41</span>
                {/* Dynamic Island */}
                <div className="w-20 h-5 bg-black rounded-full border border-white/10 mx-auto" />
                <div className="flex items-center gap-1.5 text-white/90">
                  <Wifi className="w-3 h-3" />
                  <Battery className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Real Shipped App Screen (Duracell Energy Home Flow) */}
              <div className="relative flex-1 w-full overflow-hidden">
                <Image
                  src="/projects/duracell-energy/home-flow.png"
                  alt="Duracell Energy Home Flow spatial view showing household circuits and power distribution"
                  fill
                  sizes="(max-width: 640px) 280px, 300px"
                  className="object-cover object-top pointer-events-none"
                  priority
                />
              </div>

              {/* Screen Reflection Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none" />

              {/* Native Home Indicator Bar */}
              <div className="relative z-20 w-28 h-1 bg-white/40 rounded-full mx-auto mb-2" />
            </div>
          </div>
        </div>
      </div>

      {/* Tactile Interaction Hint */}
      {!prefersReducedMotion && (
        <div className="flex items-center gap-1.5 text-xs text-[#5B5F66] mt-4 font-normal">
          <MoveHorizontal className="w-3.5 h-3.5 text-[#2F6FED]" aria-hidden="true" />
          <span>Drag to inspect device</span>
        </div>
      )}
    </div>
  );
}
