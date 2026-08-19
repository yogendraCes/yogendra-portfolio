# Portfolio Content Source of Truth & Copy Specification

**Owner:** Yogendra Yadav  
**Role:** Senior React Native Engineer (iOS & Android)  
**Target File Path:** `/docs/CONTENT.md`  
**Document Purpose:** Definitive copy and content structure for the portfolio application. All text in this document is factually defensible, technical, and free of developer clichés.

---

## 1. Hero Section

### Tagline / Eyebrow Badge
`● SENIOR REACT NATIVE & MOBILE INFRASTRUCTURE ENGINEER`

### Main Headline
# Building & Shipping Production Mobile Applications for Complex Real-Time Systems

### Subheadline
Senior React Native Engineer specializing in cross-platform iOS and Android applications, real-time data telemetry, interactive SVG/D3 graphics, state architecture, and automated release pipelines. Over 5 years of verified experience taking mobile products from initial architecture to App Store and Google Play deployment.

### Primary Technology Stack Bar
`React Native` • `TypeScript` • `Redux Toolkit` • `RTK Query` • `React Native SVG` • `D3.js` • `Reanimated` • `Fastlane` • `iOS (Xcode)` • `Android (Android Studio)`

### Primary Action Triggers (CTAs)
- **Primary CTA:** `[View Production Case Studies]` *(Scrolls to Section 6 / Navigates to `/case-studies`)*
- **Secondary CTA:** `[Schedule Technical Consultation]` *(Navigates to `/contact` / Opens Intake Modal)*
- **Tertiary CTA:** `[Download Resume (PDF)]` *(Triggers direct download of `[NEEDS INPUT: Verified Resume PDF Path]`)*

---

## 2. Short Introduction

### Overview Paragraph 1: Core Mobile Ownership
I am a Senior React Native Engineer based in Indore, India, focused on building, scaling, and maintaining high-reliability mobile applications across iOS and Android. My work centers on full-lifecycle mobile engineering—translating complex product requirements into clean TypeScript architectures, state management systems, and production builds shipped directly to the Apple App Store and Google Play Store.

### Overview Paragraph 2: Real-Time Systems & Data Visualization
My specialized expertise lies in real-time data monitoring and custom mobile visualization. I currently own and maintain a Duracell-licensed consumer energy application at Cloud Energy Software, managing high-frequency API telemetry polling (~10s intervals), interactive power-flow graphics across Solar, Battery, Grid, and EV systems, custom D3 + SVG chart renderers, multi-language localization, and battery-optimized background execution states.

---

## 3. About

### Professional Background
With over 5 years of dedicated mobile development experience across full-time and embedded contract roles (Cloud Energy Software, Forebear Productions), I specialize in mobile application architecture for data-intensive domains. I work independently alongside product managers, UI/UX designers, backend teams, and IoT hardware engineers to deliver reliable mobile products without handholding or operational friction.

### Technical Focus Areas

1. **Production Mobile Architecture:**
   Architecting modular React Native codebases using TypeScript, strict type boundaries, React Navigation v7, and Redux Toolkit with RTK Query for normalized caching and predictable state synchronization.

2. **Custom Graphics & Threading Optimization:**
   Replacing off-the-shelf graphing libraries with custom D3.js path generators and React Native SVG primitives. Offloading complex gesture handlers and frame-critical animations to the native UI thread via React Native Reanimated and Gesture Handler to maintain consistent 60fps rendering.

3. **Release Engineering & Store DevOps:**
   Establishing cross-platform build automation, managing iOS match code-signing certificates, configuring Android keystores, scripting Fastlane build lanes, and orchestrating deployment across Apple TestFlight and Google Play Console Internal tracks.

4. **Production Resiliency & Real-World Edge Cases:**
   Implementing lifecycle-aware UI listeners to suspend polling timers and animations during background states, preventing memory leaks, and building resilient offline fallbacks for unstable mobile networks.

---

## 4. Experience

### Work History

