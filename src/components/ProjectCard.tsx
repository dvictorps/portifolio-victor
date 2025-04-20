import React from "react";
import Image from "next/image";
import { Link, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  repoUrl?: string | null;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectUrl,
  repoUrl,
}) => {
  return (
    <div className="max-w-md w-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-[var(--accent)]/20 hover:bg-white/5">
      <a
        href={projectUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} (opens project link in a new tab)`}
      >
        <Image
          src={imageUrl}
          alt={`Thumbnail for ${title}`}
          width={640}
          height={360}
          className="w-full object-cover border-0 rounded-t-lg"
        />
      </a>
      <div className="p-4">
        <h4 className="font-semibold text-lg mb-1 text-[var(--text-primary)]">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-hover)] focus-visible:text-[var(--accent-hover)] transition-colors"
            aria-label={`${title} (opens project link in a new tab)`}
          >
            {title}
          </a>
        </h4>
        <p className="text-sm text-[var(--text-secondary)] mb-3">
          {description}
        </p>
        <div className="flex space-x-4 mt-auto">
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit project website (opens in a new tab)"
            className="text-[var(--text-secondary)] hover:text-[var(--accent-hover)] transition-colors"
          >
            <Link size={20} />
          </a>
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit code repository (opens in a new tab)"
              className="text-[var(--text-secondary)] hover:text-[var(--accent-hover)] transition-colors"
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
