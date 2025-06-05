"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="pt-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-teal-400 dark:bg-teal-500 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 dark:opacity-10"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-purple-400 dark:bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 dark:opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-teal-300 to-purple-300 dark:from-teal-600 dark:to-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-2xl opacity-10 dark:opacity-5"></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Mobile: Profile image first, then content */}
            <div className="relative lg:order-last order-first lg:mb-0 mb-8">
              <div className="relative">
                {/* Wrapper with animation */}
                <div className="animate-float">
                  {/* Responsive gradient border container */}
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] mx-auto rounded-full shadow-2xl dark:shadow-slate-900/50 overflow-hidden transition-all duration-300">
                    {/* Gradient border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-purple-500 to-teal-400 dark:from-teal-500 dark:via-purple-600 dark:to-teal-500 rounded-full p-1 transition-all duration-300">
                      {/* Image container */}
                      <div className="w-full h-full bg-white dark:bg-slate-800 rounded-full overflow-hidden transition-all duration-300">
                        <Image
                          src="/aziz.png"
                          alt="Aziz Jrad - Profile Picture"
                          width={450}
                          height={450}
                          className="w-full h-full object-cover object-center"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Static decorative elements */}
                <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-teal-400 to-purple-500 dark:from-teal-500 dark:to-purple-600 rounded-2xl blur-sm opacity-60 dark:opacity-40 transition-colors duration-300"></div>
                <div className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-gradient-to-r from-purple-400 to-teal-500 dark:from-purple-500 dark:to-teal-600 rounded-full blur-sm opacity-50 dark:opacity-30 transition-colors duration-300"></div>
              </div>
            </div>

            <div className="animate-fade-in space-y-6 sm:space-y-8 text-center lg:text-left order-last lg:order-first">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-teal-500/10 to-purple-500/10 dark:from-teal-400/20 dark:to-purple-400/20 rounded-full border border-teal-200/50 dark:border-teal-700/50 backdrop-blur-sm transition-all duration-300">
                  <span className="text-xs sm:text-sm font-medium text-teal-700 dark:text-teal-300 transition-colors duration-300">
                    👋 {t("heroTitle")}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-800 dark:text-slate-100 leading-tight transition-colors duration-300">
                  {t("greeting")}{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-teal-600 to-purple-600 dark:from-teal-400 dark:to-purple-400 bg-clip-text text-transparent">
                      {t("myName")}
                    </span>
                    <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-teal-400 to-purple-500 dark:from-teal-500 dark:to-purple-400 rounded-full"></div>
                  </span>
                </h1>
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-colors duration-300">
                {t("heroSubtitle")}
              </p>

              {/* Responsive button layout */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 items-center lg:items-start">
                <Link
                  href="/projects"
                  className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-teal-600 to-purple-600 dark:from-teal-500 dark:to-purple-500 text-white font-semibold rounded-2xl transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 dark:hover:shadow-purple-400/30 overflow-hidden w-full sm:w-auto text-sm sm:text-base"
                >
                  {/* Animated background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-teal-600 to-purple-600 dark:from-purple-500 dark:via-teal-500 dark:to-purple-500 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-x bg-300%"></div>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>

                  {/* Pulsing border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-white/30 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>

                  <span className="relative z-10 flex items-center">
                    {t("viewMyWork")}
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-2 group-hover:scale-125 transition-all duration-300"
                      size={18}
                    />
                  </span>
                </Link>
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-teal-600 dark:border-teal-500 text-teal-600 dark:text-teal-400 font-semibold rounded-2xl hover:bg-teal-600 dark:hover:bg-teal-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl shadow-teal-500/10 dark:shadow-teal-400/10 transform hover:-translate-y-2 backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 w-full sm:w-auto text-sm sm:text-base"
                >
                  <span className="relative z-10">{t("getInTouch")}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-purple-600 dark:from-teal-500 dark:to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                </Link>
              </div>

              {/* Responsive social icons */}
              <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 lg:space-x-8 pt-2">
                <a
                  href="https://github.com/azizjrad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 sm:p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl text-slate-600 dark:text-slate-300 hover:text-white border border-slate-200/50 dark:border-slate-700/50 hover:border-teal-400/50 dark:hover:border-teal-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-500/20 dark:hover:shadow-teal-400/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-700 dark:from-teal-500 dark:to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <Github
                    size={24}
                    className="sm:w-7 sm:h-7 relative z-10 group-hover:scale-110 transition-transform duration-200"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/azizjrad/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-3 sm:p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl text-slate-600 dark:text-slate-300 hover:text-white border border-slate-200/50 dark:border-slate-700/50 hover:border-purple-400/50 dark:hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 dark:hover:shadow-purple-400/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 dark:from-purple-500 dark:to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <Linkedin
                    size={24}
                    className="sm:w-7 sm:h-7 relative z-10 group-hover:scale-110 transition-transform duration-200"
                  />
                </a>
                <Link
                  href="/contact"
                  className="group relative p-3 sm:p-4 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl text-slate-600 dark:text-slate-300 hover:text-white border border-slate-200/50 dark:border-slate-700/50 hover:border-teal-400/50 dark:hover:border-teal-500/50 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-500/20 dark:hover:shadow-teal-400/20"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-purple-600 dark:from-teal-500 dark:to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  <Mail
                    size={24}
                    className="sm:w-7 sm:h-7 relative z-10 group-hover:scale-110 transition-transform duration-200"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick About Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50/50 dark:via-slate-800/50 to-transparent transition-colors duration-300"></div>

        <div className="max-w-7xl mx-auto text-center animate-slide-up relative">
          <div className="space-y-4 sm:space-y-6 mb-12 sm:mb-16">
            <div className="inline-flex items-center px-3 py-2 sm:px-4 sm:py-2 bg-gradient-to-r from-teal-500/10 to-purple-500/10 dark:from-teal-400/20 dark:to-purple-400/20 rounded-full border border-teal-200/50 dark:border-teal-700/50 backdrop-blur-sm transition-all duration-300">
              <span className="text-xs sm:text-sm font-medium text-teal-700 dark:text-teal-300 transition-colors duration-300">
                ⚡ What I Do
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-slate-100 transition-colors duration-300">
              Crafting Digital{" "}
              <span className="bg-gradient-to-r from-teal-600 to-purple-600 dark:from-teal-400 dark:to-purple-400 bg-clip-text text-transparent transition-all duration-300">
                Experiences
              </span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-200 leading-relaxed max-w-3xl mx-auto transition-colors duration-300">
              I specialize in creating modern web applications with clean code,
              beautiful design, and exceptional user experiences. From concept
              to deployment, I bring ideas to life.
            </p>
          </div>

          {/* Responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            <div className="group relative p-6 sm:p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-lg dark:shadow-slate-900/20 hover:shadow-2xl dark:hover:shadow-slate-900/40 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-slate-200/50 dark:border-slate-700/50 hover:border-teal-300/50 dark:hover:border-teal-600/50">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-purple-500/5 dark:from-teal-400/10 dark:via-transparent dark:to-purple-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-teal-500/25 dark:shadow-teal-400/25">
                  <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">
                    💻
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 sm:mb-4 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors duration-300">
                  Frontend Development
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-200 leading-relaxed transition-colors duration-300">
                  Creating responsive, interactive user interfaces with modern
                  frameworks and cutting-edge technologies
                </p>
              </div>
            </div>
            <div className="group relative p-6 sm:p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-lg dark:shadow-slate-900/20 hover:shadow-2xl dark:hover:shadow-slate-900/40 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-slate-200/50 dark:border-slate-700/50 hover:border-purple-300/50 dark:hover:border-purple-600/50">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-teal-500/5 dark:from-purple-400/10 dark:via-transparent dark:to-teal-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25 dark:shadow-purple-400/25">
                  <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">
                    🎨
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 sm:mb-4 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
                  UI/UX Design
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-200 leading-relaxed transition-colors duration-300">
                  Designing intuitive and beautiful user experiences that
                  delight users and drive engagement
                </p>
              </div>
            </div>
            <div className="group relative p-6 sm:p-8 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-lg dark:shadow-slate-900/20 hover:shadow-2xl dark:hover:shadow-slate-900/40 transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 border border-slate-200/50 dark:border-slate-700/50 hover:border-teal-300/50 dark:hover:border-teal-600/50">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-purple-500/5 to-teal-500/5 dark:from-teal-400/10 dark:via-purple-400/10 dark:to-teal-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-teal-500 to-purple-500 dark:from-teal-400 dark:to-purple-400 rounded-2xl flex items-center justify-center mb-4 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-teal-500/25 dark:shadow-teal-400/25">
                  <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">
                    ⚡
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 sm:mb-4 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors duration-300">
                  Performance
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-200 leading-relaxed transition-colors duration-300">
                  Optimizing applications for speed, accessibility, and search
                  engines to deliver exceptional experiences
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
