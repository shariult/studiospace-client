"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { MoonSVG, SunSVG } from "../common/SVGIcons";

function NavToggle() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function themeChangeHandler(e: ChangeEvent<HTMLInputElement>) {
    setTheme(e.target.checked ? "dark" : "light");
  }

  return (
    <label className="swap swap-rotate mr-4">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={themeChangeHandler}
      />
      <SunSVG className="swap-off h-6 w-6 fill-current " />
      <MoonSVG className="swap-on h-6 w-6 fill-current" />
    </label>
  );
}

export default NavToggle;
