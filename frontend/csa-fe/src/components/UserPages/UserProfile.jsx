import React, { useEffect, useState } from "react";
import UserNavbar from "./UserNavbar";
import { useNavigate } from "react-router-dom";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("token");
        // Fetch user details from backend
        const response = await fetch("http://localhost:3003/user/me", {
          method: "GET",
          headers: {
            "token": `${token}`,
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (response.ok && data.user) {
          setUser(data.user);
        } else if (response.ok) {
          setUser(data); // fallback if backend returns user object directly
        } else {
          setError(data.message || "Could not load user details.");
        }
      } catch (err) {
        setError("Network error. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/user/signin");
  };

  return (
    <>
      <UserNavbar />
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center px-4 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full border-t-4 border-green-300">
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">User Profile</h2>
          {loading ? (
            <div className="flex justify-center items-center h-32">
              <span className="text-green-700 font-semibold">Loading...</span>
            </div>
          ) : error ? (
            <div className="text-red-600 font-semibold text-center">{error}</div>
          ) : user ? (
            <>
             <div className="mb-4 flex justify-center">
                 <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
            alt="User"
            className="w-20 h-20 mb-4 rounded-full border-4 border-green-200 group-hover:scale-105 transition-transform text-center"
          />
              </div>
              <div className="mb-4">
                <span className="font-semibold text-green-800">Name:</span>{" "}
                {user.firstname} {user.lastname}
              </div>
              <div className="mb-4">
                <span className="font-semibold text-green-800">Email:</span>{" "}
                {user.email}
              </div>
            </>
          ) : (
            <div className="text-gray-600 text-center">No user data found.</div>
          )}
          <button
            onClick={handleLogout}
            className="w-full px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}