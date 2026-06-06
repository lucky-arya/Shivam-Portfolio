# AGENT.md

# Project: Shivam Kumar Portfolio

## Mission

Build a world-class luxury editorial portfolio inspired by:

* Sunny's Miami
* Alchemist Copenhagen
* Apple Product Pages
* Modern AI-first SaaS websites

The website must feel premium, immersive, cinematic, elegant, and memorable.

The final result should not resemble a typical developer portfolio.

The experience should communicate:

"AI Engineer • Full Stack Developer • Problem Solver"

---

# Tech Stack

## Framework

* Next.js 15+
* App Router
* TypeScript
* React 19

## Styling

* Tailwind CSS v4
* CSS Variables
* Tailwind Utility Architecture

## Animations

* GSAP
* Framer Motion
* Lenis

## Icons

* Lucide React

## Forms

* React Hook Form
* Zod

## Deployment

* Vercel

---

# Folder Structure

src/

app/
layout.tsx
page.tsx
globals.css

components/
Navbar/
Hero/
About/
Stats/
Projects/
TechStack/
Journey/
Testimonials/
Contact/
Footer/

data/
projects.ts
skills.ts
experience.ts
testimonials.ts

lib/

hooks/

types/

public/
images/
icons/
resume/

---

# Design Philosophy

Every section must feel editorial.

Avoid:

* Generic SaaS cards
* Progress bars
* Skill percentages
* Excessive gradients
* Overly bright colors

Prefer:

* Large typography
* Strong whitespace
* Storytelling layouts
* Luxury visual hierarchy
* Premium motion design

---

# Color System

:root {

--forest-green: #143B2E;
--dark-green: #1D4D3C;
--sage: #A8B49D;
--cream: #F4F1E9;
--coffee: #3A241A;
--gold: #D8C39B;

}

---

# Typography

Heading Font:

Playfair Display

Fallback:

Cormorant Garamond

Body Font:

Inter

Rules:

* Large headlines
* Tight vertical rhythm
* Editorial spacing
* Elegant hierarchy

---

# Responsive Breakpoints

Mobile:
320px+

Tablet:
768px+

Laptop:
1024px+

Desktop:
1440px+

Ultra Wide:
1920px+

---

# Navigation

Sticky navigation.

Transparent initially.

Background blur on scroll.

Menu:

Home
About
Projects
Experience
Blog
Contact

CTA:

Let's Talk

---

# Hero Section

Headline:

Building Digital Experiences
Powered by AI & Code.

Subheading:

AI Engineer
Full Stack Developer
Cybersecurity Enthusiast

Requirements:

* Split layout
* Premium portrait image
* Floating identity card
* Subtle parallax
* Fade reveal animation

CTA:

View My Work
Download Resume

---

# About Section

Title:

Crafting Digital Experiences That Make Impact.

Content:

Personal story.

Highlight:

* AI Engineering
* Full Stack Development
* Cybersecurity
* Innovation

Traits:

* Problem Solver
* Team Player
* Quick Learner
* Clean Coder

---

# Stats Section

Animated counters.

Metrics:

10+ Projects

500+ DSA Problems

5+ Hackathons

3+ Internships

Count animation starts on viewport entry.

---

# Projects Section

Title:

Things I've Built

Requirements:

* Showcase projects as case studies
* Alternate layout
* Large imagery
* Technology tags
* GitHub link
* Live Demo link

Animations:

Reveal on scroll.

Hover lift effect.

---

# AI Experiments Section

Create a dedicated AI showcase.

Examples:

* RAG Systems
* LLM Applications
* AI Agents
* Automation Tools

Purpose:

Differentiate portfolio from standard developer websites.

---

# Tech Stack Section

Categories:

Frontend
Backend
AI/ML
Tools

Use accordion layout on mobile.

Grid layout on desktop.

---

# Journey Timeline

Vertical timeline.

Milestones:

2023 — Started Coding

2024 — DSA & Problem Solving

2025 — Full Stack Development

2026 — AI Engineering

Animate timeline on scroll.

---

# Testimonials

Card-based layout.

Display:

* Photo
* Name
* Role
* Feedback

---

# Contact Section

Full-width luxury CTA.

Headline:

Have a Project In Mind?

CTA:

Get In Touch

Display:

* Email
* Phone
* Location
* Social Links

---

# Footer

Include:

Logo
Copyright
Privacy Policy
Terms

---

# Motion Design

Required:

GSAP ScrollTrigger
Lenis Smooth Scroll

Animations:

Fade Up
Text Reveal
Image Reveal
Parallax
Stagger Children

Avoid:

Excessive motion
Distracting effects

---

# Performance Targets

Lighthouse:

Performance ≥ 95

Accessibility ≥ 100

Best Practices ≥ 100

SEO ≥ 100

---

# Accessibility

Requirements:

* Semantic HTML
* Keyboard Navigation
* Focus States
* ARIA Labels
* Alt Text

---

# SEO

Generate metadata using App Router.

Include:

OpenGraph
Twitter Cards
Structured Data

Meta Title:

Shivam Kumar | AI Engineer & Full Stack Developer

---

# Production Requirements

* No TypeScript errors
* No ESLint errors
* No hydration warnings
* Fully responsive
* Mobile-first
* Optimized images
* Lazy loading
* Dynamic imports where appropriate

---

# Build Goal

The final portfolio should feel like a premium digital product rather than a traditional portfolio website.

When recruiters visit, the immediate reaction should be:

"This developer understands design, engineering, storytelling, and modern web experiences."
