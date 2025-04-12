import React from "react";

interface ExperienceCardProps {
  dateRange: string;
  title: string;
  company: string;
  companyLink: string;
  description: string;
  technologies: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  dateRange,
  title,
  company,
  companyLink,
  description,
  technologies,
}) => {
  return (
    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mb-12 last:mb-0">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-700/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
      <header
        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-text-muted sm:col-span-2"
        aria-label={dateRange}
      >
        {dateRange}
      </header>
      <div className="z-10 sm:col-span-6">
        <h3 className="font-medium leading-snug text-text-primary">
          <div>
            <a
              className="inline-flex items-baseline font-medium leading-tight text-text-primary hover:text-accent-hover focus-visible:text-accent-hover group/link text-lg"
              href={companyLink}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${title} at ${company} (opens in a new tab)`}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
              <span>
                {title} · <span className="inline-block">{company}</span>
              </span>
            </a>
          </div>
        </h3>
        <p className="mt-2 text-base leading-normal text-text-secondary">
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
  );
};

export default ExperienceCard;
