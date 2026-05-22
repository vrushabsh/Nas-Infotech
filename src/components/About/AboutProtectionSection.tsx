import { motion } from "framer-motion";
import { Play, MoveRight } from "lucide-react";

const AboutProtectionSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f6f2] py-20 px-5 md:px-8">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(#0b0d39 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      {/* Floating Dot */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[32%] top-[58%] w-2.5 h-2.5 rounded-full bg-[#ffb357]"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex items-center justify-center"
        >
          {/* Main Image */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.4 }}
            className="relative overflow-hidden rounded-tl-[70px] rounded-tr-[22px] rounded-br-[22px] rounded-bl-[22px] w-[330px] h-[500px] shadow-lg"
          >
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?q=80&w=1200&auto=format&fit=crop"
              alt="Insurance Discussion"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Dotted Pattern */}
          <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="absolute top-16 right-8 grid grid-cols-6 gap-1.5 opacity-30"
          >
            {[...Array(36)].map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 bg-slate-400 rounded-full"
              />
            ))}
          </motion.div>

          {/* Small Oval Image */}
          <motion.div
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 bottom-2 w-[240px] h-[360px] rounded-full overflow-hidden border-[6px] border-[#f8f6f2] shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              alt="Insurance Team"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Watch Story Button */}
          <motion.div
            whileHover={{
              scale: 1.06,
              rotate: 5,
            }}
            transition={{ duration: 0.3 }}
            className="absolute left-10 bottom-0"
          >
            <div className="relative w-[95px] h-[95px] rounded-full bg-[#ffb357] flex items-center justify-center shadow-xl">
              
              {/* Rotating Text */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="
                        M 50,50
                        m -35,0
                        a 35,35 0 1,1 70,0
                        a 35,35 0 1,1 -70,0
                      "
                    />
                  </defs>

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

              {/* Play Icon */}
              <div className="w-11 h-11 rounded-full bg-[#063114] flex items-center justify-center">
                <Play
                  className="w-4 h-4 text-white fill-white ml-0.5"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-2 rounded-full text-xs font-semibold text-slate-700 shadow-sm"
          >
            <span className="text-green-700">✳</span>
            What We Do
          </motion.div>

          {/* Heading */}
          <h2 className="text-[44px] md:text-[58px] leading-[1.05] tracking-[-1.5px] font-bold text-[#0a0b35] mt-6 max-w-2xl">
            Providing reliable financial protection for families
          </h2>

          {/* Description */}
          <p className="text-slate-500 text-[17px] leading-[1.9] mt-6 max-w-xl">
            Our team delivers tailored insurance solutions that match your
            goals, budget, & lifestyle so you get the right protection without
            complexity.
          </p>

          {/* Feature */}
          <motion.div
            whileHover={{ x: 6 }}
            transition={{ duration: 0.3 }}
            className="flex items-start gap-4 mt-10"
          >
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="w-14 h-14 rounded-full bg-[#ffb357] flex items-center justify-center shrink-0 shadow-md"
            >
              <MoveRight className="w-6 h-6 text-[#0a0b35]" />
            </motion.div>

            <div>
              <h3 className="text-[22px] font-bold text-[#0a0b35]">
                Comprehensive Insurance Solutions
              </h3>

              <p className="text-slate-500 text-[15px] leading-[1.9] mt-2 max-w-xl">
                We offer a wide range of insurance services including health,
                life, vehicle, property, and business coverage, designed to
                protect.
              </p>
            </div>
          </motion.div>

          {/* Progress Box */}
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
            className="bg-[#f1ede8] rounded-[22px] p-7 mt-10 shadow-sm"
          >
            {/* Progress 1 */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-[18px] font-bold text-[#0a0b35]">
                  Life & Family Protection
                </h4>

                <span className="text-[18px] font-bold text-[#0a0b35]">
                  90%
                </span>
              </div>

              <div className="w-full h-2 rounded-full bg-white overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "90%" }}
                  transition={{
                    duration: 1.4,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="h-full bg-[#ffb357] rounded-full"
                />
              </div>
            </div>

            {/* Progress 2 */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-[18px] font-bold text-[#0a0b35]">
                  Health Insurance Solutions
                </h4>

                <span className="text-[18px] font-bold text-[#0a0b35]">
                  95%
                </span>
              </div>

              <div className="w-full h-2 rounded-full bg-white overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "95%" }}
                  transition={{
                    duration: 1.6,
                    ease: "easeOut",
                  }}
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