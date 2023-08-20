"use client";

import { useRef, type FC, type ReactNode, ReactElement } from "react";
import tailwindConfig from "@/tailwind.config";
import { useEventListener } from "@react-hookz/web";
import { useTheme } from "next-themes";
import resolveConfig from "tailwindcss/resolveConfig";
import type { DefaultColors } from "tailwindcss/types/generated/colors";

const fullConfig = resolveConfig(tailwindConfig);

type AnchorHighlightProviderProps = {
  children: ReactNode;
};

const AnchorHighlightProvider: FC<AnchorHighlightProviderProps> = ({
  children,
}) => {
  const active = useRef<HTMLElement | null>(null);
  const { theme } = useTheme();

  useEventListener(
    typeof window === "undefined" ? null : window,
    "mouseover",
    (event: MouseEvent) => {
      if (event.target instanceof HTMLAnchorElement) {
        const parent = event.target.parentElement;

        if (!parent) return;

        const color = theme === "dark" ? 500 : 400;

        const isHighlightDisabled = event.target.className
          .split(" ")
          .includes("anchor-highlight-none");

        if (!isHighlightDisabled) {
          parent.style.color = (
            fullConfig.theme?.colors as unknown as DefaultColors
          ).neutral[color];
          active.current = parent;
        }
      }
    },
    { passive: true }
  );

  useEventListener(
    typeof window === "undefined" ? null : window,
    "mouseout",
    () => {
      if (active.current) {
        active.current.style.color = "inherit";
        active.current = null;
      }
    },
    { passive: true }
  );

  return <>{children}</>;
};

export default AnchorHighlightProvider;
