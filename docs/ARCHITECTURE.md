# Technical Architecture Specification: Personal Developer Portfolio

**Project:** Personal Developer Portfolio for Yogendra Yadav  
**Owner:** Senior React Native Engineer (iOS & Android)  
**Target File Path:** `/docs/ARCHITECTURE.md`  
**Document Status:** Approved Technical Architecture  
**Last Updated:** August 2026  

---

## 1. Architectural Principles & Objectives

The primary objective of this codebase is to present a high-density, authoritative, and performant technical portfolio for **Yogendra Yadav (Senior React Native Engineer)**.

The architecture strictly follows six core principles:

1. **Simplicity Over Overengineering:** No backend databases, authentication services, CMS integrations, complex state management libraries (Redux/Zustand), or unnecessary API layers for what is fundamentally a content-driven technical portfolio.
2. **Strict Content-Presentation Separation:** Portfolio content (projects, achievements, skills, work experience, bio) is fully decoupled from UI presentation components. All data is structured in typed data definitions (`/data/*`), allowing effortless project additions or content updates without altering React components.
3. **Server Components by Default:** Leveraging Next.js App Router React Server Components (RSC) for 95%+ of application code. Client-side JS (`"use client"`) is restricted strictly to interactive elements requiring browser API state (e.g. mobile navigation drawer toggle).
4. **Performance & Zero-Runtime Overhead:** Zero external UI frameworks or heavy client libraries. Styling is driven by Tailwind CSS v4 with custom design tokens from `DESIGN.md`. Icons are lightweight SVG primitives (`lucide-react`), and motion is restricted to accessible micro-interactions (`framer-motion`).
5. **Accessibility (WCAG 2.1 AA/AAA):** Built with native HTML5 semantic elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`), explicit visible focus rings, full keyboard accessibility, skip links, and strict support for `prefers-reduced-motion`.
6. **SEO & Search Visibility:** Full dynamic metadata, OpenGraph cards, Twitter preview cards, XML sitemaps, `robots.txt`, canonical URL mapping, and schema.org JSON-LD structured data (`Person`, `WebSite`, `SoftwareApplication`).

---

## 2. Technology Stack & Justifications

| Layer | Selected Technology | Technical Justification |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16 (App Router)** | Best-in-class React Server Component rendering, automatic route segment optimization, static site generation (SSG) for static routes, and dynamic metadata generation. |
| **Language** | **TypeScript 5** | Strict type safety for project models, case study schemas, skill matrix schemas, and component prop definitions. |
| **Styling** | **Tailwind CSS v4** | Utility-first CSS compiling down to optimized static CSS matching the design tokens (`#08090A` dark canvas, `#D97706` copper accent, typography scales). |
| **Icons** | **Lucide React** | Lightweight, tree-shakeable SVG icons used strictly where functional (external links, arrows, checkmarks, mobile menu toggle). |
| **Animation** | **Framer Motion** | Used sparingly and strictly where justified—specifically for mobile navigation drawer overlay slide transitions and reduced-motion compliant state toggles. |
| **Fonts** | **Geist & Geist Mono** | Loaded via `next/font/google` for zero-CLS font rendering, system fallback resilience, and high-density technical aesthetics. |

---

## 3. Directory Layout & Repository Structure

