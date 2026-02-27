import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">About ECE Toolkit</h2>

        <p className="text-gray-400 leading-7">
          ECE Toolkit is a web-based engineering utility platform
          designed for Electronics and Communication students.
          It provides useful calculators and tools to simplify
          academic and project work.
        </p>
      </div>
    </div>
  );
}