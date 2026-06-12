import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ArrowUpRight,
  Cpu,
  Building2,
  Compass,
  ArrowRight,
  Code,
  TrendingUp,
  Search,
  Users,
  Workflow,
  Shield,
  Smartphone
} from "lucide-react";

interface Service {
  id: number;
  slug: string;
  serviceName: string;
  tagline: string;
  hero: {
    title: string;
    description: string;
    primaryCTA: string;
    secondaryCTA: string;
  };
  overview: {
    title: string;
    description: string;
    capabilities: string[];
  };
  keyFeatures: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  technologies: {
    title: string;
    categories: {
      name: string;
      items: string[];
    }[];
  };
  benefits: {
    title: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  industries: {
    title: string;
    items: {
      name: string;
      description: string;
    }[];
  };
}

const ServiceDetails = () => {
  const { slug } = useParams();
  const [service, setService] = useState<Service | null>(null);
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    fetch("/Data/servicesdetails.json")
      .then((res) => res.json())
      .then((data) => {
        const foundService = data.services.find(
          (item: Service) => item.slug === slug,
        );
        setService(foundService || null);
        // Reset dynamic tab index on data route update
        setCurrentTab(0);
      });
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FAF9F5] text-stone-500 font-sans antialiased">
        <div className="animate-pulse tracking-wider font-semibold text-xs uppercase">
          Loading Service Modules...
        </div>
      </div>
    );
  }

  // Dynamic mapping array for Overview grid custom icons
  const serviceIcons = [Search, Users, Workflow, TrendingUp, Code, Cpu];

  return (
    <div className="bg-[#FAF9F5] text-[#0C111D] font-sans antialiased selection:bg-[#F2E5D3] tracking-tight min-h-screen overflow-x-hidden">
      
      {/* 1. ARCHITECTURAL HERO SECTION WITH TOP GRADIENT OVERLAY */}
      <section className="relative min-h-[85vh] flex items-center bg-white border-b border-stone-200/60 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        
        {/* Top Dark Overlay for White Navbar Visibility */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/40 via-black/30 to-transparent pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-0">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF9F5] border border-stone-200/80 rounded-full text-xs font-semibold text-stone-600">
              <span className="text-[#E28743] text-sm">✦</span> {service.serviceName}
            </div>
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-[#0C111D] tracking-tight leading-[1.1]">
              {service.hero.title.includes("Reliable") ? (
                <>
                  Providing <span className="text-[#E28743] font-serif font-normal italic">Reliable</span> Enterprise Solutions.
                </>
              ) : (
                service.hero.title
              )}
            </h1>
            <p className="text-stone-500 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
              {service.hero.description}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button className="px-6 py-3.5 bg-[#0C111D] hover:bg-stone-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2">
                {service.hero.primaryCTA} <ArrowUpRight className="w-4 h-4" />
              </button>
              <button className="px-6 py-3.5 bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 rounded-xl text-xs font-bold uppercase tracking-wider transition-all">
                {service.hero.secondaryCTA}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full h-[400px] bg-stone-100 rounded-[2rem] overflow-hidden shadow-sm border border-stone-200/60">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Team Architecture Framework" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 2. COMPREHENSIVE SERVICE RANGE GRID */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E28743] border-b-2 border-[#E28743]/30 pb-1">
            {service.tagline}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0C111D] tracking-tight leading-snug">
            {service.overview.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.overview.capabilities.map((capability, idx) => {
            const Icon = serviceIcons[idx] || Code;
            const isFirst = idx === 0;

            return (
              <div 
                key={idx} 
                className={`p-8 rounded-[1.8rem] transition-all duration-300 flex flex-col justify-between min-h-[260px] ${
                  isFirst 
                    ? "bg-gradient-to-br from-[#F26419] to-[#F89E4B] text-white shadow-xl hover:translate-y-[-4px]" 
                    : "bg-white text-stone-800 border border-stone-100 shadow-sm hover:shadow-md hover:translate-y-[-4px]"
                }`}
              >
                <div className="space-y-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${isFirst ? "bg-white/20 text-white" : "text-[#E28743]"}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-lg font-bold tracking-tight ${isFirst ? "text-white" : "text-[#0C111D]"}`}>
                    {capability}
                  </h3>
                  <p className={`text-xs leading-relaxed font-light ${isFirst ? "text-white/90" : "text-stone-400"}`}>
                    {service.overview.description.length > 120 
                      ? `${service.overview.description.substring(0, 110)}...` 
                      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Core integrity layer loops tracking frameworks."
                    }
                  </p>
                </div>
                
                <button className={`inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider pt-6 transition-colors ${
                  isFirst ? "text-white/90 hover:text-white" : "text-[#E28743] hover:text-[#f38131]"
                }`}>
                  Learn More <span className="text-sm">→</span>
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. WHY CHOOSE US AS PARTNER SPLIT SECTION */}
      <section className="py-24 bg-white border-t border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E28743]">WHY CHOOSE US</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#0C111D] max-w-xl">
                {service.keyFeatures.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.keyFeatures.items.map((item, idx) => {
                const isHighlight = idx === 0;
                return (
                  <div 
                    key={idx} 
                    className={`p-6 rounded-2xl transition-all ${
                      isHighlight 
                        ? "bg-gradient-to-br from-[#F26419] to-[#F89E4B] text-white shadow-md" 
                        : "bg-[#FAF9F5] text-stone-800 border border-stone-200/60"
                    }`}
                  >
                    <h3 className={`text-sm font-bold tracking-tight mb-2 ${isHighlight ? "text-white" : "text-[#0C111D]"}`}>
                      {item.title}
                    </h3>
                    <p className={`text-xs font-light leading-relaxed ${isHighlight ? "text-white/95" : "text-stone-500"}`}>
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5 h-[480px] rounded-2xl overflow-hidden shadow-sm border border-stone-200/60">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" 
              alt="Digital Solution Specialist" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 4. SEQUENTIAL HOW IT WORKS WORKFLOW */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4 h-[420px] rounded-2xl overflow-hidden shadow-xs">
            <img 
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80" 
              alt="Team Technical Alignment" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-8 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E28743]">HOW IT WORKS</span>
              <h2 className="text-3xl font-extrabold text-[#0C111D] tracking-tight">
                Excellent Work From Increased Website Traffic To Higher Conversion Rates.
              </h2>
            </div>

            <div className="space-y-6">
              {[
                { step: "01.", title: "Talk With Team", desc: "Lorem ipsum dolor sit amet consectetur performance standard loops setup." },
                { step: "02.", title: "Make A Plan", desc: "Lorem ipsum dolor sit amet engineering localized deployment infrastructure." },
                { step: "03.", title: "Digital Marketing Work", desc: "Lorem ipsum dolor sit amet optimization cross platform parameters." }
              ].map((stepObj, idx) => (
                <div key={idx} className="flex items-start gap-6 pb-4 border-b border-stone-200/60 last:border-0">
                  <span className="text-2xl font-black text-[#E28743]">{stepObj.step}</span>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-stone-900">{stepObj.title}</h4>
                    <p className="text-xs text-stone-500 font-light">{stepObj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. TABULATED STACK ARCHITECTURE */}
      <section className="py-24 bg-white border-t border-b border-stone-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-[#0C111D] tracking-tight leading-tight">
                {service.technologies.title}
              </h2>
              <p className="text-stone-500 text-sm font-light">Select a quadrant to view targeted stack integrations.</p>
            </div>
            
            <div className="flex flex-col gap-2">
              {service.technologies.categories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTab(index)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl text-left text-xs font-bold uppercase tracking-wider transition-all border ${
                    currentTab === index 
                      ? "bg-[#0C111D] border-[#0C111D] text-white shadow-sm" 
                      : "bg-white border-stone-200 text-stone-500 hover:bg-stone-50"
                  }`}
                >
                  {cat.name}
                  <Compass className={`w-4 h-4 ${currentTab === index ? "text-[#E28743]" : "text-stone-300"}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 bg-[#FAF9F5] border border-stone-200 rounded-2xl p-6 sm:p-8 min-h-[320px] flex flex-col justify-between shadow-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {service.technologies.categories[currentTab]?.items.map((tech, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white border border-stone-200/60 flex items-center justify-between group hover:border-[#E28743] transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-stone-50 border border-stone-200 flex items-center justify-center text-stone-400 group-hover:text-[#0C111D] transition-colors">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-bold text-stone-800 tracking-tight">{tech}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all text-[#E28743]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. SECURE/TRUST STYLE LAYOUT */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative h-[460px] rounded-2xl overflow-hidden shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" 
              alt="Strategic Infrastructure Overview" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-4xl font-extrabold text-[#0C111D] tracking-tight">
              {service.benefits.title}
            </h2>
            <p className="text-stone-500 font-light text-sm leading-relaxed max-w-xl">
              Our web infrastructure plans are built on transparency, flexibility, and long-term reliability. We optimize custom environments tailored to system requirements.
            </p>

            <div className="space-y-6 pt-4">
              {service.benefits.items.map((benefit, idx) => {
                const isFirst = idx === 0;
                return (
                  <div key={idx} className={isFirst ? "space-y-2 border-b border-stone-200 pb-4" : "p-5 bg-stone-100/50 border border-stone-200/40 rounded-xl flex items-start gap-4"}>
                    {isFirst ? (
                      <>
                        <div className="w-10 h-10 bg-[#FDF2E2] rounded-xl flex items-center justify-center text-[#E28743] mb-2">
                          <Shield className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold text-stone-900">{benefit.title}</h3>
                        <p className="text-xs text-stone-500 font-light max-w-md">{benefit.description}</p>
                      </>
                    ) : (
                      <>
                        <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                          {idx === 1 ? <Smartphone className="w-4 h-4" /> : <Users className="w-4 h-4" />}
                        </div>
                        <p className="text-xs font-semibold text-stone-700 leading-relaxed">{benefit.title}</p>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES MATRIX CONTAINER */}
      <section className="bg-white border-t border-stone-200/60 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto p-10 sm:p-14 bg-[#FAF9F5] border border-stone-200 rounded-[2.5rem] space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E28743] bg-orange-50 px-3 py-1 rounded-full">
              INDUSTRIES
            </span>
            <h2 className="text-3xl font-black text-[#0C111D] tracking-tight">
              {service.industries.title}
            </h2>
            <p className="text-stone-400 max-w-xl mx-auto text-xs font-light leading-relaxed">
              Tailored ecosystem frameworks configured precisely around unique digital market operations and structural compliance parameters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.industries.items.map((ind, idx) => (
              <div key={idx} className="bg-white border border-stone-200/60 rounded-2xl p-6 space-y-4 shadow-xs hover:border-stone-300 transition-colors flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-stone-50 flex items-center justify-center border border-stone-200 text-[#0C111D]">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#0C111D] tracking-tight">{ind.name}</h3>
                  <p className="text-stone-400 text-[11px] leading-relaxed font-light">{ind.description}</p>
                </div>
                <button className="text-[11px] font-bold text-[#E28743] uppercase tracking-wider pt-4 inline-flex items-center gap-1 hover:text-orange-600 transition-colors">
                  Read more <span>→</span>
                </button>
              </div>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <button className="px-8 py-3.5 bg-[#0C111D] hover:bg-stone-800 text-white rounded-full text-xs font-bold tracking-wider transition-all shadow-md flex items-center gap-2">
              Hire Us Today <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetails;