import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "duracell-energy",
    slug: "duracell-energy",
    title: "Duracell Energy Mobile Application",
    subtitle: "Flagship Mobile Architecture for Real-Time Telemetry, Node Flow Visualization & High-Frequency Data Handling",
    category: "Flagship Mobile Application (iOS & Android)",
    summary: "Lead mobile architecture for a flagship consumer energy management system. Visualizes live power flow across Solar PV, Battery Storage, Grid, Home load, and EV charging nodes via high-frequency 10-second telemetry polling and custom D3.js + SVG rendering.",
    projectType: "employer",
    isProprietary: true,
    keyEngineeringDecisions: [
      "Decoupled 10-second hardware telemetry polling from visual animation loops, preventing JS thread bottlenecks and maintaining 60fps responsiveness.",
      "Engineered lightweight custom D3.js path generators mapped directly to native SVG primitives, eliminating heavy WebView chart bundle overhead.",
      "Integrated React Native AppState lifecycle event listeners to freeze flow animations and suspend background polling timers when the app loses focus.",
      "Automated cross-platform build and code-signing pipelines using Fastlane Match with encrypted certificate storage for one-command store deployments.",
    ],
    primaryStack: ["React Native", "TypeScript", "Redux Toolkit", "RTK Query", "Reanimated", "D3.js", "SVG", "Fastlane"],
    fullStack: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "RTK Query",
      "React Native Reanimated v3",
      "React Native Gesture Handler",
      "D3.js (d3-shape, d3-scale)",
      "React Native SVG",
      "Fastlane Match",
      "REST APIs",
      "Firebase",
      "Jest",
      "iOS (Xcode)",
      "Android Studio",
      "Apple App Store",
      "Google Play Store",
    ],
    role: "Senior React Native Developer (Lead Mobile)",
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
      "Architecture: Separated raw data ingestion from visual render logic. Incoming 10-second telemetry updates normalized state slices in memory, allowing graphic nodes to read from localized selectors without triggering full-screen component re-renders.",
      "Lightweight D3 + SVG Rendering: Engineered custom D3 path generators that convert time-series data directly into SVG path strings, bypassing WebView overhead and maintaining fluid touch inspection.",
      "AppState Lifecycle Management: Wrapped polling timers and continuous flow animations in React Native AppState listeners, automatically suspending background activity to preserve device battery.",
      "Fastlane CI/CD Automation: Standardized automated deployment lanes using Fastlane Match for TestFlight and Google Play Store Internal track releases.",
    ],
    outcome: [
      "Delivered flagship production application deployed to Apple App Store and Google Play Store with 10K+ installs and ~1K+ daily active users.",
      "Achieved sustained 60fps UI thread responsiveness during continuous 10-second real-time telemetry ingestion.",
      "Replaced third-party charting libraries with a lightweight custom D3.js + SVG path generator handling 150+ data points per view.",
      "Mentored junior developers on state normalization and mobile render optimizations.",
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
          "Every 10 seconds, hardware gateways transmit live telemetry detailing current solar generation, battery state-of-charge, grid import/export rates, home consumption, and EV charging power.",
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
          "To decouple data ingestion from UI rendering, state management was architected using normalized slices in Redux Toolkit.",
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
    screenshots: [
      {
        url: "/assets/projects/duracell-energy/duracell-splash.png",
        caption: "Duracell Energy Application Launch & Mascot Splash Screen",
        alt: "Duracell Energy mobile app splash screen featuring official Duracell Bunny mascot",
        category: "Branding & Splash Screen",
      },
      {
        url: "/assets/projects/duracell-energy/live-usage-home-flow.png",
        caption: "Live Telemetry Dashboard: Home Flow Architectural Graphic View",
        alt: "Live Usage Monitor Home Flow screen displaying real-time Solar, Battery, EV, Home, and Grid power telemetry",
        category: "Telemetry Visualization",
      },
      {
        url: "/assets/projects/duracell-energy/live-usage-energy-flow.png",
        caption: "Live Telemetry Dashboard: Multi-Node Energy Flow Topology View",
        alt: "Live Usage Monitor Energy Flow screen with circular interactive power node network topology",
        category: "Network Topology",
      },
      {
        url: "/assets/projects/duracell-energy/ev-live-usage.png",
        caption: "EV-1 Live Usage & Smart Charge Mode Selector (Puregreen, GreenBoost, Smart, Timed Boost)",
        alt: "EV-1 Live Usage screen showing 5.52 kW charge rate, charging mode presets, energy target slider, and power metrics",
        category: "EV Smart Charging",
      },
      {
        url: "/assets/projects/duracell-energy/scheduled-control.png",
        caption: "Scheduled Control: Battery Charge & Discharge Time-of-Use Management",
        alt: "Scheduled Control screen displaying customizable automated charge/discharge schedules, tariff timing, and rate parameters",
        category: "Time-of-Use Management",
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
    projectType: "employer",
    isProprietary: true,
    keyEngineeringDecisions: [
      "Structured domain-driven UI component boundaries, ensuring presentation views depend strictly on clean, type-safe interfaces.",
      "Built standardized REST API handlers with type-safe DTO transformations to insulate client views from backend schema changes.",
      "Enforced central design tokens and adaptive layout primitives across iOS and Android.",
      "Managed automated staging and production releases to App Store Connect and Google Play Console.",
    ],
    primaryStack: ["React Native", "TypeScript", "Redux Toolkit", "REST APIs", "Fastlane"],
    fullStack: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "REST APIs",
      "Fastlane",
      "iOS (Xcode)",
      "Android Studio",
      "Apple App Store",
      "Google Play Store",
    ],
    role: "Senior React Native Developer",
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
      "Established reusable UI patterns that improved developer velocity and cross-platform reliability.",
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
          "Improved codebase maintainability and reduced regression bugs during feature releases.",
        ],
      },
    ],
    screenshots: [
      {
        url: "/assets/projects/puredrive-energy/0x0ss.png",
        caption: "Application Launch and Dynamic Wave Splash Screen",
        alt: "Puredrive application launch screen featuring native wave mesh brand styling and initialization loader",
        category: "Branding & Entry",
        shortLabel: "App Splash",
        engineeringContext: "Native launch screen orchestration featuring wave mesh brand styling, secure keychain token rehydration, and background config fetch.",
        technicalDetails: [
          "Native launch screen configuration via Xcode launch storyboards and Android splash theme",
          "Async token rehydration and cached configuration load before root navigation mount",
          "Network reachability check to determine offline cache versus live hardware sync mode",
        ],
      },
      {
        url: "/assets/projects/puredrive-energy/0x0ss (1).png",
        caption: "Live Usage Monitor: Multi-Node Energy Flow Topology View",
        alt: "Puredrive Live Usage Monitor screen displaying circular interactive energy flow topology connecting Solar, Battery, Home, Grid, and EV nodes",
        category: "Telemetry Visualization",
        shortLabel: "Energy Flow",
        engineeringContext: "Primary real-time telemetry dashboard displaying dynamic energy movement between Solar PV, Home Load, Battery Storage, Power Grid, and EV Charger.",
        technicalDetails: [
          "Real-time circular SVG node layout calculating directional energy vectors and live wattages",
          "High-frequency 10-second polling synchronization without React JS thread freezing",
          "Dynamic node color transitions reflecting net import versus export tariffs",
        ],
      },
      {
        url: "/assets/projects/puredrive-energy/0x0ss (2).png",
        caption: "EV-1 Live Usage: Smart Charging Mode Selector and Capacity Slider",
        alt: "Puredrive EV-1 charging interface showing 1.68 kW live charge rate, PureGreen and GreenBoost mode selectors, and energy target slider",
        category: "EV Smart Charging",
        shortLabel: "EV Charging",
        engineeringContext: "EV charging management interface providing charge preset modes (Puregreen, GreenBoost, Smart, Timed Boost), target capacity sliders, and live kW telemetry.",
        technicalDetails: [
          "Interactive target kWh capacity slider with debounced API payload dispatch",
          "Mode selector switching charge policies between PureGreen and GreenBoost presets",
          "Instant visual feedback with optimistic local state updates before cloud confirmation",
        ],
      },
      {
        url: "/assets/projects/puredrive-energy/0x0ss (3).png",
        caption: "Energy Summary: Daily Time-Series Generation and Import Charts",
        alt: "Puredrive Energy Summary screen with stacked D3 bar chart displaying solar generation surplus and grid import metrics across 24 hours",
        category: "D3 + SVG Charts",
        shortLabel: "Daily Charts",
        engineeringContext: "Interactive time-series charts rendering multi-source generation, storage, and consumption curves across dynamic daily, monthly, and annual ranges.",
        technicalDetails: [
          "Custom D3 scale and shape math mapped directly to React Native SVG primitives",
          "Gesture-driven touch inspection tooltips for fine-grained hourly energy audits",
          "Optimized memoized data parsing preventing garbage collection stutter on budget Android devices",
        ],
      },
      {
        url: "/assets/projects/puredrive-energy/0x0ss (4).png",
        caption: "System Overview: Dual-Axis Power Draw and Battery State of Charge (SoC)",
        alt: "Puredrive System Overview chart displaying dual-axis power consumption bars synchronized with battery state of charge percentage curve",
        category: "Analytics & Telemetry",
        shortLabel: "SoC Curves",
        engineeringContext: "Synchronized dual-axis time-series visualization comparing instantaneous household power draw with battery storage capacity percentage.",
        technicalDetails: [
          "Dual-axis coordinate mapping synchronizing percentage SoC with kW power metrics",
          "Dynamic curve smoothing using cardinal splines on native SVG canvas",
          "Responsive time range selector (Daily, Weekly, Monthly) with cached query slices",
        ],
      },
      {
        url: "/assets/projects/puredrive-energy/0x0ss (5).png",
        caption: "Scheduled Charge: Automated Time-of-Use Tariff Configuration",
        alt: "Puredrive Scheduled Charge screen with configurable charging time windows, toggle switches, and tariff automation parameters",
        category: "Tariff Automation",
        shortLabel: "Scheduled Control",
        engineeringContext: "Automated time-of-use scheduling module enabling homeowners to configure overnight charging windows and off-peak rate utilization.",
        technicalDetails: [
          "Client-side schedule validation algorithm preventing overlapping time windows",
          "Toggle switches backed by optimistic updates with rollback on network timeout",
          "Multi-slot schedule payload serializer synchronizing directly with inverter firmware",
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
    summary: "Engineered a professional stone and surface restoration mobile application developed by SurpHaces in collaboration with Chief Technical Director Fred Hueston. Features comprehensive stain charts, poultice instructional videos, real-world case studies, and responsive phone and tablet layouts.",
    projectType: "employer",
    isProprietary: true,
    keyEngineeringDecisions: [
      "Architected type-safe React Navigation stacks for structured, predictable consumer workflows.",
      "Wrapped dynamic workflow branches in React Error Boundaries with diagnostic logging to prevent unhandled runtime exceptions.",
      "Implemented standardized responsive UI primitives ensuring layout fidelity across both iOS and Android form factors, including tablet/iPad viewports.",
      "Orchestrated store submission processes through Apple App Store Connect and Google Play Console.",
    ],
    primaryStack: ["React Native", "TypeScript", "JavaScript", "React Navigation", "REST APIs", "Jest"],
    fullStack: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "React Navigation",
      "REST APIs",
      "Jest",
      "iOS (Xcode)",
      "Android Studio",
      "Apple App Store",
      "Google Play Store",
    ],
    role: "React Native Developer",
    company: "Forebear Productions / SurpHaces",
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
    overview: "SurpHaces, the experts in surface care, in collaboration with internationally renowned natural stone restoration expert Fred Hueston, developed Stain Care Pro as a comprehensive, simple-to-use stain management mobile application. The app provides trade professionals and consumers with an extensive chart covering virtually every stain type found on natural stone, concrete, and porous surfaces, complete with step-by-step poultice guides and real-world video case studies.",
    challenges: [
      "Extensive Data Classification: Structuring large hierarchical stain catalogs, poultice chemical reagents, and instructional video streams into fast, offline-friendly mobile screens.",
      "Multi-Form-Factor UI Scaling: Ensuring seamless navigation and touch usability across varying Android phone screens and large iPad/tablet viewports.",
    ],
    technicalApproach: [
      "Structured Greenfield Setup: Configured React Navigation stacks and lightweight state containers for fast launch times and zero-latency index searching.",
      "Adaptive Tablet Breakpoints: Implemented responsive style hooks to scale layout primitives elegantly between handheld smartphones and full-sized tablets.",
    ],
    outcome: [
      "Built, published, and maintained application on Apple App Store and Google Play Store with high release stability.",
      "Maintained zero critical crash reports across production release updates.",
    ],
    sections: [
      {
        id: "product-scope",
        title: "01. Product Scope & Professional Surface Care",
        content: [
          "Developed in partnership with SurpHaces and Chief Technical Director Fred Hueston, Stain Care Pro serves as the definitive reference tool for stone restoration specialists.",
          "I owned full-lifecycle mobile engineering from greenfield setup to production store distribution, delivering responsive guide trees, video players, and technical chemical databases.",
        ],
      },
      {
        id: "engineering-decisions",
        title: "02. Key Engineering Decisions",
        content: [
          "1. Navigation & State Architecture: Architected explicit type-safe React Navigation stacks for intuitive user workflows across stain classifications.",
          "2. Error Trapping & Resilience: Wrapped dynamic workflow branches in React Error Boundaries to prevent runtime video decoding and memory exceptions from impacting stability.",
          "3. Tablet Adaptation: Enforced responsive layout primitives ensuring optimal presentation on both mobile phones and tablets (iPad).",
        ],
      },
      {
        id: "results-impact",
        title: "03. Results & Release Status",
        content: [
          "Published and maintained on Apple App Store and Google Play Store.",
          "Maintained zero critical crash reports across production updates.",
        ],
      },
    ],
    screenshots: [
      {
        url: "/assets/projects/stain-care-pro/1.webp",
        caption: "Stain Care Pro Home Interface and Core Guide Navigation",
        alt: "Stain Care Pro home screen on phone showing navigation options: The Guide, Stain Chart, How-To Video, Reagents and Supplies, Case Studies, and Resources",
        category: "Navigation & Guide",
        shortLabel: "Diagnostic Menu",
        engineeringContext: "Categorized stone and hard surface diagnostic guide formulated in collaboration with Fred Hueston and SurpHaces technical directors.",
        technicalDetails: [
          "Structured hierarchical taxonomy covering natural stone, marble, granite, terrazzo, and tile",
          "Instant client-side filter searching across 50+ stain chemical compositions and surface types",
          "Deep links into specialized poultice formulation guides and instructional restoration videos",
        ],
      },
      {
        url: "/assets/projects/stain-care-pro/2.webp",
        caption: "Real-World Case Studies and Stone Restoration Video Library",
        alt: "Stain Care Pro case studies screen displaying video case studies of mastic stains on travertine and excess sealer problems",
        category: "Case Studies & Video",
        shortLabel: "Case Studies",
        engineeringContext: "Field video case study library showcasing real-world contractor restoration challenges, including mastic stain removal on travertine.",
        technicalDetails: [
          "Embedded streaming video player with native hardware-accelerated playback",
          "Offline asset caching for reliable access on job sites with zero cellular connectivity",
          "Step-by-step contractor problem breakdowns with diagnostic expert commentary",
        ],
      },
      {
        url: "/assets/projects/stain-care-pro/3.webp",
        caption: "Professional Resources, eLearning, and Technical Supply Directory",
        alt: "Stain Care Pro resources screen listing SurpHaces Learning Institute eLearning courses, Stone and Tile School training, and professional support",
        category: "Resources & Directory",
        shortLabel: "Restoration Network",
        engineeringContext: "Certified contractor and training institute directory connecting surface care professionals with industry standards.",
        technicalDetails: [
          "Native telephone and geolocation intent links for certified local contractor dispatch",
          "Integrated Stone and Tile School educational resource linking and certification guides",
          "Cached organizational data layer supporting rapid offline lookup for trade professionals",
        ],
      },
      {
        url: "/assets/projects/stain-care-pro/4.webp",
        caption: "Responsive Tablet Layout: Full-Screen iPad User Interface",
        alt: "Stain Care Pro app displayed on an iPad tablet demonstrating responsive adaptive layout scaling across large screen form factors",
        category: "Tablet & iPad Adaptation",
        shortLabel: "Tablet Layout",
        engineeringContext: "Adaptive dual-pane iPad and Android tablet layout providing expanded master-detail navigation for job site contractors.",
        technicalDetails: [
          "Adaptive split-screen layout dynamically responding to device width and orientation",
          "Tablet-optimized typography and touch targets meeting 48px minimum guidelines",
          "Unified React Native codebase sharing 95%+ component logic between phone and tablet",
        ],
      },
    ],
  },
  {
    id: "sdgme",
    slug: "sdgme",
    title: "SDGme Personal Action Tracker",
    subtitle: "UN Sustainable Development Goals Action Tracker, Carbon Savings (CO2e) & ESG Disclosures",
    category: "Mobile Systems & ESG Analytics",
    summary: "Engineered a cross-platform mobile application allowing users to track and reflect on personal actions contributing to the 17 UN Sustainable Development Goals (SDGs), calculate estimated carbon savings (CO2e), benchmark progress against group averages, and sync data to a centralized enterprise ESG dashboard.",
    projectType: "employer",
    isProprietary: true,
    keyEngineeringDecisions: [
      "Architected dynamic action logging workflows across Work, Play, and Home categories with client-side carbon savings estimation math.",
      "Integrated 17 UN Sustainable Development Goal data matrices with interactive touch navigation and category filtering.",
      "Engineered comparative analytics charting comparing individual action counts and CO2e savings against organizational averages.",
      "Built programmatic social sharing card generation enabling users to export weekly verified impact summaries to social media.",
    ],
    primaryStack: ["React Native", "TypeScript", "JavaScript", "REST APIs", "Analytics"],
    fullStack: [
      "React Native",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "REST APIs",
      "Custom Charting",
      "Social Sharing APIs",
      "iOS (Xcode)",
      "Android Studio",
    ],
    role: "React Native Developer",
    company: "Forebear Productions / Unify",
    period: "2021 – 2022",
    featured: true,
    links: {
      demo: "https://sdgme.com/",
    },
    technicalHighlight: {
      label: "CARBON METRIC COMPUTATION & SOCIAL SHARE CARDS",
      description: "Developed localized carbon estimation logic calculating CO2e savings per recorded activity, paired with native view snapshotting to generate branded weekly achievement cards for social distribution.",
      codeSnippet: {
        filename: "carbonCalculator.ts",
        language: "typescript",
        code: `export interface SdgAction {
  id: string;
  title: string;
  category: 'work' | 'play' | 'home';
  carbonGramsSaved: number;
  sdgGoalIds: number[];
}

export function calculateTotalCarbonSaved(actions: { action: SdgAction; count: number }[]): { kg: number; grams: number } {
  const totalGrams = actions.reduce((acc, curr) => acc + curr.action.carbonGramsSaved * curr.count, 0);
  return {
    grams: totalGrams,
    kg: Number((totalGrams / 1000).toFixed(2)),
  };
}`,
      },
    },
    overview: "SDGme is an enterprise-backed personal action tracking mobile app designed to mobilize organizations towards the UN Sustainable Development Goals. It provides individuals with an intuitive mobile logging interface while powering centralized ESG (Environmental, Social, and Governance) disclosure dashboards for Unify licensees.",
    challenges: [
      "Multi-Category Action Tracking: Managing hierarchical logging workflows across lifestyle dimensions (Work, Play, Home) while maintaining fast offline-first entry.",
      "Organizational Benchmarking: Aggregating and visualizing individual carbon contribution scores against group and company averages without latency.",
    ],
    technicalApproach: [
      "Normalized Action Logging: Built modular state slices to record actions, compute immediate localized carbon reductions, and cache entries for asynchronous server synchronization.",
      "Comparative Visual Analytics: Created lightweight graphical comparison meters and line graphs illustrating weekly, monthly, and annual progress.",
    ],
    outcome: [
      "Shipped cross-platform mobile client for Unify licensee networks globally, driving measurable personal engagement with UN Sustainable Development Goals.",
      "Integrated with centralized ESG disclosure reporting dashboards, enabling automated organizational carbon collation.",
    ],
    sections: [
      {
        id: "product-overview",
        title: "01. Product Overview & ESG Mission",
        content: [
          "The United Nations Sustainable Development Goals (SDGs) represent a global roadmap for positive environmental and social progress by 2030.",
          "SDGme bridges individual daily choices with organizational sustainability disclosures, giving employees and community members an intuitive mobile tool to log actions, calculate carbon savings, and benchmark results.",
        ],
      },
      {
        id: "technical-architecture",
        title: "02. Mobile Architecture & Analytics",
        content: [
          "1. Dynamic Action System: Built interactive action catalogs categorized by Work, Play, and Home, each tied directly to relevant UN SDG targets.",
          "2. Carbon Impact Engine: Integrated real-time carbon estimation algorithms calculating CO2e metrics per activity (e.g. video conferencing vs traveling, reducing paper use).",
          "3. Comparative Group Benchmarking: Implemented visual metrics contrasting individual totals against organization-wide saver averages.",
          "4. Viral Sharing Loop: Built native sharing utilities generating branded weekly summary graphics for LinkedIn, Twitter, and internal company channels.",
        ],
      },
      {
        id: "enterprise-integration",
        title: "03. Enterprise Integration & Delivery",
        content: [
          "SDGme feeds directly into Unify Licensee centralized dashboards for Environment, Social, and Governance (ESG) compliance, automatic collation, and divisional moderation.",
          "Deployed across iOS and Android for corporate licensee networks.",
        ],
      },
    ],
    screenshots: [
      {
        url: "/assets/projects/sdgme/0x0ss.png",
        caption: "Personal Action Tracker: Lifestyle Activity Logging across Work, Play, and Home",
        alt: "SDGme action tracking screen displaying quick-add buttons for Work, Play, and Home sustainability activities",
        category: "Action Tracking",
        shortLabel: "Action Logging",
        engineeringContext: "Cross-platform action logging module categorizing personal eco-actions across daily Work, Play, and Home lifestyle contexts.",
        technicalDetails: [
          "Categorized action cards with instant tap-to-log micro-interactions and haptic feedback",
          "Offline-first action buffer synchronizing with remote cloud database upon reconnection",
          "Habit analytics tracking progress across daily consumer touchpoints",
        ],
      },
      {
        url: "/assets/projects/sdgme/0x0ss (1).png",
        caption: "UN Sustainable Development Goals: Interactive 17-Goal Matrix",
        alt: "SDGme UN 17 Goals matrix displaying colorful official UN SDG icons for No Poverty, Climate Action, Affordable Energy, and Sustainable Cities",
        category: "UN SDG Matrix",
        shortLabel: "UN SDG Matrix",
        engineeringContext: "Official 17 United Nations Sustainable Development Goals interactive matrix visualizing personal contributions per goal.",
        technicalDetails: [
          "Responsive SVG grid rendering all 17 distinct UN SDG color tokens and badges",
          "Dynamic progress counters mapping logged consumer actions to specific UN SDG targets",
          "Accessible high-contrast touch targets with screen reader semantic labeling",
        ],
      },
      {
        url: "/assets/projects/sdgme/0x0ss (2).png",
        caption: "Activity Analytics: Carbon Savings Benchmarking against Group Averages",
        alt: "SDGme analytics screen with weekly activity comparison chart showing You vs Average Saver and CO2e kilograms saved",
        category: "Carbon Analytics",
        shortLabel: "Carbon Telemetry",
        engineeringContext: "Comparative carbon analytics visualizer displaying your accumulated CO2e reduction against average community benchmark curves.",
        technicalDetails: [
          "Dual line time-series comparison chart tracking personal versus community average savings",
          "Type-safe client-side CO2e reduction calculator converting actions to grams and kilograms",
          "Smooth spline curve interpolations optimized for native device 60fps rendering",
        ],
      },
      {
        url: "/assets/projects/sdgme/0x0ss (3).png",
        caption: "Verified Impact Summary: Social Achievement and Carbon Scorecard",
        alt: "SDGme weekly score card displaying actions taken, saved carbon in grams, and branded social share graphic",
        category: "Social Sharing",
        shortLabel: "Share Scorecard",
        engineeringContext: "Verified personal impact scorecard generating shareable graphics for LinkedIn, Twitter, and Instagram social advocacy.",
        technicalDetails: [
          "Offscreen React Native ViewShot canvas rendering high-resolution branded shareable images",
          "Native OS share sheet integration invoking iOS UIActivityViewController and Android Intent",
          "Unify corporate licensee integration preparing verified individual contributions for ESG reporting",
        ],
      },
    ],
  },
  {
    id: "acuity-coaching",
    slug: "acuity-coaching",
    title: "Acuity Coaching Web Application",
    subtitle: "Responsive React.js Frontend, Component Architecture & REST API Integration",
    category: "Web & Frontend Architecture",
    summary: "Engineered responsive client web application and dashboard modules for Acuity Coaching. Focused on modular component boundaries, clean REST API transformations, state management, and modern responsive design.",
    projectType: "employer",
    isProprietary: true,
    keyEngineeringDecisions: [
      "Structured domain-driven React component hierarchies with reusable UI primitives, isolating view rendering from data mutation layers.",
      "Integrated RESTful API endpoints with typed payload transformations to ensure runtime contract stability.",
      "Built responsive, accessible layouts using modern CSS utilities optimized across desktop, tablet, and mobile browsers.",
      "Implemented client-side form validation and error handling boundaries to ensure smooth user onboarding flows.",
    ],
    primaryStack: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "REST APIs"],
    fullStack: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "REST APIs",
      "Git",
      "GitHub",
    ],
    role: "Frontend Developer",
    company: "Cloud Energy Software",
    period: "2023 – Present",
    featured: true,
    technicalHighlight: {
      label: "MODULAR COMPONENT PATTERN & API ADAPTERS",
      description: "Built modular React frontend architecture decoupling layout components from backend schema requirements through standardized data adapter hooks.",
      codeSnippet: {
        filename: "coachingClient.ts",
        language: "typescript",
        code: `export interface CoachingSession {
  id: string;
  clientName: string;
  scheduledAt: string;
  status: 'confirmed' | 'pending' | 'completed';
}

export function formatSessionSummary(session: CoachingSession): string {
  const date = new Date(session.scheduledAt).toLocaleDateString();
  return \`\${session.clientName}: \${date} (\${session.status})\`;
}`,
      },
    },
    overview: "Acuity Coaching is a responsive client-facing web application delivering interactive coaching dashboards, session tracking, and user management workflows.",
    challenges: [
      "Frontend Component Modularity: Constructing reusable, highly maintainable UI modules that cleanly separate visual display from asynchronous data fetching.",
      "Multi-Device Responsiveness: Ensuring seamless usability across varying browser viewports from desktop displays down to mobile screens.",
    ],
    technicalApproach: [
      "Modular UI Hierarchy: Decomposed interfaces into clean presentation components and custom data-fetching hooks.",
      "Responsive Design: Applied responsive utility styling to ensure accessible and fluid layout scaling.",
    ],
    outcome: [
      "Delivered robust, production-ready React web frontend for client coaching operations.",
      "Established clean component patterns and predictable state flow across core workflows.",
    ],
    sections: [
      {
        id: "architecture-overview",
        title: "01. Architecture Overview",
        content: [
          "Acuity Coaching web platform was built to provide an intuitive, responsive frontend for coaching management and client interactions.",
          "The architecture emphasizes clean component separation, reusable design system tokens, and typed API client integration.",
        ],
      },
      {
        id: "engineering-decisions",
        title: "02. Key Engineering Decisions",
        content: [
          "1. Domain-Driven Components: Divided UI layers into pure presentational components and container hooks to keep code testable and maintainable.",
          "2. API Layer Isolation: Encapsulated backend HTTP requests within centralized API service modules to buffer UI views against schema shifts.",
          "3. Adaptive Layouts: Engineered responsive views supporting desktop workspaces and mobile browsing without layout degradation.",
        ],
      },
      {
        id: "results",
        title: "03. Results & Delivery Status",
        content: [
          "Shipped modular, responsive React frontend integrated with live backend services.",
          "Architecture discussed in technical interviews under standard employer confidentiality practices.",
        ],
      },
    ],
  },
  {
    id: "saloon-app",
    slug: "saloon-app",
    title: "Zenyme: Salon Management & Luxury Booking Platform",
    subtitle: "Next.js 15, React 19, TypeScript, Zustand Persistent Store & Anti-Collision Scheduling Matrix",
    category: "Full-Stack Web & Scheduling Architecture",
    summary: "Full-stack luxury salon management and appointment booking platform deployed on Vercel. Features Interactive Role Demo switcher (Salon Owner, Freelancer Workspace, Client Booking App), anti-collision scheduling matrix preventing double-bookings, automated stylist commission (70%–80%) & booth rent tracking, dynamic 4-stage booking wizard with 1-tap WhatsApp concierge, and offline-persistent state management via Zustand.",
    projectType: "personal",
    isProprietary: false,
    githubRepoUrl: "https://github.com/yogendraCes/SaloonApp",
    liveDemoUrl: "https://saloon-app-teal.vercel.app/",
    ciBadgeUrl: "https://github.com/yogendraCes/SaloonApp/actions",
    keyEngineeringDecisions: [
      "Engineered multi-role state segregation using Zustand with local storage persistence ('zenyme-storage'), seamlessly coordinating Admin, Freelancer, and Client views.",
      "Designed 4-stage booking workflow (/book) with real-time anti-collision scheduling matrix algorithm ('hasConflict') eliminating double-bookings across master stylists.",
      "Implemented interactive Role Switcher bar ('RoleSwitcherBar') allowing instant workspace swapping between Salon Owner Admin, Freelancer Portal, and Client Booking App.",
      "Built automated stylist compensation engine calculating variable commissions (65%–80%), daily chair rent deductions, and 100% client tip pass-through into instant net payouts.",
      "Engineered custom warm luxury design system in Tailwind CSS (warm charcoal #1C1A17, artisan taupe #A49A87, sage #A5A58D, stone #968F83) with mobile-first sticky CTA ergonomics.",
    ],
    primaryStack: ["Next.js 15", "TypeScript", "React 19", "Zustand", "Tailwind CSS"],
    fullStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Lucide React",
      "Vercel",
      "ESLint",
      "Git / GitHub",
    ],
    role: "Full-Stack Engineer & Creator",
    company: "Open Source / Live Production Platform",
    period: "August 2024 – Present",
    featured: true,
    screenshots: [
      {
        url: "/assets/projects/zenyme/zenyme-home.png",
        caption: "Zenyme Luxury Salon Storefront & Online Booking",
        alt: "Zenyme luxury salon web interface with online booking entry and curated styling lookbook",
        category: "Next.js Web Storefront",
        shortLabel: "Luxury Storefront",
        engineeringContext: "Responsive warm luxury aesthetic built with Next.js 15 App Router, React 19, and Tailwind CSS. Features curated warm charcoal (#1C1A17), artisan taupe (#A49A87), and sage (#A5A58D) palette, verified 4.9★ Google rating proof (520+ reviews in Indiranagar), and Kerastase ritual consultations.",
        technicalDetails: [
          "Engineered with Next.js 15 App Router, React 19, and Tailwind CSS with custom warm luxury palette.",
          "SSR layout with instant client hydration and responsive viewport scaling from mobile to ultra-wide displays.",
          "Direct integration points with the multi-step booking funnel and WhatsApp concierge messaging (+91 98765 43210).",
        ],
      },
      {
        url: "/assets/projects/zenyme/zenyme-book.png",
        caption: "4-Stage Anti-Collision Booking Funnel (/book)",
        alt: "Zenyme dynamic 4-step appointment booking wizard with service selection, master stylist picker, and time slots",
        category: "Web Booking Funnel",
        shortLabel: "Booking Engine",
        engineeringContext: "Interactive 4-stage booking flow (Service, Stylist, Date/Time, Details) with real-time duration, dynamic pricing calculation, and slot conflict mitigation.",
        technicalDetails: [
          "Anti-collision scheduling algorithm ('hasConflict') checking time window overlaps to prevent double-bookings.",
          "Dynamic catalog pricing: Signature Haircut (₹600), Balayage (₹3,200), Beard Sculpt (₹350), Gold Glow Facial (₹1,500), Aromatherapy (₹1,800).",
          "Client-side state persistence preventing data loss during multi-step navigation with 1-tap WhatsApp confirmation link.",
        ],
      },
      {
        url: "/assets/projects/zenyme/zenyme-dashboard.png",
        caption: "Salon Management & Admin Analytics Portal (/dashboard)",
        alt: "Zenyme admin dashboard with total customers, appointments today, daily revenue, and customer appointment statuses",
        category: "Admin Dashboard",
        shortLabel: "Admin Portal",
        engineeringContext: "Comprehensive administrative workspace featuring top Interactive Role Switcher bar, live operational metrics, revenue tracking, and scheduled customer appointments.",
        technicalDetails: [
          "Aggregated operational metrics tracking Total Customers (4), Appointments Today (4), Revenue Today (₹950), and Month-over-Month Growth (+24.5%).",
          "Real-time appointment schedule feed with instantaneous status badges ('completed', 'scheduled').",
          "Interactive Role Demo bar ('RoleSwitcherBar') with instant toggling between Salon Owner, Freelancer Workspace, and Client Booking App.",
        ],
      },
      {
        url: "/assets/projects/zenyme/zenyme-freelancer.png",
        caption: "Freelancer Workspace & Commission Calculator (/freelancer)",
        alt: "Zenyme freelancer portal featuring stylist commission split, booth rent deductions, take-home pay calculator, and QR booking link",
        category: "Freelancer Portal",
        shortLabel: "Earnings Calculator",
        engineeringContext: "Dedicated portal for independent booth-renters and freelance stylists (e.g. Aisha Khan 70% commission, ₹300 booth rent) with real-time payout calculations, QR code generator, and direct booking links.",
        technicalDetails: [
          "Automated take-home pay calculator computing Gross Revenue (₹600), Stylist Share (70% = ₹420), 100% Client Tips (+₹100), and Daily Booth Rent (-₹300) resulting in Net Take-Home Pay (₹220).",
          "Direct Stylist Booking Link generation with 1-click clipboard copy and scannable QR code generator for Instagram and WhatsApp.",
          "Weekly availability schedule toggle (Mon–Sun) and assigned client appointment management.",
        ],
      },
      {
        url: "/assets/projects/zenyme/zenyme-mobile-hero.png",
        caption: "Responsive Mobile Web Storefront (iOS & Android)",
        alt: "Zenyme responsive mobile web view with floating booking bar and compact navigation",
        category: "Responsive Mobile Web",
        shortLabel: "Mobile Web",
        engineeringContext: "Mobile-first responsive viewport engineering with sticky bottom booking bar, optimized header layout, and fluid typography across compact touch screens.",
        technicalDetails: [
          "Optimized mobile header layout and top announcement ribbon with zero horizontal overflow.",
          "Touch-friendly sticky bottom appointment booking bar ('Book Slot →') for frictionless mobile conversion.",
          "Pre-rendered responsive layouts with zero layout shift on iOS Safari and Android Chrome viewports.",
        ],
      },
    ],
    technicalHighlight: {
      label: "ANTI-COLLISION SCHEDULING MATRIX & PERSISTENT STORE",
      description: "Deterministic time-window overlap collision algorithm preventing double-bookings alongside typed Zustand store with automatic 'zenyme-storage' browser synchronization.",
      codeSnippet: {
        filename: "useStore.ts",
        language: "typescript",
        code: `/** Convert HH:MM string to total minutes from midnight */
function toMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number);
  return h * 60 + m;
}

/** Returns true if two time windows overlap */
function hasConflict(startA: string, durA: number, startB: string, durB: number): boolean {
  const a1 = toMinutes(startA);
  const a2 = a1 + durA;
  const b1 = toMinutes(startB);
  const b2 = b1 + durB;
  return a1 < b2 && b1 < a2;
}

// In Zustand store mutation:
addAppointment: (app) => {
  const { appointments, services } = get();
  const newService = services.find((s) => s.id === app.serviceId);
  const newDuration = newService?.duration ?? 30;

  const conflict = appointments.some((existing) => {
    if (existing.staffId !== app.staffId) return false;
    if (existing.date !== app.date) return false;
    if (existing.status === 'cancelled') return false;
    const existingService = services.find((s) => s.id === existing.serviceId);
    const existingDuration = existingService?.duration ?? 30;
    return hasConflict(app.startTime, newDuration, existing.startTime, existingDuration);
  });

  if (conflict) return false;
  set((state) => ({ appointments: [...state.appointments, app] }));
  return true;
};`,
      },
    },
    overview: "Zenyme is a full-stack luxury salon management and appointment booking platform engineered with Next.js 15 and TypeScript, deployed live on Vercel. Designed for upscale salons, barbershops, and independent freelance stylists, it combines an upscale consumer storefront with an interactive multi-role administrative workspace, anti-collision booking engine, and automated financial calculation system.",
    challenges: [
      "Multi-Role Interface Partitioning: Handling separate administrative, booth-renter freelancer, and consumer booking views from a unified state store without leaking role permissions.",
      "Anti-Collision Scheduling Matrix: Calculating real-time stylist availability, service duration offsets, and overlapping booking prevention across multiple specialists.",
      "Freelancer Financial Logic: Modeling complex real-world salon compensation combining variable commission splits (65%–80%), daily chair rental fees, and direct client tips into instant net payout calculations.",
    ],
    technicalApproach: [
      "Zustand Persistent Store: Implemented modular state slices with selective persistence ('zenyme-storage') to ensure offline appointment resilience and zero-latency role toggling between Salon Owner, Freelancer, and Client.",
      "Anti-Collision Booking Funnel: Deconstructed appointment reservations into isolated stages (service pick, stylist selection, time-slot reservation, customer confirmation) with instant price, duration, and conflict validation.",
      "Interactive Multi-Role Switcher: Pinned top-bar simulation toggle enabling portfolio reviewers and evaluators to test all three user personas seamlessly.",
      "Production Vercel Deployment: Deployed on Vercel with automated continuous delivery, responsive layout engineering from mobile devices to desktop displays, and strict TypeScript interfaces.",
    ],
    outcome: [
      "Live production deployment on Vercel (saloon-app-teal.vercel.app) and open-source GitHub repository (yogendraCes/SaloonApp).",
      "Delivered end-to-end appointment scheduling, conflict mitigation, commission tracking, QR code stylist sharing, and warm luxury aesthetics.",
    ],
    sections: [
      {
        id: "product-scope",
        title: "01. Product Scope & Architecture",
        content: [
          "Zenyme was created as a modern web solution for upscale salon owners and independent stylists to streamline appointment scheduling, transparent service pricing, and booth rent tracking.",
          "The platform is deployed live on Vercel at saloon-app-teal.vercel.app and the codebase is fully open-source on GitHub, serving as a clean reference architecture for Next.js 15 App Router, React 19, TypeScript, and Zustand state modeling.",
        ],
      },
      {
        id: "architectural-decisions",
        title: "02. Key Architectural Decisions",
        content: [
          "1. Role-Based State Modeling: Segregated permissions across Admin, Freelancer, and Client roles within a unified store, allowing instantaneous role switching for previewing and operational workflows.",
          "2. Anti-Collision Scheduling Engine: Built deterministic calculation helpers computing time-window overlaps to prevent double-booking across stylists in real time.",
          "3. Financial Commission Engine: Built deterministic calculation helpers computing stylist net earnings based on variable commission tiers and fixed daily chair rental fees.",
          "4. Modular Booking Funnel: Deconstructed appointment flows into isolated step components, maintaining clean form state and validation via React Hook Form and date-fns.",
        ],
        codeSnippet: {
          filename: "useStore.ts",
          language: "typescript",
          code: `export const useStore = create<State>()(
  persist(
    (set, get) => ({
      activeRole: 'admin',
      activeStaffId: 's1',
      staff: initialStaff,
      services: initialServices,
      appointments: initialAppointments,
      setActiveRole: (role) => set({ activeRole: role }),
      setActiveStaffId: (staffId) => set({ activeStaffId: staffId }),
      addAppointment: (appointment) => {
        // Anti-collision conflict validation ...
        set((state) => ({ appointments: [...state.appointments, appointment] }));
        return true;
      },
    }),
    { name: 'zenyme-storage' }
  )
);`,
        },
      },
      {
        id: "public-code",
        title: "03. Live Platform & Open-Source Code",
        content: [
          "The live application is deployed on Vercel at saloon-app-teal.vercel.app, and complete source code is publicly accessible on GitHub under yogendraCes/SaloonApp.",
          "Demonstrates modern React 19 / Next.js 15 project conventions, strict TypeScript interfaces, and zero-runtime-error state flow.",
        ],
      },
    ],
    links: {
      demo: "https://saloon-app-teal.vercel.app/",
      github: "https://github.com/yogendraCes/SaloonApp",
    },
  },
  {
    id: "vhp-linear-motions",
    slug: "vhp-linear-motions",
    title: "VHP Linear Motions: Config-Driven Enterprise Web Engine",
    subtitle: "Next.js 16 (App Router), TypeScript, Tailwind CSS v4 & 100% White-Label Config Architecture",
    category: "Full-Stack Web Engine & White-Label Architecture",
    summary: "High-performance, 100% config-driven white-label industrial web platform. Engineered as an exact 1:1 pixel-accurate clone of VHP Linear Motions across 14 production routes with single-source-of-truth configuration (siteConfig.ts), sub-second LCP, sub-10-minute rebrand capability, and zero layout shift.",
    projectType: "personal",
    isProprietary: false,
    githubRepoUrl: "https://github.com/yogendraCes/vhp-linear-motions",
    liveDemoUrl: "https://saloon-app-wxmd.vercel.app",
    ciBadgeUrl: "https://github.com/yogendraCes/vhp-linear-motions/actions",
    keyEngineeringDecisions: [
      "Engineered single-source-of-truth configuration architecture (siteConfig.ts) driving 14 dynamic routes, product catalogs, brand identity tokens, and contact endpoints without hardcoded JSX.",
      "Utilized Next.js 16 (App Router) Server Components for pre-rendered static page generation (SSG), achieving sub-second LCP and 100% SEO indexability.",
      "Implemented strict brand styling system with Tailwind CSS v4 and dynamic CSS variables, enabling white-label rebranding for B2B distributors in under 10 minutes.",
      "Built multi-agent architecture blueprint allowing decoupled subagents to execute design tokens, product specification matrices, and route components in parallel.",
    ],
    primaryStack: ["Next.js 16", "TypeScript", "React 19", "Tailwind CSS v4", "White-Label Config"],
    fullStack: [
      "Next.js 16 (App Router)",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Lucide React",
      "Node.js",
      "Vercel",
      "Git",
      "GitHub",
    ],
    role: "Creator & Lead Engineer",
    company: "Independent / Open Source Development",
    period: "2026",
    featured: true,
    technicalHighlight: {
      label: "CONFIG-DRIVEN WHITE-LABEL ARCHITECTURE",
      description: "Built a 100% config-driven web engine (`src/config/siteConfig.ts`) driving 14 production subpages, master product matrices, brand color tokens, and contact channels without manual code changes.",
      codeSnippet: {
        filename: "src/config/siteConfig.ts",
        language: "typescript",
        code: `export const siteConfig = {
  company: {
    name: "VHP Linear Motions",
    tagline: "Authorized Distributor & Dealer of LIMON & SOTER Linear Motion Systems",
    establishedYear: 2021,
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
  },
  theme: {
    primaryNavy: "#17315c",
    accentOrange: "#ff7f00",
    bannerGold: "#fda128",
  },
  products: [
    { slug: "linear-guideways", title: "Linear Guideways", modelsCount: 6 },
    { slug: "ball-screw", title: "Ball Screws", modelsCount: 7 },
    { slug: "linear-axis", title: "Linear Axis Modules", modelsCount: 6 },
    { slug: "hollow-rotary-actuator", title: "Hollow Rotary Actuators", modelsCount: 4 },
  ],
};`,
      },
    },
    overview: "VHP Linear Motions is a Next.js 16 industrial web application built as an exact 1:1 pixel-accurate clone and modernized engine for VHP Linear Motions (Ahmedabad, Gujarat), an authorized distributor of LIMON and SOTER linear motion systems in India. The platform replaces bloated legacy WordPress/Elementor setups with an ultra-fast TypeScript engine capable of being cloned and rebranded for any B2B manufacturer or distributor in under 10 minutes.",
    challenges: [
      "White-Label Reusability: Designing a 100% config-driven architecture where all brand identity, catalog hierarchies, assets, and contact endpoints are managed via a single TypeScript configuration file.",
      "High-Density Industrial Catalog: Structuring 14 production subpages and 39 application matrix grids with responsive tables, model specifications, and technical download links.",
      "Performance Optimization: Eliminating legacy WordPress Elementor CSS/JS bloat to achieve sub-second LCP, zero CLS, and instant page transitions.",
    ],
    technicalApproach: [
      "Single Source of Truth Config (siteConfig.ts): Decoupled all layout, branding, product matrix, and contact data into a centralized configuration file, eliminating hardcoded copy and permitting 10-minute rebrand deployment.",
      "Next.js 16 App Router & Server Components: Utilized Next.js 16 server components for pre-rendered static page generation (SSG) across all 14 routes, delivering instantaneous load times and 100% SEO indexability.",
      "Tailwind CSS v4 Design Tokens: Implemented strict brand tokens (primaryNavy: #17315c, accentOrange: #ff7f00) with responsive component primitives and accessible mobile navigation.",
    ],
    outcome: [
      "Pushed open-source GitHub repository (yogendraCes/vhp-linear-motions) and live Vercel deployment (saloon-app-wxmd.vercel.app).",
      "Delivered 100% config-driven architecture supporting 14 production routes, 39 machine application grids, and zero-runtime-error TypeScript execution.",
    ],
    sections: [
      {
        id: "product-scope",
        title: "01. Product Scope & Architecture",
        content: [
          "VHP Linear Motions platform was engineered to solve a common B2B industrial web problem: legacy WordPress and Elementor sites suffer from heavy CSS/JS bloat, slow page loads, and rigid codebases.",
          "This Next.js 16 engine provides a pixel-accurate clone of an industrial motion distributor site while establishing a 100% white-label config system where all branding, product catalogs, and corporate info are driven by a single TypeScript file.",
        ],
      },
      {
        id: "architectural-decisions",
        title: "02. Key Architectural Decisions",
        content: [
          "1. Single-Source-of-Truth Config Schema: All company metadata, product specifications, navigation links, and theme colors are defined in src/config/siteConfig.ts, allowing complete re-skinning in under 10 minutes.",
          "2. Next.js 16 Server Component Pre-Rendering: All 14 routes (Home, About, 8 Product Category pages, 39 Application grids, Certificate, and Contact) are static server components generating pure HTML/CSS at build time.",
          "3. High-Density Product Matrix: Engineered modular grid templates to display multi-series specifications for linear guideways, ball screws, hollow rotary actuators, rack & pinion systems, and motion controllers.",
        ],
        codeSnippet: {
          filename: "src/config/siteConfig.ts",
          language: "typescript",
          code: `export const siteConfig = {
  company: {
    name: "VHP Linear Motions",
    tagline: "Authorized Distributor & Dealer of LIMON & SOTER Linear Motion Systems",
    establishedYear: 2021,
    city: "Ahmedabad",
    state: "Gujarat",
    country: "India",
  },
  theme: {
    primaryNavy: "#17315c",
    accentOrange: "#ff7f00",
    bannerGold: "#fda128",
  },
  products: [
    { slug: "linear-guideways", title: "Linear Guideways", modelsCount: 6 },
    { slug: "ball-screw", title: "Ball Screws", modelsCount: 7 },
    { slug: "linear-axis", title: "Linear Axis Modules", modelsCount: 6 },
    { slug: "hollow-rotary-actuator", title: "Hollow Rotary Actuators", modelsCount: 4 },
  ],
};`,
        },
      },
      {
        id: "public-code",
        title: "03. Live Engine & Open-Source Code",
        content: [
          "The complete open-source codebase is published on GitHub under yogendraCes/vhp-linear-motions.",
          "Serves as an exemplar white-label B2B web architecture demonstrating Next.js 16 App Router conventions, clean TypeScript interfaces, and zero-runtime-overhead static performance.",
        ],
      },
    ],
    screenshots: [
      {
        url: "/assets/projects/vhp-linear-motions/vhp-home-hero.png",
        caption: "Enterprise Storefront & Hero Motion Engine (/)",
        alt: "VHP Linear Motions enterprise hero interface featuring precision linear guideways, Limon distributor branding, and dynamic CTAs",
        category: "Enterprise Web Engine",
        shortLabel: "Hero Engine",
        engineeringContext: "High-impact hero slider pre-rendered via Next.js 16 App Router and Tailwind CSS v4, delivering sub-second LCP with zero layout shift and 100% white-label single-source-of-truth configuration.",
        technicalDetails: [
          "Next.js 16 Server Component pre-rendering delivering instant First Contentful Paint (<0.8s) and zero runtime hydration overhead.",
          "Dynamic brand styling tokens driving typography, primary navy (#17315c), and industrial accent orange (#ff7f00).",
          "Fluid responsive layout scaling smoothly across mobile viewports to ultra-wide 4K industrial workstations.",
        ],
      },
      {
        url: "/assets/projects/vhp-linear-motions/vhp-products-catalog.png",
        caption: "Industrial Products Catalog & Matrix (/products)",
        alt: "VHP Linear Motions high precision product catalog showing linear guideways, ball screws, rotary actuators, and racks",
        category: "Product Matrix Catalog",
        shortLabel: "Products Matrix",
        engineeringContext: "Standardized multi-category product catalog driven by siteConfig.ts, rendering 8 industrial machinery component categories with technical specifications and direct series routing.",
        technicalDetails: [
          "Pre-compiled static route generation across 8 distinct industrial product categories with model parameter mapping.",
          "High-density responsive product cards with hover micro-interactions, category thumbnails, and technical spec badges.",
          "Zero-runtime CSS overhead leveraging Tailwind CSS v4's modern engine.",
        ],
      },
      {
        url: "/assets/projects/vhp-linear-motions/vhp-rotary-actuators.png",
        caption: "Hollow Rotary Actuator & Multi-Axis Stages (/products/hollow-rotary-actuator)",
        alt: "LIMON hollow rotary actuator DY series technical specifications, torque ratings, and mechanical CAD parameters",
        category: "Actuator Engineering",
        shortLabel: "Rotary Actuators",
        engineeringContext: "Dedicated technical engineering showcase for hollow rotary actuators (DY60, DY85, DY130, DY200) with direct-drive apertures and rigorous mechanical specifications.",
        technicalDetails: [
          "Exhaustive engineering parameter table displaying repetitive positioning accuracy (±15 arc-sec), backlash (≤1 arc-min), and axial load ratings up to 4,000 N.",
          "Integrated CAD step file and 3D model download call-to-actions for machine designers and automation engineers.",
          "Decoupled series data architecture allowing seamless model additions without modifying presentation JSX.",
        ],
      },
      {
        url: "/assets/projects/vhp-linear-motions/vhp-limon-certificate.png",
        caption: "Authorized Distributor & Quality Verification (/certificate)",
        alt: "Official LIMON authorized distributor certificate and company credentials awarded to VHP Linear Motions",
        category: "Distributor Verification",
        shortLabel: "Distributor Certificate",
        engineeringContext: "Official distributor credentialing portal providing verified B2B provenance, ISO 9001 compliance records, and factory authorization certificates.",
        technicalDetails: [
          "Full-resolution digital asset viewer with zoomable lightbox and verified watermark verification.",
          "Static generation ensuring instantaneous page load when inspecting compliance documentation and manufacturer agreements.",
          "Responsive presentation container adapting vertical high-resolution legal certificate assets.",
        ],
      },
      {
        url: "/assets/projects/vhp-linear-motions/vhp-applications-grid.png",
        caption: "39 Heavy Industry Machine Applications (/applications)",
        alt: "39 machine applications grid covering CNC machine tools, fiber laser cutting, industrial robotics, and aerospace",
        category: "Industrial Applications",
        shortLabel: "Applications Grid",
        engineeringContext: "High-density 39-sector machine application index connecting linear motion components to specific CNC, aerospace, robotics, and automated warehousing machinery.",
        technicalDetails: [
          "Virtualized responsive grid rendering 39 industrial sector application cards with zero layout thrashing.",
          "Single-source-of-truth metadata mapping machine sectors to recommended linear guide and ball screw model families.",
          "Structured schema.org semantic metadata for search engine indexing across B2B industrial queries.",
        ],
      },
      {
        url: "/assets/projects/vhp-linear-motions/vhp-ball-screws.png",
        caption: "Precision Ground & Rolled Ball Screws (/products/ball-screw)",
        alt: "LIMON ball screw series SFNU, SFY, SFS, and BK/BF fixed and floating bearing support blocks",
        category: "Transmission Systems",
        shortLabel: "Ball Screws & Supports",
        engineeringContext: "Mechanical transmission subsystem catalog displaying rotational-to-linear motion components with helical groove specifications and bearing support units.",
        technicalDetails: [
          "Multi-series catalog layout covering SFNU (DIN flanged), SFY (high-speed lead), SFS (silent circulation), and BK/BF support blocks.",
          "Precision grade selectors displaying C3, C5, and C7 ground vs rolled tolerances.",
          "Direct request-for-quote funnel routing customer inquiries with pre-selected model configurations.",
        ],
      },
    ],
    links: {
      demo: "https://saloon-app-wxmd.vercel.app",
      github: "https://github.com/yogendraCes/vhp-linear-motions",
    },
  },
];

