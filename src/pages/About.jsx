import { Link } from "react-router-dom";

// Departments data (images kept empty string for now)
const departments = [
  { name: "Mechanical", img: "" },
  { name: "Computer Science (CSE)", img: "" },
  { name: "Electrical (EX)", img: "" },
  { name: "Electronics & Communication (EC)", img: "" },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-200">
      {/* Header */}
      <header className="bg-black text-white p-5 text-center font-bold text-2xl sm:text-3xl tracking-wide border-b border-gray-700">
        Aartech Solonics Limited - Intern Cohort
      </header>

      {/* Main content */}
      <main className="flex-grow max-w-5xl mx-auto px-5 py-10 space-y-12">
        
        {/* About Section */}
        <section className="text-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
            About Aartech Solonics Limited
          </h2>
          <p className="max-w-3xl mx-auto leading-relaxed text-gray-300 text-base sm:text-lg">
            Aartech Solonics Limited is a pioneering company specializing in 
            electrical and electronics engineering solutions. Our vision is 
            to innovate, excel, and empower industries with top-notch products 
            and services. Our intern cohort plays a vital role in nurturing 
            future talent.
          </p>
        </section>

        {/* Internship Program */}
        <section className="text-center">
          <h3 className="text-xl sm:text-2xl font-semibold text-white mb-3">
            Our Internship Program
          </h3>
          <p className="max-w-3xl mx-auto leading-relaxed text-gray-300 text-base sm:text-lg">
            Interns engage with real-world projects, gain hands-on experience 
            with modern technologies, and learn industry best practices in a 
            collaborative and supportive environment.
          </p>
        </section>

        {/* Departments */}
        <section>
          <h3 className="text-center text-xl sm:text-2xl font-semibold text-white mb-8">
            Departments
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map(({ name, img }) => (
              <div
                key={name}
                className="rounded-lg bg-black border border-gray-700 shadow-sm overflow-hidden hover:shadow-md hover:border-gray-500 transition"
              >
                {img ? (
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-40 object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-40 flex items-center justify-center bg-gray-900 text-gray-500 text-sm">
                    Image not available
                  </div>
                )}
                <div className="bg-black text-white py-3 text-center text-base font-medium border-t border-gray-700">
                  {name}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Return Home */}
        <div className="text-center">
          <Link
            to="/home"
            className="inline-block bg-white text-black px-6 py-2 rounded-full border border-gray-400 hover:bg-gray-200 transition text-base font-medium mt-8"
          >
            Return to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-700 p-4 text-center text-gray-500 text-sm">
        Frontend: <span className="font-medium text-white">Aman Tiwary</span> | Backend:{" "}
        <span className="font-medium text-white">Jitu Kumar</span>
      </footer>
    </div>
  );
};

export default About;
