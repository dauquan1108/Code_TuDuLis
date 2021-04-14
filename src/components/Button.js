import ThemeContext from "../conText/Theme-Context";

function ThemeTogglerButton() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <button onClick={toggleTheme} style={{ backgroundColor: theme.button }}>
         Click
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

export default ThemeTogglerButton;
