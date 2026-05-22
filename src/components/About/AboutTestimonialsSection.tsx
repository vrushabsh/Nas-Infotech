import React from "react";
import { motion } from "framer-motion";
import { Quote, Star, Phone } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Patel",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Their insurance plans are affordable and easy to manage. The claim process was quick, and the support team guided me every step of the way. I highly recommend their services.",
  },
  {
    id: 2,
    name: "Amit Verma",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    review:
      "Their insurance plans are affordable and easy to manage. The claim process was quick, and the support team guided me every step of the way. I highly recommend their services.",
  },
  {
    id: 3,
    name: "Krisha Patel",
    role: "Entrepreneur",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "Their insurance plans are affordable and easy to manage. The claim process was quick, and the support team guided me every step of the way. I highly recommend their services.",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },

  visible: (i) => ({
    opacity: 1,
    y: 0,

    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut",
    },
  }),
};

const floatingAnimation = {
  y: [0, -8, 0],

  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const AboutTestimonialsSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8f6f2] py-28 px-6 md:px-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      {/* Floating Dot */}
      <motion.div
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute right-24 top-40 w-3 h-3 rounded-full bg-[#ffb95e]"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="flex items-center gap-2 border border-slate-200 bg-white px-5 py-2 rounded-full text-sm font-medium text-slate-700 shadow-sm">
            <span className="text-green-700 text-base">✳</span>

            Client Testimonials
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <h2 className="text-[42px] md:text-[64px] font-bold text-[#0a0b35] leading-[1.08] tracking-[-1.5px]">
            Hear from our happy clients
          </h2>

          <p className="max-w-3xl mx-auto text-slate-500 text-[17px] md:text-[18px] mt-5 leading-[1.8]">
            Discover what our valued clients say about their experience with
            our insurance services. Their feedback reflects our commitment to
            reliable coverage, fast claim support.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              animate={floatingAnimation}
              whileHover={{
                y: -10,
              }}
              className="group bg-white rounded-[28px] px-10 py-12 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 relative overflow-hidden"
            >
              {/* Top */}
              <div className="relative flex justify-center mb-8">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md relative z-10"
                  />

                  <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#ffb95e] flex items-center justify-center">
                    <Quote className="w-6 h-6 text-[#0a0b35] fill-[#0a0b35]" />
                  </div>
                </div>
              </div>

              {/* Review */}
              <p className="relative text-center text-slate-600 leading-[2rem] text-[17px]">
                "{item.review}"
              </p>

              {/* Name */}
              <div className="relative text-center mt-10">
                <h3 className="text-[18px] md:text-[20px] font-bold text-[#0a0b35]">
                  {item.name}
                </h3>

                <p className="text-slate-500 text-sm mt-2">
                  {item.role}
                </p>
              </div>

              {/* Bottom Line Animation */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{
                  delay: 0.4 + index * 0.2,
                  duration: 1,
                }}
                viewport={{ once: true }}
                className="absolute bottom-0 left-0 h-[3px] bg-[#ffb95e]"
              />
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mt-16"
        >
          {/* Feedback */}
          <div className="flex items-center gap-3 flex-wrap justify-center text-center">
            <div className="flex items-center">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt=""
                className="w-9 h-9 rounded-full border-2 border-white"
              />

              <div className="-ml-2 w-9 h-9 rounded-full bg-[#0c3b1b] border-2 border-white flex items-center justify-center">
                <Phone className="w-4 h-4 text-white" />
              </div>
            </div>

            <p className="text-slate-700 text-[16px]">
              Hear genuine feedback from our valued and protected clients –
              <span className="text-[#ffb95e] font-semibold cursor-pointer hover:underline ml-2">
                View All Feedback
              </span>
            </p>
          </div>

          {/* Ratings */}
          <div className="flex items-center gap-3 mt-6 flex-wrap justify-center">
            <span className="text-xl font-bold text-[#0a0b35]">
              4.9/5
            </span>

            <div className="flex items-center text-[#ffb95e]">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-current"
                />
              ))}
            </div>

            <span className="text-lg font-semibold text-[#0a0b35]">
              Over 2000 Reviews
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTestimonialsSection;