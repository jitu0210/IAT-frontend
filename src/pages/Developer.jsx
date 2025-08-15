import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Developer = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow flex items-center justify-center px-4 py-4">
        <div className="w-full max-w-5xl bg-neutral-900 shadow-lg rounded-lg border border-gray-700 p-8">
          <h1 className="text-3xl font-bold text-center mb-8">
            Meet the Developers
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-black border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">Backend Developer</h2>
              <p className="text-gray-300 font-medium mb-4">Jitu Kumar</p>
              <p className="text-sm text-gray-400 mb-1">
                Email:{" "}
                <a
                  href="mailto:jitukumar63766@gmail.com"
                  className="text-blue-400 hover:underline"
                >
                  jitukumar63766@gmail.com
                </a>
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Phone:{" "}
                <a
                  href="tel:+91620XXXXXXX"
                  className="text-blue-400 hover:underline"
                >
                  +91 620XX XXXXX
                </a>
              </p>
              <h3 className="text-lg font-semibold mb-2">Tools Used</h3>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Mongoose</li>
                <li>MongoDB (Database)</li>
                <li>REST API Development</li>
              </ul>
            </div>

            <div className="bg-black border border-gray-700 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-2">Frontend Developer</h2>
              <p className="text-gray-300 font-medium mb-4">Aman Tiwary</p>
              <p className="text-sm text-gray-400 mb-1">
                Email:{" "}
                <a
                  href="mailto:aman@example.com"
                  className="text-blue-400 hover:underline"
                >
                  aman@example.com
                </a>
              </p>
              <p className="text-sm text-gray-400 mb-4">
                Phone:{" "}
                <a
                  href="tel:+9198XXXXXXX"
                  className="text-blue-400 hover:underline"
                >
                  +91 98XX XXXXX
                </a>
              </p>
              <h3 className="text-lg font-semibold mb-2">Tools Used</h3>
              <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                <li>React.js</li>
                <li>Tailwind CSS</li>
                <li>Framer Motion</li>
                <li>Axios</li>
                <li>Responsive Web Design</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              to="/home"
              className="inline-block bg-white hover:bg-gray-200 text-black px-6 py-2 rounded-lg transition-all duration-300 font-semibold"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Developer;
