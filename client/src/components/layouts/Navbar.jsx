import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";


const Navbar = () => {
  // humburgen btn 
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      
      {/* Top Row */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo - hide on mobile */}
        <div className=" md:block text-xl font-bold text-blue-600">
          ExamPortal
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/exams">Upcoming Exams</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li>
            <Link
              to="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Signup
            </Link>
          </li>
        </ul>

        {/* Hamburger - only mobile */}
        <div className="md:hidden ml-auto">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Outside flex row) */}
      <div
        className={`md:hidden overflow-hidden  transition-all duration-300 ease-in-out  ${
          isOpen ? "max-h-96 w-full opacity-100 py-4" : "max-h-0 opacity-1"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 text-gray-700 font-medium">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/exams" onClick={() => setIsOpen(false)}>Upcoming Exams</Link></li>
          <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>
          <li>
            <Link
              to="/signup"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Signup
            </Link>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;