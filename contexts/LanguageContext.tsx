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
    contact: "Contact", // Home page
    heroTitle: "Passionate Developer",
    heroSubtitle:
      "Business Computing student specializing in E-Business, with hands-on experience in frontend development and a strong interest in Business Intelligence. Skilled in creating clean, user-friendly web interfaces with a focus on UI/UX design and strategic problem-solving. Passionate about combining technology, design, and data to build solutions that address real-world business needs.",
    heroRole: "Full Stack Developer",
    getInTouch: "Get in Touch",
    viewMyWork: "View My Work",
    greeting: "Hi, I'm",
    myName: "Aziz Jrad",

    // About page
    aboutTitle: "About Me",
    aboutSubtitle:
      "Passionate developer with a love for creating innovative solutions",
    aboutDescription:
      "I'm Aziz Jrad, a Business Computing student from Tunisia specializing in E-Business. With hands-on experience in frontend and backend development and a passion for UI/UX design, I enjoy combining technology, design, and data to create meaningful solutions that solve real-world business problems.",
    skillsTitle: "Skills & Technologies",
    experienceTitle: "Experience",
    myStory: "My Story",
    softSkills: "Soft Skills",
    coreValues: "Core Values",
    whatDrivesMe: "What Drives Me",
    principlesGuide:
      "These principles guide my approach to development and collaboration",
    innovation: "Innovation",
    innovationDesc:
      "Always exploring new technologies and pushing the boundaries of what's possible",
    problemSolving: "Problem Solving",
    problemSolvingDesc:
      "Finding elegant solutions to complex challenges through creative thinking",
    collaboration: "Collaboration",
    collaborationDesc:
      "Working together with teams to create impactful and meaningful projects",

    // Projects page
    projectsTitle: "My Projects",
    viewLive: "View Live",
    viewCode: "View Code",
    featuredProjects: "Featured Projects",
    otherProjects: "Other Projects",
    liveDemo: "Live Demo",
    demo: "Demo",
    code: "Code", // Contact page
    contactTitle: "Get in Touch",
    contactSubtitle: "Let's work together to bring your ideas to life",
    startConversation: "Start a Conversation",
    contactDescription:
      "Ready to collaborate? I'd love to hear about your project and discuss how we can work together to create something amazing.",
    letsConnect: "Let's Connect",
    contactPageDescription:
      "I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to say hello, I'd love to hear from you!",
    nameLabel: "Name",
    emailLabel: "Email",
    subjectLabel: "Subject",
    messageLabel: "Message",
    sendMessage: "Send Message",
    sending: "Sending...",
    yourName: "Your name",
    yourEmail: "your.email@example.com",
    subjectPlaceholder: "What's this about?",
    messagePlaceholder: "Tell me about your project or just say hello!",
    phoneLabel: "Phone",
    locationLabel: "Location",
    responseTimeLabel: "Response Time",
    locationValue: "Nabeul, Tunisia",
    responseTimeValue: "Usually within 24 hours",
    connectBadge: "💌 Let's Connect",
    availableForWork:
      "I'm currently available for freelance work and full-time opportunities. Feel free to reach out through any of the channels below.",
    followMe: "Follow Me",
    proTip:
      "💡 Pro tip: Follow me on GitHub to see my latest projects and contributions!",
    sendMeMessage: "Send Me a Message",
    readyToStart: "Ready to Start a Project?",
    excitedToWork:
      "I'm always excited to work on new and challenging projects. Let's discuss how we can bring your ideas to life and create something amazing together!",
    callMe: "Call Me",
    successMessage: "Thank you for your message! I'll get back to you soon.",
    errorMessage: "Failed to send message. Please try again.",
    networkError: "Network error. Please check your connection and try again.", // Resume page
    resumeTitle: "Resume",
    resumeSubtitle:
      "A comprehensive overview of my professional experience, education, and skills",
    downloadPdf: "Download My Resume",
    myResume: "My Resume",
    email: "Email",
    phone: "Phone",
    location: "Location",
    portfolio: "Portfolio",
    professionalSummary: "Professional Summary",
    professionalSummaryText:
      "Full‑stack developer focused on building clean, responsive, and accessible web apps. I enjoy turning ideas into simple, fast UIs, wiring solid APIs, and writing maintainable TypeScript. Curious, collaborative, and always learning.",
    professionalExperience: "Professional Experience",
    education: "Education",
    certifications: "Certifications",
    skills: "Skills",
    relevantCoursework: "Relevant Coursework",
    credentialId: "Credential ID",
    clickToView: "Click to view certificate →",
    gpa: "GPA",

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
    contact: "Contact", // Home page
    heroTitle: "Développeur Passionné",
    heroSubtitle:
      "Étudiant en Informatique de Gestion spécialisé en E-Business, avec une expérience pratique en développement frontend et un fort intérêt pour l'Intelligence d'Affaires. Compétent dans la création d'interfaces web propres et conviviales avec un focus sur la conception UI/UX et la résolution stratégique de problèmes. Passionné par la combinaison de la technologie, du design et des données pour créer des solutions qui répondent aux besoins commerciaux réels.",
    heroRole: "Développeur Full-Stack",
    getInTouch: "Prenez Contact",
    viewMyWork: "Voir Mon Travail",
    greeting: "Salut, je suis",
    myName: "Aziz Jrad",

    // About page
    aboutTitle: "À Propos de Moi",
    aboutSubtitle:
      "Développeur passionné avec un amour pour créer des solutions innovantes",
    aboutDescription:
      "Je suis Aziz Jrad, un étudiant en Informatique de Gestion de Tunisie spécialisé en E-Business. Avec une expérience pratique en développement frontend et backend et une passion pour la conception UI/UX, j'aime combiner technologie, design et données pour créer des solutions significatives qui résolvent des problèmes commerciaux réels.",
    skillsTitle: "Compétences & Technologies",
    experienceTitle: "Expérience",
    myStory: "Mon Histoire",
    softSkills: "Soft Skills",
    coreValues: "Valeurs Fondamentales",
    whatDrivesMe: "Ce Qui Me Motive",
    principlesGuide:
      "Ces principes guident mon approche du développement et de la collaboration",
    innovation: "Innovation",
    innovationDesc:
      "Toujours explorer de nouvelles technologies et repousser les limites du possible",
    problemSolving: "Résolution de Problèmes",
    problemSolvingDesc:
      "Trouver des solutions élégantes aux défis complexes grâce à la pensée créative",
    collaboration: "Collaboration",
    collaborationDesc:
      "Travailler ensemble avec des équipes pour créer des projets impactants et significatifs",

    // Projects page
    projectsTitle: "Mes Projets",
    viewLive: "Voir En Direct",
    viewCode: "Voir le Code",
    featuredProjects: "Projets Vedettes",
    otherProjects: "Autres Projets",
    liveDemo: "Démo En Direct",
    demo: "Démo",
    code: "Code", // Contact page
    contactTitle: "Prenez Contact",
    contactSubtitle: "Travaillons ensemble pour donner vie à vos idées",
    startConversation: "Commencer une Conversation",
    contactDescription:
      "Prêt à collaborer ? J'adorerais entendre parler de votre projet et discuter de la façon dont nous pouvons travailler ensemble pour créer quelque chose d'incroyable.",
    letsConnect: "Restons en Contact",
    contactPageDescription:
      "Je suis toujours intéressé par de nouvelles opportunités et collaborations. Que vous ayez un projet en tête ou que vous vouliez simplement dire bonjour, j'adorerais avoir de vos nouvelles !",
    nameLabel: "Nom",
    emailLabel: "Email",
    subjectLabel: "Sujet",
    messageLabel: "Message",
    sendMessage: "Envoyer le Message",
    sending: "Envoi en cours...",
    yourName: "Votre nom",
    yourEmail: "votre.email@exemple.com",
    subjectPlaceholder: "De quoi s'agit-il ?",
    messagePlaceholder:
      "Parlez-moi de votre projet ou dites simplement bonjour !",
    phoneLabel: "Téléphone",
    locationLabel: "Localisation",
    responseTimeLabel: "Temps de Réponse",
    locationValue: "Nabeul, Tunisie",
    responseTimeValue: "Généralement sous 24 heures",
    connectBadge: "💌 Restons en Contact",
    availableForWork:
      "Je suis actuellement disponible pour du travail freelance et des opportunités à temps plein. N'hésitez pas à me contacter par l'un des canaux ci-dessous.",
    followMe: "Suivez-Moi",
    proTip:
      "💡 Conseil : Suivez-moi sur GitHub pour voir mes derniers projets et contributions !",
    sendMeMessage: "Envoyez-moi un Message",
    readyToStart: "Prêt à Commencer un Projet ?",
    excitedToWork:
      "Je suis toujours enthousiaste à l'idée de travailler sur de nouveaux projets stimulants. Discutons de la façon dont nous pouvons donner vie à vos idées et créer quelque chose d'incroyable ensemble !",
    callMe: "Appelez-Moi",
    successMessage: "Merci pour votre message ! Je vous répondrai bientôt.",
    errorMessage: "Échec de l'envoi du message. Veuillez réessayer.",
    networkError:
      "Erreur réseau. Veuillez vérifier votre connexion et réessayer.", // Resume page
    resumeTitle: "CV",
    resumeSubtitle:
      "Un aperçu complet de mon expérience professionnelle, de mon éducation et de mes compétences",
    downloadPdf: "Télécharger Mon CV",
    myResume: "Mon CV",
    email: "Email",
    phone: "Téléphone",
    location: "Localisation",
    portfolio: "Portfolio",
    professionalSummary: "Résumé Professionnel",
    professionalSummaryText:
      "Développeur full‑stack, je crée des applications web propres, responsives et accessibles. J’aime transformer des idées en interfaces simples et rapides, connecter des APIs fiables et écrire du TypeScript maintenable. Curieux, collaboratif et toujours en apprentissage.",
    professionalExperience: "Expérience Professionnelle",
    education: "Éducation",
    certifications: "Certifications",
    skills: "Compétences",
    relevantCoursework: "Cours Pertinents",
    credentialId: "ID de Certification",
    clickToView: "Cliquez pour voir le certificat →",
    gpa: "Moyenne",

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
