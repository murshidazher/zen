import { cn } from "@/lib/utils";

interface IndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {}

export function Indicator({ className }: IndicatorProps) {
  return (
    <span
      aria-label="location-indicator"
      className={cn(
        "absolute right-0 top-1 flex h-3 w-3 animate-bounce items-center justify-center",
        className
      )}
    >
      <span
        className={`absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75`}
      />
      <span
        className={`relative inline-flex h-2 w-2 rounded-full bg-green-500`}
      />
    </span>
  );
}
