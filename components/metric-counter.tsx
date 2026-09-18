"use client";

import React, { useState, useEffect, useRef } from "react";

interface MetricCounterProps {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
}

export function MetricCounter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1400,
  className = "",
}: MetricCounterProps) {
  const [displayValue, setDisplayValue] = useState<string>(
    `${prefix}0${decimals > 0 ? "." + "0".repeat(decimals) : ""}${suffix}`
  );
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasAnimatedRef = useRef<boolean>(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setDisplayValue(
        `${prefix}${value.toFixed(decimals)}${suffix}`
      );
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimatedRef.current) {
          hasAnimatedRef.current = true;
          observer.disconnect();

          let startTime: number | null = null;

          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease-out quart for smooth mechanical deceleration
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            const currentNumber = easeProgress * value;

            setDisplayValue(
              `${prefix}${currentNumber.toFixed(decimals)}${suffix}`
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(
                `${prefix}${value.toFixed(decimals)}${suffix}`
              );
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [value, decimals, prefix, suffix, duration]);

  return (
    <span ref={containerRef} className={`tabular-nums inline-block ${className}`}>
      {displayValue}
    </span>
  );
}
