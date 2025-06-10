"use client";

import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    id: 1,
    title: "Digital News Journal",
    description:
      "A modern, full-stack news website supporting Arabic and English content with real-time analytics and comprehensive admin management. Features bilingual content management with RTL/LTR support, advanced search functionality, and a dark-themed admin dashboard with glass morphism design. Built with performance optimization, secure authentication, and SEO-friendly architecture for professional news publishing.",
    image: "/akhbarna.png",
    technologies: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Node.js",
    ],
    liveUrl: "https://journal-ppom.vercel.app/",
    githubUrl: "https://github.com/azizjrad/journal",
    featured: true,
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Esouk Tounsi is a simple e-commerce web application built to showcase local Tunisian products and promote digital adoption among small local merchants. The platform simulates an online marketplace where users can browse products by category, view product details, and simulate a shopping experience through a clean PHP-based interface.",
    image: "/esouk.png",
    technologies: ["PHP", "Javascript", "Bootstrap", "MySQL"],
    liveUrl: "https://esouk-tounsi.ct.ws/public/pages/index.php",
    githubUrl: "https://github.com/azizjrad/E-souk",
    featured: true,
  },
  {
    id: 3,
    title: "Modern Business Intelligence App",
    description:
      "InsightForge Dashboard is a modern Business Intelligence (BI) web application designed to provide real-time analytics and interactive data visualization for hospitality and service-based businesses. The platform helps users monitor performance metrics, understand customer behavior, and make data-driven decisions through a clean and intuitive interface.",
    image: "/insightforge.png",
    technologies: [
      "React",
      "Next.js",
      "Flask",
      "TailwindCSS",
      "Pandas",
      "SQLite",
    ],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/azizjrad/Insight-Forge",
    featured: true,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing my work with smooth animations and optimized performance.",
    image: "/portfolio.png",
    technologies: ["Next.js", "Tailwind CSS"],
    liveUrl: "https://portfolio-website-five-brown.vercel.app/",
    githubUrl: "https://github.com/azizjrad/portfolio-website",
    featured: false,
  },
  {
    id: 5,
    title: "Simon Game",
    description:
      "A classic memory game where players repeat an increasingly complex sequence of lights and sounds. Built to improve logic and pattern recognition skills through interactive gameplay.",
    image: "/simongame.png",
    technologies: ["HTML", "CSS", "Javascript"],
    liveUrl: "https://azizjrad.github.io/Simon-game/",
    githubUrl: "https://github.com/azizjrad/Simon-game",
    featured: false,
  },
];

