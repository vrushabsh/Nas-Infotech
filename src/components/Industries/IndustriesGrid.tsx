import React from "react";

// 1. Define TypeScript Interface for type-safety
interface IndustryItem {
  id: string;
  title: string;
  description: string;
  slug: string;
  icon: React.ReactNode; // Added strict type handling for distinct semantic vectors
}

export default function IndustriesGrid() {
  // 2. Structured array containing all 15 industry datasets with distinct technical inline SVGs
  const industries: IndustryItem[] = [
    {
      id: "banking",
      title: "Banking",
      description: "Empower your financial institution with tailored solutions, supporting banking operations for optimal performance and customer satisfaction.",
      slug: "banking",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="12" rx="2" />
          <line x1="2" y1="10" x2="22" y2="10" />
          <line x1="6" y1="14" x2="6" y2="14" />
          <line x1="10" y1="14" x2="10" y2="14" />
        </svg>
      ),
    },
    {
      id: "ecommerce",
      title: "E-commerce",
      description: "Drive online success with our customized solutions, from seamless shopping to secure payment processing, navigating the digital marketplace with ease.",
      slug: "e-commerce",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d=" toughness M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      ),
    },
    {
      id: "healthcare",
      title: "Healthcare",
      description: "Transform patient care with innovative solutions. From health records to telemedicine, we empower healthcare providers to deliver quality services.",
      slug: "healthcare",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
    {
      id: "education",
      title: "Education",
      description: "Enhance learning experiences with our innovative solutions. From personalized platforms to administrative tools, we support educational institutions for success.",
      slug: "education",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      ),
    },
    {
      id: "pharma",
      title: "Pharma",
      description: "We offer specialized services in pharmaceutical development ensuring compliance and efficiency to accelerate the journey from discovery to market.",
      slug: "pharma",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4.5 16.5c-1.5-1.5-2.5-3.5-2.5-6s1-4.5 2.5-6 3.5-2.5 6-2.5 4.5 1 6 2.5l-12 12z" />
          <path d="M7.5 19.5c1.5 1.5 3.5 2.5 6 2.5s4.5-1 6-2.5 2.5-3.5 2.5-6-1-4.5-2.5-6l-12 12z" />
        </svg>
      ),
    },
    {
      id: "insurance",
      title: "Insurance",
      description: "We provide tailored insurance solutions, combining risk management expertise with innovative technologies to protect and grow your assets effectively.",
      slug: "insurance",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
    },
    {
      id: "telecom",
      title: "Telecommunication",
      description: "From network optimization to customer engagement tools, we empower telecom companies for seamless communication experiences.",
      slug: "telecommunication",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12.55a11 11 0 0 1 14.08 0" />
          <path d="M1.42 9a16 16 0 0 1 21.16 0" />
          <circle cx="12" cy="18" r="2" />
        </svg>
      ),
    },
    {
      id: "manufacturing",
      title: "Manufacturing",
      description: "Drive efficiency with our customized solutions. From process optimization to supply chain management, we empower manufacturers for streamlined operations.",
      slug: "manufacturing",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      ),
    },
    {
      id: "realestate",
      title: "Real Estate",
      description: "Transform property management with our innovative solutions, empowering real estate professionals for success in a competitive market.",
      slug: "real-estate",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      id: "finance",
      title: "Finance",
      description: "Finance management with specialized software empowering efficiency, delivering real-time insights. Elevate finance operations with innovative technology.",
      slug: "finance",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="12" x2="12" y2="12" />
          <line x1="12" y1="18" x2="12" y2="18" />
          <line x1="12" y1="6" x2="12" y2="6" />
        </svg>
      ),
    },
    {
      id: "logistics",
      title: "Logistics and Transportation",
      description: "Optimize logistics with tailored solutions. From route optimization to fleet management, we empower transportation companies for efficient operations.",
      slug: "logistics-and-transportation",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      ),
    },
    {
      id: "prof-services",
      title: "Professional Services",
      description: "Enhance professional services with our comprehensive software for efficiency. Streamline operations and elevate service quality with innovative technology solutions.",
      slug: "professional-services",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      id: "digital-transform",
      title: "IT Digital Transformation",
      description: "Revolutionize IT infrastructure with cutting-edge digital solutions. Integrate technologies to enhance agility and competitiveness in the digital era.",
      slug: "it-digital-transformation",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      id: "construction",
      title: "Construction",
      description: "Modernize construction projects with innovative software. Streamline workflows, optimize resource allocation, and ensure project success with tailored technology.",
      slug: "construction",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
        </svg>
      ),
    },
    {
      id: "field-service",
      title: "Field Service",
      description: "Maximize field service efficiency with advanced software, empowering real-time data access, streamlined scheduling, and optimized routes for seamless delivery.",
      slug: "field-service",
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-[#f8fafc] py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Clean, Modern Section Header */}
        <div className="mb-16 border-b border-slate-200/60 pb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="max-w-xl">
            <p className="text-xs font-bold text-[#ffb057] uppercase tracking-widest mb-2.5">
              Expertise & Frameworks
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111e38] tracking-tight">
              Industries We Impact
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-sm font-medium leading-relaxed">
            Delivering bespoke enterprise software systems engineered for reliability, scaling, and operational efficiency.
          </p>
        </div>

        {/* Minimalist Grid Framework: 1col -> 2col -> 3col -> 4col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {industries.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl p-6 border border-slate-200/60 shadow-sm hover:border-[#ffb057] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Premium Structural Micro-Icon Container */}
                <div className="w-10 h-10 rounded-lg bg-slate-50 text-[#111e38] flex items-center justify-center mb-5 group-hover:bg-[#ffb057]/10 group-hover:text-[#ffb057] transition-colors duration-200">
                  {item.icon}
                </div>

                {/* Industry Card Title */}
                <h3 className="text-lg font-bold text-[#111e38] tracking-tight mb-2.5 group-hover:text-[#ffb057] transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Content Body */}
                <p className="text-slate-500 text-[13.5px] font-medium leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Action Link Row */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={`/industries/${item.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-[#ffb057] transition-colors duration-200"
                >
                  Explore Solution
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transform group-hover:translate-x-1 transition-transform duration-200"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}