"use client";

import { useState } from "react";
import { useEmojiContext } from "../context/EmojiContext"
function EmojiChanger() {
  const { emoji, setEmoji } = useEmojiContext();

  return (
    <div className="EmojiChanger componentBox">
      That makes me: {emoji}
      <div className="space-x-4">
        <button
          className="bg-blue-500 rounded-xl text-white py-3 mx-4"
          onClick={() => setEmoji("(˶˃ ᵕ ˂˶)")}
        >
          Shy
        </button>
        <button
          className="bg-blue-500 rounded-xl text-white py-3 mx-4"
          onClick={() => setEmoji("( ｡ •̀ ⤙ •́ ｡ )")}
        >
          Mad
        </button>
        <button
          className="bg-blue-500 rounded-xl text-white py-3 mx-4"
          onClick={() => setEmoji("(╥﹏╥)")}
        >
          Sad
        </button>
      </div>
    </div>
  );
}

export { EmojiChanger };