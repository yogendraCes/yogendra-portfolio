import { Experience } from "@/types";

export const experienceData: Experience[] = [
  {
    id: "ces-software-developer",
    role: "Software Developer / Senior React Native Developer",
    company: "Cloud Energy Software",
    subLabel: "Converted to Permanent Direct Employee",
    period: "February 18, 2023 – Present",
    location: "Mumbai, India (Remote)",
    scope: "Permanent direct employee leading end-to-end architecture, high-performance UI systems, and mobile release engineering.",
    type: "Full-time",
    responsibilities: [
      "Owned end-to-end architecture and production delivery of flagship energy monitoring applications (Duracell Energy).",
      "Built custom D3.js + SVG-based charting system, replacing third-party libraries for enhanced layout flexibility and 60fps rendering.",
      "Mentored 5 junior developers, establishing code quality standards and enabling full production readiness within ~6 months.",
      "Conducted technical code reviews and led CI/CD build automation with Fastlane across iOS and Android release channels.",
      "Solved complex data synchronization issues across real-time state updates, telemetry feeds, and interactive node network diagrams.",
    ],
  },
  {
    id: "forebear-ces-contract",
    role: "React Native Developer",
    company: "Forebear Productions",
    subLabel: "Contracted to Cloud Energy Software (CES)",
    period: "April 2021 – February 18, 2023",
    location: "Indore, India / Remote",
    scope: "Staffed full-time on contract to Cloud Energy Software (CES) as primary mobile developer working directly on client mobile products.",
    type: "Contract",
    responsibilities: [
      "Staffed full-time on contract to Cloud Energy Software, leading mobile development for client energy management applications (Puredrive, Stain Care Pro).",
      "Optimized real-time dashboards handling high-frequency telemetry updates (10-second polling intervals) with minimal UI thread lag.",
      "Improved rendering performance by reducing unnecessary component re-renders through strict memoization and optimized component trees.",
      "Reduced production issues and improved application stability through enhanced diagnostic logging, error boundaries, and systematic debugging.",
      "Integrated complex REST APIs and handled asynchronous multi-source data streams efficiently across iOS and Android builds.",
    ],
  },
  {
    id: "forebear-rn-developer",
    role: "React Native Developer",
    company: "Forebear Productions",
    subLabel: "Direct Employer",
    period: "March 2020 – April 2021",
    location: "Indore, India",
    scope: "Direct employee role at Forebear Productions building cross-platform mobile application features prior to client staffing.",
    type: "Full-time",
    responsibilities: [
      "Built foundational expertise in React Native, developing cross-platform mobile application features from initial commit to production deployment.",
      "Developed responsive, accessible UI components with optimized screen layouts, dynamic navigation flows, and fluid micro-animations.",
      "Integrated REST APIs and engineered reliable asynchronous data handlers for core mobile client applications.",
      "Identified and fixed mobile application performance bottlenecks and UI rendering bugs across Android and iOS devices.",
      "Collaborated with cross-functional design and backend teams to ship reliable, user-friendly mobile features.",
    ],
  },
];




