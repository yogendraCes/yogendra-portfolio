import { Experience } from "@/types";

export const experienceData: Experience[] = [
  {
    id: "ces-senior-rn",
    role: "Senior React Native Developer",
    company: "Cloud Energy Software (CES)",
    period: "Feb 2023 – Present",
    location: "Indore, India (Full-time | Remote/Hybrid)",
    scope: "Sole mobile engineering owner for CES consumer and enterprise mobile applications across iOS and Android.",
    type: "Full-time",
    responsibilities: [
      "Led the complete technical evolution and maintenance of the mobile platform from Puredrive Energy to the Duracell-licensed consumer energy application.",
      "Re-architected legacy Redux state implementations to Redux Toolkit and RTK Query, establishing predictable state caching and reducing unnecessary component re-renders.",
      "Engineered real-time energy dashboards consuming telemetry updates on a 10-second polling cadence, optimizing state flow and applying strict memoization to maintain 60fps UI responsiveness.",
      "Replaced third-party charting libraries (Victory Native) with custom D3.js path generators rendered via React Native SVG, delivering touch-inspected graphs with custom tooltips.",
      "Designed and integrated power flow visual nodes illustrating real-time energy movement between Solar arrays, Home Storage Batteries, EV Chargers, Household Loads, and the Power Grid.",
      "Implemented lifecycle-aware listeners using React Native AppState to pause telemetry polling and UI animations when applications enter background states, preserving device battery.",
      "Handled platform-specific native behaviors across iOS and Android, including gesture resolution, system alert styling, font rendering, and performance tuning for lower-spec Android devices.",
      "Managed end-to-end store release operations, hotfix deployments, and crash triage for production releases on the Apple App Store and Google Play Store.",
      "Collaborated directly with client stakeholders and product leads to guide technical feasibility and UX decisions, while assisting embedded developers on parallel mobile initiatives.",
    ],
  },
  {
    id: "forebear-rn",
    role: "React Native Developer",
    company: "Forebear Productions (Contract to Cloud Energy Software)",
    period: "Mar 2020 – Jan 2023",
    location: "Indore, India (Dedicated Contract: Apr 2021 – Jan 2023)",
    scope: "Embedded React Native engineer building core mobile features prior to direct full-time acquisition.",
    type: "Contract",
    responsibilities: [
      "Delivered early-stage cross-platform mobile features for Puredrive Energy applications on iOS and Android.",
      "Built QR-code hardware onboarding flows, multi-user role authentication, and animated power flow indicators.",
      "Created reusable UI component libraries and standardized API request handlers across mobile modules.",
      "Stabilized core mobile features and reduced crash rates, leading to direct full-time acquisition by Cloud Energy Software.",
    ],
  },
];
