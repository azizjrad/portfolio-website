"use client";

import {
  Download,
  Calendar,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";
import { useLanguage } from "../../contexts/LanguageContext";

const experience = [
  {
    title: "Web Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "2025 - Present",
    description: [
      "Developed and maintained responsive web applications using React and Next.js",
      "Built reusable UI components with Tailwind CSS and shadcn/ui",
      "Integrated REST APIs and implemented backend functionalities",
      "Deployed to Vercel and improved performance and SEO (meta, Open Graph, JSON-LD)",
    ],
  },
];

// French translations for experience bullet points
const experienceFrMap: Record<string, string> = {
  "Developed and maintained responsive web applications using React and Next.js":
    "Développé et maintenu des applications web responsives avec React et Next.js",
  "Built reusable UI components with Tailwind CSS and shadcn/ui":
    "Créé des composants UI réutilisables avec Tailwind CSS et shadcn/ui",
  "Integrated REST APIs and implemented backend functionalities":
    "Intégré des API REST et mis en place des fonctionnalités backend",
  "Deployed to Vercel and improved performance and SEO (meta, Open Graph, JSON-LD)":
    "Déployé sur Vercel et amélioré les performances et le SEO (meta, Open Graph, JSON‑LD)",
};

const education = [
  {
    degree: "Bachelor of Business Computing, E-Business Major",
    school: "High School of Digital Economy",
    location: "Manouba, Tunisia",
    period: "2023 - 2026",
    gpa: "3.8/4.0",
    relevant: [
      "Data Structures & Algorithms",
      "Web Development",
      "Database Systems",
      "E-commerce Technologies",
    ],
  },
];

const certifications = [
  {
    name: "Introduction to Oracle SQL",
    issuer: "DataCamp",
    date: "2024",
    credentialId: "89c4809c8d66558dfd5a3f85a018f0b4e008c28b",
    url: "https://www.datacamp.com/completed/statement-of-accomplishment/course/89c4809c8d66558dfd5a3f85a018f0b4e008c28b",
  },
  {
    name: "The Complete Full-Stack Web Development Bootcamp",
    issuer: "Udemy",
    date: "2022",
    credentialId: "UC-39f79f2a-c914-4905-8b11-0414529ec550",
    url: "http://udemy.com/certificate/UC-39f79f2a-c914-4905-8b11-0414529ec550/",
  },
];

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "PHP",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Git",
  "MongoDB",
  "SQL",
  "RESTful APIs",
  "Responsive Design",
  "Agile Development",
  "Problem Solving",
  "Team Collaboration",
];

