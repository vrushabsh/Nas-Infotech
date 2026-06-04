import React from "react";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import DynamicButton from "../ReusableComponents/DynamicButton";
import DynamicBadge from "../ReusableComponents/DynamicBadge";

// --- Animation Variants from Reference Component ---
const blurReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const imageReveal: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.95,
    filter: "blur(12px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// --- Type Definitions ---
interface Metric {
  value: string;
  label: string;
}

interface ServiceItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  metrics: Metric[];
  imageSrc: string;
}

// --- Updated Services Mock Data ---
const servicesData: ServiceItem[] = [
  {
    id: "software-development",
    tag: "Core Engineering",
    title: "Software Development",
    description:
      "We deliver innovative software tailored to your business needs. Trust us for reliable, high-quality development that ensures your success.",
    metrics: [
      { value: "100%", label: "Tailored Solutions" },
      { value: "Agile", label: "Delivery Method" },
      { value: "24/7", label: "Expert Support" },
    ],
    imageSrc: "/Services/Services-Software Development.webp",
  },
  {
    id: "artificial-intelligence-ml",
    tag: "Advanced Tech",
    title: "Artificial Intelligence And ML",
    description:
      "Harness the power of AI and ML to transform your business operations. Our advanced solutions drive innovation, setting you ahead of the competition.",
    metrics: [
      { value: "Data", label: "Driven Insights" },
      { value: "AI", label: "Powered Engines" },
      { value: "3x", label: "Faster Operations" },
    ],
    imageSrc: "/Services/Services-AI and ML.webp",
  },
  {
    id: "salesforce-services",
    tag: "Cloud CRM",
    title: "Salesforce Services",
    description:
      "Optimize your customer relationship management with our Salesforce services. We provide tailored solutions to streamline your processes and boost your efficiency.",
    metrics: [
      { value: "CRM", label: "Optimization" },
      { value: "Seamless", label: "Integrations" },
      { value: "High", label: "Efficiency ROI" },
    ],
    imageSrc: "/Services/Services-Salesforce services.webp",
  },
  {
    id: "bi-and-analytics",
    tag: "Business Intelligence",
    title: "BI And Analytics",
    description:
      "We provide comprehensive BI and analytics solutions tailored to your business needs, empowering data-driven decision-making for growth and efficiency.",
    metrics: [
      { value: "Real-Time", label: "Dashboards" },
      { value: "Growth", label: "Forecasting" },
      { value: "Metrics", label: "De-Risked Decisions" },
    ],
    imageSrc: "/Services/pic-1.webp",
  },
];

export const HomeServices: React.FC = () => {
  return (
    <motion.section
      className="bg-[#f9f8f4] py-12 sm:py-20 lg:py-10 overflow-hidden font-sans antialiased"
      initial={{
        opacity: 0,
        y: 60,
        filter: "blur(12px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-[24px] sm:rounded-[32px] 
        p-6 sm:p-10 md:p-16 shadow-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {/* --- Header Section --- */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <DynamicBadge title={"Our Services"} />
          </div>

          <h2 className="text-[#0a1118] text-3xl sm:text-4xl md:text-4xl font-bold leading-[1.1] tracking-tight">
            Companies that closed the <br />
            <span className="text-[#FFB057]"> Perception </span> gap and what
            <span className="text-[#FFB057]"> Changed </span>
          </h2>
        </div>

        {/* --- Services Grid List --- */}
        <div className="flex flex-col gap-16 sm:gap-24 md:gap-32">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-11 gap-8 sm:gap-12 lg:gap-16 xl:gap-24 items-center"
              >
                {/* Text Content Block */}
                <motion.div
                  variants={blurReveal}
                  className={`lg:col-span-5 flex flex-col justify-center space-y-4 sm:space-y-6 ${
                    !isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Tag */}
                  <div className="flex items-center gap-2 text-xs font-bold tracking-wide text-gray-400">
                    <span className="inline-block w-1.5 h-1.5 bg-[#FFB057] rounded-full"></span>
                    {service.tag}
                  </div>

                  {/* Title */}
                  <h3 className="text-[#0a1118] text-2xl sm:text-3xl font-bold tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed font-medium">
                    {service.description}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-4 border-t border-gray-100 pt-4 sm:pt-6">
                    {service.metrics.map((metric, mIdx) => (
                      <motion.div
                        key={mIdx}
                        className="flex flex-col gap-0.5 sm:gap-1"
                        whileHover={{ y: -3 }}
                      >
                        <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0a1118] tracking-tight truncate">
                          {metric.value}
                        </span>
                        <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-gray-400 tracking-wider uppercase leading-snug break-words">
                          {metric.label}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-2">
                    <a
                      href={`/services#${service.id}`}
                      className="inline-flex items-center gap-2 text-xs font-bold tracking-wide group w-fit text-[#0a1118] hover:text-[#FFB057] transition-colors duration-300"
                    >
                      Read more
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.div>

                {/* Visual / Image Block */}
                <div
                  className={`lg:col-span-6 ${!isEven ? "lg:order-1" : "lg:order-2"}`}
                >
                  <motion.div
                    variants={imageReveal}
                    whileHover={{
                      y: -6,
                      scale: 1.01,
                      transition: {
                        duration: 0.4,
                        ease: [0.16, 1, 0.3, 1],
                      },
                    }}
                    className="rounded-[16px] sm:rounded-[24px] overflow-hidden aspect-[4/3] w-full shadow-md"
                  >
                    <img
                      src={service.imageSrc}
                      alt={`${service.title} Preview`}
                      className="w-full h-full object-cover rounded-[16px] sm:rounded-[24px]"
                    />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- Footer Button to Services Page --- */}
        <motion.div
          variants={blurReveal}
          className="flex justify-center mt-12 sm:mt-20 md:mt-28"
        >
          <DynamicButton title="All Services" link="/services" />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default HomeServices;
