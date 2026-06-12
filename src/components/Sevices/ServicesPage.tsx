import { motion } from "framer-motion";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ServicesPage() {
  const [services, setServices] = useState<any[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("/Data/servicesdetails.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.services);
      })
      .catch((err) => {
        console.error("Error loading services:", err);
      });
  }, []);

  return (
    <section className="w-full bg-[#f7f8fc] py-16 sm:py-24 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Existing Header Section */}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 80, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative h-[470px] rounded-[28px] overflow-hidden bg-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100"
            >
              <div className="relative w-full h-full overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.serviceName}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.35 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white rounded-[24px] p-5 shadow-xl z-20"
              >
                <h3 className="text-[20px] font-bold text-[#0a123d] leading-tight">
                  {service.serviceName}
                </h3>

                <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500">
                  <p className="text-[14px] leading-[24px] text-[#666] mt-4">
                    {service.overview?.description}
                  </p>
                </div>

                <div className="w-full h-[1px] bg-gray-200 my-4" />

                <Link to={`/services/${service.slug}`}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="flex items-center justify-between cursor-pointer"
                  >
                    <span className="text-[15px] font-semibold text-[#0a123d] hover:text-[#FFB057] transition-colors">
                      Learn More
                    </span>

                    <motion.div
                      whileHover={{
                        rotate: 45,
                        scale: 1.08,
                      }}
                      className="w-10 h-10 rounded-full bg-[#FFB057] flex items-center justify-center shadow-md"
                    >
                      <ArrowUpRight size={18} className="text-[#0a123d]" />
                    </motion.div>
                  </motion.div>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
