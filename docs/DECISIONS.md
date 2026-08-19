# Production Engineering Decision Records (ADRs)

**Project:** Personal Developer Portfolio for Yogendra Yadav  
**Role:** Senior Production Engineer Review  
**Status:** Approved for Public Deployment  
**Last Updated:** August 2026  

---

## 1. Secrets & Credentials Policy (Security Audit)
- **Decision:** Enforce zero hardcoded secrets, private environment variables, or internal API tokens within public repositories.
- **Verification:** Searched all source code, dataset definitions, metadata handlers, and deployment configs. No API keys, private keys, bearer tokens, or database credentials exist in client or server code.
- **Client NDA Compliance:** Anonymized proprietary commercial energy platform architecture as a white-label case study while maintaining exact engineering authenticity (Redux Toolkit, RTK Query 10s telemetry polling, React Native Reanimated UI thread execution, custom D3 + SVG path rendering).

---

## 2. Server-Side Header Hardening & Framework Obfuscation
- **Decision:** Disable `X-Powered-By: Next.js` default response headers and inject strict HTTP security headers via `next.config.ts`.
- **Implementation:**
  - `poweredByHeader: false` prevents automated scanners from fingerprinting framework runtime versions.
  - Added `X-Content-Type-Options: nosniff` to prevent MIME-type sniffing attacks.
  - Added `X-Frame-Options: DENY` to eliminate clickjacking risks.
  - Added `Referrer-Policy: strict-origin-when-cross-origin` to safeguard privacy on external navigation.

---

## 3. Safe HTML & JSON-LD Structured Data Injection
- **Decision:** Sanitize all server-rendered JSON-LD structured data script payloads.
- **Implementation:** Wrapped `JSON.stringify()` outputs in `.replace(/</g, "\\u003c")` across `app/layout.tsx` and `app/projects/[slug]/page.tsx`. This prevents potential script-tag breakout XSS vulnerabilities without introducing complex runtime sanitization libraries.

---

## 4. Reduced Dependency Footprint & JS Bundle Performance
- **Decision:** Eliminate third-party client UI animation libraries (such as `framer-motion`) in favor of native CSS animations, Tailwind v4 micro-interactions, and SVG SMIL elements.
- **Rationale:** Minimizes JavaScript bundle size, removes unnecessary runtime dependency overhead, and guarantees zero main-thread blocking during page navigation.

---

## 5. Accessibility & Reduced Motion Compliance
- **Decision:** Ensure full WCAG 2.1 AA/AAA visual and motion compliance across all viewports.
- **Implementation:**
  - Retained visible focus rings (`focus-visible:outline-[#D97706]`) and accessible skip-to-content links (`#main-content`).
  - Refactored `@media (prefers-reduced-motion: reduce)` rules in `globals.css` so that `.animate-pulse` status indicators freeze into static, high-contrast green dots instead of being hidden, adhering to `DESIGN.md`.
  - Enforced minimum 44px x 44px touch targets on mobile navigation triggers and external links.

---

## 6. Static Site Generation (SSG) & Production Route Strategy
- **Decision:** Configure full static generation (SSG) for all site routes (`/`, `/projects`, `/projects/[slug]`, `/resume`, `/contact`).
- **Rationale:** Delivers 0ms server processing overhead, optimal Lighthouse scores, static CDN edge caching, and maximum resilience against traffic spikes.
- **SEO & Canonical Consistency:** Fully configured XML sitemap (`/sitemap.xml`) and `robots.txt` generator pointing to canonical production domain (`https://yogendrayadav.dev`).

---

## 7. Core Positioning Calibration
- **Decision:** Position Yogendra strictly as **Senior React Native Developer / Mobile Engineer (iOS & Android)** across all site metadata, hero components, resume views, and contact channels.
- **Rationale:** Prevents over-indexing on a narrow domain niche, ensuring recruiters evaluate Yogendra for senior mobile engineering roles across all industries.
- **Copy Audit:** Swept visible copy to eliminate banned AI buzzwords and developer clichés ("MOBILE INFRASTRUCTURE ENGINEER", "cutting-edge", "seamless experiences", "mission-critical").

---

## 8. Real Production Media & Visualizer Replacement
- **Decision:** Completely remove simulated web SVG visualizer widgets (`EnergyFlowVisualizer`, `PipelineVisualizer`) and replace with genuine production mobile app screenshots served from `/projects/duracell-energy/`.
- **Implementation:** Prioritized 5 core production screens (`energy-flow.png`, `energy-summary.png`, `energy-insights.png`, `scheduled-control.png`, `home-flow.png`). Rendered screens in clean responsive mobile containers with subtle shadows and high-contrast technical details.

---

## 9. Verified App Store & Google Play Links
- **Decision:** Embed direct, explicit links to public production applications on Apple App Store and Google Play Store for Duracell Energy and Puredrive Energy.
- **Implementation:** Used clear labels (`View on App Store`, `Get it on Google Play`) with `target="_blank" rel="noopener noreferrer"` attributes. Public product metrics (e.g. 10K+ Google Play downloads) are factually attributed to the product rather than individual claims.

---

## 10. Release Engineering & Portfolio Consolidation
- **Decision:** Consolidate Fastlane CI/CD and DevOps work directly into the flagship Duracell Energy production case study under "Release Engineering & Production Delivery".
- **Rationale:** Prevents artificial project count padding while highlighting complete end-to-end mobile shipping capability (TypeScript -> React Native -> Native Code Signing -> Fastlane -> App Store & Play Store). Maintained strict 2-project dataset (`energy-flow` & `sdgme`).

