"use client";

import React, { useState } from "react";
import { technicalNotesData, TechnicalNote } from "@/data/technical-notes";
import { BookOpen, Clock, ChevronDown, ChevronUp, CheckCircle2, ArrowRight } from "lucide-react";
import { SpotlightCard } from "./spotlight-card";

export function TechnicalNotes() {
  const [expandedId, setExpandedId] = useState<string | null>("telemetry-re-renders");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="notes" className="w-full py-16 sm:py-24 border-b border-[rgba(255,255,255,0.08)] bg-[#08090A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="max-w-[760px] space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D97706] tracking-wider uppercase bg-[#D97706]/10 px-3 py-1 rounded-full border border-[#D97706]/30">
            <BookOpen className="w-4 h-4" />
            <span>TECHNICAL WRITE-UPS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F3F4F6]">
            Engineering Notes & System Summaries
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
            Code-free deep dives into mobile architectural decisions, telemetry re-render optimization, and real-time state management.
          </p>
        </div>

        {/* Technical Notes Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {technicalNotesData.map((note) => {
            const isExpanded = expandedId === note.id;

            return (
              <SpotlightCard key={note.id} className="h-full flex flex-col justify-between">
                <article className="p-6 sm:p-8 space-y-6 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    {/* Tags & Read Time Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[rgba(255,255,255,0.06)]">
                      <div className="flex flex-wrap gap-1.5">
                        {note.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-[#16181D] text-[#9CA3AF] border border-[rgba(255,255,255,0.08)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 font-mono text-xs text-[#6B7280]">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{note.readTime}</span>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#F3F4F6] tracking-tight hover:text-[#D97706] transition-colors cursor-pointer" onClick={() => toggleExpand(note.id)}>
                        {note.title}
                      </h3>
                      <p className="text-sm text-[#9CA3AF] mt-1.5 leading-relaxed font-sans">
                        {note.subtitle}
                      </p>
                    </div>

                    {/* Key Takeaway Callout Box */}
                    <div className="p-3.5 rounded-xl bg-[#0F1115] border border-[#D97706]/30 space-y-1">
                      <span className="font-mono text-[10px] text-[#D97706] uppercase tracking-wider font-semibold">
                        KEY ARCHITECTURAL TAKEAWAY
                      </span>
                      <p className="text-xs text-[#F3F4F6] leading-relaxed font-sans">
                        {note.takeaway}
                      </p>
                    </div>

                    {/* Expandable Deep-Dive Content */}
                    {isExpanded && (
                      <div className="pt-2 space-y-3 text-xs sm:text-sm text-[#9CA3AF] leading-relaxed font-sans border-t border-[rgba(255,255,255,0.06)]">
                        {note.paragraphs.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}

                        {note.bulletPoints && (
                          <ul className="space-y-2 pt-2">
                            {note.bulletPoints.map((bp, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                                <span>{bp}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Toggle Expand CTA */}
                  <div className="pt-4 border-t border-[rgba(255,255,255,0.06)] flex items-center justify-between">
                    <span className="font-mono text-xs text-[#6B7280]">{note.date}</span>
                    <button
                      onClick={() => toggleExpand(note.id)}
                      className="font-mono text-xs font-semibold text-[#D97706] hover:text-[#F59E0B] transition-colors flex items-center gap-1 cursor-pointer py-1"
                    >
                      <span>{isExpanded ? "Collapse Note" : "Read Full Summary"}</span>
                      {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </article>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
