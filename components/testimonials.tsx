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
    <section id="testimonials" className="w-full py-14 sm:py-20 border-b border-[#E4E5E1] bg-[#F3F4F1]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="max-w-[680px] space-y-2">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#14161A]">
            Engineering recommendations
          </h2>
          <p className="text-sm sm:text-base text-[#5B5F66] leading-relaxed">
            Direct feedback from project managers, cross-functional leads, and engineering directors.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {validTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#E4E5E1] hover:border-[#D1D3CD] rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-xs hover:shadow-md transition-all group"
            >
              <div className="space-y-4">
                <Quote className="w-6 h-6 text-[#2F6FED] group-hover:scale-105 transition-transform" />
                <p className="text-sm sm:text-base text-[#14161A] italic leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E4E5E1] flex items-end justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="font-semibold text-sm text-[#14161A]">{item.name}</div>
                  <div className="text-xs text-[#5B5F66]">
                    {item.role} at <span className="text-[#2F6FED] font-medium">{item.company}</span>
                  </div>
                </div>

                {item.relationshipTag && (
                  <span className="text-xs px-2.5 py-0.5 rounded-md bg-[#F3F4F1] text-[#3FAE64] border border-[#3FAE64]/20 font-medium shrink-0">
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
