import React, { useState } from "react";

function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode);
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
}

export default ThemeToggle;
