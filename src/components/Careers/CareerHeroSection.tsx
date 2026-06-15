const CareerHeroSection = () => {
  return (
    <div className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="/Career/CareerHome-1.avif"
        alt="about"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-[65px] font-bold mb-4 text-center px-4">Careers</h1>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 sm:gap-3 text-sm sm:text-lg md:text-xl font-medium text-center px-4">
          <span>Home</span>
          <span>/</span>
          <span>Careers</span>
        </div>
      </div>
    </div>
  );
};

export default CareerHeroSection;
