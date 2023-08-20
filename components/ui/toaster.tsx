"use client";

import React, { useEffect, useState } from "react";
import tailwindConfig from "@/tailwind.config";
import { useWindowSize } from "@react-hookz/web";
import { useTheme } from "next-themes";
import { Toaster } from "sonner";
import resolveConfig from "tailwindcss/resolveConfig";

import { Theme } from "@/components/theme-toggle";

const fullConfig = resolveConfig(tailwindConfig);

const mdWindowWidth = parseInt(
  (fullConfig.theme as unknown as any).screens["sm"].replace("px", "")
);

type Position =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center";

const getPosition = (winWidth: number): Position =>
  mdWindowWidth <= winWidth ? "bottom-right" : "top-center";

const ToasterProvider = () => {
  const { width: winWidth } = useWindowSize();
  const [position, setPosition] = useState<Position>(getPosition(winWidth));
  const { theme } = useTheme();

  useEffect(() => {
    if (
      (mdWindowWidth <= winWidth && position !== "bottom-right") ||
      (mdWindowWidth > winWidth && position !== "top-center")
    ) {
      setPosition(getPosition(winWidth));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getPosition(winWidth)]);

  return (
    <Toaster theme={theme as Theme} position={position} />
  );
};

export { toast } from "sonner";
export { ToasterProvider };
