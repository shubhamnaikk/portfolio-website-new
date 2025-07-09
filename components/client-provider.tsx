"use client";
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes";
import { type ThemeProviderProps } from "next-themes";
import React from "react";

export function ThemeShortcutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { setTheme, theme } = useTheme();
  // Determine the effective theme (handles "system" option)
  const currentTheme = theme === "system" ? "dark" : theme;
  const isDarkMode = currentTheme === "dark";
  const toggleTheme = React.useCallback(() => {
    return isDarkMode ? setTheme("light") : setTheme("dark");
  }, [isDarkMode, setTheme]);
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "d" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleTheme();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleTheme]);
  return children;
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ThemeShortcutWrapper>{children}</ThemeShortcutWrapper>
    </NextThemesProvider>
  );
}