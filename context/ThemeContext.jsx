"use client";

import { createContext, useEffect, useState, useContext } from "react";

/**
 * ================================
 * THEME CONTEXT (FIXED + CONSISTENT)
 * ================================
 */

const ThemeContext = createContext(null);

export const useTheme = () => useContext(ThemeContext);

/**
 * SCHOOL THEMES
 */
const SCHOOL_THEMES = {
  default: {
    name: "default",
    primary: ["#f97316", "#ec4899", "#ef4444"],
  },

  blue: {
    name: "blue",
    primary: ["#3b82f6", "#60a5fa", "#2563eb"],
  },

  green: {
    name: "green",
    primary: ["#22c55e", "#16a34a", "#15803d"],
  },

  purple: {
    name: "purple",
    primary: ["#a855f7", "#c084fc", "#7c3aed"],
  },

  dark: {
    name: "dark",
    primary: ["#111827", "#374151", "#0f172a"],
  },
};

/**
 * APPLY THEME
 */
const applyThemeToDOM = (theme) => {
  if (!theme) return;

  const root = document.documentElement;

  const [p1, p2, p3] = theme.primary;

  const gradient = `linear-gradient(135deg, ${p1}, ${p2}, ${p3})`;

  // COLORS
  root.style.setProperty("--primary-1", p1);
  root.style.setProperty("--primary-2", p2);
  root.style.setProperty("--primary-3", p3);

  // 🔥 SINGLE SOURCE OF TRUTH (IMPORTANT FIX)
  root.style.setProperty("--primary", gradient);
  root.style.setProperty("--primary-solid", gradient);
  root.style.setProperty("--gradient", gradient);
};

/**
 * PROVIDER
 */
export const ThemeProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState("default");

  useEffect(() => {
    const saved = localStorage.getItem("edubuddy-school-theme");

    const theme = SCHOOL_THEMES[saved] || SCHOOL_THEMES.default;

    setSelectedTheme(theme.name);
    applyThemeToDOM(theme);
  }, []);

  const changeTheme = (themeName) => {
    const theme = SCHOOL_THEMES[themeName] || SCHOOL_THEMES.default;

    setSelectedTheme(theme.name);
    localStorage.setItem("edubuddy-school-theme", theme.name);

    applyThemeToDOM(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        selectedTheme,
        changeTheme,
        themes: SCHOOL_THEMES,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext };
