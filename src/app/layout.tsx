import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import "@/app/globals.css";
import { Header } from "@/components/header";
import HireBadge from "@/components/hire-badge";
import LocalTime from "@/components/local-time";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kevin Pruett",
  description: "Personal site and portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        <NextThemesProvider attribute="class" defaultTheme="light" enableSystem>
          <Header>
            <HireBadge />
            <LocalTime />
          </Header>
          {children}
          <Toaster position="bottom-right" />
        </NextThemesProvider>
      </body>
    </html>
  );
}
