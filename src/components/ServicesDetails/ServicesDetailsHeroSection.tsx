import { motion } from "framer-motion";

type HeroSectionProps = {
  title: string;
  description: string;
  image?: string;
};

const ServicesDetailsHeroSection = ({
  title,
  description,
  image,
}: HeroSectionProps) => {
  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#101828] font-sans antialiased relative overflow-x-hidden">
      {/* Navbar Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[90px] bg-gradient-to-b from-black/80 via-black/50 to-transparent pointer-events-none z-10" />

      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-rose-200/40 via-orange-100/30 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
              <div className="w-2 h-2 rounded-full bg-[#FF7A59]" />

              <span className="text-sm font-semibold tracking-wide text-[#0F172A]">
                Our Services
              </span>
            </div>

            {/* Dynamic Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-[#0F172A]">
              {title}
            </h1>

            {/* Dynamic Description */}
            <p className="mt-6 text-[16px] sm:text-[18px] leading-[32px] text-gray-600 max-w-2xl">
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">
              <button
                className="
                  px-8
                  py-4
                  rounded-full
                  bg-[#0F172A]
                  text-white
                  font-semibold
                  shadow-lg
                  hover:scale-105
                  transition-all
                  duration-300
                "
              >
                Get Started
              </button>

              <button
                className="
                  px-8
                  py-4
                  rounded-full
                  border
                  border-gray-300
                  bg-white
                  text-[#0F172A]
                  font-semibold
                  hover:bg-gray-50
                  transition-all
                  duration-300
                "
              >
                Learn More
              </button>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
            }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200/30 to-rose-200/20 blur-3xl rounded-full scale-110" />

            {/* Image Card */}
            <div
              className="
                relative
                overflow-hidden
                rounded-[32px]
                shadow-[0_20px_80px_rgba(0,0,0,0.12)]
                border
                border-white/50
                bg-white
              "
            >
              <img
                src={
                  image ||
                  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
                }
                alt={title}
                className="w-full h-[550px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ServicesDetailsHeroSection;
