import React from "react";
import Image from "next/image";
import { Link, Github } from "lucide-react"; // Import icons

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  repoUrl?: string | null; // Optional repo URL
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
  repoUrl,
}) => {
  return (
    <div className="mb-12 last:mb-0 overflow-hidden rounded-lg shadow-lg bg-slate-800/50 border border-border-color transition-shadow hover:shadow-cyan-300/20">
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} (opens project link in a new tab)`}
      >
        <Image
          src={imageUrl}
          alt={`Thumbnail for ${title}`}
          width={800} // Adjust width as needed
          height={450} // Adjust height (e.g., 16:9 ratio)
          className="w-full object-cover" // Make image cover the area
        />
      </a>
      <div className="p-6">
        <h4 className="font-semibold text-xl mb-2 text-text-primary">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent-hover focus-visible:text-accent-hover transition-colors"
            aria-label={`${title} (opens project link in a new tab)`}
          >
            {title}
          </a>
        </h4>
        <p className="text-text-secondary mb-4">{description}</p>
        <div className="flex space-x-4 mt-auto">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit project website (opens in a new tab)"
            className="text-text-muted hover:text-accent-hover transition-colors"
          >
            <Link size={20} />
          </a>
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit code repository (opens in a new tab)"
              className="text-text-muted hover:text-accent-hover transition-colors"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
