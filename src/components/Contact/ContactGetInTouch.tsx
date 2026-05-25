import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  emailAddress: string;
  message: string;
}

const ContactGetInTouch: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    emailAddress: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // Add logic here to wire up to an API endpoint
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ================= 1. UPPER HORIZONTAL CONTACT INFO BAR ================= */}
        <div className="bg-[#f9f8f4] rounded-[24px] p-6 sm:p-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center mb-16 sm:mb-20 shadow-sm border border-gray-100">
          {/* Phone Block */}
          <div className="flex items-center gap-4 md:px-4">
            <div className="w-12 h-12 rounded-full bg-[#FFB057]/20 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-[#e09c4d]" />
            </div>
            <div>
              <p className="text-black text-sm uppercase tracking-wider font-bold">
                Phone Number
              </p>
              <a
                href="tel:+919022844929"
                className="text-[#0a1118] text-base sm:text-sm hover:text-[#e09c4d] transition-colors"
              >
                +91 9022844929
              </a>
            </div>
          </div>

          {/* Email Block */}
          <div className="flex items-center gap-4 md:px-6 md:border-l md:border-gray-300/60">
            <div className="w-12 h-12 rounded-full bg-[#FFB057]/20 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-[#e09c4d]" />
            </div>
            <div>
              <p className="text-black text-sm uppercase tracking-wider font-bold">
                Email Address
              </p>
              <a
                href="mailto:hr@nas-infotech.com"
                className="text-[#0a1118] text-base sm:text-sm hover:text-[#e09c4d] transition-colors break-all"
              >
                hr@nas-infotech.com
              </a>
            </div>
          </div>

          {/* Location Block */}
          <div className="flex items-center gap-4 md:px-6 md:border-l md:border-gray-300/60">
            <div className="w-12 h-12 rounded-full bg-[#FFB057]/20 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#e09c4d]" />
            </div>
            <div>
              <p className="text-black text-sm font-bold uppercase tracking-wider font-bold">
                Our Location
              </p>
              <p className="text-[#0a1118] text-sm sm:text-sm leading-tight">
                06th Floor, Stellar Spaces 501, opposite Zensar Company, Rakshak
                Nagar, Kharadi, Pune, Maharashtra 411014
              </p>
            </div>
          </div>
        </div>

        {/* ================= 2. LOWER TWO-COLUMN SPLIT CONTAINER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* --- LEFT SIDE: HEADERS & INTERACTIVE MAP MAPBOX --- */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            {/* Badge Indicator */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f9f8f4] border border-gray-200 text-xs sm:text-sm font-semibold tracking-wide text-gray-800 shadow-sm">
              <span className="text-[#113217] text-sm">✲</span>
              Contact Us
            </div>

            {/* Title & Subtext */}
            <div className="space-y-4">
              <h2 className="text-[#0a1118] text-3xl sm:text-4xl md:text-4xl font-black leading-[1.15] tracking-tight">
                Let's talk about protecting what matters most
              </h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed font-medium max-w-xl">
                Whether you have questions, need a quote, or want expert advice,
                we're here to listen and support you every step of the way.
              </p>
            </div>

            {/* Structured Google Maps Container Map Canvas Preview */}
            <div className="w-full aspect-[4/3] rounded-[12px] overflow-hidden shadow-sm border border-gray-200 relative group">
              <iframe
                title="Office Location Map"
                src="https://maps.google.com/maps?q=06th%20Floor,%20Stellar%20Spaces%20501,%20opposite%20Zensar%20Company,%20Rakshak%20Nagar,%20Kharadi,%20Pune,%20Maharashtra%20411014&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale-[15%] group-hover:grayscale-0 transition-all duration-500"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* --- RIGHT SIDE: COMPREHENSIVE INPUT ACTION FORM --- */}
          <div className="lg:col-span-6 bg-[#f9f8f4] rounded-[12px] p-6 sm:p-10 lg:p-12 border border-gray-100/80 shadow-sm">
            <h3 className="text-[#0a1118] text-3xl sm:text-3xl tracking-tight mb-3">
              Get in Touch
            </h3>
            <p className="text-gray-500 text-sm sm:text-sm leading-relaxed mb-8">
              Connect with our experts for fast responses, clear advice, and
              dependable solutions.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {/* Row 1: First Name & Last Name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-gray-800 text-xs sm:text-sm tracking-wide">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    placeholder="Enter First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-white text-gray-800 text-sm rounded-xl px-4 py-3.5 border border-gray-200 focus:outline-none focus:border-[#FFB057] focus:ring-1 focus:ring-[#FFB057] placeholder-gray-400 font-medium transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-800 text-xs sm:text-sm tracking-wide">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    placeholder="Enter Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-white text-gray-800 text-sm rounded-xl px-4 py-3.5 border border-gray-200 focus:outline-none focus:border-[#FFB057] focus:ring-1 focus:ring-[#FFB057] placeholder-gray-400 font-medium transition-all"
                  />
                </div>
              </div>

              {/* Row 2: Phone Number & Email Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-gray-800 text-xs sm:text-sm tracking-wide">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    required
                    placeholder="Enter Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full bg-white text-gray-800 text-sm rounded-xl px-4 py-3.5 border border-gray-200 focus:outline-none focus:border-[#FFB057] focus:ring-1 focus:ring-[#FFB057] placeholder-gray-400 font-medium transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-800 text-xs sm:text-sm tracking-wide">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="emailAddress"
                    required
                    placeholder="Enter Email Address"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    className="w-full bg-white text-gray-800 text-sm rounded-xl px-4 py-3.5 border border-gray-200 focus:outline-none focus:border-[#FFB057] focus:ring-1 focus:ring-[#FFB057] placeholder-gray-400 font-medium transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Message Textbox Area */}
              <div className="space-y-2">
                <label className="text-gray-800 text-xs sm:text-sm tracking-wide">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Any Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-white text-gray-800 text-sm rounded-xl px-4 py-3.5 border border-gray-200 focus:outline-none focus:border-[#FFB057] focus:ring-1 focus:ring-[#FFB057] placeholder-gray-400 font-medium transition-all resize-none"
                />
              </div>

              {/* Actions Footer Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-[#FFB057] hover:bg-[#e09c4d] text-[#0a1118] font-black px-8 py-4 rounded-full text-sm tracking-wide transition-all duration-300 shadow-sm active:scale-[0.98]"
                >
                  Submit Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactGetInTouch;
