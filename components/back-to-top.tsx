"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 group flex items-center justify-center w-12 h-12 bg-gradient-to-r from-teal-600 to-purple-600 dark:from-teal-500 dark:to-purple-500 hover:from-teal-700 hover:to-purple-700 dark:hover:from-teal-600 dark:hover:to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl dark:shadow-slate-900/50 hover:shadow-teal-500/25 dark:hover:shadow-teal-400/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110"
          aria-label="Back to top"
        >
          <ArrowUp
            size={20}
            className="group-hover:animate-bounce transition-transform"
          />
        </button>
      )}
    </>
  );
};

export default BackToTop;
