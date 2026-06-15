import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, MoveRight, Search, Users, Network } from "lucide-react";
import DynamicBadge from "../../components/ReusableComponents/DynamicBadge";
import HomeFAQ from "../../components/Home/HomeFAQ";

interface Industry {
  id: string;
  title: string;
  heroTitle: string;
  heroSubtitle: string;
  overview: string;
  benefits: {
    title: string;
    description: string;
  }[];
  technologies: string[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  image?: string;
}

const tickerItems = [
  "Software Development",
  "Artificial Intelligence And ML",
  "Salesforce Services",
  "BI And Analytics",
  "Cyber Security",
  "Devops Engineering",
  "Cloud Computing",
  "Big Data Analytics",
];

export default function IndustryDetails() {
  const { id } = useParams();
  const [industry, setIndustry] = useState<Industry | null>(null);
  const [loading, setLoading] = useState(true);
  const [openId, setOpenId] = useState<number | null>(0);
  const [activeTechIndex, setActiveTechIndex] = useState<number>(0);

  // FIX: Reset scroll position to top whenever the active industry changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    fetch("/Data/industries.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load industries");
        return res.json();
      })
      .then((data: Industry[]) => {
        const foundIndustry = data.find((item) => item.id === id);
        setIndustry(foundIndustry || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [id]);

  const getTechIcon = (index: number) => {
    switch (index % 3) {
      case 0:
        return <Search className="w-5 h-5" />;
      case 1:
        return <Users className="w-5 h-5" />;
      case 2:
        return <Network className="w-5 h-5" />;
      default:
        return <Search className="w-5 h-5" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0B121F] flex items-center justify-center font-mono text-sm text-slate-400">
        <span className="w-2 h-2 rounded-full bg-[#E5A93C] animate-ping mr-3" />
        Compiling Infrastructure Matrix...
      </div>
    );
  }

  if (!industry) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center p-6">
        <div className="text-4xl mb-4">⚠️</div>
        <h2 className="text-xl font-bold text-slate-900">
          Industry Profile Absent
        </h2>
        <p className="text-slate-500 text-sm mt-1">
          The structural layout array could not be resolved.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F5] antialiased text-slate-900 selection:bg-[#E5A93C] selection:text-white">
      {/* ==========================================
          REFACTORED SPLIT GRID HERO SECTION
         ========================================== */}
      <section
        className="relative w-full min-h-[85vh] flex flex-col justify-between pt-32 pb-12 px-4 sm:px-8 lg:px-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: industry.image
            ? `linear-gradient(to bottom, rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.65)), url(${industry.image})`
            : `linear-gradient(to bottom, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.95))`
        }}
      >
        {/* Transparent Geometric Grid Overlay to add technical texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        {/* Hero Left Aligned Text Elements */}
        <div className="max-w-4xl mx-auto w-full my-auto text-left space-y-6 relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black text-white leading-[1.15] tracking-tight drop-shadow-sm max-w-3xl">
            {industry.heroTitle}
          </h1>
      <section className="relative min-h-[85vh] flex items-center bg-white border-b border-stone-200/60 pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/40 via-black/30 to-transparent pointer-events-none z-10" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-0">
          <div className="lg:col-span-7 space-y-6">
            <DynamicBadge title={industry.title} />

            <h1 className="text-4xl sm:text-5xl xl:text-5xl font-extrabold text-[#000000] tracking-tight leading-[1.1]">
              {industry.heroTitle.includes("Reliable") ? (
                <>
                  Providing{" "}
                  <span className="text-[#ffb057] font-serif font-normal italic">
                    Reliable
                  </span>{" "}
                  Enterprise Solutions.
                </>
              ) : (
                industry.heroTitle
              )}
            </h1>

          <div className="pt-4 flex flex-wrap gap-4">
            <button className="bg-[#FFB057] hover:bg-[#f5a13f] text-[#111827] font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              – DISCOVER MORE
            </button>
          </div>
        </div>
            <p className="text-stone-500 text-base sm:text-lg max-w-2xl leading-relaxed">
              {industry.heroSubtitle}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/contact">
                <button className="px-6 py-3.5 bg-[#113217] hover:bg-[#113217]/90 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center gap-2">
                  Discover More <ArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-6 py-3.5 bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 rounded-xl text-xs font-bold uppercase tracking-wider transition-all">
                  Get In Touch
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative w-full h-[400px] bg-stone-100 rounded-[2rem] overflow-hidden shadow-sm border border-stone-200/60">
            <img
              src={
                industry.image ||
                "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              }
              alt={industry.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ==========================================
          STATS & GLOBAL GRID
         ========================================== */}
      <section className="py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Overview Info Block */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E5A93C]">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Providing scalable & reliable infrastructure
              </h2>
            </div>
            <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
              {industry.overview}
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">
                  25+
                </div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-1">
                  Years Scale
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">
                  77
                </div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-1">
                  Global Nodes
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900">
                  38K
                </div>
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mt-1">
                  Deployments
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3 w-full">
            {industry.benefits.map((benefit, idx) => {
              const isOpen = openId === idx;
              return (
                <div
                  key={idx}
                  className={`border transition-all duration-300 bg-white rounded-2xl overflow-hidden shadow-sm ${isOpen ? "border-[#E5A93C]/40 ring-1 ring-[#E5A93C]/10" : "border-slate-200/80 hover:border-slate-300"
                    }`}
                  className={`border transition-all duration-300 bg-white rounded-2xl overflow-hidden shadow-sm ${
                    isOpen
                      ? "border-[#E5A93C]/40 ring-1 ring-[#E5A93C]/10"
                      : "border-slate-200/80 hover:border-slate-300"
                  }`}
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left font-bold text-slate-900 transition-colors text-base sm:text-lg gap-4"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`text-xs font-mono font-bold px-2 py-1 rounded ${isOpen ? "bg-[#E5A93C] text-white" : "bg-slate-100 text-slate-500"}`}
                      >
                        0{idx + 1}
                      </span>
                      <span>{benefit.title}</span>
                    </div>
                    <span
                      className={`text-xl font-light transform transition-transform duration-200 ${isOpen ? "rotate-45 text-[#E5A93C]" : "text-slate-400"}`}
                    >
                      ＋
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 text-slate-500 text-sm leading-relaxed border-t border-slate-50/60 ml-10">
                          {benefit.description}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <div className="w-full bg-[#113217] py-4 overflow-hidden border-b border-white/10 select-none">
        <div className="flex whitespace-nowrap gap-12 animate-[marquee_25s_linear_infinite]">
          {[...tickerItems, ...tickerItems, ...tickerItems].map(
            (item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-3 text-white text-sm sm:text-base font-bold tracking-wide"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-[#FFB057] text-lg">✲</span>
                {item}
              </motion.div>
            )
          )}
        </div>
      </div>

      {/* ==========================================
          HIGH-FIDELITY TECHNOLOGY PIPELINE STACK
         ========================================== */}
      <section className="bg-[#ffff] py-20 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto rounded-[3rem] m-16">
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-stone-200 pb-8 text-left">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E5A93C]">
                Technical Matrix
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Architectural Integration Core
              </h2>
            </div>
            <p className="text-stone-500 text-sm max-w-md font-normal leading-relaxed">
              Validated software pipelines crafted to support industrial
              environments and multi-cluster deployment systems cleanly.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industry.technologies.map((tech, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-slate-200/70 bg-[#FAF9F5]/40 hover:bg-white hover:border-[#E5A93C]/40 transition-all text-left flex flex-col justify-between min-h-[140px] group shadow-sm"
              >
                <span className="text-[10px] font-mono font-bold text-slate-400 group-hover:text-[#E5A93C] transition-colors">
                  // NODE_0{index + 1}
                </span>
                <span className="text-base font-bold text-slate-900 tracking-tight block pt-4">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          ACTION CTA STRIP
         ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pb-16">
        <div className="w-full rounded-[2.5rem] bg-gradient-to-r from-slate-950 to-slate-900 p-10 sm:p-14 text-center space-y-6 relative overflow-hidden border border-slate-800 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E5A93C]/5 rounded-full blur-[80px] pointer-events-none" />

          <div className="space-y-2 relative z-10">
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              {industry.ctaTitle}
            </h3>
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
              {industry.ctaDescription}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industry.technologies.map((tech, index) => {
              const isActive = activeTechIndex === index;

              return (
                <div
                  key={index}
                  onMouseEnter={() => setActiveTechIndex(index)}
                  className={`p-10 rounded-[15px] border transition-all duration-300 text-left flex flex-col justify-between min-h-[100px] cursor-pointer shadow-sm hover:shadow-md ${
                    isActive
                      ? "bg-[#113217] border-[#113217]"
                      : "bg-white border-stone-200/80"
                  }`}
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "bg-[#113217]/5 text-[#ffb057]"
                      }`}
                    >
                      {getTechIcon(index)}
                    </div>

                    <div className="mt-8">
                      <h3
                        className={`text-xl font-bold tracking-tight leading-snug ${
                          isActive ? "text-white" : "text-[#113217]"
                        }`}
                      >
                        {tech}
                      </h3>
                    </div>
                  </div>

                  <div className="pt-6">
                    <Link to="/contact">
                      <button
                        className={`text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all ${
                          isActive
                            ? "text-[#ffb057]"
                            : "text-[#ffb057] hover:text-[#e09643]"
                        }`}
                      >
                        Learn More <MoveRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <HomeFAQ />
    </div>
  );
}