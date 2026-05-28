import React, { useRef } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface FeatureItem {
  id: number;
  title: string;
  description: string;
 imageUrl: string;
}

/* ================= PREMIUM ANIMATIONS ================= */

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
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const HomeKeyStrengths: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  const features: FeatureItem[] = [
    {
      id: 1,
      title: "Client-Centric Approach",
      description:
        "Our company emphasizes a customer-centric approach, crafting solutions specifically designed to address the distinct needs and preferences of our clients.",
      imageUrl:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 2,
      title: "Iterative Development",
      description:
        "We excel in iterative development, delivering frequent, high-quality updates while adapting quickly to client feedback.",
      imageUrl:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 3,
      title: "Incremental Delivery",
      description:
        "We consistently provide functional product increments ensuring ongoing value and continuous improvements.",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 4,
      title: "Innovative Solutions",
      description:
        "We leverage the latest technologies and creative thinking to deliver cutting-edge digital products.",
      imageUrl:
        "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 5,
      title: "Agile Methodology",
      description:
        "Our agile workflow ensures flexibility, collaboration and rapid delivery of scalable solutions.",
      imageUrl:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 6,
      title: "Cross-Functional Teams",
      description:
        "We integrate developers, designers and analysts together to build exceptional digital experiences.",
      imageUrl:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <motion.section
      className="w-full bg-[#f9f8f4] py-16 sm:py-24 lg:py-32 overflow-hidden font-sans"
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

      {/* ================= CUSTOM SWIPER STYLES ================= */}
      <style>{`
        .custom-dots-container {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }

        .custom-dots-container .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background-color: #E5E5E5 !important;
          opacity: 1;
          margin: 0 !important;
          border-radius: 50%;
          transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .custom-dots-container .swiper-pagination-bullet-active {
          width: 42px;
          height: 12px;
          background-color: #0A1128 !important;
          border-radius: 100px;
        }
      `}</style>

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

        {/* ================= TOP CONTENT ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 xl:gap-16 items-end mb-12 sm:mb-16 lg:mb-20">

          {/* LEFT SIDE */}
          <motion.div
            className="lg:col-span-6 space-y-4 sm:space-y-5"
            variants={blurReveal}
          >

            {/* Badge */}
            <motion.div
              variants={blurReveal}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs sm:text-sm font-semibold tracking-wide text-gray-800 shadow-sm"
            >
              <span className="text-[#113217] text-sm">✿</span>
              Key Strengths
            </motion.div>

            {/* Heading */}
            <motion.div
              variants={blurReveal}
              className="overflow-hidden"
            >
              <h2 className="text-[#0a1118] text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight">
                Discover{" "}
                <span className="text-[#FFB057]">
                  Unique Features
                </span>{" "}
                are Designed to Enhance.
              </h2>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="lg:col-span-6 space-y-6 lg:pl-6"
            variants={blurReveal}
          >
            <motion.p
              variants={blurReveal}
              className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium max-w-xl"
            >
              Explore the innovative features that set us apart. Our advanced IT
              solutions are designed to optimize your operations and enhance
              productivity.
            </motion.p>

            <motion.div
              variants={blurReveal}
              className="pt-2"
            >
              <button className="group flex items-center bg-[#FFB057] hover:bg-[#e09c4d] text-black font-bold pl-6 pr-2 py-2 rounded-full text-sm tracking-wide transition-all duration-500 shadow-sm">
                View All Features

                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center ml-4 group-hover:rotate-45 transition-transform duration-500">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* ================= SWIPER SECTION ================= */}
        <motion.div
          className="w-full relative px-1"
          variants={blurReveal}
        >
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: ".custom-dots-container",
            }}
            breakpoints={{
              640: { slidesPerView: 1.5, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            className="!overflow-visible"
          >

            {features.map((feature, index) => (
              <SwiperSlide key={feature.id} className="h-auto py-2">

                <motion.div
                  variants={imageReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.15,
                  }}
                  whileHover={{
                    y: -12,
                    scale: 1.02,
                    transition: {
                      duration: 0.5,
                      ease: [0.16, 1, 0.3, 1],
                    },
                  }}
                  className="relative group w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-sm bg-white border-4 border-white transition-all duration-500 hover:shadow-[0_25px_60px_rgba(0,0,0,0.18)] flex flex-col justify-between"
                >

                  {/* Image */}
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={feature.imageUrl}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <motion.div
                    variants={blurReveal}
                    className="absolute bottom-3 left-3 right-3 bg-white rounded-[20px] p-5 sm:p-6 shadow-lg border border-gray-100 transition-all duration-500 transform group-hover:translate-y-[-4px] max-h-[85%] overflow-y-auto custom-scrollbar"
                  >

                    <motion.h3
                      variants={blurReveal}
                      className="text-[#0a1118] text-xl font-bold tracking-tight mb-2"
                    >
                      {feature.title}
                    </motion.h3>

                    <motion.p
                      variants={blurReveal}
                      className="text-gray-500 text-xs sm:text-[13px] leading-relaxed"
                    >
                      {feature.description}
                    </motion.p>
                  </motion.div>

                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* ================= PAGINATION ================= */}
        <motion.div
          className="flex justify-center mt-12"
          variants={blurReveal}
        >
          <div className="custom-dots-container" />
        </motion.div>

      </motion.div>
    </motion.section>
  );
};
export default HomeKeyStrengths;