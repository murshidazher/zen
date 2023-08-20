import {
  JetBrains_Mono as FontMono,
  Inter as FontSans,
} from "next/font/google";
import localFont from "next/font/local";

export const googleSansDisplay = localFont({
  variable: "--font-display",
  src: [
    {
      path: "../public/fonts/GoogleSansDisplay-Bold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const googleSans = localFont({
  variable: "--font-sans",
  src: [
    {
      path: "../public/fonts/GoogleSans-Bold.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});
