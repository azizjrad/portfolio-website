"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Code,
  Palette,
  Users,
  Zap,
} from "lucide-react";
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

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="pt-24 relative overflow-hidden">
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

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="text-center space-y-8 sm:space-y-12">
            {/* Enhanced main heading with better typography */}
            <div className="space-y-8 animate-fade-in">
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400/20 to-purple-400/20 rounded-3xl blur-2xl animate-pulse"></div>
                <h1 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-800 leading-tight">
                  <span className="block mb-4 text-xl sm:text-2xl md:text-3xl font-light text-slate-600 tracking-wide">
                    {t("greeting")}
                  </span>
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-teal-600 via-purple-600 to-teal-600 bg-clip-text text-transparent animate-gradient-x bg-300%">
                      {t("myName")}
                    </span>
                  </span>
                </h1>
              </div>

              {/* Simple subtitle with normal styling */}
              <div className="space-y-6 max-w-4xl mx-auto">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
                  Full Stack Developer
                </h2>
                <p className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed font-light">
                  {t("heroSubtitle")}
                </p>
              </div>
            </div>

            {/* Enhanced call-to-action buttons */}
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-center pt-8 animate-slide-up">
              <Link
                href="/projects"
                className="group relative inline-flex items-center justify-center px-10 py-5 sm:px-12 sm:py-6 bg-gradient-to-r from-teal-600 to-purple-600 text-white font-bold rounded-3xl transition-all duration-300 shadow-2xl hover:shadow-3xl hover:shadow-purple-500/40 text-lg sm:text-xl transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center font-bold">
                  {t("viewMyWork")}
                  <ArrowRight
                    className="ml-4 group-hover:translate-x-1 transition-transform duration-300"
                    size={24}
                  />
                </span>
                {/* Glassy highlight overlay that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl backdrop-blur-sm"></div>
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
              </Link>

              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center px-10 py-5 sm:px-12 sm:py-6 border-2 border-white/30 text-slate-800 font-bold rounded-3xl hover:bg-gradient-to-r hover:from-teal-600 hover:to-purple-600 hover:text-white hover:border-transparent transition-all duration-500 shadow-2xl hover:shadow-3xl shadow-teal-500/30 transform hover:scale-105 hover:-translate-y-2 backdrop-blur-lg bg-white/10 text-lg sm:text-xl"
              >
                <span className="relative z-10 font-bold">
                  {t("getInTouch")}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              </Link>
            </div>

            {/* Enhanced social icons with better spacing */}
            <div
              className="flex justify-center space-x-6 sm:space-x-8 pt-12 animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              {[
                {
                  href: "https://github.com/azizjrad",
                  icon: Github,
                  color: "teal",
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/azizjrad/",
                  icon: Linkedin,
                  color: "purple",
                  label: "LinkedIn",
                },
                {
                  href: "/contact",
                  icon: Mail,
                  color: "teal",
                  label: "Email",
                  isInternal: true,
                },
              ].map((social, index) =>
                social.isInternal ? (
                  <Link
                    key={social.label}
                    href={social.href}
                    className={`group relative p-5 sm:p-6 bg-white/90 backdrop-blur-sm rounded-3xl text-slate-600 hover:text-white border-2 border-slate-200/50 hover:border-${social.color}-400/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-110 hover:shadow-2xl hover:shadow-${social.color}-500/30 overflow-hidden`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-${social.color}-600 to-${social.color}-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                    ></div>
                    {/* Glassy highlight overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl backdrop-blur-sm"></div>
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                    <social.icon
                      size={32}
                      className="relative z-10 group-hover:scale-110 transition-transform duration-300"
                    />
                  </Link>
                ) : (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-5 sm:p-6 bg-white/90 backdrop-blur-sm rounded-3xl text-slate-600 hover:text-white border-2 border-slate-200/50 hover:border-${social.color}-400/50 transition-all duration-500 transform hover:-translate-y-4 hover:scale-110 hover:shadow-2xl hover:shadow-${social.color}-500/30 overflow-hidden`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-${social.color}-600 to-${social.color}-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                    ></div>
                    {/* Glassy highlight overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl backdrop-blur-sm"></div>
                    {/* Animated shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                    <social.icon
                      size={32}
                      className="relative z-10 group-hover:scale-110 transition-transform duration-300"
                    />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced About Header */}
          <div className="text-center mb-20 sm:mb-24 animate-fade-in">
            <div className="relative inline-block">
              <div className="absolute -inset-8 bg-gradient-to-r from-teal-400/20 to-purple-400/20 rounded-3xl blur-2xl animate-pulse"></div>
              <h2 className="relative text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-8 transition-colors duration-300">
                {t("aboutTitle").split(" ")[0]}{" "}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-teal-600 via-purple-600 to-teal-600 bg-clip-text text-transparent transition-colors duration-300">
                    {t("aboutTitle").split(" ")[1] || "Me"}
                  </span>
                  <div className="absolute -bottom-2 sm:-bottom-3 left-0 w-full h-1 sm:h-2 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full transition-all duration-300"></div>
                </span>
              </h2>
            </div>
          </div>

          {/* Enhanced Bio Section */}
          <div className="mb-20 sm:mb-24 animate-slide-up">
            <div className="group relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 p-8 md:p-12 lg:p-16 border border-white/30 hover:border-teal-300/50 transform hover:-translate-y-3 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-purple-500 rounded-t-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-teal-500/30">
                    <Users className="text-white" size={32} />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-slate-800 transition-colors duration-300">
                    {t("myStory")}
                  </h3>
                </div>
                <div className="prose prose-xl text-slate-600 max-w-none">
                  <p className="text-lg sm:text-xl leading-relaxed">
                    {t("aboutDescription")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Skills Section */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-20 sm:mb-24">
            {/* Enhanced Technical Skills */}
            <div className="group relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 p-8 md:p-10 border border-white/30 hover:border-teal-300/50 transform hover:-translate-y-3 animate-slide-up overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-transparent to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-purple-500 rounded-t-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-3xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-teal-500/30">
                    <Code className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 transition-colors duration-300">
                    {t("skillsTitle")}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.technical.map((skill, index) => (
                    <div
                      key={skill}
                      className="group/skill relative bg-gradient-to-r from-teal-50 to-teal-100 hover:from-teal-100 hover:to-teal-200 px-5 py-4 rounded-2xl text-teal-700 font-semibold text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-teal-200/50 hover:border-teal-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="relative z-10">{skill}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-200/50 to-teal-300/50 rounded-2xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Soft Skills */}
            <div className="group relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 p-8 md:p-10 border border-white/30 hover:border-purple-300/50 transform hover:-translate-y-3 animate-slide-up overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-teal-500 rounded-t-3xl"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-10">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-purple-500/30">
                    <Palette className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 transition-colors duration-300">
                    {t("softSkills")}
                  </h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {skills.soft.map((skill, index) => (
                    <div
                      key={skill}
                      className="group/skill relative bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 px-5 py-4 rounded-2xl text-purple-700 font-semibold text-sm sm:text-base transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-purple-200/50 hover:border-purple-300"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span className="relative z-10">{skill}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-200/50 to-purple-300/50 rounded-2xl opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Want to work together Section */}
          <div className="relative bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 lg:p-16 animate-slide-up shadow-2xl border border-white/30 transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-600/5 via-purple-600/5 to-teal-600/5 rounded-3xl transition-all duration-300"></div>
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-purple-500 rounded-t-3xl"></div>
            <div className="relative z-10">
              <div className="text-center mb-12">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-6 transition-colors duration-300">
                  Want to work together?
                </h3>
                <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto transition-colors duration-300 leading-relaxed">
                  Feel free to reach out for collaborations.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center">
                  <Link
                    href="/contact"
                    className="group relative text-lg sm:text-xl font-semibold text-slate-700 hover:text-slate-800 transition-colors duration-300"
                  >
                    <span className="relative z-10">azizjrad9@gmail.com</span>
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600"></div>
                    <div className="absolute bottom-0 left-0 w-full h-full bg-purple-600 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom opacity-10"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
