---
name: Yogendra Yadav Portfolio Design System
description: Precision technical dark system for senior mobile systems engineer portfolio
colors:
  canvas: "#08090A"
  surface: "#0F1115"
  surface-elevated: "#16181D"
  surface-subtle: "#1C1F26"
  text-primary: "#F3F4F6"
  text-secondary: "#9CA3AF"
  text-tertiary: "#6B7280"
  text-disabled: "#4B5563"
  primary: "#D97706"
  primary-hover: "#F59E0B"
  primary-muted: "rgba(217, 119, 6, 0.12)"
  primary-border: "rgba(217, 119, 6, 0.35)"
  status-success: "#10B981"
  status-warning: "#F59E0B"
  status-info: "#3B82F6"
  border-subtle: "rgba(255, 255, 255, 0.08)"
  border-strong: "rgba(255, 255, 255, 0.16)"
  border-accent: "rgba(217, 119, 6, 0.50)"
  surface-border: "#2D323E"
typography:
  display:
    fontFamily: "var(--font-geist-sans), -apple-system, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "var(--font-geist-sans), -apple-system, sans-serif"
    fontSize: "clamp(1.5rem, 3vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "var(--font-geist-sans), -apple-system, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "var(--font-geist-sans), -apple-system, sans-serif"
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
