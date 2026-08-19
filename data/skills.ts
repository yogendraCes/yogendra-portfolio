import { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    category: "Core Engineering",
    technologies: ["JavaScript", "TypeScript", "React Native"],
    productionDepth: "End-to-end cross-platform mobile architecture, modular client systems, platform native integration, type-safe development.",
  },
  {
    category: "State & Data",
    technologies: ["Redux", "Zustand", "REST APIs", "Real-Time Data Handling"],
    productionDepth: "Complex client state architectures, high-frequency polling telemetry, multi-source data synchronization, normalized caching.",
  },
  {
    category: "UI & Visualization",
    technologies: ["D3.js", "SVG", "Custom Charting", "Responsive UI", "Animations"],
    productionDepth: "Custom D3.js + SVG math path generators, interactive time-series visualizations, gesture inspection, responsive layout systems.",
  },
  {
    category: "Mobile",
    technologies: ["Android", "iOS"],
    productionDepth: "Cross-platform mobile application development, native bridge interaction, OS-specific UI behaviors, platform performance tuning.",
  },
  {
    category: "Engineering & Delivery",
    technologies: ["Git", "GitHub", "Azure DevOps", "Firebase", "Fastlane", "CI/CD"],
    productionDepth: "Automated build pipelines, Fastlane code signing, TestFlight and Play Store distribution tracks, Firebase integration.",
  },
  {
    category: "Quality & Performance",
    technologies: ["Jest", "Render Optimization", "Memoization", "Lazy Loading", "Debugging"],
    productionDepth: "UI thread frame rate optimization, memoized component structures, automated unit testing with Jest, logging and diagnostic triage.",
  },
];