```
yogendra-portfolio/
├── docs/
│   ├── PROJECT.md          <-- Strategic positioning source of truth
│   ├── DESIGN.md           <-- UX, visual design tokens, & layout spec
│   ├── CONTENT.md          <-- Definitive copy & case study text
│   ├── ARCHITECTURE.md     <-- Technical architecture specification (This document)
│   └── DECISIONS.md        <-- Architectural Decision Records (ADRs)
├── data/
│   ├── profile.ts          <-- Bio, hero headline, contact details, social links
│   ├── projects.ts         <-- Production projects & detailed case study content
│   ├── experience.ts       <-- Work history & technical achievements timeline
│   └── skills.ts           <-- Categorized skill capability matrix & depth details
├── types/
│   └── index.ts            <-- TypeScript interfaces for all data structures
├── components/
│   ├── navigation.tsx      <-- Top nav header & mobile drawer overlay
│   ├── hero.tsx            <-- High-density hero section with stack pills & CTAs
│   ├── section-header.tsx  <-- Reusable section title & eyebrow header
│   ├── project-card.tsx    <-- Technical project card with highlight callout block
│   ├── project-showcase.tsx<-- Featured project grid layout
│   ├── architecture-philosophy.tsx <-- "How I Build" engineering standards section
│   ├── skills-matrix.tsx   <-- Categorized capabilities matrix component
│   ├── experience-timeline.tsx <-- Career work history timeline
│   ├── cta-section.tsx     <-- Dual-channel contact intake block
│   ├── footer.tsx          <-- Brand monogram, status badge, system notice
│   └── case-study/
│       └── case-study-view.tsx <-- Modular 10-section case study layout component
├── app/
│   ├── layout.tsx          <-- Root layout with dark mode, fonts, JSON-LD
│   ├── globals.css         <-- Tailwind v4 import & design system tokens
│   ├── page.tsx            <-- Homepage (High-Density Technical Layout)
│   ├── projects/
│   │   ├── page.tsx        <-- Production Case Studies Index Page
│   │   └── [slug]/
│   │       └── page.tsx    <-- Dynamic Route for Case Study Deep Dives
│   ├── resume/
│   │   └── page.tsx        <-- Interactive Web Resume & PDF Download Page
│   ├── contact/
│   │   └── page.tsx        <-- Dedicated Scoping Intake & Contact Page
│   ├── sitemap.ts          <-- Dynamic XML Sitemap Generator
│   └── robots.ts           <-- Robots.txt Route Handler
├── public/                 <-- Static assets (Resume PDF, favicon, social images)
├── package.json
├── tsconfig.json
└── next.config.ts
```

---

## 4. Routing Strategy & Justification

The application routing architecture supports 5 distinct route URLs:

### Route Matrix:

| Route Path | Page Type | Content Scope & Justification |
| :--- | :--- | :--- |
| `/` | **Server Component** | **Homepage**: Direct introduction, core stack bar, featured production case studies, engineering architecture philosophy ("How I Build"), capabilities matrix, experience timeline, and primary CTA. |
| `/projects` | **Server Component** | **Case Studies Index**: Comprehensive overview of all production mobile projects (Duracell/Puredrive Energy Flow, Fastlane DevOps Pipeline, SDGme Sustainability App). Allows recruiters and engineering managers to evaluate all projects in one place. |
| `/projects/[slug]` | **Server Component (SSG)** | **Case Study Detail**: Modular 10-section technical deep dive into individual engineering case studies (`energy-flow`, `release-ci-cd`, `sdgme`). Pre-rendered at build time using `generateStaticParams`. |
| `/resume` | **Server Component** | **Web Resume & Download Hub**: Dedicated web view of Yogendra's professional background, architecture achievements, and core stack matrix with a prominent PDF resume download trigger. |
| `/contact` | **Server Component** | **Technical Scoping & Contact Page**: Dual-channel contact page addressing Founders/CTOs (scoping & project inquiry) and Recruiters (direct email & resume). |

---

## 5. Data Modeling & Content Separation

To ensure that new projects or work experiences can be added without altering presentation code, all content is strictly typed in `types/index.ts` and managed in `/data/*.ts`.

### Data Schema Overview:

```typescript
// Project Data Model Schema
export interface TechnicalHighlight {
  label: string;
  description: string;
}

export interface CaseStudySection {
  id: string;
  title: string;
  content: string[];
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  summary: string;
  primaryStack: string[];
  fullStack: string[];
  role: string;
  company: string;
  period: string;
  featured: boolean;
  technicalHighlight: TechnicalHighlight;
  overview: string;
  challenges: string[];
  technicalApproach: string[];
  outcome: string[];
  sections: CaseStudySection[];
}
```

---

## 6. UI Component Architecture

