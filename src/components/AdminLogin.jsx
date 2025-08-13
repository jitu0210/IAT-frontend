const AdminLogin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 to-purple-400 p-4">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-sm border-2 border-purple-700">
        <h1 className="text-3xl font-bold text-purple-700 text-center mb-6">
          Admin Login
        </h1>

        {/* Username Field */}
        <input
          type="text"
          placeholder="Username"
          className="w-full px-4 py-2 border border-purple-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        {/* Password Field */}
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 border border-purple-300 rounded-lg mb-6 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        {/* Login Button */}
        <button className="w-full bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-4 rounded-lg transition">
          Login
        </button>

        <p className="text-xs text-center text-purple-700 mt-4">
          Frontend by <span className="font-bold">Aman Tiwary</span> | Backend by{" "}
          <span className="font-bold">Jitu Kumar</span>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
