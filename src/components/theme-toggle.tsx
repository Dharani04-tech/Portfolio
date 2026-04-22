import { MoonStar, SunMedium } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      aria-label="Toggle theme"
      className="h-11 w-11 rounded-full"
      onClick={toggleTheme}
      variant="secondary"
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <SunMedium
          className={`absolute h-5 w-5 transition-all duration-300 ${
            theme === "dark" ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
          }`}
        />
        <MoonStar
          className={`absolute h-5 w-5 transition-all duration-300 ${
            theme === "dark"
              ? "scale-100 rotate-0 opacity-100"
              : "scale-0 -rotate-90 opacity-0"
          }`}
        />
      </span>
    </Button>
  );
}
