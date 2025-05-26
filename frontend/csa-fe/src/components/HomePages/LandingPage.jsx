import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LandingPage() {
    return (
        <div>
            <Navbar />
            <div class="relative w-full h-screen overflow-hidden">

                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
  <source src="https://res.cloudinary.com/dxjna0dxi/video/upload/v1748241767/videoplayback_zncmrt.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>


                <div class="absolute inset-0 bg-black/40"></div>


                <div class="relative flex flex-col items-center justify-center h-full text-white text-4xl font-bold">
                    <h1 className="text-5xl md:text-7xl font-bold text-center">More than a creator.
You're a business.</h1>
                    <p className="mt-4 text-lg md:text-2xl text-center">Create, share, and monetize your courses with ease.</p>
                   
                </div>
            </div>
            <div className="bg-white py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Why Choose Trainix?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-4">Easy Course Creation</h3>
                            <p>Create courses in minutes with our intuitive editor.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-4">Secure Payments</h3>
                            <p>Get paid instantly with our secure payment gateway.</p>
                        </div>
                        <div className="text-center">
                            <h3 className="text-xl font-semibold mb-4">Global Reach</h3>
                            <p>Reach learners worldwide with our platform.</p>
                        </div>
                    </div>
                </div>
        </div>
        <Footer />
        </div>
    )
}