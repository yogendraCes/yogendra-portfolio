import React from "react";
import Link from "next/link";
import { profileData, isValidSocialUrl } from "@/data/profile";
import { Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const hasLinkedIn = isValidSocialUrl(profileData.linkedin);
  const hasGitHub = isValidSocialUrl(profileData.github);
  const hasUpwork = isValidSocialUrl(profileData.upwork);

  return (
    <footer className="w-full bg-[#08090A] border-t border-[rgba(255,255,255,0.08)] py-12 text-xs font-mono text-[#9CA3AF]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 space-y-8">
        {/* Top Row: Brand & Role */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[rgba(255,255,255,0.06)]">
          <div>
            <div className="text-sm font-bold text-[#F3F4F6] tracking-wider uppercase">
              {profileData.name} — {profileData.role}
            </div>
            <div className="text-[#9CA3AF] text-[11px] mt-0.5">
              Production Mobile Applications (iOS & Android)
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#0F1115] border border-[rgba(255,255,255,0.08)]">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="text-[#F3F4F6] text-[11px] tracking-wider uppercase">
              {profileData.statusText}
            </span>
          </div>
        </div>

        {/* Middle Row: Navigation & Direct Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-6 text-[#9CA3AF]">
            <Link href="/#work" className="hover:text-[#F3F4F6] transition-colors">
              [Work]
            </Link>
            <Link href="/#architecture" className="hover:text-[#F3F4F6] transition-colors">
              [Architecture]
            </Link>
            <Link href="/#experience" className="hover:text-[#F3F4F6] transition-colors">
              [Experience]
            </Link>
            <Link href="/resume" className="hover:text-[#F3F4F6] transition-colors">
              [Resume]
            </Link>
            <Link href="/contact" className="hover:text-[#F3F4F6] transition-colors">
              [Contact]
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[#9CA3AF]">
            <a
              href={`mailto:${profileData.email}`}
              className="hover:text-[#D97706] transition-colors flex items-center gap-1.5 min-h-[44px]"
              aria-label="Email Yogendra Directly"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>Email</span>
            </a>

            {hasLinkedIn && (
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D97706] transition-colors flex items-center gap-1.5 min-h-[44px]"
                aria-label="LinkedIn Profile"
              >
                <span>LinkedIn</span>
              </a>
            )}

            {hasGitHub && (
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D97706] transition-colors flex items-center gap-1.5 min-h-[44px]"
                aria-label="GitHub Repository"
              >
                <span>GitHub Repository</span>
              </a>
            )}

            {hasUpwork && (
              <a
                href={profileData.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D97706] transition-colors flex items-center gap-1.5 min-h-[44px]"
                aria-label="Upwork Freelance Profile"
              >
                <span>Upwork</span>
              </a>
            )}
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
            <ArrowUp className="w-3.5 h-3.5 text-[#D97706]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
