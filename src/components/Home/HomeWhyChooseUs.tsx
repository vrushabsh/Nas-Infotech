import React from "react";
import {
  ArrowUpRight,
  Check,
  ShieldCheck,
  Zap,
  HeartHandshake,
  Sliders,
} from "lucide-react";

interface FeatureItem {
  id: number;
  title: string;
  icon: React.ReactNode;
}

const HomeWhyChooseUs: React.FC = () => {
  // Features array matching the grid list items in the mockup
  const features: FeatureItem[] = [
    {
      id: 1,
      title: "Expertise",
      icon: <ShieldCheck className="w-5 h-5 text-black" />,
    },
    {
      id: 2,
      title: "Innovation",
      icon: <Zap className="w-5 h-5 text-black" />,
    },
    {
      id: 3,
      title: "Quality",
      icon: <HeartHandshake className="w-5 h-5 text-black" />,
    },
    {
      id: 4,
      title: "Customization",
      icon: <Sliders className="w-5 h-5 text-black" />,
    },
  ];

  return (
    <section className="w-full bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-24 items-center">
          {/* ================= LEFT CONTENT: TEXT & FEATURES LIST ================= */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            {/* Top Info Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs sm:text-sm font-semibold tracking-wide text-gray-800 shadow-sm">
              <span className="text-[#113217] text-sm">✲</span>
              Why Choose Us
            </div>

            <h2 className="text-[#0a1118] text-3xl sm:text-4xl md:text-4xl font-bold leading-[1.15] tracking-tight">
              What <span className="text-[#FFB057]">Sets </span>
              Us <br /> <span className="text-[#FFB057]">Apart </span>?
            </h2>

            {/* Description Subtext */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium">
              Select us for your IT needs, as we offer cutting-edge solutions, a
              team of highly skilled experts, dependable support and a
              commitment to customer satisfaction to drive your business to
              success.
            </p>

            {/* Minimal Inline Checkmarks */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm sm:text-base text-[#0a1118] font-bold">
                <span className="w-5 h-5 rounded-full bg-[#0a2113] flex items-center justify-center text-white shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium">
                  We offer innovative IT solutions, employ a team of highly
                  skilled experts.
                </p>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base text-[#0a1118] font-bold">
                <span className="w-5 h-5 rounded-full bg-[#0a2113] flex items-center justify-center text-white shrink-0">
                  <Check className="w-3 h-3 stroke-[3]" />
                </span>
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium">
                  Deliver dependable support and prioritize customer
                  satisfaction to help your business excel.
                </p>
              </div>
            </div>

            <hr className="border-gray-100 my-4" />

            {/* Core Feature Matrix Grid Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-y-6 gap-x-8 pt-2">
              {features.map((feature) => (
                <div key={feature.id} className="flex items-center gap-4">
                  {/* Circular Orange Rounded Graphic Icon Container */}
                  <div className="w-12 h-12 rounded-full bg-[#FFB057] flex items-center justify-center shrink-0 shadow-sm">
                    {feature.icon}
                  </div>
                  <span className="text-[#0a1118] text-sm sm:text-base font-bold leading-snug">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Segment Action Buttons */}
            <div className="pt-2">
              <button className="group flex items-center bg-[#FFB057] hover:bg-[#e09c4d] text-black font-bold pl-6 pr-2 py-2 rounded-full text-sm tracking-wide transition-all duration-300 shadow-sm">
                Contact Us
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center ml-4 group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>

          {/* ================= RIGHT CONTENT: LARGE COMPOSITE IMAGE LAYOUT ================= */}
          <div className="lg:col-span-6 relative w-full aspect-[1/1] sm:aspect-[4/4] lg:aspect-[5/5] xl:aspect-[1/1]">
            {/* Core Background Main Image Card */}
            <div className="w-full h-full rounded-[32px] overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
                alt="Advisors reviewing documentation contracts with client"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Absolute Floating Testimonial Overlay Box */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:left-6 sm:max-w-[340px] md:max-w-[380px] bg-white rounded-[24px] p-6 shadow-2xl border border-gray-100/50 transform transition-transform duration-300 hover:translate-y-[-4px] z-10">
              {/* Review/Quote Passage */}
              <p className="text-[#0a1118] font-bold text-sm sm:text-base leading-relaxed mb-6">
                &ldquo; I was looking for reliable business insurance and
                wasn&apos;t sure where to start. &rdquo;
              </p>

              {/* Separator Line */}
              <div className="w-full h-[1px] bg-gray-100 mb-4"></div>

              {/* Reviewer Meta Information Row */}
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150"
                  alt="Ronald Richards - CEO & Founder"
                  className="w-10 h-10 rounded-full object-cover border border-gray-200"
                />
                <div>
                  <h4 className="text-[#0a1118] text-sm sm:text-base font-extrabold leading-tight">
                    Ronald Richards
                  </h4>
                  <p className="text-gray-400 text-xs font-semibold">
                    CEO & Founder
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeWhyChooseUs;
