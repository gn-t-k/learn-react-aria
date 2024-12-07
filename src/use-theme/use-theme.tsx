import {
  createContext,
  FC,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { darkTheme, lightTheme } from "../styles/theme.css";

type UseTheme = () => ThemeContextType;
export const useTheme: UseTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeContextType["theme"]>("light");

  const toggleTheme: ThemeContextType["toggleTheme"] = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    if (theme === "light") {
      document.documentElement.classList.add(lightTheme);
      document.documentElement.classList.remove(darkTheme);
    } else {
      document.documentElement.classList.add(darkTheme);
      document.documentElement.classList.remove(lightTheme);
    }

    return () => {
      if (theme === "light") {
        document.documentElement.classList.remove(lightTheme);
      } else {
        document.documentElement.classList.remove(darkTheme);
      }
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
