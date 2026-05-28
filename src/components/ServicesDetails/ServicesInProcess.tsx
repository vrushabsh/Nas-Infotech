interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  imageUrl: string;
}

export default function ServicesInProcess() {
  const steps: ProcessStep[] = [
    {
      stepNumber: "STEP - 01",
      title: "Consultation and Analysis",
      description:
        "We start with an in-depth consultation to understand your business requirements, objectives and challenges.",
      imageUrl:
        "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
    },
    {
      stepNumber: "STEP - 02",
      title: "Solution Design",
      description:
        "Our experts design a detailed blueprint and architecture for the proposed solution ensuring it meets all your needs.",
      imageUrl:
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=600",
    },
    {
      stepNumber: "STEP - 03",
      title: "Development",
      description:
        "Using agile methodologies, we develop the software with continuous feedback and iterative improvements.",
      imageUrl:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
    },
    {
      stepNumber: "STEP - 04",
      title: "Testing and QA",
      description:
        "Rigorous testing ensures the software is reliable, secure and performs optimally.",
      imageUrl:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=600",
    },
    {
      stepNumber: "STEP - 05",
      title: "Deployment",
      description:
        "We ensure seamless deployment and integration with your existing systems.",
      imageUrl:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600",
    },
    {
      stepNumber: "STEP - 06",
      title: "Support and Maintenance",
      description:
        "Our ongoing support and maintenance services ensure your software remains updated and performs optimally.",
      imageUrl:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <>
      <section className="bg-[#fff] py-16 px-4 sm:px-6 lg:py-24 lg:px-8 text-[#111e38] font-sans">
        {/* Outer Shell Matching Dashboard Card Style */}
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-[#123017] to-[#040914] rounded-[32px] p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle decorative glow overlays */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ffb057]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Header Block Section */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-white/10 pb-12 mb-12">
            <div className="lg:col-span-7 space-y-4">
              {/* Top Micro Badge */}
              <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 shadow-inner">
                <span className="text-[#ffb057] text-xs font-semibold">✳</span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/80">
                  6 Simple Steps
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.15] text-white">
                Simple process for fast and <br className="hidden sm:inline" />{" "}
                secure development
              </h2>
            </div>

            <div className="lg:col-span-5">
              <p className="text-white/60 text-sm sm:text-base font-medium leading-relaxed max-w-xl">
                We ensure seamless software development from start to finish,
                guaranteeing your success at every stage through structured
                system validations.
              </p>
            </div>
          </div>

          {/* Horizontal Scrollable/Grid Process Matrix Track */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 group"
              >
                <div className="space-y-4">
                  {/* Upper Meta Row */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black tracking-wider text-[#ffb057] bg-[#ffb057]/10 px-3 py-1 rounded-full">
                      {step.stepNumber}
                    </span>
                    <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-[#ffb057] transition-colors" />
                  </div>

                  {/* Text Data Copy Elements */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold tracking-tight text-white transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm font-medium leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Lower Profile Content Hub: Embedded Action Image Frame */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl overflow-hidden border border-white/10 shrink-0">
                    <img
                      src={step.imageUrl}
                      alt={step.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <span className="text-xs text-white/40 font-bold tracking-widest uppercase group-hover:text-white transition-colors">
                    In Progress
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
