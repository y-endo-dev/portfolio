"use client";

import { motion } from "framer-motion";
import { Code } from "lucide-react";
import { useEffect, useState } from "react";

interface NavigationProps {
  sections: string[];
}

export default function Navigation({ sections }: NavigationProps) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleScroll = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 p-4 flex items-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="mr-4"
      >
        <Code size={24} className="text-blue-400" />
      </motion.div>
      <ul className="flex justify-center space-x-6 flex-grow">
        {sections.map((section) => (
          <li key={section}>
            <button
              onClick={() => handleScroll(section)}
              className={`text-lg font-semibold ${
                activeSection === section
                  ? "text-blue-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
