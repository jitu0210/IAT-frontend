import { Link } from "react-router-dom";

const Forgetpassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-lg bg-neutral-900 shadow-lg rounded-lg border border-gray-700 p-8 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">
          Forgot Your Credentials?
        </h1>

        <p className="text-gray-300 mb-6 leading-relaxed">
          If you have forgotten your{" "}
          <span className="font-semibold text-white">Admin Username</span> or{" "}
          <span className="font-semibold text-white">Password</span>, please
          contact the backend administrator for assistance.
        </p>

        <div className="bg-black border border-gray-700 rounded-lg p-4 mb-6 text-left space-y-2">
          <h2 className="text-lg font-semibold text-white">
            Backend Developer
          </h2>
          <p className="text-gray-300 font-medium">Jitu Kumar</p>
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-white">Email:</span>{" "}
            <a
              href="mailto:jitukumar63766@gmail.com"
              className="text-blue-400 hover:underline"
            >
              jitukumar63766@gmail.com
            </a>
          </p>
          <p className="text-sm text-gray-400">
            <span className="font-semibold text-white">Phone:</span>{" "}
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

export default Forgetpassword;
