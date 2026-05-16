import React, { createContext, useContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

type DarkModeContextType = {
  isDarkMode: boolean;
  toggleMode: () => void;
};

const DarkModeContext = createContext<DarkModeContextType | undefined>(
  undefined,
);

function DarkModeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>(
    window.matchMedia(`(prefers-color-scheme : dark)`).matches,
    "isDarkMode",
  );

  function toggleMode() {
    setIsDarkMode((isDarkMode: boolean) => !isDarkMode);
  }

  useEffect(
    function () {
      if (isDarkMode) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    [isDarkMode],
  );

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const context = useContext(DarkModeContext);

  if (context === undefined)
    throw new Error("Dark Mode is used outside of its provider");

  return context;
}
// eslint-disable-next-line react-refresh/only-export-components
export { DarkModeProvider, useDarkMode };
