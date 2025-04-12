"use client"; // Mark as a Client Component

import { Linkedin, Github, Mail, Code } from "lucide-react";
import ExperienceCard from "../components/ExperienceCard";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../components/LanguageSwitcher"; // Import the switcher

// Experience data is now fetched via translations

export default function Home() {
  const t = useTranslations("HomePage");
  const tExp = useTranslations("Experiences");

  // Manually construct the experiences array from translations
  // This assumes a fixed number of experiences (3 in this case)
  // A more dynamic approach might be needed if the number varies
  const experiences = [0, 1, 2].map((index) => ({
    dateRange: tExp(`${index}.dateRange`),
    title: tExp(`${index}.title`),
    company: tExp(`${index}.company`),
    companyLink: tExp(`${index}.companyLink`),
    description: tExp(`${index}.description`),
    technologies: tExp.raw(`${index}.technologies`), // Use .raw for arrays
  }));

  return (
    <div className="relative min-h-screen bg-slate-800 text-gray-300 font-sans p-8 md:p-16 lg:p-24 flex flex-col items-center">
      {/* Language Switcher repositioned to top-left */}
      <div className="absolute top-4 left-4 md:top-6 md:left-6 z-10">
        <LanguageSwitcher />
      </div>

      <header className="text-center mb-16 max-w-2xl pt-10">
        {" "}
        {/* Added padding-top to avoid overlap */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-2">
          {t("header.name")}
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
          {t("header.title")}
        </h2>
        <p className="text-lg text-gray-400">{t("header.welcome")}</p>
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
                companyLink={exp.companyLink}
                description={exp.description}
                technologies={exp.technologies}
              />
            ))}
          </div>
        </section>

        <section id="projects" className="mb-16 scroll-mt-16">
          <h3 className="text-2xl font-semibold text-gray-100 mb-4 text-center">
            {t("projects.title")}
          </h3>
          <p className="text-lg text-gray-400 text-center">
            {t("projects.comingSoon")}
          </p>
        </section>
      </main>

      <footer className="mt-16 pt-8 border-t border-gray-600 w-full max-w-3xl flex justify-center">
        <div className="flex space-x-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("footer.linkedinAria")}
            className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t("footer.githubAria")}
            className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:example@email.com"
            aria-label={t("footer.emailAria")}
            className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
          <a
            href="#"
            aria-label={t("footer.codeAria")}
            className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
          >
            <Code size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}
