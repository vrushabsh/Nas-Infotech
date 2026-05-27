import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface AccordionItem {
  id: number;
  numberPrefix: string;
  title: string;
  content: string;
}

const HomeCoreFeatures: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(1);

  const accordionData: AccordionItem[] = [
    {
      id: 1,
      numberPrefix: "1.",
      title: "Transparent Architecture & Clean Code",
      content:
        "We build with modular, fully documented design patterns. Your teams maintain complete visibility into codebase logic, API integrations, and deployment configurations.",
    },
    {
      id: 2,
      numberPrefix: "2.",
      title: "Rapid Deployment & Smooth CI/CD",
      content:
        "Our streamlined DevOps pipelines automate builds instantly, reducing product release cycles from weeks to minutes with zero-downtime deployments.",
    },
    {
      id: 3,
      numberPrefix: "3.",
      title: "Enterprise Security & High Availability",
      content:
        "Backed by continuous vulnerability scanning, encryption protocols and isolated cloud infrastructures ensuring maximum security and resilience.",
    },
  ];

  const handleToggle = (id: number) => {
    setOpenIndex(openIndex === id ? 0 : id);
  };

  return (
    <section className="w-full bg-[#0d2315] py-16 sm:py-24 lg:py-32 text-white relative overflow-hidden font-sans">

      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay bg-[linear-gradient(45deg,#fff_25%,transparent_25%,transparent_75%,#fff_75%,#fff),linear-gradient(45deg,#fff_25%,transparent_25%,transparent_75%,#fff_75%,#fff)] [background-size:30px_30px] [background-position:0_0,15px_15px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* ================= LEFT PANEL ================= */}
          <motion.div
            className="lg:col-span-5 w-full bg-[#163520] rounded-[32px] p-6 sm:p-8 border border-white/10 relative overflow-hidden shadow-2xl flex flex-col justify-between h-[520px] sm:h-[580px] lg:h-[550px] xl:h-[580px]"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >

            {/* Top Content */}
            <div className="space-y-4">

              <motion.h3
                className="text-xl sm:text-2xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                Dedicated Tech Consultant Support
              </motion.h3>

              <motion.p
                className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-sm"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                Our seasoned systems architects are always on standby to help
                you evaluate architectures and optimize tech stacks.
              </motion.p>

              {/* Tags */}
              <div className="grid grid-cols-2 gap-3 pt-2">

                {[
                  "Agile Development",
                  "Cloud Migration",
                  "DevOps Automation",
                  "AI Integration",
                  "SLA Management",
                ].map((tag, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/10 border border-white/5 backdrop-blur-[4px] rounded-xl px-3 py-2.5 text-center text-xs font-bold tracking-wide text-gray-200 shadow-sm whitespace-nowrap overflow-hidden text-ellipsis"
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: idx * 0.1,
                    }}
                    whileHover={{
                      y: -4,
                      backgroundColor: "rgba(255,255,255,0.15)",
                    }}
                    viewport={{ once: true }}
                  >
                    {tag}
                  </motion.div>
                ))}

              </div>
            </div>

            {/* Bottom Image */}
            <motion.div
              className="relative w-full h-[260px] sm:h-[280px] mt-auto"
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
              }}
              viewport={{ once: true }}
            >
              <div className="absolute bottom-0 left-0 w-3/5 h-[90%] pointer-events-none select-none">
                <img
                  src="Home/feature-support.png"
                  alt="IT Infrastructure"
                  className="w-full h-full object-contain object-left"
                />
              </div>
            </motion.div>

          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}
          <motion.div
            className="lg:col-span-7 space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >

            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold tracking-wide text-gray-200 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-[#FFB057] text-sm">✲</span>
              Our Core Architecture
            </motion.div>

            {/* ================= TEXT REVEAL ================= */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.03 }}
              className="overflow-hidden"
            >
              <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-[1.15] tracking-tight max-w-2xl flex flex-wrap">

                {"Key features that set our ".split("").map(
                  (char, index) => (
                    <motion.span
                      key={`a-${index}`}
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 50,
                          filter: "blur(8px)",
                        },
                        visible: {
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                        },
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  )
                )}

                {"software development".split("").map(
                  (char, index) => (
                    <motion.span
                      key={`b-${index}`}
                      className="text-[#FFB057]"
                      variants={{
                        hidden: {
                          opacity: 0,
                          y: 50,
                          filter: "blur(8px)",
                        },
                        visible: {
                          opacity: 1,
                          y: 0,
                          filter: "blur(0px)",
                        },
                      }}
                      transition={{
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  )
                )}

                {" apart.".split("").map((char, index) => (
                  <motion.span
                    key={`c-${index}`}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 50,
                        filter: "blur(8px)",
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      },
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeOut",
                    }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}

              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium max-w-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Discover the engineering principles that make our digital
              solutions reliable, scalable and perfectly engineered for your
              enterprise workflows.
            </motion.p>

            {/* ================= ACCORDION ================= */}
            <motion.div
              className="border-t border-white/10 divide-y divide-white/10 max-w-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >

              {accordionData.map((item, index) => {
                const isOpen = openIndex === item.id;

                return (
                  <motion.div
                    key={item.id}
                    className="py-4 sm:py-5"
                    initial={{
                      opacity: 0,
                      y: 40,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                  >

                    {/* Header */}
                    <button
                      onClick={() => handleToggle(item.id)}
                      className="w-full flex items-center justify-between text-left group pt-1"
                    >

                      <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl font-bold text-white transition-colors group-hover:text-gray-300">

                        <span className="text-[#FFB057]">
                          {item.numberPrefix}
                        </span>

                        {item.title}

                      </div>

                      {/* Icon */}
                      <motion.div
                        className="w-6 h-6 rounded-full bg-[#FFB057] flex items-center justify-center text-black shadow-sm shrink-0"
                        animate={{
                          rotate: isOpen ? 180 : 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                      >
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5 stroke-[3.5]" />
                        ) : (
                          <Plus className="w-3.5 h-3.5 stroke-[3.5]" />
                        )}
                      </motion.div>

                    </button>

                    {/* Content */}
                    <AnimatePresence>

                      {isOpen && (
                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                          }}
                          className="overflow-hidden"
                        >
                          <motion.div
                            className="pt-3 pl-6 sm:pl-7 text-gray-400 text-xs sm:text-sm leading-relaxed font-medium"
                            initial={{
                              y: -10,
                            }}
                            animate={{
                              y: 0,
                            }}
                            transition={{
                              delay: 0.1,
                            }}
                          >
                            {item.content}
                          </motion.div>
                        </motion.div>
                      )}

                    </AnimatePresence>

                  </motion.div>
                );
              })}

            </motion.div>

            {/* ================= METRICS ================= */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 max-w-2xl border-t border-white/10"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              viewport={{ once: true }}
            >

              {/* Metric 1 */}
              <motion.div
                className="space-y-1"
                whileHover={{ y: -5 }}
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  99.99%
                </span>

                <p className="text-xs sm:text-sm text-gray-400 font-semibold leading-relaxed">
                  System uptime guaranteed via multi-region cloud clustering.
                </p>
              </motion.div>

              {/* Metric 2 */}
              <motion.div
                className="space-y-1 sm:pl-6 sm:border-l border-white/10"
                whileHover={{ y: -5 }}
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  150+
                </span>

                <p className="text-xs sm:text-sm text-gray-400 font-semibold leading-relaxed">
                  Successful enterprise engineering sprints delivered globally.
                </p>
              </motion.div>

            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomeCoreFeatures;