"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Bug,
  Code2,
  Database,
  Gauge,
  GitBranch,
  Globe,
  ShieldCheck,
} from "lucide-react";

type Skill = {
  title: string;
  icon: JSX.Element;
  points: string[];
  category: string;
};

const skills: Skill[] = [
  {
    title: "Manual Testing",
    icon: <Bug size={22} />,
    points: [
      "Test Case Design",
      "Bug Reporting (5W1H)",
      "UI/UX Validation",
      "Regression & Smoke Testing",
    ],
    category: "Manual",
  },
  {
    title: "Automation Testing",
    icon: <Code2 size={22} />,
    points: [
      "Python + Selenium",
      "Page Object Model (POM)",
      "Pytest Framework",
      "Test Reports & Fixtures",
    ],
    category: "Automation",
  },
  {
    title: "API Testing",
    icon: <Globe size={22} />,
    points: [
      "Postman Collections",
      "REST API Validation",
      "Status Codes & Assertions",
      "Environment Variables",
    ],
    category: "Automation",
  },
  {
    title: "Performance Testing",
    icon: <Gauge size={22} />,
    points: [
      "Apache JMeter",
      "Load & Stress Testing",
      "500 Concurrent Users",
      "Analyze Response Time",
    ],
    category: "Performance",
  },
  /*{
    title: "Database & SQL",
    icon: <Database size={22} />,
    points: [
      "SQL Queries",
      "Data Validation",
      "Database Testing",
      "Joins & Filtering",
    ],
    category: "Database",
  },*/
  {
    title: "Version Control",
    icon: <GitBranch size={22} />,
    points: [
      "Git & GitHub",
      "Branching Workflow",
      "Commit Best Practices",
      "Collaboration Ready",
    ],
    category: "Tools",
  },
  {
    title: "QA Mindset",
    icon: <ShieldCheck size={22} />,
    points: [
      "Attention to Detail",
      "Analytical Thinking",
      "User-Centered Testing",
      "Strong Documentation",
    ],
    category: "Mindset",
  },
];

const categories = ["All", "Manual", "Automation", "Performance", "Tools", "Mindset"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills =
    activeCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      }}
    >
      {/* Premium background shapes */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-160 h-160 rounded-full bg-indigo-600/20 blur-3xl animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-160 h-160 rounded-full bg-pink-500/20 blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14 text-white"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-indigo-400 font-semibold">
            Skills
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            My Quality Assurance Toolkit
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-slate-200">
            Manual expertise, automation skills, and performance testing knowledge to ensure software reliability.
          </p>
        </motion.div>

        {/* Categories / Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition duration-300
                ${
                  activeCategory === cat
                    ? "bg-indigo-500 text-white shadow-lg"
                    : "bg-white/20 text-white hover:bg-indigo-500 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="group relative p-6 rounded-2xl border border-white/20 
                  bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl cursor-pointer transition duration-300"
              >
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-50 transition duration-300 bg-indigo-500/20 blur-xl" />

                {/* Content */}
                <div className="relative text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md">
                      {skill.icon}
                    </div>
                    <h3 className="text-lg font-bold">{skill.title}</h3>
                  </div>

                  <ul className="mt-5 space-y-2 text-slate-100 text-sm md:text-base">
                    {skill.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-2 h-2 rounded-full bg-indigo-400 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
