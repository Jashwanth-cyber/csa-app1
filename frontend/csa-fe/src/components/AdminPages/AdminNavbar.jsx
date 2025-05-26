
import { useNavigate } from "react-router-dom";

function AdminNavbar() {
    
    const navigate = useNavigate();
    
   
    
    return (
        <nav className="navbar flex justify-between items center bg-[#d7ff8c] fixed-top w-full z-10 px-4  md:px-4 py-2.5">
        <div className="navbar-container">
            <h1 className="pl-3 text-green-600 font-bold text-2xl cursor-pointer" onClick={()=>navigate("/admin/dashboard")}>Trainix</h1>
        
          
        </div>
        <div className="flex gap-6 items-center">
            <p className="hidden md:block text-green-600 font-semibold cursor-pointer" onClick={()=>navigate("/admin/dashboard/courses")}>Your courses</p>
            <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="User"
            className="w-12 h-12  rounded-full border-4 border-green-200 cursor-pointer"
            onClick={() => navigate("/admin/dashboard/profile")}
          />
        </div>
        </nav>
    );
    }
    export default AdminNavbar;