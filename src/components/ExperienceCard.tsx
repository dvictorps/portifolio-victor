import React from "react";

interface ExperienceCardProps {
  dateRange: string;
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  dateRange,
  title,
  company,
  description,
  technologies,
}) => {
  return (
    <div className="group relative grid transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mb-12 last:mb-0 rounded-lg hover:bg-white/5 transition-colors duration-300">
      <div className="sm:col-span-8 p-6">
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)] sm:col-span-2"
          aria-label={dateRange}
        >
          {dateRange}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug text-[var(--text-primary)]">
            <div>
              <a
                className="inline-flex items-baseline font-medium leading-tight text-[var(--text-primary)] hover:text-[var(--accent-hover)] focus-visible:text-[var(--accent-hover)] group/link text-lg"
                href="#"
                onClick={(e) => e.preventDefault()}
                aria-label={title}
              >
                <span>
                  {title} · <span className="inline-block">{company}</span>
                </span>
              </a>
            </div>
          </h3>
          <p className="mt-2 text-base leading-normal text-[var(--text-secondary)]">
            {description}
          </p>
          <ul className="mt-4 flex flex-wrap" aria-label="Technologies used">
            {technologies.map((tech) => (
              <li key={tech} className="mr-1.5 mt-2">
                <div className="flex items-center rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium leading-5 text-cyan-300 ">
                  {tech}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
