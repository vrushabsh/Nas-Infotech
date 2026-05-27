import { motion } from "framer-motion";
import { ShieldCheck, Cpu, Award, Sliders, ArrowRight } from "lucide-react";
import DynamicBadge from "../ReusableComponents/DynamicBadge";

export function AboutWhyChooseUs() {
  const features = [
    {
      title: "Expertise",
      description:
        "Our team of seasoned professionals brings extensive experience and technical expertise to every digital solution architecture.",
      icon: Award,
    },
    {
      title: "Innovation",
      description:
        "We leverage the latest technologies and progressive software engineering paradigms to keep you far ahead of the competition.",
      icon: Cpu,
    },
    {
      title: "Quality",
      description:
        "We are deeply committed to delivering high-performance, rock-solid engineering solutions that directly drive sustained business success.",
      icon: ShieldCheck,
    },
    {
      title: "Customization",
      description:
        "We recognize that every organization operates uniquely. Our codebases and infrastructures are custom tailored to match your specific workflows.",
      icon: Sliders,
    },
  ];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* LEFT SECTION */}
          <motion.div
            className="lg:col-span-6 space-y-6 flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Removed the w-[50%] wrapping div to fix small badge sizing */}
            <div className="flex justify-start">
              <DynamicBadge title="Why Choose Us" />
            </div>

            <h2 className="text-[#0a1118] text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight">
              Moving forward by
              <span className="text-[#FFB057]"> leaving </span>
              <br />
              something <span className="text-[#FFB057]"> better </span>
              behind<span className="text-[#FFB057]">.</span>
            </h2>

            <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-xl">
              In a rapidly changing world, technology is everything. It's woven
              directly into the fabric of modern society and business—even
              sitting at the heart of human evolution. It’s a great power that
              comes with great responsibility.
            </p>

            {/* FEATURES GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {features.map((item, index) => {
                const IconComponent = item.icon;

                return (
                  <motion.div
                    key={index}
                    className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ y: -6 }}
                    transition={{
                      delay: index * 0.15,
                      duration: 0.5,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#fbfaf5] group-hover:bg-[#FFB057]/10 flex items-center justify-center shrink-0 border border-slate-100 shadow-sm transition-colors duration-300">
                      <IconComponent
                        className="w-5 h-5 text-[#0a1118] group-hover:text-[#FFB057] transition-colors"
                        strokeWidth={2}
                      />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base font-black text-[#0a1118] tracking-tight">
                        {item.title}
                      </h3>

                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* CENTER CARD */}
          <motion.div
            className="lg:col-span-3 bg-[#F9F8F3] rounded-2xl overflow-hidden p-6 flex flex-col justify-between min-h-[460px] border border-slate-200/40 shadow-sm"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <div className="space-y-1.5">
                <h4 className="text-sm font-black uppercase tracking-wider text-[#FFB057]">
                  World-Class Talent
                </h4>

                <p className="text-gray-500 text-xs sm:text-sm font-semibold leading-relaxed">
                  Our seasoned cross-functional engineers are committed to
                  building resilient digital products that guarantee enterprise
                  compliance.
                </p>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200/60 shadow-inner">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop&q=80"
                alt="Office Team"
                className="w-full h-56 object-cover hover:scale-105 duration-700 transition-transform"
              />
            </div>
          </motion.div>

          {/* RIGHT SECTION */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            {/* CARD 1 */}
            <motion.div
              className="bg-[#0a1118] text-white rounded-2xl p-8 flex flex-col justify-between flex-1 relative overflow-hidden group shadow-sm border border-slate-800"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-1.5 relative z-10">
                <p className="text-xs font-bold uppercase tracking-widest text-[#FFB057]">
                  Production Ready
                </p>

                <h3 className="text-xl font-black tracking-tight leading-tight">
                  Continuous Integration & Deployment
                </h3>
              </div>

              <div className="mt-8 flex items-end justify-between relative z-10">
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg text-xs font-bold backdrop-blur-sm group-hover:bg-[#FFB057]/20 group-hover:text-[#FFB057] transition-all duration-300">
                  <span>Enterprise SLA</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                </div>

                <motion.div
                  animate={{
                    scale: [1, 1.08, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                  className="w-16 h-16 rounded-full bg-[#FFB057]/10 blur-sm absolute -right-4 -bottom-4"
                />
              </div>
            </motion.div>

            {/* CARD 2 */}
            <motion.div
              className="bg-[#F8F9FA] rounded-2xl p-6 border border-slate-200/60 shadow-sm flex flex-col justify-center text-center space-y-3"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -6 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              viewport={{ once: true }}
            >
              <img
                className="w-12 h-12 rounded-full mx-auto object-cover border-2 border-white shadow-md"
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
                alt="CTO"
              />

              <div className="space-y-1">
                <p className="text-xs sm:text-sm font-medium italic text-slate-600 px-2 leading-relaxed">
                  "They refactored our legacy system architecture cleanly with
                  zero operational downtime."
                </p>

                <div className="pt-2">
                  <h5 className="text-xs font-black text-[#0a1118]">
                    CTO, Global Logistics Platform
                  </h5>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
