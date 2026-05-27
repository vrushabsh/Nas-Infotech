import React from "react";
import { motion } from "framer-motion";
import { Play, MoveRight } from "lucide-react";
import DynamicBadge from "../ReusableComponents/DynamicBadge";

const AboutProtectionSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#fcfbf7] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 font-sans">
      {/* ================= BACKGROUND MESH DECORATION ================= */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(#0a0b35 1.5px, transparent 1.5px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* ================= LEFT SIDE: VISUAL ASSETS LAYER ================= */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center"
        >
          {/* Main Image Frame */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-tl-[70px] rounded-tr-[22px] rounded-br-[22px] rounded-bl-[22px] w-[330px] h-[500px] shadow-lg border border-gray-100"
          >
            <img
              src="About/aboutus.jpg"
              alt="IT Agency Engineering Core Team"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Dotted Floating Matrix Overlay */}
          <div className="absolute top-16 right-8 grid grid-cols-6 gap-1.5 opacity-20 pointer-events-none">
            {[...Array(36)].map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 bg-slate-500 rounded-full" />
            ))}
          </div>

          {/* Small Secondary Floating Image Ring */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-0 bottom-2 w-[240px] h-[360px] rounded-full overflow-hidden border-[6px] border-[#fcfbf7] shadow-xl hidden sm:block"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              alt="Collaborative Software Planning Operations"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Rotating Media Circle Badge */}
          <motion.div
            whileHover={{ scale: 1.06, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="absolute left-4 sm:left-10 bottom-0 cursor-pointer group"
          >
            <div className="relative w-[95px] h-[95px] rounded-full bg-[#ffb357] flex items-center justify-center shadow-xl">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <path
                    id="circlePath"
                    fill="none"
                    d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  />
                  <text
                    fill="#0a0b35"
                    fontSize="8"
                    fontWeight="700"
                    letterSpacing="1"
                  >
                    <textPath href="#circlePath">
                      WATCH OUR STORY • WATCH OUR STORY •
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              <div className="w-11 h-11 rounded-full bg-[#0a0b35] flex items-center justify-center group-hover:bg-[#111e38] transition-colors">
                <Play
                  className="w-4 h-4 text-white fill-white ml-0.5"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT SIDE: TEXT CONTENT & LAYOUTS ================= */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <DynamicBadge title="What We Do" />
          {/* Heading */}

          <h2 className="text-[#0a1118] text-3xl sm:text-5xl md:text-5xl font-bold leading-[1.15] tracking-tight">
            Providing reliable
            <span className="text-[#FFB057]"> Digital Protection </span>
            for <span className="text-[#FFB057]"> Enterprise </span>
            Architectures<span className="text-[#FFB057]">.</span>
          </h2>
          {/* Agency Structural Description */}
          <p className="text-slate-500 text-[15px] sm:text-base font-medium leading-[1.9] mt-6 max-w-xl">
            Our team delivers tailored digital solutions that match your core
            objectives, budget, and operational workflows so you scale securely
            without technical complexity.
          </p>

          {/* Main Interactive Row Highlight Feature */}
          <motion.div
            whileHover={{ x: 6 }}
            transition={{ duration: 0.3 }}
            className="flex items-start gap-4 mt-10 group"
          >
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="w-14 h-14 rounded-full bg-[#ffb357] flex items-center justify-center shrink-0 shadow-md group-hover:bg-[#e09c4d] transition-colors"
            >
              <MoveRight className="w-6 h-6 text-[#0a0b35]" />
            </motion.div>

            <div>
              <h3 className="text-[18px] font-bold text-[#0a0b35]">
                Comprehensive Software & Cloud Implementations
              </h3>
              <p className="text-slate-500 text-[15px] font-medium mt-2 max-w-xl leading-relaxed">
                We design and engineer enterprise software layers, robust
                machine learning setups, continuous DevOps workflows, and data
                pipelines built around high-scale stability matrices.
              </p>
            </div>
          </motion.div>

          {/* Original Dual Data Progress Track Metrics Box */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="bg-[#f5f1eb] rounded-[22px] p-7 mt-10 shadow-sm border border-slate-200/40"
          >
            {/* Progress Bar Tier 1 */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-[16px] text-[#0a0b35]">
                  Enterprise System Architecture Optimization
                </h4>
                <span className="text-[16px] font-black text-[#0a0b35]">
                  90%
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-white overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  transition={{ duration: 1.4, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-[#ffb357] rounded-full"
                />
              </div>
            </div>

            {/* Progress Bar Tier 2 */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-[16px] text-[#0a0b35]">
                  Quality Assurance & Seamless Continuous Integration
                </h4>
                <span className="text-[16px] font-black text-[#0a0b35]">
                  95%
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-white overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  transition={{ duration: 1.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-[#ffb357] rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutProtectionSection;