export default function Resume() {
  const { t, language } = useLanguage();

  const handleDownloadPDF = () => {
    // Download the appropriate CV file based on language
    const cvFileName = language === "fr" ? "CV fr.pdf" : "CV eng.pdf";
    const link = document.createElement("a");
    link.href = `/${cvFileName}`;
    link.download = cvFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden">
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

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6 transition-colors duration-300">
            {t("myResume").split(" ")[0]}{" "}
            <span className="bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent transition-colors duration-300">
              {t("myResume").split(" ")[1] || t("resumeTitle")}
            </span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 leading-relaxed transition-colors duration-300">
            {t("resumeSubtitle")}
          </p>
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-medium rounded-full hover:from-teal-700 hover:to-teal-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Download className="mr-2" size={20} />
            {t("downloadPdf")}
          </button>
        </div>

        {/* Contact Info */}
        <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 mb-8 animate-slide-up transition-colors duration-300 border border-white/20">
          <div className="grid md:grid-cols-3 gap-6 justify-items-center md:justify-items-start">
            <div className="flex items-center">
              <Mail
                className="text-teal-600 mr-3 transition-colors duration-300"
                size={20}
              />
              <div>
                <p className="text-sm text-slate-500 transition-colors duration-300">
                  {t("email")}
                </p>
                <p className="font-medium text-slate-800 transition-colors duration-300">
                  aziz.jrad@esen.tn
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone
                className="text-teal-600 mr-3 transition-colors duration-300"
                size={20}
              />
              <div>
                <p className="text-sm text-slate-500 transition-colors duration-300">
                  {t("phone")}
                </p>
                <p className="font-medium text-slate-800 transition-colors duration-300">
                  (216) 95 650 081
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin
                className="text-teal-600 mr-3 transition-colors duration-300"
                size={20}
              />
              <div>
                <p className="text-sm text-slate-500 transition-colors duration-300">
                  {t("location")}
                </p>
                <p className="font-medium text-slate-800 transition-colors duration-300">
                  Nabeul, Tunisia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 mb-8 animate-slide-up transition-colors duration-300 border border-white/20">
          <h2 className="text-2xl font-bold text-slate-800 mb-4 transition-colors duration-300">
            {t("professionalSummary")}
          </h2>
          <p className="text-slate-600 leading-relaxed transition-colors duration-300">
            {t("professionalSummaryText")}
          </p>
        </div>

        {/* Experience */}
        <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 mb-8 animate-slide-up transition-colors duration-300 border border-white/20">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 transition-colors duration-300">
            {t("professionalExperience")}
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="relative">
                {index !== experience.length - 1 && (
                  <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-gradient-to-b from-teal-200 to-purple-200 transition-colors duration-300"></div>
                )}
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-purple-500 rounded-full flex items-center justify-center mr-4 relative z-10 transition-colors duration-300">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-800 transition-colors duration-300">
                        {language === "fr" ? "Développeur web" : job.title}
                      </h3>
                      <div className="flex items-center text-slate-500 text-sm transition-colors duration-300">
                        <Calendar size={16} className="mr-1" />
                        {job.period}
                      </div>
                    </div>
                    <div className="flex items-center text-teal-600 font-medium mb-3 transition-colors duration-300">
                      <span>{job.company}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {job.location}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {job.description.map((item, i) => {
                        const text =
                          language === "fr"
                            ? experienceFrMap[item] || item
                            : item;
                        return (
                          <li
                            key={i}
                            className="text-slate-600 flex items-start transition-colors duration-300"
                          >
                            <span className="text-teal-500 mr-2 mt-2 transition-colors duration-300">
                              •
                            </span>
                            {text}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 mb-8 animate-slide-up transition-colors duration-300 border border-white/20">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 transition-colors duration-300">
            {t("education")}
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-800 transition-colors duration-300">
                  {language === "fr"
                    ? "Licence en Informatique de Gestion, spécialité E‑Business"
                    : edu.degree}
                </h3>
                <div className="flex items-center text-slate-500 text-sm transition-colors duration-300">
                  <Calendar size={16} className="mr-1" />
                  {edu.period}
                </div>
              </div>
              <div className="flex items-center text-teal-600 font-medium mb-3 transition-colors duration-300">
                <span>
                  {language === "fr"
                    ? "École Supérieure d’Économie Numérique"
                    : edu.school}
                </span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  {edu.location}
                </span>
              </div>
              <div>
                <p className="text-slate-600 mb-2 transition-colors duration-300">
                  {t("relevantCoursework")}:
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.relevant.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-gradient-to-r from-teal-50 to-teal-100 text-teal-700 text-sm font-medium rounded-full transition-colors duration-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 animate-slide-up transition-colors duration-300 border border-white/20">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 transition-colors duration-300">
            {t("certifications")}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 bg-gradient-to-r from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg border border-purple-200/50 hover:border-purple-300"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-slate-800 group-hover:text-purple-700 transition-colors duration-300 flex-1 pr-2">
                    {cert.name}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                  />
                </div>
                <p className="text-purple-700 font-medium text-sm mb-1 transition-colors duration-300">
                  {cert.issuer}
                </p>
                <p className="text-slate-600 text-sm mb-1 transition-colors duration-300">
                  {cert.date}
                </p>
                <p className="text-slate-500 text-xs font-mono transition-colors duration-300">
                  {t("credentialId")}: {cert.credentialId}
                </p>
                <div className="mt-2 text-xs text-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t("clickToView")}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="bg-gradient-to-br from-white/20 to-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-8 mt-8 animate-slide-up transition-colors duration-300 border border-white/20">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 transition-colors duration-300">
            {t("skills")}
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-teal-50 to-teal-100 hover:from-teal-100 hover:to-teal-200 text-teal-700 font-medium rounded-full transition-all duration-200 transform hover:scale-105 hover:shadow-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
