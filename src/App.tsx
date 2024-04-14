import React, { useState, useEffect } from "react";
import Layout from "./Pages/Layout/Layout";
import { createContext } from "react";
import "./Assets/Styles/Main.scss";
export type ThemeContextType = {
  theme: string;
  toggleTheme: (t: string) => void;
};
export const themeContext = createContext<ThemeContextType | null>(null);

function App() {
  const [theme, setTheme] = useState<string>("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return (
    <div className="App">
      <themeContext.Provider value={{ theme, toggleTheme }}>
        <Layout />
      </themeContext.Provider>
    </div>
  );
}

export default App;
