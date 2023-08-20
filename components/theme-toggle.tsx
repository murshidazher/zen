"use client";

import type { FC } from "react";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Tooltip } from "@/components/ui/tooltip";

export type Theme = "light" | "dark";

const ThemeToggle: FC = () => {
  const { setTheme, theme } = useTheme();
  const Component = theme === "dark" ? Icons.sun : Icons.moon;

  const handleThemeChange = () => {
    if (typeof window === "undefined") return;

    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (!theme) {
      setTheme(systemTheme ? "dark" : "light");
      return;
    }

    setTheme(getConverseTheme());
  };

  const getConverseTheme = (): string => (theme === "dark" ? "light" : "dark");

  return (
    <Tooltip content={`Toggle ${getConverseTheme()} mode`}>
      <button
        type="button"
        className={cn(
          "rounded p-2",
          "hover:bg-neutral-100 dark:hover:bg-neutral-800"
        )}
        onClick={handleThemeChange}
        aria-label={`Toggle ${getConverseTheme()} mode`}
      >
        <Component width={16} height={16} />
      </button>
    </Tooltip>
  );
};

export default ThemeToggle;
