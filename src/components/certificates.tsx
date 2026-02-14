"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Award, Trophy, GraduationCap } from "lucide-react";

type CertificateCategory = "All" | "Training" | "Awards" | "Competitions" | "Courses";

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: Exclude<CertificateCategory, "All">;
  image: string;
  description?: string;
  credentialLink?: string;
  badge?: string;
}

const filters: CertificateCategory[] = ["All", "Training", "Awards", "Competitions", "Courses"];

const certificatesData: CertificateItem[] = [
  {
    id: "sqa-training",
    title: "BYTES 360-Hour SQA Training",
    issuer: "QA Harbor Limited",
    date: "2026",
    category: "Training",
    image: "/certificates/sqa-training.jpg",
    description:
      "Completed a 360-hour Software Quality Assurance training program including manual testing, automation basics, API testing, and real project testing.",
    badge: "Verified",
  },
  {
    id: "dean-award",
    title: "Dean’s Award",
    issuer: "University",
    date: "2024",
    category: "Awards",
    image: "/certificates/dean-award.jpg",
    description:
      "Awarded for outstanding academic performance and excellence in university semester results.",
    badge: "Honor",
  },
  {
    id: "vc-award",
    title: "Vice Chancellor Award",
    issuer: "University",
    date: "2024",
    category: "Awards",
    image: "/certificates/vc-award.jpg",
    description:
      "Recognized for exceptional academic achievement and contribution to university performance.",
    badge: "Top Performer",
  },
  {
    id: "it-competition",
    title: "IT Competition (3rd Place)",
    issuer: "IT Fest / Competition Board",
    date: "2023",
    category: "Competitions",
    image: "/certificates/it-competition.jpg",
    description:
      "Achieved 3rd place in an IT competition showcasing problem-solving, development, and teamwork skills.",
    badge: "3rd Place",
  },

  // Add more later (example placeholders)
  {
    id: "online-course-1",
    title: "Software Testing Fundamentals",
    issuer: "Online Platform",
    date: "2024",
    category: "Courses",
    image: "/certificates/course-1.jpg",
    description:
      "Learned testing lifecycle, test case writing, bug reporting, and quality assurance best practices.",
    badge: "Course",
    credentialLink: "",
  },
  {
    id: "online-course-2",
    title: "Automation Testing Basics",
    issuer: "Online Platform",
    date: "2024",
    category: "Courses",
    image: "/certificates/course-2.jpg",
    description:
      "Covered automation fundamentals including Selenium basics, frameworks, and test execution.",
    badge: "Course",
    credentialLink: "",
  },
];

function getCategoryIcon(category: CertificateItem["category"]) {
  switch (category) {
    case "Awards":
      return <Award className="w-4 h-4" />;
    case "Competitions":
      return <Trophy className="w-4 h-4" />;
    case "Training":
      return <GraduationCap className="w-4 h-4" />;
    case "Courses":
      return <GraduationCap className="w-4 h-4" />;
    default:
      return <Award className="w-4 h-4" />;
  }
}

