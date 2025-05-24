import UserNavbar from "./UserNavbar";

export default function UserDashboard() {
    return (
        <div>
            <UserNavbar />
            <div className="flex flex-col items-center h-screen">
                <h1 className="text-4xl font-bold mb-4">Welcome to Your Dashboard</h1>
                <p className="text-lg">Here you can manage your courses and profile.</p>
            </div>
        </div>
    );
}