import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="w-full max-w-md bg-neutral-900 shadow-lg rounded-lg border border-gray-700 p-8">
        
        <div className="flex justify-center mb-6">
          <div className="text-3xl font-extrabold text-white">Admin</div>
        </div>

        <h2 className="text-xl font-semibold text-white mb-6 text-center">
          Sign in to your account
        </h2>

        <label className="block text-sm font-medium text-gray-300 mb-1">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          className="w-full px-4 py-2 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-white focus:border-white bg-black text-white placeholder-gray-500"
        />

        <label className="block text-sm font-medium text-gray-300 mb-1">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 border border-gray-600 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-white focus:border-white bg-black text-white placeholder-gray-500"
        />

        <button className="w-full bg-white hover:bg-gray-200 text-black font-semibold py-2 px-4 rounded-lg transition-all duration-300">
          Login
        </button>

        <div className="flex justify-between text-sm text-gray-400 mt-4">
          <Link to="/forget-password" className="hover:underline hover:text-white">
            Forgot Password?
          </Link>
          <Link to="/help" className="hover:underline hover:text-white">
            Help
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
