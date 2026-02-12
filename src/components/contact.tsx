"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

interface Particle {
  x: number;
  y: number;
  size: number;
  delay: number;
  speedX: number;
  speedY: number;
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [particles, setParticles] = useState<Particle[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // Generate particles
  useEffect(() => {
    const generated = Array.from({ length: 25 }).map(() => ({
      x: Math.random() * 2000 - 500,
      y: Math.random() * 1200 - 200,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 2,
      speedX: (Math.random() - 0.5) * 2,
      speedY: Math.random() * 2 + 1,
    }));
    setParticles(generated);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(
        "service_amydj2l",   // replace with your EmailJS service ID
        "template_5qnzh7r",  // replace with your EmailJS template ID
        formData,
        "cMqbkS0g54u3Aw2ja"    // replace with your EmailJS public key
      );
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative py-24">
      {/* Background particles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute w-screen h-full bg-linear-to-tr from-indigo-500/10 via-pink-500/5 to-green-400/10 -skew-y-12" />
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-linear-to-tr from-indigo-400/50 via-pink-400/30 to-green-300/30"
            style={{
              width: p.size,
              height: p.size,
              transform: `translateX(${p.x}px) translateY(${p.y}px)`,
            }}
            initial={{ opacity: 0.2 }}
            animate={{
              x: [p.x, p.x + p.speedX * 50, p.x],
              y: [p.y, p.y + p.speedY * 50, p.y],
              opacity: [0.2, 0.6, 0.2],
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

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-center mb-12 px-6"
      >
        <p className="text-sm uppercase tracking-[0.3em] text-indigo-500 font-semibold">
          Contact
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-3">
          Get in Touch
        </h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
          Have a question or want to work together? Send me a message!
        </p>
      </motion.div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-6">
        {(status === "success" || status === "error") && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-center mb-6 font-medium ${
              status === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {status === "success"
              ? "Thank you! Your message has been sent."
              : "Oops! Something went wrong. Please try again."}
          </motion.div>
        )}

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 p-8 rounded-3xl bg-white/30 dark:bg-black/30 backdrop-blur-xl border border-gradient-to-r from-indigo-400 via-pink-400 to-green-300 shadow-lg"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-white/5 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={status === "sending"}
            className="bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-indigo-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </motion.button>
        </form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-10">
          <a
            href="mailto:ronyhassan.cse@gmail.com"
            className="text-slate-700 dark:text-slate-200 hover:text-indigo-500 transition flex items-center gap-2 transform hover:scale-110 hover:shadow-lg"
          >
            <Mail size={20} /> Email
          </a>
          <a
            href="https://github.com/rony-hassan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 dark:text-slate-200 hover:text-indigo-500 transition flex items-center gap-2 transform hover:scale-110 hover:shadow-lg"
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/rony-hassan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-700 dark:text-slate-200 hover:text-indigo-500 transition flex items-center gap-2 transform hover:scale-110 hover:shadow-lg"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
