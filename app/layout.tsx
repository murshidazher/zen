import "@/styles/globals.css";

import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import AnchorHighlightProvider from "@/components/ui/anchor-highlight-provider";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TailwindIndicator } from "@/components/ui/tailwind-indicator";
import { ToasterProvider } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ContactFormDialog from "@/components/contact-form-dialog";
import ProfileJsonLd from "@/components/profile-json-ld";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url ?? ""),
  keywords: siteConfig.keywords,
  authors: [
    {
      name: "murshidazher",
      url: siteConfig.url,
    },
  ],
  creator: "murshidazher",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@murshidazher",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang={siteConfig.locale} suppressHydrationWarning>
        <body
          className={cn(
            "bg-background min-h-screen font-sans antialiased",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <AnchorHighlightProvider>
              <ScrollArea className="h-screen">
                <TooltipProvider>{children}</TooltipProvider>
                <TailwindIndicator />
              </ScrollArea>
            </AnchorHighlightProvider>
            <ContactFormDialog />
            <ToasterProvider />
          </ThemeProvider>
          <ProfileJsonLd />
        </body>
      </html>
    </>
  );
}
