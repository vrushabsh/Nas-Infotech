import React from "react";
import { ArrowUpRight } from "lucide-react";

const AboutUs: React.FC = () => {
    return (
        <section className="w-full bg-white py-16 sm:py-24 lg:py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 xl:gap-24 items-center">

                    {/* ================= LEFT CONTENT: PRECISE OVERLAPPING IMAGE GRID ================= */}
                    {/* Fixed aspect container ensuring mobile stacks cleanly while desktop scales dynamically */}
                    <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[550px] md:h-[600px] lg:h-[580px] xl:h-[650px]">

                        {/* Background decorative dotted wavy path arrow */}
                        <div className="absolute top-16 -left-8 w-32 h-32 hidden xl:block opacity-70 pointer-events-none z-0">
                            <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="text-emerald-900">
                                <path d="M20,100 Q30,40 75,65 T105,15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="5 5" fill="none" />
                                <polygon points="105,15 96,18 102,25" fill="currentColor" />
                            </svg>
                        </div>

                        {/* Top-Right / Main Image Container */}
                        <div className="absolute top-0 right-0 w-[70%] sm:w-[65%] h-[80%] rounded-[24px] overflow-hidden shadow-lg z-10">
                            <img
                                src="/About/aboutus-1.jpg"
                                alt="Smiling professional executive"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Bottom-Left Overlapping Image Container */}
                        <div className="absolute bottom-0 left-0 w-[65%] sm:w-[58%] h-[68%] rounded-[24px] overflow-hidden shadow-2xl border-8 border-white z-20">
                            <img
                                src="/About/aboutus-2.jpg"
                                alt="Team advisory consultation discussion"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Contact Us Circle Badge - Intersects both images perfectly */}
                        <div className="absolute right-[18%] sm:right-[25%] bottom-[12%] sm:bottom-[15%] z-30 w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-[#FFB057] flex items-center justify-center shadow-xl">
                            {/* Circular Text Loop Track */}
                            <div className="absolute inset-0 w-full h-full flex items-center justify-center animate-[spin_12s_linear_infinite]">
                                <svg className="w-full h-full p-1.5" viewBox="0 0 100 100">
                                    <path id="circlePath" d="M 50,50 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" fill="none" />
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
                            <span className="text-[#113217] text-sm">✿</span>
                            About Us
                        </div>

                        {/* Main Header Title */}
                        <h2 className="text-[#0a1118] text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.15] tracking-tight">
                            Reinventing the world <br />
                            for good,that's <br />
                            what technology is for.<span className="text-[#FFB057]">.</span>
                        </h2>

                        {/* Paragraph Body */}
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-medium">
                            We provide top-notch IT services to help your business thrive in the
                            digital age. Located in Pune, we specialize in delivering customized
                            software solutions and a range of IT services tailored to meet your
                            unique business requirements.
                        </p>

                        {/* Customized Blockquote Box */}
                        <div className="relative bg-gray-50/80 rounded-2xl p-6 sm:p-8 border-l-[4px] border-[#113217] shadow-sm">
                            <p className="text-[#0a1118] font-bold text-sm sm:text-base leading-relaxed italic">
                                We specialize in delivering innovative technology solutions, 
                                including Software Development, Cloud Computing, Big Data 
                                Analytics, AI and more. </p>
                        </div>

                        {/* Statistics Layout Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 items-center">

                            {/* Stat Card 1 */}
                            <div className="space-y-1 border-b sm:border-b-0 sm:border-r border-gray-200 pb-4 sm:pb-0 sm:pr-4">
                                <span className="text-3xl sm:text-4xl font-extrabold text-[#0a1118] tracking-tight">80+</span>
                                <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-snug">
                                    Industry Awards & Recognitions
                                </p>
                            </div>

                            {/* Stat Card 2 */}
                            <div className="space-y-1 sm:pr-2">
                                <span className="text-3xl sm:text-4xl font-extrabold text-[#0a1118] tracking-tight">1M+</span>
                                <p className="text-xs sm:text-sm text-gray-500 font-semibold leading-snug">
                                    Customer Interaction Handled
                                </p>
                            </div>

                            {/* Embedded Mini Image */}
                            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
                                <img
                                    src="/About/aboutus-3.jpg"
                                    alt="Business consultation team collaboration"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center gap-2 pt-2">
                            <button className="bg-[#FFB057] hover:bg-[#e09c4d] text-black font-bold px-6 sm:px-8 py-3.5 rounded-full text-xs sm:text-sm tracking-wide shadow-md transition-colors duration-300">
                                More About Us
                            </button>
                            <button
                                aria-label="Read company profile details"
                                className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#FFB057] hover:bg-[#e09c4d] text-black flex items-center justify-center shadow-md transition-colors duration-300 shrink-0"
                            >
                                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;
