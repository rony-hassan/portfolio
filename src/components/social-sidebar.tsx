"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function SocialSidebar() {
  const icons = [
    {
      icon: <Linkedin size={22} />,
      href: "https://www.linkedin.com/in/rony-hassan/",
    },
    {
      icon: <Github size={22} />,
      href: "https://github.com/rony-hassan",
    },
    {
      icon: <Mail size={22} />,
      href: "mailto:ronyhassan.cse@gmail.com",
    },
  ];

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {icons.map((item, i) => (
        <motion.a
          key={i}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: i * 0.3 }}
          className="p-3 rounded-full bg-white/20 dark:bg-black/30 backdrop-blur-md border border-white/30
          text-white hover:bg-indigo-500 hover:scale-110 transition duration-300"
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  );
}
