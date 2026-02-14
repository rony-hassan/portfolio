"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  type: string;
  duration: string;
  location?: string;
  tools: string[];
  achievements: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "SQA Intern / Trainee (BYTES 360 Hours Training)",
    company: "QA Harbor Limited",
    type: "Internship + Training Program",
    duration: "Oct 2025 - Jan 2026",
    location: "Bangladesh",
    tools: [
      "Manual Testing",
      "Selenium",
      "Python",
      "Postman",
      "JMeter",
      "JIRA",
      "Test Case Writing",
      "Bug Reporting",
    ],
    achievements: [
      "Completed 360 hours of intensive Software Quality Assurance training.",
      "Created professional test cases and test scenarios for real applications.",
      "Identified and reported multiple bugs with proper documentation.",
      "Performed API testing using Postman with validations.",
      "Worked on automation testing using Selenium with Python.",
      "Learned performance testing fundamentals using JMeter.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden">
      {/* Background Premium Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-linear-to-br from-indigo-500/10 via-pink-500/5 to-green-400/10" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.4),transparent_60%)]" />
      </div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-16 px-6"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-500 font-semibold">
          Experience
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          My Professional Journey
        </h2>

        <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
          Here are my internship and experiences that shaped my skills
          in Software Quality Assurance.
        </p>
      </motion.div>

      {/* Timeline Wrapper */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-5 top-0 h-full w-0.5 bg-linear-to-b from-indigo-500/70 via-slate-300/30 to-transparent dark:via-slate-700/40" />

          <div className="space-y-14">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative pl-16"
              >
                {/* Timeline Dot */}
                <div className="absolute left-3.25 top-6 w-4 h-4 rounded-full bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.8)]" />

                {/* Experience Card */}
                <div className="group relative p-6 md:p-8 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-white/5 backdrop-blur-md shadow-md hover:shadow-xl transition duration-300">
                  {/* Hover Glow Overlay */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 bg-linear-to-r from-indigo-500/10 via-pink-500/10 to-green-400/10 blur-xl" />

                  <div className="relative">
                    {/* Header Row */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-5">
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold flex items-center gap-2">
                          <Briefcase className="text-indigo-500" size={22} />
                          {exp.role}
                        </h3>

                        <p className="text-slate-700 dark:text-slate-300 mt-1 font-medium">
                          {exp.company} •{" "}
                          <span className="text-indigo-500 font-semibold">
                            {exp.type}
                          </span>
                        </p>
                      </div>

                      <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm md:text-base">
                        <Calendar size={18} className="text-indigo-500" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>

                    {/* Tools */}
                    <div className="mb-6">
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        Tools & Technologies:
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.tools.map((tool, i) => (
                          <span
                            key={i}
                            className="text-xs md:text-sm px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-800/50 text-indigo-700 dark:text-indigo-300 font-medium border border-indigo-200 dark:border-indigo-700"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-3">
                        Key Achievements:
                      </p>

                      <ul className="space-y-2 text-slate-700 dark:text-slate-300 text-sm md:text-base">
                        {exp.achievements.map((ach, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle
                              size={18}
                              className="text-green-500 mt-0.5"
                            />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Floating Shine Effect */}
                <div className="absolute -top-10 right-10 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full opacity-40 group-hover:opacity-70 transition" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
