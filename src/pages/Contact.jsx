import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 to-purple-700 flex items-center justify-center px-4 sm:px-6 lg:px-16 py-16">
      <div className="max-w-5xl w-full bg-white rounded-xl shadow-xl p-8 sm:p-12 md:p-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-8 bg-gradient-to-r from-purple-700 via-purple-500 to-purple-700 bg-clip-text text-transparent">
          Get in Touch
        </h1>
        <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          Whether you have questions or want to discuss opportunities, our team is ready to assist you. Reach out to our HR or Coordinator directly.
        </p>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* HR Card */}
          <div className="p-6 sm:p-8 border border-purple-300 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 bg-white">
            <h2 className="text-xl sm:text-2xl font-semibold text-purple-800 mb-4">Human Resources</h2>
            <p className="text-gray-600 mb-2 text-sm sm:text-base">
              <span className="font-medium">Name:</span> Priya Sharma
            </p>
            <p className="flex items-center text-purple-700 font-medium hover:text-purple-900 transition-colors cursor-pointer text-sm sm:text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m8-4H8m8 8H8m2 4H6a2 2 0 01-2-2V6a2 2 0 012-2h8l6 6v8a2 2 0 01-2 2h-4z"
                />
              </svg>
              <a href="mailto:hr@company.com" className="underline">
                hr@company.com
              </a>
            </p>
          </div>

          {/* Coordinator Card */}
          <div className="p-6 sm:p-8 border border-purple-300 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 bg-white">
            <h2 className="text-xl sm:text-2xl font-semibold text-purple-800 mb-4">Coordinator</h2>
            <p className="text-gray-600 mb-2 text-sm sm:text-base">
              <span className="font-medium">Name:</span> Rohit Verma
            </p>
            <p className="flex items-center text-purple-700 font-medium hover:text-purple-900 transition-colors cursor-pointer text-sm sm:text-base">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 12H8m8-4H8m8 8H8m2 4H6a2 2 0 01-2-2V6a2 2 0 012-2h8l6 6v8a2 2 0 01-2 2h-4z"
                />
              </svg>
              <a href="mailto:coordinator@company.com" className="underline">
                coordinator@company.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
