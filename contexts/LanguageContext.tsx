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
    heroTitle: "Passionate Developer",
    heroSubtitle:
      "I create beautiful, functional, and user-centered digital experiences that bridge the gap between design and technology.",
    getInTouch: "Get in Touch",
    viewMyWork: "View My Work",

    // About page
    aboutTitle: "About Me",
    aboutSubtitle:
      "Passionate developer with a love for creating innovative solutions",
    aboutDescription:
      "I'm a dedicated developer with a passion for creating digital experiences that make a difference. With expertise in modern web technologies and a keen eye for design, I strive to build applications that are not only functional but also beautiful and intuitive.",    skillsTitle: "Skills & Technologies",
    experienceTitle: "Experience",
    myStory: "My Story",
    softSkills: "Soft Skills",
    coreValues: "Core Values",
    whatDrivesMe: "What Drives Me",
    principlesGuide: "These principles guide my approach to development and collaboration",
    innovation: "Innovation",
    innovationDesc: "Always exploring new technologies and pushing the boundaries of what's possible",
    problemSolving: "Problem Solving",
    problemSolvingDesc: "Finding elegant solutions to complex challenges through creative thinking",
    collaboration: "Collaboration",
    collaborationDesc: "Working together with teams to create impactful and meaningful projects",

    // Projects page
    projectsTitle: "My Projects",    projectsSubtitle: "A showcase of my recent work and creative solutions",
    viewLive: "View Live",
    viewCode: "View Code",
    featuredProjects: "Featured Projects",
    otherProjects: "Other Projects",
    liveDemo: "Live Demo",
    demo: "Demo",
    code: "Code",// Contact page
    contactTitle: "Get in Touch",
    contactSubtitle: "Let's work together to bring your ideas to life",
    startConversation: "Start a Conversation",
    contactDescription:
      "Ready to collaborate? I'd love to hear about your project and discuss how we can work together to create something amazing.",
    letsConnect: "Let's Connect",
    contactPageDescription: "I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to say hello, I'd love to hear from you!",
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
    locationValue: "Nabeul, Tunisia",    responseTimeValue: "Usually within 24 hours",
    connectBadge: "💌 Let's Connect",
    availableForWork: "I'm currently available for freelance work and full-time opportunities. Feel free to reach out through any of the channels below.",
    followMe: "Follow Me",
    proTip: "💡 Pro tip: Follow me on GitHub to see my latest projects and contributions!",
    sendMeMessage: "Send Me a Message",
    readyToStart: "Ready to Start a Project?",
    excitedToWork: "I'm always excited to work on new and challenging projects. Let's discuss how we can bring your ideas to life and create something amazing together!",
    callMe: "Call Me",
    successMessage: "Thank you for your message! I'll get back to you soon.",
    errorMessage: "Failed to send message. Please try again.",
    networkError: "Network error. Please check your connection and try again.",    // Resume page
    resumeTitle: "Resume",
    resumeSubtitle: "A comprehensive overview of my professional experience, education, and skills",
    downloadPdf: "Download PDF Resume",
    myResume: "My Resume",
    email: "Email",
    phone: "Phone",
    location: "Location",
    portfolio: "Portfolio",
    professionalSummary: "Professional Summary",
    professionalSummaryText: "Passionate and detail-oriented Frontend Developer with 3+ years of experience creating responsive, user-friendly web applications. Proficient in modern JavaScript frameworks and committed to writing clean, maintainable code. Strong problem-solving skills and experience working in agile development environments. Seeking to leverage technical expertise and creative problem-solving abilities to contribute to innovative web development projects.",
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
    contact: "Contact",

    // Home page
    heroTitle: "Développeur Passionné",
    heroSubtitle:
      "Je crée des expériences numériques belles, fonctionnelles et centrées sur l'utilisateur qui font le pont entre le design et la technologie.",
    getInTouch: "Prenez Contact",
    viewMyWork: "Voir Mon Travail",

    // About page
    aboutTitle: "À Propos de Moi",
    aboutSubtitle:
      "Développeur passionné avec un amour pour créer des solutions innovantes",
    aboutDescription:
      "Je suis un développeur dévoué avec une passion pour créer des expériences numériques qui font la différence. Avec une expertise dans les technologies web modernes et un œil attentif au design, je m'efforce de construire des applications qui sont non seulement fonctionnelles mais aussi belles et intuitives.",    skillsTitle: "Compétences & Technologies",
    experienceTitle: "Expérience",
    myStory: "Mon Histoire",
    softSkills: "Compétences Relationnelles",
    coreValues: "Valeurs Fondamentales",
    whatDrivesMe: "Ce Qui Me Motive",
    principlesGuide: "Ces principes guident mon approche du développement et de la collaboration",
    innovation: "Innovation",
    innovationDesc: "Toujours explorer de nouvelles technologies et repousser les limites du possible",
    problemSolving: "Résolution de Problèmes",
    problemSolvingDesc: "Trouver des solutions élégantes aux défis complexes grâce à la pensée créative",
    collaboration: "Collaboration",
    collaborationDesc: "Travailler ensemble avec des équipes pour créer des projets impactants et significatifs",

    // Projects page
    projectsTitle: "Mes Projets",    projectsSubtitle:
      "Une vitrine de mon travail récent et de mes solutions créatives",
    viewLive: "Voir En Direct",
    viewCode: "Voir le Code",
    featuredProjects: "Projets Vedettes",
    otherProjects: "Autres Projets",
    liveDemo: "Démo En Direct",
    demo: "Démo",
    code: "Code",// Contact page
    contactTitle: "Prenez Contact",
    contactSubtitle: "Travaillons ensemble pour donner vie à vos idées",
    startConversation: "Commencer une Conversation",
    contactDescription:
      "Prêt à collaborer ? J'adorerais entendre parler de votre projet et discuter de la façon dont nous pouvons travailler ensemble pour créer quelque chose d'incroyable.",
    letsConnect: "Restons en Contact",
    contactPageDescription: "Je suis toujours intéressé par de nouvelles opportunités et collaborations. Que vous ayez un projet en tête ou que vous vouliez simplement dire bonjour, j'adorerais avoir de vos nouvelles !",
    nameLabel: "Nom",
    emailLabel: "Email",
    subjectLabel: "Sujet",
    messageLabel: "Message",
    sendMessage: "Envoyer le Message",
    sending: "Envoi en cours...",
    yourName: "Votre nom",
    yourEmail: "votre.email@exemple.com",
    subjectPlaceholder: "De quoi s'agit-il ?",
    messagePlaceholder: "Parlez-moi de votre projet ou dites simplement bonjour !",
    phoneLabel: "Téléphone",
    locationLabel: "Localisation",
    responseTimeLabel: "Temps de Réponse",
    locationValue: "Nabeul, Tunisie",    responseTimeValue: "Généralement sous 24 heures",
    connectBadge: "💌 Restons en Contact",
    availableForWork: "Je suis actuellement disponible pour du travail freelance et des opportunités à temps plein. N'hésitez pas à me contacter par l'un des canaux ci-dessous.",
    followMe: "Suivez-Moi",
    proTip: "💡 Conseil : Suivez-moi sur GitHub pour voir mes derniers projets et contributions !",
    sendMeMessage: "Envoyez-moi un Message",
    readyToStart: "Prêt à Commencer un Projet ?",
    excitedToWork: "Je suis toujours enthousiaste à l'idée de travailler sur de nouveaux projets stimulants. Discutons de la façon dont nous pouvons donner vie à vos idées et créer quelque chose d'incroyable ensemble !",
    callMe: "Appelez-Moi",
    successMessage: "Merci pour votre message ! Je vous répondrai bientôt.",
    errorMessage: "Échec de l'envoi du message. Veuillez réessayer.",
    networkError: "Erreur réseau. Veuillez vérifier votre connexion et réessayer.",    // Resume page
    resumeTitle: "CV",
    resumeSubtitle: "Un aperçu complet de mon expérience professionnelle, de mon éducation et de mes compétences",
    downloadPdf: "Télécharger CV PDF",
    myResume: "Mon CV",
    email: "Email",
    phone: "Téléphone",
    location: "Localisation",
    portfolio: "Portfolio",
    professionalSummary: "Résumé Professionnel",
    professionalSummaryText: "Développeur Frontend passionné et soucieux du détail avec plus de 3 ans d'expérience dans la création d'applications web responsives et conviviales. Compétent dans les frameworks JavaScript modernes et engagé à écrire du code propre et maintenable. Solides compétences en résolution de problèmes et expérience de travail dans des environnements de développement agiles. Cherche à tirer parti de l'expertise technique et des capacités créatives de résolution de problèmes pour contribuer à des projets de développement web innovants.",
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
