"use client";
import React, { useState, useContext } from "react";

const EmojiContext = React.createContext();

export const EmojiProvider = ({ children }) => {
  const [emoji, setEmoji] = useState("◝(ᵔᗜᵔ)◜");

  return (
    <EmojiContext.Provider value={{ emoji, setEmoji }}>
      {children}
    </EmojiContext.Provider>
  );
};
export const useEmojiContext = () => {
  return useContext(EmojiContext);
};
