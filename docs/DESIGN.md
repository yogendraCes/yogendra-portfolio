# Technical UX & Visual Design System Specification

**Project:** Personal Developer Portfolio for Yogendra Yadav  
**Owner:** Senior React Native & Mobile Infrastructure Engineer  
**Document Status:** Approved Design Architecture  
**Target File Path:** `/docs/DESIGN.md`  
**Last Updated:** August 2026  

---

## 1. Visual Direction & Design Philosophy

### Core Aesthetic Identity
The portfolio visual design reflects the identity of a **Senior React Native Engineer** specializing in complex, high-stakes mobile applications (Energy Management Systems, IoT live data streams, SVG/D3 charts, React Native Reanimated, RTK Query state architecture, and Fastlane CI/CD automation).

The visual language communicates:
- **Premium:** Refined dark canvas, precise typography, generous spatial layout, editorial restraint.
- **Technical:** High information density, explicit architecture breakdowns, code-level readability, performance metrics.
- **Confident:** Direct positioning without artificial hype, buzzwords, or flashy visual gimmicks.
- **Modern & Minimal:** Clean grid systems, sharp structural alignment, zero unnecessary ornamentation.
- **Product-Focused:** Prioritizing mobile application UX, real-world utility, user state flows, and store production readiness.

### Textures & Depth Strategy
- **Background Canvas:** Deep, near-black matte background (`#08090A`) that reduces visual fatigue and provides high contrast for data visualization graphs.
- **Micro-Grid Texture:** A subtle, low-opacity CSS vector grid pattern (`rgba(255, 255, 255, 0.03)`) rendered on main structural backdrops to reinforce technical precision.
- **Surface Elevation:** Subtle tonal layering (`#0F1115` for cards, `#16181D` for elevated overlays/popovers) paired with crisp 1px borders (`rgba(255, 255, 255, 0.08)`).
- **Restrained Accent:** Warm copper/amber accent (`#D97706` / `#E06D53`) used sparingly for status indicators, active states, key CTAs, and interactive focal points.

### Static-First Excellence
The entire visual hierarchy must deliver an exceptional experience **without relying on CSS/JS animations**. Micro-animations enhance interaction feedback, but static layout composition, typography hierarchy, contrast, and alignment form the foundation of visual quality.

---

## 2. Color System & Design Tokens

### Color Palette Architecture
The palette relies on an HSL/HEX token scale designed for dark-mode readability (WCAG AAA compliant for body text, WCAG AA for secondary elements).

```css
:root {
  /* Canvas & Background Surfaces */
  --bg-canvas: #08090A;           /* Primary app background (near-black) */
  --bg-surface: #0F1115;          /* Card & container background */
  --bg-surface-elevated: #16181D; /* Hover states, dropdowns, modal sheets */
  --bg-surface-subtle: #1C1F26;   /* Code blocks & inline callout backgrounds */

  /* Primary Typography Colors */
  --text-primary: #F3F4F6;        /* High-contrast off-white (95% brightness) */
  --text-secondary: #9CA3AF;      /* Muted neutral grey for subheadings & meta */
  --text-tertiary: #6B7280;       /* Dimmed text for labels, captions, metadata */
  --text-disabled: #4B5563;       /* De-emphasized disabled text states */

  /* Brand & Accent Palette (Restrained Copper / Amber) */
  --accent-copper: #D97706;        /* Primary copper accent (Hex #D97706 / HSL 37, 93%, 44%) */
  --accent-copper-hover: #F59E0B;  /* Hover state bright copper */
  --accent-copper-muted: rgba(217, 119, 6, 0.12); /* Subtle pill & badge background */
  --accent-copper-border: rgba(217, 119, 6, 0.35);/* Focused border ring & active outlines */

  /* Functional Status Colors */
  --status-success: #10B981;      /* Live app store build status / online indicator */
  --status-warning: #F59E0B;      /* Warnings / pending inputs */
  --status-info: #3B82F6;         /* Architectural annotations */

  /* Structural Borders & Separators */
  --border-subtle: rgba(255, 255, 255, 0.08); /* 1px micro card borders */
  --border-strong: rgba(255, 255, 255, 0.16); /* Section dividers & active cards */
  --border-accent: rgba(217, 119, 6, 0.50);  /* Accent borders */

  /* Overlays & Shadows */
  --overlay-backdrop: rgba(8, 9, 10, 0.85);  /* Mobile nav menu backdrop */
  --shadow-elevation-1: 0 4px 20px rgba(0, 0, 0, 0.50);
  --shadow-elevation-2: 0 12px 36px rgba(0, 0, 0, 0.75);
}
```

