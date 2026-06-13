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
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { Project } from "@/types/portfolio";
import { useEffect, useState, useCallback } from "react";

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
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = project?.images ?? [];
  const totalSlides = images.length;
  const hasMultipleSlides = totalSlides > 1;

  const goToSlide = useCallback(
    (index: number) => {
      if (index < 0) setCurrentSlide(totalSlides - 1);
      else if (index >= totalSlides) setCurrentSlide(0);
      else setCurrentSlide(index);
    },
    [totalSlides]
  );

  const nextSlide = useCallback(() => goToSlide(currentSlide + 1), [currentSlide, goToSlide]);
  const prevSlide = useCallback(() => goToSlide(currentSlide - 1), [currentSlide, goToSlide]);

  // Reset slide index when project changes
  useEffect(() => {
    setCurrentSlide(0);
  }, [project]);

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

  // Close on Escape key, arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (hasMultipleSlides && e.key === "ArrowLeft") prevSlide();
      if (hasMultipleSlides && e.key === "ArrowRight") nextSlide();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, hasMultipleSlides, prevSlide, nextSlide]);

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

            {/* Image slider */}
            <div className="project-modal-image">
              <div className="project-modal-slider">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    className="project-modal-slide"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <Image
                      src={images[currentSlide]}
                      alt={`${project.title} — screenshot ${currentSlide + 1}`}
                      width={800}
                      height={450}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation arrows */}
                {hasMultipleSlides && (
                  <>
                    <button
                      className="project-slider-arrow project-slider-arrow-left"
                      onClick={prevSlide}
                      aria-label="Previous image"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      className="project-slider-arrow project-slider-arrow-right"
                      onClick={nextSlide}
                      aria-label="Next image"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}

                {/* Slide counter & dots */}
                {hasMultipleSlides && (
                  <div className="project-slider-indicators">
                    <span className="project-slider-counter">
                      {currentSlide + 1} / {totalSlides}
                    </span>
                    <div className="project-slider-dots">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          className={`project-slider-dot${i === currentSlide ? " active" : ""}`}
                          onClick={() => goToSlide(i)}
                          aria-label={`Go to image ${i + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                )}
              </div>

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
