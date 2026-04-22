import { useEffect, useState, type ReactNode } from "react";

import {
  ThemeProviderContext,
  type Theme,
} from "@/components/theme-context";

type ThemeProviderProps = {
  children: ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "folio-theme",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem(storageKey) as Theme | null;
    return storedTheme ?? defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.style.colorScheme = theme;
    localStorage.setItem(storageKey, theme);
  }, [storageKey, theme]);

  return (
    <ThemeProviderContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark")),
      }}
    >
      {children}
    </ThemeProviderContext.Provider>
  );
}
