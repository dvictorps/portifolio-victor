"use client";

import { useEffect, useRef } from "react";
import { Linkedin, Github, Mail, Code } from "lucide-react";
import ExperienceCard from "../components/ExperienceCard";
import ProjectCard from "../components/ProjectCard";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "../components/LanguageSwitcher";
import NavBar from "../components/NavBar";

// Import Swiper React components and styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Home() {
  const t = useTranslations("HomePage");
  const tExp = useTranslations("Experiences");
  const tProj = useTranslations("Projects");
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = event.clientX;
      const y = event.clientY;

      document.documentElement.style.setProperty("--mouse-x", `${x}px`);
      document.documentElement.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.style.removeProperty("--mouse-x");
      document.documentElement.style.removeProperty("--mouse-y");
    };
  }, []);

  const experiences = [0, 1, 2].map((index) => ({
    dateRange: tExp(`${index}.dateRange`),
    title: tExp(`${index}.title`),
    company: tExp(`${index}.company`),
    description: tExp(`${index}.description`),
    technologies: tExp.raw(`${index}.technologies`),
  }));

  const projects = [0].map((index) => ({
    title: tProj(`${index}.title`),
    description: tProj(`${index}.description`),
    imageUrl: tProj(`${index}.imageUrl`),
    projectUrl: tProj(`${index}.projectUrl`),
    repoUrl: tProj(`${index}.repoUrl`) || null,
  }));

  return (
    <div className="lg:flex text-[var(--text-secondary)] font-sans relative min-h-screen">
      <div className="absolute top-4 right-4 lg:top-6 lg:right-6 z-30">
        <LanguageSwitcher flagWidth={30} flagHeight={20} />
      </div>

      <div
        className="global-mouse-light fixed inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="w-full lg:w-1/3 xl:w-1/4 p-6 md:p-8 lg:p-12 flex flex-col relative lg:h-screen lg:sticky lg:top-0 z-10">
        <div>
          <header className="text-left mb-10 pt-8 lg:pt-0">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-2">
              {t("header.name")}
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-[var(--text-secondary)] mb-4">
              {t("header.title")}
            </h2>
            <p className="text-md text-[var(--text-secondary)]">
              {t("header.welcome")}
            </p>
          </header>
          <div className="mb-10">
            <NavBar scrollContainerRef={scrollContainerRef} />
          </div>
        </div>

        <footer className="mt-auto pb-6 lg:pb-0">
          <div className="flex space-x-5">
            <a
              href="https://www.linkedin.com/in/victor-pereira-3386811b4/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("footer.linkedinAria")}
              className="text-[var(--text-secondary)] hover:text-[var(--accent-hover)] transition-colors duration-300"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com/dvictorps"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("footer.githubAria")}
              className="text-[var(--text-secondary)] hover:text-[var(--accent-hover)] transition-colors duration-300"
            >
              <Github size={28} />
            </a>
            <a
              href="mailto:dvictorps@gmail.com"
              aria-label={t("footer.emailAria")}
              className="text-[var(--text-secondary)] hover:text-[var(--accent-hover)] transition-colors duration-300"
            >
              <Mail size={28} />
            </a>
            <a
              href="https://github.com/dvictorps/portifolio-victor"
              aria-label={t("footer.codeAria")}
              className="text-[var(--text-secondary)] hover:text-[var(--accent-hover)] transition-colors duration-300"
            >
              <Code size={28} />
            </a>
          </div>
        </footer>
      </div>

      <div
        ref={scrollContainerRef}
        className="w-full lg:flex-1 lg:overflow-y-auto p-6 md:p-8 lg:p-16 xl:lg:p-24 relative hide-scrollbar z-10"
      >
        <div className="w-full">
          <main className="w-full max-w-3xl mx-auto">
            <section id="about" className="mb-16 scroll-mt-24">
              <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-6">
                {t("nav.about")}
              </h3>
              <p className="text-lg leading-relaxed mb-4">
                {t("about.paragraph1")}
              </p>
              <p className="text-lg leading-relaxed mb-4">
                {t("about.paragraph2")}
              </p>
              <p className="text-lg leading-relaxed">{t("about.paragraph3")}</p>
            </section>

            <hr className="section-separator" />

            <section id="experience" className="mb-16 scroll-mt-24">
              <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-8">
                {t("nav.experience")}
              </h3>
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

            <hr className="section-separator" />

            <section id="projects" className="mb-16 scroll-mt-24 w-full">
              <h3 className="text-2xl font-semibold text-[var(--text-primary)] mb-10 text-center">
                {t("projects.title")}
              </h3>
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                className="w-full max-w-xl mx-auto"
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: projects.length > 1 ? 1.5 : 1,
                    spaceBetween: 40,
                    centeredSlides: projects.length > 1 ? true : false,
                  },
                }}
              >
                {projects.map((proj, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex justify-center p-2">
                      <ProjectCard
                        title={proj.title}
                        description={proj.description}
                        imageUrl={proj.imageUrl}
                        projectUrl={proj.projectUrl}
                        repoUrl={proj.repoUrl}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
