import React from "react";

export default function Footer() {
  return (
    <div className="relative w-full bg-[#031d0e] text-white font-sans overflow-hidden">
      {/* BACKGROUND GRAPHIC: Subtle geometric chevron/diamond grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30Z' fill='none' stroke='%23ffffff' stroke-width='1.5'/%3E%3C/svg%3E")`,
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-10 relative z-10">
        {/* UPPER ROW: Grid Information Block */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6 pb-16 border-b border-white/10">
          {/* Column 1: Contact Details */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xl font-bold tracking-tight text-white">
              Contact Information
            </h4>
            <div className="space-y-5 text-[15px]">
              {/* Address */}
              <div className="space-y-1">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Our Office
                </p>
                <p className="text-slate-300 font-medium leading-relaxed">
                  06th Floor, Stellar Spaces 501,
                  <br />
                  opposite Zensar Company,
                  <br /> Rakshak Nagar, Kharadi, Pune,
                  <br /> Maharashtra 411014
                </p>
              </div>

              {/* Phone Number */}
              <div className="space-y-1">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Phone Number
                </p>
                <a
                  href="tel:+919022844929"
                  className="text-xl sm:text-2xl font-black tracking-tight text-white hover:text-[#ffb057] transition-colors block"
                >
                  +91 9022844929
                </a>
              </div>

              {/* Email Address */}
              <div className="space-y-1">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Email Address
                </p>
                <a
                  href="mailto:hr@nas-infotech.com"
                  className="text-lg font-bold text-white hover:text-[#ffb057] transition-colors break-all block"
                >
                  hr@nas-infotech.com
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 lg:pl-6 space-y-6">
            <h4 className="text-xl font-bold tracking-tight text-white">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-[15px] font-medium text-slate-300">
              {[
                "Home",
                "About",
                "Services",
                "Industries",
                "Careers",
                "Contact",
              ].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLocaleLowerCase()}`}
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-[#ffb057] transition-colors duration-200 group"
                  >
                    <span className="text-[#ffb057] transform group-hover:translate-x-0.5 transition-transform duration-200">
                      •
                    </span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-xl font-bold tracking-tight text-white">
              Our Services
            </h4>
            <ul className="space-y-3.5 text-[15px] font-medium text-slate-300">
              {[
                "Software Development",
                "Artificial Intelligence And ML",
                "Web Development",
                "Software Testing And QA",
                "Devops",
              ].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-[#ffb057] transition-colors duration-200 group"
                  >
                    <span className="text-[#ffb057] transform group-hover:translate-x-0.5 transition-transform duration-200">
                      •
                    </span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="text-xl font-bold tracking-tight text-white">
              Subscribe to Our Newsletter
            </h4>
            <p className="text-slate-400 text-[15px] leading-relaxed">
              Subscribe to receive insurance tips, updates, and special offers
              directly in your inbox.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative mt-2"
            >
              <input
                type="email"
                placeholder="Enter Your E-mail"
                className="w-full bg-transparent border-b border-white/20 pb-4 pr-12 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#ffb057] transition-colors"
              />
              <button
                type="submit"
                aria-label="Submit newsletter"
                className="absolute right-0 bottom-3.5 w-9 h-9 bg-[#ffb057] hover:bg-[#e09c4d] text-black rounded-xl flex items-center justify-center transition-colors shadow-md active:scale-95"
              >
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transform rotate-45 -translate-x-0.5 translate-y-0.5"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* MIDDLE ROW: Branding and Social Links row */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-white/5">
          {/* Logo Frame */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-[#ffb057] flex items-center justify-center text-black">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <span className="text-2xl font-black tracking-tight text-white">
              NAS-INFOTECH<span className="text-[#ffb057]">.</span>
            </span>
          </div>

          {/* Social Icons Stack */}
          <div className="flex items-center gap-6">
            <span className="text-base font-bold text-white tracking-wide">
              Follows On Socials:
            </span>
            <div className="flex items-center gap-2.5">
              {[
                {
                  label: "Facebook",
                  path: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.95z",
                  isFill: true,
                  link: "https://www.facebook.com/people/Nas-Infotech-Pvt-Ltd/61573733739516/?rdid=8j1dXCe8NqJOgJpL&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19A8t2aXHc%2FF",
                },
                {
                  label: "Dribbble",
                  path: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
                  isFill: false,
                  lines: true,
                  link: "#",
                },
                {
                  label: "Instagram",
                  path: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z M17.5 6.5h.01",
                  isFill: false,
                  rect: true,
                  link: "https://www.instagram.com/nas.infotech?igsh=bTBkZ3Z3cXE5ZDR3",
                },
                {
                  label: "LinkedIn",
                  path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
                  isFill: true,
                  link: "https://www.linkedin.com/company/nas-infotech-pvt-ltd/?viewAsMember=true",
                },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 hover:bg-[#ffb057] hover:text-black hover:border-[#ffb057] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={social.isFill ? "currentColor" : "none"}
                    stroke={social.isFill ? "none" : "currentColor"}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {social.rect && (
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                    )}
                    {social.lines && <circle cx="12" cy="12" r="10"></circle>}
                    {social.lines && (
                      <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56"></path>
                    )}
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Copyright & Legal Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-sm font-medium text-slate-400 gap-4">
          <p>© Copyright 2026 All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="w-1.5 h-1.5 rounded-full bg-[#ffb057]" />
            <a href="#" className="hover:text-white transition-colors">
              Legal Documents
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
