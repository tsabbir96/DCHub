import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import React from "react";

export const MyThemeContext = React.createContext();

 export const lightTheme = createMuiTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    background: {
      default: "#F5F5F5",
      paper: "#ffffff",
    },
    primary: {
      main: "#4360D6",
    },
    secondary: {
      main: "#6A12E8",
    },

    // , background: {default: '#f5f8fa'}
  },
});
const darkTheme = createMuiTheme({
  typography: {
    fontFamily: "'Poppins', sans-serif",
  },
  palette: {
    background: {
      default: "#1a1a24",
      paper: "#333339",
    },
    type: "dark",

    primary: {
      main: "#4360D6",
    },
    secondary: {
      main: "#21e6c1",
    },
  },
});

export const MyThemeProvider = ({ children }) => {
  const [isLightTheme, _setisLightTheme] = React.useState(
    Boolean(localStorage.getItem("isLightTheme"))
  );
  const setDarkTheme = (isDark) => {
    _setisLightTheme(isDark);
    if (isDark) {
      localStorage.setItem("isLightTheme", "true");
    } else {
      localStorage.removeItem("isLightTheme");
    }
  };
  return (
    <MyThemeContext.Provider value={[isLightTheme, setDarkTheme]}>
      <ThemeProvider theme={isLightTheme ?  lightTheme:darkTheme }>
        {children}
      </ThemeProvider>
    </MyThemeContext.Provider>
  );
};
export const useMyTheme = () => React.useContext(MyThemeContext);
