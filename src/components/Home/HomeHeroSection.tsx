import React from "react";
import DynamicButton from "../ReusableComponents/DynamicButton";
import logo from "../../../public/Home/Logos/logo.webp";
import logo1 from "../../../public/Home/Logos/logo1.webp";
import logo2 from "../../../public/Home/Logos/logo2.webp";
import logo3 from "../../../public/Home/Logos/logo3.webp";
import logo4 from "../../../public/Home/Logos/logo4.webp";
import logo5 from "../../../public/Home/Logos/logo5.webp";
import logo6 from "../../../public/Home/Logos/logo6.webp";

const HomeHeroSection: React.FC = () => {
  // Logos Array
  const logos = [
    { src: `${logo}`, alt: "Carlsberg" },
    { src: `${logo1}`, alt: "Disneyland Paris" },
    { src: `${logo2}`, alt: "ITespresso" },
    { src: `${logo3}`, alt: "Fujifilm" },
    { src: `${logo4}`, alt: "ArcSight" },
    { src: `${logo5}`, alt: "Hisense" },
    { src: `${logo6}`, alt: "Natura" },
  ];

  return (
    <>
      <section
        className="relative min-h-screen bg-cover bg-center flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('Home/hero-bg-image.jpg')",
        }}
      >
        {/* ================= BACKGROUND OVERLAYS ================= */}

        {/* Dark Base Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Green Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#071d11] lg:to-[#092214]"></div>

        {/* Top Gradient for Navbar Visibility */}
        <div className="absolute top-0 left-0 w-full h-[180px] z-[1] pointer-events-none overflow-hidden">
          {/* Main Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b120f]/90 via-[#0b120f]/50 to-transparent" />

          {/* Left Glow */}
          <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-[#FFB057]/10 blur-3xl rounded-full" />

          {/* Right Glow */}
          <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] bg-[#FFB057]/10 blur-3xl rounded-full" />
        </div>

        {/* ================= HERO WRAPPER ================= */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-36 sm:pt-40 lg:pt-32 pb-12 flex flex-col justify-between min-h-screen">
          {/* ================= HERO GRID ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-end my-auto">
            {/* LEFT CONTENT */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 shadow-sm">
                <span className="text-[#FFB057] text-sm">✲</span>

                <span className="text-white text-xs sm:text-sm font-semibold tracking-wide">
                  Information Technology Solutions
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight">
                Nextgen Advanced
                <br className="hidden sm:inline" />
                Solutions
              </h1>
            </div>

            {/* RIGHT CONTENT */}
            <div className="lg:col-span-5 space-y-6 lg:pl-4">
              <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl font-medium">
                Comprehensive IT Solutions for Today's
                <br />
                Challenges. Business Online with Nas Infotech
                <br />
                Pvt. Ltd.'s Expertise.
              </p>

              <div className="pt-2">
                <DynamicButton
                  title={"Get Free Quote"}
                  link={"http://localhost:5173/contact"}
                />
              </div>
            </div>
          </div>

          {/* ================= CLIENT SECTION ================= */}
          <div className="border-t border-white/10 pt-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center">
              {/* LEFT LABEL */}
              <div className="lg:col-span-3 border-l-2 border-[#FFB057] pl-4 z-10 bg-[#071d11]/80 backdrop-blur-sm lg:bg-transparent py-1">
                <h3 className="text-white text-base sm:text-lg font-bold leading-snug tracking-wide">
                  Our Clients
                </h3>

                <p className="text-white/70 text-sm">
                  Build Elevated Superior Enhanced Improved
                </p>
              </div>

              {/* ================= INFINITE MARQUEE ================= */}
              <div className="lg:col-span-9 relative w-full overflow-hidden mask-gradient-edges">
                {/* Left Fade */}
                <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#071d11] to-transparent z-10 pointer-events-none"></div>

                {/* Right Fade */}
                <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#071d11] to-transparent z-10 pointer-events-none"></div>

                {/* Marquee Track */}
                <div className="flex items-center w-max gap-6 animate-scroll hover:[animation-play-state:paused] py-2">
                  {/* Set 1 */}
                  {logos.map((logo, idx) => (
                    <div
                      key={`set1-${idx}`}
                      className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/5 w-[160px] sm:w-[200px] h-[70px] sm:h-[85px] shrink-0 hover:bg-white/15 transition-all duration-300 cursor-pointer"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-10 sm:h-12 w-full object-contain filter invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}

                  {/* Duplicate Set 2 (Uncommented to fix infinite carousel loop mechanics) */}
                  {logos.map((logo, idx) => (
                    <div
                      key={`set2-${idx}`}
                      className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/5 w-[160px] sm:w-[200px] h-[70px] sm:h-[85px] shrink-0 hover:bg-white/15 transition-all duration-300 cursor-pointer"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-10 sm:h-12 w-full object-contain filter invert opacity-80 hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CUSTOM STYLES ================= */}
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(calc(-50% - 12px));
          }
        }

        .animate-scroll {
          animation: scroll 28s linear infinite;
          width: max-content;
        }

        .mask-gradient-edges {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );

          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 8%,
            black 92%,
            transparent 100%
          );
        }
      `}</style>
    </>
  );
};

export default HomeHeroSection;