import React, { useEffect, useState } from "react";
import UserNavbar from "./UserNavbar";

export default function UserPurchases() {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPurchases = async () => {
      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:3003/user/purchases", {
          method: "GET",
          headers: {
            "token": `${token}`,
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch purchases.");
        }

        
        let courses = data.purchases || data;

      
        const uniqueCourses = [];
        const seenIds = new Set();
        for (const course of courses) {
          const id = course._id || (course.courseId && course.courseId._id) || course.courseId;
          if (!seenIds.has(id)) {
            uniqueCourses.push(course.courseId && course.courseId.title ? course.courseId : course);
            seenIds.add(id);
          }
        }

        setPurchases(uniqueCourses);
      } catch (err) {
        setError("Network error or invalid data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchPurchases();
  }, []);

  return (
    <>
      <UserNavbar />
      <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 px-4 py-10">
        <div className="w-full max-w-5xl mx-auto mt-10">
          <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
            Your Purchases
          </h1>
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <span className="text-green-700 font-semibold">
                Loading your purchases...
              </span>
            </div>
          ) : error ? (
            <div className="flex justify-center items-center h-40">
              <span className="text-red-600 font-semibold">{error}</span>
            </div>
          ) : purchases.length === 0 ? (
            <div className="col-span-full text-center text-gray-600">
              You have not purchased any courses yet.
            </div>
          ) : (
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {purchases.map((course) => (
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
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
