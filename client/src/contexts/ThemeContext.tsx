import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";

// Define the context type
type ThemeContextType = {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  toggleTheme: () => void;
};

// Create the context with default values
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => null,
  toggleTheme: () => null,
});

// Provider component
export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");

  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Update document root class when theme changes
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
  }, [theme]);

  // Check system preference on mount
  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(systemPrefersDark ? "dark" : "light");
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the context
export const useTheme = () => useContext(ThemeContext);