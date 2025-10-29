import { useEffect } from "react";
import { Code, User, Trophy } from "lucide-react";

export default function Home() {

  useEffect(() => {
    // Auto-scroll after 3 seconds
    const timer = setTimeout(() => {
      window.scrollTo({
        top: window.innerHeight, // scrolls exactly one viewport height
        behavior: "smooth",
      });
    }, 3000);

    // Clean up on component unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-gray-950 flex flex-col items-center justify-center text-center px-4">
      {/* Icons */}
      {/* Main Heading */}
      <div className="space-y-4 mb-12">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Crafting Ideas Into
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Games & Apps
        </h1>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-purple-500 bg-clip-text text-transparent leading-tight">
          Explore my Portfolio
        </h2>
      </div>

      {/* Optional: Button (commented in your code) */}
      {/* <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-200 hover:scale-105">
        Get Started
      </Button> */}
    </div>
  );
}
