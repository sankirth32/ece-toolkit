import Navbar from "../components/Navbar";
import BinaryConverter from "../components/BinaryConverter";

export default function OhmsPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="flex justify-center items-center p-10">
        <BinaryConverter />
      </div>
    </div>
  );
}