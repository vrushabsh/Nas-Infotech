import React from "react";
import { motion, type Variants } from "framer-motion";
import DynamicButton from "../ReusableComponents/DynamicButton";

const blurReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    filter: "blur(18px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.9,
    filter: "blur(18px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",

    transition: {
      duration: 2.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const HomeAboutUs: React.FC = () => {
  return (
    <motion.section
      className="w-full bg-white py-16 sm:py-24 lg:py-32 overflow-hidden"
      initial={{
        opacity: 0,
        y: 80,
        filter: "blur(18px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.22,
              delayChildren: 0.45,
            },
          },
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 xl:gap-24 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            variants={blurReveal}
            className="lg:col-span-6 relative w-full h-[400px] sm:h-[550px] md:h-[600px] lg:h-[580px] xl:h-[650px]"
          >

            {/* Decorative Arrow */}
            <motion.div
              className="absolute top-55 left-30 w-32 h-32 hidden xl:block pointer-events-none z-0"
              initial={{
                opacity: 0,
                y: 50,
                rotate: -15,
                filter: "blur(12px)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: 0,
                filter: "blur(0px)",
              }}
              transition={{
                duration: 2,
                delay: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              viewport={{ once: true }}
            >
              <img
                src="https://demo.awaikenthemes.com/covar/wp-content/uploads/2026/03/about-us-arrow.svg"
                alt="Arrow Shape"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Top Image */}
            <motion.div
              className="absolute top-0 right-0 w-[70%] sm:w-[60%] h-[60%] rounded-[24px] overflow-hidden shadow-lg z-10"
              variants={imageReveal}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
            >
              <img
                src="https://demo.awaikenthemes.com/covar/wp-content/uploads/2026/03/about-us-image-2.jpg"
                alt="Professional Executive"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Bottom Image */}
            <motion.div
              className="absolute bottom-0 left-0 w-[65%] sm:w-[55%] h-[50%] rounded-[24px] overflow-hidden shadow-2xl border-8 border-white z-20"
              variants={imageReveal}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: {
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
            >
              <img
                src="https://demo.awaikenthemes.com/covar/wp-content/uploads/2026/03/about-us-image-1.jpg"
                alt="Team Consultation"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              variants={imageReveal}
              className="absolute right-[18%] sm:right-[25%] bottom-[12%] sm:bottom-[15%] z-30 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-[#FFB057] flex items-center justify-center shadow-xl"
              whileHover={{
                scale: 1.08,
                transition: {
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
            >
              {/* Circular Text */}
              <div className="absolute inset-0 w-full h-full flex items-center justify-center animate-[spin_12s_linear_infinite]">
                <svg className="w-full h-full p-1.5" viewBox="0 0 100 100">
                  <path
                    id="circlePath"
                    d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                    fill="none"
                  />

                  <text className="text-[9.5px] font-black uppercase tracking-[3px] fill-black">
                    <textPath href="#circlePath" startOffset="0%">
                      • Contact Us • Contact Us
                    </textPath>
                  </text>
                </svg>
              </div>

              {/* Center Symbol */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0a2113] flex items-center justify-center text-[#FFB057]">
                <div className="grid grid-cols-2 gap-[2px] rotate-45 scale-75 sm:scale-90">
                  <span className="w-1.5 h-1.5 rounded-sm border-2 border-[#FFB057]"></span>
                  <span className="w-1.5 h-1.5 rounded-sm border-2 border-[#FFB057]"></span>
                  <span className="w-1.5 h-1.5 rounded-sm border-2 border-[#FFB057]"></span>
                  <span className="w-1.5 h-1.5 rounded-sm border-2 border-[#FFB057]"></span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT CONTENT ================= */}
          <motion.div
            variants={blurReveal}
            className="lg:col-span-6 space-y-6 sm:space-y-8"
          >

            {/* Badge */}
            <motion.div
              variants={blurReveal}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs sm:text-sm font-semibold tracking-wide text-gray-800 shadow-sm"
            >
              <span className="text-[#113217] text-sm">✲</span>
              About Us
            </motion.div>

            {/* HEADING */}
            <motion.div
              variants={blurReveal}
              className="overflow-hidden"
            >
              <h2 className="text-[#0a1118] text-3xl sm:text-4xl md:text-4xl font-bold leading-[1.15] tracking-tight">
                Explore our{" "}
                <span className="text-[#FFB057]">
                  Legacy
                </span>{" "}
                of Innovation and Excellence.
              </h2>
            </motion.div>

            {/* Paragraph */}
            <motion.p
              variants={blurReveal}
              className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium"
            >
              We are committed to turning your IT challenges into success
              stories. Our expert team provides innovative and reliable IT
              solutions tailored to your business needs. With a strong focus on
              customer satisfaction, we offer unparalleled support and advanced
              technology to help your business flourish in the digital age.
            </motion.p>

            {/* Quote Box */}
            <motion.div
              variants={blurReveal}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              className="relative bg-gray-50/80 rounded-2xl p-6 sm:p-8 border-l-[4px] border-[#113217] shadow-sm"
            >
              <p className="text-[#0a1118] font-bold text-sm sm:text-base leading-relaxed italic">
                &ldquo; Collaborate with us and discover the distinction that
                expertise and commitment can make. &rdquo;
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={blurReveal}
              className="grid grid-cols-3 sm:grid-cols-4 gap-6 pt-2 items-center"
            >
              <motion.div whileHover={{ y: -5 }}>
                <span className="text-3xl sm:text-4xl font-bold text-[#0a1118] tracking-tight">
                  4+
                </span>

                <p className="text-xs sm:text-[12px] text-gray-500 font-semibold leading-snug">
                  Years in Business
                </p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }}>
                <span className="text-3xl sm:text-4xl font-bold text-[#0a1118] tracking-tight">
                  30+
                </span>

                <p className="text-xs sm:text-[12px] text-gray-500 font-semibold leading-snug">
                  Employees
                </p>
              </motion.div>

              <motion.div whileHover={{ y: -5 }}>
                <span className="text-3xl sm:text-4xl font-bold text-[#0a1118] tracking-tight">
                  12+
                </span>

                <p className="text-xs sm:text-[12px] text-gray-500 leading-snug">
                  Completed Projects
                </p>
              </motion.div>

              <motion.div
                className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm"
                whileHover={{
                  scale: 1.05,
                  transition: {
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                  },
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=300"
                  alt="Business Team"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Button */}
            <motion.div
              variants={blurReveal}
              className="pt-2"
            >
              <DynamicButton
                title={"More About Us"}
                link={"http://localhost:5173/about"}
              />
            </motion.div>

          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HomeAboutUs;