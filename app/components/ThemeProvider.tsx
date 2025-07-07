'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
  layoutStyle: string;
  setLayoutStyle: (style: string) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'theme-blue',
  setTheme: () => {},
  darkMode: false,
  setDarkMode: () => {},
  layoutStyle: 'classic',
  setLayoutStyle: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('theme-blue');
  const [darkMode, setDarkModeState] = useState(false);
  const [layoutStyle, setLayoutStyle] = useState('classic');
  const [mounted, setMounted] = useState(false);

  // Hydration guard
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load darkMode from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('darkMode');
    if (stored !== null) {
      setDarkModeState(stored === 'true');
    }
  }, []);

  // Persist darkMode to localStorage and update <html> class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode ? 'true' : 'false');
  }, [darkMode]);

  // Setter that works with localStorage
  const setDarkMode = (dark: boolean) => {
    setDarkModeState(dark);
  };

  if (!mounted) return null;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, darkMode, setDarkMode, layoutStyle, setLayoutStyle }}>
      {children}
    </ThemeContext.Provider>
  );
} 