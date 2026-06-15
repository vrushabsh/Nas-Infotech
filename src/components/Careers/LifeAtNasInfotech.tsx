import React from "react";
import { motion, type Variants } from "framer-motion";

interface TeamMember {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
}

const LifeAtNasInfotech: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: "inclusive-environment",
      title: "Inclusive Environment",
      description:
        "We embrace diversity and foster an inclusive culture where everyone is respected and valued. We believe that a variety of perspectives leads to innovative solutions and a more dynamic workplace.",
      imageSrc:
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: "fun-engaging",
      title: "Fun & Engaging",
      description:
        "We prioritize fun and engagement through regular team-building activities, social events and hackathons. Whether it's a casual Friday get-together or an offsite retreat, there's always something exciting happening.",
      imageSrc:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: "professional-development",
      title: "Professional Development",
      description:
        "We are committed to the continuous growth and development of our team members. We offer numerous opportunities to enhance your skills and advance your career with us.",
      imageSrc:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    },

    {
      id: "work-life-balance",
      title: "Work-Life Balance",
      description:
        "We understand the importance of maintaining a healthy work-life balance. Flexible schedules and a supportive culture help our employees thrive both personally and professionally.",
      imageSrc:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const containerStagger: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  // Fixed spacing after removing one card
  const layoutStaggerOffsets = [
    "lg:translate-y-10",
    "lg:translate-y-28",
    "lg:translate-y-0",
    "lg:translate-y-20",
  ];

  const layoutZIndexes = [
    "z-10",
    "z-20",
    "z-30",
    "z-40",
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-20 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4 mb-16 lg:mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerStagger}
        >
          <motion.h2
            className="text-slate-900 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            variants={fadeUp}
          >
            Life At NAS Infotech
          </motion.h2>

          <motion.p
            className="text-slate-500 text-sm sm:text-base leading-relaxed max-w-3xl font-medium"
            variants={fadeUp}
          >
            At NAS Infotech, we believe that work should be more than just a
            job — it should be a place where you can thrive, grow and enjoy
            every day.
          </motion.p>
        </motion.div>

        {/* CARDS */}
        <motion.div
          className="
            flex flex-wrap justify-center items-start
            gap-6 lg:gap-2
            relative isolate
            pb-20
          "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={containerStagger}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              whileHover={{
                y: -14,
                scale: 1.03,
                zIndex: 999,
                transition: {
                  duration: 0.35,
                  ease: [0.16, 1, 0.3, 1],
                },
              }}
              className={`
                w-[280px]
                rounded-[26px]
                overflow-hidden
                relative
                group
                cursor-pointer
                border border-[#f4d9c4]
                bg-[#fff8f2]
                shadow-[0_10px_40px_rgba(255,165,90,0.08)]
                hover:shadow-[0_18px_50px_rgba(255,165,90,0.18)]
                transition-all duration-500
                ${layoutStaggerOffsets[index]}
                ${layoutZIndexes[index]}
              `}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 40,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.65,
                    ease: [0.16, 1, 0.3, 1],
                  },
                },
              }}
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={member.imageSrc}
                  alt={member.title}
                  className="
                    w-full h-[260px] object-cover
                    group-hover:scale-110
                    transition-transform duration-700 ease-out
                  "
                  loading="lazy"
                />

                {/* subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>

              {/* CONTENT */}
              <div className="p-5 bg-[#fff8f2]">
                <h3 className="font-bold text-[18px] sm:text-[20px] text-slate-900 mb-3 leading-tight">
                  {member.title}
                </h3>

                <p className="text-[13px] sm:text-[14px] leading-6 text-slate-600">
                  {member.description}
                </p>

                {/* BUTTON */}
                <div className="mt-5 flex justify-end">
                  <div
                    className="
                      w-9 h-9 rounded-full
                      bg-[#ffe8d4]
                      border border-[#f4d9c4]
                      flex items-center justify-center
                      text-slate-700
                      group-hover:bg-[#f59e0b]
                      group-hover:text-white
                      transition-all duration-300
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="group-hover:rotate-45 transition-transform duration-300"
                    >
                      <path
                        d="M7 17L17 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />

                      <path
                        d="M7 7H17V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              {/* glow effect */}
              <div
                className="
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  transition-opacity duration-500
                  pointer-events-none
                  bg-gradient-to-tr from-orange-100/20 via-transparent to-orange-200/20
                "
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LifeAtNasInfotech;