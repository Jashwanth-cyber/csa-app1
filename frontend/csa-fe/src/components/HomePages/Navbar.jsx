import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    
    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim()) {
        navigate(`/search/${searchTerm}`);
        }
    };
    
    return (
        <nav className="navbar flex justify-between items center bg-[#d7ff8c] fixed-top w-full z-10 px-4 py-4 md:px-4 py-2.5">
        <div className="navbar-container">
            <h1 className="pl-3 text-green-600 font-bold text-2xl cursor-pointer" onClick={()=>navigate("/")}>Trainix</h1>
        
          
        </div>
        <div className="flex gap-6 items-center">
            <p className="hidden md:block text-green-600 font-semibold cursor-pointer">About</p>
            <p className="hidden md:block text-green-600 font-semibold cursor-pointer">Courses</p>
            <p className="text-white font-semibold bg-green-600 p-2 rounded-lg hover:bg-green-300" onClick={()=> navigate("/choice")}>Register/Login</p>
        </div>
        </nav>
    );
    }
    export default Navbar;