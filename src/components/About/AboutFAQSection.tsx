import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const faqData = [
  {
    id: 1,
    question: "What types of insurance policies do you offer?",
    answer:
      "Yes, our dedicated support team is available 24/7 to assist you with claims, policy questions, and any assistance you may need anytime.",
  },
  {
    id: 2,
    question: "How can I purchase insurance policy online?",
    answer:
      "You can easily purchase insurance policies online through our secure platform by comparing plans and completing a quick application process.",
  },
  {
    id: 3,
    question: "Do you provide support services twenty four seven?",
    answer:
      "Absolutely. Our support specialists are available round the clock to help you with policy management and claims support.",
  },
  {
    id: 4,
    question: "Can I customize my insurance coverage plan?",
    answer:
      "Yes, we provide flexible insurance plans that can be customized according to your personal or business requirements.",
  },
  {
    id: 5,
    question: "How long does claim approval process take?",
    answer:
      "Most insurance claims are processed quickly depending on documentation and policy verification procedures.",
  },
];

const AboutFAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden bg-[#f8f6f2] py-24 px-6 md:px-10">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(#0b0d39 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      {/* Floating Dot */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-1/3 top-1/2 w-3 h-3 rounded-full bg-[#ffb357]"
      />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.9fr_1.2fr] gap-16 items-start">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-slate-200 bg-white px-4 py-2 rounded-full text-sm font-medium text-slate-700 shadow-sm">
            <span className="text-green-700">✳</span>
            Frequently Asked Questions
          </div>

          {/* Heading */}
          <h2 className="text-[44px] md:text-[68px] leading-[1.05] tracking-[-2px] font-bold text-[#0a0b35] mt-8 max-w-xl">
            Quick answers to your questions
          </h2>

          {/* Description */}
          <p className="text-slate-500 text-[18px] leading-[1.9] mt-8 max-w-lg">
            Find clear and helpful answers to the most common questions about
            our insurance services, coverage options, claims process.
          </p>

          {/* Contact Card */}
          <motion.div
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            className="bg-[#f1ede8] rounded-[24px] p-8 mt-12 max-w-md shadow-sm"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-sm">
                <HelpCircle className="w-8 h-8 text-[#ffb357]" />
              </div>

              <div>
                <h3 className="text-[32px] font-bold text-[#0a0b35] leading-tight">
                  Still Have Questions ?
                </h3>

                <p className="text-slate-500 text-[17px] leading-[1.8] mt-3">
                  What question or topic would you like assistance with today?
                </p>
              </div>
            </div>

            <button className="w-full mt-8 bg-[#ffb357] hover:bg-[#f5a63e] transition-all duration-300 rounded-full py-5 text-[#0a0b35] font-bold text-lg shadow-md hover:shadow-xl">
              Get In Touch
            </button>
          </motion.div>
        </motion.div>

        {/* RIGHT FAQ */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={item.id}
                layout
                transition={{
                  layout: {
                    duration: 0.45,
                    ease: "easeInOut",
                  },
                }}
                className={`rounded-[20px] overflow-hidden border transition-all duration-500
                  ${
                    isOpen
                      ? "bg-gradient-to-r from-[#062f13] to-[#013b11] border-transparent shadow-xl"
                      : "bg-[#f1ede8] border-transparent hover:bg-white"
                  }
                `}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between px-8 py-7 text-left"
                >
                  <span
                    className={`text-[24px] leading-[1.5] font-semibold pr-5 transition-colors duration-300
                      ${
                        isOpen
                          ? "text-white"
                          : "text-[#0a0b35]"
                      }
                    `}
                  >
                    {item.id}. {item.question}
                  </span>

                  <div
                    className={`flex items-center justify-center transition-all duration-300
                      ${
                        isOpen
                          ? "text-white rotate-180"
                          : "text-[#0a0b35]"
                      }
                    `}
                  >
                    {isOpen ? (
                      <Minus className="w-7 h-7" strokeWidth={2.5} />
                    ) : (
                      <Plus className="w-7 h-7" strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="border-t border-white/10 px-8 py-7">
                        <p className="text-white/90 text-[18px] leading-[2] max-w-3xl">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFAQSection;