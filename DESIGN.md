---
name: Yogendra Yadav Portfolio Design System
description: Precision On-Device light system for senior mobile systems engineer portfolio
colors:
  bg-base: "#F3F4F1"
  ink-primary: "#14161A"
  ink-secondary: "#5B5F66"
  surface: "#FFFFFF"
  border-subtle: "#E4E5E1"
  accent-interactive: "#2F6FED"
  accent-live: "#3FAE64"
  canvas: "#F3F4F1"
  text-primary: "#14161A"
  text-secondary: "#5B5F66"
  primary: "#2F6FED"
  primary-hover: "#2256BD"
  status-success: "#3FAE64"
typography:
  display:
    fontFamily: "'General Sans', -apple-system, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'General Sans', -apple-system, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "'General Sans', -apple-system, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "var(--font-ibm-plex-sans), -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  caption:
    fontFamily: "var(--font-geist-sans), -apple-system, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.02em"
  label:
    fontFamily: "var(--font-geist-mono), Menlo, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.05em"
  micro:
    fontFamily: "var(--font-geist-mono), Menlo, monospace"
    fontSize: "0.625rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.05em"
  pico:
    fontFamily: "var(--font-geist-mono), Menlo, monospace"
    fontSize: "9px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.04em"
  nano:
    fontFamily: "var(--font-geist-mono), Menlo, monospace"
    fontSize: "8px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.04em"
rounded:
  xs: "4px"
  sm: "6px"
  base: "8px"
  md: "10px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.surface-subtle}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.sm}"
    padding: "10px 20px"
---

# Design System

<!-- impeccable:design-schema 1 -->

## Overview
A technical, high-craft dark mode design system built specifically for a Senior React Native & Mobile Systems Engineer. The aesthetic prioritizes restrained warmth through amber/copper accents, deep obsidian layered surfaces, crisp monospace telemetry badges, and high-readability typography.

## Colors
- **Canvas (`#08090A`)**: Ground level deep obsidian canvas for maximum contrast and battery efficiency.
- **Surfaces (`#0F1115`, `#16181D`, `#1C1F26`)**: Tonal hierarchy layering content cleanly without harsh bounding boxes.
- **Copper / Amber Accent (`#D97706`, `#F59E0B`)**: Signature accent color conveying energy, engineering precision, and warmth. Replaces generic AI purple/blue gradients.
- **Text Hierarchy**: Primary (`#F3F4F6`), Secondary (`#9CA3AF`), Tertiary (`#6B7280`). Meets or exceeds WCAG AA contrast against dark backgrounds.
- **Status Indicators**: Success Green (`#10B981`), Warning Amber (`#F59E0B`), Info Blue (`#3B82F6`).

## Typography
- **Primary Interface Font**: Geist Sans (`var(--font-geist-sans)`), providing geometric clarity, neutral humanist curves, and tight tabular figures.
- **Code & Telemetry Font**: Geist Mono (`var(--font-geist-mono)`), used for technical tags, architectural specs, git hashes, and metrics.
- **Scale**: Display (`clamp(2.25rem, 5vw, 3.75rem)`), Headline (`clamp(1.5rem, 3vw, 2.25rem)`), Title (`1.25rem`), Body (`1rem`), and Micro/Label (`0.8125rem` uppercase tracked).

## Layout
- **Container**: Max width constrained to `72rem` (`max-w-6xl`) with dynamic responsive padding (`px-4 sm:px-6 lg:px-8`).
- **Section Spacing**: Generous vertical rhythm (`py-16 sm:py-24`) to allow technical diagrams and telemetry callouts breathing room.
- **Grid Systems**: 12-column responsive layout transitioning gracefully from 1-column mobile up to 3-column desktop arrangements.

## Elevation & Depth
- **Tonal Layering Over Box Shadows**: Hierarchy is established through step changes in surface lightness (`#08090A` → `#0F1115` → `#16181D`) paired with hairline borders (`rgba(255, 255, 255, 0.08)`).
- **Subtle Glows**: Strategic radial gradients at key focal points (Hero backdrop) at very low opacity (<15%) to prevent visual fatigue.
- **Glassmorphism**: Crisp backdrop blur (`blur(16px)`) used solely for sticky navigation and floating modals.

## Shapes
- **Corner Radii**:
  - `rounded-md` (`6px - 8px`): Buttons, technical code tags, badges.
  - `rounded-lg` / `rounded-xl` (`12px - 16px`): Project cards, architecture diagrams, telemetry containers.
  - `rounded-full`: Status pills, avatar borders.
- **Form Language**: Clean, sharp, technical borders with deliberate padding. No bubbly or overly rounded cartoonish shapes.

## Components
- **Primary Action Buttons**: Copper fill with white text, subtle hover lift, and active compression feedback.
- **Secondary / Outline Buttons**: Subtle dark surface with fine white hairline border and hover brightness boost.
- **Architecture Blocks**: Monospace code headers, interactive tabs, animated signal pulses, and clear data-flow indicators.
- **Metrics Pills**: High-contrast numeral with muted label in monospace font.

## Do's and Don'ts
- **DO**: Use monospace typography for all engineering metrics, file paths, versions, and telemetry numbers.
- **DO**: Maintain 44x44px touch targets on mobile touch devices.
- **DO**: Use subtle micro-interactions with short duration (`150ms - 250ms`) and natural cubic-bezier curves.
- **DON'T**: Use purple-to-blue AI gradients.
- **DON'T**: Nest cards inside cards with redundant heavy borders.
- **DON'T**: Use generic placeholder imagery or ungrounded statistics.
