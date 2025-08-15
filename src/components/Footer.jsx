const Footer = () => {
  return (
    <footer className="bg-black text-white select-none">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-3">Aartech Solonics Limited</h2>
          <p className="text-gray-400 text-sm">
            Empowering innovation across industries with cutting-edge technology
            and sustainable solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <a href="/about" className="hover:text-white transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition-colors">
                Contact
              </a>
            </li>
            <li>
              <a href="/help" className="hover:text-white transition-colors">
                Help
              </a>
            </li>
          </ul>
        </div>

        
      </div>

      {/* Bottom Bar */}
      <div className="bg-neutral-900 text-gray-400 text-center py-3 text-sm">
        © {new Date().getFullYear()} Aartech Solonics Limited | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
