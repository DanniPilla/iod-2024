"use client";

import { useState } from "react";

// save in MoodChanger.jsx
function MoodChanger() {
  const [mood, setMood] = useState("happy");
  const handleWinLotto = () => {
    setMood("ecstatic");
    console.log("MOOD:", mood);
  };

  // Calls setMood with a conditional state value
  const handleRunningLate = () => {
    let newMood = "stressed";
    if (mood === "stressed") newMood = "really stressed";
    else if (mood === "really stressed") newMood = "giving up";
    setMood(newMood);
  };

  return (
    <div className="MoodChanger componentBox">
      Current Mood: {mood}
      <div className="space-x-4">
        <button
          className="bg-blue-500 rounded-xl text-white py-3 mx-4"
          onClick={() => setMood("hungry")}
        >
          No lunch
        </button>
        <button
          className="bg-blue-500 rounded-xl text-white py-3 mx-4"
          onClick={() => setMood("tired")}
        >
          No sleep
        </button>
        <button
          className="bg-blue-500 rounded-xl text-white py-3 mx-4"
          onClick={() => setMood("happy")}
        >
          had coffee
        </button>
        <button
          className="bg-blue-500 rounded-xl text-white py-3 mx-4"
          onClick={handleRunningLate}
        >
          Running Late
        </button>
        <button
          className="bg-blue-500 rounded-xl text-white py-3 mx-4"
          onClick={handleWinLotto}
        >
          Woohoo
        </button>
      </div>
    </div>
  );
}

export default MoodChanger;
