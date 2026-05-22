import React from "react";
import { ArrowUpRight } from "lucide-react";

const HomeAboutUs: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 xl:gap-24 items-center">
          {/* ================= LEFT CONTENT: PRECISE OVERLAPPING IMAGE GRID ================= */}
          {/* Fixed aspect container ensuring mobile stacks cleanly while desktop scales dynamically */}
          <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[550px] md:h-[600px] lg:h-[580px] xl:h-[650px]">
            {/* Background decorative dotted wavy path arrow */}
            <div className="absolute top-55 left-30 w-32 h-32 hidden xl:block pointer-events-none z-0">
              <img
                src="https://demo.awaikenthemes.com/covar/wp-content/uploads/2026/03/about-us-arrow.svg"
                alt="Smiling professional executive"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Top-Right / Main Image Container */}
            <div className="absolute top-0 right-0 w-[70%] sm:w-[60%] h-[60%] rounded-[24px] overflow-hidden shadow-lg z-10">
              <img
                src="https://demo.awaikenthemes.com/covar/wp-content/uploads/2026/03/about-us-image-2.jpg"
                alt="Smiling professional executive"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bottom-Left Overlapping Image Container */}
            <div className="absolute bottom-0 left-0 w-[65%] sm:w-[55%] h-[50%] rounded-[24px] overflow-hidden shadow-2xl border-8 border-white z-20">
              <img
                src="https://demo.awaikenthemes.com/covar/wp-content/uploads/2026/03/about-us-image-1.jpg"
                alt="Team advisory consultation discussion"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Contact Us Circle Badge - Intersects both images perfectly */}
            <div className="absolute right-[18%] sm:right-[25%] bottom-[12%] sm:bottom-[15%] z-30 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-[#FFB057] flex items-center justify-center shadow-xl">
              {/* Circular Text Loop Track */}
              <div className="absolute inset-0 w-full h-full flex items-center justify-center animate-[spin_12s_linear_infinite]">
                <svg className="w-full h-full p-1.5" viewBox="0 0 100 100">
                  <path
                    id="circlePath"
                    d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0"
                    fill="none"
                  />
                  <text className="text-[9.5px] font-black uppercase tracking-[3px] fill-black">
                    <textPath href="#circlePath" startOffset="0%">
                      • Contact Us • Contact Us
                    </textPath>
                  </text>
                </svg>
              </div>
              {/* Center Abstract Core Symbol */}
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#0a2113] flex items-center justify-center text-[#FFB057]">
                <div className="grid grid-cols-2 gap-[2px] rotate-45 scale-75 sm:scale-90">
                  <span className="w-1.5 h-1.5 rounded-sm border-2 border-[#FFB057]"></span>
                  <span className="w-1.5 h-1.5 rounded-sm border-2 border-[#FFB057]"></span>
                  <span className="w-1.5 h-1.5 rounded-sm border-2 border-[#FFB057]"></span>
                  <span className="w-1.5 h-1.5 rounded-sm border-2 border-[#FFB057]"></span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT CONTENT: DETAILED TEXT WRAPPER ================= */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            {/* Header Mini Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs sm:text-sm font-semibold tracking-wide text-gray-800 shadow-sm">
              <span className="text-[#113217] text-sm">✲</span>
              About Us
            </div>

            {/* Main Header Title */}
            <h2 className="text-[#0a1118] text-3xl sm:text-4xl md:text-4xl font-bold leading-[1.15] tracking-tight">
              Explore our <span className="text-[#FFB057]">Legacy </span>
              of <br /> <span className="text-[#FFB057]">Innovation </span>
              and <span className="text-[#FFB057]">Excellence </span>
              <span className="text-[#FFB057]">.</span>
            </h2>

            {/* Paragraph Body */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
              We are committed to turning your IT challenges into success
              stories. Our expert team provides innovative and reliable IT
              solutions tailored to your business needs. With a strong focus on
              customer satisfaction, we offer unparalleled support and advanced
              technology to help your business flourish in the digital age.
            </p>

            {/* Customized Blockquote Box */}
            <div className="relative bg-gray-50/80 rounded-2xl p-6 sm:p-8 border-l-[4px] border-[#113217] shadow-sm">
              <p className="text-[#0a1118] font-bold text-sm sm:text-base leading-relaxed italic">
                &ldquo; Collaborate with us and discover the distinction. that
                expertise and commitment can make. &rdquo;
              </p>
            </div>

            {/* Statistics Layout Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 pt-2 items-center">
              {/* Stat Card 1 */}
              <div className="space-y-1 border-b sm:border-b-0 sm:border-r border-gray-200 pb-4 sm:pb-0 sm:pr-4">
                <span className="text-3xl sm:text-4xl font-bold text-[#0a1118] tracking-tight">
                  4+
                </span>
                <p className="text-xs sm:text-[12px] text-gray-500 font-semibold leading-snug">
                  Years in Business
                </p>
              </div>

              {/* Stat Card 2 */}

              <div className="space-y-1 border-b sm:border-b-0 sm:border-r border-gray-200 pb-4 sm:pb-0 sm:pr-4">
                <span className="text-3xl sm:text-4xl font-bold text-[#0a1118] tracking-tight">
                  30+
                </span>
                <p className="text-xs sm:text-[12px] text-gray-500 font-semibold leading-snug">
                  Employees
                </p>
              </div>

              <div className="space-y-1 sm:pr-2">
                <span className="text-3xl sm:text-4xl font-bold text-[#0a1118] tracking-tight">
                  12+
                </span>
                <p className="text-xs sm:text-[12px] text-gray-500 leading-snug">
                  Completed Projects
                </p>
              </div>

              {/* Embedded Mini Image */}
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=300"
                  alt="Business consultation team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-2">
              <button className="group flex items-center bg-[#FFB057] hover:bg-[#e09c4d] text-black font-extrabold pl-6 pr-2 py-2 rounded-full text-sm tracking-wide transition-all duration-300 shadow-sm">
                More About Us
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center ml-4 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutUs;
