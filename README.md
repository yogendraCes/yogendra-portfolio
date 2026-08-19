# Yogendra Yadav — Senior React Native Engineer Portfolio

Production developer portfolio and technical case studies for **Yogendra Yadav**, a Senior React Native & Mobile Infrastructure Engineer specializing in cross-platform iOS and Android applications, real-time data telemetry, interactive SVG/D3 graphics, state architecture, and Fastlane CI/CD release pipelines.

---

## Technical Stack

- **Framework:** Next.js 16 (App Router, React Server Components)
- **Language:** TypeScript 5 (Strict Mode)
- **UI & Styling:** React 19, Tailwind CSS v4, Vanilla CSS Variables (`globals.css`)
- **Icons:** Lucide React
- **Typography:** Geist & Geist Mono (`next/font/google`)
- **Graphics & Visualizations:** Micro-grid CSS textures, SVG SMIL animations, D3.js path generators
- **SEO & Metadata:** Schema.org JSON-LD (`Person`, `WebSite`, `TechArticle`), OpenGraph preview cards, Twitter cards, dynamic `sitemap.xml`, and `robots.txt`

---

## Project Structure

```
yogendra-portfolio/
├── docs/                   # Architectural & strategic documentation source of truth
│   ├── PROJECT.md          # Positioning & strategy
│   ├── DESIGN.md           # Visual design tokens & responsive grid specification
│   ├── CONTENT.md          # Factually defensible content & copy
│   ├── ARCHITECTURE.md     # Technical architecture specification
│   └── DECISIONS.md        # Production engineering decisions & ADR log
├── data/                   # Decoupled content datasets & typed schema definitions
│   ├── profile.ts          # Profile bio, social handles, and core stack matrix
│   ├── projects.ts         # Case study details & architectural highlights
│   ├── experience.ts       # Verified work history timeline
│   └── skills.ts           # Technical capability matrix
├── types/                  # TypeScript interfaces and model definitions
│   └── index.ts
├── components/             # Reusable server & client UI components
│   ├── navigation.tsx      # Top nav bar & mobile sheet drawer
│   ├── hero.tsx            # High-density introduction hero & CTAs
│   ├── project-card.tsx    # Production case study card component
│   ├── project-showcase.tsx# Featured production work grid
│   ├── energy-flow-visualizer.tsx  # Live energy telemetry flow visualizer
│   ├── pipeline-visualizer.tsx     # Fastlane CI/CD build lane visualizer
│   ├── architecture-philosophy.tsx # "How I Build" engineering standards
│   ├── skills-matrix.tsx   # Categorized technical capabilities grid
│   ├── experience-timeline.tsx    # Career timeline & deliverables checklist
│   ├── cta-section.tsx     # Dual-channel project scoping intake
│   ├── footer.tsx          # Brand monogram, status badge, system notice
│   └── case-study/
│       └── case-study-view.tsx    # 10-section case study layout component
├── app/                    # Next.js App Router routes & layout
│   ├── layout.tsx          # Root layout with fonts, JSON-LD, dark mode
│   ├── globals.css         # Tailwind v4 import & design system tokens
│   ├── page.tsx            # High-density technical homepage
│   ├── projects/
│   │   ├── page.tsx        # Case studies index page
│   │   └── [slug]/
│   │       └── page.tsx    # Dynamic route for case study deep dives
│   ├── resume/
│   │   └── page.tsx        # Web resume hub & PDF download page
│   ├── contact/
│   │   └── page.tsx        # Dedicated scoping intake & contact page
│   ├── sitemap.ts          # Dynamic XML sitemap generator
│   └── robots.ts           # Robots.txt route handler
├── public/                 # Static assets (Resume PDF, favicon, og-image)
│   ├── Yogendra_Yadav_React_Native_Resume.pdf
│   └── og-image.png
├── package.json
├── next.config.ts          # Production security headers & framework configuration
└── tsconfig.json
```

---

## Local Development

### Prerequisites
- Node.js 18.x or 20.x+
- npm 9.x+

### Setup & Run
```bash
# Clone the repository
git clone https://github.com/yogendra9644/yogendra-portfolio.git
cd yogendra-portfolio

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Production Build & Verification

To verify production compilation, linting, and static page generation locally:

```bash
# Run ESLint check
npm run lint

# Run TypeScript typecheck
npx tsc --noEmit

# Run Next.js production build
npm run build

# Start production preview server locally
npm run start
```

---

## Deployment (Vercel)

This application is optimized for 100% Static Site Generation (SSG) on **Vercel**.

### Automatic Deployment via Vercel GitHub Integration
1. Push your repository to GitHub: `github.com/yogendra9644/yogendra-portfolio`.
2. Import the project into your Vercel Dashboard.
3. Vercel will automatically detect **Next.js** and configure:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
4. Click **Deploy**.

### Manual Deployment via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy to preview environment
vercel

# Deploy to production
vercel --prod
```

No environment variables are required for deployment.
