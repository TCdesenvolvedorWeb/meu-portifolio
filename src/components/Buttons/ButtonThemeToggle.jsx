import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { ThemeToggle } from "../../assets/styles/ButtonThemeToggle";
import { ThemeContext } from "../../Context/ThemeToggle";
import { themes } from "../../Context/ThemeToggle";
import { IconContext } from "../../Context/IconToggle";

const ButtonThemeToggle = () => {
  const {currentIcon, setCurrentIcon} = useContext(IconContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const isSun0rMoon = () => {
    if (theme === themes.darck) {
      setTheme(themes.light);
      setCurrentIcon("light");
    } else {
        setTheme(themes.darck);
        setCurrentIcon("darck");
    }
  };

  return (
    <ThemeToggle onClick={() => isSun0rMoon()}>
      {currentIcon === "darck" ? (
        <FontAwesomeIcon className="moon" icon={faMoon} />
      ) : (
        <FontAwesomeIcon className="sun" icon={faSun} />
      )}
    </ThemeToggle>
  );
};

export { ButtonThemeToggle };