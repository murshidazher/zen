import type { FC } from "react";
import NextImage, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

const Image: FC<ImageProps> = ({ className, ...props }) => (
  <NextImage
    className={cn("select-none", className)}
    {...props}
    quality={100}
  />
);

export default Image;
