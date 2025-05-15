"use client";

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';

export default function TopBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const linksRef = useRef<(HTMLButtonElement | null)[]>([]);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileLinksRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Store mobile link refs
  const addToMobileRefs = (el: HTMLButtonElement | null) => {
    if (el && !mobileLinksRef.current.includes(el)) {
      mobileLinksRef.current.push(el);
    }
  };

  // Store desktop link refs
  const addToRefs = (el: HTMLButtonElement | null) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  useEffect(() => {
    // Filter out null values
    const validLinks = linksRef.current.filter(Boolean) as HTMLButtonElement[];
    const validMobileLinks = mobileLinksRef.current.filter(Boolean) as HTMLButtonElement[];

    // Initial hidden state
    gsap.set([logoRef.current, ...validLinks], { opacity: 0, y: -20 });
    gsap.set(menuButtonRef.current, { opacity: 0, x: 20 });
    
    // Header background animation
    if (headerRef.current) {
      gsap.from(headerRef.current, {
        backgroundColor: 'transparent',
        duration: 1,
        ease: 'power2.out'
      });
    }
    
    // Logo animation
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
        delay: 0.3
      });
    }

    // Menu button animation
    if (menuButtonRef.current) {
      gsap.to(menuButtonRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.6,
        delay: 0.5
      });
    }

    // Desktop nav links animation
    if (window.innerWidth > 768) {
      gsap.to(validLinks, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        delay: 0.5
      });
    }
  }, []);

  useEffect(() => {
    // Mobile menu animation when toggled
    if (mobileMenuRef.current) {
      const validMobileLinks = mobileLinksRef.current.filter(Boolean) as HTMLButtonElement[];
      
      if (isMenuOpen) {
        // Open animation
        gsap.fromTo(mobileMenuRef.current, 
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.3 }
        );
        
        // Links animation
        gsap.fromTo(validMobileLinks,
          { opacity: 0, y: -10 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.4, 
            stagger: 0.1,
            delay: 0.2
          }
        );
      } else {
        // Close animation
        gsap.to(mobileMenuRef.current, 
          { height: 0, opacity: 0, duration: 0.2 }
        );
      }
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      // If we're not on the home page, navigate to home first with hash
      window.location.href = `/#${sectionId}`;
      return;
    }

    const section = document.getElementById(sectionId);
    if (section) {
      setIsMenuOpen(false); // Close mobile menu if open
      window.scrollTo({
        top: section.offsetTop - 100, // Adjust offset as needed
        behavior: 'smooth'
      });
      
      // Update URL without page reload
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  return (
    <header 
      ref={headerRef}
      className="fixed bg-[#1A0B2E] text-white py-4 px-4 sm:px-8 flex items-center justify-between md:justify-around top-0 left-0 right-0 z-50"
    >
      {/* Logo */}
      <div 
        ref={logoRef}
        onClick={() => scrollToSection('home')}
        className="text-2xl font-bold cursor-pointer hover:scale-110 transition-transform duration-300"
      >
        <img src="/logo.png" alt="Logo" className='h-6' />
      </div>

      {/* Desktop Navigation */}
      <nav 
        ref={navRef} 
        className="hidden md:flex space-x-8 lg:space-x-16 xl:space-x-24 font-semibold text-sm"
      >
        <button 
          onClick={() => scrollToSection('home')}
          ref={addToRefs}
          className="hover:text-slate-400 transition-colors duration-300 transform hover:scale-105"
        >
          Home
        </button>
        <button 
          onClick={() => scrollToSection('about')}
          ref={addToRefs}
          className="hover:text-slate-400 transition-colors duration-300 transform hover:scale-105"
        >
          About
        </button>
        <button 
          onClick={() => scrollToSection('process')}
          ref={addToRefs}
          className="hover:text-slate-400 transition-colors duration-300 transform hover:scale-105"
        >
          Process
        </button>
        <button 
          onClick={() => scrollToSection('projects')}
          ref={addToRefs}
          className="hover:text-slate-400 transition-colors duration-300 transform hover:scale-105"
        >
          Projects
        </button>
        <button 
          onClick={() => scrollToSection('contact')}
          ref={addToRefs}
          className="hover:text-slate-400 transition-colors duration-300 transform hover:scale-105"
        >
          Contact
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        ref={menuButtonRef}
        onClick={toggleMenu}
        className="md:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
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

      {/* Mobile Navigation */}
      <div 
        ref={mobileMenuRef}
        className="md:hidden absolute top-full left-0 right-0 bg-[#15072C] overflow-hidden"
        style={{ height: 0 }}
      >
        <div className="py-4 px-8 flex flex-col space-y-4 items-center">
          <button 
            onClick={() => scrollToSection('home')}
            ref={addToMobileRefs}
            className="hover:text-slate-400 transition-colors duration-300 w-full text-center py-2"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            ref={addToMobileRefs}
            className="hover:text-slate-400 transition-colors duration-300 w-full text-center py-2"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('process')}
            ref={addToMobileRefs}
            className="hover:text-slate-400 transition-colors duration-300 w-full text-center py-2"
          >
            Process
          </button>
          <button 
            onClick={() => scrollToSection('projects')}
            ref={addToMobileRefs}
            className="hover:text-slate-400 transition-colors duration-300 w-full text-center py-2"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            ref={addToMobileRefs}
            className="hover:text-slate-400 transition-colors duration-300 w-full text-center py-2"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}