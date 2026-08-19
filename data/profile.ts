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
  eyebrow: "SENIOR REACT NATIVE ENGINEER // MOBILE ARCHITECT",
  headline: "Senior React Native Developer architecting real-time mobile apps, custom SVG visualizations, and automated release pipelines.",
  subheadline: "6+ years engineering production iOS and Android applications. Specializing in high-frequency telemetry interfaces, custom D3.js graphics, state selector isolation, and push-button Fastlane release delivery.",
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
    "Senior React Native Developer with 6+ years of experience building real-time mobile applications for Android and iOS. Specialized in developing data-intensive systems with complex UI architectures, including custom data visualizations using D3.js and real-time dashboards.",
    "Proven track record of owning end-to-end application development, eliminating render bottlenecks, and delivering scalable applications deployed on Apple App Store and Google Play Store with 10K+ installs and ~1K+ daily active users.",
  ],
  technicalFocus: [
    {
      title: "Mobile Systems Architecture",
      description: "Designing scalable cross-platform mobile architectures using React Native, TypeScript, Redux, and Zustand, establishing clean type boundaries and predictable state synchronization.",
    },
    {
      title: "Custom Graphics & Threading Optimization",
      description: "Engineering custom D3.js + SVG path generators to replace heavy third-party graphing libraries. Offloading gesture handlers and frame-critical animations to the native UI thread via Reanimated v3 to prevent JS thread blockage.",
    },
    {
      title: "Release Engineering & Store Delivery",
      description: "Configuring Fastlane build automation lanes, managing iOS code signing certificates and Android keystores, and orchestrating deployment across Apple App Store and Google Play Store.",
    },
    {
      title: "Real-Time Systems & Battery Efficiency",
      description: "Optimizing high-frequency polling dashboards (10-second intervals), suspending background timers via AppState lifecycles to preserve device battery, and applying strict primitive memoization to eliminate render bottlenecks.",
    },
  ],
};

