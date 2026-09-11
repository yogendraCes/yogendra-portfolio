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
        className="hidden lg:flex fixed top-0 left-0 h-screen w-64 flex-col justify-between py-10 px-8 border-r border-[#E4E5E1] bg-[#F3F4F1] z-40"
        aria-label="Sidebar Navigation"
      >
        {/* Top: Identity & Status */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#D1D3CD] shadow-2xs shrink-0 bg-white">
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
                className="text-base font-semibold text-[#14161A] tracking-tight hover:text-[#2F6FED] transition-colors inline-block"
              >
                {profileData.name}
              </Link>
              <p className="text-xs text-[#5B5F66] mt-0.5">Senior Mobile Systems Engineer</p>
            </div>
          </div>

          {/* Live Operational Beacon (Truth, never decorative) */}
          <div className="flex items-center gap-2 text-xs text-[#5B5F66]">
            <span className="w-2 h-2 rounded-full bg-[#3FAE64] shrink-0" aria-hidden="true" />
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
                  className={`group flex items-center justify-between py-2 text-sm transition-all duration-150 rounded-md px-2 -mx-2 ${
                    isActive
                      ? "text-[#14161A] font-semibold bg-white shadow-xs"
                      : "text-[#5B5F66] hover:text-[#14161A] hover:bg-black/[0.02]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2F6FED]" aria-hidden="true" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom: Utility Links */}
        <div className="pt-6 border-t border-[#E4E5E1] space-y-3">
          <Link
            href="/resume"
            className="flex items-center justify-between text-xs text-[#5B5F66] hover:text-[#14161A] transition-colors py-1"
          >
            <span className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Resume</span>
            </span>
          </Link>

          <Link
            href="/contact"
            className="flex items-center justify-between text-xs text-[#5B5F66] hover:text-[#14161A] transition-colors py-1"
          >
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Contact</span>
            </span>
          </Link>
        </div>
      </aside>

      {/* ============================================================ */}
      {/* MOBILE TOP BAR (< 1024px)                                    */}
      {/* ============================================================ */}
      <header className="lg:hidden sticky top-0 z-30 w-full bg-[#F3F4F1]/90 backdrop-blur-md border-b border-[#E4E5E1] px-4 py-2.5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#D1D3CD] shrink-0 bg-white">
            <Image
              src={profileData.avatarUrl || "/assets/my/my.png"}
              alt={profileData.name}
              fill
              sizes="32px"
              className="object-cover object-top"
            />
          </div>
          <span className="text-sm font-semibold text-[#14161A]">{profileData.name}</span>
        </Link>
        <div className="flex items-center gap-2 text-xs text-[#5B5F66]">
          <span className="w-2 h-2 rounded-full bg-[#3FAE64]" aria-hidden="true" />
          <span>Available</span>
        </div>
      </header>

      {/* ============================================================ */}
      {/* MOBILE FLOATING BOTTOM DOCK (< 1024px)                       */}
      {/* ============================================================ */}
      <nav
        className="lg:hidden fixed bottom-4 inset-x-4 max-w-sm mx-auto z-50 bg-white/95 backdrop-blur-md border border-[#E4E5E1] rounded-full shadow-lg px-2 py-1.5 flex items-center justify-around text-xs font-medium"
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
                  ? "bg-[#2F6FED] text-white font-semibold"
                  : "text-[#5B5F66] hover:text-[#14161A]"
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
