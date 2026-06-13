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
    title: "Real Estate App",
    description:
      "A modern, feature-rich real estate mobile app built with React Native & Expo, powered by Appwrite backend services and Google OAuth.",
    longDescription:
      "A full-featured real estate mobile application built with React Native and Expo, leveraging Appwrite as the BaaS for data storage and Google OAuth 2.0 for secure authentication. Users can browse featured and recommended property listings, perform advanced searches by name, location, or type, and filter by property category (House, Apartment, Villa, etc.). Each property page includes high-quality image galleries, agent contact details, amenities, user reviews and ratings, and interactive location display. The app features a personalized user profile and a beautiful NativeWind-styled UI with smooth animations.",
    tags: [
      "React Native",
      "Expo",
      "TypeScript",
      "Appwrite",
      "NativeWind",
      "Tailwind CSS",
      "OAuth 2.0",
      "Expo Router",
    ],
    images: [
      "/Project-Images/Real-Estate/1.png",
      "/Project-Images/Real-Estate/2.png",
      "/Project-Images/Real-Estate/3.png",
    ],
    github: "https://github.com/lucky-arya/Real_Estate_App",
    demo: "",
    features: [
      "Secure Google OAuth 2.0 authentication",
      "Featured & recommended property listings",
      "Advanced search by name, location, or type",
      "Smart filters by property category (House, Villa, Apartment, etc.)",
      "High-quality image galleries per property",
      "Agent contact details & user reviews/ratings",
      "Interactive location display for each property",
      "Personalized user profile management",
      "Beautiful NativeWind (Tailwind CSS) UI with animations",
    ],
    role: "Full Stack Mobile Developer",
    duration: "1 month",
    status: "Completed",
  },
  {
    title: "EventHub",
    description:
      "The ultimate hub for developer events — discover, explore, and book hackathons, meetups, and conferences in one beautifully crafted platform.",
    longDescription:
      "EventHub is a modern, full-stack event management platform built with Next.js 16 App Router, designed specifically for developer communities. It allows users to discover curated developer events including hackathons, meetups, and conferences through a beautiful card-based UI. Each event page provides comprehensive details including descriptions, agendas, venue/location info, organizer details, and similar event recommendations. The platform includes a simple email-based booking system, tag-based event categorization for discoverability, SEO-friendly slug-based routing, server-side rendering for lightning-fast loads, and a robust MongoDB + Mongoose data layer with Cloudinary for image hosting.",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Tailwind CSS 4",
      "shadcn/ui",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
    ],
    images: [
      "/Project-Images/EventHub/1.png",
      "/Project-Images/EventHub/2.png",
      "/Project-Images/EventHub/3.png",
    ],
    github: "https://github.com/lucky-arya/EventHub",
    demo: "https://eventhub-henna-ten.vercel.app/",
    features: [
      "Curated developer event discovery with card-based UI",
      "Comprehensive event pages with agendas & venue info",
      "Simple email-based ticket booking system",
      "Tag-based event categorization & discoverability",
      "SEO-friendly slug-based dynamic routing",
      "Server-side rendering with Next.js App Router",
      "RESTful API routes for events & bookings",
      "MongoDB + Mongoose for robust data persistence",
      "Cloudinary integration for optimized image hosting",
      "Fully responsive across desktop, tablet & mobile",
    ],
    role: "Full Stack Developer",
    duration: "1 month",
    status: "Completed",
  },
];
