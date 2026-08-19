import { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    category: "Core Engineering",
    technologies: ["JavaScript", "TypeScript", "React Native"],
    productionDepth: "Architected 3 production mobile applications from initial commit to store release, establishing strict TypeScript boundaries that eliminated runtime type errors.",
  },
  {
    category: "State & Data",
    technologies: ["Redux", "Zustand", "REST APIs", "Real-Time Data Handling"],
    productionDepth: "Engineered normalized state structures to ingest live 10-second telemetry ticks across 150+ data points without parent component re-renders [TODO: Insert measured re-render reduction % if tracked].",
  },
  {
    category: "UI & Visualization",
    technologies: ["D3.js", "SVG", "Custom Charting", "Responsive UI", "Animations"],
    productionDepth: "Replaced third-party charting libraries with custom D3.js + SVG path generators, delivering touch-inspectable time-series graphs offloaded from heavy canvas redraws.",
  },
  {
    category: "Mobile Platforms",
    technologies: ["Android", "iOS"],
    productionDepth: "Resolved platform-specific layout bugs and native bridge mismatches across 10K+ active installations on iOS and Android devices.",
  },
  {
    category: "Engineering & Delivery",
    technologies: ["Git", "GitHub", "Azure DevOps", "Firebase", "Fastlane", "CI/CD"],
    productionDepth: "Automated code signing and store release deployments via Fastlane Match pipelines [TODO: Insert build time reduction if logged, e.g. from 90 min to 15 min].",
  },
  {
    category: "Quality & Performance",
    technologies: ["Jest", "Render Optimization", "Memoization", "Lazy Loading", "Debugging"],
    productionDepth: "Applied strict React memoization and AppState background listeners, preserving UI thread responsiveness and preventing background battery drain.",
  },
];
