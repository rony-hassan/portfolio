"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronUp } from "lucide-react";

interface Particle {
  x: number;
  y: number;
  size: number;
  delay: number;
  speedX: number;
  speedY: number;
}

export default function Footer() {
  const year = new Date().getFullYear();
  const [particles, setParticles] = useState<Particle[]>([]);

  // Generate particles on client
  useEffect(() => {
    const generated = Array.from({ length: 15 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * 200,
      size: Math.random() * 6 + 4, // Bigger particles
      delay: Math.random() * 2,
      speedX: (Math.random() - 0.5) * 1.5,
      speedY: Math.random() * 1 + 0.5,
    }));
    setParticles(generated);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#070a12] py-6">
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(135deg, #7f5af0, #f0abfc, #38bdf8, #22c55e, #facc15, #f43f5e)",
          backgroundSize: "400% 400%",
        }}
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating Particles */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white/20 dark:bg-white/10"
          style={{
            width: p.size,
            height: p.size,
            transform: `translate(${p.x}px, ${p.y}px)`,
          }}
          initial={{ opacity: 0.3 }}
          animate={{
            x: [p.x, p.x + p.speedX * 50, p.x],
            y: [p.y, p.y + p.speedY * 50, p.y],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + Math.random() * 6,
            repeat: Infinity,
            repeatType: "mirror",
            delay: p.delay,
          }}
        />
      ))}

      {/* Scroll To Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-2xl 
        bg-indigo-500/90 hover:bg-indigo-500 text-white shadow-xl 
        shadow-indigo-500/30 border border-white/10 backdrop-blur-lg transition"
      >
        <ChevronUp size={20} />
      </motion.button>

      {/* Gradient Pulse Line */}
      <motion.div
        className="h-1 w-16 mx-auto mb-2 rounded-full bg-gradient-to-r from-indigo-500 via-pink-500 to-green-400"
        animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
        style={{ backgroundSize: "200% 100%" }}
      />

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-slate-400 text-sm tracking-wide">
          © {year} <span className="text-white font-semibold">Rony Hassan</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
