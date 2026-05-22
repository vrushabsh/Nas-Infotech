import React, { useState } from "react";
import { Plus, Minus, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export default function HomeFAQ() {
  // Set default open item to 4 as requested
  const [openFaq, setOpenFaq] = useState<number | null>(4);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: "1. How do you assess our legacy architecture for migration?",
      answer: "We evaluate your current technical debt, database structures, security protocols, and scalability barriers. Our engineering architects then design a step-by-step phased migration matrix tailored to your budget."
    },
    {
      id: 2,
      question: "2. What custom software development stacks do you support?",
      answer: "We specialize in enterprise systems using modern technologies including cloud-native Node.js/Go frameworks, robust React ecosystems, cloud infra toolings (AWS/GCP), and specialized Salesforce, Big Data, or AI/ML pipelines."
    },
    {
      id: 3,
      question: "3. Can we scale or modify system requirements mid-sprint?",
      answer: "Yes, our development workflows are grounded in strict Agile principles. You can reprioritize project backlogs, adjust user stories, or safely refactor architecture roadmaps directly via our sprint review touchpoints."
    },
    {
      id: 4,
      question: "4. Do you engineer custom software for enterprise scale businesses?",
      answer: "Absolutely. We engineer high-availability, high-throughput digital systems equipped with multi-region failover configurations and automated CI/CD pipelines to ensure continuous performance under heavy enterprise data loads."
    },
    {
      id: 5,
      question: "5. What is your typical deployment turnaround and SLA response time?",
      answer: "Our automated cloud engineering pipelines allow code modifications to deploy safely in minutes. For mission-critical support, we back our systems with 24/7/365 monitoring and guaranteed response times under strict SLAs."
    }
  ];

  return (
    <section className="py-20 bg-white font-sans text-[#0A1B10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* ================= LEFT COLUMN: CONTENT & CTA ================= */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-8">
          {/* Badge Label */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0D2A17]/5 text-[#0D2A17] text-xs font-bold tracking-wide border border-[#0D2A17]/10">
            <span className="text-[#FFB057] text-base leading-none">✲</span>
            Frequently Asked Questions
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-black tracking-tight leading-[1.1] text-[#0A1B10]">
            Common questions about our tech solutions & services
          </h2>

          {/* Description Paragraph */}
          <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed max-w-md">
            We have answered the most common architectural and workflow questions to make onboarding our engineering teams simple and transparent.
          </p>

          {/* Action Button */}
          <div className="pt-2">
            <button className="group flex items-center bg-[#FFB057] hover:bg-[#e09c4d] text-black font-bold pl-6 pr-2 py-2 rounded-full text-sm tracking-wide transition-all duration-300 shadow-sm">
              View All FAQ's
              <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center ml-4 group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </button>
          </div>

          {/* Divider Line */}
          <div className="w-full h-[1px] bg-slate-100 my-6"></div>

          {/* Footnote Checklist Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-bold text-[#0A1B10] leading-snug">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0D2A17] shrink-0 mt-0.5" />
              <span>Our dedicated DevOps team is always ready to monitor infrastructure</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0D2A17] shrink-0 mt-0.5" />
              <span>We abstract away complex cloud logic so you can focus on core business</span>
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: INTERACTIVE ACCORDION ELEMENTS ================= */}
        <div className="lg:col-span-7 space-y-3.5">
          {faqs.map((faq) => {
            const isCurrent = openFaq === faq.id;
            return (
              <div 
                key={faq.id} 
                className={`rounded-[20px] transition-all duration-300 ${
                  isCurrent 
                    ? "bg-[#0D2A17] text-white shadow-xl shadow-[#0D2A17]/5" 
                    : "bg-[#F7F6F3] text-[#0A1B10] hover:bg-[#efeee9]"
                }`}
              >
                {/* Header Toggle Click Target */}
                <button
                  onClick={() => setOpenFaq(isCurrent ? null : faq.id)}
                  className="w-full flex items-center justify-between text-left p-5 sm:p-6 font-bold text-sm sm:text-base md:text-[17px] tracking-tight focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center 
                  shrink-0 transition-transform duration-200 ${
                    isCurrent ? "text-[#FFB057]" : "text-black"
                  }`}>
                    {isCurrent ? <Minus className="w-4 h-4 stroke-[3]" /> : <Plus className="w-4 h-4 stroke-[3]" />}
                  </div>
                </button>

                {/* Answer Box Panel (Collapsible content container) */}
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isCurrent ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm font-medium leading-relaxed opacity-85 border-t border-white/10 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}