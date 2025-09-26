import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Theme, themes } from '../theme/themes';

type ThemeContextValue = {
  theme: Theme;
  themes: Theme[];
  setThemeById: (id: Theme['id']) => void;
  cycleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const storageKey = 'portfolio-theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [activeTheme, setActiveTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        const found = themes.find((theme) => theme.id === stored);
        if (found) {
          return found;
        }
      }
    }
    return themes[0];
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(storageKey, activeTheme.id);
    }
  }, [activeTheme.id]);

  const value = useMemo(
    () => ({
      theme: activeTheme,
      themes,
      setThemeById: (id: Theme['id']) => {
        const next = themes.find((theme) => theme.id === id);
        if (next) {
          setActiveTheme(next);
        }
      },
      cycleTheme: () => {
        const currentIndex = themes.findIndex((theme) => theme.id === activeTheme.id);
        const nextTheme = themes[(currentIndex + 1) % themes.length];
        setActiveTheme(nextTheme);
      }
    }),
    [activeTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
