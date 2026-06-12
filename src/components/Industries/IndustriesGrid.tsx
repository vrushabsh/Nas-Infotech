import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  Landmark,
  Pill,
  Shield,
  ShoppingCart,
  Truck,
  Wifi,
  Factory,
  Briefcase,
} from "lucide-react";

interface IndustryItem {
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
}

const industryIcons: Record<string, React.ReactNode> = {
  banking: <Landmark size={22} />,
  ecommerce: <ShoppingCart size={22} />,
  healthcare: <HeartPulse size={22} />,
  education: <GraduationCap size={22} />,
  pharma: <Pill size={22} />,
  insurance: <Shield size={22} />,
  telecommunication: <Wifi size={22} />,
  manufacturing: <Factory size={22} />,
  finance: <Landmark size={22} />,
  logistics: <Truck size={22} />,
  construction: <Building2 size={22} />,
  "real-estate": <Building2 size={22} />,
  "professional-services": <Briefcase size={22} />,
  "it-transformation": <Briefcase size={22} />,
  "field-service": <Briefcase size={22} />,
};

function IndustryCard({
  item,
  index,
  onNavigate,
}: {
  item: IndustryItem;
  index: number;
  onNavigate: (id: string) => void;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      onMouseMove={handleMouseMove}
      onClick={() => onNavigate(item.id)}
      className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm hover:border-[#FFB057]/60"
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              280px circle at ${mouseX}px ${mouseY}px,
              rgba(255,176,87,0.15),
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-6 text-[#111e38] group-hover:bg-[#FFB057] group-hover:text-white transition-all">
          {industryIcons[item.id] ?? <Briefcase size={22} />}
        </div>

        <h3 className="text-xl font-bold text-[#111e38] mb-3">{item.title}</h3>

        <p className="text-slate-600 text-sm leading-6 line-clamp-4">
          {item.overview}
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between">
        <span className="text-xs uppercase tracking-widest font-bold text-slate-500">
          Explore Solution
        </span>

        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="group-hover:translate-x-1 transition-transform"
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </div>
    </motion.div>
  );
}

export default function IndustriesGrid() {
  const navigate = useNavigate();

  const [industries, setIndustries] = useState<IndustryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Data/industries.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to load industries");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Industries:", data);
        console.log("Length:", data.length);

        setIndustries(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading Industries...
      </div>
    );
  }

  if (industries.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        No Industries Found
      </div>
    );
  }

  return (
    <section className="bg-[#f8fafc] py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-white text-sm font-semibold">
            ✲ Expertise & Frameworks
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black text-[#0a1118]">
            Industries{" "}
            <span className="bg-gradient-to-r from-[#FFB057] to-[#ff941a] bg-clip-text text-transparent">
              We Impact
            </span>
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-slate-600">
            Delivering enterprise-grade digital ecosystems engineered for
            performance, scalability and operational excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((item, index) => (
            <IndustryCard
              key={item.id}
              item={item}
              index={index}
              onNavigate={(id) => navigate(`/industries/${id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
