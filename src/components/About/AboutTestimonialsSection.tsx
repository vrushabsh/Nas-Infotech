import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import DynamicBadge from "../ReusableComponents/DynamicBadge";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  description: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Liam Harper",
    role: "Dog Trainer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description:
      "The photos were sharp, clean, and made our website look premium. They truly captured the essence of our brand.",
  },
  {
    id: 2,
    name: "Ethan Brooks",
    role: "President of Sales",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
    description:
      "Their work brought a professional touch to our website and made it stand out instantly. The images perfectly reflected the personality of our brand. ",
  },
  {
    id: 3,
    name: "Noah Bennett",
    role: "Marketing Coordinator",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    description:
      "We loved how clean and professional the final shots turned out for our business. Each image added authenticity and strengthened our brand identity.",
  },
  {
    id: 4,
    name: "Maya Collins",
    role: "Nursing Assistant",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    description:
      "The design exceeded our expectations and gave our brand a polished, modern feel. Every detail was captured beautifully with outstanding clarity and style.",
  },
  {
    id: 5,
    name: "Zoe Mitchell",
    role: "Web Designer",
    image: "https://randomuser.me/api/portraits/women/26.jpg",
    description:
      "The photos looked crisp, elegant,and elevated the overall appearance of our site.They managed to showcase our vision in the most creative way possible.",
  },
  {
    id: 6,
    name: "Ava Morgan",
    role: "Medical Assistant",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description:
      "The visuals were stunning, high-quality,  and fit perfectly with our website theme.They truly understood our style and delivered beyond expectations.",
  },
];

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 1, 0.5, 1],
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 1, 0.5, 1],
    },
  }),
};

const AboutTestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Calculates structural index offsets to safely handle infinite loop rendering
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  // Safe cyclic accessors mapping out 3 dynamic active display indices
  const getActiveIndices = () => {
    const len = testimonials.length;
    const first = currentIndex;
    const second = (currentIndex + 1) % len;
    const third = (currentIndex + 2) % len;
    return [first, second, third];
  };

  const visibleIndices = getActiveIndices();

  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-24 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <DynamicBadge title={"Client Testimonials"} />
          </div>

          <h2 className="text-[#0a1118] text-3xl sm:text-5xl md:text-5xl font-bold leading-[1.1] tracking-tight">
            Hear from <span className="text-[#FFB057]">Our</span> happy{" "}
            <span className="text-[#FFB057]">Clients</span>
          </h2>

          <p className="max-w-3xl mx-auto text-slate-500 text-[15px] md:text-[16px] mt-6 leading-[1.9]">
            Discover what our valued clients say about their experience with our
            services. Their feedback reflects our commitment to quality,
            reliability, and exceptional support.
          </p>
        </div>

        {/* CAROUSEL WRAPPER CONTAINER */}
        <div className="relative px-2 sm:px-12">
          {/* Main Cards Window */}
          <div className="overflow-hidden py-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <AnimatePresence
                initial={false}
                mode="popLayout"
                custom={direction}
              >
                {visibleIndices.map((itemIndex, structuralPosition) => {
                  const item = testimonials[itemIndex];
                  return (
                    <motion.div
                      key={`${item.id}-${structuralPosition}`}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      whileHover={{ y: -6 }}
                      // Controls responsive breakpoints: Only show 2nd and 3rd slots above mobile layout viewports
                      className={`group bg-white rounded-[28px] p-8 border border-slate-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between ${
                        structuralPosition === 1 ? "hidden sm:flex" : ""
                      } ${structuralPosition === 2 ? "hidden md:flex" : ""}`}
                    >
                      <div>
                        {/* Quote Handle Decorator */}
                        <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-[#FFB057]/10 flex items-center justify-center">
                          <Quote className="w-5 h-5 text-[#FFB057] fill-[#FFB057]" />
                        </div>

                        {/* Profile Header */}
                        <div className="flex items-center gap-3 mb-6">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                          />
                          <div>
                            <h3 className="text-[15px] font-bold text-slate-900 leading-none">
                              {item.name}
                            </h3>
                            <p className="text-xs text-slate-400 mt-1">
                              {item.role}
                            </p>
                          </div>
                        </div>

                        {/* Stars */}
                        <div className="flex items-center gap-0.5 mb-5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-slate-900 stroke-slate-900"
                            />
                          ))}
                        </div>

                        {/* Review Content Strings */}
                        <p className="text-[14px] text-slate-500 leading-[1.9]">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* CONTROLS (Floating Navigation Arrows) */}
          <button
            onClick={handlePrev}
            className="absolute left-[-15px] sm:left-[-20px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-slate-200/80 shadow-md flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-[-15px] sm:right-[-20px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white border border-slate-200/80 shadow-md flex items-center justify-center text-slate-700 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* PAGINATION DOTS INDICATOR */}
        <div className="flex items-center justify-center gap-2 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-6 bg-[#FFB057]"
                  : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonialsSection;
