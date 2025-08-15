import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/iat.png"; // Your logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-black text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo (clickable to /home) */}
        <Link to="/home" className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto object-contain" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/developer" className="hover:text-gray-300 transition-colors">
            Developer
          </Link>
          <Link to="/about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-300 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <nav className="flex flex-col space-y-2 px-4 py-3">
            <Link
              to="/developer"
              className="hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Developer
            </Link>
            <Link
              to="/about"
              className="hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-gray-300"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
