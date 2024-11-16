"use client";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const DarkMode: React.FC = () => {
  const [darkmode, setDarkmode] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkmode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkmode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkmode(!darkmode);
  };

  return (
    <button
      onClick={toggleDarkMode}
    >
      <div
        className={`w-8 h-8 flex items-center justify-center rounded-full transform transition-transform 
        ${darkmode ? "translate-x-0 bg-white" : "translate-x-0 bg-black"}`}
      >
        {darkmode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-white" />}
      </div>
      <span className="sr-only">Toggle Dark Mode</span>
    </button>
  );
};

export default DarkMode;