#### 1. Senior React Native Developer
**Company:** Cloud Energy Software (CES)  
**Period:** Feb 2023 – Present *(Full-time | Remote / Hybrid)*  
**Location:** Indore, India  
**Scope:** Sole mobile engineering owner for CES consumer and enterprise mobile applications across iOS and Android.

**Key Technical Achievements & Responsibilities:**
- Led the complete technical evolution and maintenance of the mobile platform from Puredrive Energy to the Duracell-licensed consumer energy application.
- Re-architected legacy Redux state implementations to Redux Toolkit and RTK Query, establishing predictable state caching and reducing unnecessary component re-renders.
- Engineered real-time energy dashboards consuming telemetry updates on a 10-second polling cadence, optimizing state flow and applying strict memoization to maintain 60fps UI responsiveness.
- Replaced third-party charting libraries (Victory Native) with custom D3.js path generators rendered via React Native SVG, delivering touch-inspected graphs with custom tooltips.
- Designed and integrated power flow visual nodes illustrating real-time energy movement between Solar arrays, Home Storage Batteries, EV Chargers, Household Loads, and the Power Grid.
- Implemented lifecycle-aware listeners using React Native `AppState` to pause telemetry polling and UI animations when applications enter background states, preserving device battery.
- Handled platform-specific native behaviors across iOS and Android, including gesture resolution, system alert styling, font rendering, and performance tuning for lower-spec Android devices.
- Managed end-to-end store release operations, hotfix deployments, and crash triage for production releases on the Apple App Store and Google Play Store.
- Collaborated directly with client stakeholders and product leads to guide technical feasibility and UX decisions, while assisting embedded developers on parallel mobile initiatives.

#### 2. React Native Developer
**Company:** Forebear Productions  
**Client Assignment:** Dedicated Contract to Cloud Energy Software (CES)  
**Period:** Mar 2020 – Jan 2023 *(Contract Period at CES: Apr 2021 – Jan 2023)*  
**Location:** Indore, India  
**Scope:** Embedded React Native engineer building core mobile features prior to direct full-time conversion.

**Key Technical Achievements & Responsibilities:**
- Delivered early-stage cross-platform mobile features for Puredrive Energy applications on iOS and Android.
- Built QR-code hardware onboarding flows, multi-user role authentication, and animated power flow indicators.
- Created reusable UI component libraries and standardized API request handlers across mobile modules.
- Stabilized core mobile features and reduced crash rates, leading to direct full-time acquisition by Cloud Energy Software.

---

## 5. Skills & Capability Matrix

| Category | Primary Technologies & Tooling | Production Ownership Depth |
| :--- | :--- | :--- |
| **Mobile Core** | React Native, TypeScript, JavaScript (ES6+), React Navigation (v7), iOS, Android | Modular architecture, platform native bridge, custom native components, lifecycle management. |
| **State & API Architecture** | Redux Toolkit, RTK Query, REST APIs, API Polling, Normalized Caching, Offline Fallbacks | High-frequency telemetry ingestion, state normalization, polling lifecycle suspension. |
| **Graphics & Visualization** | React Native SVG, D3.js, Custom Math Path Generators, Interactive Charting | Custom SVG canvas nodes, multi-series graph rendering, touch-inspected tooltips. |
| **Performance & UI Mechanics** | React Native Reanimated (v3), Gesture Handler, Memoization (`useMemo`, `useCallback`, `React.memo`) | UI-thread execution, gesture-driven interactions, main JS thread frame-rate optimization. |
| **DevOps & Store Operations** | Fastlane, Xcode (iOS), Android Studio (Android), App Store Connect, Google Play Console | Automated code-signing, TestFlight beta distribution, Play Console internal tracks, release management. |
| **Product & System Tools** | Firebase (Auth, Analytics, Push Notifications), i18n Localization, Feature Flags, Git, Jira | Multi-brand theming, dynamic language switching, remote feature toggles, agile workflow. |

---

## 6. Selected Projects (Overview Grid)

