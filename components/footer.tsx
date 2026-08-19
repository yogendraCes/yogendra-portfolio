import React from "react";
import Link from "next/link";
import { profileData } from "@/data/profile";
import { Mail, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-[#08090A] border-t border-[rgba(255,255,255,0.08)] py-12 text-xs font-mono text-[#9CA3AF]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-8">
        {/* Top Row: Brand & Status */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[rgba(255,255,255,0.06)]">
          <div>
            <div className="text-sm font-bold text-[#F3F4F6] tracking-wider uppercase">
              YOGENDRA YADAV // SENIOR REACT NATIVE ENGINEER
            </div>
            <div className="text-[#9CA3AF] text-[11px] mt-0.5">
              Production Mobile Application Infrastructure (iOS & Android)
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0F1115] border border-[rgba(255,255,255,0.08)]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-[#F3F4F6] text-[11px] tracking-wider uppercase">
              {profileData.statusText}
            </span>
          </div>
        </div>

        {/* Middle Row: Links & Social */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-6 text-[#9CA3AF]">
            <Link href="/#work" className="hover:text-[#F3F4F6] transition-colors">
              [Production Work]
            </Link>
            <Link href="/#architecture" className="hover:text-[#F3F4F6] transition-colors">
              [Architecture]
            </Link>
            <Link href="/#experience" className="hover:text-[#F3F4F6] transition-colors">
              [Experience]
            </Link>
            <Link href="/resume" className="hover:text-[#F3F4F6] transition-colors">
              [Resume Hub]
            </Link>
            <Link href="/contact" className="hover:text-[#F3F4F6] transition-colors">
              [Contact]
            </Link>
          </div>

          <div className="flex items-center gap-4 text-[#9CA3AF]">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D97706] transition-colors flex items-center gap-1.5 min-h-[44px]"
              aria-label="GitHub Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#D97706] transition-colors flex items-center gap-1.5 min-h-[44px]"
              aria-label="LinkedIn Profile"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
              </svg>
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="hover:text-[#D97706] transition-colors flex items-center gap-1.5 min-h-[44px]"
              aria-label="Email Directly"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Bottom Row: Copyright Notice & Scroll to Top */}
        <div className="pt-6 border-t border-[rgba(255,255,255,0.06)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#9CA3AF]">
          <div>
            © {new Date().getFullYear()} Yogendra Yadav. All rights reserved. Built with Next.js, React, TypeScript, and Vanilla CSS Tokens.
          </div>
          <a
            href="#main-content"
            aria-label="Back to top of page"
            className="hover:text-[#F3F4F6] transition-colors flex items-center gap-1 text-[#9CA3AF] min-h-[44px]"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D97706]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
