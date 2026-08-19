import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "duracell-energy",
    slug: "duracell-energy",
    title: "Duracell Energy Mobile Application",
    subtitle: "Flagship React Native App with Live Telemetry, Real-Time Dashboards & Custom D3.js Charts",
    category: "Flagship Mobile Application (iOS & Android)",
    summary: "React Native application visualizing real-time power flow between Solar PV, Battery Storage, Grid, Home load, and EV charging nodes, featuring high-frequency 10-second polling dashboards and custom D3.js + SVG visualizations.",
    primaryStack: ["React Native", "TypeScript", "Redux", "Zustand", "D3.js", "SVG", "Fastlane", "Jest"],
    fullStack: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Zustand",
      "D3.js",
      "React Native SVG",
      "Fastlane",
      "REST APIs",
      "Firebase",
      "Jest",
      "iOS (Xcode)",
      "Android (Android Studio)",
      "Apple App Store",
      "Google Play Store",
    ],
    role: "Software Developer / React Native Engineer",
    company: "Cloud Energy Software",
    period: "April 2021 – Present",
    featured: true,
    links: {
      duracellAppStore: "https://apps.apple.com/in/app/duracell-energy/id6460931680",
      duracellPlayStore: "https://play.google.com/store/apps/details?id=com.duracell",
      puredriveAppStore: "https://apps.apple.com/in/app/puredrive/id1536396851",
      puredrivePlayStore: "https://play.google.com/store/apps/details?id=com.puredrive.app",
      appStore: "https://apps.apple.com/in/app/duracell-energy/id6460931680",
      playStore: "https://play.google.com/store/apps/details?id=com.duracell",
    },
    technicalHighlight: {
      label: "REAL-TIME DASHBOARDS & CUSTOM VISUALIZATION",
      description: "Built custom D3.js + SVG path renderer replacing heavy charting libraries and optimized 10-second polling state synchronization to prevent UI lag.",
      codeSnippet: {
        filename: "useEnergyChartPath.ts",
        language: "typescript",
        code: `import * as d3 from 'd3-shape';

export function generateChartPath(data: Array<{ time: number; powerKw: number }>, width: number, height: number) {
  const xScale = d3.scaleTime().range([0, width]);
  const yScale = d3.scaleLinear().range([height, 0]);
  
  const lineGenerator = d3.line<{ time: number; powerKw: number }>()
    .x(d => xScale(d.time))
    .y(d => yScale(d.powerKw))
    .curve(d3.curveMonotoneX);

  return lineGenerator(data) || '';
}`,
      },
    },
    overview: "A flagship production React Native application providing homeowners and operators with live visibility into power flow between Solar, Battery, Grid, Home, and EV charging nodes. Built with a focus on real-time data handling, custom D3.js + SVG charting, and render optimization across iOS and Android.",
    challenges: [
      "High-Frequency Data Updates: Processing live telemetry updates every 10 seconds without inducing frame drops or UI sluggishness.",
      "Custom Data Visualization: Replacing bulky third-party charting libraries with performant D3.js and SVG path generators for time-series data handling 150+ points per view.",
      "Multi-Source Data Synchronization: Ensuring consistent state representation across multiple dashboard components from a single real-time data stream.",
      "Release Operations: Scripting Fastlane build lanes and managing iOS code-signing certificates and Play Console release tracks.",
    ],
    technicalApproach: [
      "Render Optimization: Applied strict component memoization (React.memo, useMemo) and efficient state structures to eliminate unnecessary re-renders during 10-second telemetry polling.",
      "Custom D3 + SVG Graphics: Engineered custom D3 path generators mapped directly to SVG primitives, achieving touch-inspectable time-series curves with zero WebView overhead.",
      "Battery-Aware Execution: Implemented AppState listeners to pause high-frequency polling timers and visual loops whenever the application transitions to background states.",
      "Automated Release Pipelines: Integrated Fastlane release pipelines for automated code signing, build generation, and deployment to Apple TestFlight and Google Play Store.",
    ],
    outcome: [
      "Delivered production applications published on the Apple App Store and Google Play Store with 10K+ installs and ~1K+ daily active users.",
      "Achieved smooth 60fps UI responsiveness during continuous 10-second real-time telemetry updates.",
      "Successfully replaced third-party chart libraries with a lightweight custom D3.js + SVG rendering engine.",
      "Mentored junior engineers and streamlined store deployment operations.",
    ],
    sections: [
      {
        id: "overview",
        title: "Product Overview & React Native Architecture",
        content: [
          "Duracell Energy operates as a high-stakes production mobile application serving real-time system monitoring across iOS and Android devices.",
          "The mobile client integrates complex real-time telemetry, visualizing power distribution between Solar PV, Battery Storage, Grid Import/Export, Home Load, and EV Chargers.",
          "Architected using React Native, TypeScript, and modern state-management patterns, the app delivers intuitive interfaces backed by performant data handling.",
        ],
      },
      {
        id: "real-time-telemetry",
        title: "Real-Time Telemetry & State Synchronization",
        content: [
          "High-frequency 10-second polling requires disciplined state management to prevent continuous full-tree re-renders.",
          "State updates were structured so that incoming telemetry ticks update normalized slices, ensuring only dependent UI nodes re-render while complex visual graphs remain stable.",
        ],
      },
      {
        id: "d3-visualization",
        title: "Custom D3.js + SVG Chart Engineering",
        content: [
          "To eliminate third-party chart constraints and performance overhead, custom D3.js path generators (d3-shape, d3-scale) were built and rendered via SVG primitives.",
          "This custom rendering pipeline smoothly displays 150+ time-series data points per view with touch-inspectable tooltips and zero WebView dependency.",
        ],
      },
      {
        id: "performance-optimization",
        title: "Render Optimization & Memory Management",
        content: [
          "Applied strict memoization strategies (useMemo, useCallback, React.memo) and AppState lifecycle hooks.",
          "When the application transitions to the background, polling timers and visual loops suspend automatically, preventing battery drain and memory accumulation.",
        ],
      },
      {
        id: "release-engineering",
        title: "Fastlane Build Automation & Store Operations",
        content: [
          "Scripted automated Fastlane deployment lanes for iOS and Android, managing code signing certificates, version incrementing, and store releases.",
          "Streamlined build delivery to Apple TestFlight and Google Play Store tracks for seamless release operations.",
        ],
      },
    ],
  },
  {
    id: "puredrive",
    slug: "puredrive",
    title: "Puredrive Mobile Application",
    subtitle: "React Native App with Modular UI Architecture & Asynchronous API Integration",
    category: "Mobile Application (iOS & Android)",
    summary: "Developed and maintained a scalable cross-platform mobile application with modular UI component architecture, efficient REST API integrations, and robust asynchronous data handling.",
    primaryStack: ["React Native", "TypeScript", "JavaScript", "Redux", "REST APIs", "Fastlane"],
    fullStack: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "Redux",
      "REST APIs",
      "iOS (Xcode)",
      "Android (Android Studio)",
      "Apple App Store",
      "Google Play Store",
    ],
    role: "React Native Developer / Software Developer",
    company: "Cloud Energy Software / Forebear Productions",
    period: "March 2020 – February 2023",
    featured: true,
    links: {
      appStore: "https://apps.apple.com/in/app/puredrive/id1536396851",
      playStore: "https://play.google.com/store/apps/details?id=com.puredrive.app",
    },
    technicalHighlight: {
      label: "MODULAR UI & API INTEGRATION",
      description: "Engineered scalable UI component libraries and asynchronous REST API handlers for consistent cross-platform performance across iOS and Android.",
      codeSnippet: {
        filename: "apiClient.ts",
        language: "typescript",
        code: `export async function fetchDeviceStatus(deviceId: string) {
  const response = await fetch(\`/api/v1/devices/\${deviceId}/status\`, {
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) throw new Error('Network error');
  return response.json();
}`,
      },
    },
    overview: "Puredrive is a cross-platform mobile application built to provide clean user interfaces, reliable device telemetry, and smooth API integration across iOS and Android platforms.",
    challenges: [
      "Asynchronous Data Synchronization: Managing asynchronous state flows across diverse device profiles without UI state mismatch.",
      "Modular Component Design: Creating reusable UI primitives that adhere strictly to design system guidelines across Android and iOS.",
    ],
    technicalApproach: [
      "Modular Architecture: Structured the application into decoupled, domain-driven modules with reusable UI components.",
      "API Layer Standardization: Built standardized request handlers and error handling strategies for predictable API data ingestion.",
    ],
    outcome: [
      "Shipped and maintained live production builds on the Apple App Store and Google Play Store.",
      "Established modular UI component patterns that improved developer productivity and cross-platform consistency.",
    ],
    sections: [
      {
        id: "overview",
        title: "Product Overview & Engineering Scope",
        content: [
          "Puredrive is a cross-platform mobile application engineered with React Native to deliver seamless client interfaces and reliable hardware interaction.",
          "Responsible for developing modular UI components, integrating REST APIs, managing state flows, and supporting production store releases.",
        ],
      },
      {
        id: "architecture",
        title: "Modular Component Architecture",
        content: [
          "Built a reusable component library enforcing clean design tokens, platform-specific adaptations, and type-safe props.",
          "Ensured consistent user experience across varied iOS and Android screen resolutions.",
        ],
      },
    ],
  },
  {
    id: "stain-care-pro",
    slug: "stain-care-pro",
    title: "Stain Care Pro Mobile Application",
    subtitle: "Cross-Platform React Native Application Engineered for Usability & Stability",
    category: "Mobile Application (iOS & Android)",
    summary: "Built cross-platform mobile application from scratch with focus on rendering performance, intuitive usability, debugging, and stability across production releases.",
    primaryStack: ["React Native", "JavaScript", "TypeScript", "REST APIs", "Jest"],
    fullStack: [
      "React Native",
      "JavaScript",
      "TypeScript",
      "REST APIs",
      "Jest",
      "iOS (Xcode)",
      "Android (Android Studio)",
      "Apple App Store",
      "Google Play Store",
    ],
    role: "React Native Developer",
    company: "Forebear Productions",
    period: "March 2020 – February 2023",
    featured: true,
    links: {
      appStore: "https://apps.apple.com/in/app/stain-care-pro/id1544399649",
      playStore: "https://play.google.com/store/apps/details?id=com.stainmanagement",
    },
    technicalHighlight: {
      label: "GREENFIELD DEVELOPMENT & PERFORMANCE",
      description: "Built application from scratch, focusing on layout efficiency, state predictability, thorough debugging, and store release stability.",
      codeSnippet: {
        filename: "stainResolver.ts",
        language: "typescript",
        code: `export interface SolutionStep {
  step: number;
  instruction: string;
}

export function getStainSolution(category: string): SolutionStep[] {
  return [
    { step: 1, instruction: 'Blot excess liquid immediately.' },
    { step: 2, instruction: 'Apply targeted treatment solution.' },
  ];
}`,
      },
    },
    overview: "Stain Care Pro is a consumer mobile application built from scratch using React Native, providing users with interactive guidance, product recommendation workflows, and optimized mobile interfaces.",
    challenges: [
      "Greenfield Initialization: Setting up core app architecture, navigation structures, and state management from scratch.",
      "Cross-Platform UI Consistency: Eliminating styling and interaction bugs between iOS and Android platforms.",
    ],
    technicalApproach: [
      "Performance Optimization: Applied layout optimizations and component memoization to ensure fluid touch responses.",
      "Debugging & Stability: Implemented robust logging and error boundary wrappers to isolate runtime exceptions and maintain high stability.",
    ],
    outcome: [
      "Successfully built, published, and maintained production application on Apple App Store and Google Play Store.",
      "Achieved high operational stability and positive user feedback across release cycles.",
    ],
    sections: [
      {
        id: "overview",
        title: "Product Overview & Greenfield Delivery",
        content: [
          "Stain Care Pro demonstrates end-to-end mobile engineering execution—taking a product concept from scratch to published App Store and Google Play Store releases.",
          "Focused on delivering intuitive user navigation, responsive styling, and fast launch times.",
        ],
      },
      {
        id: "quality",
        title: "Quality Assurance & Debugging",
        content: [
          "Conducted systematic debugging, cross-device layout testing, and unit testing using Jest.",
          "Maintained zero critical crash rates across production updates.",
        ],
      },
    ],
  },
];