### 1. Commercial & Consumer Energy Flow Monitoring Platform
**Category:** Mobile Telemetry & Data Visualization (iOS & Android)  
**Primary Stack:** React Native • TypeScript • Redux Toolkit • RTK Query • React Native SVG • D3.js • Reanimated  
**Summary:** Production white-label consumer energy application powering Duracell-licensed and Puredrive Energy platforms. Displays live telemetry across Solar, Battery, EV Charger, Grid, and Household load nodes.  
**CTA:** `[Read Architectural Case Study →]` *(Navigates to `/case-studies/energy-flow`)*

### 2. Cross-Platform Release Engineering & Mobile CI/CD Pipeline
**Category:** Mobile DevOps & Store Operations  
**Primary Stack:** Fastlane • Xcode • Android Studio • App Store Connect • Google Play Console • Feature Flags  
**Summary:** Automated multi-environment build, code-signing, and store distribution pipeline supporting rapid continuous delivery and emergency hotfix deployments for cross-platform apps.  
**CTA:** `[Read Pipeline Architecture Case Study →]` *(Navigates to `/case-studies/release-ci-cd`)*

### 3. Sustainability Metrics & Action Tracking Mobile Application (SDGme)
**Category:** Enterprise Mobile Application  
**Primary Stack:** React Native • JavaScript • Redux • REST APIs • Push Notifications • Firebase Analytics  
**Summary:** Enterprise mobile solution built for Systems Link 2000 Ltd tracking user sustainability metrics aligned with UN Sustainable Development Goals, featuring interactive progress charts and push notifications.  
**CTA:** `[Read Project Summary →]` *(Navigates to `/case-studies/sdgme`)*

---

## 7. Detailed Project Descriptions

---

### Project 1: Commercial & Consumer Energy Flow Monitoring Platform

#### Title
Commercial & Consumer Energy Flow Monitoring Platform *(Duracell Energy / Puredrive Energy)*

#### One-Line Description
White-label mobile application handling live solar, battery, grid, EV, and home energy data visualization and real-time telemetry across iOS and Android.

#### Overview
A production mobile application operating as the primary consumer interface for home energy storage systems. The application provides homeowners and system operators with live visibility into power generation, battery charge/discharge states, grid import/export tariffs, and electric vehicle charging sessions. The platform operates on a multi-brand architecture, allowing identical core telemetry logic to run under distinct commercial branding configurations (Puredrive Energy and Duracell-licensed applications).

#### Role
Senior / Sole React Native Developer *(Cloud Energy Software)*

#### Responsibilities
- Owned the end-to-end mobile engineering lifecycle across iOS and Android.
- Refactored legacy state handlers to Redux Toolkit and RTK Query for efficient API polling and state caching.
- Developed custom D3.js + React Native SVG rendering modules to replace bloated charting libraries.
- Implemented real-time animated node graphs representing energy movement between Solar, Battery, Grid, and Household loads.
- Engineered lifecycle-aware background handlers to pause polling timers and UI animations when the application is backgrounded.
- Configured multi-brand white-label assets, dynamic localization (i18n), and remote feature toggles.
- Managed App Store and Google Play submissions, versioning, release notes, and hotfix distribution.

#### Technical Challenges
1. **JS Thread Congestion during High-Frequency Polling:** Ingesting live telemetry payloads every 10 seconds caused frame drops and UI sluggishness when processed through standard React component state re-renders.
2. **Smooth Energy Flow Animations across Hardware Profiles:** Rendering multi-node power flow pulses smoothly across lower-spec Android devices without draining battery or causing thermal throttling.
3. **Custom Interactive Charting without WebViews:** Achieving high-performance, touch-inspectable time-series charts for battery charge curves and solar generation without relying on heavy WebView wrappers.

#### Technical Approach
- **State Optimization:** Normalized telemetry payload structures using Redux Toolkit slices and RTK Query cache invalidation logic. Applied strict component memoization (`React.memo`, `useMemo`) so that high-frequency data ticks update only affected text nodes and chart paths.
- **UI-Thread Animation:** Utilized React Native Reanimated (v3) and Gesture Handler to run energy flow particle animations directly on the native UI thread, bypassing the React Native JavaScript bridge during render loops.
- **D3 + SVG Chart Renderer:** Built custom chart rendering components using D3 path generators (`d3-shape`, `d3-scale`) mapped directly to React Native SVG `<Path>`, `<Rect>`, and `<G>` primitives, implementing custom touch-driven inspect tooltips.
- **Battery-Aware Lifecycles:** Bound application state transitions via React Native `AppState` API to freeze active animation loops and cancel active HTTP polling timeouts whenever the app transitions to `background` or `inactive` states.

