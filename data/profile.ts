import { Profile } from "@/types";

export function isValidSocialUrl(url?: string): boolean {
  if (!url) return false;
  const trimmed = url.trim();
  if (trimmed === "" || trimmed.includes("[NEEDS INPUT]") || trimmed.includes("NEEDS INPUT")) {
    return false;
  }
  return trimmed.startsWith("http://") || trimmed.startsWith("https://");
}

export const profileData: Profile = {
  name: "Yogendra Yadav",
  title: "Senior React Native Developer / Software Engineer",
  role: "Senior React Native Developer / Software Engineer",
  eyebrow: "SENIOR REACT NATIVE DEVELOPER // SOFTWARE ENGINEER",
  headline: "Senior React Native Developer building production-grade mobile applications.",
  subheadline: "6+ years building cross-platform applications, real-time interfaces, data visualizations, scalable UI architectures and production release pipelines.",
  location: "Indore, India (Available for Remote Global Work)",
  email: "yogendra9644@gmail.com",
  github: "https://github.com/yogendraCes",
  linkedin: "https://linkedin.com/in/yogendra9644",
  upwork: "https://www.upwork.com/freelancers/~0111ed1b2c3fadb1f8?mp_source=share",
  resumeUrl: "/resume/Yogendra_Yadav_Resume_2026.pdf",
  statusText: "Available for Senior Roles & Contract Development",
  coreStack: [
    "React Native",
    "TypeScript",
    "JavaScript",
    "Redux",
    "Zustand",
    "D3.js",
    "SVG",
    "Fastlane",
    "iOS (Xcode)",
    "Android (Android Studio)",
  ],
  overviewParagraphs: [
    "Senior React Native Developer with 6+ years of experience building high-performance, real-time mobile applications for Android and iOS. Specialized in developing data-intensive systems with complex UI architectures, including custom data visualizations using D3.js and real-time dashboards.",
    "Proven track record of owning end-to-end application development, optimizing rendering performance, and delivering scalable production applications with 10K+ installs and ~1K+ daily active users. Strong expertise in handling frequent state updates, multi-source data synchronization, and cross-platform inconsistencies in complex mobile systems.",
  ],
  technicalFocus: [
    {
      title: "Production Mobile Architecture",
      description: "Designing scalable cross-platform mobile architectures using React Native, TypeScript, Redux, and Zustand, establishing clean type boundaries and predictable state synchronization.",
    },
    {
      title: "Custom Graphics & Threading Optimization",
      description: "Engineering custom D3.js + SVG path generators to replace heavy third-party graphing libraries. Offloading gesture handlers and frame-critical animations to maintain smooth, responsive UI thread performance.",
    },
    {
      title: "Release Engineering & Store Delivery",
      description: "Configuring Fastlane build automation lanes, managing iOS code signing certificates and Android keystores, and orchestrating deployment across Apple App Store and Google Play Store.",
    },
    {
      title: "Real-Time Systems & Performance",
      description: "Optimizing high-frequency polling dashboards (10-second intervals), suspending background timers via AppState lifecycles to preserve device battery, and applying strict memoization to eliminate render bottlenecks.",
    },
  ],
};

