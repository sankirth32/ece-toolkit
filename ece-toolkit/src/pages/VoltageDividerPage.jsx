import Navbar from "../components/Navbar";
import VoltageDivider from "../components/VoltageDivider";

export default function VoltageDividerPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <div className="flex justify-center items-center p-10">
        <VoltageDivider />
      </div>
    </div>
  );
}