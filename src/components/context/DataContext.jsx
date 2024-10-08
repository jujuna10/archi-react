import React, { createContext, useEffect, useState } from "react";
import i18n from "../../i18n"; 

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("ka");

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
      i18n.changeLanguage(storedLanguage);
    } else {
      localStorage.setItem('language', language);
      i18n.changeLanguage(language);
    }
  }, [language]);

  const changeLanguage = (lng) => {
    setLanguage(lng);
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <LanguageContext.Provider value={{ changeLanguage,language }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
