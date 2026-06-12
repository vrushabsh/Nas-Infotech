import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ==========================================
// DATA INJECTION FROM INDUSTRIES JSON
// ==========================================
const industryData = {
  id: "banking",
  title: "Banking",
  heroTitle: "Enhance Your Banking Services With Advanced IT Solutions",
  heroSubtitle: "Empowering financial institutions with secure, scalable, and customer-centric digital transformation solutions.",
  overview: "Information Technology offers a multitude of benefits to banks by transforming operational processes, improving customer experiences, strengthening security, and enabling institutions to adapt to the rapidly evolving financial landscape. Our banking technology solutions help organizations modernize legacy systems, streamline workflows, and deliver seamless digital banking experiences.",
  benefits: [
    {
      title: "Digital Transformation",
      description: "Implement automation and modern banking platforms to streamline operations, reduce manual effort, and improve efficiency."
    },
    {
      title: "Data Analytics",
      description: "Leverage customer and transaction data to gain insights, personalize services, and improve business decision-making."
    },
    {
      title: "Cybersecurity",
      description: "Protect sensitive financial information with advanced security frameworks, monitoring, and compliance solutions."
    },
    {
      title: "Customer Experience",
      description: "Enhance customer engagement through AI-powered support, mobile banking, and personalized digital services."
    }
  ],
  technologies: [
    "React",
    "Node.js",
    "Java",
    "Spring Boot",
    "AWS",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "Azure",
    "Kafka"
  ],
  ctaTitle: "Ready To Modernize Your Banking Operations?",
  ctaDescription: "Partner with us to build secure, scalable, and customer-focused banking solutions that drive growth and innovation.",
  ctaButton: "Contact Us"
};

