import React from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

function RoleSelection() {
  const navigate = useNavigate();

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-green-100 to-green-300 px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-8 text-center">
        Select Your Role
      </h2>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl justify-center items-center">
        {/* Admin Card */}
        <div
          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-8 w-full md:w-1/2 cursor-pointer group"
          onClick={() => navigate("/admin/signin")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Admin"
            className="w-28 h-28 mb-4 rounded-full border-4 border-green-200 group-hover:scale-105 transition-transform"
          />
          <h3 className="text-xl font-semibold text-green-800 mb-2">Admin</h3>
          <p className="text-gray-500 text-center">
            Manage users, courses, and platform settings.
          </p>
          <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
            Sign in as Admin
          </button>
        </div>
        {/* User Card */}
        <div
          className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-8 w-full md:w-1/2 cursor-pointer group"
          onClick={() => navigate("/user/signin")}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
            alt="User"
            className="w-28 h-28 mb-4 rounded-full border-4 border-green-200 group-hover:scale-105 transition-transform"
          />
          <h3 className="text-xl font-semibold text-green-800 mb-2">User</h3>
          <p className="text-gray-500 text-center">
            Access courses, track progress, and learn new skills.
          </p>
          <button className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition">
            Sign in as User
          </button>
        </div>
      </div>
    </div>
    </>
  );
}

export default RoleSelection;