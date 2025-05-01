import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md px-8 py-4 flex items-center justify-between">
      {/* Logo */}
      <div className="text-xl font-bold text-gray-800">
        UniCommute
      </div>

      {/* Menu Items */}
      <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <li><a href="#about" className="hover:text-blue-600 transition">About Us</a></li>
        <li><a href="#services" className="hover:text-blue-600 transition">Services</a></li>
        <li><a href="#careers" className="hover:text-blue-600 transition">Careers</a></li>
        <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
      </ul>

      {/* CTA Button */}
      <a
        href="#get-started"
        className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
      >
        Get Started
      </a>

      {/* Mobile Menu Button (optional) */}
      <div className="md:hidden text-2xl">☰</div>
    </nav>
  );
};

export default Navbar;