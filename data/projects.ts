import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "energy-flow-monitoring",
    slug: "energy-flow",
    title: "Commercial & Consumer Energy Management Mobile Platform",
    subtitle: "Duracell Energy & Puredrive Energy Production Mobile Applications (iOS & Android)",
    category: "Production Mobile Application (iOS & Android)",
    summary: "Production consumer energy mobile application powering Duracell Energy and Puredrive Energy platforms across iOS and Android. Displays live telemetry across Solar PV, Battery Storage, EV Charger, Grid, and Home load nodes.",
    primaryStack: ["React Native", "TypeScript", "Redux Toolkit", "RTK Query", "React Native SVG", "D3.js", "Reanimated", "Fastlane"],
    fullStack: [
      "React Native",
      "TypeScript",
      "Redux Toolkit",
      "RTK Query",
      "React Native SVG",
      "D3.js",
      "React Native Reanimated v3",
      "React Native Gesture Handler",
      "Fastlane",
      "Ruby (Fastlane scripts)",
      "REST APIs",
      "i18n Localization",
      "Feature Flags",
      "Firebase",
      "Xcode",
      "Android Studio",
      "Apple App Store",
      "Google Play Console",
    ],
    role: "Senior / Sole React Native Developer",
    company: "Cloud Energy Software (CES)",
    period: "2023 – Present",
    featured: true,
    links: {
      duracellAppStore: "https://apps.apple.com/in/app/duracell-energy/id6460931680",
      duracellPlayStore: "https://play.google.com/store/apps/details?id=com.duracell",
      puredriveAppStore: "https://apps.apple.com/in/app/puredrive/id1536396851",
      puredrivePlayStore: "https://play.google.com/store/apps/details?id=com.puredrive.app",
    },
    technicalHighlight: {
      label: "THREADING, STATE & RELEASE ENGINEERING",
      description: "Optimized JS thread frame rates to 60fps using Reanimated 3 UI-thread execution, RTK Query normalized caching for 10s API telemetry polling, and automated Fastlane release pipelines.",
      codeSnippet: {
        filename: "energyFlowState.ts",
        language: "typescript",
        code: `// RTK Query polling setup with AppState lifecycle background suspension
export const energyApi = createApi({
  reducerPath: 'energyApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api/v2/telemetry' }),
  endpoints: (builder) => ({
    getLiveTelemetry: builder.query<TelemetryState, string>({
      query: (siteId) => \`/sites/\${siteId}/live\`,
      keepUnusedDataFor: 30, // 30s cache retention
    }),
  }),
});`,
      },
    },
    overview: "A production mobile application operating as the primary consumer interface for home energy storage systems. The application provides homeowners and system operators with live visibility into power generation, battery charge/discharge states, grid import/export tariffs, and electric vehicle charging sessions. The platform operates on a multi-brand architecture, running under commercial branding configurations for Duracell Energy and Puredrive Energy.",
    challenges: [
      "JS Thread Congestion during High-Frequency Polling: Ingesting live telemetry payloads every 10 seconds caused frame drops and UI sluggishness when processed through standard React component state re-renders.",
      "Smooth Energy Flow Animations across Hardware Profiles: Rendering multi-node power flow pulses smoothly across lower-spec Android devices without draining battery or causing thermal throttling.",
      "Custom Interactive Charting without WebViews: Achieving high-performance, touch-inspectable time-series charts for battery charge curves and solar generation without relying on heavy WebView wrappers.",
      "Cross-Platform Code Signing & Build Automation: Managing separate build targets (com.duracell vs com.puredrive.app), expiring distribution certificates, and manual Xcode exports across staging and production releases.",
    ],
    technicalApproach: [
      "State Optimization: Normalized telemetry payload structures using Redux Toolkit slices and RTK Query cache invalidation logic. Applied strict component memoization (React.memo, useMemo) so that high-frequency data ticks update only affected text nodes and chart paths.",
      "UI-Thread Animation: Utilized React Native Reanimated (v3) and Gesture Handler to run energy flow particle animations directly on the native UI thread, bypassing the React Native JavaScript bridge during render loops.",
      "D3 + SVG Chart Renderer: Built custom chart rendering components using D3 path generators (d3-shape, d3-scale) mapped directly to React Native SVG <Path>, <Rect>, and <G> primitives, implementing custom touch-driven inspect tooltips.",
      "Battery-Aware Lifecycles: Bound application state transitions via React Native AppState API to freeze active animation loops and cancel active HTTP polling timeouts whenever the app transitions to background or inactive states.",
      "Fastlane Release Pipeline: Scripted Fastlane lanes (lane :beta_ios, lane :beta_android) utilizing Fastlane Match with encrypted Git certificate storage to automate build generation and TestFlight / Play Console internal distribution.",
    ],
    outcome: [
      "Delivered and maintained production builds published on the Apple App Store and Google Play Store for both Duracell Energy and Puredrive Energy.",
      "Achieved consistent 60fps UI performance across dashboard telemetry views on both flagship iOS devices and lower-spec budget Android smartphones.",
      "Reduced battery drain during background states by enforcing complete suspension of polling loops and animations.",
      "Streamlined continuous delivery and production hotfix deployments through automated Fastlane Match code signing.",
    ],
    sections: [
      {
        id: "overview",
        title: "Product Overview & Shipped Application Status",
        content: [
          "The Duracell Energy & Puredrive Energy mobile applications operate as the primary touchpoint for residential energy management systems in the UK and European markets.",
          "Homeowners rely on the application to monitor real-time energy flow: solar generation from PV arrays, battery charge/discharge rates, grid import/export tariffs, EV charger consumption, and household load demands.",
          "Operating on a white-label architecture, a unified React Native codebase powers multiple brand configurations with dynamic theme tokens, localized assets, and feature flag management.",
        ],
      },
      {
        id: "my-contribution",
        title: "Engineering Scope & Direct Contribution",
        content: [
          "Sole ownership of the mobile application architecture from React Native client state down to native iOS/Android deployment at Cloud Energy Software.",
          "Collaborated directly with hardware IoT firmware engineers, backend API developers, and product leads to define telemetry JSON contracts and polling lifecycles.",
          "Architected state normalization layers using RTK Query, implemented native UI-thread animation loops using React Native Reanimated 3, and automated build pipelines via Fastlane.",
        ],
      },
      {
        id: "technical-challenges",
        title: "Technical Challenges & Engineering Solutions",
        content: [
          "React Native operates on a single JavaScript thread for state updates, API parsing, and layout calculation. Updating live energy telemetry every 10 seconds while rendering dynamic graph paths can saturate the JS thread, leading to visual jank and input latency.",
          "To solve this, telemetry polling state was decoupled from animation loops. Telemetry payloads update normalized Redux state, while particle animations execute entirely on the native UI thread using Reanimated shared values.",
        ],
        codeSnippet: {
          filename: "useEnergyParticleAnimation.ts",
          language: "typescript",
          code: `import { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing } from 'react-native-reanimated';

export function useEnergyParticleAnimation(flowRateKw: number) {
  const progress = useSharedValue(0);
  
  // Calculate speed proportional to kW power flow
  const duration = Math.max(800, 3000 - Math.abs(flowRateKw) * 300);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, { duration, easing: Easing.linear }),
      -1, // Infinite loop
      false
    );
  }, [flowRateKw]);

  return useAnimatedStyle(() => ({
    transform: [{ translateX: progress.value * 120 }],
    opacity: flowRateKw > 0.1 ? 1 : 0.2,
  }));
}`,
        },
      },
      {
        id: "energy-visualization",
        title: "Energy Visualization & Live Node Flow",
        content: [
          "Live energy movement between Solar arrays, Home Storage Batteries, EV Chargers, Household Loads, and the Power Grid is rendered via custom SVG node graphs.",
          "Node pulse animations and directional indicators execute directly on the UI thread, providing smooth 60fps motion while keeping the main JS thread unblocked for user interactions.",
        ],
      },
      {
        id: "data-charts",
        title: "Custom SVG & D3.js Chart Engineering",
        content: [
          "Custom graphing components were engineered combining D3.js math utilities (d3-scale, d3-shape) with React Native SVG primitives, replacing heavy third-party chart libraries.",
          "Time-series solar generation and battery state-of-charge (SoC) curves are calculated as smooth cubic SVG path strings. Touch gestures captured via React Native Gesture Handler allow instant point inspection without re-rendering the underlying graph tree.",
        ],
      },
      {
        id: "scheduled-controls",
        title: "Scheduled Controls & Tariff Management",
        content: [
          "Homeowners can configure automated charging and discharging windows to take advantage of off-peak electricity tariffs.",
          "Implemented robust client-side validation for schedule time slots, target battery State of Charge (SoC) limits, and optimistic UI updates for immediate user feedback.",
        ],
      },
      {
        id: "architecture",
        title: "Client State Architecture & RTK Query",
        content: [
          "Re-architected client state management to Redux Toolkit and RTK Query, implementing normalized cache invalidation and query deduplication.",
          "High-frequency 10-second polling updates only affected state slices, preventing unnecessary re-renders across parent container components.",
        ],
      },
      {
        id: "performance",
        title: "AppState Lifecycle & Battery Optimization",
        content: [
          "Continuous network polling while backgrounded degrades battery life and risks App Store rejection.",
          "Integrated React Native AppState listeners to detect state transitions ('active' -> 'background'). Upon backgrounding, active RTK Query polling timers are suspended and Reanimated shared value loops are frozen, ensuring zero background CPU overhead.",
        ],
      },
      {
        id: "release-engineering",
        title: "Release Engineering & Production Delivery (Fastlane CI/CD)",
        content: [
          "Established automated build, code-signing, and distribution infrastructure using Fastlane across iOS and Android.",
          "Configured Fastlane Match with encrypted Git certificate storage to automate iOS code signing, and scripted lanes for automated deployment to Apple TestFlight and Google Play Console Internal tracks.",
        ],
        codeSnippet: {
          filename: "Fastfile",
          language: "ruby",
          code: `desc "Submit a new Beta Build to Apple TestFlight"
lane :beta_ios do
  setup_ci if is_ci
  match(type: "appstore", readonly: true)
  increment_build_number(xcodeproj: "DuracellEnergy.xcodeproj")
  build_app(workspace: "DuracellEnergy.xcworkspace", scheme: "Production")
  upload_to_testflight(skip_waiting_for_build_processing: true)
end`,
        },
      },
    ],
  },
  {
    id: "sdgme-sustainability-app",
    slug: "sdgme",
    title: "Sustainability Metrics & Action Tracking Mobile Application (SDGme)",
    subtitle: "Enterprise Mobile Solution for Systems Link 2000 Ltd",
    category: "Enterprise Mobile Application (iOS & Android)",
    summary: "Enterprise mobile solution built for Systems Link 2000 Ltd tracking user sustainability metrics aligned with UN Sustainable Development Goals, featuring interactive progress charts and push notifications.",
    primaryStack: ["React Native", "JavaScript", "Redux", "REST APIs", "Push Notifications", "Firebase Analytics"],
    fullStack: [
      "React Native",
      "JavaScript",
      "Redux",
      "REST APIs",
      "Firebase Cloud Messaging (FCM)",
      "Firebase Analytics",
      "iOS",
      "Android",
    ],
    role: "React Native Developer",
    company: "Forebear Productions (Contract to Systems Link 2000 Ltd)",
    period: "2020 – 2021",
    featured: true,
    technicalHighlight: {
      label: "ENTERPRISE METRIC TRACKING",
      description: "Delivered interactive multi-timeframe analytics charts (daily, monthly, yearly) and FCM push notification deep-linking for ESG metric tracking.",
      codeSnippet: {
        filename: "notificationHandler.js",
        language: "javascript",
        code: `import messaging from '@react-native-firebase/messaging';

// Handle background notification navigation to action logger
messaging().setBackgroundMessageHandler(async remoteMessage => {
  if (remoteMessage?.data?.targetScreen) {
    navigate(remoteMessage.data.targetScreen, remoteMessage.data.params);
  }
});`,
      },
    },
    overview: "An enterprise mobile solution built for Systems Link 2000 Ltd designed to engage users in sustainability tracking. The application allows individual and organizational users to record eco-friendly actions, track carbon reduction metrics, view aggregated historical analytics, and receive engagement notifications.",
    challenges: [
      "Multi-Timeframe Data Aggregation: Rendering responsive time-series charts that dynamically scale across daily, monthly, and annual data ranges without UI delay.",
      "Notification Engagement Tracking: Ensuring reliable delivery and deep-linking routing for engagement push notifications across iOS and Android background states.",
    ],
    technicalApproach: [
      "Modular Chart Components: Created reusable data visualization wrappers managing dynamic scale transformations and axis labels based on selected timeframes.",
      "Notification Handling: Integrated Firebase Cloud Messaging (FCM) with native background handlers to route user taps directly to relevant action logging screens.",
      "Normalized Local Cache: Stored local action logs using Redux state structures to provide instantaneous UI updates prior to server synchronization.",
    ],
    outcome: [
      "Delivered a functional production mobile interface powering corporate ESG engagement and action tracking.",
      "Maintained responsive rendering across multi-timeframe analytics charts on iOS and Android devices.",
    ],
    sections: [
      {
        id: "overview",
        title: "Enterprise Application Overview",
        content: [
          "SDGme enables organizations to measure and drive individual eco-actions aligned with UN Sustainable Development Goals.",
          "The app provides employees with carbon savings calculators, milestone tracking, corporate leaderboard views, and daily action logging.",
        ],
      },
      {
        id: "architecture",
        title: "State Management & Analytics",
        content: [
          "Built using React Native and Redux with normalized local caching, allowing users to log actions seamlessly even when temporary cellular signal is lost.",
          "Integrated Firebase Analytics and Cloud Messaging to trigger personalized action reminders and log corporate engagement metrics.",
        ],
      },
    ],
  },
];

