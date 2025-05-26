import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LandingPage from './components/HomePages/LandingPage';
import RoleSelection from './components/HomePages/RoleSelection';
import UserSignIn from './components/UserPages/UserSignIn';
import UserSignUp from './components/UserPages/UserSignUp';
import AdminSignIn from './components/AdminPages/AdminSignIn';
import AdminSignUp from './components/AdminPages/AdminSignUp';
import UserDashboard from './components/UserPages/UserDashboard';
import CourseSection from './components/UserPages/CourseSection';
import UserPurchases from './components/UserPages/UserPurchases';
import UserProfile from './components/UserPages/UserProfile';
import AdminDashboard from './components/AdminPages/AdminDashboard';
import AdminCourses from './components/AdminPages/AdminCourses';
import AdminProfile from './components/AdminPages/AdminProfile';
function App() {

  return (
  
    <Router>  
      <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/choice" element={<RoleSelection/>} />
      <Route path="/courses" element={<h1>Courses</h1>} />
    
      <Route path="/admin" element={<h1>Admin</h1>} />
      <Route path="/admin/signup" element={<AdminSignUp/>} />
      <Route path="/admin/signin" element={<AdminSignIn/>} />     
      <Route path="/user" element={<h1>User</h1>} />  
      <Route path="/user/signup" element={<UserSignUp/>} />
      <Route path="/user/signin" element={<UserSignIn/>} />
      <Route path="/admin/dashboard" element={<AdminDashboard/>} />
      <Route path="/admin/dashboard/users" element={<h1>Admin Dashboard Users</h1>} />
      <Route path="/admin/dashboard/courses" element={<AdminCourses/>} />
      <Route path="/admin/dashboard/profile" element={<AdminProfile/>} />
      <Route path="/admin/dashboard/users/:id" element={<h1>Admin Dashboard User Details</h1>} />
      <Route path="/user/dashboard" element={<UserDashboard/>} />
      <Route path="/user/dashboard/courses" element={<CourseSection/>} />
      <Route path='/user/dashboard/purchases' element={<UserPurchases/>} />
      <Route path="/user/dashboard/courses/:id" element={<h1>User Dashboard Course Details</h1>} />
      <Route path="/user/dashboard/profile" element={<UserProfile/>} />
      </Routes>
      </Router>
)}

export default App
