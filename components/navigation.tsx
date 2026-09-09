"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Download, MessageSquare, ArrowUpRight } from "lucide-react";
import { profileData } from "@/data/profile";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close drawer on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const desktopNavLinks = [
    { label: "Work", href: "/#work" },
    { label: "Architecture", href: "/#architecture" },
    { label: "Capabilities", href: "/#capabilities" },
    { label: "Experience", href: "/#experience" },
    { label: "Notes", href: "/#notes" },
  ];

  const mobileNavLinks = [
    { label: "Work", href: "/#work" },
    { label: "Architecture", href: "/#architecture" },
    { label: "Capabilities", href: "/#capabilities" },
    { label: "Experience", href: "/#experience" },
    { label: "Notes", href: "/#notes" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-[100] w-full bg-[#08090A]/90 backdrop-blur-xl border-b border-[rgba(255,255,255,0.08)] transition-all">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-6">
        {/* Brand Monogram */}
        <Link
          href="/"
          className="font-mono text-sm font-bold tracking-wider text-[#F3F4F6] hover:text-[#D97706] transition-colors flex items-center gap-2.5 shrink-0 min-h-[44px]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#D97706] shadow-[0_0_8px_rgba(217,119,6,0.6)]" />
          <span>YOGENDRA YADAV</span>
          <span className="hidden xl:inline text-[#6B7280] font-normal text-xs">{"// MOBILE ARCHITECT"}</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
          {desktopNavLinks.map((link) => {
            const isActive = pathname === link.href || (pathname === "/" && link.href === "/");
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-mono text-xs tracking-wider uppercase transition-all px-3 py-2 rounded-md min-h-[44px] flex items-center relative ${
                  isActive
                    ? "text-[#F3F4F6] font-semibold bg-white/[0.06]"
                    : "text-[#9CA3AF] hover:text-[#F3F4F6] hover:bg-white/[0.04]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1.5 left-3 right-3 h-[2px] bg-[#D97706] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Quick Action Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#16181D] border border-[rgba(255,255,255,0.14)] text-[#F3F4F6] font-mono text-xs font-medium hover:border-[#D97706]/50 hover:bg-[#1C1F26] transition-all min-h-[42px]"
          >
            <Download className="w-3.5 h-3.5 text-[#D97706]" aria-hidden="true" />
            <span>Resume</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D97706] text-[#08090A] font-mono text-xs font-bold hover:bg-[#F59E0B] transition-all shadow-md shadow-amber-950/30 hover:shadow-amber-900/40 hover:-translate-y-0.5 active:translate-y-0 min-h-[42px]"
          >
            <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Get in Touch</span>
          </Link>
        </div>

        {/* Mobile Menu Button Trigger (Touch target: 48px) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-3 -mr-2 text-[#F3F4F6] hover:text-[#D97706] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706] rounded-lg min-w-[48px] min-h-[48px] flex items-center justify-center transition-colors"
          aria-label={isOpen ? "Close Menu" : "Open Navigation Menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Menu Drawer & Backdrop Overlay */}
      {isOpen && (
        <>
          {/* Dark Backdrop Overlay */}
          <div
            onClick={() => setIsOpen(false)}
            className="lg:hidden fixed inset-0 top-20 z-[90] bg-[#08090A]/85 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Slide-Down Mobile Sheet Drawer */}
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            className="lg:hidden fixed inset-x-0 top-20 z-[100] bg-[#0F1115] border-b border-[rgba(255,255,255,0.12)] shadow-2xl max-h-[calc(100vh-5rem)] flex flex-col overflow-y-auto"
          >
            {/* Nav Links Section */}
            <div className="p-6 space-y-4">
              <div className="font-mono text-xs text-[#9CA3AF] tracking-widest uppercase font-semibold pb-2 border-b border-[rgba(255,255,255,0.08)]">
                NAVIGATION
              </div>
              <nav className="flex flex-col gap-2.5">
                {mobileNavLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-sans text-base sm:text-lg font-bold text-[#F3F4F6] hover:text-[#D97706] transition-all px-4 py-3 rounded-lg bg-[#16181D] hover:bg-[#1C1F26] border border-[rgba(255,255,255,0.06)] flex items-center justify-between min-h-[48px]"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#D97706]" aria-hidden="true" />
                  </Link>
                ))}
              </nav>
            </div>

            {/* Bottom Action CTAs Section */}
            <div className="p-6 bg-[#08090A]/80 border-t border-[rgba(255,255,255,0.08)] space-y-3">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full h-12 flex items-center justify-center gap-2 rounded-lg bg-[#D97706] text-[#08090A] font-mono text-sm font-bold hover:bg-[#F59E0B] transition-colors min-h-[48px] shadow-md shadow-amber-950/30"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                <span>Get in Touch</span>
              </Link>
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 flex items-center justify-center gap-2 rounded-lg bg-[#16181D] border border-[rgba(255,255,255,0.16)] text-[#F3F4F6] font-mono text-sm font-semibold hover:border-[#D97706]/50 transition-colors min-h-[48px]"
              >
                <Download className="w-4 h-4 text-[#D97706]" aria-hidden="true" />
                <span>Download PDF Resume</span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
