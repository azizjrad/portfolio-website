"use client";

import {
  Download,
  Calendar,
  MapPin,
  Mail,
  Phone,
  ExternalLink,
} from "lucide-react";
import { generateResumePDF } from "../../utils/pdfGenerator";

const experience = [
  {
    title: "Web Developer",
    company: "High School of Digital Economy.",
    location: "Manouba, Tunisia",
    period: "2025 - Present",
    description: [
      "Developed and maintained responsive web applications using React and Next.js",
      "Collaborated with design team to implement pixel-perfect UI components",
      "Optimized application performance resulting in 40% faster load times",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Capgemini.",
    location: "Remote",
    period: "2021 - 2024",
    description: [
      "Built client websites using modern web technologies",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Worked closely with clients to understand requirements and deliver solutions",
      "Gained experience with version control and agile development practices",
    ],
  },
];

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
  const handleDownloadPDF = () => {
    const resumeData = {
      name: "Aziz Jrad",
      email: "aziz.jrad@esen.tn",
      phone: "(216) 95 650 081",
      location: "Nabeul, Tunisia",
      experience,
      education,
      certifications,
      skills,
    };

    generateResumePDF(resumeData);
  };
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6 transition-colors duration-300">
            My{" "}
            <span className="bg-gradient-to-r from-teal-600 to-purple-600 dark:from-teal-400 dark:to-purple-400 bg-clip-text text-transparent transition-colors duration-300">
              Resume
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-200 mb-8 leading-relaxed transition-colors duration-300">
            A comprehensive overview of my professional experience, education,
            and skills
          </p>
          <button
            onClick={handleDownloadPDF}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-teal-700 dark:from-teal-500 dark:to-teal-600 text-white font-medium rounded-full hover:from-teal-700 hover:to-teal-800 dark:hover:from-teal-400 dark:hover:to-teal-500 transition-all duration-200 shadow-lg hover:shadow-xl dark:shadow-xl dark:hover:shadow-2xl transform hover:-translate-y-1"
          >
            <Download className="mr-2" size={20} />
            Download PDF Resume
          </button>
        </div>

        {/* Contact Info */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg dark:shadow-xl p-8 mb-8 animate-slide-up transition-colors duration-300 border border-transparent dark:border-slate-700/50">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex items-center">
              <Mail
                className="text-teal-600 dark:text-teal-400 mr-3 transition-colors duration-300"
                size={20}
              />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-300">
                  Email
                </p>
                <p className="font-medium text-slate-800 dark:text-slate-100 transition-colors duration-300">
                  aziz.jrad@esen.tn
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Phone
                className="text-teal-600 dark:text-teal-400 mr-3 transition-colors duration-300"
                size={20}
              />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-300">
                  Phone
                </p>
                <p className="font-medium text-slate-800 dark:text-slate-100 transition-colors duration-300">
                  (216) 95 650 081
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin
                className="text-teal-600 dark:text-teal-400 mr-3 transition-colors duration-300"
                size={20}
              />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-300">
                  Location
                </p>
                <p className="font-medium text-slate-800 dark:text-slate-100 transition-colors duration-300">
                  Nabeul, Tunisia
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <ExternalLink
                className="text-teal-600 dark:text-teal-400 mr-3 transition-colors duration-300"
                size={20}
              />
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 transition-colors duration-300">
                  Portfolio
                </p>
                <p className="font-medium text-slate-800 dark:text-slate-100 transition-colors duration-300">
                  azizjrad.dev
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg dark:shadow-xl p-8 mb-8 animate-slide-up transition-colors duration-300 border border-transparent dark:border-slate-700/50">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4 transition-colors duration-300">
            Professional Summary
          </h2>
          <p className="text-slate-600 dark:text-slate-200 leading-relaxed transition-colors duration-300">
            Passionate and detail-oriented Frontend Developer with 3+ years of
            experience creating responsive, user-friendly web applications.
            Proficient in modern JavaScript frameworks and committed to writing
            clean, maintainable code. Strong problem-solving skills and
            experience working in agile development environments. Seeking to
            leverage technical expertise and creative problem-solving abilities
            to contribute to innovative web development projects.
          </p>
        </div>

        {/* Experience */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg dark:shadow-xl p-8 mb-8 animate-slide-up transition-colors duration-300 border border-transparent dark:border-slate-700/50">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 transition-colors duration-300">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="relative">
                {index !== experience.length - 1 && (
                  <div className="absolute left-4 top-12 bottom-0 w-0.5 bg-gradient-to-b from-teal-200 to-purple-200 dark:from-teal-400/50 dark:to-purple-400/50 transition-colors duration-300"></div>
                )}
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-purple-500 dark:from-teal-400 dark:to-purple-400 rounded-full flex items-center justify-center mr-4 relative z-10 transition-colors duration-300">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 transition-colors duration-300">
                        {job.title}
                      </h3>
                      <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm transition-colors duration-300">
                        <Calendar size={16} className="mr-1" />
                        {job.period}
                      </div>
                    </div>
                    <div className="flex items-center text-teal-600 dark:text-teal-400 font-medium mb-3 transition-colors duration-300">
                      <span>{job.company}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <MapPin size={14} className="mr-1" />
                        {job.location}
                      </span>
                    </div>
                    <ul className="space-y-2">
                      {job.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-slate-600 dark:text-slate-300 flex items-start transition-colors duration-300"
                        >
                          <span className="text-teal-500 dark:text-teal-400 mr-2 mt-2 transition-colors duration-300">
                            •
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg dark:shadow-xl p-8 mb-8 animate-slide-up transition-colors duration-300 border border-transparent dark:border-slate-700/50">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 transition-colors duration-300">
            Education
          </h2>
          {education.map((edu, index) => (
            <div key={index} className="mb-6 last:mb-0">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 transition-colors duration-300">
                  {edu.degree}
                </h3>
                <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm transition-colors duration-300">
                  <Calendar size={16} className="mr-1" />
                  {edu.period}
                </div>
              </div>
              <div className="flex items-center text-teal-600 dark:text-teal-400 font-medium mb-3 transition-colors duration-300">
                <span>{edu.school}</span>
                <span className="mx-2">•</span>
                <span className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  {edu.location}
                </span>
                <span className="mx-2">•</span>
                <span>GPA: {edu.gpa}</span>
              </div>
              <div>
                <p className="text-slate-600 dark:text-slate-300 mb-2 transition-colors duration-300">
                  Relevant Coursework:
                </p>
                <div className="flex flex-wrap gap-2">
                  {edu.relevant.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1 bg-gradient-to-r from-teal-50 to-teal-100 dark:from-teal-900/50 dark:to-teal-800/50 text-teal-700 dark:text-teal-300 text-sm font-medium rounded-full transition-colors duration-300"
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
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg dark:shadow-xl p-8 animate-slide-up transition-colors duration-300 border border-transparent dark:border-slate-700/50">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 transition-colors duration-300">
            Certifications
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-4 bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/50 dark:to-purple-800/50 hover:from-purple-100 hover:to-purple-200 dark:hover:from-purple-800/70 dark:hover:to-purple-700/70 rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-xl border border-purple-200/50 dark:border-purple-700/50 hover:border-purple-300 dark:hover:border-purple-600"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-slate-800 dark:text-slate-100 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300 flex-1 pr-2">
                    {cert.name}
                  </h3>
                  <ExternalLink
                    size={16}
                    className="text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0"
                  />
                </div>
                <p className="text-purple-700 dark:text-purple-300 font-medium text-sm mb-1 transition-colors duration-300">
                  {cert.issuer}
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-1 transition-colors duration-300">
                  {cert.date}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-xs font-mono transition-colors duration-300">
                  Credential ID: {cert.credentialId}
                </p>
                <div className="mt-2 text-xs text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to view certificate →
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg dark:shadow-xl p-8 mt-8 animate-slide-up transition-colors duration-300 border border-transparent dark:border-slate-700/50">
          <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-6 transition-colors duration-300">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gradient-to-r from-teal-50 to-teal-100 dark:from-teal-900/50 dark:to-teal-800/50 hover:from-teal-100 hover:to-teal-200 dark:hover:from-teal-800/70 dark:hover:to-teal-700/70 text-teal-700 dark:text-teal-300 font-medium rounded-full transition-all duration-200 transform hover:scale-105 hover:shadow-md dark:hover:shadow-lg"
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