---

## 3. Typography System

### Font Families
- **Primary UI & Editorial Sans:** `Inter`, `Geist Sans`, or system `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto`. Provides exceptional legibility across mobile screens and desktop monitors.
- **Technical & Code Monospace:** `JetBrains Mono`, `Geist Mono`, or `Fira Code, SFMono-Regular, Consolas`. Used for tech stack pills, code snippets, architecture metrics, and release version tags.

### Fluid Responsive Typography Scale
Typography scales dynamically using CSS `clamp()` to ensure proportional sizing across small phones, tablets, and large desktop screens without awkward breakpoint jumps.

| Scale Token | Font Size (Min → Preferred → Max) | Line Height | Weight | Usage |
| :--- | :--- | :--- | :--- | :--- |
| `--font-display` | `clamp(2.25rem, 5vw, 4.00rem)` (36px - 64px) | `1.1` | 700 (Bold) | Hero headline, major section impact statements |
| `--font-h1` | `clamp(1.75rem, 3.5vw, 2.75rem)` (28px - 44px) | `1.2` | 600 (SemiBold) | Page titles, Case study main titles |
| `--font-h2` | `clamp(1.35rem, 2.5vw, 1.85rem)` (21.6px - 29.6px) | `1.3` | 600 (SemiBold) | Section headers (Selected Work, Experience) |
| `--font-h3` | `clamp(1.10rem, 1.8vw, 1.35rem)` (17.6px - 21.6px) | `1.4` | 600 (SemiBold) | Project titles, Case study section headers |
| `--font-h4` | `clamp(0.95rem, 1.2vw, 1.10rem)` (15.2px - 17.6px) | `1.4` | 500 (Medium) | Card subheadings, capability category titles |
| `--font-body-l` | `clamp(1.00rem, 1.25vw, 1.15rem)` (16px - 18.4px) | `1.6` | 400 (Regular) | Lead intro paragraphs, summary text |
| `--font-body-m` | `clamp(0.875rem, 1vw, 1.00rem)` (14px - 16px) | `1.6` | 400 (Regular) | Default body text, case study narrative |
| `--font-body-s` | `clamp(0.75rem, 0.9vw, 0.875rem)` (12px - 14px) | `1.5` | 400 (Regular) | Captions, secondary metadata, footer links |
| `--font-mono` | `clamp(0.80rem, 0.95vw, 0.90rem)` (12.8px - 14.4px) | `1.5` | 500 (Medium) | Stack badges, code annotations, metrics |

---

## 4. Spacing & Spatial Grid System

### Spatial Tokens (4px / 8px Base Grid)
A strict geometric spatial system ensures visual harmony and alignment across all layouts.

```css
:root {
  --space-1:  0.25rem;  /* 4px  - Micro gap, badge padding */
  --space-2:  0.50rem;  /* 8px  - Icon inline gaps, tight list spacing */
  --space-3:  0.75rem;  /* 12px - Button vertical padding, inner card margins */
  --space-4:  1.00rem;  /* 16px - Default card padding, grid gap (mobile) */
  --space-6:  1.50rem;  /* 24px - Standard card padding, grid gap (desktop) */
  --space-8:  2.00rem;  /* 32px - Section internal spacing */
  --space-12: 3.00rem;  /* 48px - Major component block margins */
  --space-16: 4.00rem;  /* 64px - Section vertical padding (mobile/tablet) */
  --space-24: 6.00rem;  /* 96px - Section vertical padding (desktop) */
  --space-32: 8.00rem;  /* 128px - Major page boundary spacing */
}
```

