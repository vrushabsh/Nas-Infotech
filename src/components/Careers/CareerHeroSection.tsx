const CareerHeroSection = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
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
        <h1 className="text-[55px] md:text-[65px] font-bold mb-4">Careers</h1>

        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-xl font-medium">
          <span>Home</span>
          <span>/</span>
          <span>Careers</span>
        </div>
      </div>
    </div>
  );
};

export default CareerHeroSection;
