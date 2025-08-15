import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white select-none">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-gray-800">
        
        {/* Company Info */}
        <div className="space-y-3">
          <h2 className="text-xl font-bold">Aartech Solonics Limited</h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Empowering innovation across industries with cutting-edge technology
            and sustainable solutions for a better tomorrow.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a
                href="/about"
                className="hover:text-white transition-colors duration-200"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-white transition-colors duration-200"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/help"
                className="hover:text-white transition-colors duration-200"
              >
                Help
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="space-y-3">
          <h2 className="text-lg font-semibold">Get in Touch</h2>
          <p className="text-gray-400 text-sm">
            Email:{" "}
            <a
              href="mailto:info@aartechsolonics.com"
              className="hover:text-white transition-colors duration-200"
            >
              info@aartechsolonics.com
            </a>
          </p>
          <p className="text-gray-400 text-sm">
            Phone:{" "}
            <a
              href="tel:+91987XXXXXXX"
              className="hover:text-white transition-colors duration-200"
            >
              +91 987XX XXXXX
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-neutral-900 text-gray-400 text-center py-4 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Aartech Solonics Limited | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
