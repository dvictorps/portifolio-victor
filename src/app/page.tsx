"use client";

import { Linkedin, Github, Mail, Code } from "lucide-react";
import ExperienceCard from "../components/ExperienceCard";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../components/LanguageSwitcher"; // Import the switcher

export default function Home() {
  const t = useTranslations("HomePage");
  const tExp = useTranslations("Experiences");

  const experiences = [0, 1, 2].map((index) => ({
    dateRange: tExp(`${index}.dateRange`),
    title: tExp(`${index}.title`),
    company: tExp(`${index}.company`),
    description: tExp(`${index}.description`),
    technologies: tExp.raw(`${index}.technologies`),
  }));

  return (
    <div className="relative min-h-screen bg-background text-text-secondary font-sans p-8 md:p-16 lg:p-24 flex flex-col items-center">
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
        <LanguageSwitcher />
      </div>

      <header className="text-center mb-16 max-w-2xl pt-10">
        {" "}
        <h1 className="text-5xl md:text-6xl font-bold text-text-primary mb-2">
          {t("header.name")}
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-text-secondary mb-4">
          {t("header.title")}
        </h2>
        <p className="text-lg text-text-muted">{t("header.welcome")}</p>
      </header>

      <main className="w-full max-w-3xl">
        <section id="about" className="mb-16 scroll-mt-16">
          <p className="text-lg leading-relaxed mb-4">
            {t("about.paragraph1")}
          </p>
          <p className="text-lg leading-relaxed mb-4">
            {t("about.paragraph2")}
          </p>
          <p className="text-lg leading-relaxed">{t("about.paragraph3")}</p>
        </section>

        <section id="experience" className="mb-16 scroll-mt-16">
          <div>
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                dateRange={exp.dateRange}
                title={exp.title}
                company={exp.company}
                description={exp.description}
                technologies={exp.technologies}
              />
            ))}
          </div>
        </section>

        <section id="projects" className="mb-16 scroll-mt-16">
          <h3 className="text-2xl font-semibold text-text-primary mb-4 text-center">
            {t("projects.title")}
          </h3>
          <p className="text-lg text-text-muted text-center">
            {t("projects.comingSoon")}
          </p>
        </section>
      </main>

      <footer className="mt-16 pt-8 border-t border-border-color w-full max-w-3xl flex justify-center">
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/victor-pereira-3386811b4/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("footer.linkedinAria")}
            className="text-text-muted hover:text-accent-hover transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/dvictorps"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("footer.githubAria")}
            className="text-text-muted hover:text-accent-hover transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:dvictorps@gmail.com"
            aria-label={t("footer.emailAria")}
            className="text-text-muted hover:text-accent-hover transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://github.com/dvictorps/portifolio-victor"
            aria-label={t("footer.codeAria")}
            className="text-text-muted hover:text-accent-hover transition-colors duration-300"
          >
            <Code size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}
