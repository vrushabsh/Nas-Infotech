import React from "react";
import { ArrowUpRight, Eye, Target, ShieldCheck } from "lucide-react";

interface ApproachCard {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl: string;
}

const AboutCompany: React.FC = () => {
  const cards: ApproachCard[] = [
    {
      id: 1,
      title: "Our Mission",
      description:
        "Our mission is to empower businesses with robust, scalable and secure IT solutions that enhance efficiency, foster innovation and drive growth. We are committed to delivering excellence through our comprehensive range of services, tailored to meet the unique needs of each client.",
      icon: <Target className="w-5 h-5 text-black" />,
      imageUrl:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 2,
      title: "Our Vision",
      description:
        "We envision a world where businesses of all sizes can harness the power of technology to achieve their full potential. Our goal is to be the trusted partner for companies seeking to innovate and transform their operations through cutting-edge software solutions.",
      icon: <Eye className="w-5 h-5 text-black" />,
      imageUrl:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=600",
    },
    {
      id: 3,
      title: "Our Values",
      description:
        "At our company, we uphold a commitment to honesty, integrity and ethics in everything we do. We foster innovation through teamwork, valuing diverse perspectives and treating everyone with respect. These core values guide our actions and inspire us to create a positive impact in our work and communities.",
      icon: <ShieldCheck className="w-5 h-5 text-black" />,
      imageUrl:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <section className="w-full py-16 sm:py-24 lg:py-32 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= TOP HEADER ROW ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-12 sm:mb-16 lg:mb-20">
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 text-xs sm:text-sm font-semibold tracking-wide text-gray-800 shadow-sm">
              <span className="text-[#113217] text-sm">✲</span>
              Our Approach
            </div>

            {/* Main Header Title */}
            <h2 className="text-[#0a1118] text-3xl sm:text-4xl md:text-4xl font-bold leading-[1.15] tracking-tight">
              Putting your <span className="text-[#FFB057]">Needs </span>
              at the <br /> <span className="text-[#FFB057]">Center </span>
              of every <span className="text-[#FFB057]">Policy</span>
              <span className="text-[#FFB057]">.</span>
            </h2>
          </div>

          {/* Right Action & Subtext Block */}
          <div className="lg:col-span-5 space-y-6 lg:pl-4">
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium">
              Your protection isn't one-size-fits-all. That's why we take the
              time to listen, assess your needs, and design custom corporate
              solutions.
            </p>

            <div className="pt-2">
              <button className="group inline-flex items-center bg-[#FFB057] hover:bg-[#e09c4d] text-black font-bold pl-6 pr-2 py-2 rounded-full text-sm tracking-wide transition-all duration-300 shadow-sm">
                Contact Us
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center ml-4 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* ================= THREE-COLUMN CONTENT CARDS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-[10px] p-6 sm:p-4 shadow-sm border border-gray-100/60 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px]"
            >
              {/* Card Upper Section */}
              <div className="space-y-5 mb-8">
                {/* Circular Icon Container */}
                <div className="w-12 h-12 rounded-full bg-[#FFB057] flex items-center justify-center shrink-0 shadow-sm relative">
                  {card.icon}
                  {/* Decorative dot alignment tracking mockup style */}
                  {card.id === 3 && (
                    <span className="absolute -top-1 -right-12 w-2 h-2 bg-[#FFB057] rounded-full 
                    hidden lg:block" />
                  )}
                </div>

                <h3 className="text-[#0a1118] text-xl sm:text-2xl font-semibold tracking-tight">
                  {card.title}
                </h3>

                <p className="text-gray-500 text-[13px] leading-relaxed ">
                  {card.description}
                </p>
              </div>

              {/* Card Footer Embedded Artwork Area */}
              <div className="w-full aspect-[16/11] rounded-[10px] overflow-hidden mt-auto shadow-inner">
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all 
                  duration-500 ease-out"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;
