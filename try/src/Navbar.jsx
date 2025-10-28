import React, { useState } from "react";

export default function Navbar() {
  const navitems = ["Home", "About", "Education", "Experience", "Portfolio", "ContactUs"];
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close mobile menu on click
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          onClick={() => handleScroll("home")}
          className="text-2xl font-bold text-[#00ffc6] tracking-wide cursor-pointer"
        >
          Amitesh Aggarwal
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8">
          {navitems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleScroll(item)}
                className="text-gray-300 hover:text-[#00ffc6] transition-colors duration-300 font-medium"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            className=" hover:text-[#00ffc6] transition duration-300 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden  bg-opacity-70 flex flex-col items-center gap-6 py-6">
          {navitems.map((item, index) => (
            <li key={index}>
              <button
                onClick={() => handleScroll(item)}
                className="backdrop-blur-md hover:text-[#00ffc6] transition-colors duration-300 font-medium text-lg"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