Components follow atomic, modular design principles:

- **Server Components (Default):**
  - `Hero`: Renders header copy, stack pills, and static action buttons.
  - `ProjectCard`: Renders dark elevated card, technical highlight callout (`.arch-block`), and stack pills.
  - `ArchitecturePhilosophy`: Renders engineering principles (Reanimated 60fps, RTK Query caching, Fastlane CI/CD, AppState listeners).
  - `SkillsMatrix`: Renders categorized technical matrix with production ownership depth.
  - `ExperienceTimeline`: Renders work history entries for Cloud Energy Software and Forebear Productions.
  - `CaseStudyView`: Modular case study layout rendering 10 technical sections with dark code blocks.

- **Client Components (`"use client"`):**
  - `Navigation`: Manages mobile menu open/close drawer state, backdrop blur, keyboard ESC listener, and focus trapping.

---

## 7. Design System & CSS Tokens

The styling architecture leverages CSS variables defined in `app/globals.css`, adhering strictly to `DESIGN.md`:

```css
:root {
  --bg-canvas: #08090A;
  --bg-surface: #0F1115;
  --bg-surface-elevated: #16181D;
  --bg-surface-subtle: #1C1F26;

  --text-primary: #F3F4F6;
  --text-secondary: #9CA3AF;
  --text-tertiary: #6B7280;

  --accent-copper: #D97706;
  --accent-copper-hover: #F59E0B;
  --accent-copper-muted: rgba(217, 119, 6, 0.12);
  --accent-copper-border: rgba(217, 119, 6, 0.35);

  --border-subtle: rgba(255, 255, 255, 0.08);
  --border-strong: rgba(255, 255, 255, 0.16);
  --border-accent: rgba(217, 119, 6, 0.50);
}
```

---

## 8. SEO, OpenGraph & Structured Data

1. **Metadata API:** Global metadata in `app/layout.tsx` combined with per-page `generateMetadata()` for dynamic page titles, meta descriptions, and canonical URLs.
2. **OpenGraph & Twitter Cards:** Configured for high-contrast dark preview image presentation across social sharing platforms.
3. **Dynamic XML Sitemap (`app/sitemap.ts`):** Automatically indexes all static routes (`/`, `/projects`, `/resume`, `/contact`) and dynamic case study routes (`/projects/[slug]`).
4. **Structured Data (JSON-LD Schema):** Embedded in `app/layout.tsx` using `schema.org/Person` schema:
   ```json
   {
     "@context": "https://schema.org",
     "@type": "Person",
     "name": "Yogendra Yadav",
     "jobTitle": "Senior React Native Engineer",
     "worksFor": {
       "@type": "Organization",
       "name": "Cloud Energy Software"
     },
     "knowsAbout": [
       "React Native", "TypeScript", "Redux Toolkit", "RTK Query", 
       "D3.js", "React Native SVG", "Fastlane", "iOS", "Android"
     ]
   }
   ```

---

## 9. Performance Budget & Optimization

- **Zero Unnecessary JS:** Server Components render HTML static markup on the server.
- **Font Optimization:** `next/font/google` for `Geist` and `Geist Mono` eliminates render-blocking font downloads.
- **Static Generation:** All case study pages pre-rendered at build time with `generateStaticParams()`.
- **CSS Efficiency:** Tailwind CSS v4 extracts only used classes into a single CSS file.

---

## 10. Accessibility (WCAG 2.1 AA/AAA)

- **Color Contrast:** Background `#08090A` with text `#F3F4F6` provides a contrast ratio of `16.8:1` (exceeds AAA requirement of `7:1`).
- **Focus Rings:** Explicit 2px copper outline ring (`focus-visible:ring-2 focus-visible:ring-[#D97706]`) with 2px offset.
- **Skip to Content:** Skip navigation link (`[Skip to Content]`) positioned at top of page for screen readers and keyboard users.
- **Reduced Motion:** Tailwind `motion-reduce` utilities and Framer Motion reduced motion settings disable transitions when active.
