import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom"; // Imported React Router Link

const services = [
  {
    id: "software-development",
    title: "Software Development",
    description:
      "We deliver innovative software tailored to your business needs. Trust us for reliable, high-quality development that ensures your success.",
    image: "/Services/Services-Software Development.webp",
  },
  {
    id: "ai-and-ml",
    title: "Artificial Intelligence and ML",
    description:
      "Harness the power of AI and ML to transform your business operations with advanced automation and intelligent systems.",
    image: "/Services/Services-AI and ML.webp",
  },
  {
    id: "salesforce",
    title: "Salesforce Services",
    description:
      "Optimize your customer relationship management with scalable Salesforce ecosystem solutions.",
    image: "/Services/Services-Salesforce services.webp",
  },
  {
    id: "bi-and-analytics",
    title: "BI and Analytics",
    description:
      "Empower data-driven decision-making with modern analytics and visualization tools.",
    image: "/Services/pic-1.webp",
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    description:
      "Unlock scalable infrastructure with secure cloud-native transformation strategies.",
    image: "/Services/Services-Cloud Computing.webp",
  },
  {
    id: "testing-and-qa",
    title: "Software Testing and QA",
    description:
      "Ensure flawless digital experiences with robust QA automation and testing systems.",
    image: "/Services/Services-Software Testing and QA.webp",
  },
  {
    id: "devops",
    title: "DevOps",
    description:
      "Accelerate deployment cycles using CI/CD pipelines and infrastructure automation.",
    image: "/Services/Services-Deveops.webp",
  },
  {
    id: "big-data-and-analytics",
    title: "Big Data Analytics",
    description:
      "Transform raw data into meaningful business intelligence using scalable analytics.",
    image: "/Services/Services-Big data analytics.webp",
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Craft premium modern web experiences optimized for performance and scalability.",
    image: "/Services/Services-Web Development.jpeg",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Expand your online reach with strategic digital campaigns and SEO growth.",
    image: "/Services/Services-Digital Marketing.jpeg",
  },
  {
    id: "cyber-security",
    title: "Cyber Security",
    description:
      "Protect digital infrastructure with advanced cybersecurity and threat prevention.",
    image: "/Services/Services-Cyber Security.webp",
  },
  {
    id: "product-development",
    title: "Product Development",
    description:
      "Build scalable enterprise-grade products using agile engineering methodologies.",
    image: "/Services/Service-Product Development.webp",
  },
];

export default function ServicesPage() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll
    ? services
    : services.slice(0, 6);

  return (
    <section className="w-full bg-[#f7f8fc] py-16 sm:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= TOP SECTION ================= */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">

          {/* LEFT */}
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs sm:text-sm font-semibold tracking-wide text-gray-800 shadow-sm mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-[#FFB057] text-sm">✲</span>
              Our Services
            </motion.div>

            {/* Premium Reveal Heading */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.03 }}
              className="overflow-hidden"
            >
              <h2 className="text-[#0a123d] text-3xl sm:text-4xl md:text-5xl font-black leading-[1.1] tracking-tight flex flex-wrap">

                {"Transforming Ideas Into ".split("").map(
                  (char, index) => (
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
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  )
                )}

                {"Digital Excellence".split("").map(
                  (char, index) => (
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
                      }}
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  )
                )}

              </h2>
            </motion.div>

          </motion.div>

          {/* RIGHT */}
          <motion.p
            className="max-w-xl text-gray-500 text-sm sm:text-base leading-relaxed font-medium"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            We provide scalable enterprise solutions designed to accelerate
            innovation, optimize digital operations and empower businesses with
            modern technologies.
          </motion.p>

        </div>

        {/* ================= SERVICE GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

          {visibleServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
                scale: 0.92,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="
                group
                relative
                h-[470px]
                rounded-[28px]
                overflow-hidden
                bg-white
                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                border
                border-gray-100
              "
            >

              {/* IMAGE */}
              <div className="relative w-full h-full overflow-hidden">

                <motion.img
                  src={service.image}
                  alt={service.title}
                  whileHover={{
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Shine Effect */}
                <motion.div
                  initial={{ x: "-150%" }}
                  whileHover={{
                    x: "250%",
                  }}
                  transition={{
                    duration: 0.9,
                  }}
                  className="
                    absolute
                    top-0
                    left-0
                    h-full
                    w-[30%]
                    bg-white/20
                    blur-lg
                    rotate-12
                  "
                />

              </div>

              {/* CONTENT */}
              <motion.div
                whileHover={{
                  y: -10,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  absolute
                  bottom-4
                  left-1/2
                  -translate-x-1/2
                  w-[90%]
                  bg-white
                  rounded-[24px]
                  p-5
                  shadow-xl
                  z-20
                "
              >

                {/* Title */}
                <h3 className="text-[20px] font-bold text-[#0a123d] leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <div
                  className="
                    overflow-hidden
                    max-h-0
                    opacity-0
                    group-hover:max-h-[200px]
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                >
                  <p className="text-[14px] leading-[24px] text-[#666] mt-4">
                    {service.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-gray-200 my-4" />

                {/* CTA / LINK ANCHOR */}
                <Link to={`/services/${service.id}`}>
                  <motion.div
                    whileHover={{
                      x: 4,
                    }}
                    className="flex items-center justify-between cursor-pointer"
                  >

                    <span className="text-[15px] font-semibold text-[#0a123d] hover:text-[#FFB057] transition-colors">
                      Learn More
                    </span>

                    <motion.div
                      whileHover={{
                        rotate: 45,
                        scale: 1.08,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="
                        w-10
                        h-10
                        rounded-full
                        bg-[#FFB057]
                        flex
                        items-center
                        justify-center
                        shadow-md
                      "
                    >
                      <ArrowUpRight
                        size={18}
                        className="text-[#0a123d]"
                      />
                    </motion.div>

                  </motion.div>
                </Link>

              </motion.div>

            </motion.div>
          ))}

        </div>

        {/* ================= SHOW MORE ================= */}
        {services.length > 6 && (
          <motion.div
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() => setShowAll(!showAll)}
              className="
                inline-flex
                items-center
                gap-3
                bg-[#0a123d]
                text-white
                px-8
                py-4
                rounded-full
                text-[16px]
                font-semibold
                shadow-lg
                hover:bg-[#111b52]
                transition-all
                duration-300
              "
            >

              {showAll ? "Show Less" : "Explore More Services"}

              {showAll ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}

            </motion.button>

          </motion.div>
        )}

      </div>
    </section>
  );
}