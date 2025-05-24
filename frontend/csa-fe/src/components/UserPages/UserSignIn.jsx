import React, { useState } from "react";
import Navbar from "../HomePages/Navbar";
import { useNavigate } from "react-router-dom";

function UserSignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await fetch("http://localhost:3003/user/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        // User exists and credentials are correct
        localStorage.setItem("token", data.token);
        navigate("/user/dashboard");
      } else {
        // Show backend error message (e.g., user doesn't exist, wrong password, etc.)
        setError(data.message || "Sign in failed. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-100 to-green-300 px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-8 w-full max-w-md">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
            alt="User"
            className="w-24 h-24 mb-4 rounded-full border-4 border-green-200"
          />
          <h2 className="text-2xl font-bold text-green-700 mb-2">User Sign In</h2>
          {error && (
            <div className="mb-2 text-red-600 text-sm text-center">{error}</div>
          )}
          <form className="w-full flex flex-col gap-4 mt-4" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email"
              className="px-4 py-2 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="Password"
                className="px-4 py-2 rounded-lg border border-green-200 w-full focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <label className="flex items-center mt-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword((prev) => !prev)}
                  className="mr-2"
                />
                Show Password
              </label>
            </div>
            <button
              type="submit"
              className="mt-2 px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Sign In
            </button>
          </form>
          <p className="mt-6 text-gray-600 text-sm text-center">
            Not registered?{" "}
            <span
              className="text-green-700 font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/user/signup")}
            >
              Sign up here
            </span>
          </p>
        </div>
      </div>
    </>
  );
}

export default UserSignIn;