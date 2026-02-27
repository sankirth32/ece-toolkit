import { useState } from "react";

export default function RCTimeConstant() {
  const [resistance, setResistance] = useState("");
  const [capacitance, setCapacitance] = useState("");
  const [tau, setTau] = useState(null);

  const calculateTau = () => {
    if (resistance && capacitance) {
      setTau((resistance * capacitance).toExponential(3));
    }
  };

  return (
    <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md">
      <h2 className="text-2xl font-semibold mb-6 text-blue-400">
        ⏱ RC Time Constant
      </h2>

      <div className="space-y-4">
        <input
          type="number"
          placeholder="Resistance (Ω)"
          value={resistance}
          onChange={(e) => setResistance(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Capacitance (F)"
          value={capacitance}
          onChange={(e) => setCapacitance(e.target.value)}
          className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          onClick={calculateTau}
          className="w-full bg-blue-600 hover:bg-blue-700 transition duration-200 p-3 rounded-lg font-semibold"
        >
          Calculate τ
        </button>
      </div>

      {tau !== null && (
        <div className="mt-6 text-center">
          <p className="text-lg">
            Time Constant =
            <span className="text-green-400 font-bold"> {tau} s</span>
          </p>
        </div>
      )}
    </div>
  );
}