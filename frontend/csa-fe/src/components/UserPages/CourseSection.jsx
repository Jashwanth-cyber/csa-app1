import React, { useEffect, useState } from "react";
import UserNavbar from "./UserNavbar";

function CourseSection() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [purchaseMsg, setPurchaseMsg] = useState("");

  // Fetch courses on mount
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:3003/courses/preview", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        if (response.ok) {
          setCourses(data.courses || data);
        } else {
          setError(data.message || "Failed to fetch courses.");
        }
      } catch (err) {
        setError("Network error. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchCourses();
  }, []);

  // Handle course purchase
  const handlePurchase = async (courseId) => {
    setPurchaseMsg("");
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`http://localhost:3003/courses/purchase`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ courseId }),
      });
      const data = await response.json();
      if (response.ok) {
        setPurchaseMsg("Course purchased successfully!");
      } else {
        setPurchaseMsg(data.message || "Purchase failed. Please try again.");
      }
    } catch (err) {
      setPurchaseMsg("Network error. Please try again.");
    }
    // Optionally, clear the message after a few seconds
    setTimeout(() => setPurchaseMsg(""), 3000);
  };

  return (
    <>
      <UserNavbar />
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 px-4 py-10">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Available Courses
        </h2>
        {purchaseMsg && (
          <div className="mb-6 text-center">
            <span className="px-4 py-2 rounded-lg bg-green-200 text-green-800 font-semibold">
              {purchaseMsg}
            </span>
          </div>
        )}
        {loading ? (
          <div className="flex justify-center items-center h-40">
            <span className="text-green-700 font-semibold">Loading courses...</span>
          </div>
        ) : error ? (
          <div className="flex justify-center items-center h-40">
            <span className="text-red-600 font-semibold">{error}</span>
          </div>
        ) : (
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {courses.length === 0 ? (
              <div className="col-span-full text-center text-gray-600">
                No courses available.
              </div>
            ) : (
              courses.map((course) => (
                <div
                  key={course._id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center p-6 border-t-4 border-green-300"
                >
                  <img
                    src={
                      course.imageUrl ||
                      "https://img.icons8.com/color/96/000000/classroom.png"
                    }
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
                    {course.category || "General"}
                  </span>
                  <button
                    className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
                    onClick={() => handlePurchase(course._id)}
                  >
                    Purchase
                  </button>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default CourseSection;