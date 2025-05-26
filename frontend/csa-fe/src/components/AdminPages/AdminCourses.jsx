import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";

export default function AdminCourses() {
  const [courses, setCourses] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  // Fetch all courses created by admin
  useEffect(() => {
    const fetchCourses = async () => {
      setMsg("");
      setError("");
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:3003/admin/course/bulk", {
          headers: {
            "Content-Type": "application/json",
            "token": `${token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setCourses(data.courses || []);
        } else {
          setError(data.message || "Failed to fetch courses.");
        }
      } catch (err) {
        setError("Network error. Please try again.");
      }
    };
    fetchCourses();
  }, []);

 
  const handleEdit = (course) => {
    setEditingId(course._id);
    setEditForm({
      title: course.title,
      description: course.description,
      imageUrl: course.imageUrl,
      price: course.price,
      category: course.category,
    });
    setMsg("");
    setError("");
  };

  
  const handleEditChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  
  const handleSave = async (courseId) => {
    setMsg("");
    setError("");
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:3003/admin/course/${courseId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "token": `${token}`,
        },
        body: JSON.stringify(editForm),
      });
      const data = await response.json();
      if (response.ok) {
        setMsg("Course updated successfully!");
        setCourses((prev) =>
          prev.map((c) => (c._id === courseId ? { ...c, ...editForm } : c))
        );
        setEditingId(null);
      } else {
        setError(data.message || "Failed to update course.");
      }
    } catch (err) {
      setError("Network error. Please try again.");
    }
  };

  
  const handleCancel = () => {
    setEditingId(null);
    setEditForm({});
    setMsg("");
    setError("");
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <AdminNavbar />
      <div className="container mx-auto mt-16 p-4">
        <h1 className="text-3xl font-bold text-green-600 mb-6">Manage Courses</h1>
        {msg && <div className="mb-4 text-green-700 font-semibold">{msg}</div>}
        {error && <div className="mb-4 text-red-600 font-semibold">{error}</div>}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {courses.length === 0 ? (
            <div className="col-span-full text-center text-gray-600">
              No courses found.
            </div>
          ) : (
            courses.map((course) =>
              editingId === course._id ? (
                <div
                  key={course._id}
                  className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-6 border-t-4 border-green-300"
                >
                  <input
                    type="text"
                    name="title"
                    value={editForm.title}
                    onChange={handleEditChange}
                    className="w-full border rounded-lg px-3 py-2 mb-2"
                  />
                  <textarea
                    name="description"
                    value={editForm.description}
                    onChange={handleEditChange}
                    className="w-full border rounded-lg px-3 py-2 mb-2"
                  />
                  <input
                    type="text"
                    name="imageUrl"
                    value={editForm.imageUrl}
                    onChange={handleEditChange}
                    className="w-full border rounded-lg px-3 py-2 mb-2"
                  />
                  <input
                    type="number"
                    name="price"
                    value={editForm.price}
                    onChange={handleEditChange}
                    className="w-full border rounded-lg px-3 py-2 mb-2"
                  />
                  <input
                    type="text"
                    name="category"
                    value={editForm.category}
                    onChange={handleEditChange}
                    className="w-full border rounded-lg px-3 py-2 mb-2"
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => handleSave(course._id)}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
                    >
                      Save
                    </button>
                    <button
                      onClick={handleCancel}
                      className="px-4 py-2 bg-gray-400 text-white rounded-lg font-semibold hover:bg-gray-500 transition"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  key={course._id}
                  className="bg-white rounded-2xl shadow-lg flex flex-col items-center p-6 border-t-4 border-green-300"
                >
                  <img
                    src={course.imageUrl || "https://img.icons8.com/color/96/000000/classroom.png"}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold text-green-800 mb-2 text-center">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 text-center mb-4 line-clamp-3">
                    {course.description}
                  </p>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    {course.price ? `₹${course.price}` : "Free"}
                  </span>
                  <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">
                    {course.category || "General"}
                  </span>
                  <button
                    className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                    onClick={() => handleEdit(course)}
                  >
                    Edit
                  </button>
                </div>
              )
            )
          )}
        </div>
      </div>
    </div>
  );
}