import React, { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper core layout and module styles
import "swiper/css";
import "swiper/css/pagination";

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const HomeKeyStrengths: React.FC = () => {
  const swiperRef = useRef<any>(null);

  const features: FeatureItem[] = [
    {
      id: 1,
      title: "Client-Centric Approach",
      description:
        "Our company emphasizes a customer-centric approach, crafting solutions specifically designed to address the distinct needs and preferences of our clients. By continuously engaging with customers, collecting their feedback and responding to their changing demands, we provide personalized, high-value technology solutions.",
      imageUrl:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 2,
      title: "Iterative Development",
      description:
        "We excel in iterative development, breaking projects into manageable iterations to deliver frequent, high-quality updates. This approach allows us to adapt quickly to feedback, refine our solutions continuously and ensure that the final product perfectly aligns with our clients' needs. By embracing iterative development, we foster agility, innovation and a commitment to delivering exceptional value every step of the way.",
      imageUrl:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 3,
      title: "Incremental Delivery",
      description:
        "We championed incremental delivery, consistently providing small, functional increments of the product to ensure ongoing value and adaptability. This method allows for continuous feedback, enabling us to make timely improvements and adjustments. By embracing incremental delivery, we ensure our solutions evolve with our clients' needs, maintaining high quality and relevance throughout the development process.",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 4,
      title: "Innovative Solutions",
      description:
        "The company is devoted to providing cutting-edge solutions that drive transformation and success for our clients. By leveraging the latest technologies and creative thinking, we develop cutting-edge products tailored to meet unique challenges and opportunities. Our commitment to innovation ensures that we provide exceptional value, helping our clients remain ahead in a fast-changing digital environment.",
      imageUrl:
        "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 5,
      title: "Agile Methodology",
      description:
        "Our company thrives on Agile methodology, ensuring flexibility, collaboration and rapid delivery of high-quality solutions. By embracing iterative cycles, frequent feedback and adaptive planning, we continuously refine our processes and products to meet our clients' evolving needs. This commitment to Agile principles empowers us to deliver exceptional value efficiently and effectively, fostering innovation and customer satisfaction.",
      imageUrl:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 6,
      title: "Cross-Functional Teams",
      description:
        "We are bringing together diverse expertise to foster collaboration and innovation. By integrating developers, designers, testers and business analysts, we ensure a holistic approach to problem-solving and solution development. This synergy of skills and perspectives allows us to deliver comprehensive, high-quality products that meet our clients' complex needs efficiently and effectively.",
      imageUrl:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <section className="w-full bg-[#f9f8f4] py-16 sm:py-24 lg:py-32 overflow-hidden font-sans">
      {/* Dynamic Style Injection for Exact Mockup Dot Redesign */}
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
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .custom-dots-container .swiper-pagination-bullet-active {
          width: 42px;
          height: 12px;
          background-color: #0A1128 !important;
          border-radius: 100px;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= TOP CONTENT: ASYMMETRIC HEADER ROW ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 xl:gap-16 items-end mb-12 sm:mb-16 lg:mb-20">
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs sm:text-sm font-semibold tracking-wide text-gray-800 shadow-sm">
              <span className="text-[#113217] text-sm">✿</span>
              Key Strengths
            </div>

            
            <h2 className="text-[#0a1118] text-3xl sm:text-4xl md:text-4xl font-bold leading-[1.15] tracking-tight">
              Discover <span className="text-[#FFB057]">Unique Features </span>
              are <br /> <span className="text-[#FFB057]">Designed </span>
              to <span className="text-[#FFB057]">Enhance </span>
              <span className="text-[#FFB057]">.</span>
            </h2>

          </div>

          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium max-w-xl">
              Explore the innovative features that set us apart. Our advanced IT
              solutions are designed to optimize your operations and enhance
              productivity. With cutting-edge technology, seamless integration
              and robust security measures, our features ensure your business
              stays ahead in a competitive market.
            </p>

            <div className="pt-2">
              <button className="group flex items-center bg-[#FFB057] hover:bg-[#e09c4d] text-black font-bold pl-6 pr-2 py-2 rounded-full text-sm tracking-wide transition-all duration-300 shadow-sm">
                View All Features
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center ml-4 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM CONTENT: CAROUSEL SWIPER CONTAINER ================= */}
        <div className="w-full relative px-1">
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
            {features.map((feature) => (
              <SwiperSlide key={feature.id} className="h-auto py-2">
                <div className="relative group w-full aspect-[4/5] rounded-[24px] overflow-hidden shadow-sm bg-white border-4 border-white transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={feature.imageUrl}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 bg-white rounded-[20px] p-5 sm:p-6 shadow-lg border border-gray-100 transition-all duration-300 transform group-hover:translate-y-[-2px] max-h-[85%] overflow-y-auto custom-scrollbar">
                    <h3 className="text-[#0a1118] text-xl font-bold tracking-tight mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-[13px] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* ================= REDESIGNED PAGINATION DOTS (MOCKUP ACCURATE) ================= */}
        <div className="flex justify-center mt-12">
          <div className="custom-dots-container" />
        </div>
      </div>
    </section>
  );
};

export default HomeKeyStrengths;
