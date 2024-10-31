"use client";

import { useState } from "react";

export function Temperature({ temp, initialUnits = "C" }) {
  const [units, setWeatherUnits] = useState(initialUnits);
  let displayTemp = units === "C" ? temp : (temp * 9) / 5 + 32;

  function toggleUnits() {
    setWeatherUnits((prevUnits) => (units === "C" ? "F" : "C"));
  }

  return (
    <div className="flex items-center gap-4">
      <span class="Temperature">
        <strong>
          {" "}
          {parseInt(displayTemp)}&deg;{units}{" "}
        </strong>
      </span>
      <button
        onClick={toggleUnits}
        className="bg-green-500 rounded-lg px-2 py-3"
      >
        Change units: {units === "Celsius" ? "Farenheit" : "Celsius"}
      </button>
    </div>
  );
}
// ++ Try adding a button to convert between C and F temps
