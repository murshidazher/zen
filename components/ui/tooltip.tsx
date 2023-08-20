"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
  type ReactNode,
} from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

const { TooltipProvider } = TooltipPrimitive;

type TooltipProps = ComponentPropsWithoutRef<typeof TooltipPrimitive.Root> & {
  content: string;
  children: ReactNode;
};

const Tooltip = forwardRef<
  ElementRef<typeof TooltipPrimitive.Root>,
  TooltipProps
>(({ children, content, ...props }, ref) => {
  return (
    <TooltipPrimitive.Root delayDuration={0} {...props}>
      <TooltipPrimitive.Trigger ref={ref} asChild>
        {children}
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content
        sideOffset={4}
        side={"right"}
        className={cn(
          "animate-in fade-in-50 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1 z-50 overflow-hidden rounded-md border border-neutral-100 bg-white px-3 py-1.5 text-xs text-neutral-700 shadow-md dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-400"
        )}
      >
        {content}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
});

Tooltip.displayName = TooltipPrimitive.Tooltip.displayName;

export { Tooltip, TooltipProvider };
