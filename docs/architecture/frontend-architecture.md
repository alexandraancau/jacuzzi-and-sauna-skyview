# Frontend Architecture

## Purpose

The frontend architecture defines how the Skyview website is organized, built and maintained.

The goal is to keep the codebase:

- Simple
- Scalable
- Maintainable
- Predictable
- Easy to onboard

Every technical decision should support the product experience—not complicate it.

---

# Technology Stack

## Framework

React 19

---

## Language

TypeScript

---

## Build Tool

Vite

---

## Routing

React Router

---

## Styling

Emotion

---

## Testing

Playwright

---

## Version Control

Git + GitHub

---

## Deployment

GitHub Pages (initially)

Future:

- Vercel
- Netlify
- Custom hosting

---

# Project Structure

src/

├── app/
│
├── assets/
│
├── components/
│
├── features/
│
├── layouts/
│
├── pages/
│
├── routes/
│
├── styles/
│
├── types/
│
├── utils/
│
├── hooks/
│
├── constants/
│
├── services/
│
├── data/
│
├── App.tsx
│
└── main.tsx

---

# Responsibilities

## app/

Application bootstrap.

Contains:

- Providers
- Global configuration

---

## assets/

Static assets.

Examples:

- Images
- Icons
- Fonts
- Videos

---

## components/

Reusable UI components.

Examples:

- Button
- Card
- Badge
- Section
- Container

Components should remain independent from business logic.

---

## features/

Business features.

Examples:

booking/

gallery/

reviews/

availability/

Each feature owns its:

- components
- hooks
- services
- types

---

## layouts/

Application layouts.

Examples:

DefaultLayout

MinimalLayout

---

## pages/

Route-level pages.

Examples:

HomePage

PrivacyPage

TermsPage

---

## routes/

Application routing.

Contains:

- Router configuration
- Route definitions

---

## styles/

Global styling.

Contains:

- Theme
- Global styles
- Design tokens

---

## hooks/

Reusable React hooks.

Examples:

useScrollPosition

useMediaQuery

useIntersectionObserver

---

## utils/

Pure utility functions.

No React code.

---

## services/

External communication.

Examples:

Booking API

Google Maps

Email service

---

## data/

Static content.

Examples:

Amenities

FAQ

Reviews

---

## constants/

Application constants.

Examples:

Routes

Breakpoints

Animation durations

---

## types/

Shared TypeScript types.

---

# Component Architecture

Components should follow this hierarchy.

UI Components

↓

Feature Components

↓

Pages

↓

Layouts

↓

Application

A component should have a single responsibility.

---

# State Management

Prefer local state.

Use React Context only when state is shared globally.

Avoid unnecessary global state.

If the application grows significantly, evaluate Zustand.

---

# Styling Principles

Use Emotion for all styling.

Avoid:

- Inline styles
- Global CSS
- Deep selector nesting

Prefer:

Reusable styled components.

---

# Routing Principles

Every page should have:

- One clear purpose
- One canonical URL

Routes should remain simple.

---

# Naming Convention

Folders

kebab-case

Example

booking-widget/

---

React Components

PascalCase

Example

BookingWidget.tsx

---

Hooks

camelCase with "use"

Example

useBooking.ts

---

Utilities

camelCase

Example

formatPrice.ts

---

Types

PascalCase

Example

Booking.ts

---

# Performance

Prioritize:

- Lazy loading where appropriate
- Optimized images
- Minimal JavaScript
- Accessible animations

The website should feel fast before it feels impressive.

---

# Accessibility

Every page must:

- Meet WCAG AA
- Support keyboard navigation
- Provide semantic HTML
- Include descriptive alt text

Accessibility is part of quality—not an optional enhancement.

---

# Error Handling

Users should never see technical errors.

Failures should provide:

- Clear explanation
- Helpful next step
- Calm language

---

# Future Scalability

The architecture should support:

- Multiple properties
- Multiple languages
- Online payments
- CMS integration
- Dynamic pricing
- Guest portal

without major restructuring.

---

# Architecture Principles

Every technical decision should make the project:

- Easier to understand
- Easier to maintain
- Easier to extend

Complexity should only be introduced when it solves a real problem.

---

# Final Principle

The architecture exists to support the guest experience.

If a technical solution improves the code but makes the product harder to use, reconsider it.

Technology serves the experience.

Not the other way around.