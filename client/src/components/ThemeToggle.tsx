import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="relative rounded-full w-9 h-9 p-0 overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <div className={`absolute transition-all duration-500 ease-in-out ${theme === "light" ? "-translate-y-10 opacity-0" : "translate-y-0 opacity-100"}`}>
          <Sun className="h-5 w-5 text-yellow-400" />
        </div>
        <div className={`absolute transition-all duration-500 ease-in-out ${theme === "light" ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <Moon className="h-5 w-5 text-indigo-400" />
        </div>
      </div>
      
      {/* Binary effect on toggle */}
      <div className="absolute inset-0 opacity-0 hover:opacity-20 pointer-events-none text-[7px] font-mono overflow-hidden">
        {theme === "dark" ? "01010" : "10101"}
      </div>
      
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;