import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          ⚡ ECE Toolkit
        </h1>

        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-8">
          A collection of essential engineering calculators and tools 
          built using React, Vite, and Tailwind CSS.
        </p>

        <Link
          to="/tools"
          className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-xl text-lg font-semibold transition duration-300"
        >
          Explore Tools 🚀
        </Link>
      </section>

      {/* About Section */}
      <section className="bg-gray-900 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          About the Creator
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          I'm an Electronics and Communication Engineering student passionate about
          building practical tools and real-world engineering projects.
          This toolkit is designed to simplify common ECE calculations
          and make engineering more accessible.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500 text-sm bg-black">
        © {new Date().getFullYear()} ECE Toolkit | Built with React & Tailwind
      </footer>
    </div>
  );
}