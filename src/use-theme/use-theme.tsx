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

type ThemeContextType = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

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

  const toggleTheme = useCallback<ThemeContextType["toggleTheme"]>(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    const [added, removed] =
      theme === "light" ? [lightTheme, darkTheme] : [darkTheme, lightTheme];

    document.documentElement.classList.add(added);
    document.documentElement.classList.remove(removed);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
