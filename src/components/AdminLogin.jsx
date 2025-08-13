import { Link } from "react-router-dom";

const AdminLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-700 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg border border-purple-200 p-8">
        
        <div className="flex justify-center mb-6">
          <div className="text-3xl font-extrabold text-purple-700">Admin</div>
        </div>

       
        <h2 className="text-xl font-semibold text-purple-800 mb-6 text-center">
          Sign in to your account
        </h2>

        
        <label className="block text-sm font-medium text-purple-700 mb-1">Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          className="w-full px-4 py-2 border border-purple-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-purple-900 placeholder-purple-400"
        />

        
        <label className="block text-sm font-medium text-purple-700 mb-1">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-2 border border-purple-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-purple-900 placeholder-purple-400"
        />

        
        <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">
          Login
        </button>

        
        <div className="flex justify-between text-sm text-purple-600 mt-4">
          <Link to="/forget-password" className="hover:underline">
            Forgot Password?
          </Link>
          <Link to="/help" className="hover:underline">
            Help
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
