import { useState } from "react";

export default function BinaryConverter() {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");

  const convertToDecimal = () => {
    if (binary !== "") {
      setDecimal(parseInt(binary, 2));
    }
  };

  const convertToBinary = () => {
    if (decimal !== "") {
      setBinary(Number(decimal).toString(2));
    }
  };

  return (
    <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-6 text-blue-400">
        🔢 Binary ↔ Decimal
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Binary"
          value={binary}
          onChange={(e) => setBinary(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={convertToDecimal}
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded-lg"
        >
          Convert to Decimal
        </button>

        <input
          type="number"
          placeholder="Decimal"
          value={decimal}
          onChange={(e) => setDecimal(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={convertToBinary}
          className="w-full bg-green-600 hover:bg-green-700 p-2 rounded-lg"
        >
          Convert to Binary
        </button>
      </div>
    </div>
  );
}