"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import AnimatedButton from "./animatedButton";

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      setIsMenuOpen(false);
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white mx-6 mt-3 md:mx-10 md:mt-4 transition-all duration-300
    rounded-xl border border-slate-800  backdrop-blur-md
    ${isScrolled ? "md:!mx-auto md:!w-fit md:!px-4" : "md:mx-68"}
  `}
    >
      {/* Main Container - Always justify-between on mobile */}
      <div className="flex items-center justify-between px-6 md:py-1 py-2">
        {/* Logo - Always on left */}
        <div
          onClick={() => scrollToSection("home")}
          className="cursor-pointer hover:scale-105 transition-transform duration-300"
        >
          <img src="/logo.png" alt="Logo" className="h-6" />
        </div>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:flex space-x-2 text-sm font-medium px-4">
          {["home", "about", "process", "projects", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="px-3 py-1 rounded-md hover:bg-slate-800 transition-colors duration-200"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>

        {/* Desktop CTA - Hidden on mobile */}
        <div className="hidden pt-1 md:block">
          <AnimatedButton text="Book a call" />
        </div>

        {/* Mobile Menu Button - Only shown on mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-1 rounded-md hover:bg-slate-800 transition-colors"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-800 mt-2 pt-4 pb-6 px-4 space-y-3">
          {["home", "about", "process", "projects", "contact"].map((id) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="block w-full text-left px-3 py-2 rounded-md hover:bg-slate-800 transition-colors"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </button>
          ))}
          <div className="pt-2">
            <AnimatedButton text="Book a call" />
          </div>
        </div>
      )}
    </header>
  );
}
