import React from 'react';
import { Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, cycleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={cycleTheme}
      className={`group hidden items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-200 transition ${theme.header.themeButtonBorder} md:inline-flex`}
      aria-label={`Switch theme (current: ${theme.name})`}
    >
      <Palette className="h-4 w-4" />
      <span className="flex items-center gap-2">
        <span className="hidden sm:inline">Theme</span>
        <span className={`inline-flex h-4 w-10 items-center justify-center rounded-full bg-gradient-to-r ${theme.preview}`}>
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white">
            {theme.name.slice(0, 2)}
          </span>
        </span>
      </span>
    </button>
  );
}
