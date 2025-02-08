
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded ${theme === "light" ? "bg-gray-300" : "bg-gray-800 text-white"}`}
    >
      Toggle to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggleButton;
