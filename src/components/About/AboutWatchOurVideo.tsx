import { Play, Phone, ArrowUpRight } from "lucide-react";

const AboutWatchOurVideo = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center text-white px-6 md:px-12 py-20 overflow-hidden group/section">
      {/* Background Image Overlay with subtle hover zoom */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 scale-100 group-hover/section:scale-105 transition-transform duration-1000 ease-out"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1606857521015-7f9fcf423740?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />

      {/* Greenish Tint / Dark Overlay */}
      <div className="absolute inset-0 bg-emerald-950/80 backdrop-blur-[2px] z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-4xl w-full flex flex-col items-center text-center">
        {/* Watch Video Section (Fade In & Ripple Effect) */}
        <div className="flex flex-col items-center gap-3 mb-6 group cursor-pointer animate-fade-in-up [animation-delay:200ms]">
          <div className="relative w-16 h-16 bg-[#ffb774] rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-[#ffb774]/50">
            {/* Ambient Pulse Rings */}
            <span className="absolute inset-0 rounded-full bg-[#ffb774]/40 animate-ping opacity-75 pointer-events-none" />
            <Play className="w-6 h-6 text-slate-900 fill-slate-900 ml-1 transition-transform group-hover:scale-90" />
          </div>
          <span className="text-sm font-semibold tracking-wider uppercase transition-colors group-hover:text-[#ffb774]">
            Watch Our Video
          </span>
        </div>

        {/* Main Heading (Fade In Up) */}
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4 leading-tight animate-fade-in-up [animation-delay:400ms]">
          Watch our journey and story
        </h1>

        {/* Subtitle description (Fade In Up) */}
        <p className="text-base md:text-lg text-slate-200 max-w-2xl font-light mb-12 leading-relaxed animate-fade-in-up [animation-delay:600ms]">
          Discover how our journey began and how we have grown into a trusted
          insurance provider dedicated to protecting lives and securing futures.
        </p>

        {/* CTA Elements (Fade In Up) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 w-full animate-fade-in-up [animation-delay:800ms]">
          {/* Primary Button */}
          <button className="flex items-center bg-[#ffb774] text-slate-900 font-semibold pl-6 pr-2 py-2 rounded-full transition-all duration-300 hover:bg-[#ffa751] hover:shadow-2xl hover:shadow-[#ffb774]/30 hover:-translate-y-0.5 group">
            <span className="mr-4">Get Started Today</span>
            <div className="bg-slate-900 text-white rounded-full p-2 transform group-hover:rotate-45 transition-transform duration-300">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </button>

          {/* Phone Quick Contact */}
          <div className="flex items-center gap-4 text-left group/phone cursor-pointer">
            <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center transition-all duration-300 group-hover/phone:border-[#ffb774] group-hover/phone:bg-[#ffb774]/10 group-hover/phone:rotate-12">
              <Phone className="w-5 h-5 text-white fill-white/10 transition-colors group-hover/phone:text-[#ffb774]" />
            </div>
            <div>
              <p className="text-xs text-slate-300">Phone Number</p>
              <a
                href="tel:+123456789"
                className="text-lg font-bold tracking-wide transition-colors duration-300 group-hover/phone:text-[#ffb774]"
              >
                Call: +(123) 456 789
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Small slider indicator dot */}
      <div className="absolute right-12 bottom-1/3 z-20 flex flex-col gap-2 hidden md:flex animate-pulse">
        <div className="w-2 h-2 rounded-full bg-[#ffb774]" />
      </div>
    </section>
  );
};

export default AboutWatchOurVideo;
