import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export function AboutWhyChooseUs() {

  const features = [
    "Fast claim processing with simple approval process",
    "Affordable plans designed for every budget need",
    "Trusted experts with years of experience",
    "24/7 support for all your insurance needs",
  ];

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        {/* LEFT SIDE */}

        <motion.div
          className="lg:col-span-6 space-y-6"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          {/* Badge */}

          <div className="inline-flex items-center gap-2 bg-[#F4F9F5] border border-[#E3F0E7] text-[#1B4332] px-4 py-2 rounded-full text-sm font-semibold">
            <span className="animate-pulse text-green-600">✦</span>
            Why Choose Us
          </div>

          {/* Heading */}

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0F172A] leading-tight">
            Protecting your future <br />
            with trusted expertise
          </h2>

          {/* Paragraph */}

          <p className="text-gray-500 text-base leading-relaxed max-w-xl">
            We are dedicated to safeguarding your future with reliable
            insurance solutions and expert guidance you can trust.
          </p>

          {/* FEATURES */}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">

            {features.map((text, index) => (

              <motion.div
                key={index}
                className="flex items-start gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >

                <CheckCircle className="w-5 h-5 text-[#0F172A] fill-[#0F172A] stroke-white mt-1 flex-shrink-0" />

                <p className="text-sm font-medium text-[#0F172A]">
                  {text}
                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

        {/* CENTER CARD */}

        <motion.div
          className="lg:col-span-3 bg-[#F9F8F3] rounded-2xl overflow-hidden p-6 flex flex-col justify-between min-h-[460px] shadow-md"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          whileHover={{ y: -8 }}
          viewport={{ once: true }}
        >

          <div>

            <div className="flex items-center gap-3 mb-4">

              <div className="flex -space-x-2">

                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
                  alt=""
                />

                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150"
                  alt=""
                />

                <img
                  className="w-10 h-10 rounded-full border-2 border-white"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
                  alt=""
                />

              </div>

              <span className="text-2xl font-bold text-[#0F172A]">
                50+
              </span>

            </div>

            <p className="text-gray-500 text-sm leading-relaxed">
              Our experienced team is dedicated to helping clients choose
              the right insurance solutions.
            </p>

          </div>

          <div className="mt-6 overflow-hidden rounded-xl">

            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400"
              alt=""
              className="w-full h-60 object-cover hover:scale-105 duration-500"
            />

          </div>

        </motion.div>

        {/* RIGHT SIDE */}

        <div className="lg:col-span-3 flex flex-col gap-5">

          {/* Support Card */}

          <motion.div
            className="bg-[#FF9F43] text-white rounded-2xl p-[50px] shadow-md"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
          >

            <p className="text-sm font-semibold mb-1">
              24/7 Customer
            </p>

            <h3 className="text-xl font-bold">
              Support Available
            </h3>

            <motion.img
              src="https://illustrations.popsy.co/amber/man-holding-shield.svg"
              alt=""
              className="w-28 ml-auto mt-5"
              animate={{ y: [0, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
            />

          </motion.div>

          {/* Testimonial Card */}

          <motion.div
            className="bg-[#F8F9FA] rounded-2xl p-6 border shadow-md text-center"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
          >

            <img
              className="w-14 h-14 rounded-full mx-auto mb-4"
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150"
              alt=""
            />

            <p className="text-sm italic text-gray-500">
              "Quick claim process and very helpful team."
            </p>

          </motion.div>

        </div>

      </motion.div>

    </section>
  );
}