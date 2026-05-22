import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionItem {
  id: number;
  numberPrefix: string;
  title: string;
  content: string;
}

const HomeCoreFeatures: React.FC = () => {
  // Manage active state index for the interactive accordion segment
  const [openIndex, setOpenIndex] = useState<number>(1);

  const accordionData: AccordionItem[] = [
    {
      id: 1,
      numberPrefix: "1.",
      title: "Transparent Architecture & Clean Code",
      content:
        "We build with modular, fully documented design patterns. Your teams maintain complete visibility into codebase logic, API integrations, and deployment configurations without hidden technical debt.",
    },
    {
      id: 2,
      numberPrefix: "2.",
      title: "Rapid Deployment & Smooth CI/CD",
      content:
        "Our streamlined DevOps pipelines automate artifact builds and optimization processes instantly, reducing product release cycles from weeks to minutes with zero-downtime rollouts.",
    },
    {
      id: 3,
      numberPrefix: "3.",
      title: "Enterprise Security & High Availability",
      content:
        "Backstopped by continuous vulnerability scanning, end-to-end encryption protocols, and isolated cloud infrastructures ensuring your business operations stay strictly secure and highly resilient.",
    },
  ];

  const handleToggle = (id: number) => {
    setOpenIndex(openIndex === id ? 0 : id);
  };

  return (
    <section className="w-full bg-[#0d2315] py-16 sm:py-24 lg:py-32 text-white relative overflow-hidden font-sans">
      {/* Subtle background texture lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay bg-[linear-gradient(45deg,#fff_25%,transparent_25%,transparent_75%,#fff_75%,#fff),linear-gradient(45deg,#fff_25%,transparent_25%,transparent_75%,#fff_75%,#fff)] [background-size:30px_30px] [background-position:0_0,15px_15px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* ================= LEFT COLUMN: HERO VISUAL PANEL CARD ================= */}
          <div className="lg:col-span-5 w-full bg-[#163520] rounded-[32px] p-6 sm:p-8 border border-white/10 relative overflow-hidden shadow-2xl flex flex-col justify-between h-[520px] sm:h-[580px] lg:h-[550px] xl:h-[580px]">
            {/* Top Text Meta Array */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
                Dedicated Tech Consultant Support
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-sm">
                Our seasoned systems architects are always on standby to help you evaluate architectures and optimize tech stacks.
              </p>

              {/* Feature Pill Tags Grid Layout */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  "Agile Development",
                  "Cloud Migration",
                  "DevOps Automation",
                  "AI Integration",
                  "SLA Management",
                ].map((tag, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 border border-white/5 backdrop-blur-[4px] rounded-xl px-3 py-2.5 text-center text-xs font-bold tracking-wide text-gray-200 shadow-sm whitespace-nowrap overflow-hidden text-ellipsis"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Graphic Array */}
            <div className="relative w-full h-[260px] sm:h-[280px] mt-auto">
              <div className="absolute bottom-0 left-0 w-3/5 h-[90%] pointer-events-none select-none">
                <img
                  src="Home/feature-support.png"
                  alt="IT Infrastructure core capabilities diagram"
                  className="w-full h-full object-contain object-left"
                />
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: INTERACTIVE ACCORDION & METRICS ================= */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Top Section Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-semibold tracking-wide text-gray-200 shadow-sm">
              <span className="text-[#FFB057] text-sm">✲</span>
              Our Core Architecture
            </div>

            {/* Core Segment Header Title */}
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black leading-[1.15] tracking-tight max-w-2xl">
              Key features that set our software development apart
              <span className="text-[#FFB057]">.</span>
            </h2>

            {/* Paragraph Subtext Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium max-w-xl">
              Discover the engineering principles that make our digital solutions reliable, scalable, and perfectly engineered for your enterprise workflows.
            </p>

            {/* Core Interactive Accordion Loop Stack */}
            <div className="border-t border-white/10 divide-y divide-white/10 max-w-2xl">
              {accordionData.map((item) => {
                const isOpen = openIndex === item.id;
                return (
                  <div
                    key={item.id}
                    className="py-4 sm:py-5 transition-all duration-300"
                  >
                    {/* Header Row Click Event Trigger */}
                    <button
                      onClick={() => handleToggle(item.id)}
                      className="w-full flex items-center justify-between text-left group pt-1"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 text-base sm:text-lg md:text-xl font-bold text-white transition-colors group-hover:text-gray-300">
                        <span className="text-[#FFB057]">
                          {item.numberPrefix}
                        </span>
                        {item.title}
                      </div>

                      {/* Interactive Native State Indicator Symbol */}
                      <div className="w-6 h-6 rounded-full bg-[#FFB057] flex items-center justify-center text-black shadow-sm shrink-0">
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5 stroke-[3.5]" />
                        ) : (
                          <Plus className="w-3.5 h-3.5 stroke-[3.5]" />
                        )}
                      </div>
                    </button>

                    {/* Smooth Expandable Content Compartment Block */}
                    <div
                      className={`grid transition-all duration-300 ease-in-out overflow-hidden text-gray-400 text-xs sm:text-sm leading-relaxed font-medium ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 mt-3 pl-6 sm:pl-7"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">{item.content}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Section Statistical Highlights Panel Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 max-w-2xl border-t border-white/10">
              {/* Metric 1 */}
              <div className="space-y-1">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  99.99%
                </span>
                <p className="text-xs sm:text-sm text-gray-400 font-semibold leading-relaxed">
                  System uptime guaranteed via multi-region cloud clustering and failover logic.
                </p>
              </div>
              {/* Metric 2 */}
              <div className="space-y-1 sm:pl-6 sm:border-l border-white/10">
                <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  150+
                </span>
                <p className="text-xs sm:text-sm text-gray-400 font-semibold leading-relaxed">
                  Successful enterprise product engineering sprints delivered worldwide.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCoreFeatures;