'use client';
import { useEffect } from 'react';
import { useTheme } from './ThemeProvider';

export default function BodyClassProvider({ children }: { children: React.ReactNode }) {
  const { theme, darkMode } = useTheme();

  useEffect(() => {
    document.body.classList.remove('theme-blue', 'theme-green', 'theme-dark');
    document.body.classList.add(theme);
    if (darkMode) {
      document.body.classList.add('theme-dark');
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('theme-dark');
      document.body.classList.remove('dark');
    }
  }, [theme, darkMode]);

  return <>{children}</>;
} 