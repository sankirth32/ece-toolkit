import { useState } from "react";
import Navbar from "../components/Navbar";
import ToolCard from "../components/ToolCard";

export default function Tools() {
  const [search, setSearch] = useState("");

  const tools = [
    {
      title: "Ohm's Law Calculator",
      description: "Calculate voltage using V = I × R",
      link: "/tools/ohms",
    },
    {
      title: "RC Time Constant",
      description: "Calculate τ = R × C",
      link: "/tools/rc",
    },
    {
      title: "Binary Converter",
      description: "Convert between Binary and Decimal",
      link: "/tools/binary",
    },
  ];

  const filteredTools = tools.filter((tool) =>
    tool.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />

      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">
          Engineering Tools
        </h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-8 p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredTools.map((tool, index) => (
            <ToolCard
              key={index}
              title={tool.title}
              description={tool.description}
              link={tool.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}