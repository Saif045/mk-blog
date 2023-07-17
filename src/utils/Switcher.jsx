"use client";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useWindowSize } from "usehooks-ts";
import useDarkSide from "./useDarkSide";

export default function Switcher({ hideText }) {
  const [isDarkMode, toggle] = useDarkSide();
  const { width, height } = useWindowSize();

  return (
    <>
      <DarkModeSwitch
        moonColor={Number(width) > 640 ? "#fff" : "#000"}
        sunColor={Number(width) > 640 ? "#000" : "#fff"}
        checked={isDarkMode}
        onChange={toggle}
        size={30}
      />

      {!hideText && (
        <span onClick={toggle}>{isDarkMode ? "Dark" : "Light"}</span>
      )}
    </>
  );
}
