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
