import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import styled from "styled-components";
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

const ThemeToggle = styled.button`
  width: 70px;
  height: 33px;
  border-radius: 20px;
  position: relative;

  .sun {
    position: absolute;
    left: 3px;
    top: 2px;
    color: var(--hover-secundary);
    background-color: var(--primary-color);
    padding: 5px 4px;
    border: solid 1px;
    border-color: var(--hover-secundary);
    border-radius: 20px;
  }
  .moon {
    position: absolute;
    right: 3px;
    top: 2px;
    color: var(--secundary-color);
    background-color: var(--primary-color);
    padding: 5px 6px;
    border: solid 1px;
    border-color: var(--hover-secundary);
    border-radius: 20px;
  }

  @media(max-width: 900px){
    margin-right: 70px;
  }
`;

export { ButtonThemeToggle };