### Layout Max-Width Containers
- **Global Page Container:** `max-width: 1200px` (with `padding: 0 var(--space-6)`).
- **Hero & Content Focus Block:** `max-width: 960px`.
- **Editorial Case Study Column:** `max-width: 720px` (optimized for 65–75 characters per line readability).

---

## 5. Component Specifications

### 5.1 Buttons & Action Triggers
Buttons use direct structural hierarchy with clear hover and focus ring states.

- **Primary Button (`.btn-primary`):**
  - Background: `var(--accent-copper)` (`#D97706`).
  - Text: `#FFFFFF` (Bold, 500 weight).
  - Border: None.
  - Hover: `var(--accent-copper-hover)` (`#F59E0B`) with `transform: translateY(-1px)`.
  - Active: `transform: translateY(0)`.
  - Touch Target: Minimum `44px` height (Mobile).
- **Secondary Button (`.btn-secondary`):**
  - Background: `var(--bg-surface-elevated)` (`#16181D`).
  - Text: `var(--text-primary)` (`#F3F4F6`).
  - Border: `1px solid var(--border-strong)` (`rgba(255, 255, 255, 0.16)`).
  - Hover: `border-color: var(--accent-copper-border); background: var(--bg-surface-subtle)`.
- **Ghost Button / Text CTA (`.btn-ghost`):**
  - Background: Transparent.
  - Text: `var(--accent-copper)`.
  - Icon: Inline right arrow `→` with subtle 2px hover shift.

### 5.2 Technical Stack Badges & Metrics
- **Stack Badge (`.badge-tech`):**
  - Font: `var(--font-mono)`.
  - Background: `var(--bg-surface-subtle)`.
  - Border: `1px solid var(--border-subtle)`.
  - Color: `var(--text-secondary)`.
  - Border Radius: `4px` (Sharp, clean technical feel).
- **Status Indicator Badge (`.badge-status`):**
  - Displays live app status (e.g., `● Available for Select Consulting`).
  - Dot indicator animated with a subtle 2-second opacity pulse (disabled if reduced motion active).

### 5.3 Technical Architecture Block (`.arch-block`)
- Structured code/diagram display box with dark background (`#0B0D10`), subtle 1px border, top file path tab, and syntax-highlighted TS/RN configuration or system flow metadata.

---

## 6. Navigation System (Desktop & Mobile Patterns)

### 6.1 Desktop Navigation Pattern (Laptops & Desktops: `>=1024px`)
- **Structure:** Sticky top navigation bar with `backdrop-filter: blur(12px)` and subtle bottom border (`1px solid var(--border-subtle)`).
- **Layout:**
  - Left: Brand / Monogram (`YOGENDRA YADAV // REACT NATIVE ENGINEER`).
  - Center: Nav links (`Work`, `About`, `Experience`, `Contact`).
  - Right: Quick CTA (`[Download Resume]` / `[Schedule Scoping]`).
- **Interactive State:** Hover on nav items triggers a subtle copper bottom accent indicator (`2px` height). Active route highlighted with `var(--text-primary)` and copper dot indicator.

### 6.2 Mobile Navigation Pattern (Small & Large Phones: `<1024px`)
Mobile navigation is designed specifically for **one-handed thumb navigation** without complex hamburger menus.

- **Header Bar:** Minimal sticky header featuring name logo on left and a clean `[Menu]` toggle trigger on right (Minimum touch area: `48px x 48px`).
- **Mobile Menu Overlay (Bottom-Sheet / Full-Screen Drawer):**
  - Tapping `[Menu]` opens a sleek slide-up sheet overlay (`var(--bg-surface-elevated)`).
  - Navigation links displayed in high-contrast large display font (`var(--font-h2)`: 28px) with generous touch padding (`16px 0`).
  - Focus is trapped inside the menu while open; pressing `ESC` or tapping backdrop closes the drawer.
  - Direct quick action buttons (`[Schedule Consultation]`, `[Email Directly]`) pinned to the bottom of the drawer within easy thumb reach.

---

## 7. Homepage Information Hierarchy & Layout

The homepage follows a logical technical narrative designed for Founders, Recruiters, and Engineering Managers:

