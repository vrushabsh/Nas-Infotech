import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";

interface NavItem {
  name: string;
  path: string;
  hasDropdown?: boolean;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // Hook into the current route location
  const location = useLocation();

  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Industries", path: "/industries" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const isRouteActive = (itemPath: string) => {
    if (itemPath === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(itemPath);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 flex flex-col transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-0" : "bg-transparent py-2"
      }`}
    >
      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-colors duration-300 ${isScrolled ? "border-b border-slate-100" : "border-b border-white/5"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 lg:py-5 flex items-center justify-between">
          
          {/* Brand Logo Wrapper */}
          <Link to="/" className="flex items-center cursor-pointer z-50 select-none shrink-0">
            <div className="w-44 sm:w-50 h-11 sm:h-14 flex items-center justify-start overflow-hidden">
              <img
                src={isScrolled ? "/logo.png" : "/logo1.png"}
                alt="NAS-INFOTECH Logo"
                className="w-full h-full object-cover object-left transition-all duration-300"
              />
            </div>
          </Link>

          {/* Desktop Navigation Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const active = isRouteActive(item.path);
              return (
                <li
                  key={item.name}
                  className="flex items-center gap-1 group/item"
                >
                  <Link
                    to={item.path}
                    className={`font-semibold text-[15px] transition-colors duration-200 tracking-wide ${
                      active
                        ? "text-[#FFB057]"
                        : isScrolled
                          ? "text-slate-700 hover:text-[#FFB057]"
                          : "text-white hover:text-[#FFB057]"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-all duration-200 group-hover/item:translate-y-[2px] ${
                        active
                          ? "text-[#FFB057]"
                          : isScrolled
                            ? "text-slate-700"
                            : "text-white/80"
                      }`}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA Button Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/contact"
              className="bg-[#FFB057] text-black font-bold px-[26px] py-3.5 rounded-full text-[14px] hover:bg-[#e09c4d] transition-colors duration-200 tracking-wide shadow-md"
            >
              Contact Us
            </Link>
            <button
              aria-label="More details"
              className="w-12 h-12 rounded-full bg-[#FFB057] text-black flex items-center justify-center hover:bg-[#e09c4d] transition-colors duration-200 shadow-md"
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

      {/* Sliding Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#0a1118]/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-[340px] z-50 bg-[#FFB057] text-[#0a1118] p-6 pt-24 shadow-2xl lg:hidden transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Items */}
        <ul className="flex flex-col gap-5 mt-4">
          {navItems.map((item) => {
            const active = isRouteActive(item.path);
            return (
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
                      active ? "text-white" : "text-[#0a1118] hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-200 ${
                        openDropdown === item.name ? "rotate-180 text-white" : "text-[#0a1118]"
                      }`}
                    />
                  )}
                </div>

                {/* Mobile Accordion Submenu Items */}
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
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;