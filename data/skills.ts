import { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    category: "Mobile Core",
    technologies: ["React Native", "TypeScript", "JavaScript (ES6+)", "React Navigation v7", "iOS (Xcode)", "Android (Android Studio)"],
    productionDepth: "Modular architecture, platform native bridge, custom native components, lifecycle management.",
  },
  {
    category: "State & API Architecture",
    technologies: ["Redux Toolkit", "RTK Query", "REST APIs", "API Polling", "Normalized Caching", "Offline Fallbacks"],
    productionDepth: "High-frequency telemetry ingestion, state normalization, polling lifecycle suspension.",
  },
  {
    category: "Graphics & Visualization",
    technologies: ["React Native SVG", "D3.js (d3-shape, d3-scale)", "Custom Math Path Generators", "Interactive Charting"],
    productionDepth: "Custom SVG canvas nodes, multi-series graph rendering, touch-inspected tooltips.",
  },
  {
    category: "Performance & UI Mechanics",
    technologies: ["React Native Reanimated (v3)", "Gesture Handler", "useMemo", "useCallback", "React.memo"],
    productionDepth: "UI-thread execution, gesture-driven interactions, main JS thread frame-rate optimization.",
  },
  {
    category: "DevOps & Store Operations",
    technologies: ["Fastlane", "Xcode", "Android Studio", "App Store Connect", "Google Play Console"],
    productionDepth: "Automated code-signing, TestFlight beta distribution, Play Console internal tracks, release management.",
  },
  {
    category: "Product & System Tools",
    technologies: ["Firebase (Auth, Push, Analytics)", "i18n Localization", "Feature Flags", "Git", "Jira"],
    productionDepth: "Multi-brand theming, dynamic language switching, remote feature toggles, agile workflow.",
  },
];
