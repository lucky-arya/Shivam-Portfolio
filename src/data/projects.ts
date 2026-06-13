import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "BreatheEasy",

    description:
      "An AI-powered air quality monitoring platform that predicts AQI levels for the next 24 hours and visualizes pollution trends through interactive heatmaps.",

    longDescription:
      "BreatheEasy is an environmental intelligence platform designed to help users monitor and anticipate air quality conditions. The application leverages machine learning models to predict Air Quality Index (AQI) values for the next 24 hours and presents the data through intuitive heatmap visualizations. Users can explore pollution trends, identify high-risk areas, analyze historical patterns, and make informed decisions regarding outdoor activities. The platform combines real-time environmental insights with a modern, responsive user experience optimized for both desktop and mobile devices.",

    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Machine Learning",
      "AQI Prediction",
      "Data Visualization",
      "Environmental Tech"
    ],

    images: [
      "/Project-Images/BreatheEasy/1.png",
      "/Project-Images/BreatheEasy/2.png",
      "/Project-Images/BreatheEasy/3.png"
    ],

    github: "https://github.com/lucky-arya/BreatheEasy",

    demo: "https://breatheeasy-frontend.onrender.com/",

    features: [
      "24-hour AQI forecasting using machine learning",
      "Interactive AQI heatmap visualization",
      "Real-time air quality monitoring",
      "Location-based pollution insights",
      "Historical AQI trend analysis",
      "Risk-level categorization and alerts",
      "Responsive dashboard for desktop and mobile",
      "Data-driven environmental awareness tools"
    ],

    role: "Full Stack Developer",

    duration: "3 months",

    status: "Completed"
  },
  {
    title: "SkillSense",
    description:
      "An AI-powered career intelligence platform to diagnose skill gaps, ace mock interviews, analyze resumes, and generate personalized career roadmaps.",
    longDescription:
      "SkillSense is a full-stack career intelligence platform built on three microservices — a React frontend, an Express + TypeScript API, and a Python FastAPI ML engine. It combines Groq-powered LLaMA 3.3 70B for deep analysis with a custom ML engine covering 17 skill categories across 5 career roles. Features include an adaptive skill assessment with radar charts, an AI resume analyzer with ATS scoring and 'Roast Mode', voice-enabled mock interviews using Web Speech API, and a personalized career roadmap generator. The platform is fully containerized with Docker Compose and tested with 34 automated tests (Jest + pytest).",
    tags: [
      "React 18",
      "TypeScript",
      "Express",
      "FastAPI",
      "Python",
      "MongoDB",
      "Groq AI",
      "Docker",
      "Framer Motion",
      "Tailwind CSS",
    ],
    images: [
      "/Project-Images/SkillSense/1.png",
      "/Project-Images/SkillSense/2.png",
      "/Project-Images/SkillSense/3.png",
      "/Project-Images/SkillSense/4.png",

    ],
    github: "https://github.com/lucky-arya/SkillSense",
    demo: "https://skill-sense-client.vercel.app/",
    features: [
      "ML-powered skill gap analysis across 17 categories & 5 career roles",
      "AI resume analyzer with ATS scoring and Roast Mode 🔥",
      "Voice-enabled AI mock interviews with real-time TTS/STT",
      "Personalized phased career roadmap (Beginner → Expert)",
      "AI career coach chat powered by LLaMA 3.3 70B (Groq)",
      "Adaptive AI-generated assessments (MCQ + scenario-based)",
      "Recharts skill dashboard with progress tracking & history",
      "Docker Compose one-command deployment with nginx reverse proxy",
      "34 automated tests across Jest & pytest",
    ],
    role: "Full Stack & AI Engineer",
    duration: "2 months",
    status: "Completed",
  },
  {
    title: "Recipe Finder",
    description:
      "Explore curated recipes using filters, categories, and favorites with a premium UI.",
    longDescription:
      "A beautifully designed recipe discovery application that connects to multiple food APIs to provide thousands of recipes. Users can search by ingredients, dietary preferences, cuisine type, and cooking time. The app features a personalized favorites system, meal planning capabilities, nutritional information display, and step-by-step cooking instructions with timers. Built with a focus on accessibility and delightful micro-interactions.",
    tags: ["Next.js", "API", "Tailwind CSS"],
    images: [
      "/Project-Images/Recipe-Finder/1.png"
    ],
    github: "https://github.com/shivamkumar/recipe-finder",
    demo: "https://recipe-finder.vercel.app",
    features: [
      "Multi-API recipe aggregation",
      "Advanced filtering & search system",
      "Personalized favorites & meal planning",
      "Nutritional information display",
      "Step-by-step cooking mode with timers",
      "Accessibility-first design approach"
    ],
    role: "Frontend Developer",
    duration: "2 months",
    status: "Completed"
  },
  {
    title: "Studio Portfolio",
    description:
      "Luxury editorial portfolio for a creative studio with cinematic motion and bespoke layouts.",
    longDescription:
      "A high-end editorial portfolio website designed for a creative studio, featuring cinematic scroll-driven animations, custom cursor interactions, and bespoke page transitions. The site uses GSAP and Framer Motion for fluid animations, with a focus on typography, whitespace, and visual storytelling. Each project page features immersive full-screen galleries, video integration, and smooth parallax effects that create a premium browsing experience.",
    tags: ["GSAP", "Framer Motion", "TypeScript"],
    images: [
      "/Project-Images/Studio-Portfolio/1.png"
    ],
    github: "https://github.com/shivamkumar/studio-portfolio",
    demo: "https://studio-portfolio.vercel.app",
    features: [
      "Cinematic scroll-driven animations",
      "Custom cursor & hover interactions",
      "Bespoke page transitions with GSAP",
      "Immersive full-screen galleries",
      "Video integration & lazy loading",
      "Typography-focused responsive design"
    ],
    role: "Frontend Developer & Designer",
    duration: "5 months",
    status: "In Progress"
  }
];