export default function Projects() {
  const { t } = useLanguage();
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="pt-24 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-teal-400 dark:bg-teal-500 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 dark:opacity-10 animate-float transition-colors duration-300"></div>
        <div
          className="absolute top-3/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-purple-400 dark:bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 dark:opacity-10 animate-float transition-colors duration-300"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-teal-300 to-purple-300 dark:from-teal-400 dark:to-purple-400 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-2xl opacity-10 dark:opacity-5 animate-float transition-colors duration-300"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/10 to-purple-500/10 dark:from-teal-400/20 dark:to-purple-400/20 rounded-full border border-teal-200/50 dark:border-teal-400/30 backdrop-blur-sm mb-6 transition-colors duration-300">
              <span className="text-sm font-medium text-teal-700 dark:text-teal-300 transition-colors duration-300">
                🚀 {t("projectsTitle")}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-6 transition-colors duration-300">
              {t("projectsTitle").split(" ")[0]}{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-teal-600 via-purple-600 to-teal-600 dark:from-teal-400 dark:via-purple-400 dark:to-teal-400 bg-clip-text text-transparent transition-colors duration-300">
                  {t("projectsTitle").split(" ")[1] || "Projects"}
                </span>
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-teal-400 to-purple-500 dark:from-teal-300 dark:to-purple-400 rounded-full transition-colors duration-300"></div>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-200 leading-relaxed max-w-3xl mx-auto transition-colors duration-300">
              {t("projectsSubtitle")}
            </p>
          </div>

          {/* Enhanced Featured Projects */}
          <div className="mb-16 sm:mb-20">
            <div className="flex items-center mb-12">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-teal-500/25 dark:shadow-teal-400/20 transition-colors duration-300">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 animate-slide-up transition-colors duration-300">
                {t("featuredProjects")}
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-xl hover:shadow-2xl dark:shadow-2xl dark:hover:shadow-3xl transition-all duration-500 overflow-hidden border border-slate-200/50 dark:border-slate-700/50 hover:border-teal-300/50 dark:hover:border-teal-400/50 transform hover:-translate-y-3 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-purple-500/5 dark:from-teal-400/10 dark:via-transparent dark:to-purple-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>{" "}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="flex space-x-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400 hover:bg-teal-600 dark:hover:bg-teal-500 hover:text-white transition-all duration-200 shadow-lg dark:shadow-xl"
                        >
                          <ExternalLink size={16} />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-700 dark:hover:bg-slate-600 hover:text-white transition-all duration-200 shadow-lg dark:shadow-xl"
                        >
                          <Github size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10 p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-200 mb-6 leading-relaxed transition-colors duration-300">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="group/tech relative px-3 py-2 bg-gradient-to-r from-teal-50 to-teal-100 dark:from-teal-900/50 dark:to-teal-800/50 hover:from-teal-100 hover:to-teal-200 dark:hover:from-teal-800/70 dark:hover:to-teal-700/70 text-teal-700 dark:text-teal-300 text-sm font-medium rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md border border-teal-200/50 dark:border-teal-700/50 hover:border-teal-300 dark:hover:border-teal-600"
                          style={{ animationDelay: `${techIndex * 0.05}s` }}
                        >
                          <span className="relative z-10">{tech}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-teal-200/50 to-teal-300/50 dark:from-teal-700/50 dark:to-teal-600/50 rounded-xl opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 dark:from-teal-500 dark:to-teal-600 text-white font-medium rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 dark:hover:shadow-teal-400/20 transform hover:-translate-y-1"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 dark:from-teal-300 dark:via-teal-400 dark:to-teal-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 animate-gradient-x bg-size-300%"></div>
                        <ExternalLink
                          size={16}
                          className="mr-2 relative z-10"
                        />
                        <span className="relative z-10">{t("liveDemo")}</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-xl hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
                      >
                        <Github size={16} className="mr-2" />
                        {t("viewCode")}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Other Projects */}
          <div className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-800/50 dark:via-slate-800/80 dark:to-slate-800/50 rounded-3xl p-8 md:p-12 animate-slide-up shadow-xl dark:shadow-2xl border border-slate-200/50 dark:border-slate-700/50 transition-colors duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 via-purple-600/5 to-teal-600/5 dark:from-teal-400/10 dark:via-purple-400/10 dark:to-teal-400/10 rounded-3xl transition-colors duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-12">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-purple-500/25 dark:shadow-purple-400/20 transition-colors duration-300">
                  <span className="text-white text-2xl">💼</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 animate-slide-up transition-colors duration-300">
                  {t("otherProjects")}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl dark:shadow-xl dark:hover:shadow-2xl overflow-hidden transition-all duration-500 border border-slate-200/50 dark:border-slate-700/50 hover:border-purple-300/50 dark:hover:border-purple-400/50 transform hover:-translate-y-2 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-teal-500/5 dark:from-purple-400/10 dark:via-transparent dark:to-teal-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="relative overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="flex space-x-1">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center text-teal-600 dark:text-teal-400 hover:bg-teal-600 dark:hover:bg-teal-500 hover:text-white transition-all duration-200 shadow-md dark:shadow-lg"
                          >
                            <ExternalLink size={12} />
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-700 dark:hover:bg-slate-600 hover:text-white transition-all duration-200 shadow-md dark:shadow-lg"
                          >
                            <Github size={12} />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 p-5">
                      <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 mb-3 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-200 text-sm mb-4 leading-relaxed line-clamp-3 transition-colors duration-300">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies
                          .slice(0, 3)
                          .map((tech, techIndex) => (
                            <span
                              key={tech}
                              className="group/tech relative px-2 py-1 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/50 dark:to-purple-800/50 hover:from-purple-100 hover:to-purple-200 dark:hover:from-purple-800/70 dark:hover:to-purple-700/70 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-purple-200/50 dark:border-purple-700/50 hover:border-purple-300 dark:hover:border-purple-600"
                              style={{ animationDelay: `${techIndex * 0.05}s` }}
                            >
                              <span className="relative z-10">{tech}</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-purple-200/50 to-purple-300/50 dark:from-purple-700/50 dark:to-purple-600/50 rounded-lg opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                            </span>
                          ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 text-xs font-medium rounded-lg transition-colors duration-200">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn relative flex-1 inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-teal-600 to-teal-700 dark:from-teal-500 dark:to-teal-600 text-white text-sm font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-teal-500/25 dark:hover:shadow-teal-400/20 transform hover:-translate-y-0.5"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 dark:from-teal-300 dark:via-teal-400 dark:to-teal-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 animate-gradient-x bg-size-300%"></div>
                          <ExternalLink
                            size={12}
                            className="mr-1 relative z-10"
                          />
                          <span className="relative z-10">{t("demo")}</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg hover:border-slate-400 dark:hover:border-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md"
                        >
                          <Github size={12} className="mr-1" />
                          {t("code")}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
