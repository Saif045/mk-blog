"use client";
import { useEffect } from "react";
import { useDarkMode } from "usehooks-ts";

export default function useDarkSide() {
  const { isDarkMode, toggle, enable, disable } = useDarkMode();

  const colorTheme = isDarkMode ? "light" : "dark";
  const otherTheme = isDarkMode ? "dark" : "light";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(otherTheme);
  }, [isDarkMode, colorTheme, otherTheme]);
  return [isDarkMode, toggle];
}
