"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Languages } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const navItems = [
  { name: "home", href: "/" },
  { name: "projects", href: "/projects" },
  { name: "resume", href: "/resume" },
  { name: "contact", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state
      setIsScrolled(currentScrollY > 50);

      // Show/hide navbar based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or at the top
        setIsVisible(true);
      } else {
        // Scrolling down
        setIsVisible(false);
        setIsOpen(false); // Close mobile menu when hiding
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div
          className={`bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl transition-all duration-500 ${
            isScrolled ? "shadow-2xl" : "shadow-lg"
          }`}
        >
          <div className="flex justify-between items-center h-16 px-6">
            {/* Logo */}
            <Link
              href="/"
              className="group relative font-bold text-xl transition-all duration-500 overflow-hidden px-3 py-2 rounded-xl"
            >
              {/* Hover background */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl"></div>

              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>

              <span className="relative z-10 bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
                Aziz Jrad
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Navigation Pills */}
              <div className="flex items-center space-x-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 group ${
                      pathname === item.href
                        ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/25"
                        : "text-slate-800 hover:text-slate-900 hover:bg-white/60 hover:shadow-md"
                    }`}
                  >
                    <span className="relative z-10 drop-shadow-sm">
                      {t(item.name)}
                    </span>
                    {pathname !== item.href && (
                      <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-purple-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                    )}
                  </Link>
                ))}
              </div>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="relative p-2 rounded-full bg-white/20 backdrop-blur-md text-slate-800 hover:text-teal-600 hover:bg-white/60 transition-all duration-300 shadow-sm hover:shadow-md group border border-white/30"
                aria-label="Toggle language"
                title={`Switch to ${
                  language === "en" ? "Français" : "English"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-purple-400/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <div className="relative z-10 flex items-center space-x-1 transition-transform duration-300 group-hover:scale-110">
                  <Languages size={14} />
                  <span className="text-xs font-semibold uppercase drop-shadow-sm">
                    {language}
                  </span>
                </div>
              </button>
            </div>

            {/* Mobile menu button and language toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleLanguage}
                className="relative p-2 rounded-xl bg-white/20 backdrop-blur-md text-slate-800 hover:text-teal-600 hover:bg-white/60 transition-all duration-300 shadow-sm hover:shadow-md group border border-white/30"
                aria-label="Toggle language"
                title={`Switch to ${
                  language === "en" ? "Français" : "English"
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-purple-400/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <div className="relative z-10 flex items-center space-x-1 transition-transform duration-300 group-hover:scale-110">
                  <Languages size={12} />
                  <span className="text-xs font-semibold uppercase drop-shadow-sm">
                    {language}
                  </span>
                </div>
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-3 rounded-xl bg-white/20 backdrop-blur-md text-slate-800 hover:text-teal-600 hover:bg-white/60 transition-all duration-300 shadow-sm hover:shadow-md group border border-white/30"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400/20 to-purple-400/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                  {isOpen ? <X size={18} /> : <Menu size={18} />}
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden border-t border-white/20 mt-2">
              <div className="px-6 py-4">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`relative px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ease-out group transform ${
                        pathname === item.href
                          ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-lg shadow-teal-500/25"
                          : "text-slate-800 hover:text-slate-900 hover:bg-white/60 hover:shadow-md"
                      }`}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: isOpen
                          ? "slideInRight 0.3s ease-out forwards"
                          : "none",
                      }}
                    >
                      <span className="relative z-10 drop-shadow-sm">
                        {t(item.name)}
                      </span>
                      {pathname !== item.href && (
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-purple-400/10 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
