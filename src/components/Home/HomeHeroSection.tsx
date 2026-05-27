import React from "react";
import DynamicButton from "../ReusableComponents/DynamicButton";

const HomeHeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-screen bg-cover bg-center flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('Home/hero-bg-image.jpg')",
      }}
    >
      {/* Dark Base Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Green Gradient Overlay 
        Smoothly fades into a deep solid forest green at the very bottom to catch the logo panel
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#071d11] lg:to-[#092214]"></div>

      {/* Hero Central Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-36 sm:pt-40 lg:pt-32 pb-12 flex flex-col justify-between min-h-screen">
        {/* Main Grid: Adapts smoothly from single column to split screen layouts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-end my-auto">
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-sm">
              <span className="text-[#FFB057] text-sm">✲</span>
              <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                Information Technoloy Solutions
              </span>
            </div>

            {/* Dynamic Sized Header */}
            <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
              Nextgen Advanced <br className="hidden sm:inline" />
              Solutions
            </h1>
          </div>

          {/* Right Text Block & Buttons */}
          <div className="lg:col-span-5 space-y-6 lg:pl-4">
            <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-medium">
              Comprehensive IT Solutions for Today's
              <br /> Challenges. Business Online with Nas Infotech <br /> Pvt.
              Ltd.'s Expertise.
            </p>
            {/* Interactive CTA buttons combined closely */}
            <div className="pt-2">
              {/* <button className="group flex items-center bg-[#FFB057] hover:bg-[#e09c4d] text-black font-bold pl-6 pr-2 py-2 rounded-full text-sm tracking-wide transition-all duration-300 shadow-sm">
                Get Free Quote
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center ml-4 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button> */}
              <DynamicButton title={"Get Free Quote"} link={"http://localhost:5173/contact"}/>
            </div>
          </div>
        </div>

        {/* Bottom Brands / Trusted Partner Section */}
        <div className="border-t border-white/10 pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Metric / Heading Text */}
            <div className="lg:col-span-4 border-l-2 border-[#FFB057] pl-4">
              <h3 className="text-white text-lg sm:text-lg font-bold leading-snug tracking-wide max-w-xs">
                Build Elevated Superior Enhanced Improved
              </h3>
            </div>

            {/* Grid Array of Brand Logotypes */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center opacity-70">
              <div className="flex items-center gap-2 text-white text-base sm:text-lg md:text-xl font-bold tracking-wide hover:opacity-100 transition-opacity cursor-pointer">
                <span className="text-[#FFB057] text-lg">✦</span>
                Logoipsum
              </div>

              <div className="flex items-center gap-2 text-white text-base sm:text-lg md:text-xl font-bold tracking-wide hover:opacity-100 transition-opacity cursor-pointer">
                <span className="text-[#FFB057] text-lg">◓</span>
                Logoipsum
              </div>

              <div className="flex items-center gap-2 text-white text-base sm:text-lg md:text-xl font-bold tracking-wide hover:opacity-100 transition-opacity cursor-pointer">
                <span className="text-[#FFB057] text-lg">❖</span>
                Logoipsum
              </div>

              <div className="flex items-center gap-2 text-white text-base sm:text-lg md:text-xl font-bold tracking-wide hover:opacity-100 transition-opacity cursor-pointer">
                <span className="text-[#FFB057] text-lg">▰</span>
                Logoipsum
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
