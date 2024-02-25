import { createContext, useContext, useState } from "react";

export const themeContext = createContext();

export const getThemeValue = () => {
  const theme = useContext(themeContext); // Using useContext within a functional component
  return theme;
};

export const ThemeContextProvider = ({ children }) => { // Accepting children as props
  const [theme, setTheme] = useState("light");

  return (
    <themeContext.Provider value={{ theme, setTheme }}> {/* Providing both theme and setTheme */}
      {children} {/* Wrapping children within the provider */}
    </themeContext.Provider>
  );
};
