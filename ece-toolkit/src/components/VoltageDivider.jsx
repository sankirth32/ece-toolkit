import { useState } from "react";

export default function VoltageDivider() {
  const [vin, setVin] = useState("");
  const [r1, setR1] = useState("");
  const [r2, setR2] = useState("");
  const [vout, setVout] = useState(null);

  const calculate = () => {
    if (!vin || !r1 || !r2) return;

    const result = vin * (r2 / (parseFloat(r1) + parseFloat(r2)));
    setVout(result.toFixed(2));
  };

  return (
    <div className="bg-gray-900 p-6 rounded-2xl shadow-md w-full max-w-md">
      <h2 className="text-xl font-semibold mb-4 text-blue-400">
        Voltage Divider Calculator
      </h2>

      <input
        type="number"
        placeholder="Input Voltage (V)"
        value={vin}
        onChange={(e) => setVin(e.target.value)}
        className="w-full p-2 mb-3 rounded bg-gray-800 border border-gray-700"
      />

      <input
        type="number"
        placeholder="R1 (Ω)"
        value={r1}
        onChange={(e) => setR1(e.target.value)}
        className="w-full p-2 mb-3 rounded bg-gray-800 border border-gray-700"
      />

      <input
        type="number"
        placeholder="R2 (Ω)"
        value={r2}
        onChange={(e) => setR2(e.target.value)}
        className="w-full p-2 mb-4 rounded bg-gray-800 border border-gray-700"
      />

      <button
        onClick={calculate}
        className="bg-blue-500 hover:bg-blue-600 w-full py-2 rounded"
      >
        Calculate
      </button>

      {vout && (
        <p className="mt-4 text-green-400">
          Output Voltage: {vout} V
        </p>
      )}
    </div>
  );
}