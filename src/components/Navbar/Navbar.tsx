import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "Careers", path: "/careers" },
  ];

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 cursor-pointer">
          MyWebsite
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className="text-gray-700 font-medium hover:text-blue-600 transition duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
