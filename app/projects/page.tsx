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
      "Next.js ",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
    ],
    liveUrl: "https://akhbarna.vercel.app",
    githubUrl: "https://github.com/azizjrad/journal2",
    featured: true,
  },
  {
    id: 2,
    title: "Translation Company Website",
    description:
      "T4Translation is a modern bilingual website (English/Arabic) built for a translation and localization service. It’s designed with a fast, mobile-first user experience in mind, featuring full right-to-left (RTL) support and a clean, consistent UI. The site uses React i18next for internationalization, enabling seamless language switching with a persistent AR/ENG toggle and dynamic content arrays. Key sections include detailed service pages, an “Areas of Expertise” showcase, and two fully validated forms (Contact and Get Started) powered by EmailJS, with smooth focus and hover states for better usability. On the technical side, the project is optimized for SEO with meta tags and structured JSON-LD data, making it both user-friendly and search-engine ready.",
    image: "/t4translation.png",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://www.t4translation.com",
    githubUrl: "https://github.com/azizjrad/t4translation",
    featured: true,
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "Esouk Tounsi is an e-commerce web application built to showcase local Tunisian products and promote digital adoption among small local merchants. The platform simulates an online marketplace where users can browse products by category, view product details, and simulate a shopping experience through a clean PHP-based interface.",
    image: "/esouk.png",
    technologies: ["PHP", "Javascript", "Bootstrap", "MySQL"],
    liveUrl: "https://esouk-tounsi.ct.ws/public/pages/index.php",
    githubUrl: "https://github.com/azizjrad/E-souk",
    featured: true,
  },
  {
    id: 4,
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

// French translations for project descriptions
const projectDescriptionsFr: Record<number, string> = {
  1: "Un site web moderne d'actualités full-stack supportant le contenu arabe et anglais avec des analyses en temps réel et une gestion administrative complète. Comprend une gestion de contenu bilingue avec support RTL/LTR, une fonctionnalité de recherche avancée et un tableau de bord d'administration à thème sombre avec design glass morphism. Construit avec optimisation des performances, authentification sécurisée et architecture SEO-friendly pour la publication professionnelle d'actualités.",
  2: "T4Translation est un site web bilingue moderne (anglais/arabe) construit pour un service de traduction et de localisation. Il est conçu avec une expérience utilisateur rapide et mobile-first à l'esprit, avec un support complet droite-à-gauche (RTL) et une interface utilisateur propre et cohérente. Le site utilise React i18next pour l'internationalisation, permettant un changement de langue fluide avec un bouton AR/ENG persistant et des tableaux de contenu dynamiques. Les sections clés incluent des pages de services détaillées, une vitrine \"Domaines d'expertise\", et deux formulaires entièrement validés (Contact et Commencer) alimentés par EmailJS, avec des états de focus et de survol fluides pour une meilleure utilisabilité. Côté technique, le projet est optimisé pour le SEO avec des balises meta et des données JSON-LD structurées, le rendant à la fois convivial et prêt pour les moteurs de recherche.",
  3: "Esouk Tounsi est une application web e-commerce construite pour présenter les produits locaux tunisiens et promouvoir l'adoption numérique parmi les petits commerçants locaux. La plateforme simule une marketplace en ligne où les utilisateurs peuvent parcourir les produits par catégorie, voir les détails des produits et simuler une expérience d'achat à travers une interface PHP propre.",
  4: "InsightForge Dashboard est une application web moderne de Business Intelligence (BI) conçue pour fournir des analyses en temps réel et une visualisation de données interactive pour les entreprises d'hôtellerie et de services. La plateforme aide les utilisateurs à surveiller les métriques de performance, comprendre le comportement des clients et prendre des décisions basées sur les données à travers une interface propre et intuitive.",
  5: "Un jeu de mémoire classique où les joueurs répètent une séquence de plus en plus complexe de lumières et de sons. Construit pour améliorer la logique et les compétences de reconnaissance de motifs à travers un gameplay interactif.",
};

// French translations for project titles
const projectTitlesFr: Record<number, string> = {
  1: "Journal d'Actualités Numérique",
  2: "Site de Traduction Professionnelle",
  3: "Plateforme E-Commerce",
  4: "Application de Business Intelligence Moderne",
  5: "Jeu Simon",
};

export default function Projects() {
  const { t, language } = useLanguage();
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <div className="pt-24 relative overflow-hidden transition-colors duration-300">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-300 to-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-10 animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>

        {/* Floating geometric shapes - moving like stars */}
        <div
          className="absolute top-20 left-20 w-4 h-4 bg-teal-500 rounded-full animate-float opacity-60"
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className="absolute top-40 right-32 w-6 h-6 bg-purple-500 rotate-45 animate-drift opacity-40"
          style={{ animationDelay: "1s", animationDuration: "20s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/3 w-3 h-3 bg-cyan-500 rounded-full animate-spiral opacity-50"
          style={{ animationDelay: "3s", animationDuration: "12s" }}
        ></div>
        <div
          className="absolute top-1/3 right-20 w-8 h-8 bg-gradient-to-r from-teal-400 to-purple-400 rounded-full animate-cosmic opacity-30"
          style={{ animationDelay: "5s", animationDuration: "25s" }}
        ></div>

        {/* Additional moving stars with varied animations */}
        <div
          className="absolute top-1/2 left-16 w-2 h-2 bg-yellow-400 rounded-full animate-twinkle opacity-70"
          style={{ animationDelay: "2s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-3/4 right-1/3 w-5 h-5 bg-indigo-400 rounded-full animate-orbit opacity-50"
          style={{ animationDelay: "4s", animationDuration: "15s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-pink-400 rounded-full animate-starfield opacity-60"
          style={{ animationDelay: "6s", animationDuration: "8s" }}
        ></div>
        <div
          className="absolute top-1/4 right-1/2 w-4 h-4 bg-emerald-400 rounded-full animate-cosmic opacity-40"
          style={{ animationDelay: "1.5s", animationDuration: "18s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-24 w-2 h-2 bg-orange-400 rounded-full animate-twinkle opacity-80"
          style={{ animationDelay: "3.5s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/4 w-6 h-6 bg-violet-400 rounded-full animate-spiral opacity-35"
          style={{ animationDelay: "7s", animationDuration: "14s" }}
        ></div>

        {/* Additional cosmic elements */}
        <div
          className="absolute top-16 left-1/3 w-3 h-3 bg-rose-400 rounded-full animate-drift opacity-45"
          style={{ animationDelay: "2.5s", animationDuration: "22s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/4 w-4 h-4 bg-amber-400 rounded-full animate-orbit opacity-55"
          style={{ animationDelay: "4.5s", animationDuration: "16s" }}
        ></div>
        <div
          className="absolute top-1/3 left-1/2 w-2 h-2 bg-lime-400 rounded-full animate-starfield opacity-65"
          style={{ animationDelay: "6.5s", animationDuration: "9s" }}
        ></div>
        <div
          className="absolute bottom-1/2 right-16 w-5 h-5 bg-sky-400 rounded-full animate-cosmic opacity-40"
          style={{ animationDelay: "8s", animationDuration: "28s" }}
        ></div>
        <div
          className="absolute top-3/4 left-20 w-3 h-3 bg-fuchsia-400 rounded-full animate-spiral opacity-50"
          style={{ animationDelay: "1.8s", animationDuration: "11s" }}
        ></div>

        {/* Twinkling stars with varied sizes */}
        <div
          className="absolute top-32 right-16 w-1 h-1 bg-white rounded-full animate-twinkle opacity-90"
          style={{ animationDelay: "0.5s", animationDuration: "2s" }}
        ></div>
        <div
          className="absolute bottom-48 left-32 w-1 h-1 bg-white rounded-full animate-twinkle opacity-80"
          style={{ animationDelay: "2.5s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-48 left-1/2 w-1 h-1 bg-white rounded-full animate-twinkle opacity-70"
          style={{ animationDelay: "4.5s", animationDuration: "2.5s" }}
        ></div>
        <div
          className="absolute bottom-24 right-1/3 w-1 h-1 bg-white rounded-full animate-twinkle opacity-85"
          style={{ animationDelay: "6.5s", animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-1/4 left-24 w-1 h-1 bg-white rounded-full animate-twinkle opacity-75"
          style={{ animationDelay: "1.2s", animationDuration: "2.8s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-32 w-1 h-1 bg-white rounded-full animate-twinkle opacity-95"
          style={{ animationDelay: "3.8s", animationDuration: "3.5s" }}
        ></div>
        <div
          className="absolute top-2/3 right-1/4 w-1 h-1 bg-white rounded-full animate-twinkle opacity-65"
          style={{ animationDelay: "5.2s", animationDuration: "2.2s" }}
        ></div>
        <div
          className="absolute bottom-16 left-1/4 w-1 h-1 bg-white rounded-full animate-twinkle opacity-88"
          style={{ animationDelay: "7.5s", animationDuration: "3.8s" }}
        ></div>

        {/* Dot pattern overlay */}
        <div
          className="absolute inset-0 bg-slate-900/5 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, #475569 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            backgroundPosition: "0 0, 30px 30px",
          }}
        ></div>
      </div>

      <div className="pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Enhanced Header */}
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 transition-colors duration-300">
              {t("projectsTitle").split(" ")[0]}{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-teal-600 via-purple-600 to-teal-600 bg-clip-text text-transparent transition-colors duration-300">
                  {t("projectsTitle").split(" ")[1] || "Projects"}
                </span>
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full transition-colors duration-300"></div>
              </span>
            </h1>
          </div>

          {/* Enhanced Featured Projects */}
          <div className="mb-16 sm:mb-20">
            <div className="flex items-center mb-12">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-teal-500/25 transition-colors duration-300">
                <span className="text-white text-2xl">⭐</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 animate-slide-up transition-colors duration-300">
                {t("featuredProjects")}
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="group relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-white/30 hover:border-teal-300/50 transform hover:-translate-y-3 animate-slide-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Glassy highlight overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl backdrop-blur-sm"></div>
                  {/* Animated shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="flex space-x-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-200 shadow-lg"
                        >
                          <ExternalLink size={16} />
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-200 shadow-lg"
                        >
                          <Github size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-10 p-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-4 group-hover:text-teal-700 transition-colors duration-300">
                      {language === "fr"
                        ? projectTitlesFr[project.id] || project.title
                        : project.title}
                    </h3>
                    <p className="text-slate-600 mb-6 leading-relaxed transition-colors duration-300">
                      {language === "fr"
                        ? projectDescriptionsFr[project.id] ||
                          project.description
                        : project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={tech}
                          className="group/tech relative px-3 py-2 bg-gradient-to-r from-teal-50 to-teal-100 hover:from-teal-100 hover:to-teal-200 text-teal-700 text-sm font-medium rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md border border-teal-200/50 hover:border-teal-300"
                          style={{ animationDelay: `${techIndex * 0.05}s` }}
                        >
                          <span className="relative z-10">{tech}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-teal-200/50 to-teal-300/50 rounded-xl opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-medium rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/25 transform hover:-translate-y-1"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 animate-gradient-x bg-size-300%"></div>
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
                        className="group/btn inline-flex items-center px-6 py-3 border-2 border-slate-300 text-slate-700 font-medium rounded-xl hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md"
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
          <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 animate-slide-up shadow-2xl border border-white/30 transition-colors duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 via-purple-600/5 to-teal-600/5 rounded-3xl transition-colors duration-300"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-12">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg shadow-purple-500/25 transition-colors duration-300">
                  <span className="text-white text-2xl">💼</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 animate-slide-up transition-colors duration-300">
                  {t("otherProjects")}
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="group relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl shadow-lg hover:shadow-xl overflow-hidden transition-all duration-500 border border-white/30 hover:border-purple-300/50 transform hover:-translate-y-2 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-teal-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {/* Glassy highlight overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl backdrop-blur-sm"></div>
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
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
                            className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-teal-600 hover:bg-teal-600 hover:text-white transition-all duration-200 shadow-md"
                          >
                            <ExternalLink size={12} />
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-700 hover:text-white transition-all duration-200 shadow-md"
                          >
                            <Github size={12} />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="relative z-10 p-5">
                      <h3 className="text-lg font-bold text-slate-800 mb-3 group-hover:text-purple-700 transition-colors duration-300">
                        {language === "fr"
                          ? projectTitlesFr[project.id] || project.title
                          : project.title}
                      </h3>
                      <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3 transition-colors duration-300">
                        {language === "fr"
                          ? projectDescriptionsFr[project.id] ||
                            project.description
                          : project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {project.technologies
                          .slice(0, 3)
                          .map((tech, techIndex) => (
                            <span
                              key={tech}
                              className="group/tech relative px-2 py-1 bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 text-purple-700 text-xs font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 border border-purple-200/50 hover:border-purple-300"
                              style={{ animationDelay: `${techIndex * 0.05}s` }}
                            >
                              <span className="relative z-10">{tech}</span>
                              <div className="absolute inset-0 bg-gradient-to-r from-purple-200/50 to-purple-300/50 rounded-lg opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300"></div>
                            </span>
                          ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-medium rounded-lg transition-colors duration-200">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/btn relative flex-1 inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-teal-600 to-teal-700 text-white text-sm font-medium rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md hover:shadow-teal-500/25 transform hover:-translate-y-0.5"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 animate-gradient-x bg-size-300%"></div>
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
                          className="flex-1 inline-flex items-center justify-center px-3 py-2 border border-slate-300 text-slate-700 text-sm font-medium rounded-lg hover:border-slate-400 hover:bg-slate-50 transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-md"
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
