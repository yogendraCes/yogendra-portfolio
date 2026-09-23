"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { profileData } from "@/data/profile";
import { FileText, Mail, Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  targetId: string;
}

const navItems: NavItem[] = [
  { label: "Work", href: "/#work", targetId: "work" },
  { label: "Architecture", href: "/#architecture", targetId: "architecture" },
  { label: "Skills", href: "/#skills", targetId: "skills" },
  { label: "Experience", href: "/#experience", targetId: "experience" },
  { label: "Writing", href: "/#notes", targetId: "notes" },
  { label: "Contact", href: "/#contact", targetId: "contact" },
];

export function NavRail() {
  const [activeSection, setActiveSection] = useState<string>("work");
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Sliding pill indicator position state
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const tabRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({});
  const navContainerRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

  // Measure and update the sliding indicator pill
  const updatePill = useCallback(() => {
    const target = hoveredSection || (isHomePage ? activeSection : null);
    if (!target || !tabRefs.current[target] || !navContainerRef.current) {
      setPillStyle((prev) => ({ ...prev, opacity: 0 }));
      return;
    }

    const tabEl = tabRefs.current[target];
    const containerEl = navContainerRef.current;

    const tabRect = tabEl.getBoundingClientRect();
    const containerRect = containerEl.getBoundingClientRect();

    setPillStyle({
      left: tabRect.left - containerRect.left,
      width: tabRect.width,
      opacity: 1,
    });
  }, [hoveredSection, activeSection, isHomePage]);

  // Scroll spy & scroll elevation detection
  useEffect(() => {
    const handleScroll = () => {
      // Elevate navbar when scrolled down
      setIsScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const scrollPosition = window.scrollY + 220;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].targetId);
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navItems[i].targetId);
            return;
          }
        }
      }
      setActiveSection(navItems[0].targetId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Recalculate indicator position on resize or state change
  useEffect(() => {
    updatePill();
    window.addEventListener("resize", updatePill);
    return () => window.removeEventListener("resize", updatePill);
  }, [updatePill]);

  // Close mobile menu on outside click or Escape key
  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Handle smooth scroll to top on avatar click
  const handleScrollToTop = (e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      history.pushState(null, "", "/");
    }
  };

  const currentActiveLabel =
    navItems.find((item) => item.targetId === activeSection)?.label || "Menu";

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 flex justify-center px-3 sm:px-6 pointer-events-none">
      {/* Floating Apple-Style Glass Capsule */}
      <div
        ref={mobileMenuRef}
        className={`pointer-events-auto relative w-full max-w-fit flex items-center justify-between gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 rounded-full transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "bg-[#070D13]/90 backdrop-blur-2xl border border-[#38BDF8]/25 shadow-[0_12px_40px_rgba(0,0,0,0.7),0_1px_1px_rgba(255,255,255,0.12)_inset,0_0_24px_rgba(56,189,248,0.12)]"
            : "bg-[#070D13]/75 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5),0_1px_1px_rgba(255,255,255,0.08)_inset]"
        }`}
        role="navigation"
        aria-label="Main Floating Navigation"
      >
        {/* Left: Avatar & Identity */}
        <Link
          href="/"
          onClick={handleScrollToTop}
          className="group flex items-center gap-2 pl-1 pr-2 py-1 rounded-full hover:bg-white/5 transition-colors"
          aria-label="Yogendra Yadav - Scroll to top"
        >
          <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-[#38BDF8]/40 ring-1 ring-white/10 shrink-0 bg-[#0A1118]">
            <Image
              src={profileData.avatarUrl || "/assets/my/my.png"}
              alt={profileData.name}
              fill
              sizes="32px"
              className="object-cover object-top group-hover:scale-105 transition-transform duration-200"
              priority
            />
          </div>

          {/* Desktop Identity & Status */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-xs font-semibold text-[#E8F1F5] tracking-tight group-hover:text-[#38BDF8] transition-colors">
              {profileData.name.split(" ")[0]}
            </span>
            <span
              className="w-1.5 h-1.5 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.7)] shrink-0 animate-pulse"
              title="Available for Senior Roles"
              aria-label="Available for Senior Roles"
            />
          </div>
        </Link>

        {/* Micro Divider */}
        <div className="hidden md:block w-px h-4 bg-white/15 mx-0.5" aria-hidden="true" />

        {/* Center: Desktop Navigation with Apple Sliding Spring Pill */}
        <nav
          ref={navContainerRef}
          className="hidden md:flex relative items-center gap-0.5 px-1 py-0.5"
          onMouseLeave={() => setHoveredSection(null)}
          aria-label="Page Sections"
        >
          {/* Hardware-Accelerated Sliding Spring Pill Indicator */}
          <div
            className="absolute top-0.5 bottom-0.5 rounded-full bg-gradient-to-r from-[#162634] to-[#1E3345] border border-[#38BDF8]/30 shadow-[0_0_12px_rgba(56,189,248,0.15)] pointer-events-none transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              transform: `translate3d(${pillStyle.left}px, 0, 0)`,
              width: `${pillStyle.width}px`,
              opacity: pillStyle.opacity,
            }}
            aria-hidden="true"
          />

          {navItems.map((item) => {
            const isActive = isHomePage && activeSection === item.targetId;
            return (
              <Link
                key={item.targetId}
                ref={(el) => {
                  tabRefs.current[item.targetId] = el;
                }}
                href={item.href}
                onMouseEnter={() => setHoveredSection(item.targetId)}
                className={`relative z-10 px-3 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 whitespace-nowrap ${
                  isActive
                    ? "text-[#38BDF8] font-semibold"
                    : "text-[#7E9AA8] hover:text-[#E8F1F5]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Micro Divider */}
        <div className="hidden md:block w-px h-4 bg-white/15 mx-0.5" aria-hidden="true" />

        {/* Right: Quick Actions */}
        <div className="flex items-center gap-1.5">
          {/* Resume Link */}
          <Link
            href="/resume"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-medium text-[#7E9AA8] hover:text-[#E8F1F5] hover:bg-white/5 px-2.5 py-1.5 rounded-full transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-[#38BDF8]" aria-hidden="true" />
            <span>Resume</span>
          </Link>

          {/* Glowing Bioluminescent Contact CTA */}
          <Link
            href={isHomePage ? "#contact" : "/#contact"}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#0A1118] bg-gradient-to-r from-[#38BDF8] via-[#5EEAD4] to-[#38BDF8] bg-[length:200%_auto] hover:bg-right px-3 sm:px-3.5 py-1.5 rounded-full shadow-[0_0_14px_rgba(56,189,248,0.35)] hover:shadow-[0_0_18px_rgba(56,189,248,0.5)] transition-all duration-300 transform active:scale-95 shrink-0"
          >
            <Mail className="w-3.5 h-3.5 text-[#0A1118]" aria-hidden="true" />
            <span>Let&apos;s Talk</span>
          </Link>

          {/* Mobile Menu Trigger Pill */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden flex items-center gap-1.5 text-xs text-[#E8F1F5] bg-white/10 hover:bg-white/15 active:bg-white/20 border border-white/10 px-2.5 py-1.5 rounded-full transition-all"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <span className="text-[11px] font-semibold text-[#38BDF8] max-w-[70px] truncate">
              {currentActiveLabel}
            </span>
            {isMobileMenuOpen ? (
              <X className="w-3.5 h-3.5 text-[#E8F1F5]" aria-hidden="true" />
            ) : (
              <Menu className="w-3.5 h-3.5 text-[#E8F1F5]" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* ============================================================ */}
        {/* MOBILE EXPANDED FROSTED MODAL SHEET (< 768px)               */}
        {/* ============================================================ */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[calc(100vw-2rem)] max-w-xs p-3.5 rounded-2xl bg-[#070D13]/95 backdrop-blur-2xl border border-[#38BDF8]/25 shadow-[0_16px_48px_rgba(0,0,0,0.85),0_0_24px_rgba(56,189,248,0.15)] space-y-2.5 animate-in fade-in zoom-in-95 duration-200"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation links"
          >
            <div className="grid grid-cols-2 gap-1.5">
              {navItems.map((item) => {
                const isActive = isHomePage && activeSection === item.targetId;
                return (
                  <Link
                    key={item.targetId}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                      isActive
                        ? "bg-[#162634] text-[#38BDF8] border border-[#38BDF8]/30 shadow-xs"
                        : "text-[#7E9AA8] hover:text-[#E8F1F5] hover:bg-white/5"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[0_0_6px_rgba(56,189,248,0.8)]" />
                    )}
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between gap-2">
              <Link
                href="/resume"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-1.5 text-xs font-semibold text-[#E8F1F5] bg-white/5 hover:bg-white/10 py-2 rounded-xl border border-white/10 transition-colors"
              >
                <FileText className="w-3.5 h-3.5 text-[#38BDF8]" aria-hidden="true" />
                <span>Resume</span>
                <ArrowUpRight className="w-3 h-3 text-[#7E9AA8]" aria-hidden="true" />
              </Link>

              <Link
                href={isHomePage ? "#contact" : "/#contact"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex-1 flex items-center justify-center gap-1.5 text-xs font-bold text-[#0A1118] bg-gradient-to-r from-[#38BDF8] to-[#5EEAD4] py-2 rounded-xl shadow-[0_0_12px_rgba(56,189,248,0.3)] transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#0A1118]" aria-hidden="true" />
                <span>Contact</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
