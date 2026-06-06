import type { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "Travel Website",
    description:
      "A full stack travel platform with booking, authentication, and payments. Built for seamless experiences.",
    longDescription:
      "A comprehensive travel platform that enables users to discover destinations, book trips, and manage itineraries. Features include real-time availability checking, secure payment processing via Stripe, user authentication with OAuth, interactive maps, and a review system. The platform uses server-side rendering for optimal SEO and performance, with a responsive design that works flawlessly across all devices.",
    tags: ["Next.js", "Tailwind CSS", "MongoDB"],
    image: "/images/project-travel.svg",
    github: "https://github.com/shivamkumar/travel-website",
    demo: "https://travel-demo.vercel.app",
    features: [
      "Real-time booking & availability system",
      "Secure payments via Stripe integration",
      "OAuth authentication (Google, GitHub)",
      "Interactive destination maps",
      "User reviews & ratings system",
      "Responsive design across all devices"
    ],
    role: "Full Stack Developer",
    duration: "3 months",
    status: "Completed"
  },
  {
    title: "AI Dashboard",
    description:
      "AI-powered analytics dashboard for business insights, forecasting, and automation workflows.",
    longDescription:
      "An intelligent analytics dashboard that leverages machine learning models for business forecasting and data-driven decision making. The platform processes large datasets in real-time, generates visual reports with interactive charts, and provides automated insights through natural language summaries. Custom ML pipelines handle data preprocessing, model training, and prediction serving through a Python FastAPI backend.",
    tags: ["React", "Node.js", "Python"],
    image: "/images/project-ai.svg",
    github: "https://github.com/shivamkumar/ai-dashboard",
    demo: "https://ai-dashboard.vercel.app",
    features: [
      "Real-time data processing & visualization",
      "ML-powered business forecasting",
      "Interactive charts with D3.js & Recharts",
      "Natural language insight generation",
      "Custom ML pipeline management",
      "Role-based access control"
    ],
    role: "AI Engineer & Frontend Developer",
    duration: "4 months",
    status: "Maintained"
  },
  {
    title: "Recipe Finder",
    description:
      "Explore curated recipes using filters, categories, and favorites with a premium UI.",
    longDescription:
      "A beautifully designed recipe discovery application that connects to multiple food APIs to provide thousands of recipes. Users can search by ingredients, dietary preferences, cuisine type, and cooking time. The app features a personalized favorites system, meal planning capabilities, nutritional information display, and step-by-step cooking instructions with timers. Built with a focus on accessibility and delightful micro-interactions.",
    tags: ["Next.js", "API", "Tailwind CSS"],
    image: "/images/project-recipe.svg",
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
    image: "/images/project-studio.svg",
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
