import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  path: string;
  hasDropdown?: boolean;
  isActive?: boolean;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    { name: "Home", path: "/", isActive: true },
    { name: "About", path: "/about" },
    { name: "Industries", path: "/industries" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
  ];

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <div className="absolute top-0 left-0 w-full z-50 flex flex-col">
      {/* 2. Main Navigation Bar */}
      <nav className="w-full bg-black/10 backdrop-blur-[4px] border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 lg:py-5 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-3 cursor-pointer z-50">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFB057] flex items-center justify-center text-black">
              <div className="grid grid-cols-2 gap-[2px] rotate-45 scale-75 sm:scale-90">
                <span className="w-2 h-2 rounded-sm border-2 border-black"></span>
                <span className="w-2 h-2 rounded-sm border-2 border-black"></span>
                <span className="w-2 h-2 rounded-sm border-2 border-black"></span>
                <span className="w-2 h-2 rounded-sm border-2 border-black"></span>
              </div>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-white tracking-wide">
              NAS-INFOTECH<span className="text-[#FFB057]">.</span>
            </span>
          </div>

          {/* Desktop Navigation Menu (hidden on mobile/tablet) */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-1 group/item"
              >
                <Link
                  to={item.path}
                  className={`font-semibold text-[15px] transition-colors duration-200 tracking-wide ${
                    item.isActive
                      ? "text-[#FFB057]"
                      : "text-white hover:text-[#FFB057]"
                  }`}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 group-hover/item:translate-y-[2px] ${
                      item.isActive ? "text-[#FFB057]" : "text-white/80"
                    }`}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button Actions (hidden on mobile/tablet) */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/contact"
              className="bg-[#FFB057] text-white font-bold px-[26px] py-3.5 rounded-full text-[14px] hover:bg-[#e09c4d] transition-colors duration-200 tracking-wide shadow-md"
            >
              Contact Us
            </Link>
            <button
              aria-label="More details"
              className="w-12 h-12 rounded-full bg-[#FFB057] text-white flex items-center justify-center hover:bg-[#e09c4d] transition-colors duration-200 shadow-md"
            >
              <ArrowUpRight className="w-[18px] h-[18px] stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile/Tablet Hamburger Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#FFB057] text-[#0a1118] hover:bg-[#e09c4d] transition-colors focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 stroke-[2.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[2.5]" />
            )}
          </button>
        </div>
      </nav>

      {/* 3. Sliding Mobile Drawer Overlay (Matches image color layout) */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a1118]/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-[340px] z-50 bg-[#FFB057] text-[#0a1118] p-6 pt-24 shadow-2xl lg:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Custom Mobile Menu Items */}
        <ul className="flex flex-col gap-5 mt-4">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="border-b border-[#0a1118]/10 pb-3 last:border-0"
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => item.hasDropdown && toggleDropdown(item.name)}
              >
                <Link
                  to={item.hasDropdown ? "#" : item.path}
                  onClick={(e) => {
                    if (item.hasDropdown) e.preventDefault();
                    else setIsOpen(false);
                  }}
                  className={`text-lg font-bold tracking-wide transition-colors ${
                    item.isActive
                      ? "text-white"
                      : "text-[#0a1118] hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      openDropdown === item.name
                        ? "rotate-180 text-white"
                        : "text-[#0a1118]"
                    }`}
                  />
                )}
              </div>

              {/* Mobile Accordion Submenu Items (if expanded) */}
              {item.hasDropdown && openDropdown === item.name && (
                <ul className="mt-3 pl-4 flex flex-col gap-2 border-l-2 border-[#0a1118]/20 animate-fadeIn">
                  <li>
                    <Link
                      to={`${item.path}/sub1`}
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-semibold text-[#0a1118]/80 hover:text-white"
                    >
                      Overview Options
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={`${item.path}/sub2`}
                      onClick={() => setIsOpen(false)}
                      className="text-sm font-semibold text-[#0a1118]/80 hover:text-white"
                    >
                      Detailed Layouts
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
