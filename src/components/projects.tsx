"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  techs: string[];
  github?: string;
  demo?: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "SauceDemo Automation Framework",
    description: "End-to-end automation using Python + Selenium with POM architecture and reporting.",
    techs: ["Python", "Selenium", "Pytest"],
    github: "https://github.com/rony-hassan/saucedemo-automation",
    category: "Automation",
  },
  /*{
    title: "Nestify Home Rental Solution",
    description: "A platform for students, interns, and families to book homes easily with trust points system.",
    techs: ["React", "Next.js", "TailwindCSS", "Stripe API"],
    github: "https://github.com/your-github/nestify",
    demo: "#",
    category: "Web App",
  },
  {
    title: "API Testing Collection",
    description: "Postman collection for API testing with environment management and validation scripts.",
    techs: ["Postman", "REST API"],
    github: "#",
    category: "API",
  },
  {
    title: "Performance Testing Dashboard",
    description: "Load testing using JMeter, visualizing concurrent user impact and response times.",
    techs: ["JMeter", "Python", "Charts"],
    github: "#",
    category: "Performance",
  },*/
];

const categories = ["All", "Automation"]; // ["All", "Web App", "Automation", "API", "Performance"]

interface Particle {
  x: number;
  y: number;
  size: number;
  delay: number;
  speedX: number;
  speedY: number;
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [particles, setParticles] = useState<Particle[]>([]);
  const [hovered, setHovered] = useState(false);

  // Only generate particles on client
  useEffect(() => {
    const generated = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * 2000 - 500,
      y: Math.random() * 1200 - 200,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 2,
      speedX: (Math.random() - 0.5) * 2, // horizontal speed
      speedY: Math.random() * 2 + 1,     // vertical speed
    }));
    setParticles(generated);
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24">
      {/* Background Particles + Diagonal Gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-screen h-full bg-linear-to-tr from-indigo-500/10 via-pink-500/5 to-green-400/10 -skew-y-12" />
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20 dark:bg-white/10"
            style={{
              width: p.size,
              height: p.size,
              transform: `translateX(${p.x}px) translateY(${p.y}px)`,
            }}
            initial={{ opacity: 0.2 }}
            animate={{
              x: [p.x, p.x + p.speedX * 50, p.x],
              y: [p.y, p.y + p.speedY * 50, p.y],
              opacity: [0.2, 0.5, 0.2],
              scale: hovered ? 1.5 : 1, // scale up on hover
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              repeatType: "mirror",
              delay: p.delay,
            }}
          />
        ))}
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12 px-6"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-500 font-semibold">
          Projects
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          My Work Portfolio
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
          Some of the projects I built across Web Apps, Automation, API, and Performance Testing.
        </p>
      </motion.div>

      {/* Category Filters */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium border transition ${
              activeCategory === cat
                ? "bg-indigo-500 text-white border-indigo-500"
                : "bg-white/10 dark:bg-black/20 text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-700 hover:bg-indigo-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative p-6 rounded-2xl border border-slate-200 dark:border-slate-700
                bg-white/70 dark:bg-white/5 backdrop-blur-md shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="relative flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm md:text-base mb-4">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs md:text-sm px-2 py-1 bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-slate-700 dark:text-slate-200 hover:text-indigo-500 transition"
                    >
                      <Github size={18} /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-slate-700 dark:text-slate-200 hover:text-indigo-500 transition"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