#### Outcome
- Successfully delivered multiple production releases powering Puredrive and Duracell-licensed consumer energy applications on the Apple App Store and Google Play Store.
- Achieved consistent 60fps UI performance across dashboard telemetry views on both flagship iOS and budget Android hardware.
- Reduced battery drain during background states by enforcing complete suspension of polling loops and animations.

#### Technologies
React Native • TypeScript • Redux Toolkit • RTK Query • React Native SVG • D3.js • React Native Reanimated • React Native Gesture Handler • REST APIs • i18n Localization • Feature Flags • Firebase • Xcode • Android Studio • Apple App Store • Google Play Console

#### Case-Study CTA
`[Read Architectural Case Study →]`

---

### Project 2: Cross-Platform Release Engineering & Mobile CI/CD Pipeline

#### Title
Cross-Platform Release Engineering & Mobile CI/CD Pipeline

#### One-Line Description
Multi-environment build automation, code signing, and distribution infrastructure for production iOS and Android React Native applications.

#### Overview
An automated mobile DevOps and release engineering pipeline designed to streamline cross-platform application builds, eliminate manual certificate provisioning errors, and enable continuous delivery across staging, beta testing, and production store tracks.

#### Role
React Native & Mobile Release Engineer

#### Responsibilities
- Architected environment configuration structures (Development, Staging, Production) using environment variable injection.
- Scripted Fastlane lanes for automated build generation, version incrementing, and code signing.
- Configured automated iOS match repository storage for team code-signing certificates and provisioning profiles.
- Established automated build uploads to Apple TestFlight and Google Play Console Internal Testing tracks.
- Integrated remote feature flag systems to enable controlled feature rollout without requiring app store re-submissions.

#### Technical Challenges
1. **Code-Signing Friction:** Managing expiring iOS distribution certificates and provisioning profiles across multiple build environments.
2. **Build Configuration Drift:** Preventing mismatched environment variables and API endpoints between staging and production build outputs.
3. **Manual Distribution Bottlenecks:** Eliminating manual Xcode and Android Studio export workflows that delayed QA testing cycles and emergency hotfix deployments.

#### Technical Approach
- **Fastlane Automation:** Implemented customized `Fastfile` configurations defining distinct execution lanes (`lane :beta_ios`, `lane :beta_android`, `lane :release_production`).
- **Unified Code Signing:** Standardized iOS code signing using Fastlane Match with Git-based encrypted certificate storage, eliminating provisioning conflicts across build machines.
- **Environment Separation:** Integrated `react-native-config` with build flavor scripts in Xcode (`.xcconfig`) and Android (`build.gradle`) to guarantee strict API target separation.
- **Feature Flag Control:** Integrated remote configuration keys to decouple code deployment from feature exposure, allowing instant kill-switch control over unreleased features.

#### Outcome
- Standardized cross-platform deployment workflows, enabling one-command beta build distribution to TestFlight and Google Play Internal testing.
- Eliminated manual code-signing errors during production release builds.
- Streamlined emergency production hotfix deployment turnaround times.

#### Technologies
Fastlane • React Native • TypeScript • Ruby (Fastlane scripts) • Xcode • Android Studio • Apple App Store Connect • TestFlight • Google Play Console • Feature Flags • Git

#### Case-Study CTA
`[Read Pipeline Architecture Case Study →]`

---

### Project 3: Sustainability Metrics & Action Tracking Mobile Application (SDGme)

#### Title
Sustainability Metrics & Action Tracking Mobile Application *(SDGme)*

#### One-Line Description
Mobile application tracking daily, monthly, and annual environmental sustainability metrics aligned with UN Sustainable Development Goals.

