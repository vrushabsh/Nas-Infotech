import { motion } from "framer-motion";
import type { Variants, TargetAndTransition } from "framer-motion";
import { ArrowUpRight, Headphones } from "lucide-react";
import DynamicButton from "../ReusableComponents/DynamicButton";
import DynamicBadge from "../ReusableComponents/DynamicBadge";

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const floatingAnimation: TargetAndTransition = {
  y: [0, -12, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const AboutFeatureSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#062c12] py-24 px-6 md:px-12">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(30deg, rgba(255,255,255,0.15) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.15) 87.5%, rgba(255,255,255,0.15)),
              linear-gradient(150deg, rgba(255,255,255,0.15) 12%, transparent 12.5%, transparent 87%, rgba(255,255,255,0.15) 87.5%, rgba(255,255,255,0.15)),
              linear-gradient(90deg, rgba(255,255,255,0.15) 2%, transparent 2.5%, transparent 97%, rgba(255,255,255,0.15) 97.5%, rgba(255,255,255,0.15))
            `,
            backgroundSize: "80px 140px",
          }}
        />
      </div>

      {/* Glow Effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-emerald-400/10 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          {/* <div className="flex items-center gap-2 border border-white/15 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full text-white text-sm font-medium shadow-lg">
            <Sparkles className="w-4 h-4 text-[#ffb95e]" />
            Core Feature
          </div> */}
          <DynamicBadge title={"Core Feature"} />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
            Powerful feature built for you
          </h2>

          <p className="max-w-3xl mx-auto text-white/75 text-sm md:text-lg mt-2 leading-relaxed">
            Our platform is designed with powerful, user-focused features that
            make your experience smooth, efficient, and reliable.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center mt-10"
        >
          {/* <button className="group flex items-center overflow-hidden rounded-full shadow-2xl">
            <span className="bg-[#ffb95e] text-black px-8 py-4 text-lg font-semibold">
              Contact Us
            </span>

            <span className="bg-[#ffb95e] px-5 py-4 flex items-center justify-center border-l border-black/10">
              <ArrowUpRight className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45" />
            </span>
          </button> */}
          <DynamicButton
            title={"Contact Us"}
            link={"http://localhost:5173/contact"}
          />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-end mt-15">
          {/* Card 1 */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            animate={floatingAnimation}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[28px] overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="w-full h-56 object-cover"
            />

            <div className="p-8 text-center">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#ffb95e] flex items-center justify-center mb-6 shadow-lg">
                <Headphones className="w-7 h-7 text-black" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                24/7 Support
              </h3>

              <p className="text-white/70 leading-relaxed text-sm">
                Our dedicated support available 24/7 to assist.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            animate={{
              y: [0, -20, 0],
              transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="bg-gradient-to-b from-white/10 to-white/5 border border-white/10 rounded-[28px] p-8 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-green-400/5 blur-3xl" />

            <div className="relative z-10">
              <h3 className="text-white text-2xl font-semibold leading-relaxed">
                “Your safety & security are our highest priority every day”
              </h3>

              <div className="flex justify-center gap-4 mt-10">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt=""
                  className="w-20 h-20 rounded-full object-cover border-4 border-white/20"
                />

                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt=""
                  className="w-20 h-20 rounded-full object-cover border-4 border-white/20"
                />

                <img
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt=""
                  className="w-20 h-20 rounded-full object-cover border-4 border-white/20"
                />
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            animate={floatingAnimation}
            className="rounded-[28px] overflow-hidden shadow-2xl border border-white/10"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="w-full h-[430px] object-cover"
            />
          </motion.div>

          {/* Card 4 */}
          <motion.div
            custom={3}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            animate={{
              y: [0, -16, 0],
              transition: {
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
            className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[28px] p-8 shadow-2xl relative overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-white leading-tight">
              Family and Business Safety
            </h3>

            <div className="w-full h-[1px] bg-white/10 my-8" />

            <button className="group flex items-center gap-4 text-white font-semibold text-xl">
              Read More
              <div className="w-12 h-12 rounded-full bg-[#ffb95e] flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-black transition-transform duration-300 group-hover:rotate-45" />
              </div>
            </button>

            <div className="mt-10 flex justify-center">
              <img
                src="https://cdn3d.iconscout.com/3d/premium/thumb/family-insurance-3d-icon-download-in-png-blend-fbx-gltf-file-formats--protection-safe-pack-security-icons-7573020.png"
                alt=""
                className="w-64 object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Footer Line */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center text-white text-lg"
        >
          <span className="bg-[#ffb95e] text-black px-4 py-1 rounded-full font-semibold mr-3">
            Free
          </span>
          Smart, Scalable, and High-Performance Insurance Company —
          <span className="text-[#ffb95e] font-semibold cursor-pointer hover:underline ml-2">
            Let’s Build Together!
          </span>
        </motion.div> */}
      </div>
    </section>
  );
};

export default AboutFeatureSection;
