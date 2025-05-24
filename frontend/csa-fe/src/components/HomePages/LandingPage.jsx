import Navbar from "./Navbar";

export default function LandingPage() {
    return (
        <div>
            <Navbar />
            <div class="relative w-full h-screen overflow-hidden">

                <video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover">
                    <source src="/path-to-your-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>


                <div class="absolute inset-0 bg-black/40"></div>


                <div class="relative flex items-center justify-center h-full text-white text-4xl font-bold">
                    Welcome to My Website
                </div>
            </div>

        </div>
    )
}