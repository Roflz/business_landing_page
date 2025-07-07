'use client';
import React, { createContext, useContext, useState } from 'react';

// Theme context
const ThemeContext = createContext({
  theme: 'theme-blue',
  setTheme: (theme: string) => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('theme-blue');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
} 