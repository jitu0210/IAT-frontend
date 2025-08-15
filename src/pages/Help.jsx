import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-lg bg-neutral-900 shadow-lg rounded-lg border border-gray-700 p-8 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">Need Help?</h1>

        <p className="text-gray-300 mb-6 leading-relaxed">
          For any issues related to the{" "}
          <span className="font-semibold text-white">Admin Portal</span>,
          including login problems, account access, or technical difficulties,
          please contact our backend administrator.
        </p>

        {/* Left-aligned details box */}
        <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6 text-left">
          <h2 className="text-lg font-semibold text-white mb-1">
            Backend Developer
          </h2>
          <p className="text-gray-300 font-medium">Jitu Kumar</p>
          <p className="text-sm text-gray-400 mt-2">
            Email:{" "}
            <a
              href="mailto:jitukumar63766@gmail.com"
              className="text-blue-400 hover:underline"
            >
              jitukumar63766@gmail.com
            </a>
          </p>
          <p className="text-sm text-gray-400">
            Phone:{" "}
            <a
              href="tel:+91620XXXXXXX"
              className="text-blue-400 hover:underline"
            >
              +91 620XX XXXXX
            </a>
          </p>
        </div>

        <Link
          to="/"
          className="inline-block bg-white hover:bg-gray-200 text-black px-6 py-2 rounded-lg transition-all duration-300 font-semibold"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default Help;
