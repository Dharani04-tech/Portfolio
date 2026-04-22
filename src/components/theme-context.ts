import { createContext } from "react";

export type Theme = "dark" | "light";

export type ThemeProviderState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

export const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined,
);
