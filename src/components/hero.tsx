"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/animated-button";

const roles = [
  "Aspiring SQA Engineer",
  "Manual Testing Specialist",
  "Automation Tester (Python + Selenium)",
  "API & Performance Tester",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-[#020617]">
      
      {/* SQA Digital Environment Background */}
      <div className="absolute inset-0 z-0">
        {/* The Animated Grid */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(circle at center, black 40%, transparent 90%)'
          }}
        ></div>

        {/* The Scanning Line Animation */}
        <motion.div 
          initial={{ translateY: "-100%" }}
          animate={{ translateY: "1000%" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-1"
        />
        
        {/* Subtle Static Noise/Texture for a "Monitor" feel */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl"
      >
        {/* Status Badge */}
        {/*<div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
          System Status: Ready for Deployment
        </div>*/}

        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-cyan-300">
            Rony
          </span>
        </h1>

        <div className="mt-8 flex flex-col items-center">
          <div className="font-mono text-lg md:text-xl text-cyan-400 flex items-center gap-2">
            <span className="bg-slate-900 border border-slate-700 px-4 py-2 rounded-2xl shadow-xl">
              {text}<span className="animate-pulse text-white">_</span>
            </span>
          </div>
        </div>

        <p className="mt-10 text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Bridging the gap between development and deployment. I specialize in 
          <span className="text-slate-200 font-medium"> precision testing</span>, 
          automated validation, and ensuring high-performance software standards.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <AnimatedButton href="#projects">
            Analyze My Work
          </AnimatedButton>
          <AnimatedButton href="#contact">
            Get In Touch
          </AnimatedButton>
        </div>
      </motion.div>
    </section>
  );
}