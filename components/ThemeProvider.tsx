'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

export default function ThemeProvider() {
  const [theme, setTheme] = useState<Theme>('system');
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Apply theme to <html>
  const applyTheme = (themeValue: Theme) => {
    if (typeof window === 'undefined') return;
    const root = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const color =
      themeValue === 'system' ? (prefersDark ? 'dark' : 'light') : themeValue;

    root.classList.remove('light', 'dark');
    root.classList.add(color);
  };

  // Load theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    const initialTheme = storedTheme || 'system';
    setTheme(initialTheme);
    applyTheme(initialTheme);
    setMounted(true);
  }, []);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
    setMenuOpen(false);
  };

  if (!mounted) return <div style={{ visibility: 'hidden' }}></div>;

  const themeIcons = {
    light: <Sun className="w-5 h-5 mr-2" />,
    dark: <Moon className="w-5 h-5 mr-2" />,
    system: <Laptop className="w-5 h-5 mr-2" />,
  };

  return (
    <div className="">
      {/* Theme Toggle Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className=" neu-light dark:neu-dark neu-hover px-4 py-2 rounded-xl flex items-center font-medium shadow-md transition-5"
        aria-label="Toggle theme menu"
      >
        {themeIcons[theme]} {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </button>

      {/* Dropdown menu with transition */}
      <div
        className={`
          droptheme absolute right-0 mt-2 w-36 bg-[var(--glass-bg)] backdrop-blur-lg  border-[var(--glass-border)]  rounded-xl shadow-lg flex flex-col
          transform origin-top transition-all duration-300 ease-out
          ${menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
        `}
      >
        {(['light', 'dark', 'system'] as Theme[]).map((t) => (
          <button
            key={t}
            onClick={() => handleThemeChange(t)}
            className={`
               px-4 py-2 flex items-center gap-2 transition-5 hover:bg-[var(--glass-bg)] hover:text-[var(--accent)] 
              ${theme === t ? 'scale-105 shadow-md font-semibold' : ''}
            `}
          >
            {themeIcons[t]} {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Render children */}
    </div>
  );
}
