import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface ProgressItem {
  id: number;
  label: string;
  percentage: number;
}

const HomeWhatWeDo: React.FC = () => {
  const progressData: ProgressItem[] = [
    { id: 1, label: "On-Time Software Delivery", percentage: 98 },
    { id: 2, label: "Client Enterprise Resource Optimization", percentage: 92 },
  ];

  const tickerItems = [
    "Software Development",
    "Artificial Intelligence And ML",
    "Salesforce Services",
    "BI And Analytics",
    "Cyber Security",
    "Devops Engineering",
    "Cloud Computing",
    "Big Data Analytics",
  ];

  return (
    <div className="w-full bg-white flex flex-col">

      {/* ================= MARQUEE ================= */}
      <div className="w-full bg-[#113217] py-4 overflow-hidden border-b border-white/10 select-none">
        <div className="flex whitespace-nowrap gap-12 animate-[marquee_25s_linear_infinite]">

          {[...tickerItems, ...tickerItems, ...tickerItems].map(
            (item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-3 text-white text-sm sm:text-base font-bold tracking-wide"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-[#FFB057] text-lg">✲</span>
                {item}
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* ================= MAIN SECTION ================= */}
      <section className="w-full py-16 sm:py-24 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 xl:gap-24 items-center">

            {/* ================= LEFT IMAGES ================= */}
            <motion.div
              className="lg:col-span-5 relative w-full flex items-center justify-center min-h-[380px] sm:min-h-[480px]"
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              {/* Dot Pattern */}
              <motion.div
                className="absolute top-[18%] left-[45%] w-16 h-20 opacity-20 hidden sm:block pointer-events-none z-0 bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:8px_8px]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.2 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              />

              {/* Left Image */}
              <motion.div
                className="absolute left-0 top-0 w-[62%] aspect-[3/4] rounded-br-[40px] rounded-bl-[40px] rounded-tr-[40px] rounded-tl-[100px] overflow-hidden shadow-lg border-4 border-white z-10"
                initial={{
                  opacity: 0,
                  y: 60,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.9,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600"
                  alt="Software Team"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Right Circle Image */}
              <motion.div
                className="absolute right-0 bottom-0 w-[55%] aspect-square rounded-full overflow-hidden shadow-xl border-8 border-white z-20"
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                }}
                whileHover={{
                  scale: 1.04,
                }}
                viewport={{ once: true }}
              >
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600"
                  alt="IT Strategy"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Video Button */}
              <motion.button
                aria-label="Watch our story"
                className="absolute left-[15%] bottom-[-15px] sm:bottom-0 z-30 group w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#FFB057] flex items-center justify-center shadow-2xl"
                initial={{
                  opacity: 0,
                  scale: 0,
                  rotate: -180,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                }}
                whileHover={{
                  scale: 1.08,
                }}
                viewport={{ once: true }}
              >

                {/* Rotating Ring */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center animate-[spin_16s_linear_infinite]">
                  <svg className="w-full h-full p-1" viewBox="0 0 100 100">
                    <path
                      id="videoPath"
                      d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                      fill="none"
                    />

                    <text className="text-[9px] font-black uppercase tracking-[2.5px] fill-black">
                      <textPath href="#videoPath" startOffset="0%">
                        • Innovation In Motion • Watch Our Story
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Play Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#113217] text-[#FFB057] flex items-center justify-center pl-0.5 shadow-md group-hover:bg-[#184620] transition-colors">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
                </div>
              </motion.button>

            </motion.div>

            {/* ================= RIGHT CONTENT ================= */}
            <motion.div
              className="lg:col-span-7 space-y-6 sm:space-y-8"
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >

              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs sm:text-sm font-semibold tracking-wide text-gray-800 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="text-[#113217] text-sm">✲</span>
                What We Do
              </motion.div>

              {/* ================= PREMIUM TEXT REVEAL ================= */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.03 }}
                className="overflow-hidden"
              >
                <h2 className="text-[#0a1118] text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight flex flex-wrap">

                  {"Providing ".split("").map((char, index) => (
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
                  ))}

                  {"Reliable ".split("").map((char, index) => (
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
                  ))}

                  {" Enterprise IT Solutions for Businesses.".split("").map(
                    (char, index) => (
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
                    )
                  )}

                </h2>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium max-w-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
              >
                Our elite agile squads deliver tailored digital products and
                robust cloud architectures designed to optimize operations,
                scale infrastructure, and enhance workflows.
              </motion.p>

              {/* Service Card */}
              <motion.div
                className="flex gap-4 items-start max-w-xl"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
              >

                {/* Icon */}
                <motion.div
                  className="w-12 h-12 rounded-xl bg-[#FFB057]/20 flex items-center justify-center shrink-0 text-[#113217]"
                  whileHover={{
                    rotate: 10,
                    scale: 1.1,
                  }}
                >
                  <svg
                    className="w-6 h-6 stroke-[2]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </motion.div>

                {/* Text */}
                <div className="space-y-1.5">
                  <h3 className="text-[#0a1118] text-lg font-bold tracking-tight">
                    Comprehensive IT Strategy & Development
                  </h3>

                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                    From machine learning systems to full-scale web ecosystem
                    deployments, we offer targeted solutions designed to
                    optimize and scale sustainable computing environments.
                  </p>
                </div>

              </motion.div>

              {/* ================= PROGRESS AREA ================= */}
              <motion.div
                className="bg-[#f9f8f4] p-5 sm:p-6 rounded-[24px] max-w-xl space-y-5 shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >

                {progressData.map((item, index) => (
                  <div key={item.id} className="space-y-2">

                    <div className="flex justify-between items-center text-sm sm:text-base font-bold text-[#0a1118]">
                      <span>{item.label}</span>
                      <span className="tabular-nums">
                        {item.percentage}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">

                      <motion.div
                        className="h-full bg-[#FFB057] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${item.percentage}%`,
                        }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.3,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      />

                    </div>

                  </div>
                ))}

              </motion.div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= CUSTOM MARQUEE ================= */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }

          100% {
            transform: translateX(-33.33%);
          }
        }
      `}</style>

    </div>
  );
};

export default HomeWhatWeDo;