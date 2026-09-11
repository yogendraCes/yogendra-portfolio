import React from "react";
import Link from "next/link";
import { profileData, isValidSocialUrl } from "@/data/profile";
import { Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const hasLinkedIn = isValidSocialUrl(profileData.linkedin);
  const hasGitHub = isValidSocialUrl(profileData.github);
  const hasUpwork = isValidSocialUrl(profileData.upwork);

  return (
    <footer className="w-full bg-[#F3F4F1] border-t border-[#E4E5E1] py-12 text-xs text-[#5B5F66]">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Row: Identity & Status */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E4E5E1]">
          <div>
            <div className="text-sm font-semibold text-[#14161A]">
              {profileData.name}, {profileData.role}
            </div>
            <div className="text-[#5B5F66] text-xs mt-0.5">
              Production mobile engineering across iOS and Android
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E4E5E1] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#3FAE64]" aria-hidden="true" />
            <span className="text-[#14161A] text-xs font-medium">
              {profileData.statusText}
            </span>
          </div>
        </div>

        {/* Middle Row: Navigation & Direct Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-5 text-[#5B5F66]">
            <Link href="/#work" className="hover:text-[#14161A] transition-colors py-1 min-h-[36px] flex items-center">
              Work
            </Link>
            <Link href="/#architecture" className="hover:text-[#14161A] transition-colors py-1 min-h-[36px] flex items-center">
              Architecture
            </Link>
            <Link href="/#skills" className="hover:text-[#14161A] transition-colors py-1 min-h-[36px] flex items-center">
              Skills
            </Link>
            <Link href="/#experience" className="hover:text-[#14161A] transition-colors py-1 min-h-[36px] flex items-center">
              Experience
            </Link>
            <Link href="/#notes" className="hover:text-[#14161A] transition-colors py-1 min-h-[36px] flex items-center">
              Writing
            </Link>
            <Link href="/resume" className="hover:text-[#14161A] transition-colors py-1 min-h-[36px] flex items-center">
              Resume
            </Link>
            <Link href="/contact" className="hover:text-[#14161A] transition-colors py-1 min-h-[36px] flex items-center">
              Contact
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[#5B5F66]">
            <a
              href={`mailto:${profileData.email}`}
              className="hover:text-[#2F6FED] transition-colors flex items-center gap-1.5 min-h-[44px]"
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
                className="hover:text-[#2F6FED] transition-colors py-1 min-h-[36px] flex items-center"
              >
                LinkedIn
              </a>
            )}

            {hasGitHub && (
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2F6FED] transition-colors py-1 min-h-[36px] flex items-center"
              >
                GitHub
              </a>
            )}

            {hasUpwork && (
              <a
                href={profileData.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#2F6FED] transition-colors py-1 min-h-[36px] flex items-center"
              >
                Upwork
              </a>
            )}
          </div>
        </div>

        {/* Bottom Row: Colophon & Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-[#E4E5E1] text-[#7E8490]">
          <p>
            © {new Date().getFullYear()} {profileData.name}. Built with Next.js & Tailwind CSS. Designed on-device.
          </p>

          <a
            href="#main-content"
            className="hover:text-[#14161A] transition-colors flex items-center gap-1.5 py-1 min-h-[36px]"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
