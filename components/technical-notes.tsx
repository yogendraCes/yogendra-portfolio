"use client";

import React, { useState } from "react";
import { technicalNotesData } from "@/data/technical-notes";
import { Clock, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { SpotlightCard } from "./spotlight-card";

export function TechnicalNotes() {
  const [expandedId, setExpandedId] = useState<string | null>("telemetry-re-renders");

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="notes" className="w-full py-14 sm:py-20 border-b border-[#219EBC]/15 bg-[#0A1118]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-[680px] space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#E8F1F5]">
            Writing & technical briefs
          </h2>
          <p className="text-sm sm:text-base text-[#7E9AA8] leading-relaxed">
            Deep-dive briefs detailing high-frequency telemetry re-render optimization, Fastlane continuous delivery, and native gesture thread isolation.
          </p>
        </div>

        {/* Technical Notes Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {technicalNotesData.map((note) => {
            const isExpanded = expandedId === note.id;

            return (
              <SpotlightCard key={note.id} className="h-full flex flex-col justify-between">
                <article className="p-6 sm:p-8 space-y-6 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    {/* Tags & Read Time Header */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#219EBC]/15">
                      <div className="flex flex-wrap gap-1.5">
                        {note.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-0.5 rounded-md bg-[#162634] text-[#7E9AA8] border border-[#219EBC]/20 font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-[#7E9AA8] font-medium">
                        <Clock className="w-3.5 h-3.5 text-[#38BDF8]" />
                        <span>{note.readTime}</span>
                      </div>
                    </div>

                    {/* Title & Subtitle */}
                    <div>
                      <h3
                        className="text-lg sm:text-xl font-bold text-[#E8F1F5] tracking-tight hover:text-[#38BDF8] transition-colors cursor-pointer"
                        onClick={() => toggleExpand(note.id)}
                      >
                        {note.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#7E9AA8] mt-1.5 leading-relaxed">
                        {note.subtitle}
                      </p>
                    </div>

                    {/* Key Takeaway Callout Box */}
                    <div className="p-3.5 rounded-xl bg-[#070D13] border border-[#219EBC]/20 space-y-1">
                      <span className="text-xs text-[#38BDF8] font-bold block uppercase tracking-wider">
                        Key architectural takeaway
                      </span>
                      <p className="text-xs text-[#E8F1F5] font-medium leading-relaxed">
                        {note.takeaway}
                      </p>
                    </div>

                    {/* Expandable Deep-Dive Content */}
                    {isExpanded && (
                      <div className="pt-2 space-y-3 text-xs sm:text-sm text-[#7E9AA8] leading-relaxed border-t border-[#219EBC]/15">
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
                  <div className="pt-4 border-t border-[#219EBC]/15 flex items-center justify-between">
                    <span className="text-xs text-[#7E9AA8] font-medium">{note.date}</span>
                    <button
                      onClick={() => toggleExpand(note.id)}
                      className="text-xs font-bold text-[#38BDF8] hover:underline transition-colors flex items-center gap-1 cursor-pointer py-1 min-h-[36px]"
                    >
                      <span>{isExpanded ? "Collapse brief" : "Read full brief"}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
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
