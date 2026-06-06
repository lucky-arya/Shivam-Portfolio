"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
import type { Project } from "@/types/portfolio";

export default function Projects() {
  const displayProjects = projects.slice(0, 3);
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
    <section id="projects" className="section">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:pl-20 ">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="section-kicker">Featured Projects</p>
            <h2 className="section-title mt-4">Things I&apos;ve Built</h2>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-[var(--forest-green)] transition hover:gap-3"
          >
            View All Projects
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="projects-grid">
          {displayProjects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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
                <div className="project-card-overlay">
                  <span className="project-card-overlay-text">
                    View Details
                  </span>
                </div>
              </div>
              <div className="project-card-body">
                <h3 className="project-card-title">{project.title}</h3>
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

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
