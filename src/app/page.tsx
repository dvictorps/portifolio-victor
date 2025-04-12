import { Linkedin, Github, Mail, Code } from "lucide-react";
import ExperienceCard from "../components/ExperienceCard";

const experiences = [
  {
    dateRange: "Dec 2023 - Feb 2025",
    title: "Desenvolvedor full stack",
    company: "B2LIST",
    companyLink: "#",
    description:
      "Currently working on the development of pages, components, and endpoint consumption, using React.js, Styled Components, and React Query.",
    technologies: [
      "React.js",
      "Styled Components",
      "React Query",
      "Frontend Development",
      "XML",
    ],
  },
  {
    dateRange: "Mar 2022 - Dec 2023",
    title: "Desenvolvedor full stack (Estágio)",
    company: "Centro Universitário de Patos de Minas - UNIPAM",
    companyLink: "#",
    description:
      "Worked on internal projects developing components, web pages, and endpoints, using technologies like React.js and Entity Framework, in addition to providing user support.",
    technologies: [
      "React.js",
      "Entity Framework",
      "Test-driven Development",
      "XML",
    ],
  },
  {
    dateRange: "Dec 2021 - Jul 2022",
    title: "Assistente de TI (Estágio)",
    company: "Vertical Investimentos",
    companyLink: "#",
    description:
      "IT Assistant, performing computer replacement and maintenance and providing user support.",
    technologies: ["Computer Maintenance", "User Support", "Communication"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-800 text-gray-300 font-sans p-8 md:p-16 lg:p-24 flex flex-col items-center">
      <header className="text-center mb-16 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-100 mb-2">
          Victor Pereira
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200 mb-4">
          Fullstack Developer
        </h2>
        <p className="text-lg text-gray-400">Welcome to my portfolio.</p>
      </header>

      <main className="w-full max-w-3xl">
        <section id="about" className="mb-16 scroll-mt-16">
          <p className="text-lg leading-relaxed mb-4">
            Apaixonado por programação desde a infância, com foco em
            desenvolvimento de software e interesse especial por jogos.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            Minha experiência full-stack inclui desenvolvimento front-end com
            React (Vite/TypeScript) e back-end com .NET/Entity Framework
            (UNIPAM), além de desenvolvimento com React.js, integração de dados
            (N8N) e microserviços Java/Spring Boot (B2LIST).
          </p>
          <p className="text-lg leading-relaxed">
            Busco aplicar minhas habilidades para construir aplicações robustas
            e eficientes. Vamos nos conectar!
          </p>
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
            Projects
          </h3>
          <p className="text-lg text-gray-400 text-center">
            Projects section coming soon...
          </p>
        </section>
      </main>

      <footer className="mt-16 pt-8 border-t border-gray-600 w-full max-w-3xl flex justify-center">
        <div className="flex space-x-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:example@email.com"
            aria-label="Email"
            className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
          >
            <Mail size={24} />
          </a>
          <a
            href="#"
            aria-label="Portfolio/Code"
            className="text-gray-400 hover:text-cyan-300 transition-colors duration-300"
          >
            <Code size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}
