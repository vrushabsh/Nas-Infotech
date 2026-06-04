import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Cpu, Award, Sliders, ArrowUpRight, Layers, Fingerprint, Activity } from "lucide-react";
import DynamicBadge from "../ReusableComponents/DynamicBadge";

export function AboutWhyChooseUs() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      id: 0,
      tag: "Vanguard Architecture",
      title: "Deep Architectural Expertise",
      description: "Our engineered solutions aren't just built; they are architected to withstand enterprise-grade operational loads with absolute structural integrity.",
      icon: Award,
      metric: "99.99% Uptime",
      visualElement: (
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-orange-500/5 to-transparent flex items-center justify-center p-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-sm rounded-2xl bg-[#0a1118]/80 backdrop-blur-xl border border-white/10 p-6 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#FFB057]" />
                <span className="text-[11px] text-slate-400 font-mono tracking-widest uppercase">System Core Architecture</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
            <div className="space-y-1">
              <span className="text-3xl font-light font-mono text-white tracking-tight">Active Node Cluster</span>
              <p className="text-slate-400 text-xs">Decentralized, stateless microservices deployed across 3 geographic zones.</p>
            </div>
          </motion.div>
        </div>
      )
    },
    {
      id: 1,
      tag: "Next-Gen Paradigms",
      title: "Continuous Digital Innovation",
      description: "We completely bypass yesterday's standards, building with progressive software paradigms and highly real-time edge processing nodes.",
      icon: Cpu,
      metric: "<45ms Latency",
      visualElement: (
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent flex items-center justify-center p-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full max-w-sm space-y-3"
          >
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#0a1118] flex items-center justify-center text-white">
                  <Activity className="w-4 h-4 text-[#FFB057]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-[#0a1118]">Edge Execution Speed</h4>
                  <p className="text-[10px] text-slate-400">Global routing metric</p>
                </div>
              </div>
              <span className="text-sm font-mono font-black text-emerald-600">Optimum</span>
            </div>
            <div className="h-24 bg-slate-900 rounded-2xl border border-white/10 p-4 flex items-end justify-between gap-1 shadow-xl">
              {[40, 15, 65, 30, 85, 45, 90, 20, 55, 70].map((h, i) => (
                <motion.div 
                  key={i} 
                  className="w-full bg-gradient-to-t from-[#FFB057] to-amber-400 rounded-t-sm" 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ delay: i * 0.03, duration: 0.4 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      )
    },
    {
      id: 2,
      tag: "Bulletproof Security",
      title: "High-Performance Integrity",
      description: "Security isn't a wrapper or an afterthought. Our solutions feature cryptographic zero-trust validation baked deep directly within the runtime layer.",
      icon: ShieldCheck,
      metric: "Zero Leak History",
      visualElement: (
        <div className="absolute inset-0 bg-gradient-to-bl from-emerald-500/10 via-slate-500/5 to-transparent flex items-center justify-center p-8">
          <motion.div 
            initial={{ rotate: -5, scale: 0.95 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 5, scale: 0.95 }}
            className="w-full max-w-xs rounded-2xl bg-white border border-slate-200 p-6 shadow-2xl text-center space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 mx-auto flex items-center justify-center text-emerald-600">
              <Fingerprint className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-black text-[#0a1118]">Cryptographic Clearance</h4>
              <p className="text-xs text-slate-400">Multi-factor physical & runtime attestation active.</p>
            </div>
            <div className="py-2 px-4 bg-emerald-50 rounded-xl text-emerald-700 text-xs font-mono font-bold inline-block">
              SLA Compliance Verified
            </div>
          </motion.div>
        </div>
      )
    },
    {
      id: 3,
      tag: "Precision Customization",
      title: "Hyper-Tailored Infrastructures",
      description: "We don't believe in generic architectures. Your operational workflows dictate our codebases, resulting in frictionless ecosystem scaling.",
      icon: Sliders,
      metric: "100% Bespoke Code",
      visualElement: (
        <div className="absolute inset-0 bg-slate-50 flex flex-col justify-between p-8">
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">Modular Control Panel</span>
            <h4 className="text-lg font-bold text-[#0a1118]">Tailored Component Framework</h4>
          </div>
          <div className="space-y-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="space-y-1">
                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                  <span>Dynamic Parameter Vector 0{item}</span>
                  <span>{item * 32}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-[#0a1118]" 
                    initial={{ width: 0 }}
                    animate={{ width: `${item * 32}%` }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
  ];

  return (
    <section className="bg-[#FAF9F5] py-20 md:py-28 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP INTRO ARCHITECTURE */}
        <div className="border-b border-slate-200/60 pb-12 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 space-y-4">
            <DynamicBadge title="Perspective" />
            <h2 className="text-[#0a1118] text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.05]">
              Moving forward by <br />
              leaving something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB057] to-amber-500">better</span> behind.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pt-8">
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed font-light">
              In an accelerated landscape, legacy environments trap evolution. We build resilient digital infrastructure meant to gracefully transition businesses into tomorrow's enterprise standard.
            </p>
          </div>
        </div>

        {/* CONTEMPORARY INTERACTIVE CANVAS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT INTERACTIVE CONTROLS COLUMN */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-4">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              const isSelected = activeFeature === idx;
              
              return (
                <motion.div
                  key={feature.id}
                  onMouseEnter={() => setActiveFeature(idx)}
                  onClick={() => setActiveFeature(idx)}
                  className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col md:flex-row items-start md:items-center justify-between gap-4 overflow-hidden ${
                    isSelected 
                      ? "bg-white border-slate-200 shadow-md" 
                      : "bg-transparent border-transparent hover:bg-white/40"
                  }`}
                  layout
                >
                  <div className="flex gap-4 items-start">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                      isSelected 
                        ? "bg-[#0a1118] text-white border-transparent" 
                        : "bg-white text-slate-700 border-slate-200 shadow-sm"
                    }`}>
                      <Icon className="w-5 h-5" strokeWidth={1.5} />
                    </div>
                    <div className="space-y-1 max-w-md">
                      <span className={`text-[10px] font-mono tracking-widest uppercase block ${
                        isSelected ? "text-[#FFB057]" : "text-slate-400"
                      }`}>
                        {feature.tag}
                      </span>
                      <h3 className="text-base font-black text-[#0a1118] tracking-tight">{feature.title}</h3>
                      
                      {/* Expandable contextual drawer based on focus */}
                      <motion.p 
                        initial={false}
                        animate={{ height: isSelected ? "auto" : 0, opacity: isSelected ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="text-slate-500 text-sm leading-relaxed overflow-hidden pr-4"
                      >
                        {feature.description}
                      </motion.p>
                    </div>
                  </div>

                  {/* Right hand metric identifier */}
                  <div className="text-right hidden md:block shrink-0">
                    <span className="text-xs font-mono bg-slate-100 text-slate-600 font-bold px-2.5 py-1 rounded-full">
                      {feature.metric}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* RIGHT CINEMATIC PREVIEW CANVAS (Fixed Dynamic Container Block) */}
          <div className="lg:col-span-5 lg:h-auto min-h-[420px] flex flex-col justify-between bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden relative p-8">
            
            {/* Top Deck Meta */}
            <div className="flex items-center justify-between z-20">
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-400">System Sandbox Visualizer</span>
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#0a1118]" />
              </div>
            </div>

            {/* Middle Deck: Dynamic Visual Content Portal */}
            <div className="flex-1 w-full relative min-h-[220px] my-6">
              <AnimatePresence mode="wait">
                <div key={activeFeature} className="absolute inset-0">
                  {features[activeFeature].visualElement}
                </div>
              </AnimatePresence>
            </div>

            {/* Bottom Deck Meta */}
            <div className="pt-4 border-t border-slate-100 flex items-end justify-between z-20">
              <div className="space-y-0.5">
                <p className="text-xs font-black text-[#0a1118]">Continuous Delivery SLA</p>
                <p className="text-[11px] text-slate-400">Production environment validated live</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-50 hover:bg-[#0a1118] text-slate-800 hover:text-white border border-slate-200 flex items-center justify-center transition-all duration-300 group cursor-pointer">
                <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}