export default function Certificates() {
  const [activeFilter, setActiveFilter] = useState<CertificateCategory>("All");
  const [selected, setSelected] = useState<CertificateItem | null>(null);

  const [visibleCount, setVisibleCount] = useState(6);

  const filteredCertificates = useMemo(() => {
    if (activeFilter === "All") return certificatesData;
    return certificatesData.filter((c) => c.category === activeFilter);
  }, [activeFilter]);

  const visibleCertificates = filteredCertificates.slice(0, visibleCount);
  const hasMore = visibleCount < filteredCertificates.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleFilterChange = (filter: CertificateCategory) => {
    setActiveFilter(filter);
    setVisibleCount(6);
  };

  return (
    <section id="certificates" className="relative py-24 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-225 h-225 rounded-full bg-indigo-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-175 h-175 rounded-full bg-pink-500/10 blur-[140px]" />
        <div className="absolute inset-0 opacity-[0.12] dark:opacity-[0.08] bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.35),transparent_60%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-indigo-500 font-semibold">
            Certificates & Achievements
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mt-3">
            Recognition & Milestones
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            A collection of my professional training, academic awards, and achievements that
            highlight my growth and dedication.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-white/5 p-5 shadow-sm">
              <p className="text-2xl font-bold text-indigo-500">
                {certificatesData.length}+
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Certificates & Awards
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-white/5 p-5 shadow-sm">
              <p className="text-2xl font-bold text-indigo-500">360+</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Training Hours
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/60 dark:bg-white/5 p-5 shadow-sm">
              <p className="text-2xl font-bold text-indigo-500">Top</p>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                Academic Recognition
              </p>
            </div>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 cursor-pointer
                ${
                  activeFilter === filter
                    ? "bg-indigo-500 text-white border-indigo-500 shadow-md"
                    : "bg-white/60 dark:bg-white/5 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:border-indigo-500 hover:text-indigo-500"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {visibleCertificates.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 18 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelected(cert)}
                className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-white/5 shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

                  {/* Badge */}
                  {cert.badge && (
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-indigo-500 text-white text-xs font-semibold shadow-md">
                      {cert.badge}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 text-indigo-500 text-sm font-semibold">
                    {getCategoryIcon(cert.category)}
                    <span>{cert.category}</span>
                  </div>

                  <h3 className="mt-2 text-lg font-bold text-slate-900 dark:text-white">
                    {cert.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 line-clamp-3">
                    {cert.description || "Click to view certificate details."}
                  </p>

                  <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Bottom Glow */}
                <div className="h-1 w-full bg-linear-to-r from-indigo-500 via-pink-500 to-emerald-400 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More */}
        {hasMore && (
          <div className="flex justify-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLoadMore}
              className="px-8 py-3 rounded-full bg-indigo-500 text-white font-semibold shadow-lg hover:bg-indigo-600 transition cursor-pointer"
            >
              Load More
            </motion.button>
          </div>
        )}
      </div>

      {/* Modal Preview */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-999 flex items-center justify-center bg-black/70 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden bg-white dark:bg-[#0b0f19] border border-slate-200 dark:border-slate-800 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition cursor-pointer"
              >
                <X className="w-5 h-5 text-slate-800 dark:text-white" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image */}
                <div className="bg-black">
                  <img
                    src={selected.image}
                    alt={selected.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="p-7">
                  <div className="flex items-center gap-2 text-indigo-500 font-semibold text-sm">
                    {getCategoryIcon(selected.category)}
                    <span>{selected.category}</span>
                  </div>

                  <h3 className="text-2xl font-bold mt-2 text-slate-900 dark:text-white">
                    {selected.title}
                  </h3>

                  <p className="mt-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                    {selected.description}
                  </p>

                  <div className="mt-6 space-y-2 text-sm text-slate-700 dark:text-slate-200">
                    <p>
                      <span className="font-semibold">Issuer:</span> {selected.issuer}
                    </p>
                    <p>
                      <span className="font-semibold">Issued:</span> {selected.date}
                    </p>
                    {selected.badge && (
                      <p>
                        <span className="font-semibold">Badge:</span> {selected.badge}
                      </p>
                    )}
                  </div>

                  {selected.credentialLink && selected.credentialLink.trim() !== "" && (
                    <a
                      href={selected.credentialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 px-5 py-3 rounded-xl bg-indigo-500 text-white font-semibold shadow-md hover:bg-indigo-600 transition"
                    >
                      Verify Credential <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {!selected.credentialLink && (
                    <p className="mt-6 text-xs text-slate-500 dark:text-slate-400">
                      Credential verification link not available.
                    </p>
                  )}
                </div>
              </div>

              <div className="h-1 w-full bg-linear-to-r from-indigo-500 via-pink-500 to-emerald-400 opacity-80" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
