import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={handleClick}
      className="p-2 rounded-full transition bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? (
        <Sun className="text-yellow-400" />
      ) : (
        <Moon className="text-gray-800" />
      )}
    </button>
  );
};

export default DarkModeToggle;

