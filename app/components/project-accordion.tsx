"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "../content";

type ProjectAccordionProps = {
  projects: readonly Project[];
};

export function ProjectAccordion({ projects }: ProjectAccordionProps) {
  const [openProject, setOpenProject] = useState<string | null>(null);
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <ol className="project-list">
      {projects.map((project) => {
        const isOpen = openProject === project.name;
        const panelId = `project-${project.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")}`;

        return (
          <li key={project.name} className="project-item">
            <h3>
              <button
                type="button"
                className="project-trigger"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => {
                  setOpenProject(isOpen ? null : project.name);
                  setPlayingVideo(null);
                }}
              >
                <span className="project-heading">
                  <span className="project-name">{project.name}</span>
                  <span className="project-summary">{project.summary}</span>
                </span>
                <span className="project-period">{project.period}</span>
                <svg
                  className="project-chevron"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="m4 6 4 4 4-4" />
                </svg>
              </button>
            </h3>

            <div
              id={panelId}
              className="project-panel"
              data-expanded={isOpen ? "true" : "false"}
              aria-hidden={!isOpen}
            >
              <div className="project-panel-inner">
                <div className="project-details">
                  <p>{project.description}</p>
                  <dl className="project-meta">
                    <div>
                      <dt>Contribution</dt>
                      <dd>{project.contribution}</dd>
                    </div>
                    <div>
                      <dt>Technologies</dt>
                      <dd>{project.technologies.join(" · ")}</dd>
                    </div>
                  </dl>
                </div>

                {project.currentPage ? (
                  <div className="project-current-card">
                    <span className="project-current-badge">
                      <span className="project-current-dot" aria-hidden="true" />
                      You’re already here
                    </span>
                    <p>
                      This page is the live project. Explore it, switch the theme,
                      and open the other work below.
                    </p>
                  </div>
                ) : project.alreadyLive ? (
                  <div className="project-live-card">
                    <span className="project-live-badge">
                      <span className="project-current-dot" aria-hidden="true" />
                      Live now
                    </span>
                    <p>
                      This project is live at{" "}
                      <a
                        href={project.alreadyLive.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.alreadyLive.label}{" "}
                        <span aria-hidden="true">↗</span>
                      </a>
                      .
                    </p>
                  </div>
                ) : project.youtubeVideoId ? (
                  <figure className="project-video">
                    <div
                      className="project-video-frame"
                      data-has-preview={project.youtubeThumbnail ? "true" : "false"}
                      data-playing={playingVideo === project.name ? "true" : "false"}
                    >
                      {project.youtubeThumbnail &&
                      playingVideo !== project.name ? (
                        <button
                          type="button"
                          className="project-video-preview"
                          aria-label={`Play ${project.youtubeVideoTitle}`}
                          onClick={() => setPlayingVideo(project.name)}
                        >
                          <Image
                            src={project.youtubeThumbnail}
                            alt=""
                            width={1876}
                            height={821}
                            sizes="(max-width: 760px) 100vw, 760px"
                          />
                          <span className="project-video-preview-shade" />
                          <span className="project-video-play" aria-hidden="true">
                            <svg viewBox="0 0 24 24" fill="none">
                              <path d="m9 7 8 5-8 5V7Z" />
                            </svg>
                          </span>
                          <span className="project-video-preview-label">
                            Watch walkthrough
                          </span>
                        </button>
                      ) : (
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${project.youtubeVideoId}?rel=0${project.youtubeThumbnail ? "&autoplay=1" : ""}`}
                          title={project.youtubeVideoTitle}
                          loading="lazy"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        />
                      )}
                    </div>
                    <figcaption>
                      <span>Project walkthrough</span>
                      <a
                        href={`https://www.youtube.com/watch?v=${project.youtubeVideoId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Watch on YouTube <span aria-hidden="true">↗</span>
                      </a>
                    </figcaption>
                  </figure>
                ) : (
                  <p className="project-video-placeholder">
                    Video walkthrough coming soon.
                  </p>
                )}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
