import { useState } from "react";
import { loginUser } from "../middleware/Middleware";
import { Link, useNavigate } from "react-router-dom";
import logovd from "../../../assets/logovidefly.png";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    const userData = await loginUser(username, password);

    if (userData) {
      navigate("/");
    } else {
      setError("Username dan Password tidak sesuai");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
        {/* Bagian Gambar */}
        <div className="w-1/2 h-full">
          <img
            src={logovd}
            alt="Videfly"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Bagian Form Login */}
        <div className="w-1/2 bg-white flex flex-col items-center justify-center p-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 font-poppins">
            Login Videfly
          </h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {error && (
            <p className="text-red-500 text-sm mb-1 text-center">{error}</p>
          )}

          <button
            onClick={handleLogin}
            className="w-full bg-[#6636D2] text-white font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200 mb-4 font-poppins"
          >
            Login
          </button>

          <button className="w-full bg-white border border-gray-300 text-gray-700 font-semibold py-2 font-poppins rounded-md hover:bg-gray-100 transition duration-200 flex items-center justify-center gap-2">
            <img
              src="https://img.icons8.com/color/24/000000/google-logo.png"
              alt="Google Logo"
            />
            Login with Google
          </button>

          <span className="text-sm mt-4 text-center font-poppins">
            Don't have an account?{" "}
            <Link to="/register">
              <span className="text-[#6636D2] font-poppins">Register</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
