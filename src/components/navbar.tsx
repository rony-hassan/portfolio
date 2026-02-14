"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ThemeToggle from "./theme-toggle";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" }, // future section
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Smooth scroll function
  const handleScrollToSection = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  // Track scroll & active section
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 120 && top >= -250) {
            setActiveSection(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 top-0 backdrop-blur-md transition-all duration-300
        ${
          scrollY > 50
            ? "bg-white/70 dark:bg-[#0b0f19]/70 shadow-md"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <button
          onClick={() => handleScrollToSection("#home")}
          className="text-2xl font-bold text-indigo-500 cursor-pointer"
        >
          Rony
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-7">
          {navLinks.map((link) => (
            <li key={link.href} className="relative group">
              <button
                onClick={() => handleScrollToSection(link.href)}
                className={`font-medium transition-colors duration-300 cursor-pointer ${
                  activeSection === link.href
                    ? "text-indigo-500"
                    : "text-slate-900 dark:text-white hover:text-indigo-500"
                }`}
              >
                {link.label}

                {/* Animated underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-indigo-500 transition-all duration-300 ${
                    activeSection === link.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Right: Theme + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-md border border-slate-300 dark:border-slate-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col gap-4 px-6 py-5 bg-white dark:bg-[#0b0f19]/90 shadow-md"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleScrollToSection(link.href)}
                className={`block w-full text-left font-medium py-2 transition-colors duration-300 ${
                  activeSection === link.href
                    ? "text-indigo-500"
                    : "text-slate-900 dark:text-white hover:text-indigo-500"
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}
