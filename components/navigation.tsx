"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";

const navItems = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "projects", href: "/projects" },
  { name: "resume", href: "/resume" },
  { name: "contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border-b border-slate-200/20 dark:border-slate-700/20 z-50 shadow-sm dark:shadow-slate-900/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="group relative font-bold text-2xl transition-all duration-500 overflow-hidden px-4 py-2 rounded-2xl"
          >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-teal-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-all duration-500 animate-gradient-x bg-300%"></div>
            
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent skew-x-12"></div>
            
            {/* Pulsing border */}
            <div className="absolute inset-0 rounded-2xl border-2 border-white/30 dark:border-white/20 opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
            
            <span className="relative z-10 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent group-hover:from-white group-hover:to-white transition-all duration-300">
              Aziz Jrad
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-slate-50/80 dark:bg-slate-800/80 rounded-full p-3 shadow-inner dark:shadow-slate-900/20 transition-all duration-300">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 ease-out group ${
                    pathname === item.href
                      ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/25"
                      : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-white dark:hover:bg-slate-700 hover:shadow-md dark:hover:shadow-slate-900/20"
                  }`}
                >
                  <span className="relative z-10">{t(item.name)}</span>
                  {pathname !== item.href && (
                    <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-purple-400/10 dark:from-teal-400/20 dark:to-purple-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                  )}
                </Link>
              ))}
            </div>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="relative p-3 rounded-full bg-slate-50/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm hover:shadow-md dark:hover:shadow-slate-900/20 group"
              aria-label="Toggle language"
              title={`Switch to ${language === "en" ? "Français" : "English"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-purple-400/10 dark:from-teal-400/20 dark:to-purple-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="relative z-10 flex items-center space-x-1 transition-transform duration-300 group-hover:scale-110">
                <Languages size={16} />
                <span className="text-xs font-semibold uppercase">{language}</span>
              </div>
            </button>
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="relative p-3 rounded-full bg-slate-50/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm hover:shadow-md dark:hover:shadow-slate-900/20 group"
              aria-label="Toggle dark mode"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-purple-400/10 dark:from-teal-400/20 dark:to-purple-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="relative z-10 transition-transform duration-300 group-hover:rotate-12">
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </div>
            </button>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={toggleLanguage}
              className="relative p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm hover:shadow-md dark:hover:shadow-slate-900/20 group"
              aria-label="Toggle language"
              title={`Switch to ${language === "en" ? "Français" : "English"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-purple-400/10 dark:from-teal-400/20 dark:to-purple-400/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="relative z-10 flex items-center space-x-1 transition-transform duration-300 group-hover:scale-110">
                <Languages size={14} />
                <span className="text-xs font-semibold uppercase">{language}</span>
              </div>
            </button>
            
            <button
              onClick={toggleTheme}
              className="relative p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm hover:shadow-md dark:hover:shadow-slate-900/20 group"
              aria-label="Toggle dark mode"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-purple-400/10 dark:from-teal-400/20 dark:to-purple-400/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="relative z-10 transition-transform duration-300 group-hover:rotate-12">
                {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
              </div>
            </button>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-4 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-teal-600 dark:hover:text-teal-400 hover:bg-teal-50 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm hover:shadow-md dark:hover:shadow-slate-900/20 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-purple-400/10 dark:from-teal-400/20 dark:to-purple-400/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="relative z-10">
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-slate-200/20 dark:border-slate-700/20 shadow-lg dark:shadow-slate-900/20 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative px-5 py-4 rounded-xl text-sm font-semibold transition-all duration-300 ease-out group transform ${
                      pathname === item.href
                        ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/25"
                        : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800 hover:shadow-md dark:hover:shadow-slate-900/20"
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isOpen
                        ? "slideInRight 0.3s ease-out forwards"
                        : "none",
                    }}
                  >
                    <span className="relative z-10">{t(item.name)}</span>
                    {pathname !== item.href && (
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-purple-400/10 dark:from-teal-400/20 dark:to-purple-400/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
