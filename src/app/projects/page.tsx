"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectModal from "@/components/Projects/ProjectModal";
import { useState } from "react";
import type { Project } from "@/types/portfolio";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <main className="bg-[var(--cream)] min-h-screen">
      {/* Hero banner */}
      <section
        className="relative pt-32 pb-16 md:pt-40 md:pb-20"
        style={{ backgroundColor: "var(--hero-bg)" }}
      >
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:pl-20">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[var(--forest-green)] transition hover:gap-3 mb-8"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-kicker">Portfolio</p>
            <h1
              className="section-title mt-4"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 4rem)" }}
            >
              All Projects
            </h1>
            <p className="mt-4 max-w-lg text-[0.92rem] leading-relaxed text-[var(--ink)]">
              A curated collection of projects spanning full-stack development,
              AI engineering, and creative design — each crafted with attention
              to detail and performance.
            </p>
          </motion.div>
        </div>

        {/* Wave divider */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          style={{ display: "block" }}
        >
          <path
            d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,30 1440,40 L1440,60 L0,60 Z"
            fill="var(--cream)"
          />
        </svg>
      </section>

      {/* Projects grid */}
      <section className="section">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:pl-20">
          <div className="projects-page-grid">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className="project-card project-card-clickable"
                onClick={() => openModal(project)}
                role="button"
                tabIndex={0}
                aria-label={`View details for ${project.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openModal(project);
                  }
                }}
              >
                <div className="project-card-image">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={540}
                    height={420}
                  />
                  {/* Hover overlay */}
                  <div className="project-card-overlay">
                    <span className="project-card-overlay-text">
                      View Details
                    </span>
                  </div>
                </div>
                <div className="project-card-body">
                  <div className="project-card-title-row">
                    <h2 className="project-card-title">{project.title}</h2>
                    <span
                      className="project-card-status"
                      data-status={project.status.toLowerCase().replace(" ", "-")}
                    >
                      {project.status}
                    </span>
                  </div>
                  <p className="project-card-desc">{project.description}</p>
                  <div className="project-card-footer">
                    <div className="project-card-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className="project-card-tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="project-card-arrow" aria-hidden="true">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </main>
  );
}
