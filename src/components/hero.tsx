"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import AnimatedButton from "@/components/animated-button";

const slides = [
  {
    title: "Hi, I’m ",
    highlight: "Rony 👋",
    subtitle: "Aspiring SQA Engineer | Manual & Automation Testing",
    tagline:
      "Turning bugs into quality software through structured testing, automation frameworks, and continuous learning.",
    bg: "/hero/bg1.webp",
  },
  {
    title: "Automation Testing 🚀",
    subtitle: "Python + Selenium + Pytest (POM Framework)",
    tagline:
      "Building scalable automation suites for regression testing with clean architecture, reusable components, and stable execution.",
    bg: "/hero/bg2.webp",
  },
  {
    title: "API & Performance Testing ⚡",
    subtitle: "Postman | JMeter | Quality Assurance Mindset",
    tagline:
      "Ensuring backend reliability through API validation and measuring performance under real-world user loads.",
    bg: "/hero/bg3.webp",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const SLIDE_DURATION = 6000;
  const PROGRESS_INTERVAL = 50;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const translateX = useTransform(mouseX, [-500, 500], [-10, 10]);
  const translateY = useTransform(mouseY, [-500, 500], [-10, 10]);


  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [mouseX, mouseY]);

  useEffect(() => {
    setProgress(0);
    const progressStep = 100 / (SLIDE_DURATION / PROGRESS_INTERVAL);

    const progressTimer = setInterval(() => {
      setProgress((prev) => Math.min(prev + progressStep, 100));
    }, PROGRESS_INTERVAL);

    const slideTimer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(slideTimer);
    };
  }, [index]);

  return (
    <section id="home" className="relative w-full h-[80vh] overflow-hidden flex items-center">
      {/* Background Slider with parallax */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[index].bg}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].bg})`, x: translateX, y: translateY }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.02 }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-3xl md:text-4xl lg:text-4.5xl font-bold text-white leading-snug">
                    {slides[index].title}
                    <motion.span
                        className="text-indigo-400 relative after:absolute after:left-0 after:-bottom-1 after:h-1 after:w-full after:bg-indigo-400 after:rounded-full after:origin-left"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        {slides[index].highlight || ""}
                    </motion.span>
                </h1>


              <h2 className="mt-4 text-lg md:text-2xl font-medium text-indigo-300">
                {slides[index].subtitle}
              </h2>

              <p className="mt-4 text-base md:text-lg text-slate-200 leading-relaxed">
                {slides[index].tagline}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <AnimatedButton href="#projects" bgLight="bg-indigo-600" bgDark="dark:bg-indigo-500">
              View Projects
            </AnimatedButton>

            <AnimatedButton href="#contact">Contact Me</AnimatedButton>
          </div>
        </motion.div>
      </div>

      {/* Progress Bar + Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4 w-[320px]">
        <div className="w-full h-1.25 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-indigo-400 rounded-full"
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.1 }}
          />
        </div>

        <div className="flex gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-indigo-400 scale-125" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
