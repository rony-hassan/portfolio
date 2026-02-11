"use client";

import { motion } from "framer-motion";

interface AnimatedButtonProps {
  href: string;
  children: React.ReactNode;
  bgLight?: string; // background for light mode on hover
  bgDark?: string;  // background for dark mode on hover
}

export default function AnimatedButton({
  href,
  children,
  bgLight = "bg-slate-900", // default dark hover in light mode
  bgDark = "dark:bg-white",  // default white hover in dark mode
}: AnimatedButtonProps) {
  return (
    <motion.a
      href={href}
      className="group relative inline-block px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 font-medium
        bg-transparent text-slate-900 dark:text-white overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Background overlay */}
      <span
        className={`absolute inset-0 ${bgLight} ${bgDark} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0`}
      ></span>

      {/* Text */}
      <span className="relative z-10 text-slate-900 dark:text-white group-hover:text-white dark:group-hover:text-black transition-colors duration-300">
        {children}
      </span>
    </motion.a>
  );
}
