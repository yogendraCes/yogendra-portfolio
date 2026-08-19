import { Profile } from "@/types";

export const profileData: Profile = {
  name: "Yogendra Yadav",
  title: "Senior React Native Engineer (iOS & Android)",
  eyebrow: "SENIOR REACT NATIVE & MOBILE INFRASTRUCTURE ENGINEER",
  headline: "Building & Shipping Production Mobile Applications for Complex Real-Time Systems",
  subheadline: "Senior React Native Engineer specializing in cross-platform iOS and Android applications, real-time telemetry, interactive SVG/D3 graphics, state architecture, and automated release pipelines. Over 5 years of verified experience taking mobile products from initial architecture to App Store and Google Play deployment.",
  location: "Indore, India (Available for Remote Global Work)",
  email: "yogendra9644@gmail.com",
  github: "https://github.com/yogendra9644",
  linkedin: "https://linkedin.com/in/yogendra9644",
  resumeUrl: "/Yogendra_Yadav_React_Native_Resume.pdf",
  statusText: "Available for Select Consulting & Senior Roles",
  coreStack: [
    "React Native",
    "TypeScript",
    "Redux Toolkit",
    "RTK Query",
    "React Native SVG",
    "D3.js",
    "Reanimated",
    "Fastlane",
    "iOS (Xcode)",
    "Android (Android Studio)",
  ],
  overviewParagraphs: [
    "I am a Senior React Native Engineer based in Indore, India, focused on building, scaling, and maintaining high-reliability mobile applications across iOS and Android. My work centers on full-lifecycle mobile engineering—translating complex product requirements into clean TypeScript architectures, state management systems, and production builds shipped directly to the Apple App Store and Google Play Store.",
    "My specialized expertise lies in real-time data monitoring and custom mobile visualization. I currently own and maintain a Duracell-licensed consumer energy application at Cloud Energy Software, managing high-frequency API telemetry polling (~10s intervals), interactive power-flow graphics across Solar, Battery, Grid, and EV systems, custom D3 + SVG chart renderers, multi-language localization, and battery-optimized background execution states.",
  ],
  technicalFocus: [
    {
      title: "Production Mobile Architecture",
      description: "Architecting modular React Native codebases using TypeScript, strict type boundaries, React Navigation v7, and Redux Toolkit with RTK Query for normalized caching and predictable state synchronization.",
    },
    {
      title: "Custom Graphics & Threading Optimization",
      description: "Replacing off-the-shelf graphing libraries with custom D3.js path generators and React Native SVG primitives. Offloading complex gesture handlers and frame-critical animations to the native UI thread via React Native Reanimated and Gesture Handler to maintain consistent 60fps rendering.",
    },
    {
      title: "Release Engineering & Store DevOps",
      description: "Establishing cross-platform build automation, managing iOS match code-signing certificates, configuring Android keystores, scripting Fastlane build lanes, and orchestrating deployment across Apple TestFlight and Google Play Console Internal tracks.",
    },
    {
      title: "Production Resiliency & Real-World Edge Cases",
      description: "Implementing lifecycle-aware UI listeners to suspend polling timers and animations during background states, preventing memory leaks, and building resilient offline fallbacks for unstable mobile networks.",
    },
  ],
};
