import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

import mechanicalImg from "../assets/mechanical.jpg";
import cseImg from "../assets/cse.jpg";
import electricalImg from "../assets/electrical.jpg";
import electronicsImg from "../assets/electronics.jpg";
import mbaImg from "../assets/mba.jpg";

const departments = [
  { name: "Mechanical", img: mechanicalImg },
  { name: "Computer Science (CSE)", img: cseImg },
  { name: "Electrical (EX)", img: electricalImg },
  { name: "Electronics & Communication (EC)", img: electronicsImg },
  { name: "MBA", img: mbaImg },
];

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-gray-200">
      <Navbar />

      <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-14">
        <section className="text-center px-2">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            About Aartech Solonics Limited
          </h2>
          <p className="max-w-4xl mx-auto leading-relaxed text-gray-300 text-base sm:text-lg">
            Aartech Solonics Limited is a pioneering company specializing in
            electrical and electronics engineering solutions. Our vision is to
            innovate, excel, and empower industries with top-notch products and
            services. Our intern cohort plays a vital role in nurturing future
            talent by providing them with exposure to real-world challenges.
          </p>
        </section>

        <section className="text-center px-2">
          <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
            Our Internship Program
          </h3>
          <p className="max-w-4xl mx-auto leading-relaxed text-gray-300 text-base sm:text-lg">
            Interns engage with real-world projects, gain hands-on experience
            with modern technologies, and learn industry best practices in a
            collaborative and supportive environment. We focus on skill
            development, teamwork, and innovation to prepare our interns for
            future leadership roles.
          </p>
        </section>

        <section>
          <h3 className="text-center text-2xl sm:text-3xl font-semibold text-white mb-8">
            Departments
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {departments.map(({ name, img }) => (
              <div
                key={name}
                className="rounded-lg bg-black border border-gray-700 shadow-sm overflow-hidden hover:shadow-md hover:border-gray-500 transition duration-200"
              >
                <img
                  src={img}
                  alt={name}
                  className="w-full h-40 object-cover"
                  loading="lazy"
                />
                <div className="bg-black text-white py-3 text-center text-base font-medium border-t border-gray-700">
                  {name}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
          <Link
            to="/home"
            className="inline-block bg-white text-black px-6 py-2 rounded-lg border border-gray-400 hover:bg-gray-200 transition text-base font-medium mt-8"
          >
            Return to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