// ==========================================
// 1. BRAND MATCHED SERVICES & BENEFITS
// ==========================================
function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const icons = [
    <svg key="0" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5" /></svg>,
    <svg key="1" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
    <svg key="2" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
    <svg key="3" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-slate-50/60 rounded-[40px] my-6 border border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Sticky Content Hero Header */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-16 text-left">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100/80 px-4 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-xs uppercase font-extrabold tracking-wider text-orange-600">
              {industryData.title} Division
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            {industryData.heroTitle}
          </h2>
          <p className="text-slate-500 font-normal leading-relaxed text-base sm:text-lg">
            {industryData.heroSubtitle}
          </p>
          <div className="pt-4">
            <button className="inline-flex items-center gap-3 bg-slate-900 text-white hover:bg-orange-500 px-7 py-3.5 rounded-2xl font-semibold text-sm tracking-wide transition-all shadow-xl shadow-slate-900/10 hover:shadow-orange-500/20 group">
              Explore Enterprise Frameworks
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>

        {/* Right Feature Card Matrix Stream */}
        <div className="lg:col-span-7 flex flex-col gap-4 w-full">
          {industryData.benefits.map((benefit, index) => {
            const isHighlighted = activeIndex === index;
            return (
              <motion.div
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`p-8 rounded-3xl cursor-pointer border transition-all duration-300 relative overflow-hidden flex flex-col sm:flex-row gap-6 items-start ${
                  isHighlighted
                    ? "bg-gradient-to-br from-orange-500 to-amber-600 border-orange-600 text-white shadow-2xl shadow-orange-500/20"
                    : "bg-white border-slate-200/60 hover:border-orange-200 hover:bg-white shadow-sm"
                }`}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 150, damping: 25 }}
              >
                <div className={`p-4 rounded-2xl shadow-inner ${isHighlighted ? "bg-white/10 text-white" : "bg-orange-50 text-orange-500"}`}>
                  {icons[index % icons.length]}
                </div>
                <div className="space-y-2 text-left flex-1">
                  <h3 className={`text-xl font-bold tracking-tight ${isHighlighted ? "text-white" : "text-slate-900"}`}>
                    {benefit.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isHighlighted ? "text-orange-50/90" : "text-slate-500"}`}>
                    {benefit.description}
                  </p>
                </div>
                <div className={`text-xs font-mono font-bold tracking-widest ${isHighlighted ? "text-white/40" : "text-slate-300"} self-end sm:self-start`}>
                  //0{index + 1}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// ==========================================
// 2. ACCORDION WITH GRAPHIC CONTEXT
// ==========================================
function FAQSection() {
  const [openId, setOpenId] = useState<number | null>(0);

  const capabilities = [
    {
      id: 0,
      question: "How do our IT transformations help modernize legacy frameworks?",
      answer: "By migrating modular systems to decoupled microservices and fully integrated cloud infrastructures, we remove brittle dependencies to ensure absolute system availability and minimize runtime overhead during critical financial transaction spikes."
    },
    {
      id: 1,
      question: "What compliance guidelines dictate data tracking safety features?",
      answer: "We wrap our relational engines and analytical storage clusters in real-time advanced automated encryption pipelines, providing clear immutable operational logs that comply smoothly with strict banking governance audits."
    },
    {
      id: 2,
      question: "How is transaction data leveraged efficiently?",
      answer: "Telemetry data is cleanly aggregated into fast predictive ML logic loops. This reveals micro-trends in consumer transactional behaviors, feeding secure automated routing and personalized services seamlessly."
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Accordion Left Side */}
        <div className="lg:col-span-7 text-left space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold font-mono uppercase tracking-wider text-orange-600 bg-orange-50 px-3 py-1 rounded-md">
              Architecture Analysis
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
              System Overview & Scale
            </h2>
          </div>
          <p className="text-slate-500 text-base sm:text-lg leading-relaxed font-normal">
            {industryData.overview}
          </p>
          
          <div className="pt-4 space-y-3">
            {capabilities.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div 
                  key={item.id} 
                  className={`border transition-all duration-300 rounded-2xl px-6 ${
                    isOpen ? "bg-slate-50/70 border-slate-200" : "border-transparent hover:bg-slate-50/40"
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    className="w-full flex items-center justify-between py-5 text-left font-semibold text-slate-900 hover:text-orange-500 transition-colors text-base sm:text-lg gap-4"
                  >
                    <span>{item.question}</span>
                    <span className={`text-xl font-light transform transition-transform duration-200 ${isOpen ? "rotate-45 text-orange-500" : "text-slate-400"}`}>＋</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-normal pb-5 pr-4">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Graphic Mockup Canvas */}
        <div className="lg:col-span-5 flex justify-center relative w-full">
          <div className="w-full max-w-md aspect-square rounded-[3rem] bg-gradient-to-tr from-slate-950 to-orange-950 p-8 overflow-hidden relative shadow-2xl flex flex-col justify-between border border-slate-900">
            <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] bg-[size:24px_24px] opacity-5" />
            
            {/* Header elements inside card representation */}
            <div className="flex justify-between items-center relative z-10">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="text-[11px] font-mono font-bold text-orange-300/80 uppercase tracking-widest bg-orange-500/10 px-2.5 py-1 rounded-md border border-orange-500/20">
                Live Environment
              </div>
            </div>

            {/* Core Graphic Dashboard Representation */}
            <div className="my-auto space-y-4 relative z-10">
              <div className="h-12 bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-semibold text-slate-300">Transaction Gateway API</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">99.99%</span>
              </div>
              <div className="h-12 bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between backdrop-blur-md translate-x-4">
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-400" />
                  <span className="text-xs font-mono font-semibold text-slate-300">Kafka Ledger Stream</span>
                </div>
                <span className="text-[10px] font-mono text-orange-400 font-bold">Active</span>
              </div>
            </div>

            <div className="text-left space-y-1 relative z-10">
              <div className="text-xs font-mono font-medium text-orange-400">Security Layer</div>
              <div className="text-sm font-semibold text-white">Fintech Integrity Shield Protected</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// ==========================================
// 3. GLOWING DARK BRAND MATRIX
// ==========================================
function DarkStrategySection() {
  const [currentDot, setCurrentDot] = useState(0);

  return (
    <section className="bg-slate-950 text-white py-24 px-4 sm:px-6 lg:px-8 overflow-hidden rounded-[48px] my-6 shadow-2xl max-w-7xl mx-auto border border-slate-900 relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Upper Heading Node Grid Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-900 pb-10 text-left">
          <div className="space-y-4">
            <span className="text-[11px] uppercase tracking-wider font-extrabold text-orange-400 bg-orange-500/10 border border-orange-500/20 px-3 py-1 rounded-md">
              Value Engineering Matrix
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Transforming Operations <br />Through Digital Excellence
            </h2>
          </div>
          <button className="text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 px-6 py-3.5 rounded-xl hover:bg-white/10 transition-all text-slate-300 whitespace-nowrap backdrop-blur-sm">
            View Analytics Blueprints
          </button>
        </div>

        {/* Dark High-Tech Benefit Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industryData.benefits.map((benefit, i) => (
            <div
              key={i}
              onClick={() => setCurrentDot(i)}
              className="bg-slate-900/40 border border-slate-900 p-8 rounded-3xl flex flex-col justify-between min-h-[320px] hover:border-orange-500/30 hover:bg-slate-900/80 transition-all duration-300 group relative cursor-pointer text-left"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="w-8 h-8 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-orange-400 text-xs font-mono font-bold group-hover:bg-orange-500 group-hover:text-white transition-all">
                  0{i + 1}
                </div>
                <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-orange-500 transition-colors" />
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold tracking-tight group-hover:text-orange-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-400 font-normal leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-900/60 flex flex-wrap gap-2">
                <span className="text-[9px] font-mono font-bold tracking-wider text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-900">
                  {industryData.title.toUpperCase()}_SYS
                </span>
                <span className="text-[9px] font-mono font-bold tracking-wider text-orange-400 bg-orange-500/5 px-2 py-0.5 rounded border border-orange-500/10">
                  COMPLIANT
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Micro Carousel Navigation Indicators */}
        <div className="flex justify-center items-center gap-2.5 pt-4">
          {industryData.benefits.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentDot(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${currentDot === idx ? "w-8 bg-orange-500" : "w-1.5 bg-slate-800"}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

// ==========================================
// 4. CLEAN TECH INFRASTRUCTURE PIPELINE
// ==========================================
function WorkflowStepsSection() {
  const techSteps = [
    { label: "Frontend Layer", items: industryData.technologies.slice(0, 2) },
    { label: "Logic Middleware", items: industryData.technologies.slice(2, 5) },
    { label: "Data Persistence", items: industryData.technologies.slice(5, 7) },
    { label: "Cloud Core mesh", items: industryData.technologies.slice(7) }
  ];

  return (
    <section className="bg-slate-900 text-white rounded-[48px] py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto my-6 relative overflow-hidden border border-slate-800 shadow-xl">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

      <div className="max-w-7xl mx-auto space-y-16 relative z-10">
        
        {/* Section Heading Module Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-center lg:text-left">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold font-mono uppercase tracking-widest text-orange-400">Framework Stack</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Enterprise Technology Integration
            </h2>
            <p className="text-slate-400 max-w-2xl font-normal leading-relaxed text-base sm:text-lg">
              Our verified software delivery pipeline harnesses advanced tech infrastructure implementations to build highly transactional, secure financial systems.
            </p>
          </div>
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center relative shadow-2xl backdrop-blur-sm">
              <span className="text-2xl animate-spin [animation-duration:12s]">⚙️</span>
            </div>
          </div>
        </div>

        {/* Dynamic Architectural Block Grid Array */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {techSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-slate-950/60 border border-slate-800/80 p-8 rounded-3xl flex flex-col justify-between min-h-[200px] text-left hover:border-orange-500/40 backdrop-blur-md transition-all"
            >
              <div className="font-mono text-xs text-slate-500 font-bold tracking-wider uppercase">
                {`// LAYER_0${idx + 1}`}
              </div>
              <div className="space-y-4 pt-6">
                <h3 className="text-xs font-bold text-orange-400 tracking-wider uppercase">
                  {step.label}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {step.items.map((tech, techIdx) => (
                    <span 
                      key={techIdx} 
                      className="px-3 py-1.5 bg-slate-900 border border-slate-800/60 text-slate-300 text-xs font-medium rounded-xl"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Combined Call-To-Action Footframe */}
        <div className="bg-gradient-to-r from-orange-950/20 to-slate-950/60 border border-orange-900/20 p-10 rounded-[2.5rem] max-w-4xl mx-auto text-center space-y-6 shadow-2xl backdrop-blur-md">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">{industryData.ctaTitle}</h3>
            <p className="text-sm text-slate-400 max-w-xl mx-auto leading-relaxed">{industryData.ctaDescription}</p>
          </div>
          <div>
            <button className="bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded-xl shadow-lg shadow-orange-500/20 transition-all inline-flex items-center gap-3">
              <span>{industryData.ctaButton}</span>
              <span className="text-sm">⚡</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

// ==========================================
// CENTRALIZED COMPONENT ROOT INJECTOR
// ==========================================
export default function EnterpriseSectionsContainer() {
  return (
    <div className="min-h-screen bg-white antialiased space-y-12 py-6 px-3 sm:px-6">
      {/* 1. Services Matrix Section */}
      <ServicesSection />
      
      {/* 2. Capabilities Grid Accordion */}
      <FAQSection />
      
      {/* 3. Dark Mode Operational Strategy */}
      <DarkStrategySection />
      
      {/* 4. Process Workflow System Deck */}
      <WorkflowStepsSection />
    </div>
  );
}