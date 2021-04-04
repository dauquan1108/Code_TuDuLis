import React, { Component } from "react";
import ThemeContext,  { themes } from "../conText/Theme-Context";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light
    };
  }
  toggleTheme = () => {
    this.setState((state) => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark
    }));
  };

  render() {
    return (
        <ThemeContext.Provider
          value={{
            theme: this.state.theme,
            toggleTheme: this.toggleTheme
          }}
        >
          {this.props.children}
        </ThemeContext.Provider>
    );
  }
}
