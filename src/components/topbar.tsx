"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedButton from "./animatedButton";

// Animation variants
const menuVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const menuItemVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -20 },
};

const navItemVariants = {
  hover: { scale: 1.05, backgroundColor: "rgba(30, 41, 59, 0.5)" },
  tap: { scale: 0.95 },
};

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
        top: section.offsetTop - 10,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 text-white mx-6 mt-3 md:mx-10 md:mt-4 transition-all duration-300
        rounded-xl border border-slate-800 backdrop-blur-md
        ${isScrolled ? "md:!mx-auto md:!w-fit md:!px-6" : "lg:mx-68"}
      `}
    >
      {/* Main Container */}
      <motion.div
        layout
        className={`flex items-center justify-between ${isScrolled ? "px-2" : "px-6"} md:py-1 py-2`}
      >
        {/* Logo */}
        <motion.div
          onClick={() => scrollToSection("home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <img src="/logo.png" alt="Logo" className="h-6 min-w-[3.5rem] min-h-[1.5rem] object-contain shrink-0 grow-0" />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2 text-sm font-medium px-4">
          {["home", "services", "process", "benefits", "projects", "contact",].map((id) => (
            <motion.button
              key={id}
              onClick={() => scrollToSection(id)}
              variants={navItemVariants}
              whileHover="hover"
              whileTap="tap"
              className="px-3 py-1 rounded-md"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </motion.button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.div 
          className="hidden pt-1 md:block"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatedButton text="Book a call" />
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden p-1 rounded-md"
          whileHover={{ backgroundColor: "rgba(30, 41, 59, 0.5)" }}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              initial={false}
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </svg>
        </motion.button>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden border-t border-slate-800 mt-2 pt-4 pb-6 px-4 space-y-3"
          >
            {["home", "process", "services", "benefits", "projects", "contact"].map((id) => (
              <motion.button
                key={id}
                onClick={() => scrollToSection(id)}
                variants={menuItemVariants}
                className="block w-full text-left px-3 py-2 rounded-md hover:bg-slate-800"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </motion.button>
            ))}
            <motion.div
              variants={menuItemVariants}
              className="pt-2"
            >
              <AnimatedButton text="Book a call" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
