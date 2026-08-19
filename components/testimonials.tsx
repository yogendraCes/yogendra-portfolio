import React from "react";
import { testimonialsData } from "@/data/testimonials";
import { MessageSquareQuote, Quote } from "lucide-react";

export function Testimonials() {
  const validTestimonials = testimonialsData.filter(
    (item) =>
      item.name &&
      !item.name.includes("[") &&
      item.role &&
      !item.role.includes("[") &&
      item.quote &&
      !item.quote.includes("[")
  );

  if (validTestimonials.length === 0) {
    return null;
  }

  return (
    <section id="testimonials" className="w-full py-16 sm:py-24 border-b border-[rgba(255,255,255,0.08)] bg-[#08090A]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-12">
        {/* Section Header */}
        <div className="max-w-[760px] space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#D97706] tracking-wider uppercase">
            <MessageSquareQuote className="w-4 h-4" />
            <span>RECOMMENDATIONS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F3F4F6]">
            Trusted by Teams & Clients
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
            Feedback and recommendations from engineering managers, clients, and technical leaders.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {validTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#0F1115] border border-[rgba(255,255,255,0.08)] rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[rgba(255,255,255,0.16)] transition-all group"
            >
              <div className="space-y-4">
                <Quote className="w-6 h-6 text-[#D97706]/60 group-hover:text-[#D97706] transition-colors" />
                <p className="text-sm sm:text-base text-[#F3F4F6] italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(255,255,255,0.06)] flex items-end justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="font-bold text-sm text-[#F3F4F6]">{item.name}</div>
                  <div className="font-mono text-xs text-[#9CA3AF]">
                    {item.role} at <span className="text-[#D97706]">{item.company}</span>
                  </div>
                </div>

                {item.relationshipTag && (
                  <span className="font-mono text-[10px] sm:text-[11px] px-2 py-0.5 rounded bg-[#16181D] text-[#10B981] border border-[rgba(16,185,129,0.2)] font-medium shrink-0">
                    {item.relationshipTag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
