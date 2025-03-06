
import { useState, useEffect } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  
  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);
  
  if (!mounted) return null;
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  return (
    <button
      onClick={toggleTheme}
      className="btn-hover rounded-full p-2 bg-secondary text-foreground"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6 overflow-hidden">
        <Sun className={`absolute transition-all duration-300 ${theme === 'dark' ? 'opacity-0 -rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} size={24} />
        <Moon className={`absolute transition-all duration-300 ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-0'}`} size={24} />
      </div>
    </button>
  );
};

export default ThemeToggle;
