import React, { useState, useEffect } from "react";
import { Shield, Plane, ArrowUpRight, Star } from "lucide-react";

const servicesData = [
  {
    id: 1,
    icon: <Shield className="w-6 h-6 text-[#e68c3a]" />,
    title: "Property Insurance",
    description:
      "Life insurance provides financial protection and peace of mind for you.",
  },
  {
    id: 2,
    icon: <Plane className="w-6 h-6 text-[#e68c3a]" />,
    title: "Travel Insurance",
    description:
      "Life insurance provides financial protection and peace of mind for you.",
  },
  {
    id: 3,
    icon: <Shield className="w-6 h-6 text-[#e68c3a]" />,
    title: "Life Insurance",
    description:
      "Life insurance provides financial protection and peace of mind.",
  },
  {
    id: 4,
    icon: <Shield className="w-6 h-6 text-[#e68c3a]" />,
    title: "Health Insurance",
    description: "Secure your health and future with complete coverage plans.",
  },
  {
    id: 5,
    icon: <Shield className="w-6 h-6 text-[#e68c3a]" />,
    title: "Vehicle Insurance",
    description:
      "Protect your vehicle against accidents and unexpected damages.",
  },
  {
    id: 6,
    icon: <Shield className="w-6 h-6 text-[#e68c3a]" />,
    title: "Business Insurance",
    description:
      "Comprehensive protection solutions for your growing business.",
  },
];

const AboutServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Total visible slides on desktop
  const visibleCards = 3;

  // Total possible dots/slides
  const totalSlides = servicesData.length - visibleCards + 1;

  // Auto Slide
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex >= totalSlides - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isHovered, totalSlides]);

  return (
    <section className="bg-[#fcfbf7] py-24 px-6 md:px-12 relative overflow-hidden w-full text-slate-900">
      {/* Decorative Dot */}
      <div className="absolute right-24 top-1/3 w-2 h-2 rounded-full bg-[#ffb774] opacity-70 hidden md:block" />

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16 flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs sm:text-sm font-semibold tracking-wide text-gray-800 shadow-sm">
          <span className="text-[#113217] text-sm">✲</span>
          Our Services
        </div>

        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 max-w-2xl leading-tight">
          Insurance services designed for your peace of mind
        </h2>
      </div>

      {/* Carousel */}
      <div
        className="max-w-6xl mx-auto overflow-hidden relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Track */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 33.333}%)`,
          }}
        >
          {servicesData.map((service, index) => {
            const isActive =
              index >= activeIndex && index < activeIndex + visibleCards;

            return (
              <div
                key={service.id}
                className="min-w-full md:min-w-[33.333%] px-4"
              >
                <div
                  onClick={() => setActiveIndex(index)}
                  className={`bg-white rounded-2xl p-10 flex flex-col items-center text-center border transition-all duration-500 ease-out cursor-pointer relative group h-full
                  
                  ${
                    isActive
                      ? "border-transparent shadow-2xl shadow-slate-200/70 -translate-y-3"
                      : "border-slate-100 shadow-sm hover:border-slate-200 hover:-translate-y-1"
                  }
                  `}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-full bg-[#ffb774]/20 flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 font-light leading-relaxed mb-8 max-w-[240px]">
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-[1px] bg-slate-100 mb-6" />

                  {/* Button */}
                  <button className="flex items-center gap-2 font-bold text-xs text-slate-900 tracking-wide group/btn mt-auto">
                    <span className="group-hover/btn:underline transition-all">
                      Read More
                    </span>

                    <div className="w-6 h-6 rounded-full bg-[#ffb774] flex items-center justify-center text-slate-900 transform group-hover/btn:rotate-45 transition-transform duration-300">
                      <ArrowUpRight className="w-3 h-3" strokeWidth={2.5} />
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots */}
      <div className="flex justify-center items-center gap-2.5 mt-10">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-300
              ${
                index === activeIndex
                  ? "w-8 bg-slate-900"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }
            `}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center gap-4 text-center border-t border-slate-100 pt-8">
        <button className="flex items-center bg-[#ffb774] text-slate-900 font-semibold pl-6 pr-2 py-2 rounded-full transition-all duration-300 hover:bg-[#ffa751] hover:shadow-2xl hover:shadow-[#ffb774]/30 hover:-translate-y-0.5 group">
          <a
            href="#services"
            className="text-[#fff] font-bold hover:text-slate-900 transition-colors pr-2"
          >
            View All Services
          </a>

          <div className="bg-slate-900 text-white rounded-full p-2 transform group-hover:rotate-45 transition-transform duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default AboutServicesSection;
