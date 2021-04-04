import React from "react";
export const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
    button: "blue"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
    button: "red"
  }
};
 const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {}
});

export default ThemeContext;