#### Overview
An enterprise mobile solution built for Systems Link 2000 Ltd designed to engage users in sustainability tracking. The application allows individual and organizational users to record eco-friendly actions, track carbon reduction metrics, view aggregated historical analytics, and receive engagement notifications.

#### Role
React Native Developer *(Forebear Productions)*

#### Responsibilities
- Developed core user tracking interfaces, interactive input forms, and metrics dashboard screens.
- Built interactive charting views displaying daily, monthly, and yearly progress trends.
- Integrated Firebase push notifications, user authentication, and event analytics logging.
- Consumed backend REST APIs for user goal tracking and aggregated metric reporting.

#### Technical Challenges
1. **Multi-Timeframe Data Aggregation:** Rendering responsive time-series charts that dynamically scale across daily, monthly, and annual data ranges without UI delay.
2. **Notification Engagement Tracking:** Ensuring reliable delivery and deep-linking routing for engagement push notifications across iOS and Android background states.

#### Technical Approach
- **Modular Chart Components:** Created reusable data visualization wrappers managing dynamic scale transformations and axis labels based on selected timeframes.
- **Notification Handling:** Integrated Firebase Cloud Messaging (FCM) with native background handlers to route user taps directly to relevant action logging screens.
- **Normalized Local Cache:** Stored local action logs using Redux state structures to provide instantaneous UI updates prior to server synchronization.

#### Outcome
- Delivered a functional production mobile interface powering corporate ESG engagement and action tracking.
- Maintained responsive rendering across multi-timeframe analytics charts on iOS and Android devices.

#### Technologies
React Native • JavaScript • Redux • REST APIs • Firebase Cloud Messaging (FCM) • Firebase Analytics • iOS • Android

#### Case-Study CTA
`[Read Project Summary →]`

---

## 8. Case-Study Structure & Technical Blueprint

This section serves as the technical blueprint for individual case study pages (`/app/case-studies/[slug]/page.tsx`). Each case study follows a standardized, modular technical layout:

```
┌────────────────────────────────────────────────────────────────────────┐
│ 1. CASE STUDY HERO HEADER                                             │
│    - System Title & Industry Classification                            │
│    - Metadata Bar: Role • Duration • Target Platforms • Client NDA     │
├────────────────────────────────────────────────────────────────────────┤
│ 2. EXECUTIVE PRODUCT OVERVIEW                                          │
│    - Operational context, business objective, and target users.        │
├────────────────────────────────────────────────────────────────────────┤
│ 3. MY ROLE & ENGINEERING SCOPE                                         │
│    - Specific ownership boundary (Architecture, Viz, CI/CD, Stores).   │
├────────────────────────────────────────────────────────────────────────┤
│ 4. THE ENGINEERING CHALLENGE                                           │
│    - Detailed technical hurdles (Threading, Polling, SVG, State).      │
├────────────────────────────────────────────────────────────────────────┤
│ 5. SYSTEM ARCHITECTURE & DATA FLOW                                     │
│    - Telemetry ingestion pipelines, RTK Query caching, state tree.     │
├────────────────────────────────────────────────────────────────────────┤
│ 6. DATA VISUALIZATION & ANIMATION TUNING                               │
│    - Custom D3 path generation, React Native SVG, Reanimated UI thread.│
├────────────────────────────────────────────────────────────────────────┤
│ 7. PRODUCTION PERFORMANCE & LIFECYCLE MANAGEMENT                      │
│    - Memory leak mitigation, AppState listeners, battery conservation. │
├────────────────────────────────────────────────────────────────────────┤
│ 8. RELEASE ENGINEERING & STORE OPERATIONS                              │
│    - Fastlane configuration, version management, store releases.       │
├────────────────────────────────────────────────────────────────────────┤
│ 9. VERIFIED RESULTS & PRODUCTION OUTCOMES                              │
│    - Stability metrics, performance frame-rate targets achieved.       │
├────────────────────────────────────────────────────────────────────────┤
│ 10. COMPLETE TECHNOLOGY MATRIX                                         │
│    - Full listing of dependencies, libraries, and dev tools used.      │
└────────────────────────────────────────────────────────────────────────┘
```

---

