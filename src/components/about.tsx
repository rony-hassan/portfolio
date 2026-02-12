"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  ShieldCheck,
  GraduationCap,
  Briefcase,
  Rocket,
  Download,
} from "lucide-react";

export default function About() {
  const timeline = [
    {
      icon: <GraduationCap size={18} />,
      title: "BSc in CSE",
      subtitle: "Green University of Bangladesh",
      desc: "Built strong fundamentals in software engineering, databases, and problem-solving.",
    },
    {
      icon: <Briefcase size={18} />,
      title: "SQA Internship",
      subtitle: "QA Harbor Limited",
      desc: "Worked on manual testing, bug reporting using 5W1H, and end-to-end test cycles in real projects.",
    },
    {
      icon: <Rocket size={18} />,
      title: "Automation & Performance Testing",
      subtitle: "Python • Selenium • Pytest • JMeter",
      desc: "Developed automation frameworks using POM and simulated 500 concurrent users to evaluate system performance.",
    },
  ];

  const techStack = [
    { name: "Python", icon: "/tech/python.svg" },
    { name: "Selenium", icon: "/tech/selenium.svg" },
    { name: "Pytest", icon: "/tech/pytest.svg" },
    { name: "Postman", icon: "/tech/postman.svg" },
    { name: "JMeter", icon: "/tech/jmeter.svg" },
    { name: "Git", icon: "/tech/git.svg" },
    { name: "SQL", icon: "/tech/sql.svg" },
  ];

  return (
    <section id="about" className="py-24 max-w-6xl mx-auto px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="mb-14 text-center"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-500 font-semibold">
          About Me
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          Testing With Purpose, Delivering With Confidence
        </h2>

        <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
          I believe great software isn’t just built — it’s verified, validated,
          and polished until it’s ready for real users.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-2 gap-14 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Glow */}
          <div className="absolute -inset-4 rounded-3xl bg-indigo-500/20 blur-2xl opacity-60" />

          <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-xl w-70 md:w-90">
            <Image
              src="/rony.png"
              alt="Rony Profile Photo"
              width={600}
              height={600}
              className="object-cover w-full h-full hover:scale-105 transition duration-500"
              priority
            />
          </div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-indigo-500/40 bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 text-sm font-medium">
            <ShieldCheck size={18} />
            Aspiring SQA Engineer
          </div>

          <h3 className="text-2xl md:text-3xl font-bold mt-5 leading-snug">
            I Ensure Software Feels Reliable <br /> for Every User.
          </h3>

          <p className="mt-5 text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg">
            My journey into Software Quality Assurance began with a simple idea:{" "}
            <span className="text-indigo-500 font-semibold">
              quality is a responsibility, not just a step in the process.
            </span>
            <br />
            <br />
            During my internship at{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              QA Harbor Limited
            </span>
            , I worked on complete testing cycles — reporting functional issues,
            identifying UI/UX improvements, and validating product behavior
            against requirements.
          </p>

          <p className="mt-5 text-slate-700 dark:text-slate-300 leading-relaxed text-base md:text-lg">
            Now I’m focused on building automation frameworks using{" "}
            <span className="text-indigo-500 font-semibold">
              Python, Selenium, and Pytest
            </span>{" "}
            to ensure regression testing is faster, repeatable, and scalable.
          </p>

          {/* Download CV Button */}
          <div className="mt-7">
            <a
              href="/Rony_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-medium 
              hover:bg-indigo-700 transition duration-300 shadow-md hover:shadow-lg"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>

      {/* Animated Counters */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-16 grid sm:grid-cols-3 gap-4"
      >
        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-white/5 backdrop-blur-md hover:scale-[1.03] transition duration-300 shadow-sm">
          <h4 className="font-bold text-3xl text-indigo-500">
            <CountUp end={40} duration={2} enableScrollSpy />+
          </h4>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Bugs Identified & Reported
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-white/5 backdrop-blur-md hover:scale-[1.03] transition duration-300 shadow-sm">
          <h4 className="font-bold text-3xl text-indigo-500">
            <CountUp end={360} duration={2.5} enableScrollSpy />+
          </h4>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Hours of Professional Training
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-white/5 backdrop-blur-md hover:scale-[1.03] transition duration-300 shadow-sm">
          <h4 className="font-bold text-3xl text-indigo-500">
            <CountUp end={500} duration={2.5} enableScrollSpy />+
          </h4>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Concurrent Users Simulated (JMeter)
          </p>
        </div>
      </motion.div>

      {/* Tech Stack Logos */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-20"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Tech Stack I Work With
        </h3>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 items-center justify-items-center">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-2"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-sm">
                <Image
                  src={tech.icon}
                  alt={tech.name}
                  width={34}
                  height={34}
                  className="object-contain dark:invert"
                />
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="mt-24"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
          My Journey
        </h3>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700" />

          <div className="space-y-10">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative flex gap-6 pl-14"
              >
                {/* Icon Circle */}
                <div className="absolute left-0 flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white shadow-md">
                  {item.icon}
                </div>

                {/* Content */}
                <div className="p-6 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-white/5 backdrop-blur-md shadow-sm hover:shadow-lg transition duration-300">
                  <h4 className="text-lg font-bold">{item.title}</h4>
                  <p className="text-sm text-indigo-500 font-medium mt-1">
                    {item.subtitle}
                  </p>
                  <p className="mt-3 text-slate-700 dark:text-slate-300 text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
