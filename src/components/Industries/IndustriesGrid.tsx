import React from "react";
import { motion } from "framer-motion";

// ================= TYPES =================
interface IndustryItem {
  id: string;
  title: string;
  description: string;
  slug: string;
  icon: React.ReactNode;
}

export default function IndustriesGrid() {
  // ================= INDUSTRIES =================
  const industries: IndustryItem[] = [
    {
      id: "banking",
      title: "Banking",
      description:
        "Empower your financial institution with tailored solutions supporting banking operations and customer satisfaction.",
      slug: "banking",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
          <line x1="6" y1="14" x2="6" y2="14" />
          <line x1="10" y1="14" x2="10" y2="14" />
        </svg>
      ),
    },

    {
      id: "ecommerce",
      title: "E-commerce",
      description:
        "Drive online success with seamless shopping experiences and secure payment processing systems.",
      slug: "e-commerce",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.5 13h12l3-8H6" />
        </svg>
      ),
    },

    {
      id: "healthcare",
      title: "Healthcare",
      description:
        "Transform patient care through digital healthcare ecosystems and telemedicine solutions.",
      slug: "healthcare",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },

    {
      id: "education",
      title: "Education",
      description:
        "Enhance modern learning experiences using scalable educational technology platforms.",
      slug: "education",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      ),
    },

    {
      id: "pharma",
      title: "Pharma",
      description:
        "Specialized pharmaceutical development systems ensuring compliance and operational efficiency.",
      slug: "pharma",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4.5 16.5c-1.5-1.5-2.5-3.5-2.5-6s1-4.5 2.5-6 3.5-2.5 6-2.5 4.5 1 6 2.5l-12 12z" />
          <path d="M7.5 19.5c1.5 1.5 3.5 2.5 6 2.5s4.5-1 6-2.5 2.5-3.5 2.5-6-1-4.5-2.5-6l-12 12z" />
        </svg>
      ),
    },

    {
      id: "insurance",
      title: "Insurance",
      description:
        "Advanced insurance systems designed for risk management and policy automation.",
      slug: "insurance",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },

    {
      id: "telecom",
      title: "Telecommunication",
      description:
        "Empowering telecom providers with optimized communication infrastructure.",
      slug: "telecommunication",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <circle cx="12" cy="18" r="2" />
        </svg>
      ),
    },

    {
      id: "manufacturing",
      title: "Manufacturing",
      description:
        "Optimize industrial workflows and supply chain ecosystems with smart automation.",
      slug: "manufacturing",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82" />
        </svg>
      ),
    },

    {
      id: "realestate",
      title: "Real Estate",
      description:
        "Transform property management and real estate operations using modern systems.",
      slug: "real-estate",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },

    {
      id: "finance",
      title: "Finance",
      description:
        "Deliver real-time finance insights and enterprise-grade management systems.",
      slug: "finance",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="6" x2="12" y2="18" />
          <line x1="8" y1="10" x2="16" y2="10" />
          <line x1="8" y1="14" x2="16" y2="14" />
        </svg>
      ),
    },

    {
      id: "logistics",
      title: "Logistics",
      description:
        "Optimize transportation and logistics systems using intelligent automation.",
      slug: "logistics",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },

    {
      id: "construction",
      title: "Construction",
      description:
        "Modernize construction projects with innovative resource planning systems.",
      slug: "construction",
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#f8fafc] py-16 sm:py-16 lg:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= HEADER ================= */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 border-b border-slate-200/60 pb-8">
          {/* LEFT */}
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs sm:text-sm font-semibold tracking-wide text-gray-800 shadow-sm mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-[#FFB057] text-sm">✲</span>
              Expertise & Frameworks
            </motion.div>

            {/* Heading */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.03 }}
              className="overflow-hidden"
            >
              <h2 className="text-[#0a1118] text-3xl sm:text-4xl md:text-5xl font-black leading-[1.12] tracking-tight flex flex-wrap">
                {"Industries ".split("").map((char, index) => (
                  <motion.span
                    key={`a-${index}`}
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 40,
                        filter: "blur(8px)",
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}

                {"We Impact".split("").map((char, index) => (
                  <motion.span
                    key={`b-${index}`}
                    className="text-[#FFB057]"
                    variants={{
                      hidden: {
                        opacity: 0,
                        y: 40,
                        filter: "blur(8px)",
                      },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      },
                    }}
                    transition={{ duration: 0.4 }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h2>
            </motion.div>
          </motion.div>

          {/* RIGHT */}
          <motion.p
            className="text-slate-500 text-sm sm:text-base max-w-md font-medium leading-relaxed"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Delivering enterprise-grade digital ecosystems engineered for
            performance, scalability and operational excellence.
          </motion.p>
        </div>

        {/* ================= INDUSTRY GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 70,
                scale: 0.92,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="
                bg-white
                rounded-[24px]
                p-6
                border
                border-slate-200/60
                shadow-sm
                hover:shadow-2xl
                hover:border-[#FFB057]/40
                transition-all
                duration-300
                group
                relative
                overflow-hidden
                flex
                flex-col
                justify-between
                min-h-[320px]
              "
            >
              {/* Glow Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-[#FFB057]/5
                  via-transparent
                  to-[#0a1118]/5
                  pointer-events-none
                "
              />

              {/* TOP */}
              <div className="relative z-10">
                {/* ICON */}
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-slate-50
                    text-[#111e38]
                    flex
                    items-center
                    justify-center
                    mb-6
                    group-hover:bg-[#FFB057]/10
                    group-hover:text-[#FFB057]
                    transition-all
                    duration-300
                    shadow-sm
                  "
                >
                  {item.icon}
                </motion.div>

                {/* TITLE */}
                <h3
                  className="
                    text-[22px]
                    font-black
                    text-[#111e38]
                    tracking-tight
                    mb-4
                    leading-[1.2]
                    group-hover:text-[#FFB057]
                    transition-colors
                    duration-300
                  "
                >
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    text-slate-500
                    text-[14px]
                    font-medium
                    leading-[26px]
                  "
                >
                  {item.description}
                </p>
              </div>

              {/* BOTTOM */}
              <div className="pt-6 mt-6 border-t border-slate-100 relative z-10">
                <motion.a
                  whileHover={{ x: 5 }}
                  className="
                    inline-flex
                    items-center
                    gap-2
                    text-[12px]
                    font-bold
                    uppercase
                    tracking-[1.5px]
                    text-slate-400
                    group-hover:text-[#FFB057]
                    transition-all
                    duration-300
                    cursor-pointer
                  "
                >
                  Explore Solution
                  <motion.svg
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </motion.svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