```
┌─────────────────────────────────────────────────────────┐
│ 1. HERO SECTION                                         │
│    - Identity Statement & Core Credentials               │
│    - Stack Pills (RN, TS, RTK Query, Fastlane)          │
│    - Primary CTAs ([View Case Studies] / [Scoping])     │
├─────────────────────────────────────────────────────────┤
│ 2. SELECTED PRODUCTION WORK (Featured Projects)         │
│    - High-density cards featuring engineering highlights│
│    - Live energy flow graphs & mobile DevOps pipelines  │
├─────────────────────────────────────────────────────────┤
│ 3. ENGINEERING ARCHITECTURE & PHILOSOPHY                │
│    - "How I Build": Threading, Reanimated 60fps,       │
│      offline caching (RTK Query), Fastlane CI/CD        │
├─────────────────────────────────────────────────────────┤
│ 4. CAPABILITIES & TECHNICAL MATRIX                      │
│    - Categorized breakdown: Mobile Core, State & API,   │
│      Graphics & Viz, Native & DevOps                    │
├─────────────────────────────────────────────────────────┤
│ 5. PROFESSIONAL EXPERIENCE TIMELINE                     │
│    - Proven track record, roles, App Store shipping      │
├─────────────────────────────────────────────────────────┤
│ 6. DIRECT CONTACT & SCOPING INTAKE                      │
│    - Project intake form, email mailto, resume PDF      │
├─────────────────────────────────────────────────────────┤
│ 7. FOOTER                                               │
│    - Copyright, status badge, system metadata           │
└─────────────────────────────────────────────────────────┘
```

---

## 8. Project Presentation Layout

Projects are presented as **high-density technical cards** on the homepage and project index.

### Project Card Layout Schema:
```
┌─────────────────────────────────────────────────────────┐
│ [BADGE: Energy Systems]            [TAG: iOS & Android] │
│                                                         │
│ Title: Real-Time Commercial Energy Flow App             │
│                                                         │
│ Summary: Production mobile app handling live solar,     │
│ battery, grid, and household energy data flows.         │
│                                                         │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ TECHNICAL HIGHLIGHT                                 │ │
│ │ Optimized JS thread frame rates to 60fps using      │ │
│ │ Reanimated 3 & Gesture Handler for dynamic SVG      │ │
│ │ energy node flow rendering.                         │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ Tech Stack: React Native • TS • RTK Query • SVG • D3    │
│                                                         │
│ Link: [Read Architectural Case Study →]                │
└─────────────────────────────────────────────────────────┘
```

---

## 9. Modular Case-Study Specification

Case studies are structured modularly. If specific information is confidential or unavailable, sections can be gracefully omitted without breaking layout integrity.

### Modular Section Framework:

1. **Header Block (Hero):**
   - Project Title, Subtitle, Key Metadata Bar (Role, Timeline, Deliverables, Platform Target).
2. **Overview:**
   - Concise product summary and operational context.
3. **My Role & Key Responsibilities:**
   - Specific ownership scope (e.g., Lead Mobile Engineer, Architecture, CI/CD pipeline).
4. **The Engineering Challenge:**
   - Complex technical hurdles faced (e.g., high-frequency WebSocket state clogging JS thread).
5. **Architecture & Technical Approach:**
   - Detailed breakdown of state management (RTK Query caching), folder architecture, and offline resiliency.
6. **UI & Data Visualization Engineering:**
   - Explanation of graph/chart rendering, React Native Reanimated UI-thread executions, and custom SVG nodes.
7. **Performance & Optimization:**
   - Specific profiling steps, memory leak prevention, and frame-rate optimization strategies.
8. **Results & Production Impact:**
   - Verified outcome metrics, store deployment success, build time reductions.
9. **Full Technology Stack Matrix:**
   - Comprehensive list of tools, libraries, native dependencies, and DevOps services.

---

## 10. Responsive Behavior Across 5 Breakpoints

The responsive design system adapts layout structures across 5 specific breakpoints without compromising data density.

