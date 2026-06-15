 
const ServicesHome = () => {
  return (
    <div className="relative w-full min-h-[60vh] sm:min-h-[70vh] md:h-screen overflow-hidden">

      {/* Background Image */}
      <img
        src="/Services/ourservices-1.jpeg"
        alt="about"
        className="w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">

        
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 text-center px-4">
          Our services 
        </h1>
       

        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-sm sm:text-base md:text-lg text-center px-4">
          <span>Home / Services</span>
        </div>

      </div>

    </div>
  )
}

export default ServicesHome