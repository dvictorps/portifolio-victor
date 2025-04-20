import React, { RefObject } from "react";
import { useTranslations } from "next-intl";
import { User, Briefcase, FolderKanban } from "lucide-react"; // Icons for sections

// Define props for NavBar
interface NavBarProps {
  scrollContainerRef: RefObject<HTMLDivElement | null>;
}

const NavBar: React.FC<NavBarProps> = ({ scrollContainerRef }) => {
  const t = useTranslations("HomePage"); // Assuming section titles might be reused or needed

  const navItems = [
    {
      id: "about",
      labelKey: "nav.about",
      icon: User,
      sectionTitle: t("nav.about"),
    },
    {
      id: "experience",
      labelKey: "nav.experience",
      icon: Briefcase,
      sectionTitle: t("nav.experience"),
    },
    {
      id: "projects",
      labelKey: "nav.projects",
      icon: FolderKanban,
      sectionTitle: t("projects.title"),
    }, // Use existing translation
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section && scrollContainerRef.current) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    // Removed fixed positioning, now relies on parent grid
    <nav className="hidden lg:block">
      <ul className="flex flex-col space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                aria-label={`Ir para a seção ${item.sectionTitle}`}
                className="flex items-center w-full px-3 py-2 rounded text-[var(--text-secondary)] hover:text-[var(--accent-hover)] focus:outline-none focus:text-[var(--accent-hover)] transition-all duration-200 group space-x-3"
              >
                <Icon size={20} className="flex-shrink-0" />
                <span className="text-sm font-normal truncate">
                  {item.sectionTitle}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
