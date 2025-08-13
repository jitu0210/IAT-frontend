import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="p-4 bg-purple-700 text-white flex justify-between items-center relative">
      <div className="text-xl md:text-3xl font-bold">Intern</div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-6 text-sm md:text-base">
        <Link
          to="/about"
          className="hover:bg-purple-800 rounded px-3 py-1 transition-colors"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:bg-purple-800 rounded px-3 py-1 transition-colors"
        >
          Contact
        </Link>
      </nav>

      {/* Mobile Hamburger */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col space-y-1.5 w-5 h-5"
        aria-label="Toggle menu"
      >
        <span
          className={`block h-0.5 bg-white transition-transform origin-center ${
            menuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block h-0.5 bg-white transition-opacity ${
            menuOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`block h-0.5 bg-white transition-transform origin-center ${
            menuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>

      {/* Slide-down mobile menu */}
      <div
        className="overflow-hidden transition-[height] duration-300 md:hidden bg-purple-700 text-white text-sm rounded-b absolute top-full left-0 right-0 z-10"
        style={{
          height: menuOpen ? "96px" : "0px",
        }}
      >
        <nav className="flex flex-col">
          <Link
            to="/about"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 hover:bg-purple-800 transition-colors rounded"
          >
            About
          </Link>
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="px-4 py-3 hover:bg-purple-800 transition-colors rounded"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
