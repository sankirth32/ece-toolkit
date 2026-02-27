import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-400">
          ⚡ ECE Toolkit
        </h1>

        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-400">
            Home
          </Link>
          <Link to="/tools" className="hover:text-blue-400">
            Tools
          </Link>
          <Link to="/about" className="hover:text-blue-400">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}