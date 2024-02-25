import { createContext, useContext, useState } from "react";

export const languageContext = createContext();

export const getLanguageValue = () => {
  const language = useContext(languageContext); // Using useContext within a functional component
  return language;
};

export const LanguageContextProvider = ({ children }) => { // Accepting children as props
  const [language, setLanguage] = useState("English");

  return (
    <languageContext.Provider value={{ language, setLanguage }}> {/* Providing both language and setLanguage */}
      {children} {/* Wrapping children within the provider */}
    </languageContext.Provider>
  );
};
