"use client";
import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const buttonSize = 28;

export const ThemeToggleButton = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleClick = () => {
    // Not exactly the most React-y way to do things, but it works quite well :)
    document.getElementsByTagName("html").item(0)?.classList.toggle("dark");
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={() => handleClick()}
      className="p-1 border border-stone-800 dark:border-stone-100 rounded-lg hover:rounded-2xl hover:bg-stone-200 dark:hover:bg-stone-700 hover:text-amber-800 dark:hover:text-amber-200 transition-all"
    >
      {darkMode ? (
        <MdDarkMode size={buttonSize} />
      ) : (
        <MdLightMode size={buttonSize} />
      )}
    </button>
  );
};
