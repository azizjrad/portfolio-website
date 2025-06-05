"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const footerLinks = {
  navigation: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/azizjrad",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/azizjrad/",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "/contact",
      icon: Mail,
    },
  ],
};

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-white transition-colors duration-300">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-600/10 via-purple-600/10 to-teal-600/10 dark:from-teal-500/15 dark:via-purple-500/15 dark:to-teal-500/15 transition-colors duration-300"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content - Centered layout */}
        <div className="py-12 sm:py-16">
          {/* Brand section - Centered on mobile */}
          <div className="text-center mb-8 sm:mb-12">
            {/* Social links - Centered */}
            <div className="flex justify-center space-x-4 sm:space-x-6 mb-8">
              {footerLinks.social.map((social) => {
                const Icon = social.icon;
                const isExternal = social.href.startsWith("http");

                if (isExternal) {
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative p-3 sm:p-4 bg-slate-700/50 dark:bg-slate-800/50 rounded-xl hover:bg-gradient-to-r hover:from-teal-600 hover:to-purple-600 dark:hover:from-teal-500 dark:hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/25 dark:hover:shadow-teal-400/20"
                      aria-label={social.name}
                    >
                      <Icon
                        size={20}
                        className="text-slate-300 dark:text-slate-400 group-hover:text-white transition-colors"
                      />
                    </a>
                  );
                } else {
                  return (
                    <Link
                      key={social.name}
                      href={social.href}
                      className="group relative p-3 sm:p-4 bg-slate-700/50 dark:bg-slate-800/50 rounded-xl hover:bg-gradient-to-r hover:from-teal-600 hover:to-purple-600 dark:hover:from-teal-500 dark:hover:to-purple-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/25 dark:hover:shadow-teal-400/20"
                      aria-label={social.name}
                    >
                      <Icon
                        size={20}
                        className="text-slate-300 dark:text-slate-400 group-hover:text-white transition-colors"
                      />
                    </Link>
                  );
                }
              })}
            </div>
          </div>          {/* Navigation and Contact Grid - Responsive and centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 text-center md:text-left max-w-4xl mx-auto">
            {/* Quick Links */}
            <div className="flex flex-col items-center md:items-start">
              <h4 className="text-lg font-semibold mb-4 sm:mb-6 text-teal-400 dark:text-teal-300 transition-colors duration-300">
                Quick Links
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-slate-300 dark:text-slate-400 hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 group inline-block"
                    >
                      <span className="relative">
                        {link.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-400 to-purple-400 dark:from-teal-300 dark:to-purple-300 group-hover:w-full transition-all duration-300"></span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>{" "}
            {/* Contact Info */}
            <div className="flex flex-col items-center md:items-start lg:col-span-2">
              <h4 className="text-lg font-semibold mb-4 sm:mb-6 text-purple-400 dark:text-purple-300 transition-colors duration-300">
                Get In Touch
              </h4>
              <div className="space-y-3 sm:space-y-4 text-center md:text-left">
                <Link
                  href="/contact"
                  className="flex items-center justify-center md:justify-start text-slate-300 dark:text-slate-400 hover:text-teal-400 dark:hover:text-teal-300 transition-colors duration-200 group"
                >
                  <Mail
                    size={16}
                    className="mr-3 group-hover:scale-110 transition-transform"
                  />
                  Contact Me
                </Link>
                <p className="text-slate-400 dark:text-slate-500 text-sm leading-relaxed max-w-md mx-auto md:mx-0 transition-colors duration-300">
                  Available for freelance opportunities and exciting projects.
                  Let's discuss how we can work together!
                </p>
              </div>
            </div>
          </div>
        </div>        {/* Bottom section - Centered copyright */}
        <div className="border-t border-slate-700/50 dark:border-slate-600/50 py-6 sm:py-8 transition-colors duration-300">
          <div className="flex justify-center items-center">
            <div className="flex items-center space-x-2 text-slate-400 dark:text-slate-500 text-sm sm:text-base transition-colors duration-300">
              <span>© {new Date().getFullYear()} Aziz Jrad. Made with</span>
              <Heart size={16} className="text-red-400 dark:text-red-300 animate-pulse transition-colors duration-300" />
              <span>and lots of ☕</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
