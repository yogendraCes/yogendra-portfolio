"use client";

import React, { useState } from "react";
import { technicalNotesData } from "@/data/technical-notes";
import { Clock, ChevronDown, ChevronUp, CheckCircle2, FileText, ArrowRight } from "lucide-react";
import { SpotlightCard } from "./spotlight-card";

export function TechnicalNotes() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="notes" className="w-full py-14 sm:py-20 border-b border-[#219EBC]/15 bg-[#0A1118] scroll-mt-24 sm:scroll-mt-28">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="max-w-[680px] space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#E8F1F5]">
            Engineering briefs & technical notes
          </h2>
          <p className="text-sm sm:text-base text-[#7E9AA8] leading-relaxed">
            Concise production post-mortems and architectural analyses detailing high-frequency telemetry re-render optimization, Fastlane continuous delivery, and native gesture thread isolation.
          </p>
        </div>

        {/* Technical Notes Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {technicalNotesData.map((note) => {
            const isExpanded = expandedId === note.id;

            return (
              <SpotlightCard key={note.id} className="h-full flex flex-col justify-between">
                <article className="p-6 sm:p-7 space-y-5 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    {/* Tags & Read Time Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#219EBC]/15">
                      <div className="flex flex-wrap gap-1.5">
                        {note.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2 py-0.5 rounded-md bg-[#162634] text-[#7E9AA8] border border-[#219EBC]/20 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-[11px] text-[#7E9AA8] font-medium">
                        <Clock className="w-3 h-3 text-[#38BDF8]" />
                        <span>{note.readTime}</span>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3
                        className="text-base sm:text-lg font-bold text-[#E8F1F5] tracking-tight hover:text-[#38BDF8] transition-colors cursor-pointer"
                        onClick={() => toggleExpand(note.id)}
                      >
                        {note.title}
                      </h3>
                      <p className="text-xs text-[#7E9AA8] mt-1 leading-relaxed line-clamp-2">
                        {note.subtitle}
                      </p>
                    </div>

                    {/* Key Takeaway Callout Box */}
                    <div className="p-3.5 rounded-xl bg-[#070D13] border border-[#219EBC]/20 space-y-1">
                      <span className="text-[11px] text-[#38BDF8] font-bold block uppercase tracking-wider">
                        Core Takeaway
                      </span>
                      <p className="text-xs text-[#E8F1F5] font-medium leading-relaxed">
                        {note.takeaway}
                      </p>
                    </div>

                    {/* Expandable Deep-Dive Content with Smooth Fade-in */}
                    {isExpanded && (
                      <div className="pt-3 space-y-3 text-xs text-[#7E9AA8] leading-relaxed border-t border-[#219EBC]/15 animate-fadeIn">
                        {note.paragraphs.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}

                        {note.bulletPoints && (
                          <ul className="space-y-2 pt-1">
                            {note.bulletPoints.map((bp, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                                <span className="text-xs leading-relaxed">{bp}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Toggle Expand CTA */}
                  <div className="pt-4 border-t border-[#219EBC]/15 flex items-center justify-between">
                    <span className="text-[11px] text-[#7E9AA8] font-medium">{note.date}</span>
                    <button
                      type="button"
                      onClick={() => toggleExpand(note.id)}
                      className="text-xs font-bold text-[#38BDF8] hover:underline transition-colors flex items-center gap-1 cursor-pointer py-1 min-h-[36px]"
                    >
                      <span>{isExpanded ? "Collapse brief" : "Read full brief"}</span>
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