## 9. Contact CTA & Scoping Intake

### Section Title
# Technical Scoping & Direct Contact

### Subsection Intro
Whether you require technical leadership for a new mobile product, need to rescue an existing React Native codebase, or want to build complex real-time mobile visualizations, I am available for select contract consultations and senior technical roles.

### Audience-Specific Action Channels

#### Channel 1: For Founders, CTOs & Product Owners
- **Headline:** Discuss a Mobile Project
- **Copy:** I assist engineering teams with React Native architecture, real-time data integration, performance refactoring, and app store deployment. Let's evaluate your technical scope and delivery timeline.
- **Action Trigger:** `[Schedule Technical Consultation]` *(Opens calendar booking or intake form)*

#### Channel 2: For Technical Recruiters & Engineering Managers
- **Headline:** Direct Recruitment & Verification
- **Copy:** Verify stack compatibility, review past technical case studies, or request a complete background overview.
- **Action Triggers:**
  - `[Download PDF Resume]` *(File download)*
  - `[Email Directly]` *(mailto: `[NEEDS INPUT: Professional Email Address]`)*

### Direct Communication Details
- **Location:** Indore, India *(Available for Remote Global Work / Hybrid)*
- **Direct Email:** `[NEEDS INPUT: Professional Email Address]` *(e.g., yogendra9644@gmail.com)*
- **GitHub Profile:** `[NEEDS INPUT: Verified GitHub Profile URL]`
- **LinkedIn Profile:** `[NEEDS INPUT: Verified LinkedIn Profile URL]`
- **Response Commitment:** Technical inquiries receive a response within 24 business hours.

---

## 10. Footer

### Brand Monogram / Identity
`YOGENDRA YADAV // SENIOR REACT NATIVE ENGINEER`

### Operational Status Badge
`● AVAILABLE FOR SELECT CONSULTING & SENIOR ROLES`

### Copyright & System Notice
© 2026 Yogendra Yadav. All rights reserved. Built with Next.js, React, TypeScript, and Vanilla CSS Tokens. Designed for production performance and accessibility.

### Footer Navigation Links
- `[Production Work]` -> `#work`
- `[Architecture]` -> `#architecture`
- `[Experience]` -> `#experience`
- `[Contact]` -> `/contact`
- `[GitHub]` -> `[NEEDS INPUT: Verified GitHub Profile URL]`
- `[LinkedIn]` -> `[NEEDS INPUT: Verified LinkedIn Profile URL]`

---

## Complete Audit of Items Marked [NEEDS INPUT]

The following factual inputs and verified assets must be provided or confirmed by Yogendra Yadav prior to final production deployment:

1. `[NEEDS INPUT: Professional Email Address]`  
   - Target value: `yogendra9644@gmail.com` *(Confirm if this is the public mailto target)*
2. `[NEEDS INPUT: Verified GitHub Profile URL]`  
   - Target value: GitHub account URL *(e.g., https://github.com/yogendra9644)*
3. `[NEEDS INPUT: Verified LinkedIn Profile URL]`  
   - Target value: LinkedIn profile URL *(e.g., https://linkedin.com/in/yogendra9644)*
4. `[NEEDS INPUT: Verified Resume PDF Path]`  
   - Relative public asset path for the downloadable PDF resume file *(e.g., `/public/Yogendra_Yadav_React_Native_Resume.pdf`)*
5. `[NEEDS INPUT: Calendar Booking Link]`  
   - Scheduling URL (e.g., Calendly / SavvyCal) for the `[Schedule Technical Consultation]` CTA button (if enabled).
6. `[NEEDS INPUT: Live App Store URL - Duracell/Puredrive Energy]`  
   - Official Apple App Store public product link (if permitted under client NDA).
7. `[NEEDS INPUT: Live Google Play Store URL - Duracell/Puredrive Energy]`  
   - Official Google Play Store public product link (if permitted under client NDA).
8. `[NEEDS INPUT: Verified Quantitative Metrics]`  
   - Any legally disclosable numerical achievements (e.g., app rating, build time reduction percentages, crash-free user percentage) if available.
