import React from "react";
import { testimonialsData } from "@/data/testimonials";
import { Quote } from "lucide-react";

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
    <section id="testimonials" className="w-full py-14 sm:py-20 border-b border-[#219EBC]/15 bg-[#0A1118]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-[680px] space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#E8F1F5]">
            Engineering recommendations
          </h2>
          <p className="text-sm sm:text-base text-[#7E9AA8] leading-relaxed">
            Direct feedback from project managers, cross-functional leads, and engineering directors.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {validTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#101D28] border border-[#219EBC]/20 hover:border-[#38BDF8]/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xs hover:shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-200 group"
            >
              <div className="space-y-4">
                <Quote className="w-6 h-6 text-[#38BDF8] group-hover:scale-105 transition-transform" />
                <p className="text-sm sm:text-base text-[#E8F1F5] italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#219EBC]/15 flex items-end justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="font-bold text-sm text-[#E8F1F5]">{item.name}</div>
                  <div className="text-xs text-[#7E9AA8]">
                    {item.role} at <span className="text-[#38BDF8] font-bold">{item.company}</span>
                  </div>
                </div>

                {item.relationshipTag && (
                  <span className="text-xs px-2.5 py-0.5 rounded-md bg-[#162634] text-[#10B981] border border-[#10B981]/30 font-semibold shrink-0">
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
