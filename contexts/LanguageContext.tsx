"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Translation keys
const translations = {
  en: {
    // Navigation
    home: "Home",
    about: "About",
    projects: "Projects",
    resume: "Resume",
    contact: "Contact",

    // Home page
    heroTitle: "Passionate Developer & Creative Problem Solver",
    heroSubtitle:
      "I create beautiful, functional, and user-centered digital experiences that bridge the gap between design and technology.",
    getInTouch: "Get in Touch",
    viewMyWork: "View My Work",

    // About page
    aboutTitle: "About Me",
    aboutSubtitle:
      "Passionate developer with a love for creating innovative solutions",
    aboutDescription:
      "I'm a dedicated developer with a passion for creating digital experiences that make a difference. With expertise in modern web technologies and a keen eye for design, I strive to build applications that are not only functional but also beautiful and intuitive.",
    skillsTitle: "Skills & Technologies",
    experienceTitle: "Experience",

    // Projects page
    projectsTitle: "My Projects",
    projectsSubtitle: "A showcase of my recent work and creative solutions",
    viewLive: "View Live",
    viewCode: "View Code",

    // Contact page
    contactTitle: "Get in Touch",
    contactSubtitle: "Let's work together to bring your ideas to life",
    startConversation: "Start a Conversation",
    contactDescription:
      "Ready to collaborate? I'd love to hear about your project and discuss how we can work together to create something amazing.",
    nameLabel: "Name",
    emailLabel: "Email",
    messageLabel: "Message",
    sendMessage: "Send Message",

    // Resume page
    resumeTitle: "Resume",
    resumeSubtitle: "My professional experience and qualifications",
    downloadPdf: "Download PDF",

    // Footer
    footerText: "Built with passion using Next.js and Tailwind CSS",

    // Common
    language: "Language",
    english: "English",
    french: "French",
    loading: "Loading...",
    error: "Error",
    success: "Success",
  },
  fr: {
    // Navigation
    home: "Accueil",
    about: "À propos",
    projects: "Projets",
    resume: "CV",
    contact: "Contact",

    // Home page
    heroTitle: "Développeur Passionné & Résolveur de Problèmes Créatif",
    heroSubtitle:
      "Je crée des expériences numériques belles, fonctionnelles et centrées sur l'utilisateur qui font le pont entre le design et la technologie.",
    getInTouch: "Prenez Contact",
    viewMyWork: "Voir Mon Travail",

    // About page
    aboutTitle: "À Propos de Moi",
    aboutSubtitle:
      "Développeur passionné avec un amour pour créer des solutions innovantes",
    aboutDescription:
      "Je suis un développeur dévoué avec une passion pour créer des expériences numériques qui font la différence. Avec une expertise dans les technologies web modernes et un œil attentif au design, je m'efforce de construire des applications qui sont non seulement fonctionnelles mais aussi belles et intuitives.",
    skillsTitle: "Compétences & Technologies",
    experienceTitle: "Expérience",

    // Projects page
    projectsTitle: "Mes Projets",
    projectsSubtitle:
      "Une vitrine de mon travail récent et de mes solutions créatives",
    viewLive: "Voir En Direct",
    viewCode: "Voir le Code",

    // Contact page
    contactTitle: "Prenez Contact",
    contactSubtitle: "Travaillons ensemble pour donner vie à vos idées",
    startConversation: "Commencer une Conversation",
    contactDescription:
      "Prêt à collaborer ? J'adorerais entendre parler de votre projet et discuter de la façon dont nous pouvons travailler ensemble pour créer quelque chose d'incroyable.",
    nameLabel: "Nom",
    emailLabel: "Email",
    messageLabel: "Message",
    sendMessage: "Envoyer le Message",

    // Resume page
    resumeTitle: "CV",
    resumeSubtitle: "Mon expérience professionnelle et mes qualifications",
    downloadPdf: "Télécharger PDF",

    // Footer
    footerText: "Construit avec passion en utilisant Next.js et Tailwind CSS",

    // Common
    language: "Langue",
    english: "Anglais",
    french: "Français",
    loading: "Chargement...",
    error: "Erreur",
    success: "Succès",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "fr")) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "fr" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
