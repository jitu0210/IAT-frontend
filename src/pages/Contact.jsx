import React from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

const Contact = () => {
  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-3xl bg-neutral-900 shadow-lg rounded-lg border border-gray-700 p-8">
          <h1 className="text-3xl font-bold text-white text-center mb-6">
            Contact Us
          </h1>
          <p className="text-gray-400 text-center mb-8">
            Have questions or need help? Reach out to our HR or Coordinator.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-white transition-all">
              <h2 className="text-lg font-semibold text-gray-200 mb-2">
                Human Resources
              </h2>
              <p className="text-gray-300 mb-1">
                <span className="font-medium">Acronym:</span> SAY
              </p>
              <a
                href="mailto:hr@company.com"
                className="text-blue-400 hover:text-white text-sm"
              >
                hr@company.com
              </a>
            </div>

            <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-white transition-all">
              <h2 className="text-lg font-semibold text-gray-200 mb-2">
                Coordinator
              </h2>
              <p className="text-gray-300 mb-1">
                <span className="font-medium">Acronym:</span> MST
              </p>
              <a
                href="mailto:coordinator@company.com"
                className="text-blue-400 hover:text-white text-sm"
              >
                coordinator@company.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
