import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-700 px-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg border border-purple-200 p-8 text-center">
        {/* Header */}
        <h1 className="text-2xl font-bold text-purple-700 mb-4">
          Need Help?
        </h1>

        {/* Message */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          For any issues related to the <span className="font-semibold text-purple-700">Admin Portal</span>, 
          including login problems, account access, or technical difficulties, please contact our backend administrator.
        </p>

        {/* Contact Card */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-6">
          <h2 className="text-lg font-semibold text-purple-700">Backend Developer</h2>
          <p className="text-gray-800 font-medium">Jitu Kumar</p>
          <p className="text-sm text-gray-600">
            Email: <a href="mailto:jitu@example.com" className="text-purple-600 hover:underline">jitu@example.com</a>
          </p>
          <p className="text-sm text-gray-600">
            Phone: <a href="tel:+911234567890" className="text-purple-600 hover:underline">+91 12345 67890</a>
          </p>
        </div>

        {/* Back to Login */}
        <Link
          to="/"
          className="inline-block bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-lg transition-all duration-300 font-semibold"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
};

export default Help;
