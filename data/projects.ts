import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "duracell-energy",
    slug: "duracell-energy",
    title: "Duracell Energy Mobile Application",
    subtitle: "Flagship Mobile Architecture for Real-Time Telemetry, Node Flow Visualization & High-Frequency Data Handling",
    category: "Flagship Mobile Application (iOS & Android)",
    summary: "Lead mobile architecture for a flagship energy management system. Visualizes live power flow across Solar PV, Battery Storage, Grid, Home load, and EV charging nodes via high-frequency 10-second telemetry polling and custom D3.js + SVG rendering.",
    primaryStack: ["React Native", "TypeScript", "Redux", "Zustand", "D3.js", "SVG", "Fastlane", "Jest"],
    fullStack: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "Zustand",
      "D3.js (d3-shape, d3-scale)",
      "React Native SVG",
      "Fastlane Match",
      "REST APIs",
      "Firebase",
      "Jest",
      "iOS (Xcode)",
      "Android (Android Studio)",
      "Apple App Store",
      "Google Play Store",
    ],
    role: "Software Developer / Lead Mobile Architect",
    company: "Cloud Energy Software",
    period: "April 2021 – Present",
    featured: true,
    links: {
      duracellAppStore: "https://apps.apple.com/in/app/duracell-energy/id6460931680",
      duracellPlayStore: "https://play.google.com/store/apps/details?id=com.duracell",
      appStore: "https://apps.apple.com/in/app/duracell-energy/id6460931680",
      playStore: "https://play.google.com/store/apps/details?id=com.duracell",
    },
    technicalHighlight: {
      label: "CUSTOM GRAPHICS ENGINE & REAL-TIME STATE ISOLATION",
      description: "Built custom D3.js + SVG path generation directly mapped to React Native SVG primitives. Isolated 10-second polling state updates to prevent full-tree UI re-renders and maintain 60fps execution.",
      codeSnippet: {
        filename: "useEnergyChartPath.ts",
        language: "typescript",
        code: `import * as d3 from 'd3-shape';

// Representative path generator mapping telemetry data points to SVG curves
export function generateChartPath(
  data: Array<{ time: number; powerKw: number }>, 
  width: number, 
  height: number
): string {
  if (!data || data.length === 0) return '';

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
    overview: "Duracell Energy is a flagship mobile application providing homeowners and system operators with live visibility into residential power generation, storage, and consumption. Designed around dynamic energy-flow telemetry, the application processes real-time data from Solar PV arrays, Battery Storage units, Grid connections, Home loads, and EV chargers.",
    challenges: [
      "High-Frequency Telemetry Ingestion: Processing live data ticks every 10 seconds across mobile connections without overloading the JS thread or causing UI jank.",
      "Dynamic Multi-Node Energy Flow: Rendering real-time directional flow animations across 5 interconnected power nodes based on changing generation and load telemetry.",
      "Custom Graphic Performance: Eliminating heavy third-party graphing packages in favor of performant D3.js + SVG path generation capable of rendering 150+ time-series points at 60fps.",
      "Mobile Battery & Memory Preservation: Ensuring background timers and animation loops automatically freeze when the app transitions out of active focus.",
      "Automated Store Delivery: Managing iOS code-signing certificates and Android Play Store internal distribution via scripted Fastlane pipelines.",
    ],
    technicalApproach: [
      "Plain-English Architecture: Separated raw data ingestion from visual render logic. Incoming 10-second telemetry updates normalized state slices in memory, allowing graphic nodes to read from localized selectors without triggering full-screen component re-renders.",
      "Lightweight D3 + SVG Rendering: Engineered custom D3 path generators that convert time-series data directly into SVG path strings, bypassing WebView overhead and maintaining fluid touch inspection.",
      "AppState Lifecycle Management: Wrapped polling timers and continuous flow animations in React Native AppState listeners, automatically suspending background activity to preserve device battery.",
      "Fastlane CI/CD Automation: Standardized automated deployment lanes using Fastlane Match for TestFlight and Google Play Store Internal track releases.",
    ],
    outcome: [
      "Delivered flagship production application deployed to Apple App Store and Google Play Store with 10K+ installs and ~1K+ daily active users.",
      "Achieved rock-solid 60fps UI thread responsiveness during continuous 10-second real-time telemetry ingestion.",
      "Replaced third-party charting libraries with a lightweight custom D3.js + SVG path generator handling 150+ data points per view.",
      "Mentored 5 junior developers on state normalization and mobile render optimizations.",
    ],
    sections: [
      {
        id: "product-scope",
        title: "01. Product Scope & Engineering Ownership",
        content: [
          "Duracell Energy operates as a high-stakes mobile application monitoring live power distribution across residential and commercial energy systems.",
          "As Lead Mobile Architect and Senior React Native Developer, I owned the core mobile system design—from initial state architecture and real-time telemetry integration to custom SVG graphics engines and automated store delivery across iOS and Android.",
        ],
      },
      {
        id: "engineering-challenge",
        title: "02. The Core Engineering Challenge",
        content: [
          "In plain English: Every 10 seconds, hardware gateways transmit live telemetry detailing current solar generation, battery state-of-charge, grid import/export rates, home consumption, and EV charging power.",
          "The primary technical challenge was rendering these continuous multi-source data streams across dynamic visual node networks and time-series graphs without causing screen lag, frame drops, or battery drain on mobile devices.",
          "Achieving high responsiveness meant ensuring that frequent telemetry ticks only updated the exact UI components representing changed values, keeping the rest of the visual tree completely static.",
        ],
      },
      {
        id: "technical-constraints",
        title: "03. System Constraints & Boundaries",
        content: [
          "1. High-Frequency Polling: Telemetry feeds refresh every 10 seconds over cellular and Wi-Fi networks, demanding low-overhead parsing.",
          "2. Interconnected Node Logic: Power flow is dynamic—energy moves bidirectionally between Battery, Grid, Home, Solar, and EV nodes depending on real-time state.",
          "3. Single-Threaded JS Engine: Unoptimized full-tree re-renders on the React Native JavaScript thread block gesture handling and UI frame rates.",
          "4. Strict Privacy & Security: Zero disclosure of private API endpoints, hardware credentials, gateway keys, or customer identifiers.",
        ],
      },
      {
        id: "technical-approach",
        title: "04. Technical Approach & State Isolation",
        content: [
          "To decouple data ingestion from UI rendering, state management was architected using normalized slices in Redux Toolkit and Zustand.",
          "When a new 10-second telemetry payload arrives, it updates specific numerical state properties. UI components subscribe strictly to localized primitive selectors.",
          "As a result, an update to solar output only re-renders the solar metric component, leaving surrounding navigation, charts, and layout containers completely untouched.",
        ],
      },
      {
        id: "key-implementation-decisions",
        title: "05. Key Implementation Decisions",
        content: [
          "Decision A: Custom D3.js + SVG Path Generators over Third-Party Chart Packages. Off-the-shelf chart libraries introduced heavy bundle size and forced complete canvas redraws on every data update. Custom D3 scale and shape generators map telemetry directly to native SVG path strings, delivering touch-inspectable time-series graphs at 60fps.",
          "Decision B: AppState Lifecycle Hooks for Battery & Memory Preservation. Continuous polling timers and flow animations consume device CPU if left running in the background. Integrating AppState event listeners freezes active timers when the app moves to background or inactive states.",
          "Decision C: Scripted Fastlane CI/CD Lanes for Store Releases. Standardized automated build scripts using Fastlane Match with encrypted certificate storage for push-button deployment to Apple TestFlight and Google Play Store.",
        ],
      },
      {
        id: "code-highlight",
        title: "06. Sanitized Architecture Highlight: Path Calculation",
        content: [
          "The representative helper function below demonstrates how time-series power telemetry is mapped to SVG path strings using D3 scaling utilities, bypassing WebView rendering overhead completely.",
        ],
        codeSnippet: {
          filename: "useEnergyChartPath.ts",
          language: "typescript",
          code: `import * as d3 from 'd3-shape';

// Representative path generator mapping telemetry data points to SVG curves
export function generateChartPath(
  data: Array<{ time: number; powerKw: number }>, 
  width: number, 
  height: number
): string {
  if (!data || data.length === 0) return '';

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
      {
        id: "results-impact",
        title: "07. Production Results & Technical Impact",
        content: [
          "1. 10K+ Production Installs: Successfully published and maintained on Apple App Store and Google Play Store with ~1K+ daily active users.",
          "2. 60fps UI Performance: Sustained fluid 60fps frame rates during continuous 10-second live telemetry ingestion.",
          "3. Zero WebView Dependency: Rendered complex 150+ point time-series charts using lightweight native SVG primitives.",
          "4. Automated Store Releases: Reduced build deployment overhead using Fastlane CI/CD automation lanes.",
        ],
      },
    ],
  },
  {
    id: "puredrive",
    slug: "puredrive",
    title: "Puredrive Mobile Application",
    subtitle: "Scalable Mobile Architecture, Standardized API Integration & Maintainability",
    category: "Mobile Application Architecture & API Integration",
    summary: "Architected a maintainable cross-platform mobile application interfacing with energy storage hardware. Focused on domain-driven component separation, standardized API client layers, and type-safe asynchronous data handling.",
    primaryStack: ["React Native", "TypeScript", "Redux", "REST APIs", "Fastlane"],
    fullStack: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "Redux",
      "REST APIs",
      "Fastlane",
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
      label: "DOMAIN COMPONENT ARCHITECTURE & API INTEGRATION",
      description: "Structured domain-driven UI component boundaries and built standardized REST API handlers with type-safe DTO transformations to insulate client views from backend schema changes.",
      codeSnippet: {
        filename: "apiClient.ts",
        language: "typescript",
        code: `export async function fetchDeviceStatus(deviceId: string): Promise<{ id: string; online: boolean }> {
  const response = await fetch(\`/api/v1/devices/\${deviceId}/status\`, {
    headers: { 'Content-Type': 'application/json' },
  });
  if (!response.ok) throw new Error(\`Device status request failed: \${response.status}\`);
  const data = await response.json();
  return { id: data.id, online: Boolean(data.is_online) };
}`,
      },
    },
    overview: "Puredrive is a cross-platform mobile application built to provide clean user interfaces, reliable device telemetry displays, and structured API integration across iOS and Android platforms.",
    challenges: [
      "Asynchronous Data Flow Mismatches: Handling multi-state device responses across varying hardware profiles without introducing UI inconsistencies.",
      "Component Maintainability: Establishing modular UI primitives that enforce design system tokens while scaling across multi-year feature releases.",
    ],
    technicalApproach: [
      "Domain-Driven Component Isolation: Separated presentation views from data fetching layers, allowing UI primitives to remain pure and testable.",
      "Standardized API Abstraction: Created unified request handlers and data transformation utilities to sanitize backend payloads before feeding client state.",
    ],
    outcome: [
      "Successfully shipped and maintained live builds on Apple App Store and Google Play Store across multi-year client updates.",
      "Established reusable UI patterns that improved developer velocity and cross-platform reliability. [Insert user / download metric if available]",
    ],
    sections: [
      {
        id: "product-scope",
        title: "01. Product Scope & Engineering Ownership",
        content: [
          "Puredrive delivers client interface features and device status monitoring for energy hardware systems.",
          "I owned the mobile client component architecture, REST API integration layer, state normalization, and App Store / Play Store release updates.",
        ],
      },
      {
        id: "architecture-decisions",
        title: "02. Key Architectural Decisions",
        content: [
          "1. Domain Module Separation: Decoupled UI presentation components from network logic, ensuring UI views depend on clean, type-safe interfaces.",
          "2. API Data Sanitization: Implemented DTO transformation helpers at the network layer to shield client components from unexpected backend payload alterations.",
          "3. Cross-Platform Token Alignment: Enforced central design tokens and adaptive layout primitives across iOS and Android.",
        ],
      },
      {
        id: "results-impact",
        title: "03. Engineering Impact & Status",
        content: [
          "Published and actively maintained on Apple App Store and Google Play Store.",
          "Improved codebase maintainability and reduced regression bugs during feature releases. [Insert user / download metric if available]",
        ],
      },
    ],
  },
  {
    id: "stain-care-pro",
    slug: "stain-care-pro",
    title: "Stain Care Pro Mobile Application",
    subtitle: "Greenfield React Native Delivery, Diagnostic Logging & Production Stability",
    category: "Greenfield Mobile Engineering & Product Delivery",
    summary: "Engineered a consumer mobile app from initial commit to store release. Focused on greenfield React Navigation setup, error boundary wrappers for crash-free stability, and responsive UI workflows.",
    primaryStack: ["React Native", "TypeScript", "JavaScript", "REST APIs", "Jest"],
    fullStack: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "React Navigation",
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
      label: "GREENFIELD SETUP & ERROR BOUNDARIES",
      description: "Initialized core navigation and state architecture from scratch. Integrated React error boundaries and diagnostic logging to isolate runtime exceptions and maintain zero-crash release stability.",
      codeSnippet: {
        filename: "stainResolver.ts",
        language: "typescript",
        code: `export interface SolutionStep {
  step: number;
  instruction: string;
}

export function getStainSolution(category: string): SolutionStep[] {
  if (!category) return [];
  return [
    { step: 1, instruction: 'Blot excess liquid immediately with a clean cloth.' },
    { step: 2, instruction: 'Apply recommended treatment solution evenly.' },
  ];
}`,
      },
    },
    overview: "Stain Care Pro is a consumer mobile application built from scratch using React Native, providing users with interactive guidance, step-by-step resolution workflows, and clean mobile interfaces.",
    challenges: [
      "Greenfield Initialization: Setting up core app architecture, navigation trees, and state structures from scratch.",
      "Zero-Crash Release Goal: Preventing unexpected runtime exceptions from crashing the app during user interaction workflows.",
    ],
    technicalApproach: [
      "Structured Greenfield Setup: Configured React Navigation stacks and lightweight state containers for fast launch times.",
      "Error Boundary Wrappers: Integrated error boundaries around dynamic workflow views to trap exceptions gracefully.",
    ],
    outcome: [
      "Built, published, and maintained application on Apple App Store and Google Play Store with high release stability.",
      "Achieved zero critical crash reports across release updates. [Insert star rating / review metric if available]",
    ],
    sections: [
      {
        id: "product-scope",
        title: "01. Product Scope & Greenfield Delivery",
        content: [
          "Stain Care Pro represents end-to-end greenfield mobile engineering—taking a consumer application from initial commit to live App Store and Google Play releases.",
          "I owned project initialization, React Navigation setup, responsive UI implementation, error handling, and store publishing.",
        ],
      },
      {
        id: "engineering-decisions",
        title: "02. Key Engineering Decisions",
        content: [
          "1. Navigation & State Setup: Architected explicit type-safe React Navigation stacks for intuitive user workflows.",
          "2. Error Trapping & Logging: Wrapped workflow branches in React Error Boundaries to prevent unexpected exceptions from crashing the application.",
          "3. Layout Precision: Enforced responsive design system primitives across diverse iOS and Android device viewports.",
        ],
      },
      {
        id: "results-impact",
        title: "03. Results & Release Status",
        content: [
          "Published and maintained on Apple App Store and Google Play Store.",
          "Maintained zero critical crash reports across production updates. [Insert star rating / review metric if available]",
        ],
      },
    ],
  },
];
