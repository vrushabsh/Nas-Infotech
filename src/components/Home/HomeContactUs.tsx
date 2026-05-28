import React, { useState } from "react";
import { Phone } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

const HomeContactUs: React.FC = () => {
  // Local form interaction states
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);


  // Handle value mapping from native input tracks safely
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Process system integration triggers on form dispatch
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // 1. Point this URL to your running backend server location
      const response = await fetch("http://localhost:5000/api/home", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message submitted and sent successfully!");
        // Clear form state inputs
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        alert(data.message || "Something went wrong on the server.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Could not connect to the mail server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full relative min-h-[720px] lg:h-[800px] flex items-center bg-[#0a1b10] overflow-hidden py-12 lg:py-0 font-sans">
      {/* ================= BACKGROUND GRAPHIC IMAGE OVERLAY CONTAINER ================= */}
      <div className="absolute inset-0 w-full h-full z-0">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1600"
          alt="Software architect team planning digital infrastructure solutions layout"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d2a17]/95 via-[#0d2a17]/80 to-black/40 lg:to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center">
        {/* ================= LEFT CONTENT COLUMN ================= */}
        <div className="lg:col-span-6 space-y-6 lg:pr-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-xs sm:text-sm font-semibold tracking-wide text-white shadow-sm">
            <span className="text-[#FFB057] text-sm">✲</span>
            Contact Us Today
          </div>

          <h2 className="text-white text-3xl sm:text-4xl md:text-4xl font-black leading-[1.15] tracking-tight max-w-xl">
            Have technical questions? connect with us for support
            <span className="text-[#FFB057]">.</span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-medium max-w-lg">
            Connect with our systems engineers and scale your infrastructure. Experience seamless integration support and expert guidance every single step of the way.
          </p>

          <div className="bg-white/10 border border-white/10 backdrop-blur-md rounded-[24px] p-6 max-w-sm shadow-xl space-y-4 mt-8">
            <h3 className="text-white font-bold text-base sm:text-lg tracking-tight">
              Ready to scope your project? Call us!
            </h3>
            <div className="w-full h-[1px] bg-white/10"></div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FFB057] flex items-center justify-center text-black shadow-md shrink-0">
                <Phone className="w-5 h-5 fill-current" />
              </div>
              <div>
                <span className="text-gray-300 text-xs font-semibold uppercase tracking-wider block mb-0.5">
                  Tech Helpline
                </span>
                <a
                  href="tel:+1123456789"
                  className="text-white font-black text-base sm:text-lg hover:text-[#FFB057] transition-colors duration-200"
                >
                  Call: +(123) 456-789
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= RIGHT CONTENT COLUMN (FORM CARD) ================= */}
        <div className="lg:col-span-6 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-[560px] bg-white rounded-[32px] p-6 sm:p-8 md:p-10 shadow-2xl border border-gray-100/50">
            <h3 className="text-[#0a1118] text-3xl font-extrabold tracking-tight mb-8">
              Request Tech Architecture Proposal
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="firstName"
                    className="text-[#0a1118] text-xs sm:text-sm font-bold tracking-wide"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="Enter First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-black placeholder-gray-400 outline-none focus:border-[#FFB057] focus:ring-1 focus:ring-[#FFB057] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="lastName"
                    className="text-[#0a1118] text-xs sm:text-sm font-bold tracking-wide"
                  >
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    placeholder="Enter Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-black placeholder-gray-400 outline-none focus:border-[#FFB057] focus:ring-1 focus:ring-[#FFB057] transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-[#0a1118] text-xs sm:text-sm font-bold tracking-wide"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-black placeholder-gray-400 outline-none focus:border-[#FFB057] focus:ring-1 focus:ring-[#FFB057] transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-[#0a1118] text-xs sm:text-sm font-bold tracking-wide"
                  >
                    Corporate Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-black placeholder-gray-400 outline-none focus:border-[#FFB057] focus:ring-1 focus:ring-[#FFB057] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-[#0a1118] text-xs sm:text-sm font-bold tracking-wide"
                >
                  Project Scope & Technical Requirements
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about your tech stack, system requirements, or architectural challenges..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-black placeholder-gray-400 outline-none focus:border-[#FFB057] focus:ring-1 focus:ring-[#FFB057] resize-none transition-all"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`inline-flex items-center justify-center bg-[#FFB057] hover:bg-[#e09c4d] text-[#0a1118] font-black px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 shadow-sm active:scale-[0.98] ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}>
                  {isSubmitting ? "Submitting..." : "Submit Message"}
                </button>
              </div>
            </form>

            <div className="w-full h-[1px] bg-gray-100 my-6"></div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-[#0a1118] text-base font-black">
                      4.9/5
                    </span>
                    <div className="flex items-center text-[#FFB057] text-sm tracking-tighter">
                      {["s1", "s2", "s3", "s4", "s5"].map((star) => (
                        <span key={star}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs font-semibold tracking-wide">
                    Based on 250+ Partner Reviews
                  </p>
                </div>
              </div>

              <div className="hidden sm:block h-8 w-[1px] bg-gray-200"></div>

              <p className="text-gray-400 text-xs font-semibold leading-relaxed max-w-[180px]">
                Trusted by CTOs and Engineering Leaders globally.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContactUs;