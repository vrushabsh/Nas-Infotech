
// If you are using react-icons, you can import icons like this:
// import { Lightbulb, Users, BarChart3, TrendingUp } from 'lucide-react';

import React from 'react';

function CareerOurCulture() {
  // Data extracted from Page 1
  const cultureData = [
    {
      id: 1,
      title: "Innovation",
      description: "We thrive on innovation and challenging the limits of what's achievable. You'll be motivated to think creatively and contribute your distinctive ideas.",
      // Subtext/metric placeholder to mimic the card UI design
      meta: "Creative Thinking" 
    },
    {
      id: 2,
      title: "Collaboration",
      description: "In our collaborative setting, you'll work with skilled professionals who are passionate about their craft. We trust in the power of teamwork to accomplish remarkable outcomes.",
      // Items list layout to match the "Smart Savings Goals" layout
      listItems: [
        { label: "Teamwork Driven", value: "Remarkable Outcomes" },
        { label: "Skilled Professionals", value: "Passionate Craft" }
      ]
    },
    {
      id: 3,
      title: "Impact",
      description: "Your work here will have a direct impact on our clients and their businesses. We're committed to delivering solutions that truly make a difference.",
    },
    {
      id: 4,
      title: "Growth",
      description: "We're dedicated to your professional and personal development. With continuous learning opportunities, you'll grow and evolve in your career.",
    }
  ];

  return (
    <section className="bg-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider bg-orange-50 text-orange-600 px-3 py-1 rounded-full border border-orange-200">
            Our Culture
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            Explore Our Standout Features
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Innovation (Top Left Large Card) */}
          <div className="bg-gradient-to-br from-orange-50/40 to-amber-50/20 border border-slate-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm min-h-[340px]">
            {/* Visual Icon Illustration Box */}
            <div className="relative w-full h-40 flex items-center justify-center mb-6">
              <div className="absolute w-28 h-28 bg-orange-400 rounded-2xl rotate-12 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-orange-500/30">
                💡
              </div>
              <div className="absolute top-2 right-12 w-6 h-6 bg-white rounded-full shadow-sm flex items-center justify-center text-xs">✨</div>
              <div className="absolute bottom-2 left-12 w-6 h-6 bg-white rounded-full shadow-sm flex items-center justify-center text-xs">🚀</div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{cultureData[0].title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{cultureData[0].description}</p>
            </div>
          </div>

          {/* Card 2: Collaboration (Top Right Card with list components) */}
          <div className="bg-gradient-to-br from-orange-50/40 to-amber-50/20 border border-slate-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm min-h-[340px]">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-1">{cultureData[1].title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">{cultureData[1].description}</p>
            </div>
            
            {/* Nested Mini-Cards */}
            <div className="space-y-3">
              {cultureData[1].listItems.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-center justify-between transition-transform hover:-translate-y-0.5">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-500 font-semibold">
                      👥
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Focus</p>
                      <p className="text-sm font-semibold text-slate-700">{item.label}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-orange-500">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Impact (Bottom Left Dashboard/Chart Mockup Card) */}
          <div className="bg-gradient-to-br from-orange-50/40 to-amber-50/20 border border-slate-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm min-h-[320px]">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">{cultureData[2].title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">{cultureData[2].description}</p>
            </div>
            
            {/* Analytics Chart Mockup Component */}
            <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 mt-auto">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-slate-700">Client Value Delivered</span>
                <span className="text-xs font-semibold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-full">Direct Impact</span>
              </div>
              {/* SVG wave updated with theme color */}
              <div className="h-16 w-full pt-2">
                <svg viewBox="0 0 100 25" className="w-full h-full overflow-visible">
                  <path
                    d="M0,20 Q15,5 30,15 T60,8 T90,18 T100,10"
                    fill="none"
                    stroke="#fb923c"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <path
                    d="M0,20 Q15,5 30,15 T60,8 T90,18 T100,10 L100,25 L0,25 Z"
                    fill="url(#orange-gradient)"
                    opacity="0.15"
                  />
                  <defs>
                    <linearGradient id="orange-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#fb923c" />
                      <stop offset="100%" stopColor="#fff" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>

          {/* Card 4: Growth & CTA (Bottom Right Call to Action Panel) */}
          <div className="bg-gradient-to-br from-orange-400 to-amber-600 rounded-3xl p-8 flex flex-col justify-between shadow-lg shadow-orange-500/20 text-white min-h-[320px] relative overflow-hidden">
            {/* Background design accents */}
            <div className="absolute right-[-20px] top-[-20px] w-36 h-36 opacity-10 bg-white rounded-full"></div>
            <div className="absolute right-4 top-12 text-7xl opacity-15 select-none font-bold">
              📈
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-2">{cultureData[3].title}</h3>
              <p className="text-sm text-orange-50 leading-relaxed mb-6">
                {cultureData[3].description}
              </p>
            </div>

            <div className="mt-auto z-10">
              <h4 className="text-2xl font-bold mb-4 tracking-tight">Join NAS Infotech</h4>
              <button className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-orange-50 transition-colors w-full sm:w-auto text-center text-sm">
                Explore Careers
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default CareerOurCulture;