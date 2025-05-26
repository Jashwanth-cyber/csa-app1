import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";

export default function AdminDashboard() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    category: "",
  });
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setError("");
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("http://localhost:3003/admin/course", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "token": `${token}`,
        },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      if (response.ok) {
        setMsg("Course created successfully!");
        setForm({
          title: "",
          description: "",
          imageUrl: "",
          price: "",
          category: "",
        });
      } else {
        setError(data.message || "Failed to create course.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div >
      <AdminNavbar />
      <div className="container mx-auto mt-16 p-4">
        <h1 className="text-3xl font-bold text-green-600 mb-6">Admin Dashboard</h1>
        <p className="text-gray-700 mb-8">
          Welcome to the admin dashboard. Here you can manage users, courses, and more.
        </p>

        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Create a New Course</h2>
          {msg && <div className="mb-4 text-green-700 font-semibold">{msg}</div>}
          {error && <div className="mb-4 text-red-600 font-semibold">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Course Title"
              className="w-full border rounded-lg px-3 py-2"
              required
            />
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Course Description"
              className="w-full border rounded-lg px-3 py-2"
              required
            />
            <input
              type="text"
              name="imageUrl"
              value={form.imageUrl}
              onChange={handleChange}
              placeholder="Image URL"
              className="w-full border rounded-lg px-3 py-2"
            />
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Price"
              className="w-full border rounded-lg px-3 py-2"
              min="0"
            />
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Category"
              className="w-full border rounded-lg px-3 py-2"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
            >
              Create Course
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}