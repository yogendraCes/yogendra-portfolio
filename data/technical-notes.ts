export interface TechnicalNote {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  tags: string[];
  takeaway: string;
  paragraphs: string[];
  bulletPoints?: string[];
}

export const technicalNotesData: TechnicalNote[] = [
  {
    id: "telemetry-re-renders",
    slug: "telemetry-re-renders",
    title: "How I Reduced Re-Renders During 10-Second Telemetry Polling",
    subtitle: "Preserving 60fps UI responsiveness in a production energy app handling continuous multi-node power streams.",
    date: "August 2024",
    readTime: "4 min read",
    tags: ["React Native", "Performance Optimization", "State Architecture", "Threading"],
    takeaway: "Decoupling data ingestion from visual render trees and subscribing strictly to primitive leaf selectors keeps 95% of the UI tree static during continuous real-time data polling.",
    paragraphs: [
      "In mobile energy applications like Duracell Energy, hardware gateways transmit live telemetry payloads every 10 seconds. Each payload contains updated numerical values for solar generation, battery storage percentages, household load, and grid import/export tariffs.",
      "The naive approach—storing the entire API response in a single root state object and passing it down via context or props—creates severe performance degradation. Every 10-second tick causes the entire dashboard subtree to reconcile and re-render. On lower-tier Android hardware, this JS thread congestion leads to noticeable micro-stutters, dropped animation frames, and sluggish tab navigation.",
      "To resolve this, I re-architected the state ingestion layer around three strict boundaries:",
    ],
    bulletPoints: [
      "Normalized Ingestion: Incoming payloads are split into isolated scalar properties in memory rather than nested objects.",
      "Primitive Leaf Selectors: UI badges and metric nodes subscribe only to exact numeric values (e.g., solarKw) rather than parent containers. When only solar generation fluctuates, only that single text element updates.",
      "UI-Thread Animation Isolation: Directional particle flow animations were decoupled entirely from React state and migrated to native C++ worklets via Reanimated v3, allowing continuous smooth 60fps animations regardless of JavaScript polling ticks.",
    ],
  },
  {
    id: "rtk-query-vs-unmanaged-redux",
    slug: "rtk-query-vs-unmanaged-redux",
    title: "Choosing RTK Query Over Unmanaged Redux for Real-Time Mobile State",
    subtitle: "Why declarative polling, automatic deduplication, and AppState lifecycle pausing outperform manual thunk boilerplate.",
    date: "July 2024",
    readTime: "3 min read",
    tags: ["RTK Query", "Redux Toolkit", "API Caching", "Mobile Lifecycle"],
    takeaway: "Declarative query subscriptions combined with React Native AppState listeners eliminate race conditions, deduplicate network requests, and prevent background battery drain.",
    paragraphs: [
      "Early iterations of mobile client state often rely on custom Redux thunks combined with setInterval loops. While this functions in simple prototypes, scaling it across multiple screens introduces race conditions, memory leaks from uncleaned timers, and excessive network consumption when users switch between views.",
      "When evaluating our architecture for long-term maintainability, migrating to RTK Query provided several decisive engineering advantages:",
    ],
    bulletPoints: [
      "Built-in Polling & Deduplication: RTK Query manages polling intervals declaratively per subscriber. If three components across different tabs require site telemetry, only a single network request executes per cycle.",
      "Cache Invalidation & Retention: Structured cache retention policies keep telemetry available instantly during screen transitions, eliminating loading spinners for cached data.",
      "Battery-Aware Lifecycle Binding: When the mobile app transitions to background or inactive states, active polling is suspended immediately, adhering to Apple and Google battery efficiency guidelines.",
    ],
  },
  {
    id: "tablet-ipad-responsive-react-native",
    slug: "tablet-ipad-responsive-react-native",
    title: "Architecting Dual-Pane Tablet and iPad Layouts in a Single React Native Codebase",
    subtitle: "How responsive styling hooks and viewport-aware split panes eliminate separate tablet builds while preserving 48px touch targets.",
    date: "November 2024",
    readTime: "4 min read",
    tags: ["React Native", "Tablet & iPad", "Responsive Design", "Architecture"],
    takeaway: "Dynamic window dimension hooks paired with compound master-detail layout components share 95%+ of code between phone and tablet without runtime styling recalculations.",
    paragraphs: [
      "Field trade applications like Stain Care Pro require seamless operation across contractor handheld phones and 11-to-12.9-inch iPad tablets on job sites. Many engineering teams attempt to handle tablets by creating duplicate screen components or entirely separate application targets. This doubles maintenance overhead and introduces behavioral drift between platforms.",
      "To solve this efficiently, I designed a unified responsive primitive system based on three core architectural rules:",
    ],
    bulletPoints: [
      "Dynamic Breakpoint Hooks: A custom useResponsiveLayout hook monitors window metrics and orientation changes, emitting semantic breakpoint tokens (compact, medium, expanded) rather than hardcoded pixel queries.",
      "Master-Detail Compound Viewports: On expanded tablet viewports, the diagnostic guide and chemical solution views render side-by-side as a continuous dual-pane workspace, while automatically collapsing to a standard stack navigator on phones.",
      "Adaptive Touch Ergonomics: Tablet interactive surfaces maintain strict 48x48px minimum touch boundaries with scaled typography scales (modular 1.25 ratio), preventing awkward stretched interfaces on large screens.",
    ],
  },
];
