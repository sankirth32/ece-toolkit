import Navbar from "../components/Navbar";
import RCTimeConstant from "../components/RCTimeConstant";

export default function OhmsPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="flex justify-center items-center p-10">
        <RCTimeConstant />
      </div>
    </div>
  );
}