
import { useNavigate } from "react-router-dom";

function UserNavbar() {
    
    const navigate = useNavigate();
    
   
    
    return (
        <nav className="navbar flex justify-between items center bg-[#d7ff8c] fixed-top w-full z-10 px-4  md:px-4 py-2.5">
        <div className="navbar-container">
            <h1 className="pl-3 text-green-600 font-bold text-2xl cursor-pointer" onClick={()=>navigate("/user/dashboard")}>Trainix</h1>
        
          
        </div>
        <div className="flex gap-6 items-center">
            <p className="hidden md:block text-green-600 font-semibold cursor-pointer" onClick={()=>navigate("/user/dashboard/purchases")}>Your Purchases</p>
            <p className="hidden md:block text-green-600 font-semibold cursor-pointer" onClick={()=>navigate("/user/dashboard/courses")}>Courses</p>
            <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
            alt="User"
            className="w-12 h-12  rounded-full border-4 border-green-200 cursor-pointer"
            onClick={() => navigate("/user/dashboard/profile")}
          />
        </div>
        </nav>
    );
    }
    export default UserNavbar;