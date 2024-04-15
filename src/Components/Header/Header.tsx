import React, { useContext, useState } from "react";
import { themeContext, ThemeContextType } from "../../App";
import { GoSun, GoMoon } from "react-icons/go";
import { GoDownload } from "react-icons/go";
import CV from "../../cv.pdf";
const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const context = useContext(themeContext);

  //Handle toggle theme
  const HandleTogglTheme = () => {
    setDarkMode(!darkMode);
    context?.toggleTheme(context?.theme);
  };

  return (
    <div className="header-wrap container">
      <div className="download-wrap btn btn-primary">
        <a href={CV} download>
          DownLoad CV
        </a>
        <GoDownload className="download-icon" />
      </div>
      <div className="theme-change-wrap">
        <div className="theme-icon-outside" onClick={HandleTogglTheme}>
          <GoSun className={`theme-icon ${!darkMode ? "open" : "close"}`} />
          <GoMoon className={`theme-icon ${darkMode ? "open" : "close"}`} />
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default Header;