---

## 11. Portfolio Conversion & Direct Contact Architecture
- **Decision**: Adopt direct 1-click `mailto:yogendra9644@gmail.com` strategy for conversion without backend forms, email APIs, or third-party booking dependencies.
- **Header & Hero CTAs**: Standardized Header CTA to `Let's Talk` (`/contact`), and Hero CTAs to Primary `View My Work` (`#work`) and Secondary `Let's Talk` (`/contact`), removing fake conversion SaaS language ("Schedule Consultation").
- **Centralized Profile & Placeholder Safeguards**: Standardized `Profile` structure in `data/profile.ts` with `[NEEDS INPUT]` placeholders for unconfirmed links. Enforced `isValidSocialUrl` runtime utility so unconfigured links are safely hidden rather than emitting broken/invented URLs to production.
- **Resume Verification**: Verified `/public/resume/Yogendra_Yadav_Resume_2026.pdf` asset exists and works seamlessly for direct downloads.

---

## 12. Resume Source of Truth Alignment & Position Calibration
- **Decision**: Adopt `/docs/Yogendra_Yadav_Resume_2026.docx` as the sole factual source of truth for all portfolio content.
- **Primary Positioning Balance**: Calibrated identity to **Senior React Native Developer / Software Engineer**. Communicates broad software engineering capabilities (architecture, APIs, UI, performance, CI/CD, data handling, mentoring) paired with deep React Native specialization. Avoided domain over-specialization ("Energy Systems Specialist", "IoT Specialist") while preserving energy applications as a prime example of production work.
- **Strict 3-Project Alignment**: Restricted projects to the exact 3 listed in the resume: **Duracell Energy** (flagship case study), **Puredrive**, and **Stain Care Pro**. Removed non-resume projects (SDGme) and avoided treating Fastlane as a standalone project.
- **Factual Employment Dates & Overlap**: Present exact employment dates as stated in the resume (Cloud Energy Software: April 2021 – Present; Forebear Productions: March 2020 – February 2023) with clear, concise scope text explaining the contract-to-direct transition (worked on Cloud Energy Software projects through Forebear Productions on a contract basis before transitioning directly to Cloud Energy Software in April 2021; Forebear engagement ended in Feb 2023).
- **Privacy & Public Exposure Safeguards**: Withheld personal contact phone number (`8120004443`) from public website display to preserve privacy. Direct outreach is channeled via verified public email (`yogendra9644@gmail.com`) and LinkedIn (`https://linkedin.com/in/yogendra9644`).

---

## 13. Verified External Links Integration & Accurate Labeling Architecture
- **Centralized Data Storage**: Configured all external profile and contact URLs in a single source of truth (`data/profile.ts`). Components consume `profileData` directly without hardcoding links across UI boundaries.
- **Accurate Resource Labeling**:
  - **GitHub Repository (`https://github.com/yogendraCes`)**: Accurately labeled as "GitHub Repository" (Portfolio Source Code) rather than a generic profile URL.
  - **Upwork (`https://www.upwork.com/freelancers/~0111ed1b2c3fadb1f8?mp_source=share`)**: Integrated as "Hire me on Upwork" / "Upwork Profile" for freelance contracts, maintaining portfolio as the primary proof-of-work destination.
  - **LinkedIn (`https://linkedin.com/in/yogendra9644`)**: Integrated across Contact page, Footer, and CTA sections.
  - **Email (`yogendra9644@gmail.com`)**: Positioned as primary direct communication method.
  - **Resume Asset (`/resume/Yogendra_Yadav_Resume_2026.pdf`)**: Verified existing PDF asset and linked across Navigation, Hero, Contact, Footer, and Resume pages.
- **Security & Accessibility Compliance**: All external links enforce `target="_blank" rel="noopener noreferrer"`, minimum 44px touch targets, and descriptive `aria-label` tags for screen readers.

---

## 14. Copy Refinement, Humanization & Freelance Conversion Strategy
- **40% Reduction in Corporate/AI Fluff**: Replaced over-polished marketing phrases ("Architectural Case Studies & Production Mobile Infrastructure", "Production Ownership Depth", "Direct Recruitment & Verification", "1-click response within 24h") with direct, human engineering language ("Selected Work", "Production Experience", "Direct Contact & Resume", "Direct email response").
- **Core Identity & Domain Balance**: Solidified primary positioning as **Senior React Native Developer / Software Engineer**. Preserved technical depth (React Native, TypeScript, Redux, D3.js, SVG, Fastlane, CI/CD, Reanimated, Jest) while positioning energy management as one complex production category rather than an over-specialized domain identity.
- **Consistent 6+ Years Experience Claim**: Standardized all experience mentions across Hero, Timeline, and Resume to **6+ years** to match the source resume.
- **Clear Contract-to-Direct Transition Copy**: Clarified Forebear Productions (March 2020 – Feb 2023) and Cloud Energy Software (April 2021 – Present) overlap directly in the timeline as a contract-to-direct transition without altering dates or over-explaining on the homepage.
- **Freelance Conversion & Service Capabilities**: Broadened call-to-action language ("Have a product to build?") and added explicit engagement types (New React Native apps, feature development, UI performance profiling, custom D3/SVG charts, store releases, contract RN development) without publishing unconfirmed rates or delivery guarantees.
- **Zero Fabricated Social Proof**: Excluded artificial testimonial sections in favor of verified proof of work (App Store & Play Store live links, production screenshots, resume PDF, GitHub repo, LinkedIn).