| Breakpoint Target | Width Range | Layout Transformations |
| :--- | :--- | :--- |
| **1. Small Phones** | `< 375px` | Single-column stack. Font sizes step down 10%. Case study meta stacked vertically. Stack badges wrap tightly. |
| **2. Large Phones** | `375px - 639px` | Single-column stack. Full-width touch targets (48px height). Mobile drawer navigation active. 16px page margins. |
| **3. Tablets** | `640px - 1023px` | 2-column project grid. Capability matrix transforms into 2x2 layout. Desktop header nav optional; slide-out drawer optimized. |
| **4. Laptops** | `1024px - 1439px` | 2-column featured project layout. 4-column capability matrix. Full sticky top nav with inline CTAs. 24px margins. |
| **5. Large Desktops** | `>= 1440px` | 3-column project layout options. Container max-width constrained to `1200px` centered to prevent extreme line lengths. |

---

## 11. Motion Guidelines & Reduced Motion

### Restrained Motion Principles
- Motion is strictly functional—used only to communicate state transitions, drawer navigation, and component expansion.
- Hover duration: `150ms` to `200ms` with `cubic-bezier(0.16, 1, 0.3, 1)` easing for crisp, instant feedback.
- Page transition: Subtle fade-in (`150ms opacity 0 → 1`) without jarring directional slide effects.

### Reduced Motion Specifications (`prefers-reduced-motion: reduce`)
When users enable reduced-motion settings in their OS:
- All transform animations, translation offsets, and slide transitions are disabled (`transition: none !important; animation: none !important;`).
- Hover states transition instantly via color contrast change.
- Status badge pulse animation freezes into a static green dot.

---

## 12. Accessibility Guidelines (WCAG 2.1 AA / AAA Compliance)

- **Color Contrast:** Body text (`#F3F4F6` on `#08090A`) achieves a contrast ratio of `16.8:1` (exceeding WCAG AAA `7:1`). Secondary text (`#9CA3AF`) achieves `6.2:1` (exceeding WCAG AA `4.5:1`).
- **Focus Indicators:** Interactive elements feature an explicit high-contrast focus ring (`2px solid var(--accent-copper)` with `2px offset`) when navigated via keyboard.
- **Keyboard Navigation:** Logical tab order (`tabindex="0"`) across header links, project cards, and intake forms. Skip navigation link provided (`[Skip to Content]`).
- **Touch Target Sizes:** All mobile touch targets (buttons, menu triggers, card links) meet or exceed `44px x 44px` (Apple Human Interface Guidelines & Google Material recommendation).
- **Semantic Structure:** Native HTML5 semantic landmark elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`) with explicit `aria-label` tags for screen readers.

---

## 13. Design Anti-Patterns Banned

To maintain an authentic, senior engineering positioning, the following design trends are explicitly prohibited:

| Banned Anti-Pattern | Rationale for Exclusion |
| :--- | :--- |
| ❌ **Glowing Neon Text / Heavy Neon Gradients** | Looks like a Web3 token site or gaming landing page; undermines serious enterprise positioning. |
| ❌ **Skill Percentage Bars (e.g., "React Native 95%")** | Arbitrary, unscientific, and typical of junior/bootcamp portfolios. Senior skill is demonstrated via case studies. |
| ❌ **Fake Terminal / CLI Mockups** | Cliché developer gimmick that forces users to read text inside low-legibility terminal windows. |
| ❌ **3D Particle Canvas / Interactive Globes** | Drains mobile CPU/battery, degrades frame rates, and distracts from core technical case studies. |
| ❌ **Custom Giant Mouse Cursors** | Degrades standard browser accessibility and feel laggy on lower-spec hardware. |
| ❌ **Excessive Glassmorphism / Heavy Blurs** | Causes GPU rendering lag on mobile devices and decreases text legibility against dark backgrounds. |
| ❌ **Scroll-Jacking / Forced Horizontal Scrolling** | Breaks standard browser scrolling mechanics, frustrating users and mobile touch gestures. |
| ❌ **Generic Fluff & Banned Buzzwords** | Avoids phrases like "passionate coder" or "turning ideas into reality" in favor of concrete engineering facts. |

---

## 14. Document Synchronization Note

This specification serves as the design source of truth for the Yogendra Yadav developer portfolio project and is mirrored across `/docs/DESIGN.md` and `/yogendra-portfolio/docs/DESIGN.md`.
