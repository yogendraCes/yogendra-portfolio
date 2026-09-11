"use client";

import React from "react";

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}

export function SpotlightCard({
  children,
  className = "",
  spotlightColor: _unused,
  ...props
}: SpotlightCardProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-white border border-[#E4E5E1] shadow-xs transition-all hover:border-[#D1D3CD] hover:shadow-md ${className}`}
      {...props}
    >
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

