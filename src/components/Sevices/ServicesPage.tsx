import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Software Development",
    description:
      "We deliver innovative software tailored to your business needs.Trust us for reliable, high-quality development that ensures your success.",
    image: "/Services/Services-Software Development.webp",
  },
  {
    title: "Artificial Intelligence and ML",
    description:
      "Harness the power of AI and ML to transform your business operations. Our advanced solutions drive innovation, setting you ahead of the competition.",
    image: "/Services/Services-AI and ML.webp",
  },
  {
    title: "Salesforce Services",
    description:
      "Optimize your customer relationship management with our Salesforce services. We provide tailored solutions to streamline your processes and boost your efficiency.",
    image: "/Services/Services-Salesforce services.webp",
  },
  {
    title: "BI and Analytics",
    description:
      "We provide comprehensive BI and analytics solutions tailored to your business needs, empowering data-driven decision-making for growth and efficiency.",
    image: "/Services/pic-1.webp",
  },
  {
    title: "Cloud Computating",
    description:
      "Unlock scalable infrastructure with our cloud computing solutions. Seamlessly transition for enhanced reliability, security, and efficiency in operations.",
    image: "/Services/Services-Cloud Computing.webp",
  },
  {
    title: "Software Testing and QA",
    description:
      "We guarantee flawless software performance with our rigorous testing and quality assurance services ensuring a seamless launch for your product.",
    image: "/Services/Services-Software Testing and QA.webp",
  },
  {
    title: "Devops",
    description:
      "Streamline development and operations with our DevOps expertise. We optimize workflows, automate processes and ensure faster, efficient software delivery.",
    image: "/Services/Services-Deveops.webp",
  },
  {
    title: "Big Data Analytics",
    description:
      "Empower data-driven decisions with our advanced BI and analytics solutions. Gain valuable insights to drive your business forward with confidence and precision.",
    image: "/Services/Services-Big data analytics.webp",
  },
  {
    title: "Web Development",
    description:
      "Craft captivating online experiences tailored to your brand with our expert web development services, bringing your digital vision to life with precision and creativity.",
    image: "/Services/Services-Web Development.jpeg",
  },
  {
    title: "Digital Marketing",
    description:
      "Boost your online presence with our strategic solutions. From SEO to social media, we optimize your digital strategy for maximum impact and growth.",
    image: "/Services/Services-Digital Marketing.jpeg",
  },
  {
    title: "Cyber Security",
    description:
      "We provide comprehensive cybersecurity services, protecting your data, networks and systems from threats, ensuring confidentiality, integrity and availability.",
    image: "/Services/Services-Cyber Security.webp",
  },
  {
    title: "Product Development",
    description:
      "We specialize in product development, leveraging cutting-edge technologies and agile methodologies to bring your ideas to life efficiently and innovatively.",
    image: "/Services/Service-Product Development.webp",
  },
  {
    title: "CRM Services",
    description:
      "Enhance customer satisfaction with tailored CRM solutions. Streamline processes and nurture relationships for sustained growth.",
    image: "/Services/CRM Services.webp",
  },
  {
    title: "IT Staffing",
    description:
      "Unlock your team's potential with our specialized IT staffing solutions. From talent acquisition to onboarding, we ensure a perfect fit for your success.",
    image: "/Services/Services-IT Staff.webp",
  },
  {
    title: "IT Service Support",
    description:
      "We provide comprehensive cybersecurity services, protecting your data, networks and systems from threats, ensuring confidentiality, integrity and availability.",
    image: "/Services/Services-IT service support.webp",
  },
];

export default function ServicesPage() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll
    ? services
    : services.slice(0, 6);

  return (
    <section className="w-full bg-white py-16 px-6 md:px-10">
      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {visibleServices.map((service, index) => (
          <motion.div
            key={index}
            initial="initial"
            animate="initial"
            whileHover="hover"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.08,
            }}
            className="
              group
              relative
              h-[450px]
              rounded-[24px]
              overflow-hidden
              cursor-pointer
            "
          >
            {/* IMAGE */}
            <div className="absolute inset-0 overflow-hidden rounded-[24px]">
              <motion.img
                src={service.image}
                alt={service.title}
                variants={{
                  hover: {
                    scale: 1.06,
                  },
                }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />

              {/* DARK OVERLAY */}
              <div
                className="
                  absolute
                  inset-0
                  bg-black/10
                  group-hover:bg-black/20
                  transition-all
                  duration-500
                "
              />

              {/* FLASH EFFECT */}
              <motion.div
                variants={{
                  hover: {
                    x: ["-180%", "240%"],
                    opacity: [0, 0.4, 0],
                    transition: {
                      duration: 0.9,
                    },
                  },
                }}
                className="
                  absolute
                  top-0
                  left-0
                  h-full
                  w-[28%]
                  bg-white/40
                  blur-md
                  rotate-12
                  z-20
                "
              />
            </div>

            {/* CONTENT BOX */}
            <motion.div
              variants={{
                hover: {
                  y: -18,
                  scale: 1.02,
                  boxShadow:
                    "0px 25px 45px rgba(0,0,0,0.18)",
                },
              }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
              }}
              className="
                absolute
                bottom-4
                left-1/2
                -translate-x-1/2
                w-[90%]
                bg-[#f8f8f8]
                rounded-[18px]
                px-4
                pt-5
                pb-5
                shadow-[0_10px_30px_rgba(0,0,0,0.12)]
                z-30
              "
            >
              {/* TITLE */}
              <h3 className="text-[18px] md:text-[20px] font-bold text-[#0a123d]">
                {service.title}
              </h3>

              {/* HOVER CONTENT */}
              <motion.div
                variants={{
                  initial: {
                    height: 0,
                    opacity: 0,
                    marginTop: 0,
                  },
                  hover: {
                    height: "auto",
                    opacity: 1,
                    marginTop: 16,
                  },
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="overflow-hidden"
              >
                {/* DESCRIPTION */}
                <p className="text-[14px] leading-[22px] text-[#555] mb-3">
                  {service.description}
                </p>


              </motion.div>
              {/* LINE */}
              <div className="w-full h-[1px] bg-gray-200 mb-3" />

              {/* LEARN MORE */}
              <motion.div
                variants={{
                  hover: {
                    x: 3,
                  },
                }}
                className="flex items-center gap-4"
              >
                <span className="text-[15px] font-semibold text-[#0a123d]">
                  Learn more
                </span>

                {/* BUTTON */}
                <motion.div
                  variants={{
                    hover: {
                      rotate: 45,
                      scale: 1.1,
                    },
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                      w-[38px]
                      h-[38px]
                      rounded-full
                      bg-[#f7b457]
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
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* SHOW MORE BUTTON */}
      {services.length > 6 && (
        <div className="flex justify-center mt-14">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
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
            {showAll ? "Show Less" : "Show More"}

            {showAll ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </motion.button>
        </div>
      )}
    </section>
  );
}