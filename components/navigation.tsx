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

  const navLinks = [
    { label: "Work", href: "/#work" },
    { label: "Architecture", href: "/#architecture" },
    { label: "Capabilities", href: "/#capabilities" },
    { label: "Experience", href: "/#experience" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-[100] w-full bg-[#08090A]/95 backdrop-blur-md border-b border-[rgba(255,255,255,0.08)]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand Monogram */}
        <Link
          href="/"
          className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[#F3F4F6] hover:text-[#D97706] transition-colors flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-full bg-[#D97706]" />
          <span>YOGENDRA YADAV</span>
          <span className="hidden md:inline text-[#6B7280]">{"// REACT NATIVE ENGINEER"}</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (pathname === "/" && link.href === "/");
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`font-mono text-xs tracking-wide transition-colors relative py-2 min-h-[44px] flex items-center ${
                  isActive ? "text-[#F3F4F6] font-semibold" : "text-[#9CA3AF] hover:text-[#F3F4F6]"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-1 left-0 right-0 h-[2px] bg-[#D97706] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Quick Action Buttons (Desktop) */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={profileData.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded bg-[#16181D] border border-[rgba(255,255,255,0.16)] text-[#F3F4F6] font-mono text-xs hover:border-[#D97706]/50 hover:bg-[#1C1F26] transition-colors min-h-[40px]"
          >
            <Download className="w-3.5 h-3.5 text-[#D97706]" aria-hidden="true" />
            <span>Resume</span>
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#D97706] text-[#08090A] font-mono text-xs font-bold hover:bg-[#F59E0B] transition-colors shadow-sm min-h-[40px]"
          >
            <MessageSquare className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Get in Touch</span>
          </Link>
        </div>

        {/* Mobile Menu Button Trigger (Touch target: 48px) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-3 -mr-2 text-[#F3F4F6] hover:text-[#D97706] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D97706] rounded min-w-[48px] min-h-[48px] flex items-center justify-center"
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
            className="lg:hidden fixed inset-0 top-16 z-[90] bg-[#08090A]/80 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Slide-Down Mobile Sheet Drawer */}
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
            className="lg:hidden fixed inset-x-0 top-16 z-[100] bg-[#0F1115] border-b border-[rgba(255,255,255,0.12)] shadow-2xl max-h-[calc(100vh-4rem)] flex flex-col overflow-y-auto"
          >
            {/* Nav Links Section */}
            <div className="p-5 sm:p-6 space-y-4">
              <div className="font-mono text-xs text-[#9CA3AF] tracking-widest uppercase font-semibold pb-1 border-b border-[rgba(255,255,255,0.08)]">
                NAVIGATION MENU
              </div>
              <nav className="flex flex-col gap-2.5">
                {navLinks.map((link) => (
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
            <div className="p-5 sm:p-6 bg-[#08090A]/80 border-t border-[rgba(255,255,255,0.08)] space-y-3">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="w-full h-12 flex items-center justify-center gap-2 rounded bg-[#D97706] text-[#08090A] font-mono text-sm font-bold hover:bg-[#F59E0B] transition-colors min-h-[48px] shadow-md shadow-amber-950/30"
              >
                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                <span>Get in Touch</span>
              </Link>
              <a
                href={profileData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-12 flex items-center justify-center gap-2 rounded bg-[#16181D] border border-[rgba(255,255,255,0.16)] text-[#F3F4F6] font-mono text-sm font-semibold hover:border-[#D97706]/50 transition-colors min-h-[48px]"
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
