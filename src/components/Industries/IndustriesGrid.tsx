import React, { useState } from "react";

import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

import { useNavigate } from "react-router-dom";



// ================= TYPES =================

interface IndustryItem {

  id: string;

  title: string;

  description: string;

  slug: string;

  icon: React.ReactNode;

}



// ================= LIFELY GLOW CARD COMPONENT =================

function IndustryCard({ item, index, onNavigate }: { item: IndustryItem; index: number; onNavigate: (id: string) => void }) {

  const mouseX = useMotionValue(0);

  const mouseY = useMotionValue(0);



  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {

    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);

    mouseY.set(clientY - top);

  }



  return (

    <motion.div

      initial={{ opacity: 0, y: 50, scale: 0.95 }}

      whileInView={{ opacity: 1, y: 0, scale: 1 }}

      transition={{ duration: 0.5, delay: index * 0.04, ease: [0.215, 0.61, 0.355, 1] }}

      viewport={{ once: true }}

      whileHover={{ y: -8, scale: 1.02 }}

      onMouseMove={handleMouseMove}

      className="group relative flex flex-col justify-between min-h-[340px] rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-sm transition-colors duration-300 hover:border-[#FFB057]/60 overflow-hidden cursor-pointer"

      onClick={() => onNavigate(item.id)}

    >

      {/* Dynamic Radial Tracking Glow */}

      <motion.div

        className="pointer-events-none absolute -inset-px rounded-[24px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"

        style={{

          background: useMotionTemplate`

            radial-gradient(

              280px circle at ${mouseX}px ${mouseY}px,

              rgba(255, 176, 87, 0.15),

              transparent 80%

            )

          `,

        }}

      />



      {/* Decorative Corner Accent Background Ring */}

      <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-slate-50/50 group-hover:bg-[#FFB057]/5 transition-colors duration-500 blur-xl pointer-events-none" />



      {/* TOP CONTENT */}

      <div className="relative z-10">

        {/* ICON CONTAINER */}

        <motion.div

          variants={{

            hover: { rotate: [0, -6, 6, 0], scale: 1.1 }

          }}

          whileHover="hover"

          transition={{ duration: 0.45, ease: "easeInOut" }}

          className="w-14 h-14 rounded-2xl bg-slate-50 text-[#111e38] flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-gradient-to-br group-hover:from-[#FFB057] group-hover:to-[#ff941a] group-hover:text-white group-hover:shadow-md group-hover:shadow-[#FFB057]/20 transition-all duration-300"

        >

          {item.icon}

        </motion.div>



        {/* TITLE */}

        <h3 className="text-[22px] font-black text-[#111e38] tracking-tight mb-3 leading-[1.2] group-hover:text-[#ff941a] transition-colors duration-300">

          {item.title}

        </h3>



        {/* DESCRIPTION */}

        <p className="text-slate-500 text-[14px] font-medium leading-[24px] group-hover:text-slate-600 transition-colors duration-300">

          {item.description}

        </p>

      </div>



      {/* BOTTOM ACTION */}

      <div className="pt-5 mt-5 border-t border-slate-100 relative z-10 flex items-center justify-between">

        <span className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[1.5px] text-slate-400 group-hover:text-[#ff941a] transition-colors duration-300">

          Explore Solution

          <motion.span

            variants={{

              initial: { x: 0 },

              hover: { x: 5 }

            }}

            animate={undefined}

            className="inline-flex"

            style={{ display: 'inline-block' }}

            transition={{ type: "spring", stiffness: 300, damping: 15 }}

          >

            <svg

              width="14"

              height="14"

              viewBox="0 0 24 24"

              fill="none"

              stroke="currentColor"

              strokeWidth="2.5"

              strokeLinecap="round"

              strokeLinejoin="round"

              className="transform group-hover:translate-x-1 transition-transform duration-300"

            >

              <line x1="5" y1="12" x2="19" y2="12" />

              <polyline points="12 5 19 12 12 19" />

            </svg>

          </motion.span>

        </span>

      </div>

    </motion.div>

  );

}



// ================= MAIN COMPONENT =================

export default function IndustriesGrid() {

  const navigate = useNavigate();



  const industries: IndustryItem[] = [

    {

      id: "banking",

      title: "Banking",

      description: "Empower your financial institution with tailored solutions supporting banking operations and customer satisfaction.",

      slug: "banking",

      icon: (

        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

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

      description: "Drive online success with seamless shopping experiences and secure payment processing systems.",

      slug: "e-commerce",

      icon: (

        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

          <circle cx="9" cy="21" r="1" />

          <circle cx="20" cy="21" r="1" />

          <path d="M1 1h4l2.5 13h12l3-8H6" />

        </svg>

      ),

    },

    {

      id: "healthcare",

      title: "Healthcare",

      description: "Transform patient care through digital healthcare ecosystems and telemedicine solutions.",

      slug: "healthcare",

      icon: (

        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />

        </svg>

      ),

    },

    {

      id: "education",

      title: "Education",

      description: "Enhance modern learning experiences using scalable educational technology platforms.",

      slug: "education",

      icon: (

        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />

          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />

        </svg>

      ),

    },

    {

      id: "pharma",

      title: "Pharma",

      description: "Specialized pharmaceutical development systems ensuring compliance and operational efficiency.",

      slug: "pharma",

      icon: (

        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

          <path d="M4.5 16.5c-1.5-1.5-2.5-3.5-2.5-6s1-4.5 2.5-6 3.5-2.5 6-2.5 4.5 1 6 2.5l-12 12z" />

          <path d="M7.5 19.5c1.5 1.5 3.5 2.5 6 2.5s4.5-1 6-2.5 2.5-3.5 2.5-6-1-4.5-2.5-6l-12 12z" />

        </svg>

      ),

    },

    {

      id: "insurance",

      title: "Insurance",

      description: "Advanced insurance systems designed for risk management and policy automation.",

      slug: "insurance",

      icon: (

        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />

        </svg>

      ),

    },

    {

      id: "telecommunication",

      title: "Telecommunication",

      description: "Empowering telecom providers with optimized communication infrastructure.",

      slug: "telecommunication",

      icon: (

        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

          <path d="M5 12.55a11 11 0 0 1 14.08 0" />

          <path d="M1.42 9a16 16 0 0 1 21.16 0" />

          <circle cx="12" cy="18" r="2" />

        </svg>

      ),

    },

    {

      id: "manufacturing",

      title: "Manufacturing",

      description: "Optimize industrial workflows and supply chain ecosystems with smart automation.",

      slug: "manufacturing",

      icon: (

        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

          <circle cx="12" cy="12" r="3" />

          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82" />

        </svg>

      ),

    },

    {

      id: "real-estate",

      title: "Real Estate",

      description: "Transform property management and real estate operations using modern systems.",

      slug: "real-estate",

      icon: (

        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />

          <polyline points="9 22 9 12 15 12 15 22" />

        </svg>

      ),

    },

    {

      id: "finance",

      title: "Finance",

      description: "Deliver real-time finance insights and enterprise-grade management systems.",

      slug: "finance",

      icon: (

        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

          <line x1="12" y1="6" x2="12" y2="18" />

          <line x1="8" y1="10" x2="16" y2="10" />

          <line x1="8" y1="14" x2="16" y2="14" />

        </svg>

      ),

    },

    {

      id: "logistics",

      title: "Logistics",

      description: "Optimize transportation and logistics systems using intelligent automation.",

      slug: "logistics",

      icon: (

        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

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

      description: "Modernize construction projects with innovative resource planning systems.",

      slug: "construction",

      icon: (

        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">

          <rect x="3" y="3" width="18" height="18" rx="2" />

          <line x1="9" y1="3" x2="9" y2="21" />

          <line x1="15" y1="3" x2="15" y2="21" />

        </svg>

      ),

    },

  ];



  return (

    <section className="bg-[#f8fafc] py-20 lg:py-24 overflow-hidden relative">

      {/* Decorative Section Ambient Drops */}

      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-amber-200/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-blue-50/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}

        <div className="mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 border-b border-slate-200/60 pb-10">

          {/* LEFT CONTAINER */}

          <div className="max-w-2xl">

            {/* Badge */}

            <motion.div

              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 text-xs sm:text-sm font-semibold tracking-wide text-gray-800 shadow-sm mb-6"

              initial={{ opacity: 0, y: 15 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.5 }}

              viewport={{ once: true }}

            >

              <span className="text-[#FFB057] animate-pulse text-sm">✲</span>

              Expertise & Frameworks

            </motion.div>



            {/* Heading Stagger Reveal */}

            <motion.div

              initial="hidden"

              whileInView="visible"

              viewport={{ once: true }}

              variants={{

                visible: { transition: { staggerChildren: 0.02 } }

              }}

            >

              <h2 className="text-[#0a1118] text-3xl sm:text-4xl md:text-5xl font-black leading-[1.15] tracking-tight flex flex-wrap gap-x-3">

                <span className="flex">

                  {"Industries".split("").map((char, index) => (

                    <motion.span

                      key={`a-${index}`}

                      variants={{

                        hidden: { opacity: 0, y: 25, filter: "blur(4px)" },

                        visible: { opacity: 1, y: 0, filter: "blur(0px)" },

                      }}

                      transition={{ duration: 0.4, ease: "easeOut" }}

                    >

                      {char}

                    </motion.span>

                  ))}

                </span>

                <span className="flex text-gradient bg-clip-text text-transparent bg-gradient-to-r from-[#FFB057] to-[#ff941a]">

                  {"We Impact".split("").map((char, index) => (

                    <motion.span

                      key={`b-${index}`}

                      variants={{

                        hidden: { opacity: 0, y: 25, filter: "blur(4px)" },

                        visible: { opacity: 1, y: 0, filter: "blur(0px)" },

                      }}

                      transition={{ duration: 0.4, ease: "easeOut" }}

                    >

                      {char === " " ? "\u00A0" : char}

                    </motion.span>

                  ))}

                </span>

              </h2>

            </motion.div>

          </div>



          {/* RIGHT CONTAINER */}

          <motion.p

            className="text-slate-500 text-sm sm:text-base max-w-md font-medium leading-relaxed"

            initial={{ opacity: 0, x: 40 }}

            whileInView={{ opacity: 1, x: 0 }}

            transition={{ duration: 0.6, delay: 0.2 }}

            viewport={{ once: true }}

          >

            Delivering enterprise-grade digital ecosystems engineered for

            performance, scalability and operational excellence.

          </motion.p>

        </div>



        {/* ================= INDUSTRY GRID ================= */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {industries.map((item, index) => (

            <IndustryCard

              key={item.id}

              item={item}

              index={index}

              onNavigate={(id) => navigate(`/industries/${id}`)}

            />

          ))}

        </div>

      </div>

    </section>

  );

}

