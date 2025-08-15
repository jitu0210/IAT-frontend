import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-8">
      <div className="w-full max-w-3xl bg-neutral-900 shadow-lg rounded-lg border border-gray-700 p-8">
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Contact Us
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Have questions or need help? Reach out to our HR or Coordinator.
        </p>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* HR Contact */}
          <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-white transition-all">
            <h2 className="text-lg font-semibold text-blue-400 mb-2">
              Human Resources
            </h2>
            <p className="text-gray-300 mb-1">
              <span className="font-medium">Name:</span> Priya Sharma
            </p>
            <a
              href="mailto:hr@company.com"
              className="text-blue-300 hover:text-blue-200 text-sm"
            >
              hr@company.com
            </a>
          </div>

          
          <div className="bg-black border border-gray-700 rounded-lg p-6 hover:border-white transition-all">
            <h2 className="text-lg font-semibold text-blue-400 mb-2">
              Coordinator
            </h2>
            <p className="text-gray-300 mb-1">
              <span className="font-medium">Name:</span> Rohit Verma
            </p>
            <a
              href="mailto:coordinator@company.com"
              className="text-blue-300 hover:text-blue-200 text-sm"
            >
              coordinator@company.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
