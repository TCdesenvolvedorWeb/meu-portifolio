import { createContext, useState } from "react";

const themes = {
  darck: {
    background: "#202221",
    color: "var(--text-secundary)",
  },
  light: {
    background: "#5A636A",
    color: "#0D1F23",
    colorSecundary: "#132E35"
  },
};

const ThemeContext = createContext({});

const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.darck);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { themes, ThemeContext, ThemeProvider };
