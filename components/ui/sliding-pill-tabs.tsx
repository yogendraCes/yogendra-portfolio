"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

export interface TabOption {
  id: string;
  label: string;
}

interface SlidingPillTabsProps {
  options: TabOption[];
  activeId: string;
  onChange: (id: string) => void;
  className?: string;
  size?: "sm" | "md";
}

export function SlidingPillTabs({
  options,
  activeId,
  onChange,
  className = "",
  size = "md",
}: SlidingPillTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Map<string, HTMLButtonElement>>(new Map());
  const [pillStyle, setPillStyle] = useState<{
    left: number;
    top: number;
    width: number;
    height: number;
    ready: boolean;
  }>({
    left: 0,
    top: 0,
    width: 0,
    height: 0,
    ready: false,
  });

  const updatePill = useCallback(() => {
    const activeBtn = buttonRefs.current.get(activeId);
    const container = containerRef.current;
    if (!activeBtn || !container) return;

    setPillStyle({
      left: activeBtn.offsetLeft,
      top: activeBtn.offsetTop,
      width: activeBtn.offsetWidth,
      height: activeBtn.offsetHeight,
      ready: true,
    });
  }, [activeId]);

  useEffect(() => {
    updatePill();
    window.addEventListener("resize", updatePill);
    return () => window.removeEventListener("resize", updatePill);
  }, [updatePill]);

  const isSmall = size === "sm";

  return (
    <div
      ref={containerRef}
      className={`relative inline-flex flex-wrap items-center bg-[#070D13] border border-[#219EBC]/20 rounded-full p-1 shadow-inner ${className}`}
      role="tablist"
    >
      {/* Sliding Active Pill */}
      {pillStyle.ready && (
        <span
          className="absolute rounded-full bg-[#38BDF8] shadow-[0_0_14px_rgba(56,189,248,0.35)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
          style={{
            transform: `translate3d(${pillStyle.left}px, ${pillStyle.top}px, 0)`,
            width: `${pillStyle.width}px`,
            height: `${pillStyle.height}px`,
          }}
          aria-hidden="true"
        />
      )}

      {options.map((tab) => {
        const isActive = tab.id === activeId;
        return (
          <button
            key={tab.id}
            ref={(el) => {
              if (el) buttonRefs.current.set(tab.id, el);
              else buttonRefs.current.delete(tab.id);
            }}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={`relative z-10 rounded-full font-semibold transition-colors duration-200 cursor-pointer select-none ${
              isSmall
                ? "px-2.5 py-1 text-[11px]"
                : "px-3.5 py-1.5 text-xs"
            } ${
              isActive
                ? "text-[#0A1118]"
                : "text-[#7E9AA8] hover:text-[#E8F1F5]"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
