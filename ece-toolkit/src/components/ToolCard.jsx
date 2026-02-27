import { Link } from "react-router-dom";

export default function ToolCard({ title, description, link }) {
  return (
    <Link
      to={link}
      className="bg-gray-900 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 hover:scale-105"
    >
      <h3 className="text-xl font-semibold text-blue-400 mb-2">
        {title}
      </h3>
      <p className="text-gray-400 text-sm">
        {description}
      </p>
    </Link>
  );
}