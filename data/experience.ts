import { Experience } from "@/types";

export const experienceData: Experience[] = [
  {
    id: "ces-software-developer",
    role: "Software Developer / Senior React Native Developer",
    company: "Cloud Energy Software",
    subLabel: "Permanent Direct Employee",
    period: "February 18, 2023 – Present",
    location: "Mumbai, India (Remote)",
    scope: "Permanent direct employee leading end-to-end architecture, high-performance UI systems, and mobile release engineering.",
    type: "Full-time",
    isCurrent: true,
    responsibilities: [
      "Owned end-to-end architecture and production delivery of flagship energy monitoring applications (Duracell Energy).",
      "Built custom D3.js + SVG-based charting system, replacing third-party libraries to eliminate heavy canvas redraw overhead and achieve smooth time-series rendering.",
      "Mentored 5 junior developers, establishing code quality standards and enabling full production readiness within ~6 months.",
      "Conducted technical code reviews and led CI/CD build automation with Fastlane across iOS and Android release channels.",
      "Solved complex data synchronization issues across real-time state updates, telemetry feeds, and interactive node network diagrams.",
    ],
  },
  {
    id: "forebear-productions-tenure",
    role: "React Native Developer",
    company: "Forebear Productions",
    subLabel: "Direct Employee & CES Contract Staffing",
    period: "March 2020 – February 18, 2023",
    location: "Indore, India / Remote",
    scope: "3-year engineering tenure at Forebear Productions progressing from direct mobile app development to full-time client contract staffing at Cloud Energy Software prior to permanent conversion.",
    type: "Full-time & Contract",
    isCurrent: false,
    phases: [
      {
        id: "forebear-ces-contract-phase",
        title: "Contract Staffing — Cloud Energy Software (CES)",
        period: "April 2021 – February 18, 2023",
        badge: "Contracted to Cloud Energy Software",
        scope: "Staffed full-time on contract to Cloud Energy Software as primary mobile developer working directly on client energy products.",
        responsibilities: [
          "Staffed full-time on contract to Cloud Energy Software, leading mobile development for client energy management applications (Puredrive, Stain Care Pro).",
          "Optimized real-time dashboards handling high-frequency telemetry updates (10-second polling intervals) by isolating primitive state selectors to prevent parent re-renders [TODO: Insert measured re-render reduction % if tracked].",
          "Improved rendering performance by reducing unnecessary component re-renders through strict memoization and component tree optimizations.",
          "Integrated complex REST APIs and handled asynchronous multi-source data streams efficiently across iOS and Android builds.",
        ],
      },
      {
        id: "forebear-direct-phase",
        title: "Initial Development — Direct Employee",
        period: "March 2020 – April 2021",
        badge: "Direct Employee",
        scope: "Direct employee role building foundational cross-platform mobile application features.",
        responsibilities: [
          "Built foundational expertise in React Native, developing cross-platform mobile features from initial commit to production deployment.",
          "Developed responsive UI components, dynamic navigation flows, and REST API integrations across Android and iOS devices.",
        ],
      },
    ],
  },
];
