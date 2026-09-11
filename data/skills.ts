import { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    category: "Core Engineering",
    technologies: ["JavaScript", "TypeScript", "React Native"],
    productionDepth: "Architected 4 production mobile applications from initial commit to store release, establishing strict TypeScript boundaries that eliminated runtime type errors.",
  },
  {
    category: "State & Data",
    technologies: ["Redux", "Zustand", "REST APIs", "Real-Time Data Handling"],
    productionDepth: "Engineered normalized state structures to ingest live 10-second telemetry ticks across 150+ data points, isolating updates to leaf nodes to eliminate unnecessary component re-renders.",
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
    productionDepth: "Automated code signing and store release deployments via Fastlane Match pipelines, replacing manual export steps with reproducible scripted lanes.",
  },
  {
    category: "Quality & Performance",
    technologies: ["Jest", "Render Optimization", "Memoization", "Lazy Loading", "Debugging"],
    productionDepth: "Applied strict React memoization and AppState background listeners, preserving UI thread responsiveness. Unit and component test coverage on open-source mobile projects, CI-enforced on every PR.",
  },
  {
    category: "Web & Frontend",
    technologies: ["React", "Next.js", "Zustand", "Tailwind CSS", "TypeScript", "REST APIs"],
    productionDepth: "Engineered responsive web applications including client coaching and service management platforms (Acuity Coaching, SaloonApp), structuring domain-driven component hierarchies, custom UI hooks, and reliable API client integrations.",
  },
];
