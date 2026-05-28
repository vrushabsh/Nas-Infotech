import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ShieldCheck,
  Zap,
  HeartHandshake,
  Sliders,
} from "lucide-react";

interface FeatureItem {
  id: number;
  title: string;
  icon: React.ReactNode;
}

const HomeWhyChooseUs: React.FC = () => {
  const features: FeatureItem[] = [
    {
      id: 1,
      title: "Expertise",
      icon: <ShieldCheck className="w-5 h-5 text-black" />,
    },
    {
      id: 2,
      title: "Innovation",
      icon: <Zap className="w-5 h-5 text-black" />,
    },
    {
      id: 3,
      title: "Quality",
      icon: <HeartHandshake className="w-5 h-5 text-black" />,
    },
    {
      id: 4,
      title: "Customization",
      icon: <Sliders className="w-5 h-5 text-black" />,
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">

          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            className="lg:col-span-6 space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: -80 }}
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
              Why Choose Us
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

                {"What ".split("").map((char, index) => (
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

                {"Sets ".split("").map((char, index) => (
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

                {" Us Apart?".split("").map((char, index) => (
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
              className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Select us for your IT needs, as we offer cutting-edge solutions, a
              team of highly skilled experts, dependable support and a
              commitment to customer satisfaction to drive your business to
              success.
            </motion.p>

            {/* Checkmarks */}
            <motion.div
              className="space-y-3 pt-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >

              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
              >
                <span className="w-5 h-5 rounded-full bg-[#0a2113] flex items-center justify-center text-white shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>

                <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium">
                  We offer innovative IT solutions with highly skilled experts.
                </p>
              </motion.div>

              <motion.div
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
              >
                <span className="w-5 h-5 rounded-full bg-[#0a2113] flex items-center justify-center text-white shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>

                <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium">
                  Deliver dependable support and prioritize customer
                  satisfaction.
                </p>
              </motion.div>

            </motion.div>

            <motion.hr
              className="border-gray-100 my-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />

            {/* ================= FEATURE GRID ================= */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-6 gap-x-8 pt-2">

              {features.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                  }}
                >

                  {/* Icon */}
                  <motion.div
                    className="w-12 h-12 rounded-full bg-[#FFB057] flex items-center justify-center shrink-0 shadow-sm"
                    whileHover={{
                      rotate: 10,
                      scale: 1.1,
                    }}
                  >
                    {feature.icon}
                  </motion.div>

                  <span className="text-[#0a1118] text-sm sm:text-base font-bold leading-snug">
                    {feature.title}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <button className="group flex items-center bg-[#FFB057] hover:bg-[#e09c4d] text-black font-bold pl-6 pr-2 py-2 rounded-full text-sm tracking-wide transition-all duration-300 shadow-sm">

                Contact Us

                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center ml-4 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>
            </motion.div>

          </motion.div>

          {/* ================= RIGHT IMAGE SECTION ================= */}
          <motion.div
            className="lg:col-span-6 relative w-full aspect-[1/1] sm:aspect-[4/4] lg:aspect-[5/5] xl:aspect-[1/1]"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >

            {/* Main Image */}
            <motion.div
              className="w-full h-full rounded-[32px] overflow-hidden shadow-md"
              whileHover={{
                scale: 1.02,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
                alt="Business Meeting"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Card */}
            <motion.div
              className="absolute bottom-6 left-6 right-6 sm:right-auto sm:left-6 sm:max-w-[340px] md:max-w-[380px] bg-white rounded-[24px] p-6 shadow-2xl border border-gray-100/50 z-10"
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
              }}
              whileHover={{
                y: -6,
              }}
              viewport={{ once: true }}
            >

              {/* Quote */}
              <p className="text-[#0a1118] font-bold text-sm sm:text-base leading-relaxed mb-6">
                &ldquo; I was looking for reliable business insurance and
                wasn&apos;t sure where to start. &rdquo;
              </p>

              <div className="w-full h-[1px] bg-gray-100 mb-4"></div>

              {/* User */}
              <div className="flex items-center gap-3">

                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
                  alt="Ronald Richards"
                  className="w-10 h-10 rounded-full object-cover border border-gray-200"
                />

                <div>
                  <h4 className="text-[#0a1118] text-sm sm:text-base font-extrabold leading-tight">
                    Ronald Richards
                  </h4>

                  <p className="text-gray-400 text-xs font-semibold">
                    CEO & Founder
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HomeWhyChooseUs;