"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { profileData } from "@/data/profile";
import { FileText, Mail } from "lucide-react";

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
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Scroll spy to highlight current active section on homepage
  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
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

  return (
    <>
      {/* ============================================================ */}
      {/* DESKTOP PERSISTENT LEFT NAV RAIL (≥ 1024px)                 */}
      {/* ============================================================ */}
      <aside
        className="hidden lg:flex fixed top-0 left-0 h-screen w-64 flex-col justify-between py-10 px-8 border-r border-[#219EBC]/15 bg-[#070D13] text-[#E8F1F5] z-40"
        aria-label="Sidebar Navigation"
      >
        {/* Top: Identity & Status */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#38BDF8]/40 shadow-xs shrink-0 bg-[#0A1118]">
              <Image
                src={profileData.avatarUrl || "/assets/my/my.png"}
                alt={profileData.name}
                fill
                sizes="44px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div>
              <Link
                href="/"
                className="text-base font-semibold text-[#E8F1F5] tracking-tight hover:text-[#38BDF8] transition-colors inline-block"
              >
                {profileData.name}
              </Link>
              <p className="text-xs text-[#7E9AA8] mt-0.5">Senior Mobile Systems Engineer</p>
            </div>
          </div>

          {/* Live Operational Beacon (Truth, never decorative) */}
          <div className="flex items-center gap-2 text-xs text-[#7E9AA8]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.5)] shrink-0" aria-hidden="true" />
            <span>Available for Senior Roles</span>
          </div>

          {/* Navigation Links */}
          <nav className="pt-6 space-y-1" aria-label="Desktop Navigation">
            {navItems.map((item) => {
              const isActive = isHomePage && activeSection === item.targetId;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`group flex items-center justify-between py-2 text-sm transition-all duration-150 rounded-md px-2.5 -mx-2.5 ${
                    isActive
                      ? "text-[#38BDF8] font-semibold bg-[#162634] shadow-xs border-l-2 border-[#38BDF8]"
                      : "text-[#7E9AA8] hover:text-[#E8F1F5] hover:bg-[#162634]/50"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[0_0_6px_rgba(56,189,248,0.6)]" aria-hidden="true" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom: Utility Links */}
        <div className="pt-6 border-t border-[#219EBC]/15 space-y-3">
          <Link
            href="/resume"
            className="flex items-center justify-between text-xs text-[#7E9AA8] hover:text-[#38BDF8] transition-colors py-1"
          >
            <span className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#38BDF8]" aria-hidden="true" />
              <span>Resume</span>
            </span>
          </Link>

          <Link
            href="/contact"
            className="flex items-center justify-between text-xs text-[#7E9AA8] hover:text-[#38BDF8] transition-colors py-1"
          >
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#38BDF8]" aria-hidden="true" />
              <span>Contact</span>
            </span>
          </Link>
        </div>
      </aside>

      {/* ============================================================ */}
      {/* MOBILE TOP BAR (< 1024px)                                    */}
      {/* ============================================================ */}
      <header className="lg:hidden sticky top-0 z-30 w-full bg-[#070D13]/95 backdrop-blur-md border-b border-[#219EBC]/15 px-4 py-2.5 flex items-center justify-between text-[#E8F1F5]">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#38BDF8]/40 shrink-0 bg-[#0A1118]">
            <Image
              src={profileData.avatarUrl || "/assets/my/my.png"}
              alt={profileData.name}
              fill
              sizes="32px"
              className="object-cover object-top"
            />
          </div>
          <span className="text-sm font-semibold text-[#E8F1F5]">{profileData.name}</span>
        </Link>
        <div className="flex items-center gap-2 text-xs text-[#7E9AA8]">
          <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_6px_rgba(16,185,129,0.5)] shrink-0" aria-hidden="true" />
          <span>Available</span>
        </div>
      </header>

      {/* ============================================================ */}
      {/* MOBILE FLOATING BOTTOM DOCK (< 1024px)                       */}
      {/* ============================================================ */}
      <nav
        className="lg:hidden fixed bottom-4 inset-x-4 max-w-sm mx-auto z-50 bg-[#070D13]/95 backdrop-blur-md border border-[#219EBC]/20 rounded-full shadow-lg px-2 py-1.5 flex items-center justify-around text-xs font-medium text-[#E8F1F5]"
        aria-label="Mobile Navigation Dock"
      >
        {navItems.slice(0, 5).map((item) => {
          const isActive = isHomePage && activeSection === item.targetId;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`px-3 py-1.5 rounded-full transition-all duration-150 ${
                isActive
                  ? "bg-[#38BDF8] text-[#0A1118] font-semibold shadow-xs"
                  : "text-[#7E9AA8] hover:text-[#E8F1F5]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
