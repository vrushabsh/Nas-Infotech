 
const ServicesHome = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

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
        <h1 className="text-7xl md:text-[65px] font-bold mb-3">
          Our services 
        </h1>
       

        {/* Breadcrumb */}
        <div className="flex items-center gap-3 text-lg ">
          <span>Home / Services</span>
        </div>

      </div>

    </div>
  )
}

export default ServicesHome