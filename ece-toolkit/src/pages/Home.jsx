import Navbar from "../components/Navbar";
import OhmsLaw from "../components/OhmsLaw";
import RCTimeConstant from "../components/RCTimeConstant";
import BinaryConverter from "../components/BinaryConverter";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-8">
          Engineering Tools
        </h2>

        {/* Grid Layout */}
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <OhmsLaw />
            <RCTimeConstant />
            <BinaryConverter />
        </div>
      </div>
    </div>
  );
}