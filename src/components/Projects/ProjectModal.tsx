"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ExternalLink,
  Github,
  Clock,
  User,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import type { Project } from "@/types/portfolio";
import { useEffect } from "react";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  // Lock body scroll AND pause Lenis when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.__lenis?.stop();
    } else {
      document.body.style.overflow = "";
      window.__lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      window.__lenis?.start();
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!project) return null;

  const statusColor =
    project.status === "Completed"
      ? "var(--forest-green)"
      : project.status === "In Progress"
        ? "#b45309"
        : "var(--dark-green)";

  const statusBg =
    project.status === "Completed"
      ? "var(--color-light-green)"
      : project.status === "In Progress"
        ? "#fef3c7"
        : "#dbeafe";

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="project-modal-overlay"
          data-lenis-prevent
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <motion.div
            className="project-modal"
            data-lenis-prevent
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.97 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="project-modal-close"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Image header */}
            <div className="project-modal-image">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="project-modal-image-overlay" />
            </div>

            {/* Content */}
            <div className="project-modal-content">
              {/* Title & status row */}
              <div className="project-modal-header">
                <h2 className="project-modal-title">{project.title}</h2>
                <span
                  className="project-modal-status"
                  style={{
                    color: statusColor,
                    background: statusBg,
                  }}
                >
                  <span
                    className="project-modal-status-dot"
                    style={{ background: statusColor }}
                  />
                  {project.status}
                </span>
              </div>

              {/* Meta pills */}
              <div className="project-modal-meta">
                <div className="project-modal-meta-item">
                  <User size={14} />
                  <span>{project.role}</span>
                </div>
                <div className="project-modal-meta-item">
                  <Clock size={14} />
                  <span>{project.duration}</span>
                </div>
              </div>

              {/* Description */}
              <p className="project-modal-description">
                {project.longDescription}
              </p>

              {/* Tech stack */}
              <div className="project-modal-section">
                <h3 className="project-modal-section-title">
                  <Sparkles size={16} />
                  Tech Stack
                </h3>
                <div className="project-modal-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-modal-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="project-modal-section">
                <h3 className="project-modal-section-title">
                  <CheckCircle2 size={16} />
                  Key Features
                </h3>
                <ul className="project-modal-features">
                  {project.features.map((feature, i) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.05, duration: 0.3 }}
                      className="project-modal-feature"
                    >
                      <span className="project-modal-feature-dot" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Action buttons */}
              <div className="project-modal-actions">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-button-solid"
                >
                  <ExternalLink size={15} />
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="luxury-button"
                >
                  <Github size={15} />
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
