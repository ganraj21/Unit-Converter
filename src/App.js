import React, { useState } from "react";
const App = () => {
  const [value, setValue] = useState("");
  const [unit, setUnit] = useState("km");
  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSelect = (e) => {
    setUnit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (unit) {
      case "km":
        setResult(value * 0.621371);
        break;
      case "mi":
        setResult(value / 0.621371);
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full mx-auto p-10 h-screen flex flex-col items-center justify-center bg-gray-700">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-[320px] gap-3 flex flex-col"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="value">
            Value
          </label>
          <input
            type="number"
            id="value"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-solid"
            value={value}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="unit">
            Unit
          </label>
          <select
            className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
            id="unit"
            value={unit}
            onChange={handleSelect}
          >
            <option value="km">Kilometers</option>
            <option value="mi">Miles</option>
          </select>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            type="submit"
          >
            Convert
          </button>
        </div>
      </form>
      {result && (
        <div className="text-center mt-4">
          <p className="text-white font-bold">
            Result: {result.toFixed(2)} {unit === "km" ? "Miles" : "Kilometers"}
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
