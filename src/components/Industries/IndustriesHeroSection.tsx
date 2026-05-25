const IndustriesHeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/About/aboutHerosection.jpg"
        alt="about"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        {/* Heading */}
        <h1 className="text-7xl md:text-8xl font-bold mb-4">Our Industry</h1>

        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-xl font-medium">
          <span>Home</span>
          <span>/</span>
          <span>Our Industry</span>
        </div>
      </div>
    </div>
  );
};

export default IndustriesHeroSection;
