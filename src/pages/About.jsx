import { Link } from "react-router-dom";

const departments = [
  {
    name: "Mechanical",
    img: "https://images.unsplash.com/photo-1581090700227-04c92b924fbf?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Computer Science (CSE)",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Electrical (EX)",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Electronics & Communication (EC)",
    img: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=400&q=80",
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Header */}
      <header className="bg-purple-700 text-white p-6 text-center font-extrabold text-4xl tracking-wide">
        Aartech Solonics Limited - Intern Cohort
      </header>

      {/* Main container */}
      <main className="flex-grow max-w-4xl mx-auto px-6 py-10 space-y-12 text-center">
        {/* About Section */}
        <section>
          <h2 className="text-3xl font-bold text-purple-700 mb-4">About Aartech Solonics Limited</h2>
          <p className="max-w-3xl mx-auto text-gray-800 leading-relaxed text-lg">
            Aartech Solonics Limited is a pioneering company specializing in electrical and electronics engineering solutions. We are
            committed to innovation and excellence, providing world-class products and services that empower industries and communities alike.
            Our new cohort of interns is a critical part of our vision to nurture talent and drive future growth.
          </p>
        </section>

        {/* Internship Program */}
        <section>
          <h3 className="text-2xl font-semibold text-purple-700 mb-3">Our Internship Program</h3>
          <p className="max-w-3xl mx-auto text-gray-800 leading-relaxed text-lg">
            The intern cohort engages with real-world projects, gaining hands-on experience in cutting-edge technologies and industry best practices.
            We encourage learning, collaboration, and creativity in a supportive environment.
          </p>
        </section>

        {/* Departments Section */}
        <section>
          <h3 className="text-2xl font-semibold text-purple-700 mb-8">Departments</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {departments.map(({ name, img }) => (
              <div
                key={name}
                className="rounded-lg shadow-lg overflow-hidden border border-purple-200"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                <div className="bg-purple-700 text-white py-3 text-lg font-semibold">{name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Return to Home button */}
        <Link
          to="/home"
          className="inline-block bg-purple-700 text-white px-8 py-3 rounded-full hover:bg-purple-800 transition text-lg font-semibold mt-8"
        >
          Return to Home
        </Link>
      </main>

      {/* Footer */}
      <footer className="bg-purple-100 border-t border-purple-300 p-5 text-center text-purple-700 text-sm font-medium">
        Frontend developed by <span className="font-semibold">Aman Tiwary</span> | Backend developed by{" "}
        <span className="font-semibold">Jitu Kumar</span>
      </footer>
    </div>
  );
};

export default About;
