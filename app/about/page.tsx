"use client";

import { Code, Palette, Users, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const skills = {
  technical: [
    "JavaScript/TypeScript",
    "React & Next.js",
    "PHP",
    "Python",
    "HTML/CSS",
    "Tailwind CSS",
    "Git & GitHub",
    "SQL Databases",
  ],
  soft: [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Project Management",
    "Creative Thinking",
    "Attention to Detail",
    "Time Management",
    "Adaptability",
  ],
};

export default function About() {
  const { t } = useLanguage();
  
  return (
    <div className="pt-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-teal-400 dark:bg-teal-500 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 dark:opacity-10 animate-float transition-all duration-300"></div>
        <div
          className="absolute top-3/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 bg-purple-400 dark:bg-purple-500 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 dark:opacity-10 animate-float transition-all duration-300"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-teal-300 to-purple-300 dark:from-teal-600 dark:to-purple-600 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-2xl opacity-10 dark:opacity-5 animate-float transition-all duration-300"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="pb-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 sm:mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/10 to-purple-500/10 dark:from-teal-400/20 dark:to-purple-400/20 rounded-full border border-teal-200/50 dark:border-teal-700/50 backdrop-blur-sm mb-6 transition-all duration-300">
              <span className="text-sm font-medium text-teal-700 dark:text-teal-300 transition-colors duration-300">
                👋 {t('aboutTitle')}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-6 transition-colors duration-300">
              {t('aboutTitle').split(' ')[0]}{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-teal-600 via-purple-600 to-teal-600 dark:from-teal-400 dark:via-purple-400 dark:to-teal-400 bg-clip-text text-transparent transition-colors duration-300">
                  {t('aboutTitle').split(' ')[1] || 'Me'}
                </span>
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-teal-400 to-purple-500 dark:from-teal-500 dark:to-purple-400 rounded-full transition-all duration-300"></div>
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-200 leading-relaxed max-w-3xl mx-auto transition-colors duration-300">
              {t('aboutSubtitle')}
            </p>
          </div>

          {/* Bio Section with enhanced design */}
          <div className="mb-16 sm:mb-20 animate-slide-up">
            <div className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-xl dark:shadow-slate-900/20 hover:shadow-2xl dark:hover:shadow-slate-900/40 transition-all duration-500 p-8 md:p-12 border border-slate-200/50 dark:border-slate-700/50 hover:border-teal-300/50 dark:hover:border-teal-600/50 transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-purple-500/5 dark:from-teal-400/10 dark:via-transparent dark:to-purple-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-teal-500/25 dark:shadow-teal-400/25">
                    <Users className="text-white" size={24} />
                  </div>
                  My Story
                </h2>
                <div className="prose prose-lg text-slate-600 dark:text-slate-200 max-w-none space-y-6 transition-colors duration-300">
                  <p className="text-base sm:text-lg leading-relaxed">
                    {t('aboutDescription')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Skills Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 sm:mb-20">
            {/* Technical Skills */}
            <div className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-xl dark:shadow-slate-900/20 hover:shadow-2xl dark:hover:shadow-slate-900/40 transition-all duration-500 p-8 border border-slate-200/50 dark:border-slate-700/50 hover:border-teal-300/50 dark:hover:border-teal-600/50 transform hover:-translate-y-2 animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-purple-500/5 dark:from-teal-400/10 dark:via-transparent dark:to-purple-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-teal-500/25 dark:shadow-teal-400/25">
                    <Code className="text-white" size={24} />
                  </div>
                  {t('skillsTitle')}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skills.technical.map((skill, index) => (
                    <div
                      key={skill}
                      className="group/skill relative bg-gradient-to-r from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 hover:from-teal-100 hover:to-teal-200 dark:hover:from-teal-800/50 dark:hover:to-teal-700/50 px-4 py-3 rounded-xl text-teal-700 dark:text-teal-300 font-medium text-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md dark:hover:shadow-slate-900/20 border border-teal-200/50 dark:border-teal-700/50 hover:border-teal-300 dark:hover:border-teal-600"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="relative z-10">{skill}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-200/50 to-teal-300/50 dark:from-teal-600/30 dark:to-teal-500/30 rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl shadow-xl dark:shadow-slate-900/20 hover:shadow-2xl dark:hover:shadow-slate-900/40 transition-all duration-500 p-8 border border-slate-200/50 dark:border-slate-700/50 hover:border-purple-300/50 dark:hover:border-purple-600/50 transform hover:-translate-y-2 animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-teal-500/5 dark:from-purple-400/10 dark:via-transparent dark:to-teal-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8 flex items-center transition-colors duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/25 dark:shadow-purple-400/25">
                    <Palette className="text-white" size={24} />
                  </div>
                  Soft Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {skills.soft.map((skill, index) => (
                    <div
                      key={skill}
                      className="group/skill relative bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30 hover:from-purple-100 hover:to-purple-200 dark:hover:from-purple-800/50 dark:hover:to-purple-700/50 px-4 py-3 rounded-xl text-purple-700 dark:text-purple-300 font-medium text-sm transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md dark:hover:shadow-slate-900/20 border border-purple-200/50 dark:border-purple-700/50 hover:border-purple-300 dark:hover:border-purple-600"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="relative z-10">{skill}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-200/50 to-purple-300/50 dark:from-purple-600/30 dark:to-purple-500/30 rounded-xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Values Section */}
          <div className="relative bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-800/50 dark:via-slate-800/80 dark:to-slate-800/50 rounded-3xl p-8 md:p-12 lg:p-16 animate-slide-up shadow-xl dark:shadow-slate-900/20 border border-slate-200/50 dark:border-slate-700/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 via-purple-600/5 to-teal-600/5 dark:from-teal-400/10 dark:via-purple-400/10 dark:to-teal-400/10 rounded-3xl transition-all duration-300"></div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/10 to-purple-500/10 dark:from-teal-400/20 dark:to-purple-400/20 rounded-full border border-teal-200/50 dark:border-teal-700/50 backdrop-blur-sm mb-6 transition-all duration-300">
                  <Zap className="mr-2 text-teal-600 dark:text-teal-400 transition-colors duration-300" size={20} />
                  <span className="text-sm font-medium text-teal-700 dark:text-teal-300 transition-colors duration-300">
                    Core Values
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4 transition-colors duration-300">
                  What Drives Me
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-200 max-w-2xl mx-auto transition-colors duration-300">
                  These principles guide my approach to development and
                  collaboration
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="group text-center transform hover:-translate-y-3 transition-all duration-500">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-teal-600 dark:from-teal-400 dark:to-teal-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-teal-500/25 dark:shadow-teal-400/25">
                      <span className="text-white text-3xl">🚀</span>
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-teal-600 dark:from-teal-500 dark:to-teal-400 rounded-2xl blur opacity-20 dark:opacity-10 group-hover:opacity-40 dark:group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors duration-300">
                    Innovation
                  </h3>
                  <p className="text-slate-600 dark:text-slate-200 leading-relaxed transition-colors duration-300">
                    Always exploring new technologies and pushing the boundaries
                    of what's possible
                  </p>
                </div>

                <div className="group text-center transform hover:-translate-y-3 transition-all duration-500">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 dark:from-purple-400 dark:to-purple-500 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-purple-500/25 dark:shadow-purple-400/25">
                      <span className="text-white text-3xl">💡</span>
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-purple-600 dark:from-purple-500 dark:to-purple-400 rounded-2xl blur opacity-20 dark:opacity-10 group-hover:opacity-40 dark:group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
                    Problem Solving
                  </h3>
                  <p className="text-slate-600 dark:text-slate-200 leading-relaxed transition-colors duration-300">
                    Finding elegant solutions to complex challenges through
                    creative thinking
                  </p>
                </div>

                <div className="group text-center transform hover:-translate-y-3 transition-all duration-500">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-purple-500 dark:from-teal-400 dark:to-purple-400 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-teal-500/25 dark:shadow-teal-400/25">
                      <span className="text-white text-3xl">🤝</span>
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-purple-400 dark:from-teal-500 dark:to-purple-500 rounded-2xl blur opacity-20 dark:opacity-10 group-hover:opacity-40 dark:group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 group-hover:text-teal-700 dark:group-hover:text-teal-300 transition-colors duration-300">
                    Collaboration
                  </h3>
                  <p className="text-slate-600 dark:text-slate-200 leading-relaxed transition-colors duration-300">
                    Working together with teams to create impactful and
                    meaningful projects
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
