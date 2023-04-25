/* import React, { useContext, useState } from "react";

//export type lang = "en" | "es" | "pt";

type lang = "en" | "es" | "pt";

export const LanguageContext = React.createContext<lang>("en");
const LanguageUpdateContext = React.createContext();

export function useLanguage() {
    return useContext(LanguageContext);
}

export function useLanguageUpdate() {
    return useContext(LanguageUpdateContext);
}

export function LanguageProvider({ children }: { children: any }) { //
    const [language, setLanguage] = useState<lang>("en");

    function toggleLanguage(lang?: lang) {
        if(lang)
            setLanguage(lang);
        else
            setLanguage("en");
    }

    return (
        <LanguageContext.Provider value={language}>
            <LanguageUpdateContext.Provider value={toggleLanguage}>
                {children}
            </LanguageUpdateContext.Provider>
        </LanguageContext.Provider>
    );
} */

import React, { useContext, useState } from "react";

import { Languages } from "../types/languages";

export const LanguageContext = React.createContext<Languages>("en");
const LanguageUpdateContext = React.createContext({});

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useLanguageUpdate() {
  return useContext(LanguageUpdateContext);
}

export function LanguageProvider({ children }: { children: any }) {
  //
  const [language, setLanguage] = useState<Languages>("pt");

  function toggleLanguage(lang?: Languages) {
    if (lang) setLanguage(lang);
    else setLanguage("en");
  }

  return (
    <LanguageContext.Provider value={language}>
      <LanguageUpdateContext.Provider value={toggleLanguage}>
        {children}
      </LanguageUpdateContext.Provider>
    </LanguageContext.Provider>
  );
}
