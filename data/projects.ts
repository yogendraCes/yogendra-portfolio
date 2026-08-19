import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "energy-flow-monitoring",
    slug: "energy-flow",
    title: "Commercial & Consumer Energy Management Mobile Platform",
    subtitle: "Duracell Energy & Puredrive Energy White-Label Mobile Architecture",
    category: "Production Mobile Application (iOS & Android)",
    summary: "Production white-label consumer energy application powering Duracell-licensed and Puredrive Energy platforms across iOS and Android. Displays real-time telemetry across Solar PV, Battery Storage, EV Charger, Grid, and Household load nodes.",
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
      appStore: "https://apps.apple.com/in/app/duracell-energy/id6460931680",
      playStore: "https://play.google.com/store/apps/details?id=com.duracell",
    },
    technicalHighlight: {
      label: "THREADING, STATE & DEVOPS AUTOMATION",
      description: "Optimized JS thread frame rates to 60fps using Reanimated 3 UI-thread execution, RTK Query normalized caching for 10s API telemetry polling, and automated Fastlane Match release pipelines.",
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
    overview: "A production mobile application operating as the primary consumer interface for home energy storage systems. The application provides homeowners and system operators with live visibility into power generation, battery charge/discharge states, grid import/export tariffs, and electric vehicle charging sessions. The platform operates on a multi-brand architecture, allowing identical core telemetry logic to run under distinct commercial branding configurations (Puredrive Energy and Duracell-licensed applications).",
    challenges: [
      "JS Thread Congestion during High-Frequency Polling: Ingesting live telemetry payloads every 10 seconds caused frame drops and UI sluggishness when processed through standard React component state re-renders.",
      "Smooth Energy Flow Animations across Hardware Profiles: Rendering multi-node power flow pulses smoothly across lower-spec Android devices without draining battery or causing thermal throttling.",
      "Custom Interactive Charting without WebViews: Achieving high-performance, touch-inspectable time-series charts for battery charge curves and solar generation without relying on heavy WebView wrappers.",
      "Cross-Platform Code Signing & Build Automation: Managing separate white-label build targets (com.duracell vs com.puredrive.app), expiring distribution certificates, and manual Xcode exports across staging and production releases.",
    ],
    technicalApproach: [
      "State Optimization: Normalized telemetry payload structures using Redux Toolkit slices and RTK Query cache invalidation logic. Applied strict component memoization (React.memo, useMemo) so that high-frequency data ticks update only affected text nodes and chart paths.",
      "UI-Thread Animation: Utilized React Native Reanimated (v3) and Gesture Handler to run energy flow particle animations directly on the native UI thread, bypassing the React Native JavaScript bridge during render loops.",
      "D3 + SVG Chart Renderer: Built custom chart rendering components using D3 path generators (d3-shape, d3-scale) mapped directly to React Native SVG <Path>, <Rect>, and <G> primitives, implementing custom touch-driven inspect tooltips.",
      "Battery-Aware Lifecycles: Bound application state transitions via React Native AppState API to freeze active animation loops and cancel active HTTP polling timeouts whenever the app transitions to background or inactive states.",
      "Fastlane DevOps Pipeline: Scripted Fastlane lanes (lane :beta_ios, lane :beta_android) utilizing Fastlane Match with encrypted Git certificate storage to automate build generation and TestFlight / Play Console internal distribution.",
    ],
    outcome: [
      "Successfully delivered and maintained production builds published on the Apple App Store and Google Play Store for both Duracell Energy (10K+ Google Play downloads) and Puredrive Energy.",
      "Achieved consistent 60fps UI performance across dashboard telemetry views on both flagship iOS devices and lower-spec budget Android smartphones.",
      "Reduced battery drain during background states by enforcing complete suspension of polling loops and animations.",
      "Streamlined continuous delivery and emergency hotfix deployments through automated Fastlane Match code signing.",
    ],
    sections: [
      {
        id: "overview",
        title: "Executive Product Overview & Shipped Status",
        content: [
          "The Duracell Energy & Puredrive mobile app represents the primary touchpoint for residential and commercial energy management systems in the UK and European markets.",
          "Homeowners rely on the application to monitor real-time energy flow: solar generation from PV arrays, battery charge/discharge rate (kW), grid import/export tariffs, EV charger consumption, and total home load demands.",
          "Operating as a white-label architecture, a single unified codebase targets multiple distribution channels with dynamic brand tokens, localization strings, and remote feature availability flags.",
        ],
      },
      {
        id: "role-scope",
        title: "Engineering Scope & Direct Ownership",
        content: [
          "Sole ownership of the mobile application architecture from React Native client state down to native iOS/Android bundle distribution at Cloud Energy Software.",
          "Collaborated directly with hardware IoT firmware engineers, backend API developers, and product leads to define telemetry JSON contracts and polling lifecycles.",
          "Architected state normalization layers using RTK Query, implemented native UI-thread animation loops using React Native Reanimated 3, and automated build pipelines via Fastlane.",
        ],
      },
      {
        id: "engineering-challenge",
        title: "Key Technical Hurdles & Threading Limits",
        content: [
          "React Native operates on a single JavaScript thread for state updates, API parsing, and layout calculation. Updating live energy telemetry every 10 seconds while rendering dynamic SVG graph paths can quickly saturate the JS thread, leading to visual jank and input latency.",
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
        id: "graphics-d3",
        title: "Custom SVG & D3.js Chart Engineering",
        content: [
          "Instead of relying on heavy third-party chart libraries with high render overhead, custom graphing components were engineered combining D3.js math utilities (d3-scale, d3-shape) with React Native SVG primitives.",
          "Time-series solar generation and battery state-of-charge (SoC) curves are calculated as smooth cubic SVG path strings ('d' attribute). Touch gestures captured via React Native Gesture Handler allow instant point inspection without re-rendering the underlying graph node tree.",
        ],
      },
      {
        id: "release-devops",
        title: "Fastlane Release Engineering & Automated CI/CD",
        content: [
          "Mobile application release engineering is notoriously fragile. Certificate mismatches, mismatched API environment keys, and manual Xcode exports cause costly release delays.",
          "We established a reproducible, script-driven build environment using Fastlane, automated iOS certificate syncing (Fastlane Match), and Android keystore automation for single-command beta distribution.",
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
      {
        id: "lifecycle-resiliency",
        title: "AppState Lifecycle & Battery Conservation",
        content: [
          "Mobile applications that continuously poll network endpoints while backgrounded destroy device battery life and get flagged by iOS App Store review.",
          "We integrated React Native AppState listeners to detect state transitions ('active' -> 'background'). Upon backgrounding, active RTK Query polling timers are suspended and Reanimated shared value loops are frozen, ensuring zero CPU overhead when the application is out of focus.",
        ],
      },
      {
        id: "store-results",
        title: "Production Store Results & Verified Availability",
        content: [
          "Shipped multiple major and minor releases to the Apple App Store and Google Play Store powering both Duracell Energy (10K+ Google Play downloads) and Puredrive Energy applications.",
          "Achieved sustained 60fps rendering across both flagship iOS devices and lower-spec budget Android smartphones.",
        ],
      },
    ],
  },
  {
    id: "sdgme-sustainability-app",
    slug: "sdgme",
    title: "Sustainability Metrics & Action Tracking Mobile Application (SDGme)",
    subtitle: "Enterprise Sustainability Solution for Systems Link 2000 Ltd",
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
    company: "Forebear Productions (Client: Systems Link 2000 Ltd)",
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
