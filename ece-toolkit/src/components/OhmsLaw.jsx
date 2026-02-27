import { useState } from "react";

export default function OhmsLaw() {
  const [current, setCurrent] = useState("");
  const [resistance, setResistance] = useState("");
  const [voltage, setVoltage] = useState(null);

  const calculateVoltage = () => {
    if (current && resistance) {
      setVoltage((current * resistance).toFixed(2));
    }
  };

  return (
    <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-6 text-blue-400">
        ⚡ Ohm's Law Calculator
      </h2>

      <div className="space-y-4">
        <input
          type="number"
          placeholder="Current (A)"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Resistance (Ω)"
          value={resistance}
          onChange={(e) => setResistance(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={calculateVoltage}
          className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 p-3 rounded-lg font-semibold"
        >
          Calculate Voltage
        </button>
      </div>

      {voltage !== null && (
        <div className="mt-6 text-center">
          <p className="text-lg">
            Voltage =
            <span className="text-green-400 font-bold"> {voltage} V</span>
          </p>
        </div>
      )}
    </div>
  );
}